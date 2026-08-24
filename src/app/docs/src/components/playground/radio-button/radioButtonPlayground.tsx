'use client';

import React, { useState } from 'react';
import { 
  RadioButton, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Badge, 
  Card,
  RadioVariant,
  RadioSize 
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const RadioButtonPlayground: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [variant, setVariant] = useState<RadioVariant>('card');
  const [size, setSize] = useState<RadioSize>('md');

  const [disabled, setDisabled] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const [showBadge, setShowBadge] = useState(true);

  const [label, setLabel] = useState('Enterprise Tier Subscription');
  const [description, setDescription] = useState('Dedicated Kubernetes clusters with 99.99% uptime SLA and 24/7 phone support.');

  const variantOptions = [
    { label: 'Card Container (Default)', value: 'card' },
    { label: 'Floating Card', value: 'floating' },
    { label: 'Glassmorphic Card', value: 'glassmorphic' },
    { label: 'Solid Surface', value: 'solid' },
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

  const generateCodeSnippet = () => {
    let props = `name="plan-selection"\n  value="enterprise"\n  checked={selected === 'enterprise'}\n  onChange={setSelected}`;
    if (variant !== 'outline') props += `\n  variant="${variant}"`;
    if (size !== 'md') props += `\n  size="${size}"`;
    if (label) props += `\n  label="${label}"`;
    if (showDescription && description) props += `\n  description="${description}"`;
    if (showBadge) props += `\n  badge={<Badge variant="primary" shape="pill" size="sm">POPULAR</Badge>}`;
    if (disabled) props += `\n  disabled`;

    return `<RadioButton\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive RadioButton Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-8 w-full min-h-[220px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <div className="w-full max-w-md flex flex-col gap-3">
            <RadioButton
              name="sample-radio-group"
              value="starter"
              checked={selectedPlan === 'starter'}
              onChange={setSelectedPlan}
              variant={variant}
              size={size}
              label="Starter Plan ($29/mo)"
              description={showDescription ? "Standard shared cloud compute resources." : undefined}
              disabled={disabled}
            />
            <RadioButton
              name="sample-radio-group"
              value="pro"
              checked={selectedPlan === 'pro'}
              onChange={setSelectedPlan}
              variant={variant}
              size={size}
              label={label}
              description={showDescription ? description : undefined}
              badge={showBadge ? <Badge variant="primary" shape="pill" size="sm">POPULAR</Badge> : undefined}
              disabled={disabled}
            />
          </div>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          RadioButton Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 2 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as RadioVariant)}
            />
            <Select
              label="Size Scale"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as RadioSize)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
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
              placeholder="e.g. Enterprise Tier Subscription"
            />
            <TextInput
              label="Subtitle Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Dedicated clusters..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
