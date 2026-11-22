'use client';

import React, { useState } from 'react';
import { ColorSwatch, Select, TextInput, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { colorSwatchPlaygroundStyles as s } from './colorSwatchPlayground.styles';

const demoColors = [
  { label: 'Slate Navy', value: '#1e293b' },
  { label: 'Core Blue', value: '#2563eb' },
  { label: 'Emerald Green', value: '#10b981' },
  { label: 'Amber Orange', value: '#f59e0b' },
  { label: 'Rose Pink', value: '#f43f5e' },
  { label: 'Violet Purple', value: '#8b5cf6' },
  { label: 'Pure White', value: '#ffffff' },
];

export const ColorSwatchPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Theme Color');
  const [shape, setShape] = useState<'circle' | 'rounded' | 'square'>('circle');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [selectedColor, setSelectedColor] = useState<string>('#2563eb');
  const [useGrid, setUseGrid] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<ColorSwatch
  label="${label}"
  shape="${shape}"
  size="${size}"${useGrid ? '\n  columns={4}' : ''}
  colors={colors}
  value="${selectedColor}"
  onChange={(color) => setColor(color)}
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
                label="Shape"
                value={shape}
                onChange={(e) => setShape(e.target.value as any)}
                options={[
                  { value: 'circle', label: 'Circle (Rounded Full)' },
                  { value: 'rounded', label: 'Rounded Square' },
                  { value: 'square', label: 'Sharp Square' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                options={[
                  { value: 'sm', label: 'Small (24px)' },
                  { value: 'md', label: 'Medium (32px)' },
                  { value: 'lg', label: 'Large (40px)' },
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
                label="Arrange in 4-Column Grid"
                checked={useGrid}
                onChange={(checked) => setUseGrid(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="flex flex-col items-center gap-4">
              <ColorSwatch
                label={label}
                shape={shape}
                size={size}
                columns={useGrid ? 4 : undefined}
                colors={demoColors}
                value={selectedColor}
                onChange={setSelectedColor}
              />
              <span className="text-xs text-slate-500 font-mono">
                Selected: <strong className="text-slate-800">{selectedColor}</strong>
              </span>
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
