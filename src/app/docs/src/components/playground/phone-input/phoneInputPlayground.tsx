'use client';

import React, { useState } from 'react';
import { PhoneInput, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { phoneInputPlaygroundStyles as s } from './phoneInputPlayground.styles';

export const PhoneInputPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Mobile Phone');
  const [defaultCountry, setDefaultCountry] = useState<string>('US');
  const [variant, setVariant] = useState<'outline' | 'filled' | 'material'>('outline');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('Please enter a valid telephone number');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<PhoneInput
  label="${label}"
  defaultCountry="${defaultCountry}"
  variant="${variant}"
  size="${size}"${hasError ? `\n  error="${errorText}"` : ''}
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
                label="Country"
                value={defaultCountry}
                onChange={(e) => setDefaultCountry(e.target.value)}
                options={[
                  { value: 'US', label: '🇺🇸 United States (+1)' },
                  { value: 'GB', label: '🇬🇧 United Kingdom (+44)' },
                  { value: 'IN', label: '🇮🇳 India (+91)' },
                  { value: 'DE', label: '🇩🇪 Germany (+49)' },
                  { value: 'FR', label: '🇫🇷 France (+33)' },
                  { value: 'JP', label: '🇯🇵 Japan (+81)' },
                  { value: 'AU', label: '🇦🇺 Australia (+61)' },
                  { value: 'SG', label: '🇸🇬 Singapore (+65)' },
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

            <div className="flex items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Simulate Error"
                checked={hasError}
                onChange={(checked) => setHasError(checked)}
              />
              {hasError && (
                <div className="flex-1 max-w-sm">
                  <TextInput
                    label="Error Message"
                    value={errorText}
                    onChange={(e) => setErrorText(e.target.value)}
                    fullWidth
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-sm">
              <PhoneInput
                key={`${defaultCountry}-${variant}-${size}`}
                label={label}
                defaultCountry={defaultCountry}
                variant={variant}
                size={size}
                error={hasError ? errorText : undefined}
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
