'use client';

import React, { useState } from 'react';
import { Progress, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const ProgressPlayground = () => {
  const [state, setState] = useState({
    value: 65,
    variant: 'gradient',
    size: 'md',
    shape: 'pill',
    striped: false,
    showLabel: true,
    labelPosition: 'outside-end',
    indeterminate: false,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    let props = `value={${state.value}}`;
    if (state.variant !== 'primary') props += `\n  variant="${state.variant}"`;
    if (state.size !== 'md') props += `\n  size="${state.size}"`;
    if (state.shape !== 'pill') props += `\n  shape="${state.shape}"`;
    if (state.striped) props += `\n  striped`;
    if (state.showLabel) props += `\n  showLabel\n  labelPosition="${state.labelPosition}"`;
    if (state.indeterminate) props += `\n  indeterminate`;

    return `<Progress\n  ${props}\n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-core-circle-text-muted uppercase">Value ({state.value}%)</label>
              <input
                type="range"
                min="0"
                max="100"
                value={state.value}
                onChange={(e) => updateState('value', parseInt(e.target.value))}
                className="w-full h-1.5 bg-core-circle-bg-muted rounded-lg appearance-none cursor-pointer accent-core-circle-primary"
              />
            </div>
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'primary', label: 'Primary' },
                { value: 'secondary', label: 'Secondary' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'danger', label: 'Danger' },
                { value: 'info', label: 'Info' },
                { value: 'gradient', label: 'Gradient VIP' },
                { value: 'glassmorphic', label: 'Glassmorphic Glow' },
                { value: 'striped', label: 'Striped Pattern' },
                { value: 'glow', label: 'Neon Glow' },
                { value: 'floating', label: 'Floating Depth' },
                { value: 'ghost', label: 'Ghost Minimal' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'sm', label: 'Small (h-1.5)' },
                { value: 'md', label: 'Medium (h-2.5)' },
                { value: 'lg', label: 'Large (h-4)' },
              ]}
              fullWidth
            />
            <Select
              label="Shape"
              value={state.shape}
              onChange={(e) => updateState('shape', e.target.value)}
              options={[
                { value: 'pill', label: 'Pill (Full)' },
                { value: 'rounded', label: 'Rounded' },
                { value: 'square', label: 'Square (Flat)' },
              ]}
              fullWidth
            />
            <Select
              label="Label Position"
              value={state.labelPosition}
              onChange={(e) => updateState('labelPosition', e.target.value)}
              options={[
                { value: 'outside-end', label: 'Outside End' },
                { value: 'outside-top', label: 'Outside Top' },
                { value: 'inside', label: 'Inside (Best for lg)' },
              ]}
              fullWidth
              disabled={!state.showLabel}
            />
            <div className="flex flex-col gap-3 justify-center">
              <div className="flex items-center gap-6">
                <Checkbox
                  label="Show Label"
                  checked={state.showLabel}
                  onChange={(checked) => updateState('showLabel', checked)}
                />
                <Checkbox
                  label="Striped"
                  checked={state.striped}
                  onChange={(checked) => updateState('striped', checked)}
                />
                <Checkbox
                  label="Indeterminate"
                  checked={state.indeterminate}
                  onChange={(checked) => updateState('indeterminate', checked)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-md p-4">
              <Progress
                value={state.value}
                variant={state.variant as any}
                size={state.size as any}
                shape={state.shape as any}
                striped={state.striped}
                showLabel={state.showLabel}
                labelPosition={state.labelPosition as any}
                indeterminate={state.indeterminate}
              />
            </div>
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
