'use client';

import React, { useState } from 'react';
import { FileUpload, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const FileUploadPlayground = () => {
  const [state, setState] = useState({
    variant: 'default',
    multiple: true,
    disabled: false,
    showFileList: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, multiple, disabled, showFileList } = state;
    return `<FileUpload
  variant="${variant}"
  ${multiple ? 'multiple\n  ' : ''}${disabled ? 'disabled\n  ' : ''}${!showFileList ? 'showFileList={false}\n  ' : ''}title="Drag & drop project artifacts"
  description="PNG, JPG, PDF or ZIP up to 50MB"
  onChange={(files) => console.log('Uploaded:', files)}
/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'default', label: 'Default Dashed' },
                { value: 'dashed', label: 'Slate Dashed' },
                { value: 'subtle', label: 'Subtle Surface' },
                { value: 'bordered', label: 'Bordered Card' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'glow', label: 'Cyber Neon Glow' },
                { value: 'dark', label: 'Dark Mode' },
                { value: 'compact', label: 'Compact' },
                { value: 'accent', label: 'Primary Accent' },
              ]}
              fullWidth
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Checkbox
              label="Multiple Files"
              checked={state.multiple}
              onChange={(c) => updateState('multiple', c)}
            />
            <Checkbox
              label="Show File List"
              checked={state.showFileList}
              onChange={(c) => updateState('showFileList', c)}
            />
            <Checkbox
              label="Disabled"
              checked={state.disabled}
              onChange={(c) => updateState('disabled', c)}
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-6 bg-core-circle-bg-surface rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center">
            <FileUpload
              variant={state.variant as any}
              multiple={state.multiple}
              disabled={state.disabled}
              showFileList={state.showFileList}
              title="Click or drag files here to upload"
              description="Drop files to test live state management"
            />
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                Copy Snippet
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
