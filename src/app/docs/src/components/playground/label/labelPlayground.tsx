'use client';

import React, { useState } from 'react';
import { 
  Label, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Badge, 
  Card,
  LabelVariant,
  LabelSize,
  LabelWeight 
} from '@core-circle/ui';
import { Info } from '@core-circle/icons';
import ComponentPreview from '../../component-preview';

export const LabelPlayground: React.FC = () => {
  const [text, setText] = useState('Work Email Address');
  const [variant, setVariant] = useState<LabelVariant>('default');
  const [size, setSize] = useState<LabelSize>('sm');
  const [weight, setWeight] = useState<LabelWeight>('semibold');

  const [uppercase, setUppercase] = useState(false);
  const [required, setRequired] = useState(true);
  const [optional, setOptional] = useState(false);
  const [showHelperIcon, setShowHelperIcon] = useState(true);
  const [showBadge, setShowBadge] = useState(false);

  const variantOptions = [
    { label: 'Default Slate (900)', value: 'default' },
    { label: 'Primary Brand', value: 'primary' },
    { label: 'Muted Text', value: 'muted' },
    { label: 'Success Emerald', value: 'success' },
    { label: 'Warning Amber', value: 'warning' },
    { label: 'Destructive Red', value: 'destructive' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Glassmorphic Badge', value: 'glassmorphic' },
    { label: 'Pill Label', value: 'pill' },
    { label: 'Badge Label Tint', value: 'badge-label' },
  ];

  const sizeOptions = [
    { label: 'Extra Small (xs: 11px)', value: 'xs' },
    { label: 'Small (sm: 12px)', value: 'sm' },
    { label: 'Medium (md: 14px)', value: 'md' },
    { label: 'Large (lg: 16px)', value: 'lg' },
    { label: 'Extra Large (xl: 18px)', value: 'xl' },
    { label: '2X Large (2xl: 20px)', value: '2xl' },
  ];

  const weightOptions = [
    { label: 'Light (300)', value: 'light' },
    { label: 'Normal (400)', value: 'normal' },
    { label: 'Medium (500)', value: 'medium' },
    { label: 'Semibold (600)', value: 'semibold' },
    { label: 'Bold (700)', value: 'bold' },
  ];

  const generateCodeSnippet = () => {
    let props = `size="${size}"\n  weight="${weight}"`;
    if (variant !== 'default') props += `\n  variant="${variant}"`;
    if (uppercase) props += `\n  uppercase`;
    if (required) props += `\n  required`;
    if (optional) props += `\n  optional`;
    if (showHelperIcon) props += `\n  helperIcon={<Info size={14} />}`;
    if (showBadge) props += `\n  badge={<Badge variant="primary" size="sm" shape="pill">PRO</Badge>}`;

    return `<Label\n  ${props}\n>\n  ${text}\n</Label>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive Label Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-12 w-full min-h-[160px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <Label
            variant={variant}
            size={size}
            weight={weight}
            uppercase={uppercase}
            required={required}
            optional={optional}
            helperIcon={showHelperIcon ? <Info size={size === 'xs' || size === 'sm' ? 12 : 14} /> : undefined}
            badge={showBadge ? <Badge variant="primary" size="sm" shape="pill">PRO</Badge> : undefined}
          >
            {text}
          </Label>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          Label Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 3 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Typography Size"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as LabelSize)}
            />
            <Select
              label="Font Weight"
              value={weight}
              options={weightOptions}
              onChange={(val) => setWeight(val as LabelWeight)}
            />
            <Select
              label="Color Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as LabelVariant)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="req-flag"
              label="Required (*)"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
            <Checkbox
              id="opt-flag"
              label="Optional Tag"
              checked={optional}
              onChange={(e) => setOptional(e.target.checked)}
            />
            <Checkbox
              id="uppercase-flag"
              label="Uppercase"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <Checkbox
              id="helper-flag"
              label="Helper Icon"
              checked={showHelperIcon}
              onChange={(e) => setShowHelperIcon(e.target.checked)}
            />
            <Checkbox
              id="badge-flag"
              label="Sub-Badge"
              checked={showBadge}
              onChange={(e) => setShowBadge(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Input */}
          <div className="grid grid-cols-1 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Label Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g. Work Email Address"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
