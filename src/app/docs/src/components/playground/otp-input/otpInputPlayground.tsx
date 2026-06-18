'use client';

import React, { useState } from 'react';
import { OTPInput, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { otpInputPlaygroundStyles as s } from './otpInputPlayground.styles';

const SelectField = ({ label, value, options, onChange }: any) => {
  const formattedOptions = Object.entries(options).map(([val, lbl]) => ({
    value: val,
    label: lbl as string,
  }));
  return (
    <Select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={formattedOptions}
      fullWidth
    />
  );
};

export const OTPInputPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    length: 4,
    error: '',
    helperText: 'Enter the code sent to your phone',
    disabled: false,
    mask: false,
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, length, error, helperText, disabled, mask } = state;
    let props = `variant="${variant}" size="${size}" length={${length}}`;
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';
    if (mask) props += ' mask';

    return `<OTPInput ${props} />`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{
                outline: 'Outline',
                material: 'Material',
                ghost: 'Ghost',
                standard: 'Standard',
              }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ sm: 'Small', md: 'Medium', lg: 'Large' }}
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase text-slate-400">
                Length
              </label>
              <input
                type="number"
                value={state.length}
                min={1}
                max={10}
                onChange={(e) =>
                  updateState('length', parseInt(e.target.value) || 1)
                }
                className="px-3 py-2 bg-white border border-core-circle-border-main rounded-core-circle-md text-core-circle-xs outline-none focus:border-core-circle-primary transition-all"
              />
            </div>
            <div className="flex gap-4 items-end pb-2">
              <Checkbox
                label="Disabled"
                checked={state.disabled}
                onChange={(checked) => updateState('disabled', checked)}
              />
              <Checkbox
                label="Mask (Password)"
                checked={state.mask}
                onChange={(checked) => updateState('mask', checked)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main pt-6">
            <TextInput
              label="Error Message"
              value={state.error}
              onChange={(e) => updateState('error', e.target.value)}
              placeholder="e.g. Invalid code"
              fullWidth
            />
            <TextInput
              label="Helper Text"
              value={state.helperText}
              onChange={(e) => updateState('helperText', e.target.value)}
              fullWidth
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <OTPInput
              variant={state.variant as any}
              size={state.size as any}
              length={state.length}
              error={state.error}
              helperText={state.helperText}
              disabled={state.disabled}
              mask={state.mask}
              onComplete={(val: string) => console.log('Completed:', val)}
            />
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
              >
                Copy Snippet
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightCode(generateCode()),
                }}
              />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
