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
          {/* Button Card */}
          <Link href="/components/button" className={s.card}>
            <div className={s.cardIconWrapper}>
              <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className={s.cardTitle}>Button</h3>
            <p className={s.cardDescription}>
              Standard button with various variants, sizes, and loading states for all your user interactions.
            </p>
          </Link>

          {/* Icons Card */}
          <Link href="/components/icons" className={s.card}>
            <div className={s.cardIconWrapper}>
              <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={s.cardTitle}>Icons</h3>
            <p className={s.cardDescription}>
              110+ high-quality vector icons with support for custom sizes, colors, and animations.
            </p>
          </Link>

          {/* Placeholder Card */}
          <div className={s.placeholderCard}>
            <div className={s.placeholderIconWrapper}>
              <svg className={s.placeholderIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className={s.placeholderTitle}>More Coming Soon...</h3>
            <p className={s.placeholderDescription}>
              Cards, Inputs, Modals, and more are currently under development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
