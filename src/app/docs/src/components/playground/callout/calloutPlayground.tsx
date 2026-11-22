'use client';

import React, { useState } from 'react';
import { Callout, Button, Select, TextInput, Checkbox } from '@core-circle/ui';
import { CalloutVariant, CalloutSize } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { calloutPlaygroundStyles as s } from './calloutPlayground.styles';

export const CalloutPlayground: React.FC = () => {
  const [variant, setVariant] = useState<CalloutVariant>('info');
  const [size, setSize] = useState<CalloutSize>('md');
  const [title, setTitle] = useState<string>('System Advisory');
  const [body, setBody] = useState<string>('All background database workers will automatically restart following the cluster update.');
  const [dismissible, setDismissible] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(true);

  const generatedCode = `<Callout
  variant="${variant}"
  size="${size}"
  title="${title}"
  icon={${showIcon}}
  dismissible={${dismissible}}
  action={<Button variant="outline" size="sm">Acknowledge</Button>}
>
  ${body}
</Callout>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as CalloutVariant)}
                options={[
                  { value: 'info', label: 'Info' },
                  { value: 'success', label: 'Success' },
                  { value: 'warning', label: 'Warning' },
                  { value: 'danger', label: 'Danger' },
                  { value: 'brand', label: 'Brand' },
                  { value: 'neutral', label: 'Neutral' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as CalloutSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Body Message"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-core-circle-border-main/60">
              <Checkbox
                label="Dismissible Button"
                checked={dismissible}
                onChange={(e) => setDismissible(e.target.checked)}
              />
              <Checkbox
                label="Leading Icon"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-lg">
              <Callout
                variant={variant}
                size={size}
                title={title}
                icon={showIcon}
                dismissible={dismissible}
                action={<Button variant="outline" size="sm">Acknowledge</Button>}
              >
                {body}
              </Callout>
            </div>
          </div>

          {/* Live Code Output */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
