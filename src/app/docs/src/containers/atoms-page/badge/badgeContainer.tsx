'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Badge, Typography, Button } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon, Sparkles, CheckIcon, Alert as AlertIcon, Star, Shield, Palette, ArrowRight } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { BADGE_PROPS_DATA } from '../../../constants/atoms-page/badge/badgeConstants';
import { BadgePlayground } from '../../../components/playground/badge/BadgePlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { BadgeContainerProps } from '../../../interface/containers/atoms/badge.types';

export default function BadgeContainer({
  headerContent,
  breadcrumbItems
}: BadgeContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-live-server-badges"
            title="Live Infrastructure & Security Badges"
            description="Status tags with pulsing indicators, verified security icons, and clean pill capsules."
          >
            <ComponentPreview
              title="Cloud Cluster Node Statuses"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="success" shape="pill" pulse startIcon={<span className="h-2 w-2 rounded-full bg-emerald-500" />}>
    Live Cluster (99.99%)
  </Badge>
  <Badge variant="primary" shape="pill" startIcon={<Shield size={12} />}>
    TLS 1.3 Active
  </Badge>
  <Badge variant="warning" shape="pill" startIcon={<Sparkles size={12} />}>
    Auto-Scaling (24 Nodes)
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="success" shape="pill" pulse startIcon={<span className="h-2 w-2 rounded-full bg-emerald-500" />}>
                  Live Cluster (99.99%)
                </Badge>
                <Badge variant="primary" shape="pill" startIcon={<Shield size={12} />}>
                  TLS 1.3 Active
                </Badge>
                <Badge variant="warning" shape="pill" startIcon={<Sparkles size={12} />}>
                  Auto-Scaling (24 Nodes)
                </Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="theming-vip-badges"
            title="VIP Loyalty & Tier Badges"
            description="Luminous gradient badges with custom star icons and capsule pill shapes."
          >
            <ComponentPreview
              title="Membership Tier Chips"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="gradient" shape="pill" size="lg" startIcon={<Star size={14} />}>
    Diamond VIP Member
  </Badge>
  <Badge variant="floating" shape="pill" size="md" startIcon={<Sparkles size={12} />}>
    Early Access Pass
  </Badge>
  <Badge variant="glassmorphic" shape="pill" size="sm">
    Top 1% Creator
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="gradient" shape="pill" size="lg" startIcon={<Star size={14} />}>
                  Diamond VIP Member
                </Badge>
                <Badge variant="floating" shape="pill" size="md" startIcon={<Sparkles size={12} className="text-amber-500" />}>
                  Early Access Pass
                </Badge>
                <Badge variant="glassmorphic" shape="pill" size="sm">
                  Top 1% Creator
                </Badge>
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
          <DocSection
            id="badge-variants-semantic"
            title="1. Semantic Status Variants"
            description="Essential status tags communicating state, category, and priority."
          >
            <ComponentPreview
              title="Primary, Secondary, Success, Warning & Destructive"
              code={`<Badge variant="primary">Primary</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="success">Success</Badge>\n<Badge variant="warning">Warning</Badge>\n<Badge variant="destructive">Destructive</Badge>`}
            >
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="badge-variants-advanced"
            title="2. Advanced Surface Variants"
            description="Modern surface treatments including glassmorphism, gradient glow, floating depth, soft tint, and segmented outline."
          >
            <ComponentPreview
              title="Glassmorphic, Gradient, Floating, Soft & Pill"
              code={`<Badge variant="glassmorphic">Glassmorphic</Badge>\n<Badge variant="gradient">Gradient</Badge>\n<Badge variant="floating">Floating</Badge>\n<Badge variant="soft">Soft Tint</Badge>`}
            >
              <div className="flex flex-wrap gap-3 items-center p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl">
                <Badge variant="glassmorphic">Glassmorphic</Badge>
                <Badge variant="gradient">Gradient</Badge>
                <Badge variant="floating">Floating</Badge>
                <Badge variant="soft">Soft Tint</Badge>
                <Badge variant="bordered-segment">Segmented</Badge>
              </div>
            </ComponentPreview>
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
          id="badge-playground-section"
          title="Interactive Playground"
          description="Customize all 12 badge variants, sizes, shapes, icons, and text labels."
        >
          <BadgePlayground />
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
            id="badge-mock"
            title="Dynamic Inventory Status API Integration"
            description="Render contextual badges based on remote warehouse stock counts."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Inventory Payload"
                code={JSON.stringify({
                  sku: "PROD-MACBOOK-M3",
                  name: "MacBook Pro 16-inch",
                  stock_count: 3,
                  is_featured: true,
                  status: "LOW_STOCK"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React from 'react';
import { Badge } from '@core-circle/ui';

export const StockStatusBadge = ({ item }) => {
  const getBadgeConfig = () => {
    if (item.stock_count === 0) return { variant: 'destructive', label: 'Out of Stock' };
    if (item.stock_count < 5) return { variant: 'warning', label: \`Only \${item.stock_count} Left\` };
    return { variant: 'success', label: 'In Stock' };
  };

  const config = getBadgeConfig();

  return (
    <div className="flex items-center gap-2">
      {item.is_featured && <Badge variant="gradient" shape="pill">Featured</Badge>}
      <Badge variant={config.variant} shape="pill">
        {config.label}
      </Badge>
    </div>
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
          <DocSection id="badge-intro" title="Introduction" description="The Badge primitive highlights status, categories, or numeric indicators with customizable shapes and colors.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Badge } from '@core-circle/ui';

<Badge variant="primary" shape="pill">New Feature</Badge>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={BADGE_PROPS_DATA} />
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
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
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
