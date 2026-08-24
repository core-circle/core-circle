'use client';

import React, { useState } from 'react';
import { Badge, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Sparkles } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const BadgePlayground = () => {
  const [state, setState] = useState({
    content: 'Live Status',
    variant: 'gradient',
    size: 'md',
    shape: 'pill',
    dot: false,
    removable: false,
    pulse: false,
    withIcon: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    let props = `variant="${state.variant}"\n  size="${state.size}"\n  shape="${state.shape}"`;
    if (state.dot) props += `\n  dot`;
    if (state.removable) props += `\n  removable\n  onRemove={() => console.log('Removed')}`;
    if (state.pulse) props += `\n  pulse`;
    if (state.withIcon && !state.dot) props += `\n  startIcon={<Sparkles size={12} />}`;

    return `<Badge \n  ${props} \n>\n  ${state.content}\n</Badge>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'primary', label: 'Primary (Solid Blue)' },
                  { value: 'secondary', label: 'Secondary (Solid Green)' },
                  { value: 'success', label: 'Success (Soft Emerald)' },
                  { value: 'warning', label: 'Warning (Soft Amber)' },
                  { value: 'destructive', label: 'Destructive (Soft Red)' },
                  { value: 'info', label: 'Info (Soft Blue)' },
                  { value: 'gradient', label: 'Gradient (Radiant Glow)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted)' },
                  { value: 'floating', label: 'Floating (Drop Shadow)' },
                  { value: 'dot', label: 'Dot (Live Status Ping)' },
                  { value: 'outline', label: 'Outline (Border)' },
                  { value: 'ghost', label: 'Ghost (Muted)' },
                ]}
                fullWidth
              />
              <Select
                label="Size"
                value={state.size}
                onChange={(e) => updateState('size', e.target.value)}
                options={[
                  { value: 'sm', label: 'Small' },
                  { value: 'md', label: 'Medium' },
                  { value: 'lg', label: 'Large' },
                ]}
                fullWidth
              />
              <Select
                label="Shape"
                value={state.shape}
                onChange={(e) => updateState('shape', e.target.value)}
                options={[
                  { value: 'pill', label: 'Pill Shape' },
                  { value: 'rounded', label: 'Rounded' },
                  { value: 'square', label: 'Square' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Checkboxes & Switches Horizontally */}
            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Status Dot"
                checked={state.dot}
                onChange={(checked) => updateState('dot', checked)}
              />
              <Checkbox
                label="Removable"
                checked={state.removable}
                onChange={(checked) => updateState('removable', checked)}
              />
              <Checkbox
                label="Pulse Animation"
                checked={state.pulse}
                onChange={(checked) => updateState('pulse', checked)}
              />
              <Checkbox
                label="With Icon"
                checked={state.withIcon}
                onChange={(checked) => updateState('withIcon', checked)}
              />
            </div>

            {/* 3. Text Inputs Horizontally */}
            <div className="border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Badge Content"
                value={state.content}
                onChange={(e) => updateState('content', e.target.value)}
                placeholder="Badge text..."
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Badge
              variant={state.variant as any}
              size={state.size as any}
              shape={state.shape as any}
              dot={state.dot}
              removable={state.removable}
              pulse={state.pulse}
              startIcon={state.withIcon && !state.dot ? <Sparkles size={12} /> : undefined}
              onRemove={state.removable ? () => alert('Removed') : undefined}
            >
              {state.content}
            </Badge>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
