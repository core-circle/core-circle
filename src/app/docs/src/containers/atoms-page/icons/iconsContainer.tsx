'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, TextInput, Select } from '@core-circle/ui';
import * as Icons from '@core-circle/icons';
import { Info, Image, CodeIcon, SearchIcon, HomeIcon } from '@core-circle/icons';
import DocSection from '../../../components/doc-section';
import { iconPageStyles as s } from './icons.styles';
import {
  ICONS_PROPS_DATA
} from '../../../constants/atoms-page/icons/iconsConstants';
import { IconsContainerProps } from '../../../interface/containers/atoms/icons.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function IconsContainer({ headerContent, breadcrumbItems }: IconsContainerProps) {
  const [search, setSearch] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase()) && typeof Icons[name as keyof typeof Icons] === 'function'
  );

  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} />`);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="icons-intro" title="Introduction" description="Core Circle Icons is a curated set of premium SVG icons. Each icon is built as a pure React component, supporting theme-aware coloring, variable sizing, and standard SVG attributes.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { HomeIcon } from '@core-circle/icons';\n\n<HomeIcon size={24} color="primary" />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={ICONS_PROPS_DATA} />
              </div>
            </div>
          </DocSection>

          <DocSection id="icons-styling" title="Advanced Styling" description="Since icons are React components, you can style them using CSS classes or inline styles just like any other element.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-slate-900 rounded-core-circle-2xl p-12 flex items-center justify-center gap-12 border border-core-circle-border-main shadow-core-circle-subtle">
                <div className="flex flex-col items-center gap-4">
                  <HomeIcon size={40} className="text-core-circle-primary animate-pulse" />
                  <span className="text-[10px] text-core-circle-text-muted font-core-circle-bold uppercase tracking-widest">Animated</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <SearchIcon size={40} className="text-core-circle-secondary hover:scale-125 transition-transform cursor-pointer" />
                  <span className="text-[10px] text-core-circle-text-muted font-core-circle-bold uppercase tracking-widest">Hover Effect</span>
                </div>
              </div>
              <CodeSnippet
                label="Custom CSS"
                code={`<HomeIcon \n  className="text-blue-600 animate-pulse" \n/>`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'gallery',
      label: 'Icon Gallery',
      icon: <Image size={16} />,
      content: (
        <DocSection id="icons-gallery" title="110+ Premium Icons" description="Click on any icon to copy the React component code to your clipboard.">
          <div className="mt-8 space-y-10">
            <div className="w-full">
              <TextInput
                placeholder="Search premium icons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                startIcon={<SearchIcon size={20} />}
                fullWidth
              />
            </div>

            <div className={s.galleryGrid}>
              {filteredIcons.map(([name, IconComponent]) => {
                const Icon = IconComponent as React.FC<{ size?: number }>;
                return (
                  <button
                    key={name}
                    className={s.iconCard}
                    onClick={() => copyToClipboard(name)}
                  >
                    <div className={s.iconWrapper}>
                      <Icon size={32} />
                    </div>
                    <span className={s.iconName}>
                      {name.replace('Icon', '')}
                    </span>
                    {copiedIcon === name && (
                      <div className={s.copiedBadge}>
                        Copied!
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {filteredIcons.length === 0 && (
              <div className={s.emptyState}>
                <p className={s.emptyText}>No icons found matching "{search}"</p>
              </div>
            )}
          </div>
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="icons-mock" title="Dynamic Integration" description="Example of using a dynamic icon map in your application.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  status: "success",
                  iconName: "CheckIcon",
                  ui: {
                    color: "emerald-500",
                    size: 24
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`import * as Icons from '@core-circle/icons';\n\nconst DynamicIcon = ({ data }) => {\n  const IconComponent = Icons[data.iconName];\n  \n  if (!IconComponent) return null;\n  \n  return (\n    <IconComponent \n      size={data.ui.size} \n      className={\`text-\${data.ui.color}\`} \n    />\n  );\n};`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s.title}>{headerContent.title}</h1>
        <p className={s.description}>{headerContent.description}</p>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
