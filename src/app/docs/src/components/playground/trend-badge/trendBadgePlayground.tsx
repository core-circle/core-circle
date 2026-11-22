'use client';

import React, { useState } from 'react';
import { TrendBadge, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import {
  TrendBadgeVariant,
  TrendDirection,
  TrendBadgeSize,
} from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { trendBadgePlaygroundStyles as s } from './trendBadgePlayground.styles';

export const TrendBadgePlayground: React.FC = () => {
  const [value, setValue] = useState<string>('+24.6%');
  const [trend, setTrend] = useState<TrendDirection>('up');
  const [variant, setVariant] = useState<TrendBadgeVariant>('soft');
  const [size, setSize] = useState<TrendBadgeSize>('md');
  const [invertColors, setInvertColors] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(true);

  const generatedCode = `<TrendBadge
  value="${value}"
  trend="${trend}"
  variant="${variant}"
  size="${size}"
  showIcon={${showIcon}}
  invertColors={${invertColors}}
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Trend Direction"
                value={trend}
                onChange={(e) => setTrend(e.target.value as TrendDirection)}
                options={[
                  { value: 'up', label: 'Up (Growth)' },
                  { value: 'down', label: 'Down (Drop)' },
                  { value: 'neutral', label: 'Neutral (Flat)' },
                ]}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as TrendBadgeVariant)}
                options={[
                  { value: 'soft', label: 'Soft' },
                  { value: 'pill', label: 'Pill' },
                  { value: 'filled', label: 'Filled' },
                  { value: 'outline', label: 'Outline' },
                  { value: 'badge', label: 'Badge' },
                  { value: 'minimal', label: 'Minimal' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as TrendBadgeSize)}
                options={[
                  { value: 'xs', label: 'Extra Small (xs)' },
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />

              <TextInput
                label="Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 py-1 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Show Icon"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
              <Checkbox
                label="Invert Colors (Costs / Latency)"
                checked={invertColors}
                onChange={(e) => setInvertColors(e.target.checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <TrendBadge
              value={value}
              trend={trend}
              variant={variant}
              size={size}
              showIcon={showIcon}
              invertColors={invertColors}
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
