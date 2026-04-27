'use client';

import React, { useState } from 'react';
import { RadioButton } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textInputPlaygroundStyles as s } from '../text-input/textInputPlayground.styles';

const ControlLabel = ({ children }: { children: React.ReactNode }) => (
  <label className={s.controlLabel}>
    {children}
  </label>
);

const SelectField = ({ label, value, options, onChange }: any) => (
  <div>
    <ControlLabel>{label}</ControlLabel>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={s.selectField}
    >
      {Object.entries(options).map(([val, label]) => (
        <option key={val} value={val}>{label as string}</option>
      ))}
    </select>
  </div>
);

export const RadioButtonPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    label: 'Standard Radio Option',
    error: '',
    helperText: 'Please select one option.',
    disabled: false,
    checked: false,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, label, error, helperText, disabled, checked } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (label) props += ` label="${label}"`;
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';
    if (checked) props += ' checked';

    return `<RadioButton ${props} />`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField label="Variant" value={state.variant} onChange={(v: string) => updateState('variant', v)} options={{ outline: 'Outline', solid: 'Solid' }} />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <div className="flex gap-4 items-end pb-2">
              {['disabled', 'checked'].map((key) => (
                <label key={key} className={s.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={(state as any)[key]}
                    onChange={(e) => updateState(key, e.target.checked)}
                    className={s.checkboxInput}
                  />
                  <span className={s.checkboxText}>{key}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={s.dividerSection}>
            <div>
              <ControlLabel>Label</ControlLabel>
              <input type="text" value={state.label} onChange={(e) => updateState('label', e.target.value)} className={s.textInput} />
            </div>
            <div>
              <ControlLabel>Error</ControlLabel>
              <input type="text" value={state.error} onChange={(e) => updateState('error', e.target.value)} className={s.textInput} placeholder="Error message..." />
            </div>
            <div>
              <ControlLabel>Helper Text</ControlLabel>
              <input type="text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} className={s.textInput} />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <RadioButton
              variant={state.variant as any}
              size={state.size as any}
              label={state.label}
              error={state.error}
              helperText={state.helperText}
              disabled={state.disabled}
              checked={state.checked}
              onChange={() => updateState('checked', !state.checked)}
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
