'use client';

import React, { useState } from 'react';
import { Select, TextInput, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Filter, Map, SettingsIcon, UserIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textInputPlaygroundStyles as s } from '../text-input/textInputPlayground.styles';

const ICONS = {
  none: null,
  filter: <Filter size={16} />,
  map: <Map size={16} />,
  settings: <SettingsIcon size={16} />,
  user: <UserIcon size={16} />,
};

const ICON_LABELS: Record<string, string> = {
  none: 'None',
  filter: 'Filter',
  map: 'Map',
  settings: 'Settings',
  user: 'User',
};

const OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true },
];

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

export const SelectPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    label: 'Label Text',
    error: '',
    helperText: 'Helper message',
    disabled: false,
    fullWidth: true,
    startIcon: 'none',
    prefix: '',
    placeholder: 'Select...',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, label, error, helperText, disabled, fullWidth, startIcon, prefix, placeholder } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (label) props += ` label="${label}"`;
    if (placeholder) props += ` placeholder="${placeholder}"`;
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';
    if (fullWidth) props += ' fullWidth';
    if (prefix) props += ` prefix="${prefix}"`;

    if (startIcon !== 'none') {
        const iconName = startIcon === 'settings' ? 'SettingsIcon' : startIcon === 'user' ? 'UserIcon' : startIcon.charAt(0).toUpperCase() + startIcon.slice(1);
        props += `\n  startIcon={<${iconName} size={16} />}`;
    }

    return `<Select \n  ${props} \n  options={[\n    { value: '1', label: 'Option 1' },\n    { value: '2', label: 'Option 2' }\n  ]} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField label="Variant" value={state.variant} onChange={(v: string) => updateState('variant', v)} options={{ outline: 'Outline', material: 'Material', 'material-animated': 'Material Animated', ghost: 'Ghost', standard: 'Standard' }} />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
            <div className="flex gap-4 items-end pb-2">
              {['disabled', 'fullWidth'].map((key) => (
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
            <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
            <TextInput label="Placeholder" value={state.placeholder} onChange={(e) => updateState('placeholder', e.target.value)} placeholder="e.g. Choose..." />
            <TextInput label="Prefix" value={state.prefix} onChange={(e) => updateState('prefix', e.target.value)} placeholder="e.g. ID" />
            <TextInput label="Label" value={state.label} onChange={(e) => updateState('label', e.target.value)} />
          </div>

          <div className={s.dividerSection}>
            <TextInput label="Error" value={state.error} onChange={(e) => updateState('error', e.target.value)} placeholder="Error message..." />
            <TextInput label="Helper Text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full" : "w-[300px]"}>
              <Select
                variant={state.variant as any}
                size={state.size as any}
                label={state.label}
                error={state.error}
                helperText={state.helperText}
                disabled={state.disabled}
                fullWidth={state.fullWidth}
                startIcon={(ICONS as any)[state.startIcon]}
                prefix={state.prefix}
                placeholder={state.placeholder}
                options={OPTIONS}
              />
            </div>
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
