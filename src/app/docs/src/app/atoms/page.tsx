'use client';

import Link from 'next/link';
import { Breadcrumb } from '@core-circle/ui';
import { atomsPageStyles as s } from './atoms.styles';
import { ATOM_CARDS, ATOMS_BREADCRUMB_ITEMS, ATOMS_HEADER_CONTENT } from '../../constants/atoms-page/atoms-page-constant';

const AtomCard = ({ title, description, href, icon: Icon }: typeof ATOM_CARDS[0]) => (
  <Link href={href} className={s?.card}>
    <div className={s?.cardIconWrapper}>
      <Icon className={s?.cardIcon} />
    </div>
    <h3 className={s?.cardTitle}>{title}</h3>
    <p className={s?.cardDescription}>{description}</p>
  </Link>
);

export default function AtomsPage() {
  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb 
          items={ATOMS_BREADCRUMB_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s?.title}>
          {ATOMS_HEADER_CONTENT?.title}
        </h1>
        <p className={s?.description}>
          {ATOMS_HEADER_CONTENT?.description}
        </p>
      </header>

      <div className={s?.grid}>
        {ATOM_CARDS.map((card) => (
          <AtomCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}
