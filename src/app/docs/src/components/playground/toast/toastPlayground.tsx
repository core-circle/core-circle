'use client';

import React, { useState } from 'react';
import { Button, Select, TextInput, useToast, Toaster, Toast } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Bell, Sparkles } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { toastPlaygroundStyles as s } from './toastPlayground.styles';

export const ToastPlayground = () => {
  const { toast } = useToast();
  const [state, setState] = useState({
    title: 'Deployment Successful',
    description: 'Your changes have been deployed to production edge nodes.',
    variant: 'gradient',
    duration: 5000,
    position: 'bottom-right',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const showToast = () => {
    toast({
      title: state.title,
      description: state.description,
      variant: state.variant as any,
      duration: state.duration,
    });
  };

  const generateCode = () => {
    const { title, description, variant, duration, position } = state;
    return `// In your App Root Layout\n<Toaster position="${position}" />\n\n// In your Action Handler\nconst { toast } = useToast();\n\ntoast({\n  title: "${title}",\n  description: "${description}",\n  variant: "${variant}",\n  duration: ${duration}\n});`;
  };

  return (
    <div className={s.container}>
      <Toaster position={state.position as any} />
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'default', label: 'Default (White Elevated)' },
                  { value: 'success', label: 'Success (Soft Emerald)' },
                  { value: 'warning', label: 'Warning (Soft Amber)' },
                  { value: 'destructive', label: 'Destructive (Soft Red)' },
                  { value: 'info', label: 'Info (Soft Blue)' },
                  { value: 'card', label: 'Card (Strong Border)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted Glass)' },
                  { value: 'gradient', label: 'Gradient (Radiant Glow)' },
                  { value: 'floating', label: 'Floating (High Elevation)' },
                  { value: 'pill', label: 'Pill (Curved Capsule)' },
                  { value: 'minimal', label: 'Minimal (Left Accent Line)' },
                  { value: 'glow', label: 'Neon Glow (Emerald Accent)' },
                  { value: 'accent', label: 'Accent Blue (Strong Focus)' },
                  { value: 'dark', label: 'Dark Mode (Slate High-Contrast)' },
                ]}
                fullWidth
              />
              <Select
                label="Duration (ms)"
                value={state.duration.toString()}
                onChange={(e) => updateState('duration', parseInt(e.target.value))}
                options={[
                  { value: '3000', label: '3000ms (3s)' },
                  { value: '5000', label: '5000ms (5s)' },
                  { value: '10000', label: '10000ms (10s)' },
                  { value: '0', label: 'Persistent (Manual Dismiss)' },
                ]}
                fullWidth
              />
              <Select
                label="Position"
                value={state.position}
                onChange={(e) => updateState('position', e.target.value)}
                options={[
                  { value: 'bottom-right', label: 'Bottom Right' },
                  { value: 'bottom-left', label: 'Bottom Left' },
                  { value: 'bottom-center', label: 'Bottom Center' },
                  { value: 'top-right', label: 'Top Right' },
                  { value: 'top-left', label: 'Top Left' },
                  { value: 'top-center', label: 'Top Center' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Text Inputs Horizontally */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput label="Title" value={state.title} onChange={(e) => updateState('title', e.target.value)} fullWidth />
              <TextInput label="Description" value={state.description} onChange={(e) => updateState('description', e.target.value)} fullWidth />
            </div>

            {/* 3. Action Buttons Row */}
            <div className="flex justify-end pt-1">
              <Button
                variant="primary"
                onClick={showToast}
                startIcon={<Bell size={18} />}
              >
                Trigger Live Toast
              </Button>
            </div>
          </div>
        </div>

        {/* Inline Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-6 bg-slate-50 rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-core-circle-text-muted uppercase tracking-wider mb-4">Static Appearance Preview</span>
            <Toast
              variant={state.variant as any}
              title={state.title}
              description={state.description}
              icon={<Sparkles size={18} className="text-core-circle-primary" />}
              action={<Button size="sm" variant="ghost">Undo</Button>}
              onClose={() => undefined}
            />
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
    </div>
  );
};
