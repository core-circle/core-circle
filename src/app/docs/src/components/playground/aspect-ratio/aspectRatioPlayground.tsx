'use client';

import React, { useState } from 'react';
import { AspectRatio, Select, Button, TextInput } from '@core-circle/ui';
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

export const AspectRatioPlayground = () => {
  const [state, setState] = useState({
    ratioPreset: '16/9',
    customRatio: '',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const currentRatio = state.customRatio 
    ? parseFloat(state.customRatio) 
    : eval(state.ratioPreset);

  const generateCode = () => {
    const ratioStr = state.customRatio || state.ratioPreset;
    return `<div className="w-[400px]">\n  <AspectRatio ratio={${ratioStr}}>\n    <img \n      src="https://images.unsplash.com/photo-1588345921523-c2dcd57f48a4?w=800" \n      className="object-cover w-full h-full" \n    />\n  </AspectRatio>\n</div>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <SelectField
              label="Ratio Preset"
              value={state.ratioPreset}
              onChange={(v: string) => {
                updateState('ratioPreset', v);
                updateState('customRatio', '');
              }}
              options={{ '1/1': '1:1 (Square)', '4/3': '4:3 (Classic)', '16/9': '16:9 (Widescreen)', '21/9': '21:9 (Ultrawide)' }}
            />
            <TextInput
              label="Custom Ratio (Width/Height)"
              placeholder="e.g. 1.5"
              value={state.customRatio}
              onChange={(e) => updateState('customRatio', e.target.value)}
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-[450px] transition-all duration-500 shadow-core-circle-floating rounded-core-circle-xl overflow-hidden">
              <AspectRatio ratio={currentRatio}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcd57f48a4?w=800&dpr=2&q=80"
                  alt="Sample"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
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
