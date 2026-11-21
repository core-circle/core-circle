'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import * as Icons from '@core-circle/icons';
import { Info, Image, CodeIcon, SearchIcon, Sparkles } from '@core-circle/icons';
import DocSection from '../../../components/doc-section';
import { iconPageStyles as s } from './icons.styles';
import { ICONS_PROPS_DATA } from '../../../constants/atoms-page/icons/iconsConstants';
import { IconsContainerProps } from '../../../interface/containers/atoms/icons.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

type CategoryFilter = 'All' | 'Navigation' | 'Media' | 'Devices' | 'Files' | 'Commerce' | 'Communication' | 'Tools' | 'Weather';

export default function IconsContainer({ headerContent, breadcrumbItems }: IconsContainerProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [customSize, setCustomSize] = useState<number>(24);
  const [customStroke, setCustomStroke] = useState<number>(2);
  const [customColor, setCustomColor] = useState<string>('currentColor');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Extract all valid icon components
  const allIcons = useMemo(() => {
    return Object.entries(Icons).filter(
      ([name, Component]) => typeof Component === 'function' && name !== 'default'
    );
  }, []);

  // Filter icons by category keywords
  const filterByCategory = (name: string, category: CategoryFilter): boolean => {
    if (category === 'All') return true;
    const lower = name.toLowerCase();

    switch (category) {
      case 'Navigation':
        return lower.includes('arrow') || lower.includes('chevron') || lower.includes('move') ||
               lower.includes('compass') || lower.includes('locate') || lower.includes('map') || lower.includes('corner');
      case 'Media':
        return lower.includes('play') || lower.includes('pause') || lower.includes('video') ||
               lower.includes('audio') || lower.includes('music') || lower.includes('volume') ||
               lower.includes('mic') || lower.includes('camera') || lower.includes('film');
      case 'Devices':
        return lower.includes('monitor') || lower.includes('laptop') || lower.includes('tablet') ||
               lower.includes('phone') || lower.includes('cpu') || lower.includes('server') ||
               lower.includes('database') || lower.includes('wifi') || lower.includes('battery');
      case 'Files':
        return lower.includes('file') || lower.includes('folder') || lower.includes('archive') ||
               lower.includes('download') || lower.includes('upload') || lower.includes('cloud') || lower.includes('save');
      case 'Commerce':
        return lower.includes('card') || lower.includes('wallet') || lower.includes('bank') ||
               lower.includes('dollar') || lower.includes('coin') || lower.includes('shop') ||
               lower.includes('cart') || lower.includes('tag') || lower.includes('percent');
      case 'Communication':
        return lower.includes('mail') || lower.includes('message') || lower.includes('chat') ||
               lower.includes('send') || lower.includes('bell') || lower.includes('share') ||
               lower.includes('heart') || lower.includes('star') || lower.includes('flag');
      case 'Tools':
        return lower.includes('edit') || lower.includes('brush') || lower.includes('crop') ||
               lower.includes('scissors') || lower.includes('wrench') || lower.includes('settings') ||
               lower.includes('slider') || lower.includes('code') || lower.includes('terminal');
      case 'Weather':
        return lower.includes('sun') || lower.includes('moon') || lower.includes('cloud') ||
               lower.includes('rain') || lower.includes('wind') || lower.includes('droplet') ||
               lower.includes('flame') || lower.includes('clock') || lower.includes('calendar');
      default:
        return true;
    }
  };

  const filteredIcons = useMemo(() => {
    return allIcons.filter(([name]) => {
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filterByCategory(name, selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [allIcons, search, selectedCategory]);

  const copyToClipboard = (iconName: string) => {
    let snippet = `<${iconName}`;
    if (customSize !== 24) snippet += ` size={${customSize}}`;
    if (customStroke !== 2) snippet += ` strokeWidth={${customStroke}}`;
    if (customColor !== 'currentColor') snippet += ` color="${customColor}"`;
    snippet += ` />`;

    navigator.clipboard.writeText(snippet);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const categories: CategoryFilter[] = [
    'All',
    'Navigation',
    'Media',
    'Devices',
    'Files',
    'Commerce',
    'Communication',
    'Tools',
    'Weather',
  ];

  const tabItems = [
    {
      id: 'gallery',
      label: '520+ Icon Gallery',
      icon: <Image size={16} />,
      content: (
        <DocSection
          id="icons-gallery"
          title={`Core Circle Icon Library (${allIcons.length} Icons)`}
          description="Interactive browser for all 520+ icons. Customize size, stroke width, and color live, then click any icon to copy its ready-to-use React JSX."
        >
          <div className="mt-6 space-y-6">
            {/* Search Input and Live Counter */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search 520+ icons by name (e.g. arrow, search, file, user, heart)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={s.searchInput}
                />
                <span className={s.searchIconWrapper}>
                  <SearchIcon size={18} />
                </span>
              </div>
              <div className="shrink-0 flex items-center">
                <span className={s.counterBadge}>
                  Showing {filteredIcons.length} of {allIcons.length} icons
                </span>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className={s.categoryChips}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`${s.chip} ${selectedCategory === cat ? s.chipActive : s.chipInactive}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Customizer Controls */}
            <div className={s.controlsBar}>
              {/* Size Control */}
              <div className={s.controlGroup}>
                <span className={s.controlLabel}>Size:</span>
                <div className={s.btnGroup}>
                  {[18, 24, 32, 40].map((size) => (
                    <button
                      key={size}
                      onClick={() => setCustomSize(size)}
                      className={`${s.btnOption} ${customSize === size ? s.btnOptionActive : s.btnOptionInactive}`}
                    >
                      {size}px
                    </button>
                  ))}
                </div>
              </div>

              {/* Stroke Width Control */}
              <div className={s.controlGroup}>
                <span className={s.controlLabel}>Stroke:</span>
                <div className={s.btnGroup}>
                  {[1.5, 2, 2.5].map((stroke) => (
                    <button
                      key={stroke}
                      onClick={() => setCustomStroke(stroke)}
                      className={`${s.btnOption} ${customStroke === stroke ? s.btnOptionActive : s.btnOptionInactive}`}
                    >
                      {stroke}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Preset Control */}
              <div className={s.controlGroup}>
                <span className={s.controlLabel}>Color:</span>
                <div className={s.btnGroup}>
                  {[
                    { label: 'Current', value: 'currentColor' },
                    { label: 'Primary', value: '#2563eb' },
                    { label: 'Secondary', value: '#16a34a' },
                    { label: 'Destructive', value: '#dc2626' },
                  ].map(({ label, value }) => (
                    <button
                      key={value}
                      onClick={() => setCustomColor(value)}
                      className={`${s.btnOption} ${customColor === value ? s.btnOptionActive : s.btnOptionInactive}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Icon Grid */}
            <div className={s.galleryGrid}>
              {filteredIcons.map(([name, IconComponent]) => {
                const Icon = IconComponent as React.FC<{
                  size?: number | string;
                  color?: string;
                  strokeWidth?: number | string;
                }>;

                return (
                  <button
                    key={name}
                    className={s.iconCard}
                    onClick={() => copyToClipboard(name)}
                    title={`Click to copy <${name} />`}
                  >
                    <div className={s.iconWrapper}>
                      <Icon
                        size={customSize}
                        color={customColor}
                        strokeWidth={customStroke}
                      />
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
                <Typography variant="p" className={s.emptyText}>
                  No icons found matching "{search}" in category "{selectedCategory}".
                </Typography>
              </div>
            )}
          </div>
        </DocSection>
      ),
    },
    {
      id: 'overview',
      label: 'Overview & Props',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-10 max-w-5xl">
          <DocSection
            id="icons-intro"
            title="Introduction"
            description="Core Circle Icons is a 520+ SVG icon system built as tree-shakeable React components with full customization support."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { SearchIcon, Activity, AlertTriangle } from '@core-circle/icons';\n\n// Default 24px currentColor\n<SearchIcon />\n\n// Custom sizing, color, and stroke\n<Activity size={32} color="#2563eb" strokeWidth={1.5} />\n\n// Composed with Tailwind utilities\n<AlertTriangle className="w-5 h-5 text-core-circle-warning animate-bounce" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={ICONS_PROPS_DATA} />
              </div>
            </div>
          </DocSection>

          <DocSection
            id="icons-styling"
            title="Tailwind Styling & Dark Mode"
            description="All icons inherit currentColor by default, allowing effortless theme switching and Tailwind hover / animation states."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-slate-900 rounded-core-circle-xl p-8 flex items-center justify-around border border-core-circle-border-main shadow-core-circle-subtle">
                <div className="flex flex-col items-center gap-3">
                  <Sparkles size={36} className="text-core-circle-primary animate-pulse" />
                  <span className="text-[10px] text-core-circle-text-muted font-core-circle-bold uppercase tracking-wider">Pulse Animation</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <SearchIcon size={36} className="text-core-circle-secondary hover:scale-125 transition-transform cursor-pointer" />
                  <span className="text-[10px] text-core-circle-text-muted font-core-circle-bold uppercase tracking-wider">Hover Scale</span>
                </div>
              </div>
              <CodeSnippet
                label="Tailwind Composition"
                code={`<Sparkles className="text-core-circle-primary animate-pulse" />\n<SearchIcon className="text-core-circle-secondary hover:scale-125 transition-transform" />`}
              />
            </div>
          </DocSection>
        </div>
      ),
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection
            id="icons-mock"
            title="Dynamic Dynamic Rendering"
            description="Render icons dynamically from an API payload or CMS response."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Backend / CMS Payload"
                code={JSON.stringify(
                  {
                    navigation: [
                      { label: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
                      { label: "Analytics", icon: "BarChart", href: "/analytics" },
                      { label: "Settings", icon: "SettingsIcon", href: "/settings" }
                    ]
                  },
                  null,
                  2
                )}
              />

              <CodeSnippet
                label="Consumer Component"
                code={`import * as Icons from '@core-circle/icons';\n\ninterface NavItem {\n  label: string;\n  icon: keyof typeof Icons;\n  href: string;\n}\n\nexport const DynamicNav = ({ items }: { items: NavItem[] }) => (\n  <nav className="flex flex-col gap-2">\n    {items.map((item) => {\n      const IconComponent = Icons[item.icon];\n      return (\n        <a key={item.href} href={item.href} className="flex items-center gap-2 p-2 rounded-core-circle-md hover:bg-core-circle-bg-page">\n          {IconComponent && <IconComponent size={20} className="text-core-circle-primary" />}\n          <span>{item.label}</span>\n        </a>\n      );\n    })}\n  </nav>\n);`}
              />
            </div>
          </DocSection>
        </div>
      ),
    },
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <Typography variant="h1" className={s.title}>
          {headerContent.title}
        </Typography>
        <Typography variant="p" className={s.description}>
          {headerContent.description}
        </Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="line" />
      </div>
    </div>
  );
}
