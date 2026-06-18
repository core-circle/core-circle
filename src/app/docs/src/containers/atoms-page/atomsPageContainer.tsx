'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb, TextInput, Typography } from '@core-circle/ui';
import { SearchIcon } from '@core-circle/icons';
import { atomsPageStyles as s } from './atoms.styles';
import { ATOM_CARDS, ATOMS_BREADCRUMB_ITEMS, ATOMS_HEADER_CONTENT } from '../../constants/atoms-page/atoms-page-constant';

const AtomCard = ({ title, description, href, icon: Icon }: typeof ATOM_CARDS[0]) => (
  <Link href={href} className={s?.card}>
    <div className={s?.cardIconWrapper}>
      <Icon className={s?.cardIcon} />
    </div>
    <Typography variant="h3" className={s?.cardTitle}>{title}</Typography>
    <Typography variant="p" className={s?.cardDescription}>{description}</Typography>
  </Link>
);

export default function AtomsPageContainer() {
  const [search, setSearch] = useState('');

  const filteredCards = ATOM_CARDS.filter(card => 
    card.title.toLowerCase().includes(search.toLowerCase()) || 
    card.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb
          items={ATOMS_BREADCRUMB_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Typography variant="h1" className={s?.title}>{ATOMS_HEADER_CONTENT?.title}</Typography>
            <Typography variant="p" className={s?.description}>{ATOMS_HEADER_CONTENT?.description}</Typography>
          </div>
          <div className="w-full md:w-80">
            <TextInput
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startIcon={<SearchIcon size={20} />}
              fullWidth
            />
          </div>
        </div>
      </header>

      <div className={s?.grid}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <AtomCard key={card.href} {...card} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <Typography variant="muted">No components found matching "{search}"</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
