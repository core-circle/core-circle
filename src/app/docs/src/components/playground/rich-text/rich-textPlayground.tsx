'use client';

import React, { useState } from 'react';
import { RichText, Select, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { richTextPlaygroundStyles as s } from './rich-textPlayground.styles';
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

export const RichTextPlayground = () => {
  const [state, setState] = useState({
    size: 'base',
    content: `<h1>Design System</h1><p>Core Circle is a <strong>modern UI library</strong> built for scalability. It provides <em>primitives</em> that follow consistent design patterns.</p><ul><li>Atomic Design</li><li>Type Safety</li><li>Accessibility</li></ul><blockquote>"Simplicity is the ultimate sophistication."</blockquote>`,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { size, content } = state;
    return `<RichText \n  size="${size}" \n  content={\`${content}\`} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridCols}>
            <SelectField
              label="Size Scale"
              value={state.size}
              onChange={(v: string) => updateState('size', v)}
              options={{ sm: 'Small', base: 'Base', lg: 'Large' }}
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <RichText
              size={state.size as any}
              content={state.content}
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
