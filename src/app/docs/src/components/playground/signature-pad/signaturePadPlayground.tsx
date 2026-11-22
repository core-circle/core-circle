'use client';

import React, { useState } from 'react';
import { SignaturePad, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { signaturePadPlaygroundStyles as s } from './signaturePadPlayground.styles';

export const SignaturePadPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Official Signatory');
  const [strokeColor, setStrokeColor] = useState<string>('#0f172a');
  const [strokeWidth, setStrokeWidth] = useState<number>(2.5);
  const [height, setHeight] = useState<number>(180);
  const [variant, setVariant] = useState<'default' | 'bordered' | 'soft'>('default');
  const [showControls, setShowControls] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<SignaturePad
  label="${label}"
  variant="${variant}"
  strokeColor="${strokeColor}"
  strokeWidth={${strokeWidth}}
  height={${height}}${!showControls ? '\n  showControls={false}' : ''}${disabled ? '\n  disabled' : ''}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Toolbar */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'bordered', label: 'Bordered (High Contrast)' },
                  { value: 'soft', label: 'Soft Tinted' },
                ]}
                fullWidth
              />

              <Select
                label="Stroke Ink Color"
                value={strokeColor}
                onChange={(e) => setStrokeColor(e.target.value)}
                options={[
                  { value: '#0f172a', label: 'Slate Black (#0f172a)' },
                  { value: '#1d4ed8', label: 'Legal Blue (#1d4ed8)' },
                  { value: '#047857', label: 'Emerald Green (#047857)' },
                  { value: '#b91c1c', label: 'Burgundy Red (#b91c1c)' },
                ]}
                fullWidth
              />

              <Select
                label="Stroke Thickness"
                value={String(strokeWidth)}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                options={[
                  { value: '1.5', label: 'Fine (1.5px)' },
                  { value: '2.5', label: 'Medium (2.5px)' },
                  { value: '4', label: 'Bold (4.0px)' },
                ]}
                fullWidth
              />

              <TextInput
                label="Label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Show Toolbar Controls"
                checked={showControls}
                onCheckedChange={(checked) => setShowControls(checked)}
              />
              <Checkbox
                label="Disabled (Read-Only)"
                checked={disabled}
                onCheckedChange={(checked) => setDisabled(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-md">
              <SignaturePad
                key={`${variant}-${strokeColor}-${strokeWidth}-${height}-${showControls}-${disabled}`}
                label={label}
                variant={variant}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                height={height}
                showControls={showControls}
                disabled={disabled}
              />
            </div>
          </div>
        </div>

        {/* Syntax-Highlighted Code Footer */}
        <div className={s.codeSection}>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <CodeIcon size={14} /> React JSX Snippet
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="text-xs border-slate-700 hover:bg-slate-800 text-slate-300"
            >
              <CopyIcon size={14} className="mr-1.5" />
              {copied ? DOC_TEXT.COPIED : DOC_TEXT.COPY_CODE}
            </Button>
          </div>
          <pre
            className="text-xs text-slate-200 overflow-x-auto font-mono p-3 bg-slate-900 rounded-lg border border-slate-800"
            dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }}
          />
        </div>
      </div>
    </div>
  );
};
