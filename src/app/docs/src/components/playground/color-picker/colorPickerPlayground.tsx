'use client';

import React, { useState } from 'react';
import {
  ColorPicker,
  Select,
  Checkbox,
  Button,
  TextInput,
} from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { colorPickerPlaygroundStyles as s } from './colorPickerPlayground.styles';

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

export const ColorPickerPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    value: '#3b82f6',
    label: 'Brand Color',
    showValue: true,
    error: '',
    helperText: 'Pick your primary brand color',
    disabled: false,
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const {
      variant,
      size,
      value,
      label,
      showValue,
      error,
      helperText,
      disabled,
    } = state;
    let props = `variant="${variant}" size="${size}" value="${value}"`;
    if (label) props += ` label="${label}"`;
    if (!showValue) props += ' showValue={false}';
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';

    return `<ColorPicker ${props} />`;
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
              }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ sm: 'Small', md: 'Medium', lg: 'Large' }}
            />
            <div className="flex gap-4 items-end pb-2">
              <Checkbox
                label="Show Value"
                checked={state.showValue}
                onChange={(checked: boolean) =>
                  updateState('showValue', checked)
                }
              />
              <Checkbox
                label="Disabled"
                checked={state.disabled}
                onChange={(checked: boolean) =>
                  updateState('disabled', checked)
                }
              />
            </div>
            <TextInput
              label="Initial Value"
              value={state.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateState('value', e.target.value)
              }
              placeholder="#000000"
              fullWidth
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-core-circle-border-main pt-6">
            <TextInput
              label="Label"
              value={state.label}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateState('label', e.target.value)
              }
              fullWidth
            />
            <TextInput
              label="Error Message"
              value={state.error}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateState('error', e.target.value)
              }
              placeholder="e.g. Invalid color"
              fullWidth
            />
            <TextInput
              label="Helper Text"
              value={state.helperText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateState('helperText', e.target.value)
              }
              fullWidth
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <ColorPicker
              variant={state.variant as any}
              size={state.size as any}
              value={state.value}
              label={state.label}
              showValue={state.showValue}
              error={state.error}
              helperText={state.helperText}
              disabled={state.disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateState('value', e.target.value)
              }
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
