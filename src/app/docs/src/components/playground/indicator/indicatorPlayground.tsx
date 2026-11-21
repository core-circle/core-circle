'use client';

import React, { useState } from 'react';
import { 
  Indicator, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Card,
  IndicatorVariant,
  IndicatorSize,
  IndicatorPosition,
  IndicatorShape 
} from '@core-circle/ui';
import { Bell } from '@core-circle/icons';
import ComponentPreview from '../../component-preview';

export const IndicatorPlayground: React.FC = () => {
  const [variant, setVariant] = useState<IndicatorVariant>('destructive');
  const [size, setSize] = useState<IndicatorSize>('md');
  const [position, setPosition] = useState<IndicatorPosition>('top-right');
  const [shape, setShape] = useState<IndicatorShape>('circle');

  const [pulse, setPulse] = useState(true);
  const [standalone, setStandalone] = useState(false);
  const [show, setShow] = useState(true);
  const [useCounter, setUseCounter] = useState(true);

  const [count, setCount] = useState('12');
  const [max, setMax] = useState('99');
  const [content, setContent] = useState('NEW');

  const variantOptions = [
    { label: 'Destructive Red', value: 'destructive' },
    { label: 'Primary Brand', value: 'primary' },
    { label: 'Success Emerald', value: 'success' },
    { label: 'Warning Amber', value: 'warning' },
    { label: 'Info Blue', value: 'info' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Glassmorphic Dark', value: 'glassmorphic' },
    { label: 'Soft Tint', value: 'soft' },
    { label: 'Bordered Strong', value: 'bordered' },
    { label: 'Neutral Slate', value: 'neutral' },
  ];

  const sizeOptions = [
    { label: 'Micro Dot (xs: 8px)', value: 'xs' },
    { label: 'Small Dot (sm: 10px)', value: 'sm' },
    { label: 'Medium Badge (md: 20px)', value: 'md' },
    { label: 'Large Badge (lg: 24px)', value: 'lg' },
    { label: 'Extra Large (xl: 28px)', value: 'xl' },
  ];

  const positionOptions = [
    { label: 'Top Right (Default)', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Top Center', value: 'top-center' },
    { label: 'Bottom Center', value: 'bottom-center' },
  ];

  const shapeOptions = [
    { label: 'Circle (Default)', value: 'circle' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Square', value: 'square' },
    { label: 'Rounded Square', value: 'rounded' },
  ];

  const generateCodeSnippet = () => {
    let props = `variant="${variant}"\n  size="${size}"`;
    if (position !== 'top-right') props += `\n  position="${position}"`;
    if (shape !== 'circle') props += `\n  shape="${shape}"`;
    if (pulse) props += `\n  pulse`;
    if (standalone) props += `\n  standalone`;
    if (!show) props += `\n  show={false}`;

    if (useCounter && count) {
      props += `\n  count={${count}}\n  max={${max}}`;
    } else if (content) {
      props += `\n  content="${content}"`;
    }

    if (standalone) {
      return `<Indicator\n  ${props}\n/>`;
    }

    return `<Indicator\n  ${props}\n>\n  <Button variant="outline" size="lg" startIcon={<Bell size={18} />}>\n    Notifications\n  </Button>\n</Indicator>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive Indicator Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-12 w-full min-h-[220px] bg-slate-50/50 rounded-2xl border border-slate-100">
          {standalone ? (
            <div className="flex items-center gap-3">
              <Indicator
                variant={variant}
                size={size}
                shape={shape}
                pulse={pulse}
                standalone
                count={useCounter ? Number(count) : undefined}
                content={!useCounter ? content : undefined}
                max={Number(max)}
                show={show}
              />
              <span className="text-sm font-bold text-slate-800">Live Standalone Indicator</span>
            </div>
          ) : (
            <Indicator
              variant={variant}
              size={size}
              position={position}
              shape={shape}
              pulse={pulse}
              count={useCounter ? Number(count) : undefined}
              content={!useCounter ? content : undefined}
              max={Number(max)}
              show={show}
            >
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                <Bell size={24} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-900">Notifications Inbox</span>
              </div>
            </Indicator>
          )}
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          Indicator Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 4 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as IndicatorVariant)}
            />
            <Select
              label="Size Scale"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as IndicatorSize)}
            />
            <Select
              label="Anchor Position"
              value={position}
              options={positionOptions}
              onChange={(val) => setPosition(val as IndicatorPosition)}
            />
            <Select
              label="Contour Shape"
              value={shape}
              options={shapeOptions}
              onChange={(val) => setShape(val as IndicatorShape)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="pulse-anim"
              label="Radar Ping Pulse"
              checked={pulse}
              onChange={(e) => setPulse(e.target.checked)}
            />
            <Checkbox
              id="numeric-mode"
              label="Use Numeric Counter"
              checked={useCounter}
              onChange={(e) => setUseCounter(e.target.checked)}
            />
            <Checkbox
              id="standalone-mode"
              label="Standalone Mode"
              checked={standalone}
              onChange={(e) => setStandalone(e.target.checked)}
            />
            <Checkbox
              id="show-ind"
              label="Visible"
              checked={show}
              onChange={(e) => setShow(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            {useCounter ? (
              <>
                <TextInput
                  label="Counter Value"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  placeholder="e.g. 12"
                />
                <TextInput
                  label="Max Counter (Clips with +)"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                  placeholder="e.g. 99"
                />
              </>
            ) : (
              <TextInput
                label="Custom Badge Text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="e.g. NEW, LIVE, PRO"
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
