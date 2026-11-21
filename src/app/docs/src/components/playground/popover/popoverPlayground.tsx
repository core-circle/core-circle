'use client';

import React, { useState } from 'react';
import { 
  Popover, 
  Select, 
  Checkbox, 
  TextInput, 
  Button, 
  Typography, 
  Card,
  PopoverVariant,
  PopoverSize,
  PopoverPosition,
  PopoverAlign 
} from '@core-circle/ui';
import { Info, Sparkles } from '@core-circle/icons';
import ComponentPreview from '../../component-preview';

export const PopoverPlayground: React.FC = () => {
  const [variant, setVariant] = useState<PopoverVariant>('card');
  const [size, setSize] = useState<PopoverSize>('md');
  const [position, setPosition] = useState<PopoverPosition>('bottom');
  const [align, setAlign] = useState<PopoverAlign>('center');

  const [showClose, setShowClose] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  const [title, setTitle] = useState('Account Security Settings');
  const [description, setDescription] = useState('Manage 2FA authentication methods and active sessions.');

  const variantOptions = [
    { label: 'Card (Default Light)', value: 'card' },
    { label: 'Floating Depth', value: 'floating' },
    { label: 'Glassmorphic Frosted', value: 'glassmorphic' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Bordered Strong', value: 'bordered' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Primary Brand', value: 'primary' },
    { label: 'Success Emerald', value: 'success' },
    { label: 'Warning Amber', value: 'warning' },
    { label: 'Compact Menu', value: 'compact' },
  ];

  const sizeOptions = [
    { label: 'Small (w-60: 240px)', value: 'sm' },
    { label: 'Medium (w-72: 288px)', value: 'md' },
    { label: 'Large (w-88: 352px)', value: 'lg' },
    { label: 'Extra Large (w-96: 384px)', value: 'xl' },
    { label: 'Auto Width', value: 'auto' },
  ];

  const positionOptions = [
    { label: 'Bottom (Default)', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  const alignOptions = [
    { label: 'Center (Default)', value: 'center' },
    { label: 'Start (Left / Top)', value: 'start' },
    { label: 'End (Right / Bottom)', value: 'end' },
  ];

  const generateCodeSnippet = () => {
    let props = `trigger={\n    <Button variant="outline" size="md">\n      Open Popover\n    </Button>\n  }`;
    if (variant !== 'card') props += `\n  variant="${variant}"`;
    if (size !== 'md') props += `\n  size="${size}"`;
    if (position !== 'bottom') props += `\n  position="${position}"`;
    if (align !== 'center') props += `\n  align="${align}"`;
    if (title) props += `\n  title="${title}"`;
    if (showDescription && description) props += `\n  description="${description}"`;
    if (showClose) props += `\n  showClose`;
    if (showArrow) props += `\n  showArrow`;

    return `<Popover\n  ${props}\n>\n  <div className="flex flex-col gap-2 pt-1">\n    <p className="text-xs text-slate-600">Your session is secured with TLS 1.3 encryption.</p>\n    <Button variant="primary" size="sm" fullWidth>Review Activity</Button>\n  </div>\n</Popover>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive Popover Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-16 w-full min-h-[300px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <Popover
            trigger={
              <Button variant="primary" size="md" startIcon={<Sparkles size={16} />}>
                Click to Open Popover
              </Button>
            }
            variant={variant}
            size={size}
            position={position}
            align={align}
            title={title}
            description={showDescription ? description : undefined}
            icon={<Info size={16} />}
            showClose={showClose}
            showArrow={showArrow}
          >
            <div className="flex flex-col gap-3 pt-1">
              <p className="text-xs text-slate-600 leading-relaxed">
                Your session is currently authenticated. Multi-factor verification is enabled on all production instances.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Button variant="primary" size="sm" fullWidth>
                  Save Changes
                </Button>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          </Popover>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          Popover Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 4 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as PopoverVariant)}
            />
            <Select
              label="Size / Width"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as PopoverSize)}
            />
            <Select
              label="Position"
              value={position}
              options={positionOptions}
              onChange={(val) => setPosition(val as PopoverPosition)}
            />
            <Select
              label="Alignment"
              value={align}
              options={alignOptions}
              onChange={(val) => setAlign(val as PopoverAlign)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="close-btn-flag"
              label="Show Close (X) Button"
              checked={showClose}
              onChange={(e) => setShowClose(e.target.checked)}
            />
            <Checkbox
              id="arrow-flag"
              label="Show Arrow Pointer"
              checked={showArrow}
              onChange={(e) => setShowArrow(e.target.checked)}
            />
            <Checkbox
              id="desc-flag"
              label="Show Subtitle Description"
              checked={showDescription}
              onChange={(e) => setShowDescription(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Header Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Account Security Settings"
            />
            <TextInput
              label="Subtitle Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Manage 2FA authentication..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
