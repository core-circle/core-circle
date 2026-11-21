'use client';

import React, { useState } from 'react';
import { 
  Checkbox, 
  Select, 
  TextInput, 
  Typography, 
  Badge, 
  Card,
  CheckboxVariant,
  CheckboxSize,
  CheckboxShape 
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const CheckboxPlayground: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [indeterminate, setIndeterminate] = useState(false);
  const [variant, setVariant] = useState<CheckboxVariant>('card');
  const [size, setSize] = useState<CheckboxSize>('md');
  const [shape, setShape] = useState<CheckboxShape>('rounded');

  const [disabled, setDisabled] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const [showBadge, setShowBadge] = useState(true);

  const [label, setLabel] = useState('Enable Continuous Security Scans');
  const [description, setDescription] = useState('Automatically scans pull requests for CVE vulnerabilities and leaked API keys.');

  const variantOptions = [
    { label: 'Card Container (Default)', value: 'card' },
    { label: 'Floating Card', value: 'floating' },
    { label: 'Glassmorphic Card', value: 'glassmorphic' },
    { label: 'Solid Brand', value: 'solid' },
    { label: 'Outline Clean', value: 'outline' },
    { label: 'Pill Toggle', value: 'pill' },
    { label: 'Bordered Strong', value: 'bordered' },
    { label: 'Success Emerald', value: 'success' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Ghost Minimal', value: 'ghost' },
  ];

  const sizeOptions = [
    { label: 'Small (sm: 16px)', value: 'sm' },
    { label: 'Medium (md: 20px)', value: 'md' },
    { label: 'Large (lg: 24px)', value: 'lg' },
  ];

  const shapeOptions = [
    { label: 'Rounded Square (Default)', value: 'rounded' },
    { label: 'Circular Ring', value: 'circle' },
    { label: 'Sharp Square', value: 'square' },
  ];

  const generateCodeSnippet = () => {
    let props = `checked={${checked}}\n  onChange={(e) => setChecked(e.target.checked)}`;
    if (variant !== 'solid') props += `\n  variant="${variant}"`;
    if (size !== 'md') props += `\n  size="${size}"`;
    if (shape !== 'rounded') props += `\n  shape="${shape}"`;
    if (indeterminate) props += `\n  indeterminate`;
    if (label) props += `\n  label="${label}"`;
    if (showDescription && description) props += `\n  description="${description}"`;
    if (showBadge) props += `\n  badge={<Badge variant="primary" shape="pill" size="sm">RECOMMENDED</Badge>}`;
    if (disabled) props += `\n  disabled`;

    return `<Checkbox\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive Checkbox Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-8 w-full min-h-[220px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <div className="w-full max-w-md">
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              indeterminate={indeterminate}
              variant={variant}
              size={size}
              shape={shape}
              label={label}
              description={showDescription ? description : undefined}
              badge={showBadge ? <Badge variant="primary" shape="pill" size="sm">RECOMMENDED</Badge> : undefined}
              disabled={disabled}
            />
          </div>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          Checkbox Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 3 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as CheckboxVariant)}
            />
            <Select
              label="Size Scale"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as CheckboxSize)}
            />
            <Select
              label="Contour Shape"
              value={shape}
              options={shapeOptions}
              onChange={(val) => setShape(val as CheckboxShape)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="checked-flag"
              label="Checked"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Checkbox
              id="indet-flag"
              label="Indeterminate (-)"
              checked={indeterminate}
              onChange={(e) => setIndeterminate(e.target.checked)}
            />
            <Checkbox
              id="desc-flag"
              label="Description Subtitle"
              checked={showDescription}
              onChange={(e) => setShowDescription(e.target.checked)}
            />
            <Checkbox
              id="badge-flag"
              label="Attached Badge"
              checked={showBadge}
              onChange={(e) => setShowBadge(e.target.checked)}
            />
            <Checkbox
              id="dis-flag"
              label="Disabled"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Label Text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Enable Continuous Security Scans"
            />
            <TextInput
              label="Subtitle Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Scans pull requests..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
