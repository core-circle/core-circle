import React from 'react';
import { Timeline, Badge } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
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

export const TIMELINE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Timeline' },
];

export const TIMELINE_HEADER_CONTENT = {
  title: 'Timeline',
  description: 'A sequential milestone progression component visualizing chronological events, order delivery tracking, git commit history, and multi-stage pipelines.',
};

export const TIMELINE_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production timelines across shipping logistics, CI/CD pipelines, user onboarding milestones, and release changelogs.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore layouts (vertical, horizontal), connecting track styles (solid, dashed), and status node colors.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive timeline sandbox with live orientation, track variant, and sizing scale controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic order tracking payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sampleLogisticsItems = [
  {
    id: 'step-1',
    title: 'Order Confirmed & Paid',
    description: 'Authorized via Stripe Invoice #INV-8821.',
    timestamp: 'Oct 24, 08:30 AM',
    status: 'completed' as const,
  },
  {
    id: 'step-2',
    title: 'Dispatched from Warehouse',
    description: 'Picked and packed at Reno fulfillment hub.',
    timestamp: 'Oct 24, 01:15 PM',
    status: 'completed' as const,
  },
  {
    id: 'step-3',
    title: 'Out for Delivery',
    description: 'Assigned to driver. Expected delivery by 4:00 PM.',
    timestamp: 'Today, 09:20 AM',
    status: 'current' as const,
    badge: <Badge size="sm" variant="gradient">IN TRANSIT</Badge>,
  },
  {
    id: 'step-4',
    title: 'Delivered',
    description: 'Signature confirmation required upon handover.',
    timestamp: 'Estimated Today',
    status: 'upcoming' as const,
  },
];

export const TIMELINE_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-shipping-tracker',
    title: '1. Package Delivery & Logistics Tracker',
    description: 'Vertical progression with timestamp tags, current transit badge, and emerald completion nodes.',
    previewTitle: 'Logistics Delivery Timeline',
    code: `<Timeline items={items} orientation="vertical" variant="solid" size="md" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <Timeline items={sampleLogisticsItems} orientation="vertical" variant="solid" size="md" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-dashed-roadmap',
    title: '2. Product Release Roadmap (Dashed Track)',
    description: 'Dashed connector line highlighting iterative milestones and pending sprint goals.',
    previewTitle: 'Product Roadmap Timeline',
    code: `<Timeline items={items} orientation="vertical" variant="dashed" size="md" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <Timeline
            items={[
              {
                id: 'q1',
                title: 'Design System Primitives v1.0',
                description: 'Core 44 Atoms launched with Storybook autodocs.',
                timestamp: 'Q1 Delivered',
                status: 'completed',
              },
              {
                id: 'q2',
                title: 'Data-Driven DocPageShell Optimization',
                description: 'SSR optimization reducing component render payload by 50%.',
                timestamp: 'Q2 In Progress',
                status: 'current',
                badge: <Badge size="sm" variant="gradient">ACTIVE</Badge>,
              },
              {
                id: 'q3',
                title: 'Molecules & Organisms Expansion',
                description: 'Composing compound enterprise components.',
                timestamp: 'Q3 Upcoming',
                status: 'upcoming',
              },
            ]}
            orientation="vertical"
            variant="dashed"
            size="md"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-horizontal-workflow',
    title: '3. Horizontal Multi-Step Approval Flow',
    description: 'Horizontal track suited for enterprise document sign-offs and workflow stages.',
    previewTitle: 'Horizontal Approval Workflow',
    code: `<Timeline items={items} orientation="horizontal" variant="solid" size="md" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full overflow-x-auto">
        <div className="w-full max-w-2xl">
          <Timeline items={sampleLogisticsItems} orientation="horizontal" variant="solid" size="md" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-error-incident',
    title: '4. CI Build & Failure Diagnostic Timeline',
    description: 'Highlights broken pipeline step with error badge and red alert node.',
    previewTitle: 'CI Build Failure Milestone',
    code: `<Timeline items={ciItems} orientation="vertical" variant="solid" size="md" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <Timeline
            items={[
              {
                id: 'lint',
                title: 'Lint & Typecheck',
                description: 'ESLint passed with 0 errors and 0 warnings.',
                status: 'completed',
              },
              {
                id: 'test',
                title: 'Integration Test Suite',
                description: 'Snapshot mismatch detected in CheckoutDialog.spec.tsx:42.',
                status: 'error',
                badge: <Badge size="sm" variant="gradient">FAILED (exit 1)</Badge>,
              },
              {
                id: 'deploy',
                title: 'Deploy to Edge CDN',
                description: 'Cancelled due to test failure.',
                status: 'upcoming',
              },
            ]}
            orientation="vertical"
            variant="solid"
            size="md"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-compact-audit',
    title: '5. Compact Audit Trail Log',
    description: 'Small scale timeline for sidebar audit logs and recent user history.',
    previewTitle: 'Audit Trail Activity History',
    code: `<Timeline items={auditItems} size="sm" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <Timeline
            items={[
              {
                id: 'a1',
                title: 'Alex Jenkins invited Sarah Jenkins',
                timestamp: '10m ago',
                status: 'completed',
              },
              {
                id: 'a2',
                title: 'Role updated to Org Admin',
                timestamp: '2h ago',
                status: 'completed',
              },
              {
                id: 'a3',
                title: 'API Key regenerated',
                timestamp: 'Yesterday',
                status: 'completed',
              },
            ]}
            size="sm"
          />
        </div>
      </div>
    ),
  },
];

export const TIMELINE_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-orientations',
    title: 'Layout Orientations',
    description: 'Vertical stacked layout and horizontal sequence tracks.',
    items: [
      {
        title: 'Vertical Layout',
        code: `<Timeline items={items} orientation="vertical" />`,
        render: () => (
          <div className="max-w-md">
            <Timeline items={sampleLogisticsItems.slice(0, 3)} orientation="vertical" />
          </div>
        ),
      },
      {
        title: 'Horizontal Layout',
        code: `<Timeline items={items} orientation="horizontal" />`,
        render: () => (
          <div className="max-w-2xl overflow-x-auto">
            <Timeline items={sampleLogisticsItems.slice(0, 3)} orientation="horizontal" />
          </div>
        ),
      },
    ],
  },
  {
    id: 'variants-tracks',
    title: 'Connecting Track Variations',
    description: 'Solid line and dashed border track styles.',
    items: [
      {
        title: 'Solid Track',
        code: `<Timeline items={items} variant="solid" />`,
        render: () => (
          <div className="max-w-md">
            <Timeline items={sampleLogisticsItems.slice(0, 3)} variant="solid" />
          </div>
        ),
      },
      {
        title: 'Dashed Track',
        code: `<Timeline items={items} variant="dashed" />`,
        render: () => (
          <div className="max-w-md">
            <Timeline items={sampleLogisticsItems.slice(0, 3)} variant="dashed" />
          </div>
        ),
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
        code: `<Timeline items={items} size="sm" />`,
        render: () => (
          <div className="max-w-md">
            <Timeline items={sampleLogisticsItems.slice(0, 2)} size="sm" />
          </div>
        ),
      },
      {
        title: 'Medium Scale (md)',
        code: `<Timeline items={items} size="md" />`,
        render: () => (
          <div className="max-w-md">
            <Timeline items={sampleLogisticsItems.slice(0, 2)} size="md" />
          </div>
        ),
      },
      {
        title: 'Large Scale (lg)',
        code: `<Timeline items={items} size="lg" />`,
        render: () => (
          <div className="max-w-md">
            <Timeline items={sampleLogisticsItems.slice(0, 2)} size="lg" />
          </div>
        ),
      },
    ],
  },
];

export const TIMELINE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test timeline layout orientations, connecting track variants, and sizing scales.',
};

export const TIMELINE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Shipping Tracking API Integration',
  description: 'Clean example showing dynamic timeline rendering from an order status payload.',
  snippets: [
    {
      label: 'OrderTracker.tsx',
      code: `import React from 'react';
import { Timeline, Badge } from '@core-circle/ui';

export interface MilestoneRecord {
  id: string;
  name: string;
  detail: string;
  occurredAt: string;
  state: 'completed' | 'current' | 'upcoming' | 'error';
}

export function OrderTracker({ milestones }: { milestones: MilestoneRecord[] }) {
  const items = milestones.map((m) => ({
    id: m.id,
    title: m.name,
    description: m.detail,
    timestamp: m.occurredAt,
    status: m.state,
    badge: m.state === 'current' ? <Badge size="sm" variant="gradient">CURRENT</Badge> : undefined,
  }));

  return (
    <div className="p-6 bg-white border rounded-2xl">
      <h3 className="font-bold text-lg mb-4">Shipment Progress</h3>
      <Timeline items={items} orientation="vertical" variant="solid" />
    </div>
  );
}`,
    },
  ],
};

export const TIMELINE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Timeline } from '@core-circle/ui';

export default function MyTimeline() {
  const items = [
    { id: '1', title: 'Step 1: Submitted', status: 'completed' },
    { id: '2', title: 'Step 2: Under Review', status: 'current' },
    { id: '3', title: 'Step 3: Approved', status: 'upcoming' },
  ];

  return <Timeline items={items} orientation="vertical" />;
}`,
  },
  propsTableTitle: 'Timeline Props',
};

export const TIMELINE_PROPS_DATA: PropItem[] = [
  {
    name: 'items',
    type: 'TimelineItem[]',
    required: true,
    description: 'Array of milestone objects with title, description, timestamp, icon, status, and badge.',
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    required: false,
    defaultValue: "'vertical'",
    description: 'Layout alignment of the timeline track and milestones.',
  },
  {
    name: 'variant',
    type: "'solid' | 'dashed' | 'gradient'",
    required: false,
    defaultValue: "'solid'",
    description: 'Visual connecting line track styling.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Size scale determining milestone node diameter and typography.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the container element.',
  },
];
