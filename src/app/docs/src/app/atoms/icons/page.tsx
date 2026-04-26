'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@core-circle/ui';
import * as Icons from '@core-circle/icons';
import DocSection from '../../../components/doc-section';
import { highlightCode } from '../../../utils/highlight';
import { iconPageStyles as s } from './icons.styles';

export default function IconsDocsPage() {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const allIcons = Object.entries(Icons);
  const filteredIcons = allIcons.filter(([name]) => 
    name.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (name: string) => {
    const code = `<${name} />`;
    navigator.clipboard.writeText(code);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/', icon: <Icons.HomeIcon size={14} /> },
            { label: 'Atoms', href: '/atoms' },
            { label: 'Icons' }
          ]}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s.title}>
          Icons
        </h1>
        <p className={s.description}>
          A comprehensive collection of 110+ premium icons designed to perfectly align with the Core Circle design system.
        </p>
      </header>

      <div className={s.contentWrapper}>
        <DocSection
          id="usage"
          title="Usage"
          description="Icons are easy to use and fully customizable with standard SVG props."
        >
          <div className={s.usageCodeWrapper}>
            <pre className={s.usageCode}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(`import { HomeIcon } from '@core-circle/icons';

// Basic usage
<HomeIcon />

// Custom size and color
<HomeIcon size={24} color="#3b82f6" className="my-custom-class" />`) }} />
            </pre>
          </div>
        </DocSection>

        <div className={s.searchWrapper}>
          <input
            type="text"
            placeholder="Search 110+ icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={s.searchInput}
          />
          <div className={s.searchIconWrapper}>
            <Icons.SearchIcon size={20} />
          </div>
        </div>

        <DocSection
          id="gallery"
          title="Icon Gallery"
          description="Click on any icon to copy the React component code to your clipboard."
          showBorder
        >
          <div className={s.galleryGrid}>
            {filteredIcons.map(([name, IconComponent]) => (
              <button
                key={name}
                onClick={() => copyToClipboard(name)}
                className={s.iconCard}
              >
                <div className={s.iconWrapper}>
                  {/* @ts-ignore */}
                  <IconComponent size={32} />
                </div>
                <span className={s.iconLabel}>
                  {name}
                </span>

                {copied === name && (
                  <div className={s.copiedBadge}>
                    Copied!
                  </div>
                )}
              </button>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div className={s.emptyState}>
              <p className={s.emptyText}>No icons found matching "{search}"</p>
            </div>
          )}
        </DocSection>
      </div>
    </div>
  );
}
