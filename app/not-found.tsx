import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href={ROUTES.home} aria-label="Vettingo ana sayfa">
          Vettingo
        </Link>
        <span className={styles.headerNote}>Doğru yetenek. Doğru gelecek.</span>
      </header>

      <main className={styles.main}>
        <div className={styles.artwork} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.orbitInner} />
          <span className={styles.sparkOne}>+</span>
          <span className={styles.sparkTwo}>+</span>
          <span className={styles.satellite} />
          <div className={styles.number}>
            <span>4</span>
            <div className={styles.compass}>
              <svg viewBox="0 0 160 160" fill="none">
                <circle cx="80" cy="80" r="65" stroke="currentColor" strokeOpacity=".18" strokeDasharray="2 9" />
                <path d="M80 18v9M80 133v9M18 80h9M133 80h9" stroke="currentColor" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round" />
                <g transform="rotate(32 80 80)">
                  <path d="M80 35 98 80 80 125 62 80Z" fill="currentColor" fillOpacity=".12" />
                  <path d="m80 35 18 45H62Z" fill="currentColor" />
                  <path d="m80 125 18-45H62Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </g>
                <circle cx="80" cy="80" r="5" fill="currentColor" />
              </svg>
            </div>
            <span>4</span>
          </div>
          <div className={styles.locationTag}>
            <span className={styles.statusDot} /> Sayfa bulunamadı
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>404 · SAYFA BULUNAMADI</p>
          <h1 className={styles.title}>Burada bir şey yok.<br /><span>Yeni bir yön bulalım.</span></h1>
          <p className={styles.description}>
            Aradığın sayfa taşınmış, kaldırılmış ya da hiç var olmamış olabilir.
            Doğru yere dönmek için bir adım yeterli.
          </p>
          <p className={styles.hint}>Bazen doğru fırsat, başka bir sayfada başlar.</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Vettingo</span>
        <span>Yetenekleri gelecekle buluşturuyoruz.</span>
      </footer>
    </div>
  );
}
