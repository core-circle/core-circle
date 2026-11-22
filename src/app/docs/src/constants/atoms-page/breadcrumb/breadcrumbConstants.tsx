import React from 'react';
import { Breadcrumb } from '@core-circle/ui';
import { HomeIcon, Shield, Cloud, DocumentText, FolderOpen } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

const sampleItems = [
  { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
  { label: 'Components', href: '/atoms' },
  { label: 'Navigation', href: '/atoms/navigation' },
  { label: 'Breadcrumb' },
];

export const BREADCRUMB_DOCS_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Breadcrumb' }
];

export const BREADCRUMB_BREADCRUMB_ITEMS = BREADCRUMB_DOCS_ITEMS;

export const BREADCRUMB_HEADER_CONTENT = {
  title: 'Breadcrumb',
  description: 'A hierarchical navigation trail that allows users to identify their location within application routes and nested document trees.',
};

export const BREADCRUMB_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Breadcrumb trails styled for e-commerce stores, audit logs, cloud trees, learning portals, and file browsers.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Multiple visual styles, delimiters, and maxItems truncation for breadcrumb trails.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive breadcrumb sandbox with live customization.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic Next.js URL pathname breadcrumb generator.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Breadcrumbs show user location within application hierarchy and props reference.',
  },
];

export const BREADCRUMB_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-store-breadcrumb',
    title: '1. E-Commerce Product Trail Theme',
    description: 'Pill-style interactive breadcrumb with active category path and product model.',
    previewTitle: 'Branded Product Category Path',
    code: `<Breadcrumb
  variant="pills"
  size="md"
  items={[
    { label: 'Store', href: '/store', icon: <HomeIcon size={14} /> },
    { label: 'Laptops & Workstations', href: '/store/laptops' },
    { label: 'MacBook Pro M3 Max 16"' }
  ]}
/>`,
    render: () => (
      <div className="w-full">
        <Breadcrumb
          variant="pills"
          size="md"
          items={[
            { label: 'Store', href: '#', icon: <HomeIcon size={14} /> },
            { label: 'Laptops & Workstations', href: '#' },
            { label: 'MacBook Pro M3 Max 16"' }
          ]}
        />
      </div>
    )
  },
  {
    id: 'theming-enterprise-audit',
    title: '2. Enterprise Financial Audit Hierarchy Theme',
    description: 'Glassmorphic breadcrumb with subtle backdrop border and slash delimiters for multi-account governance.',
    previewTitle: 'Multi-Account Audit Trail',
    code: `<Breadcrumb
  variant="glassmorphic"
  size="md"
  separator="/"
  items={[
    { label: 'Accounts', href: '#', icon: <Shield size={14} className="text-core-circle-primary" /> },
    { label: 'Treasury & Liquidity', href: '#' },
    { label: 'Transactions', href: '#' },
    { label: 'Wire #8942-NY' }
  ]}
/>`,
    render: () => (
      <div className="w-full">
        <Breadcrumb
          variant="glassmorphic"
          size="md"
          separator="/"
          items={[
            { label: 'Accounts', href: '#', icon: <Shield size={14} className="text-core-circle-primary" /> },
            { label: 'Treasury & Liquidity', href: '#' },
            { label: 'Transactions', href: '#' },
            { label: 'Wire #8942-NY' }
          ]}
        />
      </div>
    )
  },
  {
    id: 'theming-cloud-resources',
    title: '3. Cloud Resource Hierarchy Theme',
    description: 'Elevated card breadcrumbs with cloud infrastructure resource nodes.',
    previewTitle: 'Cloud Cluster Path',
    code: `<Breadcrumb
  variant="cards"
  size="md"
  items={[
    { label: 'Infrastructure', href: '#', icon: <Cloud size={14} /> },
    { label: 'us-east-1 (N. Virginia)', href: '#' },
    { label: 'Kubernetes Clusters', href: '#' },
    { label: 'prod-edge-v4' }
  ]}
/>`,
    render: () => (
      <div className="w-full">
        <Breadcrumb
          variant="cards"
          size="md"
          items={[
            { label: 'Infrastructure', href: '#', icon: <Cloud size={14} /> },
            { label: 'us-east-1 (N. Virginia)', href: '#' },
            { label: 'Kubernetes Clusters', href: '#' },
            { label: 'prod-edge-v4' }
          ]}
        />
      </div>
    )
  },
  {
    id: 'theming-docs-lms',
    title: '4. LMS Course & Documentation Path Theme',
    description: 'Gradient-tinted breadcrumb with document icons for multi-chapter curriculum navigation.',
    previewTitle: 'Documentation Curriculum Path',
    code: `<Breadcrumb
  variant="gradient"
  size="md"
  items={[
    { label: 'Docs Academy', href: '#', icon: <DocumentText size={14} /> },
    { label: 'Design System Architecture', href: '#' },
    { label: 'Atoms', href: '#' },
    { label: 'Component Variance Authority (CVA)' }
  ]}
/>`,
    render: () => (
      <div className="w-full">
        <Breadcrumb
          variant="gradient"
          size="md"
          items={[
            { label: 'Docs Academy', href: '#', icon: <DocumentText size={14} /> },
            { label: 'Design System Architecture', href: '#' },
            { label: 'Atoms', href: '#' },
            { label: 'Component Variance Authority (CVA)' }
          ]}
        />
      </div>
    )
  },
  {
    id: 'theming-file-browser',
    title: '5. Workspace Storage & File Explorer Theme',
    description: 'Minimal segmented path with folder icons for deep directory browsing.',
    previewTitle: 'Workspace Directory Explorer',
    code: `<Breadcrumb
  variant="minimal"
  size="md"
  separator="›"
  items={[
    { label: 'Team Drive', href: '#', icon: <FolderOpen size={14} /> },
    { label: 'Brand Assets 2026', href: '#' },
    { label: 'Vector Logos', href: '#' },
    { label: 'CoreCircle-Symbol.svg' }
  ]}
/>`,
    render: () => (
      <div className="w-full">
        <Breadcrumb
          variant="minimal"
          size="md"
          separator="›"
          items={[
            { label: 'Team Drive', href: '#', icon: <FolderOpen size={14} /> },
            { label: 'Brand Assets 2026', href: '#' },
            { label: 'Vector Logos', href: '#' },
            { label: 'CoreCircle-Symbol.svg' }
          ]}
        />
      </div>
    )
  }
];

export const BREADCRUMB_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'breadcrumb-variants-surface',
    title: '1. Container & Surface Styles',
    description: 'Pills, cards, floating, and glassmorphic elevated breadcrumbs.',
    items: [
      {
        title: 'Pill Capsule Style',
        code: `<Breadcrumb variant="pills" items={sampleItems} />`,
        render: () => (
          <div className="w-full"><Breadcrumb variant="pills" items={sampleItems} /></div>
        )
      },
      {
        title: 'Card Shadow Style',
        code: `<Breadcrumb variant="cards" items={sampleItems} />`,
        render: () => (
          <div className="w-full"><Breadcrumb variant="cards" items={sampleItems} /></div>
        )
      },
      {
        title: 'Glassmorphic Frost Style',
        code: `<Breadcrumb variant="glassmorphic" items={sampleItems} />`,
        render: () => (
          <div className="w-full p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <Breadcrumb variant="glassmorphic" items={sampleItems} />
          </div>
        )
      }
    ]
  },
  {
    id: 'breadcrumb-variants-delimiters',
    title: '2. Custom Separators & Truncation',
    description: 'Slash, arrow, dash, bullet, and max-item collapsing.',
    items: [
      {
        title: 'Slash Delimiter',
        code: `<Breadcrumb separator="/" items={sampleItems} />`,
        render: () => (
          <div className="w-full"><Breadcrumb separator="/" items={sampleItems} /></div>
        )
      },
      {
        title: 'Collapsed History (maxItems = 3)',
        code: `<Breadcrumb maxItems={3} items={sampleItems} />`,
        render: () => (
          <div className="w-full"><Breadcrumb maxItems={3} items={sampleItems} /></div>
        )
      }
    ]
  }
];

export const BREADCRUMB_PLAYGROUND_SECTION = {
  id: 'breadcrumb-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 visual variants, sizes, custom separators, and icon items.',
};

export const BREADCRUMB_MOCK_SECTION = {
  id: 'breadcrumb-mock',
  title: 'Dynamic Next.js Route Breadcrumbs',
  description: 'Generate breadcrumbs automatically based on the active URL pathname.',
  snippets: [
    {
      label: 'Dynamic Next.js Breadcrumb Component',
      code: `'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@core-circle/ui';
import Link from 'next/link';

export const DynamicRouteBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const items = [
    { label: 'Home', href: '/' },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      const isLast = idx === segments.length - 1;
      return {
        label: seg.charAt(0).toUpperCase() + seg.slice(1),
        href: isLast ? undefined : href,
      };
    })
  ];

  return (
    <Breadcrumb
      items={items}
      variant="pills"
      renderLink={(props) => <Link {...props} />}
    />
  );
};`,
    }
  ]
};

export const BREADCRUMB_OVERVIEW_SECTION = {
  id: 'breadcrumb-usage',
  title: 'Introduction',
  description: 'The Breadcrumb atom displays the user\'s location within a hierarchy of pages, allowing quick navigation back up the tree.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Breadcrumb } from '@core-circle/ui';

<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Security' }
  ]}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const BREADCRUMB_PROPS_DATA: PropItem[] = [
  {
    name: 'items',
    type: 'BreadcrumbItem[]',
    description: 'Array of objects representing each breadcrumb step (label, href, icon, prefix, suffix).'
  },
  {
    name: 'variant',
    type: "'standard' | 'pills' | 'card' | 'glassmorphic' | 'gradient' | 'floating' | 'underlined' | 'bordered-segment' | 'soft' | 'ghost'",
    defaultValue: "'standard'",
    description: 'Visual styling variant of the breadcrumb trail (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Font size and spacing scale of the breadcrumb trail.'
  },
  {
    name: 'separator',
    type: 'ReactNode',
    defaultValue: '<ChevronRight />',
    description: 'Custom element or icon rendered between trail items.'
  },
  {
    name: 'showBack',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders a history back button leading the breadcrumb trail.'
  },
  {
    name: 'backLabel',
    type: 'string',
    defaultValue: "'Back'",
    description: 'Custom text label for the back button.'
  },
  {
    name: 'renderLink',
    type: '(props) => ReactNode',
    defaultValue: '-',
    description: 'Custom link renderer slot (essential for Next.js <Link>).'
  },
];
