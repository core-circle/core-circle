import Link from 'next/link';
import { wipPageStyles as s } from '../wip.styles';

export default function OrganismsPage() {
  return (
    <div className={s.container}>
      <div className={s.iconWrapper}>
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </div>
      <h1 className={s.title}>Organisms</h1>
      <p className={s.description}>
        Complex organisms are in the incubator. We're assembling molecules into full-featured interface sections.
      </p>
      <Link href="/" className={s.backLink}>
        Back to Dashboard
      </Link>
    </div>
  );
}
