'use client';

import React, { useState } from 'react';
import { Tooltip, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Info, Alert, CircleX } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

const ICON_MAP: Record<string, any> = {
  info: <Info size={20} className="text-core-circle-primary cursor-pointer" />,
  alert: <Alert size={20} className="text-core-circle-warning cursor-pointer" />,
  error: <CircleX size={20} className="text-core-circle-destructive cursor-pointer" />,
};

const ICON_COMP_MAP: Record<string, string> = {
  info: 'Info',
  alert: 'Alert',
  error: 'CircleX',
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

export const TooltipPlayground = () => {
  const [state, setState] = useState({
    variant: 'primary',
    position: 'top',
    trigger: 'click',
    title: 'Interactive Tooltip',
    description: 'You can change my props in the controls!',
    icon: 'info',
    showCloseIcon: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, position, trigger, title, description, icon, showCloseIcon } = state;
    let props = `title="${title}"\n  description="${description}"\n  variant="${variant}"\n  position="${position}"\n  trigger="${trigger}"`;
    if (!showCloseIcon) props += '\n  showCloseIcon={false}';
    if (icon !== 'info') props += `\n  icon={<${ICON_COMP_MAP[icon]} size={20} />}`;

    return `<Tooltip \n  ${props}\n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{ 
                primary: 'Primary', 
                secondary: 'Secondary',
                success: 'Success',
                warning: 'Warning', 
                danger: 'Danger',
                info: 'Info', 
                gradient: 'Radiant Gradient',
                glow: 'Neon Glow',
                glassmorphic: 'Glassmorphic',
                dark: 'Dark Mode'
              }}
            />
            <SelectField
              label="Position"
              value={state.position}
              onChange={(v: string) => updateState('position', v)}
              options={{ top: 'Top', bottom: 'Bottom', left: 'Left', right: 'Right' }}
            />
            <SelectField
              label="Trigger"
              value={state.trigger}
              onChange={(v: string) => updateState('trigger', v)}
              options={{ click: 'Click', hover: 'Hover' }}
            />
            <SelectField
              label="Icon"
              value={state.icon}
              onChange={(v: string) => updateState('icon', v)}
              options={{ info: 'Info', alert: 'Alert', error: 'Error' }}
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
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
            <Checkbox
              label="Show Close Icon (Click trigger only)"
              checked={state.showCloseIcon}
              onChange={(checked) => updateState('showCloseIcon', checked)}
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Tooltip
              title={state.title}
              description={state.description}
              variant={state.variant as any}
              position={state.position as any}
              trigger={state.trigger as any}
              icon={ICON_MAP[state.icon]}
              showCloseIcon={state.showCloseIcon}
            />
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className="text-xs text-core-circle-text-muted hover:text-core-circle-primary transition-colors h-7"
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
