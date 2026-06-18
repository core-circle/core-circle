'use client';

import React, { useState } from 'react';
import { Counter, Select, Button, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const CounterPlayground = () => {
  const [state, setState] = useState({
    variant: 'primary',
    size: 'sm',
    count: 12,
    max: 99,
    showZero: false,
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, count, max, showZero } = state;
    return `<Counter \n  variant="${variant}" \n  size="${size}" \n  count={${count}} \n  max={${max}}\n  ${showZero ? 'showZero' : ''}\n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'primary', label: 'Primary' },
                { value: 'neutral', label: 'Neutral' },
                { value: 'outline', label: 'Outline' },
                { value: 'ghost', label: 'Ghost' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'xs', label: 'Extra Small' },
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
              ]}
              fullWidth
            />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Count</label>
              <input 
                type="number" 
                value={state.count}
                onChange={(e) => updateState('count', parseInt(e.target.value) || 0)}
                className="h-10 px-3 border border-core-circle-border-main rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Max Value</label>
              <input 
                type="number" 
                value={state.max}
                onChange={(e) => updateState('max', parseInt(e.target.value) || 0)}
                className="h-10 px-3 border border-core-circle-border-main rounded-lg"
              />
            </div>
            <Checkbox
              label="Show Zero"
              checked={state.showZero}
              onChange={(checked) => updateState('showZero', checked)}
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex flex-col gap-8 items-center">
              <div className="flex items-center gap-4">
                <span className="text-sm text-core-circle-text-muted">Standalone:</span>
                <Counter
                  variant={state.variant as any}
                  size={state.size as any}
                  count={state.count}
                  max={state.max}
                  showZero={state.showZero}
                />
              </div>
              
              <div className="flex items-center gap-4">
                 <span className="text-sm text-core-circle-text-muted">In Button:</span>
                 <Button variant="outline" size="sm" endIcon={
                   <Counter
                     variant={state.variant as any}
                     size="xs"
                     count={state.count}
                     max={state.max}
                     showZero={state.showZero}
                   />
                 }>
                   Notifications
                 </Button>
              </div>
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
                className="text-xs text-core-circle-text-muted hover:text-core-circle-primary transition-colors h-7"
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
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
