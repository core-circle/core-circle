'use client';

import React, { useState } from 'react';
import { Stat, TrendBadge, Select, TextInput, Button } from '@core-circle/ui';
import { StatVariant, StatSize } from '@core-circle/ui';
import { BadgeDollarSign, CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { statPlaygroundStyles as s } from './statPlayground.styles';

export const StatPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Monthly Recurring Revenue');
  const [value, setValue] = useState<string>('$142,850');
  const [description, setDescription] = useState<string>('+14.2% from prior billing cycle');
  const [trendValue, setTrendValue] = useState<string>('+14.2%');
  const [variant, setVariant] = useState<StatVariant>('card');
  const [size, setSize] = useState<StatSize>('md');

  const generatedCode = `<Stat
  label="${label}"
  value="${value}"
  description="${description}"
  trend={<TrendBadge value="${trendValue}" variant="pill" size="sm" />}
  icon={<BadgeDollarSign size={18} />}
  variant="${variant}"
  size="${size}"
/>`;

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
                onChange={(e) => setVariant(e.target.value as StatVariant)}
                options={[
                  { value: 'card', label: 'Card' },
                  { value: 'bordered', label: 'Bordered' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'glassmorphic', label: 'Glassmorphic' },
                  { value: 'gradient', label: 'Gradient' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'accent', label: 'Accent' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as StatSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />

              <TextInput
                label="Trend Delta"
                value={trendValue}
                onChange={(e) => setTrendValue(e.target.value)}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-sm">
              <Stat
                label={label}
                value={value}
                description={description}
                trend={<TrendBadge value={trendValue} variant="pill" size="sm" />}
                icon={<BadgeDollarSign size={18} />}
                variant={variant}
                size={size}
              />
            </div>
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
