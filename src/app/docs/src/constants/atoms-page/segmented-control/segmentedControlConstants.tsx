'use client';

import React from 'react';
import { SegmentedControl, Badge } from '@core-circle/ui';
import { Grid, List, Calendar, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const SEGMENTED_CONTROL_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'SegmentedControl' },
];

export const SEGMENTED_CONTROL_HEADER_CONTENT = {
  title: 'SegmentedControl',
  description:
    'A linear horizontal segment switcher for 2 to 5 mutually exclusive options featuring tactile pill highlights, icon integration, and keyboard navigation.',
};

export const SEGMENTED_CONTROL_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore view switcher bars, subscription billing toggles, device mode filters, and project task status selectors.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual surface treatments (default, pills, soft, bordered), sizing scales, and full width distribution.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive segment sandbox with live options and orientation controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Interactive view switcher state payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SEGMENTED_CONTROL_THEME_CONFIGS = [
  {
    id: 'theming-view-mode',
    title: '1. Dashboard Layout View Switcher',
    description: 'Tactile icon-and-label switcher for Grid, List, and Calendar data layouts.',
    previewTitle: 'Catalog Display Mode',
    code: `<SegmentedControl
  label="Display Mode"
  options={[
    { label: 'Grid', value: 'grid', icon: <Grid size={14} /> },
    { label: 'List', value: 'list', icon: <List size={14} /> },
    { label: 'Calendar', value: 'calendar', icon: <Calendar size={14} /> },
  ]}
  defaultValue="grid"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <SegmentedControl
          label="Display Mode"
          options={[
            { label: 'Grid', value: 'grid', icon: <Grid size={14} /> },
            { label: 'List', value: 'list', icon: <List size={14} /> },
            { label: 'Calendar', value: 'calendar', icon: <Calendar size={14} /> },
          ]}
          defaultValue="grid"
        />
      </div>
    ),
  },
  {
    id: 'theming-billing-cycle',
    title: '2. SaaS Pricing Billing Cadence',
    description: 'Pill-shaped toggle highlighting the annual discount badge.',
    previewTitle: 'Billing Cycle',
    code: `<SegmentedControl
  label="Choose Billing Frequency"
  variant="pills"
  options={[
    { label: 'Monthly', value: 'monthly' },
    { label: 'Annual (Save 20%)', value: 'annual' },
  ]}
  defaultValue="annual"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <SegmentedControl
          label="Choose Billing Frequency"
          variant="pills"
          options={[
            { label: 'Monthly', value: 'monthly' },
            { label: 'Annual (Save 20%)', value: 'annual' },
          ]}
          defaultValue="annual"
        />
      </div>
    ),
  },
  {
    id: 'theming-device-filter',
    title: '3. Responsive Device Simulator',
    description: 'Full-width 3-way toggle switching viewport preview modes.',
    previewTitle: 'Viewport Simulator',
    code: `<SegmentedControl
  label="Target Viewport"
  fullWidth
  options={[
    { label: 'Mobile (375px)', value: 'mobile' },
    { label: 'Tablet (768px)', value: 'tablet' },
    { label: 'Desktop (1280px)', value: 'desktop' },
  ]}
  defaultValue="desktop"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <SegmentedControl
            label="Target Viewport"
            fullWidth
            options={[
              { label: 'Mobile (375px)', value: 'mobile' },
              { label: 'Tablet (768px)', value: 'tablet' },
              { label: 'Desktop (1280px)', value: 'desktop' },
            ]}
            defaultValue="desktop"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-soft-brand',
    title: '4. Soft Brand Alert Frequency',
    description: 'Soft blue surface styling for notification preferences.',
    previewTitle: 'Alert Frequency',
    code: `<SegmentedControl
  variant="soft"
  options={[
    { label: 'Real-Time', value: 'realtime' },
    { label: 'Daily Digest', value: 'daily' },
    { label: 'Weekly Summary', value: 'weekly' },
  ]}
  defaultValue="daily"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <SegmentedControl
          variant="soft"
          options={[
            { label: 'Real-Time', value: 'realtime' },
            { label: 'Daily Digest', value: 'daily' },
            { label: 'Weekly Summary', value: 'weekly' },
          ]}
          defaultValue="daily"
        />
      </div>
    ),
  },
  {
    id: 'theming-bordered-state',
    title: '5. High-Contrast Bordered Task Status',
    description: 'Crisp bordered styling for project status workflows.',
    previewTitle: 'Task Filter',
    code: `<SegmentedControl
  variant="bordered"
  options={[
    { label: 'Open', value: 'open' },
    { label: 'In Review', value: 'review' },
    { label: 'Completed', value: 'completed' },
  ]}
  defaultValue="open"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <SegmentedControl
          variant="bordered"
          options={[
            { label: 'Open', value: 'open' },
            { label: 'In Review', value: 'review' },
            { label: 'Completed', value: 'completed' },
          ]}
          defaultValue="open"
        />
      </div>
    ),
  },
];

export const SEGMENTED_CONTROL_VARIANT_GROUPS = [
  {
    id: 'variants-surfaces',
    title: '1. Surface Treatments',
    description: 'Default, Pills, Soft, and Bordered styling treatments.',
    items: [
      {
        title: 'Default (Card Surface)',
        code: '<SegmentedControl variant="default" options={options} />',
        render: () => (
          <SegmentedControl
            variant="default"
            options={[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]}
            defaultValue="day"
          />
        ),
      },
      {
        title: 'Pills Variant (Rounded Capsule)',
        code: '<SegmentedControl variant="pills" options={options} />',
        render: () => (
          <SegmentedControl
            variant="pills"
            options={[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]}
            defaultValue="week"
          />
        ),
      },
      {
        title: 'Soft Variant (Tinted Surface)',
        code: '<SegmentedControl variant="soft" options={options} />',
        render: () => (
          <SegmentedControl
            variant="soft"
            options={[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]}
            defaultValue="month"
          />
        ),
      },
      {
        title: 'Bordered Variant (High Contrast)',
        code: '<SegmentedControl variant="bordered" options={options} />',
        render: () => (
          <SegmentedControl
            variant="bordered"
            options={[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]}
            defaultValue="day"
          />
        ),
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: '2. Sizing Scale',
    description: 'Compact (sm), Standard (md), and Prominent (lg) heights.',
    items: [
      {
        title: 'Small Scale (sm - 32px)',
        code: '<SegmentedControl size="sm" options={options} />',
        render: () => (
          <SegmentedControl
            size="sm"
            options={[{ label: 'Draft', value: 'draft' }, { label: 'Live', value: 'live' }]}
            defaultValue="live"
          />
        ),
      },
      {
        title: 'Medium Scale (md - 40px)',
        code: '<SegmentedControl size="md" options={options} />',
        render: () => (
          <SegmentedControl
            size="md"
            options={[{ label: 'Draft', value: 'draft' }, { label: 'Live', value: 'live' }]}
            defaultValue="live"
          />
        ),
      },
      {
        title: 'Large Scale (lg - 48px)',
        code: '<SegmentedControl size="lg" options={options} />',
        render: () => (
          <SegmentedControl
            size="lg"
            options={[{ label: 'Draft', value: 'draft' }, { label: 'Live', value: 'live' }]}
            defaultValue="live"
          />
        ),
      },
    ],
  },
  {
    id: 'variants-states',
    title: '3. Distribution & Disabled States',
    description: 'Full width stretching and disabled option states.',
    items: [
      {
        title: 'Full Width Stretch',
        code: '<SegmentedControl fullWidth options={options} />',
        render: () => (
          <SegmentedControl
            fullWidth
            options={[{ label: 'All', value: 'all' }, { label: 'Unread', value: 'unread' }, { label: 'Archived', value: 'archived' }]}
            defaultValue="unread"
          />
        ),
      },
      {
        title: 'Disabled Option State',
        code: '<SegmentedControl options={[{ label: "Standard", value: "std" }, { label: "Pro (Locked)", value: "pro", disabled: true }]} />',
        render: () => (
          <SegmentedControl
            options={[{ label: 'Standard', value: 'std' }, { label: 'Pro (Locked)', value: 'pro', disabled: true }]}
            defaultValue="std"
          />
        ),
      },
    ],
  },
];

export const SEGMENTED_CONTROL_PLAYGROUND_SECTION = {
  id: 'segmented-control-playground-section',
  title: 'Interactive Playground',
  description: 'Test segmented options, pill styling, sizes, and full-width stretching.',
};

export const SEGMENTED_CONTROL_MOCK_SECTION = {
  id: 'segmented-control-mock',
  title: 'Analytics Chart Range Switcher',
  description: 'Connect SegmentedControl to dynamic chart interval state.',
  snippets: [
    {
      label: 'Telemetry Time Range Payload',
      code: JSON.stringify(
        {
          selectedInterval: '7d',
          supportedIntervals: [
            { label: '24 Hours', value: '24h', dataPoints: 24 },
            { label: '7 Days', value: '7d', dataPoints: 168 },
            { label: '30 Days', value: '30d', dataPoints: 720 },
            { label: '1 Year', value: '1y', dataPoints: 365 },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { SegmentedControl, Typography } from '@core-circle/ui';

export function MetricsFilter() {
  const [range, setRange] = useState('7d');

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Typography variant="body2" className="text-slate-500 font-medium">Telemetry Range</Typography>
        <SegmentedControl
          size="sm"
          value={range}
          onChange={setRange}
          options={[
            { label: '24h', value: '24h' },
            { label: '7d', value: '7d' },
            { label: '30d', value: '30d' },
            { label: '1y', value: '1y' },
          ]}
        />
      </div>
    </div>
  );
}`,
    },
  ],
};

export const SEGMENTED_CONTROL_OVERVIEW_SECTION = {
  id: 'segmented-control-overview',
  title: 'Introduction',
  description:
    'SegmentedControl is an accessible mutually-exclusive selection atom providing sliding pill indicators, keyboard navigation, and responsive width distribution.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { SegmentedControl } from '@core-circle/ui';

<SegmentedControl
  options={[
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
  ]}
  defaultValue="week"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const SEGMENTED_CONTROL_PROPS_DATA: PropItem[] = [
  {
    name: 'options',
    type: 'SegmentedControlOption[]',
    defaultValue: '[]',
    description: 'Array of option items with label, value, and optional icon.',
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Controlled active selected option value.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Initial default selected value for uncontrolled usage.',
  },
  {
    name: 'variant',
    type: "'default' | 'pills' | 'soft' | 'bordered'",
    defaultValue: "'default'",
    description: 'Aesthetic surface styling boundary.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical height scale and typography size.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Stretches the segment container across 100% parent width.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user interaction across the entire control.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when active selected option changes.',
  },
];
