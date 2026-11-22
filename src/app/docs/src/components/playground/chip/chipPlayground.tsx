'use client';

import React, { useState } from 'react';
import { Chip, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { chipPlaygroundStyles as s } from './chipPlayground.styles';

export const ChipPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Frontend Developer');
  const [count, setCount] = useState<string>('14');
  const [variant, setVariant] = useState<'default' | 'outline' | 'soft' | 'gradient' | 'ghost'>('default');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [selected, setSelected] = useState<boolean>(true);
  const [removable, setRemovable] = useState<boolean>(true);
  const [showCount, setShowCount] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<Chip
  label="${label}"
  variant="${variant}"
  size="${size}"${selected ? '\n  selected' : ''}${removable ? '\n  removable' : ''}${showCount && count ? `\n  count={${count}}` : ''}
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
                  { value: 'outline', label: 'Outline' },
                  { value: 'soft', label: 'Soft Tinted' },
                  { value: 'gradient', label: 'Gradient' },
                  { value: 'ghost', label: 'Ghost' },
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

              <TextInput
                label="Badge Count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Selected State"
                checked={selected}
                onCheckedChange={(checked) => setSelected(checked)}
              />
              <Checkbox
                label="Removable (×)"
                checked={removable}
                onCheckedChange={(checked) => setRemovable(checked)}
              />
              <Checkbox
                label="Show Count Badge"
                checked={showCount}
                onCheckedChange={(checked) => setShowCount(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex items-center justify-center p-6">
              <Chip
                label={label}
                variant={variant}
                size={size}
                selected={selected}
                removable={removable}
                count={showCount && count ? Number(count) : undefined}
                onSelect={(next) => setSelected(next)}
                onRemove={() => alert('Chip removed')}
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
