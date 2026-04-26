'use client';

import React, { useState } from 'react';
import { Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';

const ICONS = {
  none: null,
  email: <span>📧</span>,
  arrow: <span>→</span>,
  star: <span>⭐</span>,
  settings: <span>⚙️</span>,
  refresh: <span>♻️</span>,
  clock: <span>⌛</span>,
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
  email: 'fa-solid fa-envelope',
  arrow: 'fa-solid fa-arrow-right',
  star: 'fa-solid fa-star',
  settings: 'fa-solid fa-gear',
  refresh: 'fa-solid fa-rotate',
  clock: 'fa-regular fa-clock',
};

// Reusable Control Components
const ControlLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[10px] font-core-circle-bold text-core-circle-text-muted uppercase tracking-wider mb-2">
    {children}
  </label>
);

const SelectField = ({ label, value, options, onChange }: any) => (
  <div>
    <ControlLabel>{label}</ControlLabel>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 bg-white border border-core-circle-border-main rounded-core-circle-md text-core-circle-xs outline-none focus:border-core-circle-primary transition-colors cursor-pointer"
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
      if (val !== 'none') props += `\n  ${name}={<i className="${ICON_MAP[val]}" />}`;
    };

    addIcon('startIcon', startIcon);
    addIcon('endIcon', endIcon);
    addIcon('startLoadingIcon', startLoadingIcon);
    addIcon('endLoadingIcon', endLoadingIcon);

    return `<Button ${props}>\n  ${text}\n</Button>`;
  };

  return (
    <div className="bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Controls */}
        <div className="w-full lg:w-[380px] bg-core-circle-bg-page/30 border-r border-core-circle-border-main p-8 space-y-8">
          <div className="grid grid-cols-2 gap-4">
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

          <div className="space-y-4 border-t border-core-circle-border-main pt-6">
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="Start Icon" value={state.startIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startIcon', v)} />
              <SelectField label="End Icon" value={state.endIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endIcon', v)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="Start Loader" value={state.startLoadingIcon} options={ICON_LABELS} onChange={(v: string) => updateState('startLoadingIcon', v)} />
              <SelectField label="End Loader" value={state.endLoadingIcon} options={ICON_LABELS} onChange={(v: string) => updateState('endLoadingIcon', v)} />
            </div>
          </div>

          <div className="flex gap-6 border-t border-core-circle-border-main pt-6">
            {['loading', 'disabled'].map((key) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={(state as any)[key]}
                  onChange={(e) => updateState(key, e.target.checked)}
                  className="w-4 h-4 rounded-core-circle-xs border-core-circle-border-main text-core-circle-primary focus:ring-core-circle-primary"
                />
                <span className="text-core-circle-xs text-core-circle-text-main font-core-circle-medium group-hover:text-core-circle-primary transition-colors capitalize">{key}</span>
              </label>
            ))}
          </div>

          <div className="border-t border-core-circle-border-main pt-6">
            <ControlLabel>Button Label</ControlLabel>
            <input
              type="text"
              value={state.text}
              onChange={(e) => updateState('text', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-core-circle-border-main rounded-core-circle-md text-core-circle-xs outline-none focus:border-core-circle-primary transition-colors"
              placeholder="Enter label..."
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex-1 flex items-center justify-center p-20 min-h-[350px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
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

          <div className="p-8 bg-core-circle-bg-inverse border-t border-core-circle-border-main">
            <div className="flex items-center justify-between mb-4">
              <span className="text-core-circle-xs font-core-circle-bold text-core-circle-text-inverse opacity-60 uppercase tracking-widest flex items-center gap-2">
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className="text-core-circle-xs text-core-circle-primary hover:text-white transition-colors flex items-center gap-2"
              >
                <CopyIcon className="w-3.5 h-3.5" />
                Copy Snippet
              </button>
            </div>
            <pre className="text-core-circle-text-inverse font-mono text-[12px] leading-relaxed overflow-x-auto p-4 bg-black/20 rounded-core-circle-lg">
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generateCode()) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
