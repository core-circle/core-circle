'use client';

import React, { useState } from 'react';
import { Toast, Typography, TextInput, Select, Button, Checkbox } from '@core-circle/ui';
import { Info, CircleCheck, Alert as AlertIcon, CircleX, CodeIcon, CopyIcon } from '@core-circle/icons';
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
      onSelect={(val) => onChange(val)}
      options={formattedOptions}
      fullWidth
    />
  );
};

export const ToastPlayground = () => {
  const [state, setState] = useState({
    variant: 'default',
    title: 'Message Sent',
    description: 'Your message has been successfully delivered.',
    showIcon: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const getIconCode = () => {
    if (!state.showIcon) return '';
    switch (state.variant) {
      case 'success': return ' icon={<CircleCheck />}';
      case 'warning': return ' icon={<AlertIcon />}';
      case 'destructive': return ' icon={<CircleX />}';
      default: return ' icon={<Info />}';
    }
  };

  const generateCode = () => {
    const { variant, title, description } = state;
    return `<Toast\n  variant="${variant}"\n  title="${title}"\n  description="${description}"${getIconCode()}\n  onClose={() => {}}\n/>`;
  };

  const getIcon = () => {
    if (!state.showIcon) return null;
    switch (state.variant) {
      case 'success': return <CircleCheck size={18} />;
      case 'warning': return <AlertIcon size={18} />;
      case 'destructive': return <CircleX size={18} />;
      default: return <Info size={18} />;
    }
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField 
              label="Variant" 
              value={state.variant} 
              onChange={(v: string) => updateState('variant', v)} 
              options={{ 
                default: 'Default', 
                success: 'Success', 
                warning: 'Warning', 
                destructive: 'Destructive' 
              }} 
            />
            <div className="flex gap-6 items-end pb-2 ml-auto">
              <Checkbox 
                label="Show Icon" 
                checked={state.showIcon} 
                onChange={(checked) => updateState('showIcon', checked)} 
              />
            </div>
          </div>

          <div className={s.dividerSection}>
            <TextInput 
              label="Title" 
              value={state.title} 
              onChange={(e) => updateState('title', e.target.value)} 
              fullWidth 
            />
            <TextInput 
              label="Description" 
              value={state.description} 
              onChange={(e) => updateState('description', e.target.value)} 
              fullWidth 
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="relative">
              <Toast 
                variant={state.variant as any} 
                title={state.title} 
                description={state.description}
                icon={getIcon()}
                onClose={() => {}}
                className="shadow-2xl"
              />
              <Typography variant="small" className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-400 italic whitespace-nowrap">Static Preview</Typography>
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
