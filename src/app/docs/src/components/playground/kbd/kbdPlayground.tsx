'use client';

import React, { useState } from 'react';
import { Kbd, Select, TextInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const KbdPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    size: 'md',
    children: '⌘',
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, children } = state;
    return `<Kbd variant="${variant}" size="${size}">${children}</Kbd>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'outline', label: 'Outline' },
                { value: 'solid', label: 'Solid' },
                { value: 'ghost', label: 'Ghost' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
              ]}
              fullWidth
            />
            <TextInput
              label="Key Content"
              value={state.children}
              onChange={(e) => updateState('children', e.target.value)}
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex items-center gap-2">
              <span className="text-sm text-core-circle-text-muted">Press</span>
              <Kbd variant={state.variant as any} size={state.size as any}>
                {state.children}
              </Kbd>
              <Kbd variant={state.variant as any} size={state.size as any}>
                K
              </Kbd>
              <span className="text-sm text-core-circle-text-muted">to search</span>
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
