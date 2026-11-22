import React from 'react';
import { TrendBadge } from '@core-circle/ui';
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

export const TREND_BADGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TrendBadge' },
];

export const TREND_BADGE_HEADER_CONTENT = {
  title: 'TrendBadge',
  description: 'A compact contextual delta indicator showing growth, decline, and neutral metrics with directional icons and semantic colors.',
};

export const TREND_BADGE_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production delta indicators for SaaS metrics, revenue growth, cost reductions, and server latency.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual styles (soft, filled, outline, pill, minimal, badge) across all trend directions.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive delta badge sandbox with live direction, size, and styling controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Real-world analytics summary payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TREND_BADGE_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-revenue-growth',
    title: '1. Revenue Growth & ARR Expansion Theme',
    description: 'Subtle soft green pill indicating month-over-month expansion.',
    previewTitle: 'Positive Revenue Expansion',
    code: `<TrendBadge value="+28.4%" trend="up" variant="pill" size="md" />`,
    render: () => (
      <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full gap-4">
        <span className="text-sm font-semibold text-slate-700">ARR Growth:</span>
        <TrendBadge value="+28.4%" trend="up" variant="pill" size="md" />
      </div>
    ),
  },
  {
    id: 'theming-cost-savings',
    title: '2. Cost Savings & Latency Reduction (Inverted)',
    description: 'Inverts negative direction so cost drops and latency decreases display in positive green.',
    previewTitle: 'Cost Optimization (Inverted Semantic Colors)',
    code: `<TrendBadge value="-34.2%" trend="down" invertColors variant="pill" size="md" suffix="cloud bill" />`,
    render: () => (
      <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full gap-4">
        <span className="text-sm font-semibold text-slate-700">Infrastructure Spend:</span>
        <TrendBadge value="-34.2%" trend="down" invertColors variant="pill" size="md" suffix="cloud bill" />
      </div>
    ),
  },
  {
    id: 'theming-filled-kpi',
    title: '3. High-Contrast Filled KPI Theme',
    description: 'Solid background for prominent dashboard highlight cards.',
    previewTitle: 'High-Contrast Solid Delta',
    code: `<TrendBadge value="+12.0%" trend="up" variant="filled" size="sm" />`,
    render: () => (
      <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full gap-4">
        <TrendBadge value="+12.0%" trend="up" variant="filled" size="sm" />
        <TrendBadge value="-5.4%" trend="down" variant="filled" size="sm" />
        <TrendBadge value="0.0%" trend="neutral" variant="filled" size="sm" />
      </div>
    ),
  },
  {
    id: 'theming-outline',
    title: '4. Clean Outline Border Theme',
    description: 'Subtle bordered style matching minimalist design systems.',
    previewTitle: 'Bordered Delta Badges',
    code: `<TrendBadge value="+8.6%" trend="up" variant="outline" size="sm" />`,
    render: () => (
      <div className="flex items-center justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full gap-4">
        <TrendBadge value="+8.6%" trend="up" variant="outline" size="sm" />
        <TrendBadge value="-2.1%" trend="down" variant="outline" size="sm" />
        <TrendBadge value="0.0%" trend="neutral" variant="outline" size="sm" />
      </div>
    ),
  },
  {
    id: 'theming-minimal',
    title: '5. Zero-Padding Minimal Inline Theme',
    description: 'Unpadded inline delta for tight data tables and financial ledger rows.',
    previewTitle: 'Minimalist Table Delta',
    code: `<TrendBadge value="+14.2%" trend="up" variant="minimal" size="sm" />`,
    render: () => (
      <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full gap-6">
        <span className="font-mono text-sm text-slate-900">$1,429.50</span>
        <TrendBadge value="+14.2%" trend="up" variant="minimal" size="sm" />
      </div>
    ),
  },
];

export const TREND_BADGE_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-styles',
    title: 'Style Variations',
    description: 'Visual presentations across the standard trend directions (Up, Down, Neutral).',
    items: [
      {
        title: 'Soft Tinted Variant',
        code: `<TrendBadge value="+14.2%" variant="soft" />`,
        render: () => (
          <div className="flex items-center gap-3">
            <TrendBadge value="+14.2%" trend="up" variant="soft" />
            <TrendBadge value="-3.8%" trend="down" variant="soft" />
            <TrendBadge value="0.0%" trend="neutral" variant="soft" />
          </div>
        ),
      },
      {
        title: 'Pill Rounded Variant',
        code: `<TrendBadge value="+14.2%" variant="pill" />`,
        render: () => (
          <div className="flex items-center gap-3">
            <TrendBadge value="+14.2%" trend="up" variant="pill" />
            <TrendBadge value="-3.8%" trend="down" variant="pill" />
            <TrendBadge value="0.0%" trend="neutral" variant="pill" />
          </div>
        ),
      },
      {
        title: 'Filled Solid Variant',
        code: `<TrendBadge value="+14.2%" variant="filled" />`,
        render: () => (
          <div className="flex items-center gap-3">
            <TrendBadge value="+14.2%" trend="up" variant="filled" />
            <TrendBadge value="-3.8%" trend="down" variant="filled" />
            <TrendBadge value="0.0%" trend="neutral" variant="filled" />
          </div>
        ),
      },
      {
        title: 'Outline Bordered Variant',
        code: `<TrendBadge value="+14.2%" variant="outline" />`,
        render: () => (
          <div className="flex items-center gap-3">
            <TrendBadge value="+14.2%" trend="up" variant="outline" />
            <TrendBadge value="-3.8%" trend="down" variant="outline" />
            <TrendBadge value="0.0%" trend="neutral" variant="outline" />
          </div>
        ),
      },
      {
        title: 'Badge Shadowed Variant',
        code: `<TrendBadge value="+14.2%" variant="badge" />`,
        render: () => (
          <div className="flex items-center gap-3">
            <TrendBadge value="+14.2%" trend="up" variant="badge" />
            <TrendBadge value="-3.8%" trend="down" variant="badge" />
            <TrendBadge value="0.0%" trend="neutral" variant="badge" />
          </div>
        ),
      },
      {
        title: 'Minimal Inline Variant',
        code: `<TrendBadge value="+14.2%" variant="minimal" />`,
        render: () => (
          <div className="flex items-center gap-3">
            <TrendBadge value="+14.2%" trend="up" variant="minimal" />
            <TrendBadge value="-3.8%" trend="down" variant="minimal" />
            <TrendBadge value="0.0%" trend="neutral" variant="minimal" />
          </div>
        ),
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Four proportional sizing options from extra small (xs) to large (lg).',
    items: [
      {
        title: 'Extra Small (xs)',
        code: `<TrendBadge value="+5.2%" size="xs" />`,
        render: () => <TrendBadge value="+5.2%" size="xs" />,
      },
      {
        title: 'Small (sm - default)',
        code: `<TrendBadge value="+5.2%" size="sm" />`,
        render: () => <TrendBadge value="+5.2%" size="sm" />,
      },
      {
        title: 'Medium (md)',
        code: `<TrendBadge value="+5.2%" size="md" />`,
        render: () => <TrendBadge value="+5.2%" size="md" />,
      },
      {
        title: 'Large (lg)',
        code: `<TrendBadge value="+5.2%" size="lg" />`,
        render: () => <TrendBadge value="+5.2%" size="lg" />,
      },
    ],
  },
];

export const TREND_BADGE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test trend badge directions, styling variants, sizes, and inverted semantic colors.',
};

export const TREND_BADGE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'KPI Metric Summary Payload',
  description: 'Clean example showing dynamic rendering from a financial metrics API.',
  snippets: [
    {
      label: 'analytics-delta.ts',
      code: `// Sample dynamic analytics response
export interface MetricReport {
  id: string;
  title: string;
  currentValue: number;
  deltaPercent: number;
  isCostMetric: boolean;
}

export function formatMetricDelta(report: MetricReport) {
  const sign = report.deltaPercent > 0 ? '+' : '';
  const formatted = \`\${sign}\${report.deltaPercent.toFixed(1)}%\`;
  const trend = report.deltaPercent > 0 ? 'up' : report.deltaPercent < 0 ? 'down' : 'neutral';

  return {
    value: formatted,
    trend,
    invertColors: report.isCostMetric,
  };
}`,
    },
  ],
};

export const TREND_BADGE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { TrendBadge } from '@core-circle/ui';

export default function MyMetric() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold">$48,200</span>
      <TrendBadge value="+18.4%" variant="pill" size="sm" />
    </div>
  );
}`,
  },
  propsTableTitle: 'TrendBadge Props',
};

export const TREND_BADGE_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'ReactNode',
    required: true,
    description: 'The delta percentage or numeric text to display (e.g. "+12.4%", "-3.8%").',
  },
  {
    name: 'trend',
    type: "'up' | 'down' | 'neutral'",
    required: false,
    defaultValue: 'Inferred from value (+ / -)',
    description: 'Direction of the trend. Inferred automatically if value starts with "+" or "-".',
  },
  {
    name: 'variant',
    type: "'soft' | 'filled' | 'outline' | 'minimal' | 'pill' | 'badge'",
    required: false,
    defaultValue: "'soft'",
    description: 'Visual styling presentation of the badge.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'sm'",
    description: 'Size scale determining typography and padding.',
  },
  {
    name: 'showIcon',
    type: 'boolean',
    required: false,
    defaultValue: 'true',
    description: 'Whether to show the directional arrow indicator icon.',
  },
  {
    name: 'invertColors',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description: 'Inverts colors so down/drop is green (success) and up/rise is red (danger).',
  },
  {
    name: 'suffix',
    type: 'ReactNode',
    required: false,
    description: 'Optional trailing label text following the numeric value.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the badge element.',
  },
];
