'use client';

import React, { useState } from 'react';
import { 
  ColorPicker, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Card,
  ColorPickerVariant,
  ColorPickerSize,
  ColorPickerShape,
  ColorPickerFormat
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const ColorPickerPlayground: React.FC = () => {
  const [color, setColor] = useState('#3B82F6');
  const [variant, setVariant] = useState<ColorPickerVariant>('outline');
  const [size, setSize] = useState<ColorPickerSize>('md');
  const [shape, setShape] = useState<ColorPickerShape>('rounded');
  const [format, setFormat] = useState<ColorPickerFormat>('hex');

  const [label, setLabel] = useState('Brand Accent Color');
  const [helperText, setHelperText] = useState('Select your brand primary color token.');
  
  const [showValue, setShowValue] = useState(true);
  const [showPresets, setShowPresets] = useState(true);
  const [showAlpha, setShowAlpha] = useState(false);
  const [showEyeDropper, setShowEyeDropper] = useState(true);
  const [allowFormatSwitch, setAllowFormatSwitch] = useState(true);
  const [copyable, setCopyable] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const variantOptions = [
    { label: 'Outline (Default)', value: 'outline' },
    { label: 'Filled Surface', value: 'filled' },
    { label: 'Floating Depth', value: 'floating' },
    { label: 'Glassmorphic Blur', value: 'glassmorphic' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Material Underline', value: 'material' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Designer Studio', value: 'studio' },
    { label: 'Compact Swatch', value: 'compact' },
    { label: 'Ghost Minimal', value: 'ghost' },
  ];

  const sizeOptions = [
    { label: 'Small (sm)', value: 'sm' },
    { label: 'Medium (md)', value: 'md' },
    { label: 'Large (lg)', value: 'lg' },
  ];

  const shapeOptions = [
    { label: 'Rounded Square', value: 'rounded' },
    { label: 'Circle Swatch', value: 'circle' },
    { label: 'Square Contour', value: 'square' },
    { label: 'Pill Swatch', value: 'pill' },
  ];

  const formatOptions = [
    { label: 'HEX (#3B82F6)', value: 'hex' },
    { label: 'RGB (rgb(59, 130, 246))', value: 'rgb' },
    { label: 'HSL (hsl(217, 91%, 60%))', value: 'hsl' },
  ];

  const generateCodeSnippet = () => {
    let props = `value="${color}"\n  onChange={(c) => setColor(c)}`;
    if (variant !== 'outline') props += `\n  variant="${variant}"`;
    if (size !== 'md') props += `\n  size="${size}"`;
    if (shape !== 'rounded') props += `\n  shape="${shape}"`;
    if (format !== 'hex') props += `\n  format="${format}"`;
    if (label) props += `\n  label="${label}"`;
    if (helperText) props += `\n  helperText="${helperText}"`;
    if (!showValue) props += `\n  showValue={false}`;
    if (showPresets) props += `\n  showPresets`;
    if (showAlpha) props += `\n  showAlpha`;
    if (showEyeDropper) props += `\n  showEyeDropper`;
    if (allowFormatSwitch) props += `\n  allowFormatSwitch`;
    if (!copyable) props += `\n  copyable={false}`;
    if (disabled) props += `\n  disabled`;

    return `<ColorPicker\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive ColorPicker Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-8 w-full min-h-[160px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <ColorPicker
            value={color}
            onChange={(newCol) => setColor(newCol)}
            variant={variant}
            size={size}
            shape={shape}
            format={format}
            label={label}
            helperText={helperText}
            showValue={showValue}
            showPresets={showPresets}
            showAlpha={showAlpha}
            showEyeDropper={showEyeDropper}
            allowFormatSwitch={allowFormatSwitch}
            copyable={copyable}
            disabled={disabled}
          />
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          ColorPicker Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 4 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Select
              label="Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as ColorPickerVariant)}
            />
            <Select
              label="Size"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as ColorPickerSize)}
            />
            <Select
              label="Swatch Shape"
              value={shape}
              options={shapeOptions}
              onChange={(val) => setShape(val as ColorPickerShape)}
            />
            <Select
              label="Color Format"
              value={format}
              options={formatOptions}
              onChange={(val) => setFormat(val as ColorPickerFormat)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="show-presets"
              label="Show Presets"
              checked={showPresets}
              onChange={(e) => setShowPresets(e.target.checked)}
            />
            <Checkbox
              id="show-alpha"
              label="Opacity Slider"
              checked={showAlpha}
              onChange={(e) => setShowAlpha(e.target.checked)}
            />
            <Checkbox
              id="show-eye-dropper"
              label="Eye Dropper"
              checked={showEyeDropper}
              onChange={(e) => setShowEyeDropper(e.target.checked)}
            />
            <Checkbox
              id="allow-format-switch"
              label="Format Switcher"
              checked={allowFormatSwitch}
              onChange={(e) => setAllowFormatSwitch(e.target.checked)}
            />
            <Checkbox
              id="copyable-val"
              label="Copy on Click"
              checked={copyable}
              onChange={(e) => setCopyable(e.target.checked)}
            />
            <Checkbox
              id="show-value"
              label="Show Value"
              checked={showValue}
              onChange={(e) => setShowValue(e.target.checked)}
            />
            <Checkbox
              id="picker-disabled"
              label="Disabled"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Custom Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Brand Accent"
            />
            <TextInput
              label="Helper Text"
              value={helperText}
              onChange={(e) => setHelperText(e.target.value)}
              placeholder="e.g. Helper instructions..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
