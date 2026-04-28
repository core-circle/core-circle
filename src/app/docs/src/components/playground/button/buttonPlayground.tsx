'use client';

import React, { useState } from 'react';
import { Button, Select, Checkbox, TextInput } from '@core-circle/ui';
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
    labelSize: 'sm',
    labelWeight: 'medium',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, loading, disabled, text, startIcon, endIcon, startLoadingIcon, endLoadingIcon, labelSize, labelWeight } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (labelSize !== 'sm') props += ` labelSize="${labelSize}"`;
    if (labelWeight !== 'medium') props += ` labelWeight="${labelWeight}"`;
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
          {/* Row 1: All select controls in one flat grid */}
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
            <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
            <SelectField label="End Icon" value={state.endIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endIcon', v)} />
            <SelectField label="Start Loader" value={state.startLoadingIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startLoadingIcon', v)} />
            <SelectField label="End Loader" value={state.endLoadingIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endLoadingIcon', v)} />
          </div>

          <div className={s.dividerSection}>
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
            <TextInput
              label="Label"
              value={state.text}
              onChange={(e) => updateState('text', e.target.value)}
              placeholder="Enter label..."
              fullWidth
            />
            <div className="flex items-center gap-6 pb-2 ml-auto lg:col-span-3">
              {['loading', 'disabled'].map((key) => (
                <Checkbox
                  key={key}
                  label={key}
                  checked={(state as any)[key]}
                  onChange={(checked) => updateState(key, checked)}
                />
              ))}
            </div>
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
              labelSize={state.labelSize as any}
              labelWeight={state.labelWeight as any}
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
