'use client';

import React, { useState } from 'react';
import { Skeleton, Select, Button, TextInput } from '@core-circle/ui';
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

export const SkeletonPlayground = () => {
  const [state, setState] = useState({
    variant: 'rectangular',
    animation: 'shimmer',
    width: '100%',
    height: 100,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, animation, width, height } = state;
    let props = `variant="${variant}" animation="${animation}"`;
    if (width) props += ` width="${width}"`;
    if (height) props += ` height={${height}}`;

    return `<Skeleton ${props} />`;
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
              options={{ text: 'Text', circular: 'Circular', rectangular: 'Rectangular' }}
            />
            <SelectField
              label="Animation"
              value={state.animation}
              onChange={(v: string) => updateState('animation', v)}
              options={{ none: 'None', pulse: 'Pulse', shimmer: 'Shimmer' }}
            />
            <TextInput
              label="Width"
              value={state.width}
              onChange={(e) => updateState('width', e.target.value)}
              fullWidth
            />
            <TextInput
              label="Height"
              type="number"
              value={state.height}
              onChange={(e) => updateState('height', Number(e.target.value))}
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Skeleton
              variant={state.variant as any}
              animation={state.animation as any}
              width={state.width}
              height={state.height}
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
