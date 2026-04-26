import Link from 'next/link';
import { homePageStyles as s } from './home.styles';

export default function Index() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1 className={s.title}>
          Core Circle <span className={s.titleAccent}>UI Components</span>
        </h1>
        <p className={s.description}>
          A high-performance, accessible, and beautifully designed component library built for
          the next generation of Core Circle applications.
        </p>
      </header>

      <section>
        <h2 className={s.sectionTitle}>
          Library Components
        </h2>

        <div className={s.grid}>
          {/* Atoms Card */}
          <Link href="/atoms" className={s.card}>
            <div className={s.cardIconWrapper}>
              <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.387a6 6 0 01-3.468.317l-2.387-.477a2 2 0 00-1.022.547l-1.162 1.162a2 2 0 000 2.828l1.162 1.162a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.691-.387a6 6 0 013.468-.317l2.387.477a2 2 0 001.022-.547l1.162-1.162a2 2 0 000-2.828l-1.162-1.162z" />
              </svg>
            </div>
            <h3 className={s.cardTitle}>Atoms</h3>
            <p className={s.cardDescription}>
              The basic building blocks: Buttons, Icons, and Inputs. The foundation of our UI.
            </p>
          </Link>

          {/* Molecules Card */}
          <Link href="/molecules" className={s.card}>
            <div className={s.cardIconWrapper}>
              <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={s.cardTitle}>Molecules</h3>
            <p className={s.cardDescription}>
              Groups of atoms bonded together. More complex components like Search Bars or Card headers.
            </p>
          </Link>

          {/* Organisms Card */}
          <Link href="/organisms" className={s.card}>
            <div className={s.cardIconWrapper}>
              <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className={s.cardTitle}>Organisms</h3>
            <p className={s.cardDescription}>
              Relatively complex UI components composed of groups of molecules and/or atoms.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
