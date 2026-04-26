import Link from 'next/link';
import { wipPageStyles as s } from '../wip.styles';

export default function MoleculesPage() {
  return (
    <div className={s.container}>
      <div className={s.iconWrapper}>
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h1 className={s.title}>Molecules</h1>
      <p className={s.description}>
        We are currently bonding atoms together to create powerful molecules. This section is under active development.
      </p>
      <Link href="/" className={s.backLink}>
        Back to Dashboard
      </Link>
    </div>
  );
}
