'use client';

import type { ReactNode } from 'react';
import { 
  Bell, 
  ShoppingBag, 
  Mail, 
  Terminal 
} from '@core-circle/icons';
import { Indicator, Avatar, Button, Badge, type IndicatorProps } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface IndicatorThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface IndicatorVariantItem {
  variant: IndicatorProps['variant'];
  content?: string;
  count?: number;
  size?: IndicatorProps['size'];
  label?: string;
}

export interface IndicatorVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const INDICATOR_HEADER_CONTENT = {
  title: 'Indicator',
  description: 'A status and notification marker primitive supporting anchored badges, live radar pulse pings, standalone presence chips, numeric overflow clipping, and 10 visual variants.',
};

export const INDICATOR_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Indicator' },
];

export const INDICATOR_THEME_CONFIGS: IndicatorThemeConfig[] = [
  {
    id: 'theming-server-radar',
    sectionTitle: '1. Real-Time Infrastructure Status & Radar Ping Theme',
    description: 'Micro status dot emitting continuous pulse ping animation for live edge nodes.',
    previewTitle: 'Edge Node Health Monitor',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Indicator variant="success" size="sm" pulse standalone />
          <div>
            <h4 className="font-bold text-sm text-slate-900">US-East Primary Gateway</h4>
            <p className="text-xs text-slate-500">Latency: 14ms • 99.99% Uptime</p>
          </div>
        </div>
        <Badge variant="success" shape="pill" size="sm">Operational</Badge>
      </div>
    ),
    code: `<div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <Indicator variant="success" size="sm" pulse standalone />
    <div>
      <h4 className="font-bold text-sm text-slate-900">US-East Primary Gateway</h4>
      <p className="text-xs text-slate-500">Latency: 14ms • 99.99% Uptime</p>
    </div>
  </div>
  <Badge variant="success" shape="pill" size="sm">Operational</Badge>
</div>`,
  },
  {
    id: 'theming-avatar-presence',
    sectionTitle: '2. Team Presence & Active Collaboration Status Theme',
    description: 'Avatar anchor with bottom-right presence indicators for online, away, and busy states.',
    previewTitle: 'Team Member Presence Badges',
    render: () => (
      <div className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit mx-auto">
        <div className="flex flex-col items-center gap-1.5">
          <Indicator variant="success" size="sm" position="bottom-right">
            <Avatar name="Sarah Jenkins" size="lg" />
          </Indicator>
          <span className="text-[11px] font-bold text-slate-700">Online</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Indicator variant="warning" size="sm" position="bottom-right">
            <Avatar name="Alex Rivera" size="lg" />
          </Indicator>
          <span className="text-[11px] font-bold text-slate-700">Away</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Indicator variant="destructive" size="sm" position="bottom-right">
            <Avatar name="David Chen" size="lg" />
          </Indicator>
          <span className="text-[11px] font-bold text-slate-700">Busy</span>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit">
  <Indicator variant="success" size="sm" position="bottom-right">
    <Avatar name="Sarah Jenkins" size="lg" />
  </Indicator>
  <Indicator variant="warning" size="sm" position="bottom-right">
    <Avatar name="Alex Rivera" size="lg" />
  </Indicator>
  <Indicator variant="destructive" size="sm" position="bottom-right">
    <Avatar name="David Chen" size="lg" />
  </Indicator>
</div>`,
  },
  {
    id: 'theming-cart-badge',
    sectionTitle: '3. E-Commerce Cart & Action Bar Notification Theme',
    description: 'Counter badge attached to action buttons with automatic clipping.',
    previewTitle: 'Shopping Cart & Notification Triggers',
    render: () => (
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit mx-auto">
        <Indicator variant="primary" count={3} size="md">
          <Button variant="outline" size="md" startIcon={<ShoppingBag size={18} />}>
            Shopping Bag
          </Button>
        </Indicator>
        <Indicator variant="destructive" count={12} size="md" pulse>
          <Button variant="outline" size="md" startIcon={<Bell size={18} />}>
            Alerts
          </Button>
        </Indicator>
      </div>
    ),
    code: `<div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit">
  <Indicator variant="primary" count={3} size="md">
    <Button variant="outline" size="md" startIcon={<ShoppingBag size={18} />}>
      Shopping Bag
    </Button>
  </Indicator>
  <Indicator variant="destructive" count={12} size="md" pulse>
    <Button variant="outline" size="md" startIcon={<Bell size={18} />}>
      Alerts
    </Button>
  </Indicator>
</div>`,
  },
  {
    id: 'theming-release-pill',
    sectionTitle: '4. Developer CI/CD Release & Feature Tag Theme',
    description: 'Gradient standalone pill indicator displaying version badges.',
    previewTitle: 'Release Pipeline Tag',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Terminal size={18} className="text-emerald-400" />
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">Production Engine</h4>
            <p className="text-xs text-slate-400">Deployed 2m ago to 14 regions</p>
          </div>
        </div>
        <Indicator variant="gradient" content="v3.2.0" size="lg" shape="pill" standalone />
      </div>
    ),
    code: `<div className="p-4 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle shadow-sm flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <Terminal size={18} className="text-emerald-400" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Production Engine</h4>
      <p className="text-xs text-slate-400">Deployed 2m ago to 14 regions</p>
    </div>
  </div>
  <Indicator variant="gradient" content="v3.2.0" size="lg" shape="pill" standalone />
</div>`,
  },
  {
    id: 'theming-inbox-overflow',
    sectionTitle: '5. Enterprise Inbox & Message Counter (99+ Clipping) Theme',
    description: 'Numeric counter with automatic 99+ overflow clipping.',
    previewTitle: 'Unread Inbox Notification Counter',
    render: () => (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Indicator variant="destructive" count={142} max={99} size="md">
            <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
              <Mail size={20} />
            </div>
          </Indicator>
          <div>
            <h4 className="font-bold text-sm text-slate-900">Unread Support Tickets</h4>
            <p className="text-xs text-slate-500">Requires triage review</p>
          </div>
        </div>
        <Button variant="primary" size="sm">Open Queue</Button>
      </div>
    ),
    code: `<div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <Indicator variant="destructive" count={142} max={99} size="md">
      <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
        <Mail size={20} />
      </div>
    </Indicator>
    <div>
      <h4 className="font-bold text-sm text-slate-900">Unread Support Tickets</h4>
      <p className="text-xs text-slate-500">Requires triage review</p>
    </div>
  </div>
  <Button variant="primary" size="sm">Open Queue</Button>
</div>`,
  },
];

export const INDICATOR_VARIANT_GROUPS: IndicatorVariantGroup[] = [
  {
    id: 'indicator-variants-colors',
    title: '1. Color & Style Variants (10 Variants)',
    description: 'Primary, success, warning, destructive, info, gradient, glassmorphic, soft, bordered, and neutral.',
    render: () => (
      <div className="flex flex-wrap gap-6 items-center w-full">
        <Indicator variant="primary" content="P" size="md" standalone />
        <Indicator variant="success" content="S" size="md" standalone />
        <Indicator variant="warning" content="W" size="md" standalone />
        <Indicator variant="destructive" content="D" size="md" standalone />
        <Indicator variant="info" content="I" size="md" standalone />
        <Indicator variant="gradient" content="G" size="md" standalone />
        <Indicator variant="glassmorphic" content="GL" size="md" standalone />
        <Indicator variant="soft" content="SF" size="md" standalone />
        <Indicator variant="bordered" content="B" size="md" standalone />
        <Indicator variant="neutral" content="N" size="md" standalone />
      </div>
    ),
  },
  {
    id: 'indicator-variants-sizes',
    title: '2. Size Scales',
    description: 'Micro dot (xs), small dot (sm), medium badge (md), large (lg), and extra large (xl).',
    render: () => (
      <div className="flex flex-wrap gap-8 items-center w-full">
        <div className="flex items-center gap-2">
          <Indicator size="xs" variant="success" standalone />
          <span className="text-xs text-slate-500">XS (Dot)</span>
        </div>
        <div className="flex items-center gap-2">
          <Indicator size="sm" variant="success" standalone />
          <span className="text-xs text-slate-500">SM (Dot)</span>
        </div>
        <div className="flex items-center gap-2">
          <Indicator size="md" count={5} variant="primary" standalone />
          <span className="text-xs text-slate-500">MD Badge</span>
        </div>
        <div className="flex items-center gap-2">
          <Indicator size="lg" count={25} variant="primary" standalone />
          <span className="text-xs text-slate-500">LG Badge</span>
        </div>
        <div className="flex items-center gap-2">
          <Indicator size="xl" count={99} variant="primary" standalone />
          <span className="text-xs text-slate-500">XL Badge</span>
        </div>
      </div>
    ),
  },
];

export const INDICATOR_PLAYGROUND_SECTION = {
  id: 'indicator-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 visual variants, anchor positions, radar pings, and numeric counters.',
};

export const INDICATOR_MOCK_PAYLOAD = JSON.stringify(
  {
    event: 'notification:new',
    channel: 'user_inbox',
    unread_count: 14,
    has_critical_alerts: true,
  },
  null,
  2
);

export const INDICATOR_MOCK_CONSUMER_CODE = `import React, { useState, useEffect } from 'react';
import { Indicator, Button } from '@core-circle/ui';
import { Bell } from '@core-circle/icons';

export const LiveNotificationBell = () => {
  const [unreadCount, setUnreadCount] = useState(14);

  return (
    <Indicator 
      variant="destructive" 
      count={unreadCount} 
      max={99}
      pulse={unreadCount > 10}
    >
      <Button variant="outline" startIcon={<Bell size={18} />}>
        Notifications
      </Button>
    </Indicator>
  );
};`;

export const INDICATOR_MOCK_SECTION = {
  id: 'indicator-mock',
  title: 'Real-Time WebSocket Notification Pattern',
  description: 'Subscribe to server events and dynamically increment unread counter indicators.',
  snippets: [
    { label: 'Sample WebSocket Notification Payload', code: INDICATOR_MOCK_PAYLOAD },
    { label: 'Dynamic Consumer Component', code: INDICATOR_MOCK_CONSUMER_CODE },
  ],
};

export const INDICATOR_QUICK_USAGE_CODE = `import { Indicator, Avatar } from '@core-circle/ui';

<Indicator variant="success" size="sm" position="bottom-right">
  <Avatar name="Sarah Jenkins" />
</Indicator>`;

export const INDICATOR_OVERVIEW_SECTION = {
  id: 'indicator-usage',
  title: 'Introduction',
  description: 'The Indicator atom displays presence status, notification counters, and pulsing radar markers on top of avatars and buttons.',
  quickUsage: {
    label: 'Quick Usage',
    code: INDICATOR_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const INDICATOR_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'success' | 'warning' | 'destructive' | 'info' | 'gradient' | 'glassmorphic' | 'soft' | 'bordered' | 'neutral'",
    defaultValue: "'primary'",
    description: 'Visual color and surface style (10 options).'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size scale from micro status dot (xs) to prominent counter (xl).'
  },
  {
    name: 'position',
    type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'middle'",
    defaultValue: "'top-right'",
    description: 'Anchor placement relative to the child element.'
  },
  {
    name: 'shape',
    type: "'circle' | 'pill' | 'square' | 'rounded'",
    defaultValue: "'circle'",
    description: 'Contour shape of the indicator badge.'
  },
  {
    name: 'pulse',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to emit a continuous radar ping animation.'
  },
  {
    name: 'content',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Custom text or element rendered inside the badge.'
  },
  {
    name: 'count',
    type: 'number',
    defaultValue: '-',
    description: 'Numeric counter automatically formatted with max clipping.'
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '99',
    description: 'Maximum number before appending the "+" suffix (e.g. 99+).'
  },
  {
    name: 'standalone',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to render as an inline indicator without wrapping children.'
  },
  {
    name: 'show',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Visibility flag for toggling indicator on or off.'
  }
];
