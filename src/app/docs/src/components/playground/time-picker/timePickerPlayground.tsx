'use client';

import React, { useState } from 'react';
import { TimePicker, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const TimePickerPlayground = () => {
  const [time, setTime] = useState('09:30 AM');
  const [state, setState] = useState({
    variant: 'gradient',
    format: '12h' as '12h' | '24h',
    size: 'md' as 'sm' | 'md' | 'lg',
    showSeconds: false,
    disabled: false,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, format, size, showSeconds, disabled } = state;
    return `const [time, setTime] = useState('${time}');

<TimePicker
  label="Select Scheduled Time"
  value={time}
  onChange={(str) => setTime(str)}
  variant="${variant}"
  format="${format}"
  size="${size}"
  ${showSeconds ? 'showSeconds\n  ' : ''}${disabled ? 'disabled\n  ' : ''}/>`;
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
                { value: 'outline', label: 'Outline' },
                { value: 'material', label: 'Material' },
                { value: 'ghost', label: 'Ghost' },
                { value: 'standard', label: 'Standard' },
                { value: 'filled', label: 'Filled' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'glow', label: 'Cyber Neon Glow' },
                { value: 'accent', label: 'Primary Accent' },
                { value: 'dark', label: 'Dark Mode' },
              ]}
              fullWidth
            />
            <Select
              label="Format"
              value={state.format}
              onChange={(e) => updateState('format', e.target.value)}
              options={[
                { value: '12h', label: '12-Hour (AM/PM)' },
                { value: '24h', label: '24-Hour Military' },
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
              ]}
              fullWidth
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Checkbox
              label="Show Seconds"
              checked={state.showSeconds}
              onChange={(c) => updateState('showSeconds', c)}
            />
            <Checkbox
              label="Disabled"
              checked={state.disabled}
              onChange={(c) => updateState('disabled', c)}
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center min-h-[140px]">
            <TimePicker
              label="Scheduled Departure"
              variant={state.variant as any}
              format={state.format}
              size={state.size}
              showSeconds={state.showSeconds}
              disabled={state.disabled}
              onChange={(str) => setTime(str)}
            />
            <span className="text-xs text-core-circle-text-muted mt-4 font-mono">
              Selected Time Output: {time}
            </span>
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
