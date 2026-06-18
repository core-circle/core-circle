'use client';

import React, { useState } from 'react';
import { Indicator, Select, TextInput, Button, Checkbox, Avatar } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const IndicatorPlayground = () => {
  const [state, setState] = useState({
    variant: 'danger',
    size: 'md',
    position: 'top-right',
    pulse: true,
    content: '9+',
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, position, pulse, content } = state;
    return `<Indicator \n  variant="${variant}" \n  size="${size}" \n  position="${position}" \n  content="${content}"\n  ${pulse ? 'pulse' : ''}\n>\n  <Avatar name="John Wick" />\n</Indicator>`;
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
                { value: 'primary', label: 'Primary' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'danger', label: 'Danger' },
                { value: 'info', label: 'Info' },
              ]}
              fullWidth
            />
            <Select
              label="Position"
              value={state.position}
              onChange={(e) => updateState('position', e.target.value)}
              options={[
                { value: 'top-right', label: 'Top Right' },
                { value: 'top-left', label: 'Top Left' },
                { value: 'bottom-right', label: 'Bottom Right' },
                { value: 'bottom-left', label: 'Bottom Left' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'sm', label: 'Small (Dot)' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ]}
              fullWidth
            />
            <TextInput
              label="Content"
              value={state.content}
              onChange={(e) => updateState('content', e.target.value)}
              fullWidth
            />
            <Checkbox
              label="Pulse Animation"
              checked={state.pulse}
              onChange={(checked) => updateState('pulse', checked)}
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Indicator
              variant={state.variant as any}
              size={state.size as any}
              position={state.position as any}
              pulse={state.pulse}
              content={state.content}
            >
              <Avatar size="xl" name="John Wick" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200" />
            </Indicator>
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
