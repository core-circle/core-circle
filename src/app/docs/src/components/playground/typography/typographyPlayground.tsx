'use client';

import React, { useState } from 'react';
import { Typography, Select, Checkbox, TextInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { typographyPlaygroundStyles as s } from './typographyPlayground.styles';
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

export const TypographyPlayground = () => {
  const [state, setState] = useState({
    variant: 'p',
    color: 'default',
    weight: 'normal',
    align: 'left',
    italic: false,
    underline: false,
    text: 'The quick brown fox jumps over the lazy dog.',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, color, weight, align, italic, underline, text } = state;
    let props = `variant="${variant}"`;
    if (color !== 'default') props += ` color="${color}"`;
    if (weight !== 'normal') props += ` weight="${weight}"`;
    if (align !== 'left') props += ` align="${align}"`;
    if (italic) props += ' italic';
    if (underline) props += ' underline';

    return `<Typography ${props}>\n  ${text}\n</Typography>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridCols}>
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{ 
                h1: 'Heading 1', h2: 'Heading 2', h3: 'Heading 3', 
                h4: 'Heading 4', h5: 'Heading 5', h6: 'Heading 6', 
                p: 'Paragraph', lead: 'Lead', large: 'Large', 
                small: 'Small', muted: 'Muted', blockquote: 'Blockquote', 
                code: 'Code' 
              }}
            />
            <SelectField
              label="Color Token"
              value={state.color}
              onChange={(v: string) => updateState('color', v)}
              options={{
                default: 'Default Text',
                primary: 'Primary Blue',
                secondary: 'Secondary Slate',
                success: 'Success Emerald',
                warning: 'Warning Amber',
                danger: 'Danger Rose',
                info: 'Info Blue',
                gradient: 'Radiant Gradient',
                glow: 'Neon Glow',
                accent: 'Accent Indigo',
                muted: 'Muted Gray'
              }}
            />
            <SelectField
              label="Weight"
              value={state.weight}
              onChange={(v: string) => updateState('weight', v)}
              options={{ light: 'Light', normal: 'Normal', medium: 'Medium', semibold: 'Semibold', bold: 'Bold' }}
            />
            <SelectField
              label="Align"
              value={state.align}
              onChange={(v: string) => updateState('align', v)}
              options={{ left: 'Left', center: 'Center', right: 'Right', justify: 'Justify' }}
            />
            <div className="flex items-center gap-4 pb-2">
              <Checkbox
                label="Italic"
                checked={state.italic}
                onChange={(checked) => updateState('italic', checked)}
              />
              <Checkbox
                label="Underline"
                checked={state.underline}
                onChange={(checked) => updateState('underline', checked)}
              />
            </div>
          </div>
          <div className={s.dividerSection}>
            <TextInput
              label="Text Content"
              value={state.text}
              onChange={(e) => updateState('text', e.target.value)}
              placeholder="Enter text..."
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Typography
              variant={state.variant as any}
              color={state.color as any}
              weight={state.weight as any}
              align={state.align as any}
              italic={state.italic}
              underline={state.underline}
            >
              {state.text}
            </Typography>
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
                className={s.copyButton}
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
