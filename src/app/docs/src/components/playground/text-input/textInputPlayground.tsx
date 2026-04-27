'use client';

import React, { useState } from 'react';
import { TextInput } from '@core-circle/ui';
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

// Reusable Control Components
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
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{ outline: 'Outline', material: 'Material', 'material-animated': 'Material Animated', ghost: 'Ghost', standard: 'Standard' }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ sm: 'Small', md: 'Medium', lg: 'Large' }}
            />
          </div>

          <div className={s.dividerSection}>
            <div className={s.gridTwoCols}>
              <SelectField label="Type" value={state.type} options={{ text: 'Text', number: 'Number', password: 'Password', email: 'Email' }} onChange={(v: string) => updateState('type', v)} />
              <div className="flex gap-4 items-end pb-2">
                {['disabled', 'fullWidth'].map((key) => (
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
          </div>

          <div className={s.dividerSection}>
            <div className={s.gridTwoCols}>
              <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
              <SelectField label="End Icon" value={state.endIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endIcon', v)} />
            </div>
            <div className={s.gridTwoCols + " mt-4"}>
              <div>
                <ControlLabel>Prefix</ControlLabel>
                <input type="text" value={state.prefix} onChange={(e) => updateState('prefix', e.target.value)} className={s.textInput} placeholder="e.g. Mr." />
              </div>
              <div>
                <ControlLabel>Suffix</ControlLabel>
                <input type="text" value={state.suffix} onChange={(e) => updateState('suffix', e.target.value)} className={s.textInput} placeholder="e.g. kgs" />
              </div>
            </div>
          </div>

          <div className={s.dividerSection}>
             <div className="space-y-4">
                <div>
                  <ControlLabel>Label</ControlLabel>
                  <input type="text" value={state.label} onChange={(e) => updateState('label', e.target.value)} className={s.textInput} />
                </div>
                <div>
                  <ControlLabel>Placeholder</ControlLabel>
                  <input type="text" value={state.placeholder} onChange={(e) => updateState('placeholder', e.target.value)} className={s.textInput} />
                </div>
                <div className="grid grid-cols-2 gap-4">
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
