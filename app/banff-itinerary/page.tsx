import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from 'app/components/theme-toggle'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Banff Campervan Itinerary',
  description: 'Banff campervan itinerary artifact.',
}

export default function BanffItineraryPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand}>
            Sam Polyakov
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/banff-itinerary" className={styles.navLink}>
              Banff
            </Link>
            <a href="https://github.com/sampolz" className={styles.navLink}>
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </nav>

        <section className={styles.intro}>
          <div className={styles.eyebrow}>Travel Artifact</div>
          <h1 className={styles.title}>Banff + Jasper by Campervan</h1>
          <p className={styles.dek}>
            The wording inside the artifact is unchanged. Only the surrounding page
            presentation has been cleaned up.
          </p>
        </section>

        <section className={styles.frame}>
          <div className={styles.frameTop}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotAmber}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <div className={styles.frameLabel}>banff_campervan_final_itinerary.html</div>
          </div>

          <iframe
            src="/banff_campervan_final_itinerary.html"
            title="Banff Campervan Itinerary"
            className={styles.embed}
          />
        </section>
      </div>
    </main>
  )
}
