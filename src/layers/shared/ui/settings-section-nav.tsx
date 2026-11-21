const sectionItemClass =
  "shrink-0 rounded-full px-2.5 py-2.5 text-xs font-semibold whitespace-nowrap text-[#091426] transition-colors hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091426] sm:px-5 sm:text-sm";

export function SettingsSectionNav({
  profileId,
  companySectionId,
  passwordId,
  emailId,
}: {
  profileId: string;
  companySectionId?: string;
  passwordId: string;
  emailId: string;
}) {
  return (
    <nav
      aria-label="Ayar bölümleri"
      className="mx-auto mb-6 flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#c5c6cd] bg-white p-1.5 shadow-sm"
    >
      <a href={`#${profileId}`} className={sectionItemClass}>
        Profil
      </a>
      {companySectionId && (
        <a href={`#${companySectionId}`} className={sectionItemClass}>
          Şirket Bilgileri
        </a>
      )}
      <a href={`#${passwordId}`} className={sectionItemClass}>
        Şifre Değiştir
      </a>
      <a href={`#${emailId}`} className={sectionItemClass}>
        E-mail Güncelle
      </a>
      <button className={sectionItemClass} type="button">
        2 Aşamalı Giriş Açma
      </button>
    </nav>
  );
}
