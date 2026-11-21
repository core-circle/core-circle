'use client';

import React, { useState } from 'react';
import { Drawer, Button, Select, TextInput, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Layers } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const DrawerPlayground = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    variant: 'default',
    position: 'right',
    size: 'md',
    title: 'Cluster Node Inspector',
    description: 'Inspect CPU, memory, and ingress routing metrics.',
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEsc: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, position, size, title, description } = state;
    return `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  variant="${variant}"
  position="${position}"
  size="${size}"
  title="${title}"
  description="${description}"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={() => setIsOpen(false)}>Apply</Button>
    </div>
  }
>
  <div className="space-y-4">
    <p>Drawer child content goes here.</p>
  </div>
</Drawer>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'default', label: 'Default' },
                { value: 'subtle', label: 'Subtle Slate' },
                { value: 'bordered', label: 'Bordered' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'gradient', label: 'Gradient' },
                { value: 'glow', label: 'Neon Glow' },
                { value: 'dark', label: 'Dark Mode' },
                { value: 'sidebar', label: 'Sidebar Theme' },
                { value: 'accent', label: 'Accent Header' },
                { value: 'minimal', label: 'Minimal' },
              ]}
              fullWidth
            />
            <Select
              label="Position"
              value={state.position}
              onChange={(e) => updateState('position', e.target.value)}
              options={[
                { value: 'right', label: 'Right (Default)' },
                { value: 'left', label: 'Left (Sidebar)' },
                { value: 'top', label: 'Top' },
                { value: 'bottom', label: 'Bottom (Sheet)' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'sm', label: 'Small (sm)' },
                { value: 'md', label: 'Medium (md)' },
                { value: 'lg', label: 'Large (lg)' },
                { value: 'xl', label: 'Extra Large (xl)' },
                { value: 'full', label: 'Full Viewport' },
              ]}
              fullWidth
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <TextInput
              label="Title"
              value={state.title}
              onChange={(e) => updateState('title', e.target.value)}
              fullWidth
            />
            <TextInput
              label="Description"
              value={state.description}
              onChange={(e) => updateState('description', e.target.value)}
              fullWidth
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Checkbox
              label="Show Close Button"
              checked={state.showCloseButton}
              onChange={(c) => updateState('showCloseButton', c)}
            />
            <Checkbox
              label="Close on Overlay Click"
              checked={state.closeOnOverlayClick}
              onChange={(c) => updateState('closeOnOverlayClick', c)}
            />
            <Checkbox
              label="Close on ESC"
              checked={state.closeOnEsc}
              onChange={(c) => updateState('closeOnEsc', c)}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              variant="primary"
              onClick={() => setIsOpen(true)}
              startIcon={<Layers size={16} />}
            >
              Trigger Live Drawer
            </Button>
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center min-h-[140px]">
            <Button variant="gradient" onClick={() => setIsOpen(true)}>
              Open {state.position.toUpperCase()} Drawer ({state.variant})
            </Button>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                Copy Snippet
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generateCode()) }} />
            </pre>
          </div>
        </div>
      </div>

      {/* Rendered Live Drawer */}
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        variant={state.variant as any}
        position={state.position as any}
        size={state.size as any}
        title={state.title}
        description={state.description}
        showCloseButton={state.showCloseButton}
        closeOnOverlayClick={state.closeOnOverlayClick}
        closeOnEsc={state.closeOnEsc}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save Changes</Button>
          </div>
        }
      >
        <div className="space-y-4 text-sm">
          <div className="p-4 bg-slate-100 rounded-xl">
            <p className="font-semibold text-slate-900 dark:text-white">Active Session Details</p>
            <p className="text-xs text-slate-500 mt-1">Live updates streamed via WebSocket v2</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            Drawers are flexible, full-height or full-width sliding panels perfect for in-depth workflows that don&apos;t require page navigation.
          </p>
        </div>
      </Drawer>
    </div>
  );
};
