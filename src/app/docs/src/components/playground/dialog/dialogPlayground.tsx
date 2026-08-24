'use client';

import React, { useState } from 'react';
import { 
  Dialog, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Button, 
  Card,
  DialogVariant,
  DialogSize,
  DialogPosition 
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const DialogPlayground: React.FC = () => {
  const [variant, setVariant] = useState<DialogVariant>('card');
  const [size, setSize] = useState<DialogSize>('md');
  const [position, setPosition] = useState<DialogPosition>('center');

  const [title, setTitle] = useState('Account Security Settings');
  const [description, setDescription] = useState('Configure multi-factor authentication and session management.');

  const [showCloseButton, setShowCloseButton] = useState(true);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  const [closeOnEsc, setCloseOnEsc] = useState(true);

  const variantOptions = [
    { label: 'Card (Default)', value: 'card' },
    { label: 'Floating Depth', value: 'floating' },
    { label: 'Glassmorphic Blur', value: 'glassmorphic' },
    { label: 'Gradient Accent', value: 'gradient' },
    { label: 'Destructive Warning', value: 'destructive' },
    { label: 'Success Confirmation', value: 'success' },
    { label: 'Centered Hero', value: 'centered-hero' },
    { label: 'Drawer Sheet', value: 'drawer' },
    { label: 'Bordered Strong', value: 'bordered' },
    { label: 'Minimal Clean', value: 'minimal' },
  ];

  const sizeOptions = [
    { label: 'Small (sm: 384px)', value: 'sm' },
    { label: 'Medium (md: 448px)', value: 'md' },
    { label: 'Large (lg: 512px)', value: 'lg' },
    { label: 'Extra Large (xl: 672px)', value: 'xl' },
    { label: 'Full Screen', value: 'full' },
  ];

  const positionOptions = [
    { label: 'Center (Default)', value: 'center' },
    { label: 'Top Viewport', value: 'top' },
    { label: 'Bottom Sheet', value: 'bottom' },
  ];

  const generateCodeSnippet = () => {
    let props = `trigger={<Button variant="primary">Launch Dialog</Button>}\n  variant="${variant}"\n  size="${size}"\n  position="${position}"`;
    if (title) props += `\n  title="${title}"`;
    if (description) props += `\n  description="${description}"`;
    if (!showCloseButton) props += `\n  showCloseButton={false}`;
    if (!closeOnOverlayClick) props += `\n  closeOnOverlayClick={false}`;
    if (!closeOnEsc) props += `\n  closeOnEsc={false}`;

    return `<Dialog\n  ${props}\n  footer={\n    <div className="flex gap-2 justify-end">\n      <Button variant="ghost">Cancel</Button>\n      <Button variant="primary">Save Preferences</Button>\n    </div>\n  }\n>\n  <p className="text-sm text-slate-600">Your custom modal body content goes here.</p>\n</Dialog>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive Dialog Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-12 w-full min-h-[220px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <Dialog
            variant={variant}
            size={size}
            position={position}
            title={title}
            description={description}
            showCloseButton={showCloseButton}
            closeOnOverlayClick={closeOnOverlayClick}
            closeOnEsc={closeOnEsc}
            trigger={
              <Button variant="primary" size="lg">
                Open Dialog Modal
              </Button>
            }
            footer={
              <div className="flex gap-2 justify-end w-full">
                <Button variant="ghost">Cancel</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            }
          >
            <div className="flex flex-col gap-4 py-2">
              <Typography variant="p" className="text-sm text-slate-600">
                Manage your notification channels and security preferences. Changes take effect across all logged-in devices immediately.
              </Typography>
              <div className="grid gap-3">
                <TextInput label="Recovery Email" defaultValue="admin@corecircle.design" fullWidth />
              </div>
            </div>
          </Dialog>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          Dialog Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 3 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as DialogVariant)}
            />
            <Select
              label="Dialog Size"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as DialogSize)}
            />
            <Select
              label="Screen Position"
              value={position}
              options={positionOptions}
              onChange={(val) => setPosition(val as DialogPosition)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="show-close-btn"
              label="Show Close (X) Button"
              checked={showCloseButton}
              onChange={(e) => setShowCloseButton(e.target.checked)}
            />
            <Checkbox
              id="close-overlay"
              label="Dismiss on Overlay Click"
              checked={closeOnOverlayClick}
              onChange={(e) => setCloseOnOverlayClick(e.target.checked)}
            />
            <Checkbox
              id="close-esc"
              label="Close on Escape Key"
              checked={closeOnEsc}
              onChange={(e) => setCloseOnEsc(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Dialog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Account Security"
            />
            <TextInput
              label="Dialog Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Subtitle instructions..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
