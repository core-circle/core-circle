'use client';

import React, { useState } from 'react';
import { PulseDot, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { PulseDotStatus, PulseDotSize } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { pulseDotPlaygroundStyles as s } from './pulseDotPlayground.styles';

export const PulseDotPlayground: React.FC = () => {
  const [status, setStatus] = useState<PulseDotStatus>('online');
  const [size, setSize] = useState<PulseDotSize>('sm');
  const [ping, setPing] = useState<boolean>(true);
  const [label, setLabel] = useState<string>('All Systems Operational');
  const [labelPlacement, setLabelPlacement] = useState<'left' | 'right'>('right');

  const generatedCode = `<PulseDot
  status="${status}"
  size="${size}"
  ping={${ping}}
  label="${label}"
  labelPlacement="${labelPlacement}"
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value as PulseDotStatus)}
                options={[
                  { value: 'online', label: 'Online (Emerald)' },
                  { value: 'deploying', label: 'Deploying (Indigo)' },
                  { value: 'busy', label: 'Busy (Rose)' },
                  { value: 'away', label: 'Away (Amber)' },
                  { value: 'offline', label: 'Offline (Slate)' },
                  { value: 'neutral', label: 'Neutral (Gray)' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as PulseDotSize)}
                options={[
                  { value: 'xs', label: 'Extra Small (xs - 6px)' },
                  { value: 'sm', label: 'Small (sm - 8px)' },
                  { value: 'md', label: 'Medium (md - 10px)' },
                  { value: 'lg', label: 'Large (lg - 12px)' },
                ]}
                fullWidth
              />

              <Select
                label="Label Placement"
                value={labelPlacement}
                onChange={(e) => setLabelPlacement(e.target.value as 'left' | 'right')}
                options={[
                  { value: 'right', label: 'Right' },
                  { value: 'left', label: 'Left' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-core-circle-border-main/60 pt-4 items-end">
              <div className="sm:col-span-2">
                <TextInput
                  label="Label Text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  fullWidth
                />
              </div>

              <div className="py-2">
                <Checkbox
                  label="Radar Ping Animation"
                  checked={ping}
                  onChange={(e) => setPing(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <PulseDot
              status={status}
              size={size}
              ping={ping}
              label={label}
              labelPlacement={labelPlacement}
            />
          </div>

          {/* Live Code Output */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
