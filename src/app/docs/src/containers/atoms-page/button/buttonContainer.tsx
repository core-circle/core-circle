'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Button, Typography, Badge } from '@core-circle/ui';
import {
  Info,
  Layers,
  Play,
  CodeIcon,
  Sparkles,
  Shield,
  Star,
  ArrowRight,
  Refresh,
  Bell,
  Palette,
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ButtonPlayground } from '../../../components/playground/button/buttonPlayground';
import { BUTTON_PROPS_DATA } from '../../../constants/atoms-page/button/buttonConstants';
import { atomsPageStyles as s } from '../atoms.styles';
import { ButtonContainerProps } from '../../../interface/containers/atoms/button.types';

export default function ButtonContainer({
  headerContent,
  breadcrumbItems
}: ButtonContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-vip-buttons"
            title="VIP Brand & Conversion CTAs"
            description="Luminous gradient buttons with capsule pill contours and radiant star icon badges."
          >
            <ComponentPreview
              title="Conversion Call-to-Action Group"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="gradient" shape="pill" size="lg" endIcon={<ArrowRight size={18} />}>
    Unlock All Pro Features
  </Button>
  <Button variant="glassmorphic" shape="pill" size="lg" startIcon={<Sparkles size={18} />}>
    Join VIP Waitlist
  </Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="gradient" shape="pill" size="lg" endIcon={<ArrowRight size={18} />}>
                  Unlock All Pro Features
                </Button>
                <Button variant="glassmorphic" shape="pill" size="lg" startIcon={<Sparkles size={18} className="text-amber-500" />}>
                  Join VIP Waitlist
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="theming-saas-actions"
            title="Enterprise Workflow & Workspace Actions"
            description="Subtle floating, outline, and destructive action buttons for operational dashboards."
          >
            <ComponentPreview
              title="Workspace Action Button Group"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="floating" size="md" startIcon={<Shield size={16} className="text-core-circle-primary" />}>
    Deploy Security Rules
  </Button>
  <Button variant="outline" size="md">
    Configure Webhooks
  </Button>
  <Button variant="destructive" shape="rounded" size="md">
    Revoke API Key
  </Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="floating" size="md" startIcon={<Shield size={16} className="text-core-circle-primary" />}>
                  Deploy Security Rules
                </Button>
                <Button variant="outline" size="md">
                  Configure Webhooks
                </Button>
                <Button variant="destructive" shape="rounded" size="md">
                  Revoke API Key
                </Button>
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
            id="button-variants-semantic"
            title="1. Semantic & Action Variants"
            description="Primary brand, secondary, success, warning, destructive, and outline buttons."
          >
            <ComponentPreview
              title="Primary, Secondary, Success, Warning & Destructive"
              code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="success">Success</Button>\n<Button variant="warning">Warning</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="outline">Outline</Button>`}
            >
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="button-variants-advanced"
            title="2. Advanced Surface Variants"
            description="Glassmorphic, Gradient, Floating, Pill, and Soft styles."
          >
            <ComponentPreview
              title="Glassmorphic, Gradient, Floating, Pill & Soft"
              code={`<Button variant="glassmorphic">Glassmorphic</Button>\n<Button variant="gradient">Gradient</Button>\n<Button variant="floating">Floating</Button>\n<Button variant="pill">Pill</Button>\n<Button variant="soft">Soft</Button>`}
            >
              <div className="flex flex-wrap gap-3 items-center p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl">
                <Button variant="glassmorphic">Glassmorphic</Button>
                <Button variant="gradient">Gradient</Button>
                <Button variant="floating">Floating</Button>
                <Button variant="pill">Pill Shape</Button>
                <Button variant="soft">Soft Pastel</Button>
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
          id="button-playground-section"
          title="Interactive Button Playground"
          description="Test all 12 button variants, 4 sizes, 3 shapes, loading states, and icon placements."
        >
          <ButtonPlayground />
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
            id="button-mock"
            title="Dynamic CTA Workflow Action Integration"
            description="Render actionable workflows dynamically from backend server configurations."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend CTA Payload"
                code={JSON.stringify({
                  action_id: "act_deploy_prod",
                  label: "Deploy to Production",
                  variant: "gradient",
                  shape: "pill",
                  requires_confirmation: true,
                  target_cluster: "us-east-1-primary"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useState } from 'react';
import { Button } from '@core-circle/ui';
import { Sparkles } from '@core-circle/icons';

export const DynamicActionButton = ({ config }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await fetch(\`/api/v1/actions/\${config.action_id}/execute\`, { method: 'POST' });
    setLoading(false);
  };

  return (
    <Button
      variant={config.variant}
      shape={config.shape}
      loading={loading}
      onClick={handleClick}
      startIcon={<Sparkles size={16} />}
    >
      {config.label}
    </Button>
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
          <DocSection id="button-intro" title="Introduction" description="The Button primitive triggers an immediate action, submission, or asynchronous mutation with support for loading states and icons.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Button } from '@core-circle/ui';

<Button variant="primary" size="md">Get Started</Button>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={BUTTON_PROPS_DATA} />
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
