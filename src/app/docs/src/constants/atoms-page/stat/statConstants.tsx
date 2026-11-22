import React from 'react';
import { Stat, TrendBadge, Badge } from '@core-circle/ui';
import {
  BadgeDollarSign,
  Activity,
  Clock,
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

export const STAT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Stat' },
];

export const STAT_HEADER_CONTENT = {
  title: 'Stat',
  description: 'A key performance indicator (KPI) metric block with prominent typography, label, contextual description, trend indicators, and auxiliary slots.',
};

export const STAT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production metric cards for financial summaries, telemetry dashboards, conversion rates, and server uptime.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual surface treatments (card, bordered, minimal, glassmorphic, gradient, dark, accent) and sizing scales.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive metric card sandbox with live label, value, trend, and variant controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic dashboard metric aggregator payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const STAT_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-arr-revenue',
    title: '1. Financial Revenue & ARR Theme',
    description: 'Standard card with primary currency value, comparison label, and positive delta badge.',
    previewTitle: 'Annual Recurring Revenue (ARR)',
    code: `<Stat
  label="Annual Recurring Revenue"
  value="$1,248,500"
  description="vs. $1,054,000 previous fiscal year"
  trend={<TrendBadge value="+18.4%" trend="up" variant="pill" size="sm" />}
  icon={<BadgeDollarSign size={18} />}
  variant="card"
  size="md"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <Stat
            label="Annual Recurring Revenue"
            value="$1,248,500"
            description="vs. $1,054,000 previous fiscal year"
            trend={<TrendBadge value="+18.4%" trend="up" variant="pill" size="sm" />}
            icon={<BadgeDollarSign size={18} />}
            variant="card"
            size="md"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-telemetry',
    title: '2. Real-Time Telemetry & Throughput Theme',
    description: 'Soft gradient surface with live throughput and millisecond response time caption.',
    previewTitle: 'API Request Throughput',
    code: `<Stat
  label="API Request Volume"
  value="48.2k req/s"
  description="99.99% successful requests"
  trend={<TrendBadge value="+5.2%" trend="up" variant="soft" size="xs" />}
  icon={<Activity size={18} />}
  badge={<Badge size="sm" variant="gradient">LIVE</Badge>}
  variant="gradient"
  size="md"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <Stat
            label="API Request Volume"
            value="48.2k req/s"
            description="99.99% successful requests"
            trend={<TrendBadge value="+5.2%" trend="up" variant="soft" size="xs" />}
            icon={<Activity size={18} />}
            badge={<Badge size="sm" variant="gradient">LIVE</Badge>}
            variant="gradient"
            size="md"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-glassmorphic',
    title: '3. Frosted Glassmorphism Theme',
    description: 'Translucent backdrop filter with soft boundary for modern dashboard walls.',
    previewTitle: 'Glassmorphic Metric Card',
    code: `<Stat
  label="Daily Active Users"
  value="84,210"
  description="Measured across iOS, Android, and Web"
  trend={<TrendBadge value="+12.1%" trend="up" variant="pill" size="sm" />}
  variant="glassmorphic"
  size="md"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <Stat
            label="Daily Active Users"
            value="84,210"
            description="Measured across iOS, Android, and Web"
            trend={<TrendBadge value="+12.1%" trend="up" variant="pill" size="sm" />}
            icon={<Sparkles size={18} />}
            variant="glassmorphic"
            size="md"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-dark',
    title: '4. Cyber Dark Server Status Theme',
    description: 'High-contrast dark card for observability consoles, DevOps pipelines, and NOC displays.',
    previewTitle: 'Uptime & Server Availability',
    code: `<Stat
  label="System Availability"
  value="99.98%"
  description="Last downtime logged 48 days ago"
  trend={<TrendBadge value="+0.02%" trend="up" variant="filled" size="xs" />}
  icon={<Clock size={18} />}
  variant="dark"
  size="md"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-100 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <Stat
            label="System Availability"
            value="99.98%"
            description="Last downtime logged 48 days ago"
            trend={<TrendBadge value="+0.02%" trend="up" variant="filled" size="xs" />}
            icon={<Clock size={18} />}
            variant="dark"
            size="md"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-minimal',
    title: '5. Minimalist Borderless Theme',
    description: 'Unpadded transparent block for embedding directly into compact table cards.',
    previewTitle: 'Borderless Minimal Metric',
    code: `<Stat
  label="Average Order Value"
  value="$84.50"
  description="Per converted checkout session"
  trend={<TrendBadge value="+3.4%" trend="up" variant="minimal" size="sm" />}
  variant="minimal"
  size="sm"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <Stat
            label="Average Order Value"
            value="$84.50"
            description="Per converted checkout session"
            trend={<TrendBadge value="+3.4%" trend="up" variant="minimal" size="sm" />}
            variant="minimal"
            size="sm"
          />
        </div>
      </div>
    ),
  },
];

export const STAT_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-surfaces',
    title: 'Surface Variations',
    description: 'Visual presentations across the standard card styles.',
    items: [
      {
        title: 'Card Surface',
        code: `<Stat label="Revenue" value="$42.5k" variant="card" />`,
        render: () => <Stat label="Revenue" value="$42.5k" variant="card" className="w-72" />,
      },
      {
        title: 'Bordered Surface',
        code: `<Stat label="Active Subscribers" value="2,840" variant="bordered" />`,
        render: () => <Stat label="Active Subscribers" value="2,840" variant="bordered" className="w-72" />,
      },
      {
        title: 'Accent Surface',
        code: `<Stat label="Conversion Rate" value="4.8%" variant="accent" />`,
        render: () => <Stat label="Conversion Rate" value="4.8%" variant="accent" className="w-72" />,
      },
      {
        title: 'Gradient Surface',
        code: `<Stat label="Cloud Spend" value="$12.4k" variant="gradient" />`,
        render: () => <Stat label="Cloud Spend" value="$12.4k" variant="gradient" className="w-72" />,
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
        code: `<Stat label="Pageviews" value="128k" size="sm" />`,
        render: () => <Stat label="Pageviews" value="128k" size="sm" className="w-72" />,
      },
      {
        title: 'Medium Scale (md)',
        code: `<Stat label="Pageviews" value="128k" size="md" />`,
        render: () => <Stat label="Pageviews" value="128k" size="md" className="w-72" />,
      },
      {
        title: 'Large Scale (lg)',
        code: `<Stat label="Pageviews" value="128k" size="lg" />`,
        render: () => <Stat label="Pageviews" value="128k" size="lg" className="w-72" />,
      },
    ],
  },
];

export const STAT_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test KPI card content, sizing scales, styling variants, and trend compositions.',
};

export const STAT_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Dashboard Metric Grid Integration',
  description: 'Clean composition pattern mapping an API payload into a responsive KPI grid.',
  snippets: [
    {
      label: 'KpiDashboardGrid.tsx',
      code: `import React from 'react';
import { Stat, TrendBadge } from '@core-circle/ui';
import { BadgeDollarSign, Activity, Clock } from '@core-circle/icons';

const METRICS_DATA = [
  {
    label: 'Total Revenue',
    value: '$1,248,500',
    description: '+18.4% vs last quarter',
    trend: '+18.4%',
    icon: <BadgeDollarSign size={18} />,
  },
  {
    label: 'API Throughput',
    value: '48.2k req/s',
    description: 'Avg response 14ms',
    trend: '+5.2%',
    icon: <Activity size={18} />,
  },
  {
    label: 'Uptime',
    value: '99.98%',
    description: 'Zero incidents this month',
    trend: '0.0%',
    icon: <Clock size={18} />,
  },
];

export function KpiDashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {METRICS_DATA.map((metric) => (
        <Stat
          key={metric.label}
          label={metric.label}
          value={metric.value}
          description={metric.description}
          trend={<TrendBadge value={metric.trend} variant="pill" size="sm" />}
          icon={metric.icon}
          variant="card"
        />
      ))}
    </div>
  );
}`,
    },
  ],
};

export const STAT_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Stat, TrendBadge } from '@core-circle/ui';
import { BadgeDollarSign } from '@core-circle/icons';

export default function MetricCard() {
  return (
    <Stat
      label="Total Volume"
      value="$84,200"
      description="+12.4% vs previous month"
      trend={<TrendBadge value="+12.4%" variant="pill" size="sm" />}
      icon={<BadgeDollarSign size={18} />}
    />
  );
}`,
  },
  propsTableTitle: 'Stat Props',
};

export const STAT_PROPS_DATA: PropItem[] = [
  {
    name: 'label',
    type: 'ReactNode',
    required: true,
    description: 'Primary title or metric caption (e.g. "Total Revenue").',
  },
  {
    name: 'value',
    type: 'ReactNode',
    required: true,
    description: 'Prominent big-number metric value (e.g. "$1,248,500").',
  },
  {
    name: 'description',
    type: 'ReactNode',
    required: false,
    description: 'Supporting comparison or contextual caption text.',
  },
  {
    name: 'trend',
    type: 'ReactNode',
    required: false,
    description: 'Trend indicator component (such as TrendBadge) or custom node.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    required: false,
    description: 'Visual indicator icon displayed in the header row.',
  },
  {
    name: 'badge',
    type: 'ReactNode',
    required: false,
    description: 'Optional status tag or badge displayed in the header row.',
  },
  {
    name: 'footer',
    type: 'ReactNode',
    required: false,
    description: 'Optional content rendered at the bottom of the card.',
  },
  {
    name: 'variant',
    type: "'card' | 'bordered' | 'minimal' | 'glassmorphic' | 'gradient' | 'dark' | 'accent'",
    required: false,
    defaultValue: "'card'",
    description: 'Visual aesthetic styling of the container surface.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Size scale determining typography size and card padding.',
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    required: false,
    defaultValue: "'vertical'",
    description: 'Layout alignment of label and value rows.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the container element.',
  },
];
