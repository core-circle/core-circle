'use client';

import React, { useState } from 'react';
import { Checkbox, Select, TextInput, Button } from '@core-circle/ui';
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
      fullWidth
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
    labelSize: 'sm',
    labelWeight: 'medium',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, label, error, helperText, disabled, indeterminate, checked, labelSize, labelWeight } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (labelSize !== 'sm') props += ` labelSize="${labelSize}"`;
    if (labelWeight !== 'medium') props += ` labelWeight="${labelWeight}"`;
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
            <SelectField
              label="Label Size"
              value={state.labelSize}
              onChange={(v: string) => updateState('labelSize', v)}
              options={{ xs: 'Extra Small', sm: 'Small', base: 'Base', lg: 'Large', xl: 'Extra Large', '2xl': '2XL' }}
            />
            <SelectField
              label="Label Weight"
              value={state.labelWeight}
              onChange={(v: string) => updateState('labelWeight', v)}
              options={{ light: 'Light', normal: 'Normal', medium: 'Medium', semibold: 'Semibold', bold: 'Bold' }}
            />
            <div className="flex gap-4 items-end pb-2 ml-auto">
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
            <TextInput label="Label" value={state.label} onChange={(e) => updateState('label', e.target.value)} fullWidth />
            <TextInput label="Error" value={state.error} onChange={(e) => updateState('error', e.target.value)} placeholder="Error message..." fullWidth />
            <TextInput label="Helper Text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} fullWidth />
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
              labelSize={state.labelSize as any}
              labelWeight={state.labelWeight as any}
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
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generateCode()) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
