'use client';

import React, { useState } from 'react';
import { InputGroup, TextInput, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { inputGroupPlaygroundStyles as s } from './inputGroupPlayground.styles';

export const InputGroupPlayground: React.FC = () => {
  const [label, setLabel] = useState<string>('Custom URL');
  const [prefix, setPrefix] = useState<string>('https://');
  const [suffix, setSuffix] = useState<string>('.corecircle.io');
  const [buttonText, setButtonText] = useState<string>('Verify');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [joined, setJoined] = useState<boolean>(true);
  const [showPrefix, setShowPrefix] = useState<boolean>(true);
  const [showSuffix, setShowSuffix] = useState<boolean>(true);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatedCode = `<InputGroup
  label="${label}"
  size="${size}"${!joined ? '\n  joined={false}' : ''}
  fullWidth
>
  ${showPrefix ? `<InputGroup.Text>${prefix}</InputGroup.Text>\n  ` : ''}<TextInput defaultValue="my-brand" fullWidth />
  ${showSuffix ? `<InputGroup.Text>${suffix}</InputGroup.Text>\n  ` : ''}${showButton ? `<InputGroup.Button variant="primary">${buttonText}</InputGroup.Button>` : ''}
</InputGroup>`;

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
                label="Prefix Text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                fullWidth
              />

              <TextInput
                label="Suffix Text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-core-circle-border-main/60 pt-4">
              <Checkbox
                label="Joined (Unified Borders)"
                checked={joined}
                onCheckedChange={(checked) => setJoined(checked)}
              />
              <Checkbox
                label="Show Prefix"
                checked={showPrefix}
                onCheckedChange={(checked) => setShowPrefix(checked)}
              />
              <Checkbox
                label="Show Suffix"
                checked={showSuffix}
                onCheckedChange={(checked) => setShowSuffix(checked)}
              />
              <Checkbox
                label="Show Action Button"
                checked={showButton}
                onCheckedChange={(checked) => setShowButton(checked)}
              />
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-lg">
              <InputGroup
                key={`${size}-${joined}-${showPrefix}-${showSuffix}-${showButton}`}
                label={label}
                size={size}
                joined={joined}
                fullWidth
              >
                {showPrefix && <InputGroup.Text>{prefix}</InputGroup.Text>}
                <TextInput defaultValue="my-brand" fullWidth />
                {showSuffix && <InputGroup.Text>{suffix}</InputGroup.Text>}
                {showButton && (
                  <InputGroup.Button variant="primary">{buttonText}</InputGroup.Button>
                )}
              </InputGroup>
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
