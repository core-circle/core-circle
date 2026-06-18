'use client';

import React, { useState } from 'react';
import { Dialog, Typography, Select, Button, TextInput, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
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

export const DialogPlayground = () => {
  const [state, setState] = useState({
    size: 'md',
    title: 'Edit Profile',
    isDismissible: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { size, title, isDismissible } = state;
    return `<Dialog \n  size="${size}"\n  title="${title}"\n  trigger={<Button>Launch</Button>}\n  closeOnOverlayClick={${isDismissible}}\n>\n  <Typography variant="p">Dialog Content</Typography>\n</Dialog>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField 
              label="Size" 
              value={state.size} 
              onChange={(v: string) => updateState('size', v)} 
              options={{ 
                sm: 'Small', 
                md: 'Medium', 
                lg: 'Large', 
                xl: 'Extra Large', 
                full: 'Full Screen' 
              }} 
            />
            <div className="flex gap-6 items-end pb-2 ml-auto">
              <Checkbox 
                label="Dismissible Overlay" 
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
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Dialog 
              size={state.size as any}
              title={state.title}
              closeOnOverlayClick={state.isDismissible}
              trigger={
                <Button variant="primary">Launch Modal</Button>
              }
              footer={
                <div className="flex gap-3 justify-end w-full">
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="primary">Save Changes</Button>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                <Typography variant="p">Make changes to your profile here. Click save when you're done.</Typography>
                <div className="grid gap-4">
                  <TextInput label="Name" defaultValue="John Wick" fullWidth />
                  <TextInput label="Username" defaultValue="@babayaga" fullWidth />
                </div>
              </div>
            </Dialog>
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
