'use client';

import React, { useState } from 'react';
import { PasswordInput, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { passwordInputPlaygroundStyles as s } from './passwordInputPlayground.styles';

export const PasswordInputPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Account Password');
  const [placeholder, setPlaceholder] = useState<string>('Enter secret password');
  const [value, setValue] = useState<string>('Passw0rd!2026');
  const [variant, setVariant] = useState<'outline' | 'filled' | 'material'>('outline');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [showStrength, setShowStrength] = useState<boolean>(true);
  const [capsLockWarning, setCapsLockWarning] = useState<boolean>(true);
  const [showToggle, setShowToggle] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorText] = useState<string>('Password too predictable');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<PasswordInput
  label="${label}"
  placeholder="${placeholder}"
  variant="${variant}"
  size="${size}"${showStrength ? '\n  showStrength' : ''}${!capsLockWarning ? '\n  capsLockWarning={false}' : ''}${!showToggle ? '\n  showToggle={false}' : ''}${hasError ? `\n  error="${errorText}"` : ''}
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

              <TextInput
                label="Placeholder"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Show Strength Meter"
                checked={showStrength}
                onChange={(checked) => setShowStrength(checked)}
              />
              <Checkbox
                label="Caps Lock Warning"
                checked={capsLockWarning}
                onChange={(checked) => setCapsLockWarning(checked)}
              />
              <Checkbox
                label="Show Reveal Toggle"
                checked={showToggle}
                onChange={(checked) => setShowToggle(checked)}
              />
              <Checkbox
                label="Simulate Error"
                checked={hasError}
                onChange={(checked) => setHasError(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-sm">
              <PasswordInput
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant={variant}
                size={size}
                showStrength={showStrength}
                capsLockWarning={capsLockWarning}
                showToggle={showToggle}
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
