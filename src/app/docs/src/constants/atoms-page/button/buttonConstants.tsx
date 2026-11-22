'use client';

import type { ReactNode } from 'react';
import { 
  Sparkles, 
  Shield, 
  ArrowRight, 
  Heart, 
  Star, 
  ShoppingCart, 
  Lock, 
  Download, 
  Share, 
  Play 
} from '@core-circle/icons';
import { Button, type ButtonProps } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ButtonThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface ButtonVariantItem {
  label: string;
  variant: ButtonProps['variant'];
  shape?: ButtonProps['shape'];
  size?: ButtonProps['size'];
}

export interface ButtonVariantGroup {
  id: string;
  title: string;
  description: string;
  items: ButtonVariantItem[];
}

export const BUTTON_HEADER_CONTENT = {
  title: 'Button',
  description: 'Interactive button primitive supporting 12 visual styling variants, multiple size scales, loading animations, icon slots, and elevation surfaces.',
};

export const BUTTON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Button' },
];

export const BUTTON_THEME_CONFIGS: ButtonThemeConfig[] = [
  {
    id: 'theming-vip-buttons',
    sectionTitle: '1. VIP Brand & Conversion CTAs Theme',
    description: 'Luminous gradient buttons with capsule pill contours and radiant star icon badges.',
    previewTitle: 'Conversion Call-to-Action Group',
    render: () => (
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="gradient" shape="pill" size="lg" endIcon={<ArrowRight size={18} />}>
          Unlock All Pro Features
        </Button>
        <Button variant="glassmorphic" shape="pill" size="lg" startIcon={<Sparkles size={18} className="text-amber-500" />}>
          Join VIP Waitlist
        </Button>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Button variant="gradient" shape="pill" size="lg" endIcon={<ArrowRight size={18} />}>
    Unlock All Pro Features
  </Button>
  <Button variant="glassmorphic" shape="pill" size="lg" startIcon={<Sparkles size={18} className="text-amber-500" />}>
    Join VIP Waitlist
  </Button>
</div>`,
  },
  {
    id: 'theming-saas-actions',
    sectionTitle: '2. Enterprise Workflow & Workspace Actions Theme',
    description: 'Subtle floating, outline, and destructive action buttons for operational dashboards.',
    previewTitle: 'Workspace Action Button Group',
    render: () => (
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
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Button variant="floating" size="md" startIcon={<Shield size={16} className="text-core-circle-primary" />}>
    Deploy Security Rules
  </Button>
  <Button variant="outline" size="md">
    Configure Webhooks
  </Button>
  <Button variant="destructive" shape="rounded" size="md">
    Revoke API Key
  </Button>
</div>`,
  },
  {
    id: 'theming-ecommerce-actions',
    sectionTitle: '3. E-Commerce Commerce & Cart Controls Theme',
    description: 'High-intent shopping actions with wishlist heart toggles and express checkout triggers.',
    previewTitle: 'Storefront Purchase Button Bar',
    render: () => (
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
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Button variant="primary" size="lg" shape="pill" startIcon={<ShoppingCart size={18} />}>
    Add to Shopping Bag
  </Button>
  <Button variant="soft" size="lg" shape="pill" startIcon={<Heart size={18} className="text-rose-500" />}>
    Save to Wishlist
  </Button>
  <Button variant="outline" size="lg" shape="pill">
    Buy Now with 1-Click
  </Button>
</div>`,
  },
  {
    id: 'theming-sso-auth',
    sectionTitle: '4. Authentication & SSO Sign-In Theme',
    description: 'Clean full-width and pill authentication buttons for login gateways.',
    previewTitle: 'OAuth & SSO Login Triggers',
    render: () => (
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
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Button variant="card" size="md" startIcon={<Lock size={16} className="text-core-circle-primary" />}>
    Sign in with Okta SCIM
  </Button>
  <Button variant="minimal" size="md" endIcon={<ArrowRight size={16} />}>
    Continue as Guest
  </Button>
  <Button variant="outline" size="md" startIcon={<Download size={16} />}>
    Download Recovery Key
  </Button>
</div>`,
  },
  {
    id: 'theming-media-controls',
    sectionTitle: '5. Media Playback & Stream Controls Theme',
    description: 'Circular and floating playback buttons for audio, video, and podcast player bars.',
    previewTitle: 'Player Controls Button Group',
    render: () => (
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
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Button variant="primary" shape="circle" size="lg" aria-label="Play Track">
    <Play size={20} />
  </Button>
  <Button variant="soft" shape="circle" size="md" aria-label="Share">
    <Share size={18} />
  </Button>
  <Button variant="glassmorphic" shape="pill" size="md" startIcon={<Star size={16} className="text-amber-500" />}>
    Add to Favorites
  </Button>
</div>`,
  },
];

export const BUTTON_VARIANT_GROUPS: ButtonVariantGroup[] = [
  {
    id: 'button-variants-solid',
    title: '1. Solid Brand & Semantic',
    description: 'Primary, secondary, success, warning, and destructive solid buttons.',
    items: [
      { label: 'Primary', variant: 'primary' },
      { label: 'Secondary', variant: 'secondary' },
      { label: 'Success', variant: 'success' },
      { label: 'Warning', variant: 'warning' },
      { label: 'Destructive', variant: 'destructive' },
    ],
  },
  {
    id: 'button-variants-surface',
    title: '2. Surface & Effect Variants',
    description: 'Outline, ghost, soft wash, floating shadow, glassmorphic, and gradient buttons.',
    items: [
      { label: 'Outline', variant: 'outline' },
      { label: 'Ghost', variant: 'ghost' },
      { label: 'Soft Wash', variant: 'soft' },
      { label: 'Floating Depth', variant: 'floating' },
      { label: 'Glassmorphic', variant: 'glassmorphic' },
      { label: 'Gradient', variant: 'gradient' },
    ],
  },
  {
    id: 'button-variants-shapes',
    title: '3. Shapes & Sizing',
    description: 'Pill, rounded, and square contours across small, medium, and large scales.',
    items: [
      { label: 'Small Pill', variant: 'primary', shape: 'pill', size: 'sm' },
      { label: 'Medium Rounded', variant: 'primary', shape: 'rounded', size: 'md' },
      { label: 'Large Square', variant: 'primary', shape: 'square', size: 'lg' },
    ],
  },
];

export const BUTTON_PLAYGROUND_SECTION = {
  id: 'button-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 12 variants, shapes, sizes, loading states, and icon slots.',
};

export const BUTTON_MOCK_CONSUMER_CODE = `import React, { useState } from 'react';
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
};`;

export const BUTTON_MOCK_SECTION = {
  id: 'button-mock',
  title: 'Async Form Submission Button',
  description: 'Handle loading spinners and disabled states automatically during API mutation calls.',
  snippets: [
    { label: 'Async Mutation Handler Pattern', code: BUTTON_MOCK_CONSUMER_CODE },
  ],
};

export const BUTTON_QUICK_USAGE_CODE = `import { Button } from '@core-circle/ui';

<Button variant="primary" size="md">
  Get Started
</Button>`;

export const BUTTON_OVERVIEW_SECTION = {
  id: 'button-usage',
  title: 'Introduction',
  description: 'The Button atom triggers actions, navigations, form submissions, and modal dialogues with built-in accessibility.',
  quickUsage: {
    label: 'Quick Usage',
    code: BUTTON_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const BUTTON_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline' | 'ghost' | 'glassmorphic' | 'gradient' | 'floating' | 'pill' | 'soft'",
    defaultValue: "'primary'",
    description: 'Visual styling variant of the button (12 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'icon'",
    defaultValue: "'md'",
    description: 'Size dimensions and internal padding scale.'
  },
  {
    name: 'shape',
    type: "'rounded' | 'pill' | 'square'",
    defaultValue: "'rounded'",
    description: 'Border radius shape of the button container.'
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders an animated spinner and disables interaction.'
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Icon element rendered before the button label.'
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description: 'Icon element rendered after the button label.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Expands the button to 100% of its parent container.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables pointer events and lowers opacity.'
  },
];
