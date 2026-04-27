'use client';

import React, { useState } from 'react';
import { Checkbox, Select, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textInputPlaygroundStyles as s } from '../text-input/textInputPlayground.styles';

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
    />
  );
};

export const CheckboxPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    label: 'Subscribe to our newsletter',
    error: '',
    helperText: 'We will only send you important updates.',
    disabled: false,
    indeterminate: false,
    checked: false,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, label, error, helperText, disabled, indeterminate, checked } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (label) props += ` label="${label}"`;
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';
    if (indeterminate) props += ' indeterminate';
    if (checked) props += ' checked';

    return `<Checkbox ${props} />`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField label="Variant" value={state.variant} onChange={(v: string) => updateState('variant', v)} options={{ outline: 'Outline', solid: 'Solid' }} />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <div className="flex gap-4 items-end pb-2">
              {['disabled', 'indeterminate', 'checked'].map((key) => (
                <Checkbox
                  key={key}
                  label={key}
                  checked={(state as any)[key]}
                  onChange={(checked) => updateState(key, checked)}
                />
              ))}
            </div>
          </div>

          <div className={s.dividerSection}>
            <TextInput label="Label" value={state.label} onChange={(e) => updateState('label', e.target.value)} />
            <TextInput label="Error" value={state.error} onChange={(e) => updateState('error', e.target.value)} placeholder="Error message..." />
            <TextInput label="Helper Text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Checkbox
              variant={state.variant as any}
              size={state.size as any}
              label={state.label}
              error={state.error}
              helperText={state.helperText}
              disabled={state.disabled}
              indeterminate={state.indeterminate}
              checked={state.checked}
              onChange={(checked) => updateState('checked', checked)}
            />
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
              >
                <CopyIcon className="w-3.5 h-3.5" />
                Copy
              </button>
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
