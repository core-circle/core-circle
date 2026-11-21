'use client';

import React, { useState } from 'react';
import { Textarea, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon, UserIcon, SquareEdit, Info, Chat } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { textareaPlaygroundStyles as s } from './textareaPlayground.styles';

const ICONS = {
  none: null,
  user: <UserIcon size={16} />,
  edit: <SquareEdit size={16} />,
  info: <Info size={16} />,
  message: <Chat size={16} />,
};

const ICON_LABELS: Record<string, string> = {
  none: 'None',
  user: 'User',
  edit: 'Edit',
  info: 'Info',
  message: 'Message',
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

export const TextareaPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    resize: 'vertical',
    label: 'Description',
    placeholder: 'Enter a detailed description...',
    error: '',
    helperText: 'Helper message',
    disabled: false,
    fullWidth: true,
    rows: 4,
    startIcon: 'none',
    endIcon: 'none',
    labelSize: 'xs',
    labelWeight: 'bold',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, resize, label, placeholder, error, helperText, disabled, fullWidth, rows, startIcon, endIcon, labelSize, labelWeight } = state;
    let props = `variant="${variant}" size="${size}" resize="${resize}" rows={${rows}}`;
    if (labelSize !== 'xs') props += ` labelSize="${labelSize}"`;
    if (labelWeight !== 'bold') props += ` labelWeight="${labelWeight}"`;
    if (label) props += ` label="${label}"`;
    if (placeholder) props += ` placeholder="${placeholder}"`;
    if (error) props += ` error="${error}"`;
    if (helperText) props += ` helperText="${helperText}"`;
    if (disabled) props += ' disabled';
    if (fullWidth) props += ' fullWidth';

    const addIcon = (propName: string, iconKey: string) => {
      if (iconKey !== 'none') {
        const iconNames: Record<string, string> = {
          user: 'UserIcon',
          edit: 'SquareEdit',
          info: 'Info',
          message: 'Chat',
        };
        const displayName = iconNames[iconKey] || iconKey;
        props += `\n  ${propName}={<${displayName} size={16} />}`;
      }
    };

    addIcon('startIcon', startIcon);
    addIcon('endIcon', endIcon);

    return `<Textarea ${props} />`;
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
                material: 'Material Static', 
                'material-animated': 'Material Animated', 
                ghost: 'Ghost', 
                standard: 'Standard Minimal',
                filled: 'Filled Surface',
                glassmorphic: 'Glassmorphic',
                floating: 'Floating Elevated',
                gradient: 'Radiant Gradient',
                pill: 'Pill Rounded',
                accent: 'Accent Blue',
                dark: 'Dark Mode'
              }} 
            />
            <SelectField label="Size" value={state.size} onChange={(v: string) => updateState('size', v)} options={{ sm: 'Small', md: 'Medium', lg: 'Large' }} />
            <SelectField label="Resize" value={state.resize} options={{ none: 'None', vertical: 'Vertical', horizontal: 'Horizontal', both: 'Both' }} onChange={(v: string) => updateState('resize', v)} />
            <div className="flex flex-col gap-1.5">
               <label className="text-[10px] font-bold uppercase text-slate-400">Rows</label>
               <input 
                 type="number" 
                 value={state.rows} 
                 onChange={(e) => updateState('rows', parseInt(e.target.value) || 1)}
                 className="px-3 py-2 bg-white border border-core-circle-border-main rounded-core-circle-md text-core-circle-xs outline-none focus:border-core-circle-primary transition-all"
               />
            </div>
          </div>

          <div className={s.dividerSection}>
            <SelectField label="Label Size" value={state.labelSize} onChange={(v: string) => updateState('labelSize', v)} options={{ xs: 'Extra Small', sm: 'Small', base: 'Base', lg: 'Large', xl: 'Extra Large', '2xl': '2XL' }} />
            <SelectField label="Label Weight" value={state.labelWeight} onChange={(v: string) => updateState('labelWeight', v)} options={{ light: 'Light', normal: 'Normal', medium: 'Medium', semibold: 'Semibold', bold: 'Bold' }} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end border-t border-core-circle-border-main pt-6">
            <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
            <SelectField label="End Icon" value={state.endIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endIcon', v)} />
            <TextInput label="Label" value={state.label} onChange={(e) => updateState('label', e.target.value)} fullWidth />
            <TextInput label="Placeholder" value={state.placeholder} onChange={(e) => updateState('placeholder', e.target.value)} fullWidth />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main pt-6">
            <TextInput label="Error" value={state.error} onChange={(e) => updateState('error', e.target.value)} placeholder="Error message..." fullWidth />
            <TextInput label="Helper Text" value={state.helperText} onChange={(e) => updateState('helperText', e.target.value)} fullWidth />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full" : "w-[400px]"}>
              <Textarea
                variant={state.variant as any}
                size={state.size as any}
                resize={state.resize as any}
                rows={state.rows}
                label={state.label}
                placeholder={state.placeholder}
                error={state.error}
                helperText={state.helperText}
                disabled={state.disabled}
                fullWidth={state.fullWidth}
                startIcon={(ICONS as any)[state.startIcon]}
                endIcon={(ICONS as any)[state.endIcon]}
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
