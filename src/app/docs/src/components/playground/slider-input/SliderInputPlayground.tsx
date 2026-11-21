'use client';

import React, { useState } from 'react';
import { SliderInput, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
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

export const SliderInputPlayground = () => {
  const [state, setState] = useState({
    variant: 'standard',
    size: 'md',
    label: 'Volume Control',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    disabled: false,
    fullWidth: true,
    error: '',
    helperText: 'Adjust the level'
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, label, defaultValue, min, max, step, showValue, disabled, fullWidth, error, helperText } = state;
    let props = `variant="${variant}" size="${size}" defaultValue={${defaultValue}}`;

    if (label) props += ` label="${label}"`;
    if (min !== 0) props += ` min={${min}}`;
    if (max !== 100) props += ` max={${max}}`;
    if (step !== 1) props += ` step={${step}}`;
    if (showValue) props += ` showValue`;
    if (disabled) props += ' disabled';
    if (fullWidth) props += ' fullWidth';
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;

    return `<SliderInput ${props} />`;
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
                standard: 'Standard', 
                primary: 'Primary', 
                secondary: 'Secondary',
                success: 'Success', 
                warning: 'Warning', 
                danger: 'Danger',
                info: 'Info Sky',
                gradient: 'Radiant Gradient',
                glassmorphic: 'Glassmorphic',
                glow: 'Neon Glow',
                floating: 'Floating Elevated',
                accent: 'Accent Ring',
                dark: 'Dark Mode'
              }} 
            />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <div className="flex gap-8 items-end pb-2 lg:col-span-2 justify-between">
              {['showValue', 'disabled', 'fullWidth'].map((key) => (
                <Checkbox
                  key={key}
                  label={key === 'showValue' ? 'Show Value' : key}
                  checked={(state as any)[key]}
                  onChange={(checked) => updateState(key, checked)}
                  labelClassName="whitespace-nowrap"
                />
              ))}
            </div>
          </div>

          <div className={s.dividerSection}>
            <TextInput
              type="number"
              label={`Min: ${state.min}`}
              value={state.min.toString()}
              onChange={(e) => updateState('min', Number(e.target.value))}
              fullWidth
            />
            <TextInput
              type="number"
              label={`Max: ${state.max}`}
              value={state.max.toString()}
              onChange={(e) => updateState('max', Number(e.target.value))}
              fullWidth
            />
            <TextInput
              type="number"
              label={`Step: ${state.step}`}
              value={state.step.toString()}
              onChange={(e) => updateState('step', Number(e.target.value))}
              fullWidth
            />
            <TextInput
              type="number"
              label={`Default Value: ${state.defaultValue}`}
              value={state.defaultValue.toString()}
              onChange={(e) => updateState('defaultValue', Number(e.target.value))}
              fullWidth
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <TextInput
              label="Label Text"
              placeholder="e.g. Volume"
              value={state.label}
              onChange={(e) => updateState('label', e.target.value)}
              fullWidth
            />
            <TextInput
              label="Error Message"
              placeholder="e.g. Invalid value"
              value={state.error}
              onChange={(e) => updateState('error', e.target.value)}
              fullWidth
            />
            <TextInput
              label="Helper Text"
              placeholder="e.g. Adjust the volume"
              value={state.helperText}
              onChange={(e) => updateState('helperText', e.target.value)}
              fullWidth
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full" : "w-[400px]"}>
              <SliderInput
                key={`${state.min}-${state.max}-${state.step}`} // Force re-render on range changes
                variant={state.variant as any}
                size={state.size as any}
                label={state.label}
                defaultValue={state.defaultValue}
                min={state.min}
                max={state.max}
                step={state.step}
                showValue={state.showValue}
                disabled={state.disabled}
                fullWidth={state.fullWidth}
                error={state.error}
                helperText={state.helperText}
              />
            </div>
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
