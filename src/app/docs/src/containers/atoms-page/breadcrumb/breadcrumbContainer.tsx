'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { 
  HomeIcon, 
  ChevronRight, 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Shield, 
  Sparkles, 
  Folder, 
  FolderOpen, 
  DocumentText, 
  Cloud, 
  ShoppingBag 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { BREADCRUMB_PROPS_DATA } from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';
import { BreadcrumbPlayground } from '../../../components/playground/breadcrumb/breadcrumbPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
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
          {/* 1. E-Commerce Trail */}
          <DocSection
            id="theming-store-breadcrumb"
            title="1. E-Commerce Product Trail Theme"
            description="Pill-style interactive breadcrumb with active category path and product model."
          >
            <ComponentPreview
              title="Branded Product Category Path"
              code={`<Breadcrumb
  variant="pills"
  size="md"
  items={[
    { label: 'Store', href: '/store', icon: <HomeIcon size={14} /> },
    { label: 'Laptops & Workstations', href: '/store/laptops' },
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

          {/* 2. Enterprise Audit Trail */}
          <DocSection
            id="theming-enterprise-audit"
            title="2. Enterprise Financial Audit Hierarchy Theme"
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
    { label: 'Transactions', href: '#' },
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

          {/* 3. Cloud Resource Tree */}
          <DocSection
            id="theming-cloud-resources"
            title="3. Cloud Resource Hierarchy Theme"
            description="Elevated card breadcrumbs with cloud infrastructure resource nodes."
          >
            <ComponentPreview
              title="Cloud Cluster Path"
              code={`<Breadcrumb
  variant="cards"
  size="md"
  items={[
    { label: 'Infrastructure', href: '#', icon: <Cloud size={14} /> },
    { label: 'us-east-1 (N. Virginia)', href: '#' },
    { label: 'Kubernetes Clusters', href: '#' },
    { label: 'prod-edge-v4' }
  ]}
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 4. Documentation & Course LMS Path */}
          <DocSection
            id="theming-docs-lms"
            title="4. LMS Course & Documentation Path Theme"
            description="Gradient-tinted breadcrumb with document icons for multi-chapter curriculum navigation."
          >
            <ComponentPreview
              title="Documentation Curriculum Path"
              code={`<Breadcrumb
  variant="gradient"
  size="md"
  items={[
    { label: 'Docs Academy', href: '#', icon: <DocumentText size={14} /> },
    { label: 'Design System Architecture', href: '#' },
    { label: 'Atoms', href: '#' },
    { label: 'Component Variance Authority (CVA)' }
  ]}
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 5. Team Workspace File Browser Path */}
          <DocSection
            id="theming-file-browser"
            title="5. Workspace Storage & File Explorer Theme"
            description="Minimal segmented path with folder icons for deep directory browsing."
          >
            <ComponentPreview
              title="Workspace Directory Explorer"
              code={`<Breadcrumb
  variant="minimal"
  size="md"
  separator="›"
  items={[
    { label: 'Team Drive', href: '#', icon: <FolderOpen size={14} /> },
    { label: 'Brand Assets 2026', href: '#' },
    { label: 'Vector Logos', href: '#' },
    { label: 'CoreCircle-Symbol.svg' }
  ]}
/>`}
            >
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
          <DocSection id="breadcrumb-variants-surface" title="1. Container & Surface Styles" description="Pills, cards, floating, and glassmorphic elevated breadcrumbs.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview title="Pill Capsule Style" code={`<Breadcrumb variant="pills" items={sampleItems} />`}>
                <div className="w-full"><Breadcrumb variant="pills" items={sampleItems} /></div>
              </ComponentPreview>

              <ComponentPreview title="Card Shadow Style" code={`<Breadcrumb variant="cards" items={sampleItems} />`}>
                <div className="w-full"><Breadcrumb variant="cards" items={sampleItems} /></div>
              </ComponentPreview>

              <ComponentPreview title="Glassmorphic Frost Style" code={`<Breadcrumb variant="glassmorphic" items={sampleItems} />`}>
                <div className="w-full p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"><Breadcrumb variant="glassmorphic" items={sampleItems} /></div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="breadcrumb-variants-delimiters" title="2. Custom Separators & Truncation" description="Slash, arrow, dash, bullet, and max-item collapsing.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview title="Slash Delimiter" code={`<Breadcrumb separator="/" items={sampleItems} />`}>
                <div className="w-full"><Breadcrumb separator="/" items={sampleItems} /></div>
              </ComponentPreview>

              <ComponentPreview title="Collapsed History (maxItems = 3)" code={`<Breadcrumb maxItems={3} items={sampleItems} />`}>
                <div className="w-full"><Breadcrumb maxItems={3} items={sampleItems} /></div>
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
          title="Interactive Playground"
          description="Experiment with 10 visual variants, sizes, custom separators, and icon items."
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
            title="Dynamic Next.js Route Breadcrumbs"
            description="Generate breadcrumbs automatically based on the active URL pathname."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Dynamic Next.js Breadcrumb Component"
                code={`'use client';

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
          <DocSection id="breadcrumb-usage" title="Introduction" description="The Breadcrumb atom displays the user's location within a hierarchy of pages, allowing quick navigation back up the tree.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Breadcrumb } from '@core-circle/ui';

<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Security' }
  ]}
/>`}
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
