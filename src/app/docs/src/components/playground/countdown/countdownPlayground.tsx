'use client';

import React, { useState } from 'react';
import { Countdown, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { countdownPlaygroundStyles as s } from './countdownPlayground.styles';

export const CountdownPlayground: React.FC = () => {
  const [variant, setVariant] = useState<'boxes' | 'cards' | 'minimal'>('boxes');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [showDays, setShowDays] = useState<boolean>(true);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Future target timestamp: 3 days, 14 hours, 28 minutes from now
  const [targetDate] = useState<number>(() => Date.now() + 1000 * 60 * 60 * 86 + 1000 * 60 * 28);

  const generatedCode = `<Countdown
  targetDate={targetDate}
  variant="${variant}"
  size="${size}"${!showDays ? '\n  showDays={false}' : ''}${!showLabels ? '\n  showLabels={false}' : ''}
  onFinish={() => console.log('Countdown finished!')}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Toolbar */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Variant Style"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'boxes', label: 'Segmented Pill Boxes' },
                  { value: 'cards', label: 'Elevated Card Container' },
                  { value: 'minimal', label: 'Minimal Inline Numbers' },
                ]}
                fullWidth
              />

              <Select
                label="Size Scale"
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Show Days Segment"
                checked={showDays}
                onChange={(checked) => setShowDays(checked)}
              />
              <Checkbox
                label="Show Text Labels (Days, Hours, Mins)"
                checked={showLabels}
                onChange={(checked) => setShowLabels(checked)}
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex justify-center w-full py-4">
              <Countdown
                targetDate={targetDate}
                variant={variant}
                size={size}
                showDays={showDays}
                showLabels={showLabels}
              />
            </div>
          </div>

          {/* Syntax-Highlighted Dark Code Footer */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {copied ? 'Copied!' : DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
