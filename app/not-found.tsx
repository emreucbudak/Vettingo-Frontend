import { TbCompass } from "react-icons/tb";
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
              <TbCompass aria-hidden="true" className="h-full w-full" />
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
