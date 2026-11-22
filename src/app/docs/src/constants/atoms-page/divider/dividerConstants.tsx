import React from 'react';
import { Divider, Button, Badge } from '@core-circle/ui';
import { Shield, Clock, HomeIcon } from '@core-circle/icons';
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

export const DIVIDER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Divider' },
];

export const DIVIDER_HEADER_CONTENT = {
  title: 'Divider',
  description: 'A clean visual line separator between content blocks, supporting 10 styles, embedded labels, and dual orientations.',
};

export const DIVIDER_SECTIONS = [
  { id: 'theming', title: 'Theming', description: 'Divider line partition themes across authentication, settings, checkout, and timelines.' },
  { id: 'variants', title: 'Variants', description: '10 visual divider line styles and embedded content alignments.' },
  { id: 'playground', title: 'Playground', description: 'Interactive divider playground.' },
  { id: 'mock-code', title: 'Mock Code', description: 'Dynamic form section partition pattern.' },
  { id: 'overview', title: 'Overview', description: 'Divider line semantics and props reference.' },
];

export const DIVIDER_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-oauth-divider',
    title: '1. Social OAuth Sign-In Partition Theme',
    description: 'Gradient divider with centered badge separator for authentication and login flows.',
    previewTitle: 'Authentication Divider',
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Button variant="primary" size="md" fullWidth>Continue with Work Email</Button>
  <Divider variant="gradient" align="center">
    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">OR CONTINUE WITH</span>
  </Divider>
  <div className="grid grid-cols-2 gap-3">
    <Button variant="outline" size="md">Google</Button>
    <Button variant="outline" size="md">GitHub</Button>
  </div>
</div>`,
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <Button variant="primary" size="md" fullWidth>Continue with Work Email</Button>
        <Divider variant="gradient" align="center">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">OR CONTINUE WITH</span>
        </Divider>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" size="md">Google</Button>
          <Button variant="outline" size="md">GitHub</Button>
        </div>
      </div>
    )
  },
  {
    id: 'theming-settings-partition',
    title: '2. Account & Security Settings Partition Theme',
    description: 'Clean structured divider with left-aligned section labels for multi-category settings forms.',
    previewTitle: 'Form Category Divider',
    code: `<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="font-bold text-sm text-slate-900">Email Notifications</span>
    <Badge variant="primary" size="sm" shape="pill">Enabled</Badge>
  </div>
  <Divider variant="gradient" align="start">
    <span className="text-xs font-bold text-core-circle-primary flex items-center gap-1">
      <Shield size={12} /> TWO-FACTOR AUTHENTICATION
    </span>
  </Divider>
  <p className="text-xs text-slate-500">Require an authenticator app (TOTP) or hardware key when signing in.</p>
  <Button variant="outline" size="sm" className="w-fit">Configure 2FA</Button>
</div>`,
    render: () => (
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-slate-900">Email Notifications</span>
          <Badge variant="primary" size="sm" shape="pill">Enabled</Badge>
        </div>
        <Divider variant="gradient" align="start">
          <span className="text-xs font-bold text-core-circle-primary flex items-center gap-1">
            <Shield size={12} /> TWO-FACTOR AUTHENTICATION
          </span>
        </Divider>
        <p className="text-xs text-slate-500">Require an authenticator app (TOTP) or hardware security key when signing in.</p>
        <Button variant="outline" size="sm" className="w-fit">Configure 2FA</Button>
      </div>
    )
  },
  {
    id: 'theming-order-summary',
    title: '3. E-Commerce Checkout & Price Summary Theme',
    description: 'Dashed and double line dividers separating items, subtotals, taxes, and final totals.',
    previewTitle: 'Cart Checkout Summary Divider',
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
  <div className="flex justify-between text-sm text-slate-600">
    <span>Subtotal (3 items)</span>
    <span className="font-bold text-slate-900">$249.00</span>
  </div>
  <div className="flex justify-between text-sm text-slate-600">
    <span>Shipping & Handling</span>
    <span className="font-bold text-emerald-600">FREE</span>
  </div>
  <Divider variant="dashed" />
  <div className="flex justify-between text-base font-bold text-slate-900">
    <span>Total Due</span>
    <span className="text-lg text-core-circle-primary">$249.00</span>
  </div>
</div>`,
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal (3 items)</span>
          <span className="font-bold text-slate-900">$249.00</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Shipping & Handling</span>
          <span className="font-bold text-emerald-600">FREE</span>
        </div>
        <Divider variant="dashed" />
        <div className="flex justify-between text-base font-bold text-slate-900">
          <span>Total Due</span>
          <span className="text-lg text-core-circle-primary">$249.00</span>
        </div>
      </div>
    )
  },
  {
    id: 'theming-activity-timeline',
    title: '4. Activity Feed & Date Stamp Partition Theme',
    description: 'Badge-anchored timeline dividers grouping chronological event feeds.',
    previewTitle: 'Chronological Event Divider',
    code: `<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="text-xs text-slate-600">API Key rotated by admin@corecircle.design</div>
  <Divider variant="fade" align="center">
    <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1">
      <Clock size={12} /> TODAY — 14:32 UTC
    </span>
  </Divider>
  <div className="text-xs text-slate-600">New edge deployment completed across 14 clusters.</div>
</div>`,
    render: () => (
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="text-xs text-slate-600">API Key rotated by admin@corecircle.design</div>
        <Divider variant="fade" align="center">
          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1">
            <Clock size={12} /> TODAY — 14:32 UTC
          </span>
        </Divider>
        <div className="text-xs text-slate-600">New edge deployment completed across 14 clusters.</div>
      </div>
    )
  },
  {
    id: 'theming-step-counter',
    title: '5. Multi-Step Form & Onboarding Partition Theme',
    description: 'Accent-pill dividers showing current step in registration and checkout wizards.',
    previewTitle: 'Wizard Step Partition',
    code: `<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Divider variant="gradient" align="center">
    <Badge variant="primary" shape="pill" size="sm">Step 2 of 4: Organization Profile</Badge>
  </Divider>
  <p className="text-xs text-center text-slate-500">Provide your registered business name and tax residency.</p>
</div>`,
    render: () => (
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <Divider variant="gradient" align="center">
          <Badge variant="primary" shape="pill" size="sm">Step 2 of 4: Organization Profile</Badge>
        </Divider>
        <p className="text-xs text-center text-slate-500">Provide your registered business name and tax residency.</p>
      </div>
    )
  }
];

export const DIVIDER_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'divider-styles',
    title: '1. Visual Line Styles',
    description: 'Solid, dashed, dotted, double, gradient, fade, and accent variants.',
    items: [
      {
        title: 'Geometric Line Styles',
        code: `<Divider variant="solid" />\n<Divider variant="dashed" />\n<Divider variant="dotted" />\n<Divider variant="double" thickness="lg" />`,
        render: () => (
          <div className="flex flex-col gap-6 w-full py-4">
            <Divider variant="solid" />
            <Divider variant="dashed" />
            <Divider variant="dotted" />
            <Divider variant="double" thickness="lg" />
          </div>
        )
      }
    ]
  },
  {
    id: 'divider-with-content',
    title: '2. Content & Label Alignment',
    description: 'Dividers with text, icons, or badges positioned at start, center, or end.',
    items: [
      {
        title: 'Aligned Labels',
        code: `<Divider align="start">Start Label</Divider>\n<Divider align="center">Centered</Divider>\n<Divider align="end">End Label</Divider>`,
        render: () => (
          <div className="flex flex-col gap-6 w-full">
            <Divider align="start"><span className="text-xs font-bold text-slate-500">SECTION 1</span></Divider>
            <Divider align="center"><span className="text-xs font-bold text-slate-500">OR</span></Divider>
            <Divider align="end"><span className="text-xs font-bold text-slate-500">CONTINUE</span></Divider>
          </div>
        )
      }
    ]
  }
];

export const DIVIDER_PLAYGROUND_SECTION = {
  id: 'divider-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 line variants, thicknesses, label alignments, and orientations.',
};

export const DIVIDER_MOCK_SECTION = {
  id: 'divider-mock',
  title: 'Form Section Partition Pattern',
  description: 'Use dividers with badges to organize complex settings and multi-step forms.',
  snippets: [
    {
      label: 'Section Divider Component Pattern',
      code: `import React from 'react';
import { Divider, Badge } from '@core-circle/ui';
import { Shield } from '@core-circle/icons';

export const FormSection = ({ title, children }) => (
  <div className="space-y-4">
    <Divider variant="gradient" align="start">
      <Badge variant="primary" shape="pill" size="sm" startIcon={<Shield size={12} />}>
        {title}
      </Badge>
    </Divider>
    <div className="pl-2">{children}</div>
  </div>
);`,
    }
  ]
};

export const DIVIDER_OVERVIEW_SECTION = {
  id: 'divider-usage',
  title: 'Introduction',
  description: 'The Divider atom visually segments content, groups form sections, and provides structural breathing room.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Divider } from '@core-circle/ui';

<Divider variant="gradient" align="center">
  OR
</Divider>`,
  },
  propsTableTitle: 'Component Props',
};

export const DIVIDER_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'solid' | 'dashed' | 'dotted' | 'gradient' | 'fade' | 'accent' | 'subtle' | 'thick' | 'double' | 'glow'",
    defaultValue: "'solid'",
    description: 'The visual styling variant of the divider line (10 variants).'
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: 'The layout direction of the separator.'
  },
  {
    name: 'thickness',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: 'Line thickness width/height.'
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    defaultValue: "'center'",
    description: 'Alignment of embedded text or badge content (horizontal only).'
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional embedded label, badge, or icon node.'
  },
];
