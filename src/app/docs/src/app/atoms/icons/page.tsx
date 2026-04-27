'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@core-circle/ui';
import * as Icons from '@core-circle/icons';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import { iconPageStyles as s } from './icons.styles';
import { ICONS_BREADCRUMB_ITEMS, ICONS_HEADER_CONTENT, ICONS_SECTIONS } from '../../../constants/atoms-page/icons/iconsConstants';

export default function IconsDocsPage() {
  const [search, setSearch] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (iconName: string) => {
    const componentCode = `<${iconName} />`;
    navigator.clipboard.writeText(componentCode);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const getSectionContent = (id: string) => {
    switch (id) {
      case 'usage':
        return (
          <ComponentPreview
            title={ICONS_SECTIONS.find(s => s.id === 'usage')?.previews?.[0].title}
            code={ICONS_SECTIONS.find(s => s.id === 'usage')?.previews?.[0].code}
          >
            <div className="flex flex-wrap gap-8 items-center justify-center p-4">
              <Icons.HomeIcon size={48} />
              <Icons.SearchIcon size={40} />
              <Icons.SettingsIcon size={32} />
              <Icons.Mail size={24} />
            </div>
          </ComponentPreview>
        );
      case 'gallery':
        return (
          <>
            <div className={s?.searchWrapper}>
              <div className={s?.searchInputWrapper}>
                <Icons.SearchIcon className={s?.searchIcon} size={18} />
                <input
                  type="text"
                  placeholder="Search 110+ icons..."
                  className={s?.searchInput}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className={s?.galleryGrid}>
              {filteredIcons.map(([name, IconComponent]) => (
                <button
                  key={name}
                  className={s?.iconCard}
                  onClick={() => copyToClipboard(name)}
                  title={`Click to copy <${name} />`}
                >
                  <div className={s?.iconWrapper}>
                    <IconComponent size={24} />
                  </div>
                  <span className={s?.iconName}>
                    {name.replace('Icon', '')}
                  </span>
                  {copiedIcon === name && (
                    <span className={s?.copyFeedback}>Copied!</span>
                  )}
                </button>
              ))}
            </div>
            {filteredIcons.length === 0 && (
              <div className={s?.emptyState}>
                <p className={s?.emptyText}>No icons found matching "{search}"</p>
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb 
          items={ICONS_BREADCRUMB_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s?.title}>
          {ICONS_HEADER_CONTENT?.title}
        </h1>
        <p className={s?.description}>
          {ICONS_HEADER_CONTENT?.description}
        </p>
      </header>

      <div className={s?.contentWrapper}>
        {ICONS_SECTIONS?.map((section) => (
          <DocSection
            key={section.id}
            id={`atoms-icons-${section.id}`}
            title={section.title}
            description={section.description}
            showBorder={section.showBorder}
          >
            {getSectionContent(section.id)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
