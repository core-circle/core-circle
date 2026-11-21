'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb, TextInput, Typography } from '@core-circle/ui';
import { SearchIcon } from '@core-circle/icons';
import { atomsPageStyles as s } from '../atoms-page/atoms.styles';
import {
  GENERATOR_CARDS,
  GENERATORS_BREADCRUMB_ITEMS,
  GENERATORS_HEADER_CONTENT,
} from '../../constants/generators-page/generators-page-constant';

const GeneratorCard = ({ title, description, href, icon: Icon }: (typeof GENERATOR_CARDS)[0]) => (
  <Link href={href} className={s?.card}>
    <div className={s?.cardIconWrapper}>
      <Icon className={s?.cardIcon} />
    </div>
    <Typography variant="h3" className={s?.cardTitle}>{title}</Typography>
    <Typography variant="p" className={s?.cardDescription}>{description}</Typography>
  </Link>
);

export default function GeneratorsPageContainer() {
  const [search, setSearch] = useState('');

  const filteredCards = GENERATOR_CARDS.filter(
    (card) =>
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <div className={s?.breadcrumbWrapper}>
          <Breadcrumb
            items={GENERATORS_BREADCRUMB_ITEMS}
            renderLink={(props) => <Link {...props} />}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Typography variant="h1" className={s?.title}>{GENERATORS_HEADER_CONTENT?.title}</Typography>
            <Typography variant="p" className={s?.description}>{GENERATORS_HEADER_CONTENT?.description}</Typography>
          </div>
          <div className="w-full md:w-80">
            <TextInput
              placeholder="Search generators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startIcon={<SearchIcon size={20} />}
              fullWidth
            />
          </div>
        </div>
      </header>

      <section>
        <div className={s?.grid}>
          {filteredCards.map((card) => (
            <GeneratorCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
