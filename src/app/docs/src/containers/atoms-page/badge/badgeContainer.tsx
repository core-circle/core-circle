'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Badge, Typography, Button } from '@core-circle/ui';
import { 
  Info, 
  CodeIcon, 
  Sparkles, 
  Shield, 
  Star, 
  Palette, 
  Layers, 
  Play, 
  CheckIcon, 
  Tag, 
  Terminal, 
  Users, 
  CircleCheck, 
  ShoppingBag, 
  Lock 
} from '@core-circle/icons';
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
          {/* 1. Infrastructure Badges */}
          <DocSection
            id="theming-live-server-badges"
            title="1. Live Infrastructure & Security Badges Theme"
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

          {/* 2. VIP Loyalty Tier Chips */}
          <DocSection
            id="theming-vip-chips"
            title="2. VIP Loyalty & Member Tier Chips Theme"
            description="Luminous gradient badges and star icons for premium membership tiers."
          >
            <ComponentPreview
              title="VIP Loyalty Tier Chips"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="gradient" shape="pill" size="md" startIcon={<Star size={14} className="text-amber-500" />}>
    Platinum VIP Member
  </Badge>
  <Badge variant="card" shape="pill" size="md" startIcon={<Sparkles size={14} className="text-purple-600" />}>
    Top 1% Creator
  </Badge>
  <Badge variant="outline" shape="pill" size="md">
    Verified Investor
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="gradient" shape="pill" size="md" startIcon={<Star size={14} className="text-amber-500" />}>
                  Platinum VIP Member
                </Badge>
                <Badge variant="card" shape="pill" size="md" startIcon={<Sparkles size={14} className="text-purple-600" />}>
                  Top 1% Creator
                </Badge>
                <Badge variant="outline" shape="pill" size="md">
                  Verified Investor
                </Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Product Status & Deals */}
          <DocSection
            id="theming-ecommerce-badges"
            title="3. E-Commerce Stock & Promotion Pills Theme"
            description="High-contrast tags for flash sales, low inventory alerts, and instant shipping flags."
          >
            <ComponentPreview
              title="Storefront Promotion & Inventory Tags"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="destructive" shape="pill" size="md" startIcon={<Tag size={12} />}>
    Flash Sale -40%
  </Badge>
  <Badge variant="soft" shape="pill" size="md" startIcon={<ShoppingBag size={12} className="text-emerald-600" />}>
    In Stock (Ready to Ship)
  </Badge>
  <Badge variant="warning" shape="pill" size="md">
    Only 3 Left
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="destructive" shape="pill" size="md" startIcon={<Tag size={12} />}>
                  Flash Sale -40%
                </Badge>
                <Badge variant="soft" shape="pill" size="md" startIcon={<ShoppingBag size={12} className="text-emerald-600" />}>
                  In Stock (Ready to Ship)
                </Badge>
                <Badge variant="warning" shape="pill" size="md">
                  Only 3 Left
                </Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Developer Git & CI/CD Pipeline Tags */}
          <DocSection
            id="theming-dev-git-tags"
            title="4. Developer Git & Pipeline Release Tags Theme"
            description="Dense monospace tags for semantic versioning, git commit hashes, and build indicators."
          >
            <ComponentPreview
              title="Release & Build Pipeline Tags"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="minimal" shape="rounded" size="sm" startIcon={<Terminal size={12} />}>
    v3.4.2-stable
  </Badge>
  <Badge variant="success" shape="rounded" size="sm" startIcon={<CircleCheck size={12} />}>
    CI Passed (42s)
  </Badge>
  <Badge variant="outline" shape="rounded" size="sm">
    sha: 8f92a1b
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="minimal" shape="rounded" size="sm" startIcon={<Terminal size={12} />}>
                  v3.4.2-stable
                </Badge>
                <Badge variant="success" shape="rounded" size="sm" startIcon={<CircleCheck size={12} />}>
                  CI Passed (42s)
                </Badge>
                <Badge variant="outline" shape="rounded" size="sm">
                  sha: 8f92a1b
                </Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Team Governance & Role Chips */}
          <DocSection
            id="theming-team-roles"
            title="5. Workspace Roles & Access Governance Theme"
            description="Role chips for workspace permission levels and admin verification."
          >
            <ComponentPreview
              title="Workspace Team Role Chips"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="primary" shape="pill" size="md" startIcon={<Shield size={12} />}>
    Workspace Owner
  </Badge>
  <Badge variant="secondary" shape="pill" size="md" startIcon={<Users size={12} />}>
    Billing Admin
  </Badge>
  <Badge variant="soft" shape="pill" size="md">
    Read-Only Guest
  </Badge>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="primary" shape="pill" size="md" startIcon={<Shield size={12} />}>
                  Workspace Owner
                </Badge>
                <Badge variant="secondary" shape="pill" size="md" startIcon={<Users size={12} />}>
                  Billing Admin
                </Badge>
                <Badge variant="soft" shape="pill" size="md">
                  Read-Only Guest
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
          <DocSection id="badge-variants-solid" title="1. Brand & Semantic Colors" description="Solid badges for status indicators and high-contrast labeling.">
            <div className="flex flex-wrap gap-4 items-center">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </DocSection>

          <DocSection id="badge-variants-styles" title="2. Surface & Effect Variants" description="Outline, soft tint, floating shadow, glassmorphic blur, and gradient styling.">
            <div className="flex flex-wrap gap-4 items-center">
              <Badge variant="outline">Outline</Badge>
              <Badge variant="soft">Soft Wash</Badge>
              <Badge variant="card">Card Shadow</Badge>
              <Badge variant="floating">Floating Depth</Badge>
              <Badge variant="glassmorphic">Glassmorphic</Badge>
              <Badge variant="gradient">Gradient VIP</Badge>
              <Badge variant="minimal">Minimal Flat</Badge>
            </div>
          </DocSection>

          <DocSection id="badge-variants-shapes" title="3. Shapes & Sizing" description="Pill, rounded, and square contours across small, medium, and large scales.">
            <div className="flex flex-wrap gap-6 items-center">
              <Badge variant="primary" shape="pill" size="sm">Small Pill</Badge>
              <Badge variant="primary" shape="rounded" size="md">Medium Rounded</Badge>
              <Badge variant="primary" shape="square" size="lg">Large Square</Badge>
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
          id="badge-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, shapes, sizes, removable tags, and live pulse animations."
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
            title="Dynamic Telemetry Badge Integration"
            description="Render system status chips dynamically from cluster health metrics."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Health Payload"
                code={JSON.stringify({
                  cluster: "us-west-prod",
                  nodes_online: 48,
                  health_status: "success",
                  version: "3.2.0"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useEffect, useState } from 'react';
import { Badge } from '@core-circle/ui';

export const ClusterStatusChip = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/cluster/status')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return null;

  return (
    <Badge
      variant={data.health_status}
      shape="pill"
      pulse
    >
      {data.cluster} ({data.nodes_online} Nodes)
    </Badge>
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
          <DocSection id="badge-usage" title="Introduction" description="The Badge atom represents status, counts, categories, and tags across dashboards and card components.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Badge } from '@core-circle/ui';

<Badge variant="success" shape="pill">
  Live Production
</Badge>`}
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
