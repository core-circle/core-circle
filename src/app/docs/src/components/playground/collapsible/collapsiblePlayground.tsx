'use client';

import React, { useState } from 'react';
import { Collapsible, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, ChevronDown, Sparkles } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { collapsiblePlaygroundStyles as s } from './collapsiblePlayground.styles';

export const CollapsiblePlayground: React.FC = () => {
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('card');
  const [defaultOpen, setDefaultOpen] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [unmountOnExit, setUnmountOnExit] = useState<boolean>(false);

  const generateCode = () => {
    return `<Collapsible
  variant="${variant}"
  defaultOpen={${defaultOpen}}
  disabled={${disabled}}
  unmountOnExit={${unmountOnExit}}
  className="w-full max-w-md"
>
  <Collapsible.Trigger className="flex items-center justify-between p-4 font-semibold">
    <span>System Telemetry Config</span>
    <ChevronDown size={16} />
  </Collapsible.Trigger>
  <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
    Active node replica heartbeats are transmitting every 1000ms. Error sampling threshold is pegged at 0.05%.
  </Collapsible.Content>
</Collapsible>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default (Transparent)' },
                  { value: 'card', label: 'Card (Elevated Surface)' },
                  { value: 'bordered', label: 'Bordered (High Contrast)' },
                ]}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Default Open"
                checked={defaultOpen}
                onCheckedChange={(checked) => setDefaultOpen(checked)}
              />
              <Checkbox
                label="Disabled"
                checked={disabled}
                onCheckedChange={(checked) => setDisabled(checked)}
              />
              <Checkbox
                label="Unmount Content on Exit"
                checked={unmountOnExit}
                onCheckedChange={(checked) => setUnmountOnExit(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-md">
              <Collapsible
                key={`${variant}-${defaultOpen}-${disabled}-${unmountOnExit}`}
                variant={variant}
                defaultOpen={defaultOpen}
                disabled={disabled}
                unmountOnExit={unmountOnExit}
              >
                <Collapsible.Trigger className="flex items-center justify-between p-4 font-semibold text-core-circle-text-main hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-core-circle-primary" />
                    <span>System Telemetry Config</span>
                  </div>
                  <ChevronDown size={16} />
                </Collapsible.Trigger>
                <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted bg-white">
                  Active node replica heartbeats are transmitting every 1000ms. Error sampling threshold is pegged at 0.05%.
                </Collapsible.Content>
              </Collapsible>
            </div>
          </div>

          {/* Integrated Code Footer */}
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
