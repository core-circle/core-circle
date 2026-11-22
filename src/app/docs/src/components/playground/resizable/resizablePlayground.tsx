'use client';

import React, { useState } from 'react';
import { Resizable, Select, Checkbox, SliderInput, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { resizablePlaygroundStyles as s } from './resizablePlayground.styles';

export const ResizablePlayground: React.FC = () => {
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  const [variant, setVariant] = useState<'default' | 'card' | 'bordered'>('card');
  const [defaultSize, setDefaultSize] = useState<number>(50);
  const [withHandle, setWithHandle] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);

  const generateCode = () => {
    return `<div className="w-full h-80">
  <Resizable
    direction="${direction}"
    variant="${variant}"
    defaultSize={${defaultSize}}
    disabled={${disabled}}
    className="w-full h-full"
  >
    <Resizable.Panel className="p-4 bg-slate-50 flex items-center justify-center font-medium text-slate-700">
      Panel 1 (Drag Handle)
    </Resizable.Panel>
    <Resizable.Handle withHandle={${withHandle}} />
    <Resizable.Panel className="p-4 bg-white flex items-center justify-center font-medium text-slate-700">
      Panel 2 (Flexible Fill)
    </Resizable.Panel>
  </Resizable>
</div>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Select
                label="Direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value as any)}
                options={[
                  { value: 'horizontal', label: 'Horizontal (Columns)' },
                  { value: 'vertical', label: 'Vertical (Rows)' },
                ]}
                fullWidth
              />
              <Select
                label="Surface Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'card', label: 'Card (Elevated Surface)' },
                  { value: 'bordered', label: 'Bordered (High Contrast)' },
                  { value: 'default', label: 'Default (Transparent)' },
                ]}
                fullWidth
              />
              <SliderInput
                label={`Initial Primary Size: ${defaultSize}%`}
                value={defaultSize}
                onChange={(val) => setDefaultSize(val)}
                min={20}
                max={80}
                step={5}
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Show Grip Handle Indicator"
                checked={withHandle}
                onCheckedChange={(checked) => setWithHandle(checked)}
              />
              <Checkbox
                label="Disable Drag Resizing"
                checked={disabled}
                onCheckedChange={(checked) => setDisabled(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-xl h-72 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden shadow-core-circle-subtle bg-slate-100">
              <Resizable
                key={`${direction}-${variant}-${defaultSize}-${disabled}`}
                direction={direction}
                variant={variant}
                defaultSize={defaultSize}
                disabled={disabled}
                className="w-full h-full"
              >
                <Resizable.Panel className="p-4 bg-slate-50 flex flex-col items-center justify-center text-sm font-semibold text-core-circle-text-main">
                  <span>Panel 1 (Primary)</span>
                  <span className="text-xs font-normal text-core-circle-text-muted mt-1">Drag the divider bar to resize</span>
                </Resizable.Panel>
                <Resizable.Handle withHandle={withHandle} />
                <Resizable.Panel className="p-4 bg-white flex flex-col items-center justify-center text-sm font-semibold text-core-circle-text-main">
                  <span>Panel 2 (Secondary)</span>
                  <span className="text-xs font-normal text-core-circle-text-muted mt-1">Automatically stretches to fill viewport</span>
                </Resizable.Panel>
              </Resizable>
            </div>
          </div>

          {/* Integrated Code Footer */}
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
                startIcon={<CopyIcon size={14} />}
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
