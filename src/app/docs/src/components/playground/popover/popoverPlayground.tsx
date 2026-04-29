'use client';

import React, { useState } from 'react';
import { Popover, Typography, Select, Button, TextInput } from '@core-circle/ui';
import { SettingsIcon, UserIcon, CodeIcon, CopyIcon } from '@core-circle/icons';
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

export const PopoverPlayground = () => {
  const [state, setState] = useState({
    align: 'center',
    trigger: 'Open Popover',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { align, trigger } = state;
    return `<Popover \n  align="${align}"\n  trigger={<Button>${trigger}</Button>}\n>\n  <div className="p-4">Popover Content</div>\n</Popover>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField 
              label="Alignment" 
              value={state.align} 
              onChange={(v: string) => updateState('align', v)} 
              options={{ start: 'Start', center: 'Center', end: 'End' }} 
            />
            <TextInput 
              label="Trigger Text" 
              value={state.trigger} 
              onChange={(e) => updateState('trigger', e.target.value)} 
              fullWidth 
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Popover 
              align={state.align as any}
              trigger={
                <Button variant="primary">{state.trigger}</Button>
              }
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <UserIcon size={20} />
                  </div>
                  <div>
                    <Typography variant="p" className="font-bold leading-none">John Wick</Typography>
                    <Typography variant="small" className="text-slate-500">john@babayaga.com</Typography>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
                <div className="flex flex-col gap-1">
                  <Button variant="ghost" size="sm" className="justify-start gap-2 h-9">
                    <SettingsIcon size={14} /> Account Settings
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start gap-2 h-9 text-red-600 hover:text-red-700 hover:bg-red-50">
                    Log out
                  </Button>
                </div>
              </div>
            </Popover>
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
