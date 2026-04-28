'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb, TextInput } from '@core-circle/ui';
import * as Icons from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { iconPageStyles as s } from './icons.styles';
import { ICONS_BREADCRUMB_ITEMS, ICONS_HEADER_CONTENT, ICONS_SECTIONS } from '../../../constants/atoms-page/icons/iconsConstants';

interface IconsContainerProps {
  sections: typeof ICONS_SECTIONS;
  headerContent: typeof ICONS_HEADER_CONTENT;
  breadcrumbItems: typeof ICONS_BREADCRUMB_ITEMS;
}

export default function IconsContainer({ sections, headerContent, breadcrumbItems }: IconsContainerProps) {
  const [search, setSearch] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} />`);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'usage':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
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
              <div className="pb-4 w-full">
                <TextInput
                  placeholder="Search 110+ icons..."
                  startIcon={<Icons.SearchIcon size={18} />}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  fullWidth
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
                  <div className={s?.iconWrapper}><IconComponent size={32} /></div>
                  <span className={s?.iconName}>{name.replace('Icon', '')}</span>
                  {copiedIcon === name && <div className={s?.copyFeedback}>Copied!</div>}
                </button>
              ))}
            </div>
            {filteredIcons.length === 0 && (
              <div className={s?.emptyState}><p className={s?.emptyText}>No icons found matching "{search}"</p></div>
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
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s?.title}>{headerContent?.title}</h1>
        <p className={s?.description}>{headerContent?.description}</p>
      </header>
      <div className={s?.contentWrapper}>
        {sections?.map((section) => (
          <DocSection key={section.id} id={`atoms-icons-${section.id}`} title={section.title} description={section.description} showBorder={section.showBorder}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
