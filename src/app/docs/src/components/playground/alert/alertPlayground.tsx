'use client';

import React, { useState } from 'react';
import { Alert, TextInput, Select, Button, Checkbox } from '@core-circle/ui';
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

export const AlertPlayground = () => {
  const [state, setState] = useState({
    variant: 'info',
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    showIcon: true,
    isDismissible: true,
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
    const { variant, title, description, isDismissible } = state;
    let code = `<Alert\n  variant="${variant}"\n  title="${title}"${getIconCode()}`;
    if (isDismissible) code += '\n  onClose={() => {}}';
    code += `\n>\n  ${description}\n</Alert>`;
    return code;
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
                info: 'Info', 
                success: 'Success', 
                warning: 'Warning', 
                destructive: 'Destructive', 
                outline: 'Outline' 
              }} 
            />
            <div className="flex gap-6 items-end pb-2 ml-auto">
              <Checkbox 
                label="Show Icon" 
                checked={state.showIcon} 
                onChange={(checked) => updateState('showIcon', checked)} 
              />
              <Checkbox 
                label="Dismissible" 
                checked={state.isDismissible} 
                onChange={(checked) => updateState('isDismissible', checked)} 
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
            <Alert 
              variant={state.variant as any} 
              title={state.title} 
              icon={getIcon()}
              onClose={state.isDismissible ? () => {} : undefined}
              className="w-full max-w-xl"
            >
              {state.description}
            </Alert>
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
