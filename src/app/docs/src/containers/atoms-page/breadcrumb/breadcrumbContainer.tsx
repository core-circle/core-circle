'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import {
  Info,
  Layers,
  Play,
  CodeIcon,
  HomeIcon,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Star,
  Shield,
  Palette,
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { BreadcrumbPlayground } from '../../../components/playground/breadcrumb/breadcrumbPlayground';
import { BREADCRUMB_PROPS_DATA } from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';
import { atomsPageStyles as s } from '../atoms.styles';
import { BreadcrumbContainerProps } from '../../../interface/containers/atoms/breadcrumb.types';

export default function BreadcrumbContainer({
  headerContent,
  breadcrumbItems: pageBreadcrumbs,
}: BreadcrumbContainerProps) {
  const sampleItems = [
    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
    { label: 'Components', href: '/atoms' },
    { label: 'Navigation', href: '/atoms/navigation' },
    { label: 'Breadcrumb' },
  ];

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-store-breadcrumb"
            title="E-Commerce Product Trail Theme"
            description="Pill-style interactive breadcrumb with active stock status and department filters."
          >
            <ComponentPreview
              title="Branded Product Category Path"
              code={`<Breadcrumb
  variant="pills"
  size="md"
  items={[
    { label: 'Store', href: '/store', icon: <HomeIcon size={14} /> },
    { label: 'Laptops', href: '/store/laptops' },
    { label: 'MacBook Pro M3 Max 16"' }
  ]}
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="theming-enterprise-audit"
            title="Enterprise Financial Audit Hierarchy Theme"
            description="Glassmorphic breadcrumb with subtle backdrop border and slash delimiters for multi-account governance."
          >
            <ComponentPreview
              title="Multi-Account Audit Trail"
              code={`<Breadcrumb
  variant="glassmorphic"
  size="md"
  separator="/"
  items={[
    { label: 'Accounts', href: '#', icon: <Shield size={14} className="text-core-circle-primary" /> },
    { label: 'Treasury & Liquidity', href: '#' },
    { label: 'Transactions' },
    { label: 'Wire #8942-NY' }
  ]}
/>`}
            >
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
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="breadcrumb-variants-standard" title="1. Standard & Pills" description="Clean row-based text links or elevated interactive pill tabs.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview title="Standard Style" code={`<Breadcrumb items={items} variant="standard" />`}>
                <div className="w-full">
                  <Breadcrumb items={sampleItems} variant="standard" />
                </div>
              </ComponentPreview>

              <ComponentPreview title="Pills Style" code={`<Breadcrumb items={items} variant="pills" />`}>
                <div className="w-full">
                  <Breadcrumb items={sampleItems} variant="pills" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="breadcrumb-variants-elevated" title="2. Card & Floating" description="Encapsulated elevated background surfaces for distinct header sections.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview title="Card Style" code={`<Breadcrumb items={items} variant="card" />`}>
                <div className="w-full">
                  <Breadcrumb items={sampleItems} variant="card" />
                </div>
              </ComponentPreview>

              <ComponentPreview title="Floating Style" code={`<Breadcrumb items={items} variant="floating" />`}>
                <div className="w-full">
                  <Breadcrumb items={sampleItems} variant="floating" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="breadcrumb-variants-glassmorphic" title="3. Glassmorphic & Gradient" description="Translucent frosted backdrop or radiant multi-tone accent backgrounds.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview title="Glassmorphic Style" code={`<Breadcrumb items={items} variant="glassmorphic" />`}>
                <div className="w-full p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl">
                  <Breadcrumb items={sampleItems} variant="glassmorphic" />
                </div>
              </ComponentPreview>

              <ComponentPreview title="Gradient Accent Style" code={`<Breadcrumb items={items} variant="gradient" />`}>
                <div className="w-full">
                  <Breadcrumb items={sampleItems} variant="gradient" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="breadcrumb-playground-section"
          title="Interactive Breadcrumb Playground"
          description="Explore all 10 visual variants, 3 size scales, custom separator delimiters, and history back actions."
        >
          <BreadcrumbPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="breadcrumb-mock"
            title="Dynamic Next.js Route Tree Integration"
            description="Automatically generate breadcrumbs from dynamic Next.js App Router paths."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Dynamic Route Consumer Component"
                code={`'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumb } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';

export const AutoRouteBreadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const items = [
    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      const isLast = idx === segments.length - 1;
      const label = seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' ');
      return isLast ? { label } : { label, href };
    })
  ];

  return (
    <Breadcrumb
      items={items}
      variant="pills"
      renderLink={(props) => <Link {...props} />}
    />
  );
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="breadcrumb-intro" title="Introduction" description="The Breadcrumb component reveals the user's current location within a website or application hierarchy.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Breadcrumb } from '@core-circle/ui';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Analytics' }
];

<Breadcrumb items={items} variant="pills" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={BREADCRUMB_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {pageBreadcrumbs && (
          <Breadcrumb items={pageBreadcrumbs} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
