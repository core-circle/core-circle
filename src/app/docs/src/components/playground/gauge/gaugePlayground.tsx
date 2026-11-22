'use client';

import React, { useState } from 'react';
import { Gauge, Select, TextInput, SliderInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { gaugePlaygroundStyles as s } from './gaugePlayground.styles';

export const GaugePlayground: React.FC = () => {
  const [value, setValue] = useState<number>(72);
  const [label, setLabel] = useState<string>('CPU LOAD');
  const [unit, setUnit] = useState<string>('%');
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('card');
  const [size, setSize] = useState<number>(180);
  const strokeWidth = 14;
  const [helperText, setHelperText] = useState<string>('Real-time server telemetry');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<Gauge
  value={${value}}
  label="${label}"
  unit="${unit}"
  size={${size}}
  strokeWidth={${strokeWidth}}
  variant="${variant}"${helperText ? `\n  helperText="${helperText}"` : ''}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <TextInput
                label="Label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Unit Suffix"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'card', label: 'Elevated Card Surface' },
                  { value: 'bordered', label: 'High-Contrast Bordered' },
                  { value: 'default', label: 'Default Transparent' },
                ]}
                fullWidth
              />

              <Select
                label="Diameter Size"
                value={String(size)}
                onChange={(e) => setSize(Number(e.target.value))}
                options={[
                  { value: '140', label: 'Compact (140px)' },
                  { value: '180', label: 'Standard (180px)' },
                  { value: '220', label: 'Large (220px)' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-700">Gauge Value: {value}</span>
                <SliderInput
                  min={0}
                  max={100}
                  step={1}
                  value={value}
                  onChange={(val) => setValue(Array.isArray(val) ? val[0] : val)}
                />
              </div>

              <TextInput
                label="Helper Subtitle"
                value={helperText}
                onChange={(e) => setHelperText(e.target.value)}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex justify-center w-full">
              <Gauge
                value={value}
                label={label}
                unit={unit}
                size={size}
                strokeWidth={strokeWidth}
                variant={variant}
                helperText={helperText}
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
