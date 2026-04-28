'use client';

import React, { useState } from 'react';
import { Label, Select, Checkbox, TextInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { labelPlaygroundStyles as s } from './labelPlayground.styles';

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

export const LabelPlayground = () => {
  const [state, setState] = useState({
    variant: 'default',
    size: 'md',
    weight: 'normal',
    uppercase: false,
    text: 'Label Content',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, weight, uppercase, text } = state;
    let props = ``;
    if (variant !== 'default') props += `variant="${variant}" `;
    if (size !== 'md') props += `size="${size}" `;
    if (weight !== 'normal') props += `weight="${weight}" `;
    if (uppercase) props += `uppercase `;

    return `<Label ${props.trim()}>\n  ${text}\n</Label>`;
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
              options={{ default: 'Default', muted: 'Muted', primary: 'Primary', warning: 'Warning', error: 'Error' }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ xs: 'XS', sm: 'SM', md: 'MD', lg: 'LG', xl: 'XL', '2xl': '2XL' }}
            />
            <SelectField
              label="Weight"
              value={state.weight}
              onChange={(v: string) => updateState('weight', v)}
              options={{ light: 'Light', normal: 'Normal', medium: 'Medium', semibold: 'Semibold', bold: 'Bold' }}
            />
            <TextInput
              label="Label Text"
              value={state.text}
              onChange={(e) => updateState('text', e.target.value)}
              placeholder="Enter text..."
              fullWidth
            />
            <div className="flex items-center gap-6 pb-2 lg:col-span-2">
              <Checkbox
                label="Uppercase"
                checked={state.uppercase}
                onChange={(checked) => updateState('uppercase', checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Label
              variant={state.variant as any}
              size={state.size as any}
              weight={state.weight as any}
              uppercase={state.uppercase}
            >
              {state.text}
            </Label>
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
