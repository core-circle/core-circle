'use client';

import React, { useState } from 'react';
import { Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Mail, ArrowRight, Star, SettingsIcon, Rotate, Clock } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from './buttonPlayground.styles';

const ICONS = {
  none: null,
  email: <Mail size={16} />,
  arrow: <ArrowRight size={16} />,
  star: <Star size={16} />,
  settings: <SettingsIcon size={16} />,
  refresh: <Rotate size={16} />,
  clock: <Clock size={16} />,
};

const ICON_LABELS: Record<string, string> = {
  none: 'None',
  email: 'Email',
  arrow: 'Arrow',
  star: 'Star',
  settings: 'Settings',
  refresh: 'Refresh',
  clock: 'Clock',
};

const ICON_MAP: Record<string, string> = {
  email: 'Mail',
  arrow: 'ArrowRight',
  star: 'Star',
  settings: 'SettingsIcon',
  refresh: 'Rotate',
  clock: 'Clock',
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

export const ButtonPlayground = () => {
  const [state, setState] = useState({
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    text: 'Button Label',
    startIcon: 'none',
    endIcon: 'none',
    startLoadingIcon: 'none',
    endLoadingIcon: 'none',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, loading, disabled, text, startIcon, endIcon, startLoadingIcon, endLoadingIcon } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (loading) props += ' loading';
    if (disabled) props += ' disabled';

    const addIcon = (name: string, val: string) => {
      if (val !== 'none') props += `\n  ${name}={<${ICON_MAP[val]} size={16} />}`;
    };

    addIcon('startIcon', startIcon);
    addIcon('endIcon', endIcon);
    addIcon('startLoadingIcon', startLoadingIcon);
    addIcon('endLoadingIcon', endLoadingIcon);

    return `<Button ${props}>\n  ${text}\n</Button>`;
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
              options={{ primary: 'Primary', secondary: 'Secondary', warning: 'Warning', destructive: 'Destructive', outline: 'Outline', ghost: 'Ghost' }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ sm: 'Small', md: 'Medium', lg: 'Large', icon: 'Icon' }}
            />
          </div>

          <div className={s.dividerSection}>
            <div className={s.gridTwoCols}>
              <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
              <SelectField label="End Icon" value={state.endIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endIcon', v)} />
            </div>
            <div className={s.gridTwoCols}>
              <SelectField label="Start Loader" value={state.startLoadingIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startLoadingIcon', v)} />
              <SelectField label="End Loader" value={state.endLoadingIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endLoadingIcon', v)} />
            </div>
          </div>

          <div className={s.flexGapSection}>
            {['loading', 'disabled'].map((key) => (
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

          <div className={s.dividerSection}>
            <ControlLabel>Button Label</ControlLabel>
            <input
              type="text"
              value={state.text}
              onChange={(e) => updateState('text', e.target.value)}
              className={s.textInput}
              placeholder="Enter label..."
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Button
              variant={state.variant as any}
              size={state.size as any}
              loading={state.loading}
              disabled={state.disabled}
              startIcon={(ICONS as any)[state.startIcon]}
              endIcon={(ICONS as any)[state.endIcon]}
              startLoadingIcon={(ICONS as any)[state.startLoadingIcon]}
              endLoadingIcon={(ICONS as any)[state.endLoadingIcon]}
            >
              {state.text}
            </Button>
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
