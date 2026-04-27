'use client';

import React, { useState } from 'react';
import { Tabs, Select, TextInput, Button, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon, UserIcon, SettingsIcon, Bell } from '@core-circle/icons';
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
      onChange={(val) => onChange(val)}
      options={formattedOptions}
    />
  );
};

export const TabsPlayground = () => {
  const [state, setState] = useState({
    variant: 'underline',
    size: 'md',
    fullWidth: false,
  });

  const [tabs, setTabs] = useState<any[]>([
    {
      id: 'tab-1',
      label: 'Profile',
      icon: <UserIcon size={16} />,
      content: <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 mt-2">Manage your public profile and personal details here.</div>,
    },
    {
      id: 'tab-2',
      label: 'Security',
      icon: <SettingsIcon size={16} />,
      content: <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 mt-2">Update your password, set up 2FA, and review active sessions.</div>,
    },
    {
      id: 'tab-3',
      label: 'Notifications',
      icon: <Bell size={16} />,
      content: <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 mt-2">Choose which emails and alerts you want to receive.</div>,
    },
  ]);

  const [newTabTitle, setNewTabTitle] = useState('');

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddTab = () => {
    if (!newTabTitle.trim()) return;
    const newId = `tab-${Date.now()}`;
    setTabs([
      ...tabs,
      {
        id: newId,
        label: newTabTitle,
        icon: undefined,
        content: <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 mt-2">Content for {newTabTitle}</div>,
      }
    ]);
    setNewTabTitle('');
  };

  const generateCode = () => {
    const props = [];
    if (state.variant !== 'underline') props.push(`variant="${state.variant}"`);
    if (state.size !== 'md') props.push(`size="${state.size}"`);
    if (state.fullWidth) props.push('fullWidth');

    const itemsCode = tabs.map(tab => {
      const iconCode = tab.icon ? `, icon: <${(tab.icon as any).type.name} size={16} />` : '';
      return `  { id: '${tab.id}', label: '${tab.label}'${iconCode}, content: <div>...</div> }`;
    }).join(',\n');

    return `<Tabs
  ${props.join('\n  ')}
  items={[
${itemsCode}
  ]}
/>`.trim();
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(val: string) => updateState('variant', val)}
              options={{
                underline: 'Underline',
                pills: 'Pills',
                enclosed: 'Enclosed',
              }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(val: string) => updateState('size', val)}
              options={{
                sm: 'Small',
                md: 'Medium',
                lg: 'Large',
              }}
            />
            <div className="flex gap-4 items-end pb-2">
              {['fullWidth'].map((key) => (
                <Checkbox
                  key={key}
                  label="Full Width"
                  checked={(state as any)[key]}
                  onChange={(checked) => updateState(key, checked)}
                />
              ))}
            </div>
          </div>

          <div className={s.dividerSection}>
            <TextInput
              label="Add Dynamic Tab"
              placeholder="New tab title..."
              value={newTabTitle}
              onChange={(e) => setNewTabTitle(e.target.value)}
            />
            <div className="pb-1">
              <Button 
                onClick={handleAddTab} 
                disabled={!newTabTitle.trim()}
              >
                Add Tab
              </Button>
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.fullWidth ? "w-full" : "w-full max-w-2xl bg-white p-6 rounded-xl shadow-core-circle-subtle border border-core-circle-border-main"}>
              <Tabs
                items={tabs}
                variant={state.variant as any}
                size={state.size as any}
                fullWidth={state.fullWidth}
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
              >
                <CopyIcon className="w-3.5 h-3.5" />
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
