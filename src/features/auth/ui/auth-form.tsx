"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { authContent } from "../model/auth-content";
import type { AuthMode } from "../model/types";

type AuthFormProps = {
  mode: AuthMode;
};

type LegalDocument = "terms" | "privacy";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const leadingIconClass =
  "absolute left-3 top-1/2 text-[18px] text-[#45474c] -translate-y-1/2";

const legalContent: Record<LegalDocument, { title: string; body: string[] }> = {
  terms: {
    title: "Kullanım Koşulları",
    body: [
      "Vettingo hesabınızı oluşturduğunuzda platformu işe alım, aday değerlendirme ve kariyer süreçlerini yönetmek amacıyla kullanmayı kabul etmiş olursunuz. Hesap bilgilerinizin doğru, güncel ve size ait olması gerekir; yanlış veya başka bir kişiye ait bilgilerle hesap açılması durumunda ilgili hesabın erişimi sınırlandırılabilir.",
      "Platform içinde paylaşılan ilan, başvuru, özgeçmiş, değerlendirme notu ve benzeri içeriklerden ilgili kullanıcı sorumludur. Yanıltıcı bilgi, izinsiz veri paylaşımı, üçüncü kişilerin haklarını ihlal eden içerik veya sistemi kötüye kullanmaya yönelik işlem yapılmamalıdır.",
      "İşveren hesapları, aday verilerini yalnızca açık işe alım süreçleri ve meşru değerlendirme amaçları için kullanmalıdır. Adaylarla ilgili bilgiler kurum dışına aktarılırken ilgili kişinin mahremiyetine, yürürlükteki mevzuata ve şirket içi yetkilendirme kurallarına uygun hareket edilmelidir.",
      "Aday hesapları, başvuru sırasında paylaştıkları belgelerin ve açıklamaların güncel olmasına özen göstermelidir. Başvuru süreçlerinde kullanılan değerlendirme sonuçları tek başına kesin işe alım kararı anlamına gelmez; nihai karar ilgili işverenin kendi süreçleri kapsamında verilir.",
      "Vettingo, hizmetin güvenliğini ve sürekliliğini korumak için teknik bakım, güvenlik kontrolleri ve gerekli ürün güncellemeleri yapabilir. Bu çalışmalar sırasında kısa süreli erişim kısıtları oluşabilir; planlı bakım durumlarında kullanıcıların makul şekilde bilgilendirilmesi hedeflenir.",
      "Hizmetleri kullanmaya devam etmeniz, yürürlükteki koşulları kabul ettiğiniz anlamına gelir. Koşullarda esaslı bir değişiklik olursa kullanıcıların bunu makul şekilde fark edebileceği kanallardan bilgilendirme yapılır.",
    ],
  },
  privacy: {
    title: "Gizlilik Politikası",
    body: [
      "Vettingo, hesabınızı oluşturmak, başvurularınızı yönetmek, işveren ve aday deneyimini iyileştirmek ve güvenli oturum sağlamak için ad, soyad, e-posta, hesap türü ve platform kullanım bilgileri gibi verileri işler.",
      "Özgeçmiş, başvuru geçmişi, değerlendirme notları ve yetenek eşleştirme çıktıları yalnızca ilgili işe alım süreçleri kapsamında kullanılır. Bu bilgiler, yetkisiz kişilerle satılmaz veya bağımsız ticari amaçlarla paylaşılmaz.",
      "Platformda yapılan işlemler, hizmet kalitesini korumak, hataları gidermek, güvenlik olaylarını araştırmak ve kullanıcı desteği sağlamak amacıyla kayıt altına alınabilir. Bu kayıtlar ihtiyaçla sınırlı şekilde tutulur ve erişim yetkileri kontrollü biçimde yönetilir.",
      "Verileriniz, hizmet sağlayıcılarımızın teknik altyapısı üzerinde güvenlik önlemleriyle saklanabilir. Erişim yetkileri sınırlı tutulur ve kayıtlar yalnızca işin gerektirdiği kişiler tarafından görüntülenebilir.",
      "Çerezler ve benzeri teknolojiler; oturumunuzu açık tutmak, tercihlerinizi hatırlamak ve platformun nasıl kullanıldığını anlamak için kullanılabilir. Zorunlu olmayan izleme tercihleri için tarayıcı ayarlarınızdan veya sunulan tercih araçlarından seçim yapabilirsiniz.",
      "Hesap bilgilerinizin düzeltilmesini, silinmesini veya işleme amaçları hakkında bilgi verilmesini talep edebilirsiniz. Bu talepler, kimlik doğrulaması yapıldıktan sonra makul süre içinde değerlendirilir.",
    ],
  },
};

function AuthTab({
  href,
  active,
  children,
}: {
  href: typeof ROUTES.login | typeof ROUTES.register;
  active: boolean;
  children: string;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex-1 rounded-md px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.05em] transition-all ${
        active
          ? "border border-[#c5c6cd]/70 bg-white text-[#091426] shadow-sm"
          : "text-[#45474c] hover:bg-[#dce9ff]/70 hover:text-[#0b1c30]"
      }`}
    >
      {children}
    </Link>
  );
}

function SelectChevron() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#45474c]"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function LegalModal({ document, onClose }: { document: LegalDocument; onClose: () => void }) {
  const content = legalContent[document];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#091426]/45 px-4 py-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative max-h-[82vh] w-full max-w-lg overflow-y-auto rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-[0_24px_80px_rgba(9,20,38,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Pencereyi kapat"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded border border-[#c5c6cd] text-[#45474c] transition-colors hover:bg-[#eff4ff] hover:text-[#091426]"
          onClick={onClose}
          type="button"
        >
          <MaterialIcon className="text-[18px]">close</MaterialIcon>
        </button>
        <h3 className="pr-10 text-xl font-semibold tracking-[-0.01em] text-[#091426]">
          {content.title}
        </h3>
        <div className="mt-4 space-y-4 text-sm leading-6 text-[#45474c]">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [activeLegalDocument, setActiveLegalDocument] = useState<LegalDocument | null>(null);
  const isLogin = mode === "login";
  const pageContent = authContent[mode];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(isLogin ? ROUTES.login : ROUTES.register);
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-semibold tracking-[-0.01em] text-[#0b1c30]">
          {pageContent.title}
        </h2>
        <p className="text-sm leading-5 text-[#45474c]">
          {pageContent.description}
        </p>
      </div>

      <nav className="mb-6 flex rounded bg-[#eff4ff] p-1 ring-1 ring-[#c5c6cd]/40">
        <AuthTab href={ROUTES.login} active={isLogin}>
          Giriş Yap
        </AuthTab>
        <AuthTab href={ROUTES.register} active={!isLogin}>
          Kayıt Ol
        </AuthTab>
      </nav>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {!isLogin && (
          <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
            Ad Soyad
            <span className="relative">
              <MaterialIcon className={leadingIconClass}>badge</MaterialIcon>
              <input
                name="name"
                autoComplete="name"
                placeholder="Adınız ve soyadınız"
                className={`${inputClass} pl-10 pr-3`}
                type="text"
              />
            </span>
          </label>
        )}

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          E-posta Adresi
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>mail</MaterialIcon>
            <input
              name="email"
              autoComplete="email"
              placeholder="ornek@sirket.com"
              className={`${inputClass} pl-10 pr-3`}
              type="email"
            />
          </span>
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
          <span className="flex items-center justify-between">
            Şifre
            {isLogin && (
              <Link
                className="text-xs font-medium text-[#0d0093] hover:underline"
                href={ROUTES.login}
              >
                Şifremi Unuttum?
              </Link>
            )}
          </span>
          <span className="relative">
            <MaterialIcon className={leadingIconClass}>lock</MaterialIcon>
            <input
              name="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              placeholder="••••••••"
              className={`${inputClass} pl-10 pr-10`}
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
              className="absolute right-3 top-1/2 text-[#45474c] transition-colors hover:text-[#0b1c30] -translate-y-1/2"
              onClick={() => setShowPassword((value) => !value)}
              type="button"
            >
              <MaterialIcon className="text-[18px]">
                {showPassword ? "visibility" : "visibility_off"}
              </MaterialIcon>
            </button>
          </span>
        </label>

        {!isLogin && (
          <label className="flex flex-col gap-1 text-xs font-medium text-[#0b1c30]">
            Hesap Türü
            <span className="relative">
              <select
                name="accountType"
                className="w-full appearance-none rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2 pr-10 text-sm text-[#0b1c30] outline-none transition-colors focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
                defaultValue="candidate"
              >
                <option value="candidate">İş Arayan</option>
                <option value="employer">İşveren</option>
              </select>
              <SelectChevron />
            </span>
          </label>
        )}

        {isLogin ? (
          <label className="mt-1 flex cursor-pointer items-center gap-2 text-sm text-[#45474c]">
            <input
              name="remember"
              className="h-4 w-4 rounded border-[#c5c6cd] text-[#091426] focus:ring-[#091426]"
              type="checkbox"
            />
            Beni Hatırla
          </label>
        ) : (
          <div className="mt-1 flex items-start gap-2 text-sm leading-5 text-[#45474c]">
            <input
              id="terms"
              name="terms"
              className="mt-0.5 h-4 w-4 rounded border-[#c5c6cd] text-[#091426] focus:ring-[#091426]"
              type="checkbox"
            />
            <p>
              <button
                className="font-semibold text-[#091426] underline-offset-2 hover:underline"
                onClick={() => setActiveLegalDocument("terms")}
                type="button"
              >
                Kullanım koşullarını
              </button>{" "}
              ve{" "}
              <button
                className="font-semibold text-[#091426] underline-offset-2 hover:underline"
                onClick={() => setActiveLegalDocument("privacy")}
                type="button"
              >
                gizlilik politikasını
              </button>{" "}
              kabul ediyorum.
            </p>
          </div>
        )}

        <button
          className="mt-1 flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
          type="submit"
        >
          {pageContent.submitLabel}
          <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
        </button>
      </form>

      <div className="flex items-center py-6">
        <div className="h-px flex-1 bg-[#c5c6cd]" />
        <span className="mx-4 shrink-0 text-xs font-medium text-[#45474c]">
          {pageContent.separator}
        </span>
        <div className="h-px flex-1 bg-[#c5c6cd]" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          className="flex items-center justify-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold text-[#0b1c30] transition-colors hover:bg-[#eff4ff]"
          type="button"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#c5c6cd] text-[10px] font-bold">
            G
          </span>
          Google
        </button>
        <button
          className="flex items-center justify-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold text-[#0b1c30] transition-colors hover:bg-[#eff4ff]"
          type="button"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#091426] text-[9px] font-bold text-white">
            in
          </span>
          LinkedIn
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-[#45474c]">
        {pageContent.footerText}{" "}
        <Link className="font-bold text-[#091426] hover:underline" href={pageContent.footerHref}>
          {pageContent.footerLink}
        </Link>
      </p>

      {activeLegalDocument && (
        <LegalModal
          document={activeLegalDocument}
          onClose={() => setActiveLegalDocument(null)}
        />
      )}
    </div>
  );
}
