'use client';

import React, { useState } from 'react';
import { MultiSelect, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Filter, Map, SettingsIcon, UserIcon, Tag } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textInputPlaygroundStyles as s } from '../text-input/textInputPlayground.styles';

const ICONS = {
  none: null,
  filter: <Filter size={16} />,
  map: <Map size={16} />,
  settings: <SettingsIcon size={16} />,
  user: <UserIcon size={16} />,
  tag: <Tag size={16} />,
};

const ICON_LABELS: Record<string, string> = {
  none: 'None',
  filter: 'Filter',
  map: 'Map',
  settings: 'Settings',
  user: 'User',
  tag: 'Tag',
};

const OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'vite', label: 'Vite' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'typescript', label: 'TypeScript', disabled: true },
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
      fullWidth
    />
  );
};

export const MultiSelectPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    label: 'Label Text',
    error: '',
    helperText: 'Select multiple items',
    disabled: false,
    fullWidth: true,
    startIcon: 'none',
    prefix: '',
    placeholder: 'Select...',
    labelSize: 'xs',
    labelWeight: 'bold',
  });

  const [selected, setSelected] = useState(['react', 'nextjs']);

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, label, error, helperText, disabled, fullWidth, startIcon, prefix, placeholder, labelSize, labelWeight } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (labelSize !== 'xs') props += ` labelSize="${labelSize}"`;
    if (labelWeight !== 'bold') props += ` labelWeight="${labelWeight}"`;
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

    return `<MultiSelect \n  ${props} \n  value={['react', 'nextjs']} \n  options={[\n    { value: 'react', label: 'React' },\n    { value: 'nextjs', label: 'Next.js' }\n  ]} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField label="Variant" value={state.variant} onChange={(v: string) => updateState('variant', v)} options={{ outline: 'Outline', material: 'Material', 'material-animated': 'Material Animated', ghost: 'Ghost', standard: 'Standard' }} />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
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
            <TextInput label="Placeholder" value={state.placeholder} onChange={(e) => updateState('placeholder', e.target.value)} fullWidth />
            <TextInput label="Label" value={state.label} onChange={(e) => updateState('label', e.target.value)} fullWidth />
            <TextInput label="Prefix" value={state.prefix} onChange={(e) => updateState('prefix', e.target.value)} fullWidth />
            <TextInput label="Error" value={state.error} onChange={(e) => updateState('error', e.target.value)} placeholder="Error message..." fullWidth />
            <TextInput label="Helper Text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} fullWidth />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full" : "w-[300px]"}>
              <MultiSelect
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
                value={selected}
                onChange={setSelected}
                labelSize={state.labelSize as any}
                labelWeight={state.labelWeight as any}
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
              >
                <CopyIcon className="w-3.5 h-3.5" />
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
