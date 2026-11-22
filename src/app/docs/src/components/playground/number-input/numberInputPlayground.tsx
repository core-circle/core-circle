'use client';

import React, { useState } from 'react';
import { NumberInput, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { numberInputPlaygroundStyles as s } from './numberInputPlayground.styles';

export const NumberInputPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Item Price');
  const [prefix, setPrefix] = useState<string>('$');
  const [suffix, setSuffix] = useState<string>('');
  const [stepper, setStepper] = useState<'stacked' | 'split' | 'none'>('stacked');
  const [variant, setVariant] = useState<'outline' | 'filled' | 'material'>('outline');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [formatThousands, setFormatThousands] = useState<boolean>(true);
  const [precision, setPrecision] = useState<number>(2);
  const [step, setStep] = useState<number>(10);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100000);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<NumberInput
  label="${label}"${prefix ? `\n  prefix="${prefix}"` : ''}${suffix ? `\n  suffix="${suffix}"` : ''}
  stepper="${stepper}"
  variant="${variant}"
  size="${size}"
  defaultValue={250}
  step={${step}}
  min={${min}}
  max={${max}}
  precision={${precision}}${formatThousands ? '\n  formatThousands' : ''}
  fullWidth
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
              <Select
                label="Stepper Layout"
                value={stepper}
                onChange={(e) => setStepper(e.target.value as any)}
                options={[
                  { value: 'stacked', label: 'Stacked Buttons' },
                  { value: 'split', label: 'Split (- / +)' },
                  { value: 'none', label: 'None (Clean Input)' },
                ]}
                fullWidth
              />

              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'outline', label: 'Outline' },
                  { value: 'filled', label: 'Filled' },
                  { value: 'material', label: 'Material' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />

              <TextInput
                label="Label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Prefix Symbol"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Suffix Symbol"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                fullWidth
              />

              <Select
                label="Decimal Precision"
                value={String(precision)}
                onChange={(e) => setPrecision(Number(e.target.value))}
                options={[
                  { value: '0', label: '0 Decimals (Whole)' },
                  { value: '1', label: '1 Decimal (.0)' },
                  { value: '2', label: '2 Decimals (.00)' },
                  { value: '3', label: '3 Decimals (.000)' },
                ]}
                fullWidth
              />

              <div className="flex items-center pt-5">
                <Checkbox
                  label="Thousands Commas"
                  checked={formatThousands}
                  onChange={(checked) => setFormatThousands(checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-sm">
              <NumberInput
                key={`${stepper}-${variant}-${size}-${precision}-${formatThousands}`}
                label={label}
                prefix={prefix || undefined}
                suffix={suffix || undefined}
                stepper={stepper}
                variant={variant}
                size={size}
                defaultValue={250}
                step={step}
                min={min}
                max={max}
                precision={precision}
                formatThousands={formatThousands}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Syntax-Highlighted Code Footer */}
        <div className={s.codeSection}>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <CodeIcon size={14} /> React JSX Snippet
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="text-xs border-slate-700 hover:bg-slate-800 text-slate-300"
            >
              <CopyIcon size={14} className="mr-1.5" />
              {copied ? DOC_TEXT.COPIED : DOC_TEXT.COPY_CODE}
            </Button>
          </div>
          <pre
            className="text-xs text-slate-200 overflow-x-auto font-mono p-3 bg-slate-900 rounded-lg border border-slate-800"
            dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }}
          />
        </div>
      </div>
    </div>
  );
};
