'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  ColorPicker, 
  Button, 
  Badge, 
  Typography, 
  Card 
} from '@core-circle/ui';
import { 
  Sparkles, 
  Shield, 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Brush, 
  ShoppingBag, 
  SlidersHorizontalIcon, 
  Sun, 
  Moon, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { 
  COLOR_PICKER_PROPS_DATA, 
  COLOR_PICKER_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/color-picker/colorPickerConstants';
import { ColorPickerPlayground } from '../../../components/playground/color-picker/colorPickerPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ColorPickerContainerProps } from '../../../interface/containers/atoms/color-picker.types';

export default function ColorPickerContainer({
  headerContent,
  breadcrumbItems
}: ColorPickerContainerProps) {
  const [brandColor, setBrandColor] = useState('#6366F1');
  const [apparelColor, setApparelColor] = useState('#EC4899');
  const [canvasColor, setCanvasColor] = useState('#06B6D4');
  const [glassColor, setGlassColor] = useState('#8B5CF6');
  const [themeAccent, setThemeAccent] = useState('#10B981');

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Brand Token Studio Theme */}
          <DocSection
            id="theming-token-studio"
            title="1. Brand Identity & Design Token Studio Theme"
            description="Comprehensive design studio palette with opacity controls, palette presets, and eye dropper tool."
          >
            <ComponentPreview
              title="Design System Color Studio"
              code={`<ColorPicker
  variant="studio"
  label="Primary Brand Token"
  value="${brandColor}"
  onChange={(c) => setBrandColor(c)}
  showPresets
  showAlpha
  showEyeDropper
  allowFormatSwitch
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 2. E-Commerce Product Swatch Customizer */}
          <DocSection
            id="theming-ecommerce-swatch"
            title="2. E-Commerce Product Swatch Customizer Theme"
            description="Pill-shaped color selector with fast preset chips for online storefronts."
          >
            <ComponentPreview
              title="Storefront Apparel Color Selector"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div>
      <h4 className="font-bold text-slate-900">Merino Wool Hoodie</h4>
      <p className="text-xs text-slate-500">Selected shade: ${apparelColor}</p>
    </div>
    <Badge variant="soft" shape="pill" size="sm">In Stock</Badge>
  </div>
  <ColorPicker
    variant="pill"
    shape="circle"
    value="${apparelColor}"
    onChange={(c) => setApparelColor(c)}
    showPresets
    presets={['#0F172A', '#64748B', '#EC4899', '#3B82F6', '#10B981', '#F59E0B']}
  />
  <Button variant="primary" size="md" fullWidth startIcon={<ShoppingBag size={16} />}>
    Add to Shopping Bag
  </Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900">Merino Wool Hoodie</h4>
                    <p className="text-xs text-slate-500">Selected shade: {apparelColor}</p>
                  </div>
                  <Badge variant="soft" shape="pill" size="sm">In Stock</Badge>
                </div>
                <ColorPicker
                  variant="pill"
                  shape="circle"
                  value={apparelColor}
                  onChange={(c) => setApparelColor(c)}
                  showPresets
                  presets={['#0F172A', '#64748B', '#EC4899', '#3B82F6', '#10B981', '#F59E0B']}
                />
                <Button variant="primary" size="md" fullWidth startIcon={<ShoppingBag size={16} />}>
                  Add to Shopping Bag
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Figma-Style Inspector Theme */}
          <DocSection
            id="theming-figma-inspector"
            title="3. UI/UX Canvas Color Inspector Theme"
            description="Elevated floating color inspector with format cycling between Hex, RGB, and HSL."
          >
            <ComponentPreview
              title="Canvas Fill & Stroke Inspector"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
  <div className="flex items-center justify-between">
    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Fill Color</span>
    <span className="text-xs text-slate-500">Solid Fill</span>
  </div>
  <ColorPicker
    variant="floating"
    value="${canvasColor}"
    onChange={(c) => setCanvasColor(c)}
    allowFormatSwitch
    showEyeDropper
  />
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Fill Color</span>
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
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic Creative Portfolio Theme */}
          <DocSection
            id="theming-glassmorphic-palette"
            title="4. Glassmorphic Creative Portfolio Theme"
            description="Frosted translucent color picker on radiant background gradient."
          >
            <ComponentPreview
              title="Creative Studio Palette Picker"
              code={`<ColorPicker
  variant="glassmorphic"
  shape="rounded"
  label="Accent Highlight"
  value="${glassColor}"
  onChange={(c) => setGlassColor(c)}
  showPresets
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 5. Theme Accent Token Manager */}
          <DocSection
            id="theming-theme-accent"
            title="5. Workspace Theme Accent Manager Theme"
            description="Live workspace theme accent customizer with dynamic button and badge preview."
          >
            <ComponentPreview
              title="Theme Accent Manager"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="text-sm font-bold text-slate-900">Workspace Accent</span>
    <span className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: themeAccent }} />
  </div>
  <ColorPicker
    variant="outline"
    value="${themeAccent}"
    onChange={(c) => setThemeAccent(c)}
    showPresets
  />
  <div className="p-4 rounded-2xl border flex items-center justify-between" style={{ borderColor: themeAccent + '40', backgroundColor: themeAccent + '10' }}>
    <span className="text-xs font-bold" style={{ color: themeAccent }}>Active Theme Preview</span>
    <button className="px-3 py-1 text-xs font-bold text-white rounded-lg shadow-sm" style={{ backgroundColor: themeAccent }}>
      Save Accent
    </button>
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-900">Workspace Accent</span>
                  <span className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: themeAccent }} />
                </div>
                <ColorPicker
                  variant="outline"
                  value={themeAccent}
                  onChange={(c) => setThemeAccent(c)}
                  showPresets
                />
                <div className="p-4 rounded-2xl border flex items-center justify-between" style={{ borderColor: themeAccent + '40', backgroundColor: themeAccent + '10' }}>
                  <span className="text-xs font-bold" style={{ color: themeAccent }}>Active Theme Preview</span>
                  <button className="px-3 py-1 text-xs font-bold text-white rounded-lg shadow-sm cursor-pointer" style={{ backgroundColor: themeAccent }}>
                    Save Accent
                  </button>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="color-picker-variants-styles" title="1. Container & Surface Styles (10 Variants)" description="Outline, filled, floating, glassmorphic, pill, material, gradient, compact, studio, and ghost.">
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
          </DocSection>

          <DocSection id="color-picker-variants-shapes" title="2. Swatch Contour Shapes" description="Rounded, circle, square, and pill contours across small, medium, and large scales.">
            <div className="flex flex-wrap gap-8 items-center w-full">
              <ColorPicker shape="rounded" size="md" label="Rounded Shape" defaultValue="#3B82F6" />
              <ColorPicker shape="circle" size="md" label="Circle Shape" defaultValue="#10B981" />
              <ColorPicker shape="square" size="md" label="Square Shape" defaultValue="#8B5CF6" />
              <ColorPicker shape="pill" size="md" label="Pill Shape" defaultValue="#EC4899" />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="color-picker-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, swatch shapes, opacity sliders, and format switchers."
        >
          <ColorPickerPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="color-picker-mock"
            title="Dynamic Workspace Theme Palette Integration"
            description="Save and update organization branding colors with remote API persistence."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Theme API Payload"
                code={JSON.stringify({
                  workspace_id: "ws_4892",
                  theme: {
                    primary_color: "#6366F1",
                    secondary_color: "#10B981",
                    accent_color: "#EC4899",
                    alpha_opacity: 95
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useState } from 'react';
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
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="color-picker-usage" title="Introduction" description="The ColorPicker primitive allows users to select, inspect, and copy colors with support for presets, opacity, formats, and eye dropper.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { ColorPicker } from '@core-circle/ui';

<ColorPicker
  label="Brand Accent"
  defaultValue="#3B82F6"
  variant="outline"
  showPresets
  allowFormatSwitch
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={COLOR_PICKER_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
