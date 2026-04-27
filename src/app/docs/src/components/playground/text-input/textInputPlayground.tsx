'use client';

import React, { useState } from 'react';
import { TextInput, Select, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon, UserIcon, Mail, Lock, SearchIcon, Phone } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textInputPlaygroundStyles as s } from './textInputPlayground.styles';

const ICONS = {
  none: null,
  user: <UserIcon size={16} />,
  mail: <Mail size={16} />,
  lock: <Lock size={16} />,
  search: <SearchIcon size={16} />,
  phone: <Phone size={16} />,
};

const ICON_LABELS: Record<string, string> = {
  none: 'None',
  user: 'User',
  mail: 'Email',
  lock: 'Lock',
  search: 'Search',
  phone: 'Phone',
};

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

export const TextInputPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    type: 'text',
    label: 'Label Text',
    placeholder: 'Enter something...',
    error: '',
    helperText: 'Helper message',
    disabled: false,
    fullWidth: true,
    startIcon: 'none',
    endIcon: 'none',
    prefix: '',
    suffix: '',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, type, label, placeholder, error, helperText, disabled, fullWidth, startIcon, endIcon } = state;
    let props = `variant="${variant}" size="${size}" type="${type}"`;
    if (label) props += ` label="${label}"`;
    if (placeholder) props += ` placeholder="${placeholder}"`;
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';
    if (fullWidth) props += ' fullWidth';

    const addIcon = (propName: string, iconKey: string) => {
      if (iconKey !== 'none') {
        const iconName = iconKey.charAt(0).toUpperCase() + iconKey.slice(1) + 'Icon';
        props += `\n  ${propName}={<${iconName} size={16} />}`;
      }
    };

    addIcon('startIcon', startIcon);
    addIcon('endIcon', endIcon);

    if (state.prefix) props += ` prefix="${state.prefix}"`;
    if (state.suffix) props += ` suffix="${state.suffix}"`;

    return `<TextInput ${props} />`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField label="Variant" value={state.variant} onChange={(v: string) => updateState('variant', v)} options={{ outline: 'Outline', material: 'Material', 'material-animated': 'Material Animated', ghost: 'Ghost', standard: 'Standard' }} />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <SelectField label="Type" value={state.type} options={{ text: 'Text', number: 'Number', password: 'Password', email: 'Email' }} onChange={(v: string) => updateState('type', v)} />
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
            <SelectField label="End Icon" value={state.endIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endIcon', v)} />
            <TextInput label="Prefix" value={state.prefix} onChange={(e) => updateState('prefix', e.target.value)} placeholder="e.g. Mr." />
            <TextInput label="Suffix" value={state.suffix} onChange={(e) => updateState('suffix', e.target.value)} placeholder="e.g. kgs" />
          </div>

          <div className={s.dividerSection}>
            <TextInput label="Label" value={state.label} onChange={(e) => updateState('label', e.target.value)} />
            <TextInput label="Placeholder" value={state.placeholder} onChange={(e) => updateState('placeholder', e.target.value)} />
            <TextInput label="Error" value={state.error} onChange={(e) => updateState('error', e.target.value)} placeholder="Error message..." />
            <TextInput label="Helper Text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full" : "w-[300px]"}>
              <TextInput
                variant={state.variant as any}
                size={state.size as any}
                type={state.type}
                label={state.label}
                placeholder={state.placeholder}
                error={state.error}
                helperText={state.helperText}
                disabled={state.disabled}
                fullWidth={state.fullWidth}
                startIcon={(ICONS as any)[state.startIcon]}
                endIcon={(ICONS as any)[state.endIcon]}
                prefix={state.prefix}
                suffix={state.suffix}
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
                Copy Snippet
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
