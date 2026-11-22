'use client';

import React from 'react';
import { ColorSwatch, Badge } from '@core-circle/ui';
import { Palette, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const COLOR_SWATCH_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'ColorSwatch' },
];

export const COLOR_SWATCH_HEADER_CONTENT = {
  title: 'ColorSwatch',
  description:
    'A selectable palette matrix of color tiles featuring active checkmark indicators, luminance-aware contrast detection, and configurable geometric shapes.',
};

export const COLOR_SWATCH_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore apparel finishes, workspace brand theme selectors, tag tint pickers, and creative design tools.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore shapes (circle, rounded, square), sizing scales, and grid column configurations.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive color swatch sandbox with dynamic shapes and active color feedback.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Brand style customization payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const samplePalette = [
  { label: 'Slate Navy', value: '#1e293b' },
  { label: 'Core Blue', value: '#2563eb' },
  { label: 'Emerald Green', value: '#10b981' },
  { label: 'Amber Orange', value: '#f59e0b' },
  { label: 'Rose Pink', value: '#f43f5e' },
  { label: 'Violet Purple', value: '#8b5cf6' },
  { label: 'Pure White', value: '#ffffff' },
];

export const COLOR_SWATCH_THEME_CONFIGS = [
  {
    id: 'theming-product-finish',
    title: '1. E-Commerce Hardware Finishes',
    description: 'Circular metallic tiles for selecting smartphone and laptop chassis finishes.',
    previewTitle: 'Select Hardware Finish',
    code: `<ColorSwatch
  label="Device Aluminum Color"
  shape="circle"
  size="lg"
  colors={[
    { label: 'Space Gray', value: '#374151' },
    { label: 'Silver', value: '#e5e7eb' },
    { label: 'Midnight Blue', value: '#1e3a8a' },
    { label: 'Starlight Gold', value: '#fef3c7' },
  ]}
  defaultValue="#374151"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ColorSwatch
          label="Device Aluminum Color"
          shape="circle"
          size="lg"
          colors={[
            { label: 'Space Gray', value: '#374151' },
            { label: 'Silver', value: '#e5e7eb' },
            { label: 'Midnight Blue', value: '#1e3a8a' },
            { label: 'Starlight Gold', value: '#fef3c7' },
          ]}
          defaultValue="#374151"
        />
      </div>
    ),
  },
  {
    id: 'theming-workspace-brand',
    title: '2. SaaS Brand Accent Selector',
    description: 'Rounded square tiles with luminance-aware contrast checkmarks for brand themes.',
    previewTitle: 'Workspace Primary Accent',
    code: `<ColorSwatch
  label="Workspace Brand Theme"
  shape="rounded"
  colors={samplePalette}
  defaultValue="#2563eb"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ColorSwatch
          label="Workspace Brand Theme"
          shape="rounded"
          colors={samplePalette}
          defaultValue="#2563eb"
        />
      </div>
    ),
  },
  {
    id: 'theming-grid-matrix',
    title: '3. Multi-Column Swatch Grid (4 cols)',
    description: 'Structured 4-column color matrix for creative graphics tools.',
    previewTitle: 'Drawing Palette Grid',
    code: `<ColorSwatch
  label="Palette Grid"
  shape="square"
  columns={4}
  colors={[
    { label: 'Red', value: '#ef4444' },
    { label: 'Orange', value: '#f97316' },
    { label: 'Amber', value: '#f59e0b' },
    { label: 'Green', value: '#22c55e' },
    { label: 'Teal', value: '#14b8a6' },
    { label: 'Blue', value: '#3b82f6' },
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Purple', value: '#a855f7' },
  ]}
  defaultValue="#3b82f6"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ColorSwatch
          label="Palette Grid"
          shape="square"
          columns={4}
          colors={[
            { label: 'Red', value: '#ef4444' },
            { label: 'Orange', value: '#f97316' },
            { label: 'Amber', value: '#f59e0b' },
            { label: 'Green', value: '#22c55e' },
            { label: 'Teal', value: '#14b8a6' },
            { label: 'Blue', value: '#3b82f6' },
            { label: 'Indigo', value: '#6366f1' },
            { label: 'Purple', value: '#a855f7' },
          ]}
          defaultValue="#3b82f6"
        />
      </div>
    ),
  },
  {
    id: 'theming-tag-tint',
    title: '4. Tag Category Color Coding',
    description: 'Compact circular swatches for labeling Kanban task cards.',
    previewTitle: 'Project Label Tint',
    code: `<ColorSwatch
  label="Label Tint"
  size="sm"
  colors={[
    { label: 'Bug (Red)', value: '#f43f5e' },
    { label: 'Feature (Blue)', value: '#3b82f6' },
    { label: 'Docs (Green)', value: '#10b981' },
    { label: 'Refactor (Purple)', value: '#8b5cf6' },
  ]}
  defaultValue="#f43f5e"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ColorSwatch
          label="Label Tint"
          size="sm"
          colors={[
            { label: 'Bug (Red)', value: '#f43f5e' },
            { label: 'Feature (Blue)', value: '#3b82f6' },
            { label: 'Docs (Green)', value: '#10b981' },
            { label: 'Refactor (Purple)', value: '#8b5cf6' },
          ]}
          defaultValue="#f43f5e"
        />
      </div>
    ),
  },
  {
    id: 'theming-neutrals-monochrome',
    title: '5. Neutral Monochrome Spectrum',
    description: 'Subtle slate scale for minimal UI theme choices.',
    previewTitle: 'Surface Gray Tone',
    code: `<ColorSwatch
  label="Neutral Surface"
  colors={[
    { label: 'White', value: '#ffffff' },
    { label: 'Slate 100', value: '#f1f5f9' },
    { label: 'Slate 300', value: '#cbd5e1' },
    { label: 'Slate 600', value: '#475569' },
    { label: 'Slate 900', value: '#0f172a' },
  ]}
  defaultValue="#0f172a"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ColorSwatch
          label="Neutral Surface"
          colors={[
            { label: 'White', value: '#ffffff' },
            { label: 'Slate 100', value: '#f1f5f9' },
            { label: 'Slate 300', value: '#cbd5e1' },
            { label: 'Slate 600', value: '#475569' },
            { label: 'Slate 900', value: '#0f172a' },
          ]}
          defaultValue="#0f172a"
        />
      </div>
    ),
  },
];

export const COLOR_SWATCH_VARIANT_GROUPS = [
  {
    id: 'variants-shapes',
    title: '1. Tile Geometry Shapes',
    description: 'Circle, Rounded Square, and Sharp Square outlines.',
    items: [
      {
        title: 'Circle Shape (Default)',
        code: '<ColorSwatch shape="circle" colors={samplePalette} />',
        render: () => <ColorSwatch shape="circle" colors={samplePalette} defaultValue="#2563eb" />,
      },
      {
        title: 'Rounded Square Shape',
        code: '<ColorSwatch shape="rounded" colors={samplePalette} />',
        render: () => <ColorSwatch shape="rounded" colors={samplePalette} defaultValue="#10b981" />,
      },
      {
        title: 'Square Shape',
        code: '<ColorSwatch shape="square" colors={samplePalette} />',
        render: () => <ColorSwatch shape="square" colors={samplePalette} defaultValue="#f43f5e" />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: '2. Sizing Scale',
    description: 'Compact (sm - 24px), Standard (md - 32px), and Prominent (lg - 40px) tiles.',
    items: [
      {
        title: 'Small Scale (sm - 24px)',
        code: '<ColorSwatch size="sm" colors={samplePalette} />',
        render: () => <ColorSwatch size="sm" colors={samplePalette} defaultValue="#2563eb" />,
      },
      {
        title: 'Medium Scale (md - 32px)',
        code: '<ColorSwatch size="md" colors={samplePalette} />',
        render: () => <ColorSwatch size="md" colors={samplePalette} defaultValue="#2563eb" />,
      },
      {
        title: 'Large Scale (lg - 40px)',
        code: '<ColorSwatch size="lg" colors={samplePalette} />',
        render: () => <ColorSwatch size="lg" colors={samplePalette} defaultValue="#2563eb" />,
      },
    ],
  },
  {
    id: 'variants-states',
    title: '3. Column Grids & States',
    description: 'Multi-column layouts and disabled interaction state.',
    items: [
      {
        title: 'Grid Columns (3 Columns)',
        code: '<ColorSwatch columns={3} colors={samplePalette} />',
        render: () => <ColorSwatch columns={3} colors={samplePalette} defaultValue="#2563eb" />,
      },
      {
        title: 'Disabled State',
        code: '<ColorSwatch disabled colors={samplePalette} defaultValue="#2563eb" />',
        render: () => <ColorSwatch disabled colors={samplePalette} defaultValue="#2563eb" />,
      },
    ],
  },
];

export const COLOR_SWATCH_PLAYGROUND_SECTION = {
  id: 'color-swatch-playground-section',
  title: 'Interactive Playground',
  description: 'Test tile shapes, sizing scales, column grids, and live color feedback.',
};

export const COLOR_SWATCH_MOCK_SECTION = {
  id: 'color-swatch-mock',
  title: 'White-Label Brand Theme API Integration',
  description: 'Connect ColorSwatch to dynamic product theme settings.',
  snippets: [
    {
      label: 'Theme Customization Payload',
      code: JSON.stringify(
        {
          organizationId: 'org_core_prod',
          branding: {
            primaryColor: '#2563eb',
            activePreset: 'Core Blue',
            availableColors: [
              { label: 'Slate', value: '#1e293b' },
              { label: 'Blue', value: '#2563eb' },
              { label: 'Green', value: '#10b981' },
              { label: 'Amber', value: '#f59e0b' },
              { label: 'Rose', value: '#f43f5e' },
            ],
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { ColorSwatch, Typography } from '@core-circle/ui';

export function BrandSettings() {
  const [accent, setAccent] = useState('#2563eb');

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <ColorSwatch
        label="Select Accent Color"
        value={accent}
        onChange={setAccent}
        shape="rounded"
        colors={[
          { label: 'Blue', value: '#2563eb' },
          { label: 'Green', value: '#10b981' },
          { label: 'Rose', value: '#f43f5e' },
        ]}
      />
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span>Active Theme:</span>
        <span className="font-mono font-bold text-slate-800">{accent}</span>
      </div>
    </div>
  );
}`,
    },
  ],
};

export const COLOR_SWATCH_OVERVIEW_SECTION = {
  id: 'color-swatch-overview',
  title: 'Introduction',
  description:
    'ColorSwatch is a visual selection matrix presenting color palettes with checkmark validation and automatic dark/light contrast adaptation.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { ColorSwatch } from '@core-circle/ui';

<ColorSwatch
  label="Theme Color"
  colors={['#2563eb', '#10b981', '#f59e0b', '#f43f5e']}
  defaultValue="#2563eb"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const COLOR_SWATCH_PROPS_DATA: PropItem[] = [
  {
    name: 'colors',
    type: 'string[] | { label: string; value: string }[]',
    defaultValue: '[]',
    description: 'Array of hex/rgb color strings or color descriptor objects.',
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Active selected color value in controlled mode.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Default selected color value in uncontrolled mode.',
  },
  {
    name: 'shape',
    type: "'circle' | 'rounded' | 'square'",
    defaultValue: "'circle'",
    description: 'Geometric border radius contour of each swatch tile.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Tile height and width scale.',
  },
  {
    name: 'columns',
    type: 'number',
    defaultValue: 'undefined',
    description: 'Grid column count for multi-row structured palettes.',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Header label placed above the swatch tiles.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user clicks and applies muted opacity.',
  },
  {
    name: 'onChange',
    type: '(color: string) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when a color tile is clicked.',
  },
];
