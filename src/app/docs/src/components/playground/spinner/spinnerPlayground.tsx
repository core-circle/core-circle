'use client';

import React, { useState } from 'react';
import { Spinner, Select, Button, TextInput } from '@core-circle/ui';
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

export const SpinnerPlayground = () => {
  const [state, setState] = useState({
    variant: 'primary',
    size: 'lg',
    thickness: 4,
    speed: 0.8,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, thickness, speed } = state;
    let props = `variant="${variant}" size="${size}"`;
    if (thickness !== 4) props += ` thickness={${thickness}}`;
    if (speed !== 0.8) props += ` speed={${speed}}`;

    return `<Spinner ${props} />`;
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
              options={{ primary: 'Primary', secondary: 'Secondary', warning: 'Warning', destructive: 'Destructive', info: 'Info' }}
            />
            <SelectField
              label="Size"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ sm: 'Small', md: 'Medium', lg: 'Large', xl: 'Extra Large' }}
            />
            <TextInput
              label="Thickness"
              type="number"
              value={state.thickness}
              onChange={(e) => updateState('thickness', Number(e.target.value))}
              fullWidth
            />
            <TextInput
              label="Speed (s)"
              type="number"
              step="0.1"
              value={state.speed}
              onChange={(e) => updateState('speed', Number(e.target.value))}
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Spinner
              variant={state.variant as any}
              size={state.size as any}
              thickness={state.thickness}
              speed={state.speed}
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
