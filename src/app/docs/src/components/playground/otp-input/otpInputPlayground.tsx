'use client';

import React, { useState } from 'react';
import { 
  OtpInput, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Card,
  OtpVariant,
  OtpSize,
  OtpShape 
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const OtpInputPlayground: React.FC = () => {
  const [code, setCode] = useState('');
  const [completedCode, setCompletedCode] = useState('');
  const [variant, setVariant] = useState<OtpVariant>('outline');
  const [size, setSize] = useState<OtpSize>('md');
  const [length, setLength] = useState('6');
  const [shape, setShape] = useState<OtpShape>('rounded');

  const [mask, setMask] = useState(false);
  const [showSeparator, setShowSeparator] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [helperText, setHelperText] = useState('Enter the 6-digit code sent to your mobile phone.');

  const variantOptions = [
    { label: 'Outline (Default)', value: 'outline' },
    { label: 'Filled Surface', value: 'filled' },
    { label: 'Floating Card', value: 'floating' },
    { label: 'Glassmorphic Blur', value: 'glassmorphic' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Material Underline', value: 'material' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Bordered Strong', value: 'bordered' },
    { label: 'Success Emerald', value: 'success' },
    { label: 'Ghost Minimal', value: 'ghost' },
  ];

  const sizeOptions = [
    { label: 'Small (sm: 36px)', value: 'sm' },
    { label: 'Medium (md: 48px)', value: 'md' },
    { label: 'Large (lg: 56px)', value: 'lg' },
    { label: 'Extra Large (xl: 64px)', value: 'xl' },
  ];

  const lengthOptions = [
    { label: '4 Digits (e.g. Card PIN)', value: '4' },
    { label: '6 Digits (Standard 2FA)', value: '6' },
    { label: '8 Digits (Backup Code)', value: '8' },
  ];

  const shapeOptions = [
    { label: 'Rounded Box (Default)', value: 'rounded' },
    { label: 'Circular Ring', value: 'circle' },
    { label: 'Sharp Square', value: 'square' },
  ];

  const generateCodeSnippet = () => {
    let props = `length={${length}}\n  onChange={setCode}\n  onComplete={(val) => console.log('Completed:', val)}`;
    if (variant !== 'outline') props += `\n  variant="${variant}"`;
    if (size !== 'md') props += `\n  size="${size}"`;
    if (shape !== 'rounded') props += `\n  shape="${shape}"`;
    if (mask) props += `\n  mask`;
    if (showSeparator) props += `\n  separator="-"`;
    if (helperText) props += `\n  helperText="${helperText}"`;
    if (disabled) props += `\n  disabled`;

    return `<OtpInput\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive OtpInput Sandbox" code={generateCodeSnippet()}>
        <div className="flex flex-col items-center justify-center p-8 w-full min-h-[220px] bg-slate-50/50 rounded-2xl border border-slate-100 gap-4">
          <OtpInput
            key={`${length}-${variant}-${size}-${shape}`}
            length={Number(length)}
            variant={variant}
            size={size}
            shape={shape}
            mask={mask}
            separator={showSeparator ? '-' : undefined}
            onChange={setCode}
            onComplete={setCompletedCode}
            helperText={helperText}
            disabled={disabled}
            autoFocus
          />

          {completedCode && (
            <span className="text-xs font-bold text-emerald-600 animate-in fade-in duration-200">
              ✓ Verified Complete: {completedCode}
            </span>
          )}
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          OtpInput Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 4 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as OtpVariant)}
            />
            <Select
              label="Size Scale"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as OtpSize)}
            />
            <Select
              label="Digit Count"
              value={length}
              options={lengthOptions}
              onChange={(val) => {
                setLength(val as string);
                setCompletedCode('');
              }}
            />
            <Select
              label="Contour Shape"
              value={shape}
              options={shapeOptions}
              onChange={(val) => setShape(val as OtpShape)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="mask-flag"
              label="Mask PIN (•••)"
              checked={mask}
              onChange={(e) => setMask(e.target.checked)}
            />
            <Checkbox
              id="separator-flag"
              label="Midway Dash Separator (-)"
              checked={showSeparator}
              onChange={(e) => setShowSeparator(e.target.checked)}
            />
            <Checkbox
              id="dis-flag"
              label="Disabled"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Input */}
          <div className="grid grid-cols-1 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Helper Guidance Text"
              value={helperText}
              onChange={(e) => setHelperText(e.target.value)}
              placeholder="e.g. Enter the 6-digit code..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
