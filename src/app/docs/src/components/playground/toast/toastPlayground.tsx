'use client';

import React, { useState } from 'react';
import { Button, Select, TextInput, useToast, Toaster } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Bell } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { toastPlaygroundStyles as s } from './toastPlayground.styles';

const SelectField = ({ label, value, options, onChange }: any) => {
  const formattedOptions = Object.entries(options).map(([val, lbl]) => ({
    value: val,
    label: lbl as string,
  }));
  return (
    <Select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={formattedOptions}
      fullWidth
    />
  );
};

export const ToastPlayground = () => {
  const { toast } = useToast();
  const [state, setState] = useState({
    title: 'Success!',
    description: 'Your action was completed successfully.',
    variant: 'success',
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
    return `// In your Root Layout\n<Toaster position="${position}" />\n\n// In your Component\nconst { toast } = useToast();\n\ntoast({\n  title: "${title}",\n  description: "${description}",\n  variant: "${variant}",\n  duration: ${duration}\n});`;
  };

  return (
    <div className={s.container}>
      <Toaster position={state.position as any} /> {/* Ensure toaster is present to see the result */}
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{
                default: 'Default',
                success: 'Success',
                error: 'Error',
                warning: 'Warning',
                info: 'Info'
              }}
            />
            <SelectField
              label="Duration (ms)"
              value={state.duration.toString()}
              onChange={(v: string) => updateState('duration', parseInt(v))}
              options={{
                3000: '3000ms',
                5000: '5000ms',
                10000: '10000ms',
                0: 'Persistent (0)'
              }}
            />
            <SelectField
              label="Position"
              value={state.position}
              onChange={(v: string) => updateState('position', v)}
              options={{
                'top-left': 'Top Left',
                'top-right': 'Top Right',
                'top-center': 'Top Center',
                'bottom-left': 'Bottom Left',
                'bottom-right': 'Bottom Right',
                'bottom-center': 'Bottom Center'
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main pt-6">
            <TextInput label="Title" value={state.title} onChange={(e) => updateState('title', e.target.value)} fullWidth />
            <TextInput label="Description" value={state.description} onChange={(e) => updateState('description', e.target.value)} fullWidth />
          </div>

          <div className="flex justify-end mt-4">
            <Button
              variant="primary"
              onClick={showToast}
              startIcon={<Bell size={18} />}
            >
              Trigger Toast
            </Button>
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Example Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
              >
                Copy Snippet
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generateCode()) }} />
            </pre>
          </div>
          <p className="text-xs text-core-circle-text-muted mt-4 text-center italic">
            Click "Trigger Toast" to see the notification in the corner of your screen.
          </p>
        </div>
      </div>
    </div>
  );
};
