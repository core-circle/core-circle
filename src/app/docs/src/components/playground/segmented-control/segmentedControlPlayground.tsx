'use client';

import React, { useState } from 'react';
import { SegmentedControl, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { segmentedControlPlaygroundStyles as s } from './segmentedControlPlayground.styles';

export const SegmentedControlPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('View Mode');
  const [variant, setVariant] = useState<'default' | 'pills' | 'soft' | 'bordered'>('default');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  const [activeValue, setActiveValue] = useState<string>('grid');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<SegmentedControl
  label="${label}"
  variant="${variant}"
  size="${size}"${fullWidth ? '\n  fullWidth' : ''}
  options={[
    { label: 'Grid', value: 'grid' },
    { label: 'List', value: 'list' },
    { label: 'Calendar', value: 'calendar' },
  ]}
  value="${activeValue}"
  onChange={(val) => setView(val)}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                options={[
                  { value: 'default', label: 'Default (Card)' },
                  { value: 'pills', label: 'Pills (Rounded)' },
                  { value: 'soft', label: 'Soft (Blue Tint)' },
                  { value: 'bordered', label: 'Bordered' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
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
                label="Full Width Distribution"
                checked={fullWidth}
                onCheckedChange={(checked) => setFullWidth(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={fullWidth ? 'w-full max-w-md' : 'w-auto'}>
              <SegmentedControl
                label={label}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                value={activeValue}
                onChange={setActiveValue}
                options={[
                  { label: 'Grid', value: 'grid' },
                  { label: 'List', value: 'list' },
                  { label: 'Calendar', value: 'calendar' },
                ]}
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
