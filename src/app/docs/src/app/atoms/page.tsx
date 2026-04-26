import Link from 'next/link';
import { atomsPageStyles as s } from './atoms.styles';

export default function AtomsPage() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.breadcrumbWrapper}>
          <Link href="/" className={s.breadcrumbLink}>Home</Link>
          <span>/</span>
          <span className={s.breadcrumbCurrent}>Atoms</span>
        </div>
        <h1 className={s.title}>
          Atoms
        </h1>
        <p className={s.description}>
          Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.
        </p>
      </header>

      <div className={s.grid}>
        {/* Button Card */}
        <Link href="/atoms/button" className={s.card}>
          <div className={s.cardIconWrapper}>
            <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
          <h3 className={s.cardTitle}>Button</h3>
          <p className={s.cardDescription}>
            Standard button with various variants, sizes, and loading states.
          </p>
        </Link>

        {/* Icons Card */}
        <Link href="/atoms/icons" className={s.card}>
          <div className={s.cardIconWrapper}>
            <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className={s.cardTitle}>Icons</h3>
          <p className={s.cardDescription}>
            110+ high-quality vector icons for the Core Circle ecosystem.
          </p>
        </Link>

        {/* TextInput Card */}
        <Link href="/atoms/text-input" className={s.card}>
          <div className={s.cardIconWrapper}>
            <svg className={s.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className={s.cardTitle}>TextInput</h3>
          <p className={s.cardDescription}>
            Versatile input field with Material Design support and icons.
          </p>
        </Link>
      </div>
    </div>
  );
}
