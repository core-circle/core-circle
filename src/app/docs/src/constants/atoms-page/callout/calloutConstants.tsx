import React from 'react';
import { Callout, Button } from '@core-circle/ui';
import {
  Sparkles,
  HomeIcon,
} from '@core-circle/icons';
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

export const CALLOUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Callout' },
];

export const CALLOUT_HEADER_CONTENT = {
  title: 'Callout',
  description: 'A prominent contextual banner designed to surface key updates, operational alerts, status announcements, and warnings with dismissible controls.',
};

export const CALLOUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production callouts for system maintenance windows, trial expiration notices, security advisories, and feature announcements.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore semantic color variants (info, warning, success, danger, brand, neutral) and sizing scales.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive callout sandbox with live variant, size, title, and dismissible toggles.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic system alert broadcast payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const CALLOUT_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-system-maintenance',
    title: '1. Scheduled Maintenance & Downtime Advisory',
    description: 'Warning notice informing teams of an upcoming database migration window.',
    previewTitle: 'Maintenance Window Advisory',
    code: `<Callout
  variant="warning"
  title="Scheduled Maintenance: Sunday at 02:00 UTC"
  dismissible
  action={<Button variant="outline" size="sm">View Schedule</Button>}
>
  Our primary database replica will undergo routine storage optimization. API requests may experience up to 90 seconds of increased latency.
</Callout>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Callout
          variant="warning"
          title="Scheduled Maintenance: Sunday at 02:00 UTC"
          dismissible
          action={<Button variant="outline" size="sm">View Schedule</Button>}
        >
          Our primary database replica will undergo routine storage optimization. API requests may experience up to 90 seconds of increased latency.
        </Callout>
      </div>
    ),
  },
  {
    id: 'theming-feature-announcement',
    title: '2. Product Feature Launch & Brand Callout',
    description: 'Brand-styled callout highlighting the release of multi-tenant theme generators.',
    previewTitle: 'New Feature Announcement',
    code: `<Callout
  variant="brand"
  title="CoreCircle Theme Studio is Live"
  icon={<Sparkles size={18} />}
  action={<Button variant="primary" size="sm">Explore Studio</Button>}
>
  Generate custom color scales, typography tokens, and radius tokens in real-time with automatic WCAG contrast validation.
</Callout>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Callout
          variant="brand"
          title="CoreCircle Theme Studio is Live"
          icon={<Sparkles size={18} />}
          action={<Button variant="primary" size="sm">Explore Studio</Button>}
        >
          Generate custom color scales, typography tokens, and radius tokens in real-time with automatic WCAG contrast validation.
        </Callout>
      </div>
    ),
  },
  {
    id: 'theming-deployment-success',
    title: '3. Deployment Verification Banner',
    description: 'Success status notice confirming cluster configuration update.',
    previewTitle: 'Cluster Deployment Success',
    code: `<Callout
  variant="success"
  title="Production Cluster Synchronized"
  dismissible
>
  All 12 edge nodes have successfully synced with commit 4f982b. Zero anomalous requests detected.
</Callout>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Callout
          variant="success"
          title="Production Cluster Synchronized"
          dismissible
        >
          All 12 edge nodes have successfully synced with commit 4f982b. Zero anomalous requests detected.
        </Callout>
      </div>
    ),
  },
  {
    id: 'theming-security-alert',
    title: '4. Critical Security & Auth Alert',
    description: 'High-visibility danger alert alerting user of expired credentials or revoked access.',
    previewTitle: 'Security Credential Alert',
    code: `<Callout
  variant="danger"
  title="OAuth 2.0 Token Revoked"
  action={<Button variant="danger" size="sm">Re-Authenticate</Button>}
>
  Your integration token with GitHub Enterprise was invalidated. Please re-authenticate to restore CI pipeline reporting.
</Callout>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Callout
          variant="danger"
          title="OAuth 2.0 Token Revoked"
          action={<Button variant="danger" size="sm">Re-Authenticate</Button>}
        >
          Your integration token with GitHub Enterprise was invalidated. Please re-authenticate to restore CI pipeline reporting.
        </Callout>
      </div>
    ),
  },
  {
    id: 'theming-neutral-doc',
    title: '5. Documentation Tip & Informational Callout',
    description: 'Clean neutral callout for inline documentation tips and best practices.',
    previewTitle: 'Documentation Best Practice',
    code: `<Callout
  variant="neutral"
  title="Pro-Tip: CVA Variants"
>
  Always define component variants in a dedicated styles file to maintain 0 runtime styling overhead and clean tree-shaking.
</Callout>`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <Callout
          variant="neutral"
          title="Pro-Tip: CVA Variants"
        >
          Always define component variants in a dedicated styles file to maintain 0 runtime styling overhead and clean tree-shaking.
        </Callout>
      </div>
    ),
  },
];

export const CALLOUT_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-styles',
    title: 'Semantic Variants',
    description: 'Six contextual colors communicating intent and severity.',
    items: [
      {
        title: 'Info Variant',
        code: `<Callout variant="info" title="Info Notice">System operating normally.</Callout>`,
        render: () => <Callout variant="info" title="Info Notice">System operating normally.</Callout>,
      },
      {
        title: 'Success Variant',
        code: `<Callout variant="success" title="Success Notice">Action completed successfully.</Callout>`,
        render: () => <Callout variant="success" title="Success Notice">Action completed successfully.</Callout>,
      },
      {
        title: 'Warning Variant',
        code: `<Callout variant="warning" title="Warning Notice">Threshold approaching 90%.</Callout>`,
        render: () => <Callout variant="warning" title="Warning Notice">Threshold approaching 90%.</Callout>,
      },
      {
        title: 'Danger Variant',
        code: `<Callout variant="danger" title="Danger Alert">Failed to connect to gateway.</Callout>`,
        render: () => <Callout variant="danger" title="Danger Alert">Failed to connect to gateway.</Callout>,
      },
      {
        title: 'Brand Variant',
        code: `<Callout variant="brand" title="Brand Announcement">New theme studio released.</Callout>`,
        render: () => <Callout variant="brand" title="Brand Announcement">New theme studio released.</Callout>,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Three proportional sizes (sm, md, lg).',
    items: [
      {
        title: 'Small Scale (sm)',
        code: `<Callout size="sm" title="Small Scale">Compact callout suited for sidebars.</Callout>`,
        render: () => <Callout size="sm" title="Small Scale">Compact callout suited for sidebars.</Callout>,
      },
      {
        title: 'Medium Scale (md)',
        code: `<Callout size="md" title="Medium Scale">Default standard callout banner.</Callout>`,
        render: () => <Callout size="md" title="Medium Scale">Default standard callout banner.</Callout>,
      },
      {
        title: 'Large Scale (lg)',
        code: `<Callout size="lg" title="Large Scale">Prominent callout for high-impact announcements.</Callout>`,
        render: () => <Callout size="lg" title="Large Scale">Prominent callout for high-impact announcements.</Callout>,
      },
    ],
  },
];

export const CALLOUT_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test callout semantic variants, sizes, dismissible buttons, and custom titles.',
};

export const CALLOUT_MOCK_SECTION = {
  id: 'mock-code',
  title: 'System Alert Broadcast Integration',
  description: 'Pattern for rendering dynamic system banner notifications from an API payload.',
  snippets: [
    {
      label: 'NotificationBanner.tsx',
      code: `import React from 'react';
import { Callout, Button } from '@core-circle/ui';

export interface SystemBroadcast {
  id: string;
  severity: 'info' | 'warning' | 'success' | 'danger';
  headline: string;
  message: string;
  actionUrl?: string;
  actionLabel?: string;
}

export function NotificationBanner({ alert }: { alert: SystemBroadcast }) {
  return (
    <Callout
      variant={alert.severity}
      title={alert.headline}
      dismissible
      action={
        alert.actionUrl ? (
          <Button variant="outline" size="sm" onClick={() => window.open(alert.actionUrl)}>
            {alert.actionLabel || 'Details'}
          </Button>
        ) : undefined
      }
    >
      {alert.message}
    </Callout>
  );
}`,
    },
  ],
};

export const CALLOUT_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Callout } from '@core-circle/ui';

export default function MyNotice() {
  return (
    <Callout variant="info" title="Important Update" dismissible>
      Your deployment was successfully initiated and is now building on worker node 04.
    </Callout>
  );
}`,
  },
  propsTableTitle: 'Callout Props',
};

export const CALLOUT_PROPS_DATA: PropItem[] = [
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'Main body message content.',
  },
  {
    name: 'title',
    type: 'ReactNode',
    required: false,
    description: 'Optional bold headline text.',
  },
  {
    name: 'variant',
    type: "'info' | 'success' | 'warning' | 'danger' | 'brand' | 'neutral'",
    required: false,
    defaultValue: "'info'",
    description: 'Semantic color styling theme.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Size scale determining typography and padding.',
  },
  {
    name: 'icon',
    type: 'ReactNode | boolean',
    required: false,
    defaultValue: 'true',
    description: 'Leading icon element or boolean toggle.',
  },
  {
    name: 'dismissible',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description: 'Whether to show a top-right close/dismiss button.',
  },
  {
    name: 'onDismiss',
    type: '() => void',
    required: false,
    description: 'Callback fired when user clicks the dismiss button.',
  },
  {
    name: 'action',
    type: 'ReactNode',
    required: false,
    description: 'Trailing action button or controls slot.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the container element.',
  },
];
