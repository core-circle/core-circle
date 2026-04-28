'use client';

import React, { useState } from 'react';
import { Divider, Select, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

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

export const DividerPlayground = () => {
  const [state, setState] = useState({
    orientation: 'horizontal',
    variant: 'solid',
    thickness: 'sm',
    label: '',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { orientation, variant, thickness, label } = state;
    const props = `orientation="${orientation}" variant="${variant}" thickness="${thickness}"`;
    return label && orientation === 'horizontal' 
      ? `<Divider ${props}>${label}</Divider>`
      : `<Divider ${props} />`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <SelectField
              label="Orientation"
              value={state.orientation}
              onChange={(v: string) => updateState('orientation', v)}
              options={{ horizontal: 'Horizontal', vertical: 'Vertical' }}
            />
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{ solid: 'Solid', dashed: 'Dashed', dotted: 'Dotted' }}
            />
            <SelectField
              label="Thickness"
              value={state.thickness}
              onChange={(v: string) => updateState('thickness', v)}
              options={{ sm: 'Small', md: 'Medium', lg: 'Large' }}
            />
            <TextInput
              label="Label (Horizontal only)"
              value={state.label}
              onChange={(e) => updateState('label', e.target.value)}
              disabled={state.orientation === 'vertical'}
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            {state.orientation === 'vertical' ? (
              <div className="flex h-20 items-center gap-4 text-sm text-core-circle-text-muted">
                Section A
                <Divider 
                  orientation="vertical" 
                  variant={state.variant as any} 
                  thickness={state.thickness as any} 
                />
                Section B
              </div>
            ) : (
              <div className="w-full max-w-md text-sm text-core-circle-text-muted">
                <p className="mb-4">Top Content Area</p>
                <Divider 
                  orientation="horizontal" 
                  variant={state.variant as any} 
                  thickness={state.thickness as any}
                >
                  {state.label}
                </Divider>
                <p className="mt-4">Bottom Content Area</p>
              </div>
            )}
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
