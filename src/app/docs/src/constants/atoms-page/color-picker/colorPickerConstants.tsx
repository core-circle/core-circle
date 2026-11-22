import { useState } from 'react';
import type { ReactNode } from 'react';
import { ColorPicker, Button, Badge } from '@core-circle/ui';
import { ShoppingBag } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ColorPickerThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface ColorPickerVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const COLOR_PICKER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'ColorPicker' },
];

export const COLOR_PICKER_HEADER_CONTENT = {
  title: 'ColorPicker',
  description:
    'A versatile color selection primitive supporting 10 visual variants, preset palettes, opacity sliders, eye dropper sampling, and multi-format conversions (Hex, RGB, HSL).',
};

const TokenStudioDemo = () => {
  const [brandColor, setBrandColor] = useState('#6366F1');
  return (
    <div className="w-full flex justify-center py-4">
      <ColorPicker
        variant="studio"
        label="Primary Brand Token"
        value={brandColor}
        onChange={(c) => setBrandColor(c)}
        showPresets
        showAlpha
        showEyeDropper
        allowFormatSwitch
      />
    </div>
  );
};

const EcommerceSwatchDemo = () => {
  const [apparelColor, setApparelColor] = useState('#EC4899');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-slate-900">Merino Wool Hoodie</h4>
          <p className="text-xs text-slate-500">Selected shade: {apparelColor}</p>
        </div>
        <Badge variant="soft" shape="pill" size="sm">
          In Stock
        </Badge>
      </div>
      <ColorPicker
        variant="pill"
        shape="circle"
        value={apparelColor}
        onChange={(c) => setApparelColor(c)}
        showPresets
        presets={[
          '#0F172A',
          '#64748B',
          '#EC4899',
          '#3B82F6',
          '#10B981',
          '#F59E0B',
        ]}
      />
      <Button
        variant="primary"
        size="md"
        fullWidth
        startIcon={<ShoppingBag size={16} />}
      >
        Add to Shopping Bag
      </Button>
    </div>
  );
};

const FigmaInspectorDemo = () => {
  const [canvasColor, setCanvasColor] = useState('#06B6D4');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Fill Color
        </span>
        <span className="text-xs text-slate-500">Solid Fill</span>
      </div>
      <ColorPicker
        variant="floating"
        value={canvasColor}
        onChange={(c) => setCanvasColor(c)}
        allowFormatSwitch
        showEyeDropper
      />
    </div>
  );
};

const GlassmorphicPaletteDemo = () => {
  const [glassColor, setGlassColor] = useState('#8B5CF6');
  return (
    <div className="w-full p-8 bg-gradient-to-r from-purple-100/60 via-indigo-100/40 to-blue-100/60 rounded-3xl flex justify-center">
      <ColorPicker
        variant="glassmorphic"
        shape="rounded"
        label="Accent Highlight"
        value={glassColor}
        onChange={(c) => setGlassColor(c)}
        showPresets
      />
    </div>
  );
};

const ThemeAccentDemo = () => {
  const [themeAccent, setThemeAccent] = useState('#10B981');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-900">Workspace Accent</span>
        <span
          className="h-4 w-4 rounded-full border border-black/10"
          style={{ backgroundColor: themeAccent }}
        />
      </div>
      <ColorPicker
        variant="outline"
        value={themeAccent}
        onChange={(c) => setThemeAccent(c)}
        showPresets
      />
      <div
        className="p-4 rounded-2xl border flex items-center justify-between"
        style={{
          borderColor: themeAccent + '40',
          backgroundColor: themeAccent + '10',
        }}
      >
        <span className="text-xs font-bold" style={{ color: themeAccent }}>
          Active Theme Preview
        </span>
        <button
          className="px-3 py-1 text-xs font-bold text-white rounded-lg shadow-sm cursor-pointer"
          style={{ backgroundColor: themeAccent }}
        >
          Save Accent
        </button>
      </div>
    </div>
  );
};

export const COLOR_PICKER_THEME_CONFIGS: ColorPickerThemeConfig[] = [
  {
    id: 'theming-token-studio',
    sectionTitle: '1. Brand Identity & Design Token Studio Theme',
    description:
      'Comprehensive design studio palette with opacity controls, palette presets, and eye dropper tool.',
    previewTitle: 'Design System Color Studio',
    render: () => <TokenStudioDemo />,
    code: `<ColorPicker
  variant="studio"
  label="Primary Brand Token"
  value="#6366F1"
  onChange={(c) => setBrandColor(c)}
  showPresets
  showAlpha
  showEyeDropper
  allowFormatSwitch
/>`,
  },
  {
    id: 'theming-ecommerce-swatch',
    sectionTitle: '2. E-Commerce Product Swatch Customizer Theme',
    description:
      'Pill-shaped color selector with fast preset chips for online storefronts.',
    previewTitle: 'Storefront Apparel Color Selector',
    render: () => <EcommerceSwatchDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div>
      <h4 className="font-bold text-slate-900">Merino Wool Hoodie</h4>
      <p className="text-xs text-slate-500">Selected shade: #EC4899</p>
    </div>
    <Badge variant="soft" shape="pill" size="sm">In Stock</Badge>
  </div>
  <ColorPicker
    variant="pill"
    shape="circle"
    value="#EC4899"
    onChange={(c) => setApparelColor(c)}
    showPresets
    presets={['#0F172A', '#64748B', '#EC4899', '#3B82F6', '#10B981', '#F59E0B']}
  />
  <Button variant="primary" size="md" fullWidth startIcon={<ShoppingBag size={16} />}>
    Add to Shopping Bag
  </Button>
</div>`,
  },
  {
    id: 'theming-figma-inspector',
    sectionTitle: '3. UI/UX Canvas Color Inspector Theme',
    description:
      'Elevated floating color inspector with format cycling between Hex, RGB, and HSL.',
    previewTitle: 'Canvas Fill & Stroke Inspector',
    render: () => <FigmaInspectorDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
  <div className="flex items-center justify-between">
    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Fill Color</span>
    <span className="text-xs text-slate-500">Solid Fill</span>
  </div>
  <ColorPicker
    variant="floating"
    value="#06B6D4"
    onChange={(c) => setCanvasColor(c)}
    allowFormatSwitch
    showEyeDropper
  />
</div>`,
  },
  {
    id: 'theming-glassmorphic-palette',
    sectionTitle: '4. Glassmorphic Creative Portfolio Theme',
    description:
      'Frosted translucent color picker on radiant background gradient.',
    previewTitle: 'Creative Studio Palette Picker',
    render: () => <GlassmorphicPaletteDemo />,
    code: `<ColorPicker
  variant="glassmorphic"
  shape="rounded"
  label="Accent Highlight"
  value="#8B5CF6"
  onChange={(c) => setGlassColor(c)}
  showPresets
/>`,
  },
  {
    id: 'theming-theme-accent',
    sectionTitle: '5. Workspace Theme Accent Manager Theme',
    description:
      'Live workspace theme accent customizer with dynamic button and badge preview.',
    previewTitle: 'Theme Accent Manager',
    render: () => <ThemeAccentDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="text-sm font-bold text-slate-900">Workspace Accent</span>
    <span className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: themeAccent }} />
  </div>
  <ColorPicker
    variant="outline"
    value="#10B981"
    onChange={(c) => setThemeAccent(c)}
    showPresets
  />
  <div className="p-4 rounded-2xl border flex items-center justify-between" style={{ borderColor: themeAccent + '40', backgroundColor: themeAccent + '10' }}>
    <span className="text-xs font-bold" style={{ color: themeAccent }}>Active Theme Preview</span>
    <button className="px-3 py-1 text-xs font-bold text-white rounded-lg shadow-sm" style={{ backgroundColor: themeAccent }}>
      Save Accent
    </button>
  </div>
</div>`,
  },
];

export const COLOR_PICKER_VARIANT_GROUPS: ColorPickerVariantGroup[] = [
  {
    id: 'color-picker-variants-styles',
    title: '1. Container & Surface Styles (10 Variants)',
    description:
      'Outline, filled, floating, glassmorphic, pill, material, gradient, compact, studio, and ghost.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <ColorPicker variant="outline" label="Outline" defaultValue="#3B82F6" />
        <ColorPicker variant="filled" label="Filled" defaultValue="#10B981" />
        <ColorPicker variant="floating" label="Floating" defaultValue="#8B5CF6" />
        <ColorPicker variant="glassmorphic" label="Glassmorphic" defaultValue="#EC4899" />
        <ColorPicker variant="pill" label="Pill Capsule" defaultValue="#F59E0B" />
        <ColorPicker variant="material" label="Material" defaultValue="#06B6D4" />
        <ColorPicker variant="gradient" label="Gradient Glow" defaultValue="#6366F1" />
        <ColorPicker variant="ghost" label="Ghost Minimal" defaultValue="#0F172A" />
        <ColorPicker variant="compact" label="Compact Swatch" defaultValue="#EF4444" />
      </div>
    ),
  },
  {
    id: 'color-picker-variants-shapes',
    title: '2. Swatch Contour Shapes',
    description:
      'Rounded, circle, square, and pill contours across small, medium, and large scales.',
    render: () => (
      <div className="flex flex-wrap gap-8 items-center w-full">
        <ColorPicker shape="rounded" size="md" label="Rounded Shape" defaultValue="#3B82F6" />
        <ColorPicker shape="circle" size="md" label="Circle Shape" defaultValue="#10B981" />
        <ColorPicker shape="square" size="md" label="Square Shape" defaultValue="#8B5CF6" />
        <ColorPicker shape="pill" size="md" label="Pill Shape" defaultValue="#EC4899" />
      </div>
    ),
  },
];

export const COLOR_PICKER_PLAYGROUND_SECTION = {
  id: 'color-picker-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual variants, swatch shapes, opacity sliders, and format switchers.',
};

export const COLOR_PICKER_MOCK_SECTION = {
  id: 'color-picker-mock',
  title: 'Dynamic Workspace Theme Palette Integration',
  description:
    'Save and update organization branding colors with remote API persistence.',
  snippets: [
    {
      label: 'Sample Backend Theme API Payload',
      code: JSON.stringify(
        {
          workspace_id: 'ws_4892',
          theme: {
            primary_color: '#6366F1',
            secondary_color: '#10B981',
            accent_color: '#EC4899',
            alpha_opacity: 95,
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Consumer Component',
      code: `import React, { useState } from 'react';
import { ColorPicker, Button } from '@core-circle/ui';

export const ThemeCustomizer = () => {
  const [theme, setTheme] = useState({
    primary: '#6366F1',
    accent: '#10B981',
  });

  const handleSave = async () => {
    await fetch('/api/v1/workspace/theme', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(theme)
    });
  };

  return (
    <div className="space-y-4">
      <ColorPicker
        variant="studio"
        label="Primary Brand Color"
        value={theme.primary}
        onChange={(val) => setTheme(prev => ({ ...prev, primary: val }))}
        showPresets
        showAlpha
      />
      <Button variant="primary" onClick={handleSave}>
        Apply Theme Tokens
      </Button>
    </div>
  );
};`,
    },
  ],
};

export const COLOR_PICKER_OVERVIEW_SECTION = {
  id: 'color-picker-usage',
  title: 'Introduction',
  description:
    'The ColorPicker primitive allows users to select, inspect, and copy colors with support for presets, opacity, formats, and eye dropper.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { ColorPicker } from '@core-circle/ui';

<ColorPicker
  label="Brand Accent"
  defaultValue="#3B82F6"
  variant="outline"
  showPresets
  allowFormatSwitch
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const COLOR_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    defaultValue: "'#3B82F6'",
    description: 'The current controlled color value (Hex format).',
  },
  {
    name: 'defaultValue',
    type: 'string',
    defaultValue: "'#3B82F6'",
    description: 'Default color value for uncontrolled usage.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional label displayed above the picker.',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'compact' | 'studio' | 'ghost'",
    defaultValue: "'outline'",
    description: 'The visual style variant of the container (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the color swatch and text.',
  },
  {
    name: 'shape',
    type: "'rounded' | 'circle' | 'square' | 'pill'",
    defaultValue: "'rounded'",
    description: 'Contour shape of the color preview swatch.',
  },
  {
    name: 'format',
    type: "'hex' | 'rgb' | 'hsl'",
    defaultValue: "'hex'",
    description: 'Color string representation format.',
  },
  {
    name: 'showValue',
    type: 'boolean',
    defaultValue: 'true',
    description:
      'Whether to display the formatted color code alongside the swatch.',
  },
  {
    name: 'allowFormatSwitch',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Allows clicking the format chip to cycle between Hex, RGB, and HSL.',
  },
  {
    name: 'showPresets',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders a quick-pick palette of preset color swatches.',
  },
  {
    name: 'presets',
    type: 'string[]',
    defaultValue: 'DEFAULT_PRESETS',
    description:
      'Array of color hex codes to display in the quick-pick palette.',
  },
  {
    name: 'showAlpha',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays an opacity / alpha channel slider (0% to 100%).',
  },
  {
    name: 'showEyeDropper',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Displays a screen eye dropper tool button (supported in modern browsers).',
  },
  {
    name: 'copyable',
    type: 'boolean',
    defaultValue: 'true',
    description:
      'Whether clicking the formatted color string copies it to clipboard.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the color picker is interactive.',
  },
  {
    name: 'onChange',
    type: '(color: string) => void',
    defaultValue: '-',
    description: 'Callback fired when the color value changes.',
  },
];
