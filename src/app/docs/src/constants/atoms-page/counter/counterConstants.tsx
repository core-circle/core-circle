import type { ReactNode } from 'react';
import { Counter, Button, Typography, Badge } from '@core-circle/ui';
import {
  Bell,
  ShoppingBag,
  Cloud,
  FolderOpen,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';
import ComponentPreview from '../../../components/component-preview';

export interface CounterThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface CounterVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const COUNTER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Counter' },
];

export const COUNTER_HEADER_CONTENT = {
  title: 'Counter',
  description:
    'The Counter component is used to display numeric counts, typically used within buttons, tabs, or badges.',
};

export const COUNTER_THEME_CONFIGS: CounterThemeConfig[] = [
  {
    id: 'theming-notification-bar',
    sectionTitle: '1. Enterprise App Bar & Inbox Notification Theme',
    description:
      'Navigation bar with unread message counts, system alerts, and capped notification badges.',
    previewTitle: 'Application Header Navigation',
    render: () => (
      <div className="w-full max-w-2xl mx-auto p-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Typography
            variant="h4"
            className="font-core-circle-bold text-core-circle-text-main text-base"
          >
            CoreCircle Portal
          </Typography>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-1">
              Inbox <Counter count={14} size="xs" variant="primary" />
            </span>
            <span className="flex items-center gap-2 text-core-circle-text-muted hover:text-core-circle-text-main pb-1 cursor-pointer">
              Drafts <Counter count={3} size="xs" variant="neutral" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            startIcon={<Bell size={16} />}
            endIcon={
              <Counter count={128} max={99} size="xs" variant="primary" />
            }
          >
            Alerts
          </Button>
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
  <div className="flex items-center gap-6">
    <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-base">CoreCircle Portal</Typography>
    <div className="flex items-center gap-4 text-sm font-medium">
      <span className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-1">
        Inbox <Counter count={14} size="xs" variant="primary" />
      </span>
      <span className="flex items-center gap-2 text-core-circle-text-muted hover:text-core-circle-text-main pb-1 cursor-pointer">
        Drafts <Counter count={3} size="xs" variant="neutral" />
      </span>
    </div>
  </div>
  <div className="flex items-center gap-3">
    <Button variant="outline" size="sm" startIcon={<Bell size={16} />} endIcon={<Counter count={128} max={99} size="xs" variant="primary" />}>
      Alerts
    </Button>
  </div>
</div>`,
  },
  {
    id: 'theming-ecommerce-cart',
    sectionTitle: '2. E-Commerce Shopping Cart & Checkout Theme',
    description:
      'Header shopping actions with live quantity counters and item total indicators.',
    previewTitle: 'Shopping Cart Actions',
    render: () => (
      <div className="w-full max-w-xl mx-auto flex items-center gap-4 p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
        <Button
          variant="primary"
          size="md"
          startIcon={<ShoppingBag size={18} />}
          endIcon={
            <Counter
              count={4}
              size="xs"
              variant="ghost"
              className="text-white bg-white/20"
            />
          }
        >
          View Cart
        </Button>
        <Button
          variant="outline"
          size="md"
          endIcon={<Counter count={12} size="xs" variant="neutral" />}
        >
          Saved Items
        </Button>
      </div>
    ),
    code: `<div className="flex items-center gap-4 p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
  <Button variant="primary" size="md" startIcon={<ShoppingBag size={18} />} endIcon={<Counter count={4} size="xs" variant="ghost" className="text-white bg-white/20" />}>
    View Cart
  </Button>
  <Button variant="outline" size="md" endIcon={<Counter count={12} size="xs" variant="neutral" />}>
    Saved Items
  </Button>
</div>`,
  },
  {
    id: 'theming-kanban-board',
    sectionTitle: '3. Agile Sprint Board & Task Metrics Theme',
    description:
      'Kanban column headers highlighting ticket volume across stages.',
    previewTitle: 'Sprint Status Columns',
    render: () => (
      <div className="w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
          <span className="text-xs font-core-circle-bold text-core-circle-text-main">
            To Do
          </span>
          <Counter count={18} size="xs" variant="neutral" />
        </div>
        <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
          <span className="text-xs font-core-circle-bold text-core-circle-primary">
            In Progress
          </span>
          <Counter count={5} size="xs" variant="primary" />
        </div>
        <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
          <span className="text-xs font-core-circle-bold text-emerald-600">
            Completed
          </span>
          <Counter count={42} size="xs" variant="outline" />
        </div>
      </div>
    ),
    code: `<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
    <span className="text-xs font-core-circle-bold text-core-circle-text-main">To Do</span>
    <Counter count={18} size="xs" variant="neutral" />
  </div>
  <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
    <span className="text-xs font-core-circle-bold text-core-circle-primary">In Progress</span>
    <Counter count={5} size="xs" variant="primary" />
  </div>
  <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
    <span className="text-xs font-core-circle-bold text-emerald-600">Completed</span>
    <Counter count={42} size="xs" variant="outline" />
  </div>
</div>`,
  },
  {
    id: 'theming-devops-queue',
    sectionTitle: '4. DevOps Pipeline & Service Monitor Theme',
    description:
      'Infrastructure operational metrics card with pending jobs and worker health.',
    previewTitle: 'Pipeline Queue Metrics',
    render: () => (
      <div className="w-full max-w-xl mx-auto p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Cloud size={20} className="text-core-circle-primary" />
          <div>
            <Typography
              variant="h4"
              className="text-sm font-core-circle-bold text-core-circle-text-main"
            >
              Production Workers
            </Typography>
            <Typography
              variant="p"
              className="text-xs text-core-circle-text-muted mt-0.5"
            >
              us-east-1 cluster node pool
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
            Queued: <Counter count={8} size="xs" variant="neutral" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
            Active: <Counter count={24} size="xs" variant="primary" />
          </div>
        </div>
      </div>
    ),
    code: `<div className="p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
  <div className="flex items-center gap-3">
    <Cloud size={20} className="text-core-circle-primary" />
    <div>
      <Typography variant="h4" className="text-sm font-core-circle-bold text-core-circle-text-main">Production Workers</Typography>
      <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">us-east-1 cluster node pool</Typography>
    </div>
  </div>
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
      Queued: <Counter count={8} size="xs" variant="neutral" />
    </div>
    <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
      Active: <Counter count={24} size="xs" variant="primary" />
    </div>
  </div>
</div>`,
  },
  {
    id: 'theming-storage-quota',
    sectionTitle: '5. Workspace Storage & Asset Quota Theme',
    description:
      'Resource utilization card tracking stored artifacts against account allowances.',
    previewTitle: 'Storage Asset Counter',
    render: () => (
      <div className="w-full max-w-xl mx-auto p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FolderOpen size={18} className="text-core-circle-text-muted" />
          <span className="text-xs font-core-circle-bold text-core-circle-text-main">
            Assets Stored
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Counter count={2450} size="sm" variant="outline" />
          <Badge variant="neutral" size="sm" shape="pill">
            2.4k / 5k Limit
          </Badge>
        </div>
      </div>
    ),
    code: `<div className="p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between">
  <div className="flex items-center gap-3">
    <FolderOpen size={18} className="text-core-circle-text-muted" />
    <span className="text-xs font-core-circle-bold text-core-circle-text-main">Assets Stored</span>
  </div>
  <div className="flex items-center gap-2">
    <Counter count={2450} size="sm" variant="outline" />
    <Badge variant="neutral" size="sm" shape="pill">2.4k / 5k Limit</Badge>
  </div>
</div>`,
  },
];

export const COUNTER_VARIANT_GROUPS: CounterVariantGroup[] = [
  {
    id: 'counter-styles',
    title: '1. Visual Variants',
    description: 'Primary, neutral, outline, and inverse ghost styles.',
    render: () => (
      <ComponentPreview
        title="Variants (Primary, Neutral, Outline, Ghost)"
        code={`<Counter count={5} variant="primary" />\n<Counter count={12} variant="neutral" />\n<Counter count={8} variant="outline" />\n<Counter count={3} variant="ghost" />`}
      >
        <div className="flex items-center gap-6">
          <Counter count={5} variant="primary" />
          <Counter count={12} variant="neutral" />
          <Counter count={8} variant="outline" />
          <div className="bg-core-circle-bg-surface p-3 rounded-core-circle-lg flex items-center gap-2 border border-core-circle-border-main">
            <span className="text-core-circle-text-main text-xs font-medium">
              Outline:
            </span>
            <Counter count={3} variant="outline" size="xs" />
          </div>
        </div>
      </ComponentPreview>
    ),
  },
  {
    id: 'counter-sizes',
    title: '2. Size Scale',
    description: 'Compact xs, sm, and md dimensions.',
    render: () => (
      <ComponentPreview
        title="Sizes (xs, sm, md)"
        code={`<Counter count={9} size="xs" />\n<Counter count={9} size="sm" />\n<Counter count={9} size="md" />`}
      >
        <div className="flex items-center gap-6">
          <Counter count={9} size="xs" />
          <Counter count={9} size="sm" />
          <Counter count={9} size="md" />
        </div>
      </ComponentPreview>
    ),
  },
  {
    id: 'counter-max-cap',
    title: '3. Overflow Capping',
    description: 'Cap maximum displayed numbers using the max prop (e.g. 99+).',
    render: () => (
      <ComponentPreview
        title="Max Capping (max = 99)"
        code={`<Counter count={45} max={99} />\n<Counter count={120} max={99} />\n<Counter count={1500} max={999} />`}
      >
        <div className="flex items-center gap-6">
          <Counter count={45} max={99} />
          <Counter count={120} max={99} />
          <Counter count={1500} max={999} />
        </div>
      </ComponentPreview>
    ),
  },
  {
    id: 'counter-integration',
    title: '4. Button & Tab Composition',
    description: 'Composing counters seamlessly within buttons and nav tabs.',
    render: () => (
      <ComponentPreview
        title="Within Interactive Controls"
        code={`<Button variant="outline" startIcon={<Bell size={18} />} endIcon={<Counter count={5} size="xs" />}>\n  Notifications\n</Button>`}
      >
        <div className="flex items-center gap-8">
          <Button
            variant="outline"
            startIcon={<Bell size={18} />}
            endIcon={<Counter count={5} size="xs" />}
          >
            Notifications
          </Button>
          <div className="flex border-b border-core-circle-border-main pb-2 gap-8">
            <div className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-2 px-1 font-medium text-sm">
              Inbox <Counter count={120} max={99} variant="neutral" size="xs" />
            </div>
            <div className="flex items-center gap-2 text-core-circle-text-muted pb-2 px-1 text-sm">
              Spam <Counter count={0} size="xs" />
            </div>
          </div>
        </div>
      </ComponentPreview>
    ),
  },
];

export const COUNTER_PLAYGROUND_SECTION = {
  id: 'counter-playground',
  title: 'Interactive Playground',
  description:
    'Customize counter values, variants, and maximum limits in real-time.',
};

export const COUNTER_MOCK_SECTION = {
  id: 'counter-mock',
  title: 'Notification API Integration',
  description:
    'Example of consuming live counts from a notification or metrics backend.',
  snippets: [
    {
      label: 'Unread Counts API Response',
      code: JSON.stringify(
        {
          user_id: 'usr_567',
          unread_notifications: 45,
          unread_messages: 102,
          system_alerts: 2,
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer Component',
      code: `import { Button, Counter } from '@core-circle/ui';
import { Bell } from '@core-circle/icons';

interface NotificationCounts {
  unread_notifications: number;
  unread_messages: number;
}

export const HeaderNotificationBell = ({ counts }: { counts: NotificationCounts }) => {
  return (
    <Button size="icon" variant="ghost" className="relative">
      <Bell size={20} />
      <Counter 
        count={counts.unread_notifications} 
        max={99} 
        variant="primary"
        size="xs"
        className="absolute -top-1 -right-1" 
      />
    </Button>
  );
};`,
    },
  ],
};

export const COUNTER_OVERVIEW_SECTION = {
  id: 'counter-intro',
  title: 'Introduction',
  description:
    'The Counter atom displays numeric values, capped counts, and notification badges with high legibility.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Counter } from '@core-circle/ui';

<Counter count={12} max={99} variant="primary" size="sm" />`,
  },
  propsTableTitle: 'Component Props',
};

export const COUNTER_PROPS_DATA: PropItem[] = [
  {
    name: 'count',
    type: 'number',
    defaultValue: '-',
    description: 'The numeric value to display.',
  },
  {
    name: 'variant',
    type: "'primary' | 'neutral' | 'outline' | 'ghost'",
    defaultValue: "'primary'",
    description: 'The visual style of the counter.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md'",
    defaultValue: "'sm'",
    description: 'The size of the counter.',
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '-',
    description: 'The maximum value to display (e.g. 99+).',
  },
  {
    name: 'showZero',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to show the counter if count is zero.',
  },
];
