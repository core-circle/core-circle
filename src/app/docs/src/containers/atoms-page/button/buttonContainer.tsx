'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Button, Typography, Badge } from '@core-circle/ui';
import { 
  Sparkles, 
  Shield, 
  ArrowRight, 
  Heart, 
  Star, 
  Palette, 
  Layers, 
  Play, 
  Pause, 
  CodeIcon, 
  Info, 
  ShoppingCart, 
  Lock, 
  Download, 
  CheckIcon, 
  Share 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { BUTTON_PROPS_DATA } from '../../../constants/atoms-page/button/buttonConstants';
import { ButtonPlayground } from '../../../components/playground/button/buttonPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
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
          {/* 1. VIP CTAs */}
          <DocSection
            id="theming-vip-buttons"
            title="1. VIP Brand & Conversion CTAs Theme"
            description="Luminous gradient buttons with capsule pill contours and radiant star icon badges."
          >
            <ComponentPreview
              title="Conversion Call-to-Action Group"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="gradient" shape="pill" size="lg" endIcon={<ArrowRight size={18} />}>
    Unlock All Pro Features
  </Button>
  <Button variant="glassmorphic" shape="pill" size="lg" startIcon={<Sparkles size={18} className="text-amber-500" />}>
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

          {/* 2. SaaS Actions */}
          <DocSection
            id="theming-saas-actions"
            title="2. Enterprise Workflow & Workspace Actions Theme"
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

          {/* 3. E-Commerce Checkout Actions */}
          <DocSection
            id="theming-ecommerce-actions"
            title="3. E-Commerce Commerce & Cart Controls Theme"
            description="High-intent shopping actions with wishlist heart toggles and express checkout triggers."
          >
            <ComponentPreview
              title="Storefront Purchase Button Bar"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="primary" size="lg" shape="pill" startIcon={<ShoppingCart size={18} />}>
    Add to Shopping Bag
  </Button>
  <Button variant="soft" size="lg" shape="pill" startIcon={<Heart size={18} className="text-rose-500" />}>
    Save to Wishlist
  </Button>
  <Button variant="outline" size="lg" shape="pill">
    Buy Now with 1-Click
  </Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="lg" shape="pill" startIcon={<ShoppingCart size={18} />}>
                  Add to Shopping Bag
                </Button>
                <Button variant="soft" size="lg" shape="pill" startIcon={<Heart size={18} className="text-rose-500" />}>
                  Save to Wishlist
                </Button>
                <Button variant="outline" size="lg" shape="pill">
                  Buy Now with 1-Click
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Single Sign-On & Auth Triggers */}
          <DocSection
            id="theming-sso-auth"
            title="4. Authentication & SSO Sign-In Theme"
            description="Clean full-width and pill authentication buttons for login gateways."
          >
            <ComponentPreview
              title="OAuth & SSO Login Triggers"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="card" size="md" startIcon={<Lock size={16} className="text-core-circle-primary" />}>
    Sign in with Okta SCIM
  </Button>
  <Button variant="minimal" size="md" endIcon={<ArrowRight size={16} />}>
    Continue as Guest
  </Button>
  <Button variant="outline" size="md" startIcon={<Download size={16} />}>
    Download Recovery Key
  </Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="card" size="md" startIcon={<Lock size={16} className="text-core-circle-primary" />}>
                  Sign in with Okta SCIM
                </Button>
                <Button variant="minimal" size="md" endIcon={<ArrowRight size={16} />}>
                  Continue as Guest
                </Button>
                <Button variant="outline" size="md" startIcon={<Download size={16} />}>
                  Download Recovery Key
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Media & Stream Playback Controls */}
          <DocSection
            id="theming-media-controls"
            title="5. Media Playback & Stream Controls Theme"
            description="Circular and floating playback buttons for audio, video, and podcast player bars."
          >
            <ComponentPreview
              title="Player Controls Button Group"
              code={`<div className="flex flex-wrap gap-4 items-center">
  <Button variant="primary" shape="circle" size="lg" aria-label="Play Track">
    <Play size={20} />
  </Button>
  <Button variant="soft" shape="circle" size="md" aria-label="Share">
    <Share size={18} />
  </Button>
  <Button variant="glassmorphic" shape="pill" size="md" startIcon={<Star size={16} className="text-amber-500" />}>
    Add to Favorites
  </Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" shape="circle" size="lg" aria-label="Play Track">
                  <Play size={20} />
                </Button>
                <Button variant="soft" shape="circle" size="md" aria-label="Share">
                  <Share size={18} />
                </Button>
                <Button variant="glassmorphic" shape="pill" size="md" startIcon={<Star size={16} className="text-amber-500" />}>
                  Add to Favorites
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
          <DocSection id="button-variants-solid" title="1. Solid Brand & Semantic" description="Primary, secondary, success, warning, and destructive solid buttons.">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </DocSection>

          <DocSection id="button-variants-surface" title="2. Surface & Effect Variants" description="Outline, ghost, soft wash, floating shadow, glassmorphic, and gradient buttons.">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft Wash</Button>
              <Button variant="floating">Floating Depth</Button>
              <Button variant="glassmorphic">Glassmorphic</Button>
              <Button variant="gradient">Gradient</Button>
            </div>
          </DocSection>

          <DocSection id="button-variants-shapes" title="3. Shapes & Sizing" description="Pill, rounded, and square contours across small, medium, and large scales.">
            <div className="flex flex-wrap gap-6 items-center">
              <Button variant="primary" shape="pill" size="sm">Small Pill</Button>
              <Button variant="primary" shape="rounded" size="md">Medium Rounded</Button>
              <Button variant="primary" shape="square" size="lg">Large Square</Button>
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
          id="button-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, shapes, sizes, loading states, and icon slots."
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
            title="Async Form Submission Button"
            description="Handle loading spinners and disabled states automatically during API mutation calls."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Async Mutation Handler Pattern"
                code={`import React, { useState } from 'react';
import { Button } from '@core-circle/ui';
import { ArrowRight } from '@core-circle/icons';

export const CheckoutSubmitButton = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await fetch('/api/v1/checkout/process', { method: 'POST' });
    setLoading(false);
  };

  return (
    <Button
      variant="gradient"
      size="lg"
      shape="pill"
      loading={loading}
      onClick={handleSubmit}
      endIcon={<ArrowRight size={18} />}
    >
      Confirm & Complete Order
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
          <DocSection id="button-usage" title="Introduction" description="The Button atom triggers actions, navigations, form submissions, and modal dialogues with built-in accessibility.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Button } from '@core-circle/ui';

<Button variant="primary" size="md">
  Get Started
</Button>`}
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
