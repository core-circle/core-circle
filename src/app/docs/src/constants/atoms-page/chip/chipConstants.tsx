'use client';

import React from 'react';
import { Chip } from '@core-circle/ui';
import { Filter, HomeIcon, Sparkles } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const CHIP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Chip' },
];

export const CHIP_HEADER_CONTENT = {
  title: 'Chip',
  description:
    'A compact interactive element used for multi-select facet filtering, dismissible keyword tags, record attributes, and entity badges.',
};

export const CHIP_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore faceted product search filters, developer skillset tags, issue labels, and AI recommendation badges.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual surface treatments (default, outline, soft, gradient, ghost), sizes, and removable modes.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive chip sandbox with live toggle state, count badges, and remove actions.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Faceted search query filter payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const CHIP_THEME_CONFIGS = [
  {
    id: 'theming-search-facets',
    title: '1. E-Commerce Faceted Search Filters',
    description: 'Active filter chips with count indicators for catalog refinement.',
    previewTitle: 'Catalog Category Filter',
    code: `<div className="flex flex-wrap gap-2">
  <Chip label="Laptops" count={124} selected />
  <Chip label="Monitors" count={48} variant="outline" />
  <Chip label="Keyboards" count={89} variant="outline" />
  <Chip label="In Stock Only" selected variant="soft" />
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex flex-wrap items-center gap-2">
          <Chip label="Laptops" count={124} selected />
          <Chip label="Monitors" count={48} variant="outline" />
          <Chip label="Keyboards" count={89} variant="outline" />
          <Chip label="In Stock Only" selected variant="soft" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-removable-tags',
    title: '2. Removable Skill Tags & Metadata',
    description: 'Interactive keyword tokens featuring single-click dismiss cross buttons.',
    previewTitle: 'Developer Skills Profile',
    code: `<div className="flex flex-wrap gap-2">
  <Chip label="Next.js 15" removable variant="soft" />
  <Chip label="TypeScript" removable variant="soft" />
  <Chip label="Tailwind CSS" removable variant="soft" />
  <Chip label="GraphQL" removable variant="soft" />
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex flex-wrap items-center gap-2">
          <Chip label="Next.js 15" removable variant="soft" />
          <Chip label="TypeScript" removable variant="soft" />
          <Chip label="Tailwind CSS" removable variant="soft" />
          <Chip label="GraphQL" removable variant="soft" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-gradient-ai',
    title: '3. AI Prompt & Suggestion Chips',
    description: 'Gradient treated chips for suggested generative actions.',
    previewTitle: 'AI Suggested Queries',
    code: `<div className="flex flex-wrap gap-2">
  <Chip label="Summarize document" variant="gradient" icon={<Sparkles size={12} />} />
  <Chip label="Explain error log" variant="gradient" icon={<Sparkles size={12} />} />
  <Chip label="Generate unit tests" variant="gradient" icon={<Sparkles size={12} />} />
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex flex-wrap items-center gap-2">
          <Chip label="Summarize document" variant="gradient" icon={<Sparkles size={12} />} />
          <Chip label="Explain error log" variant="gradient" icon={<Sparkles size={12} />} />
          <Chip label="Generate unit tests" variant="gradient" icon={<Sparkles size={12} />} />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-jira-issue',
    title: '4. Project Issue Tracker Labels',
    description: 'Compact high-contrast tags categorizing bug severity.',
    previewTitle: 'Issue Categorization',
    code: `<div className="flex flex-wrap gap-2">
  <Chip size="sm" label="Frontend" variant="outline" />
  <Chip size="sm" label="High Priority" variant="default" />
  <Chip size="sm" label="v2.4 Release" variant="soft" />
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex flex-wrap items-center gap-2">
          <Chip size="sm" label="Frontend" variant="outline" />
          <Chip size="sm" label="High Priority" variant="default" />
          <Chip size="sm" label="v2.4 Release" variant="soft" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-ghost-tabs',
    title: '5. Ghost Segmented Filter Chips',
    description: 'Minimal borderless chips for rapid tab switching.',
    previewTitle: 'Order History Status',
    code: `<div className="flex flex-wrap gap-2">
  <Chip label="All (18)" variant="ghost" selected />
  <Chip label="Processing (3)" variant="ghost" />
  <Chip label="Delivered (15)" variant="ghost" />
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex flex-wrap items-center gap-2">
          <Chip label="All (18)" variant="ghost" selected />
          <Chip label="Processing (3)" variant="ghost" />
          <Chip label="Delivered (15)" variant="ghost" />
        </div>
      </div>
    ),
  },
];

export const CHIP_VARIANT_GROUPS = [
  {
    id: 'variants-surfaces',
    title: '1. Surface Styles',
    description: 'Default, Outline, Soft, Gradient, and Ghost variants.',
    items: [
      {
        title: 'Default Variant',
        code: '<Chip label="Default Chip" />',
        render: () => <Chip label="Default Chip" />,
      },
      {
        title: 'Outline Variant',
        code: '<Chip label="Outline Chip" variant="outline" />',
        render: () => <Chip label="Outline Chip" variant="outline" />,
      },
      {
        title: 'Soft Tinted Variant',
        code: '<Chip label="Soft Chip" variant="soft" />',
        render: () => <Chip label="Soft Chip" variant="soft" />,
      },
      {
        title: 'Gradient Variant',
        code: '<Chip label="Gradient Chip" variant="gradient" />',
        render: () => <Chip label="Gradient Chip" variant="gradient" />,
      },
      {
        title: 'Ghost Variant',
        code: '<Chip label="Ghost Chip" variant="ghost" />',
        render: () => <Chip label="Ghost Chip" variant="ghost" />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: '2. Sizing Scale',
    description: 'Compact (sm - 24px), Standard (md - 32px), and Prominent (lg - 36px) dimensions.',
    items: [
      {
        title: 'Small Scale (sm)',
        code: '<Chip size="sm" label="Small Chip" count={4} />',
        render: () => <Chip size="sm" label="Small Chip" count={4} />,
      },
      {
        title: 'Medium Scale (md)',
        code: '<Chip size="md" label="Medium Chip" count={12} />',
        render: () => <Chip size="md" label="Medium Chip" count={12} />,
      },
      {
        title: 'Large Scale (lg)',
        code: '<Chip size="lg" label="Large Chip" count={28} />',
        render: () => <Chip size="lg" label="Large Chip" count={28} />,
      },
    ],
  },
  {
    id: 'variants-states',
    title: '3. Interactive & Accessory States',
    description: 'Selected highlights, removable cross button, and disabled state.',
    items: [
      {
        title: 'Selected State (with Check)',
        code: '<Chip label="Selected Filter" selected />',
        render: () => <Chip label="Selected Filter" selected />,
      },
      {
        title: 'Removable Cross Action',
        code: '<Chip label="Dismissible Tag" removable variant="soft" />',
        render: () => <Chip label="Dismissible Tag" removable variant="soft" />,
      },
      {
        title: 'Leading Icon Slot',
        code: '<Chip label="Filter Rule" icon={<Filter size={12} />} variant="outline" />',
        render: () => <Chip label="Filter Rule" icon={<Filter size={12} />} variant="outline" />,
      },
      {
        title: 'Disabled State',
        code: '<Chip label="Locked Option" disabled />',
        render: () => <Chip label="Locked Option" disabled />,
      },
    ],
  },
];

export const CHIP_PLAYGROUND_SECTION = {
  id: 'chip-playground-section',
  title: 'Interactive Playground',
  description: 'Test chip selection states, remove actions, count numbers, and surface styles.',
};

export const CHIP_MOCK_SECTION = {
  id: 'chip-mock',
  title: 'Faceted Product Search Query Integration',
  description: 'Manage active query filter chips in an e-commerce search state.',
  snippets: [
    {
      label: 'Search Facet Payload',
      code: JSON.stringify(
        {
          searchFilters: [
            { id: 'cat_electronics', label: 'Electronics', count: 42, active: true },
            { id: 'brand_apple', label: 'Apple', count: 18, active: true },
            { id: 'price_under_1000', label: 'Under $1,000', count: 25, active: false },
            { id: 'rating_4plus', label: '4★ & Above', count: 31, active: false },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { Chip } from '@core-circle/ui';

export function FilterBar() {
  const [filters, setFilters] = useState([
    { id: '1', label: 'React 19', active: true },
    { id: '2', label: 'Tailwind CSS', active: true },
    { id: '3', label: 'TypeScript', active: false },
  ]);

  const toggle = (id) => {
    setFilters(filters.map(f => f.id === id ? { ...f, active: !f.active } : f));
  };

  const remove = (id) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(f => (
        <Chip
          key={f.id}
          label={f.label}
          selected={f.active}
          removable
          onSelect={() => toggle(f.id)}
          onRemove={() => remove(f.id)}
        />
      ))}
    </div>
  );
}`,
    },
  ],
};

export const CHIP_OVERVIEW_SECTION = {
  id: 'chip-overview',
  title: 'Introduction',
  description:
    'Chip is a lightweight interactive pill used for multi-select facet filtering, dismissible keyword tags, and attribute badges with count indicators.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Chip } from '@core-circle/ui';

<Chip
  label="React"
  selected
  removable
  count={8}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const CHIP_PROPS_DATA: PropItem[] = [
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Text string or element displayed inside the chip.',
  },
  {
    name: 'selected',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the chip is active/highlighted with primary token.',
  },
  {
    name: 'removable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays a trailing × icon button to trigger dismissal.',
  },
  {
    name: 'onRemove',
    type: '(e: MouseEvent) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when the trailing remove button is clicked.',
  },
  {
    name: 'count',
    type: 'number | string',
    defaultValue: 'undefined',
    description: 'Optional numeric badge count displayed beside the label.',
  },
  {
    name: 'variant',
    type: "'default' | 'outline' | 'soft' | 'gradient' | 'ghost'",
    defaultValue: "'default'",
    description: 'Visual framing style of the chip surface.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Height and typography scale.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Optional leading icon displayed before the label.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user clicks and applies muted opacity.',
  },
];
