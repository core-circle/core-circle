'use client';

import React, { useState } from 'react';
import { TagInput, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const TagInputPlayground = () => {
  const [tags, setTags] = useState<string[]>(['react', 'typescript', 'tailwind']);
  const [state, setState] = useState({
    variant: 'gradient',
    maxTags: 6,
    allowDuplicates: false,
    disabled: false,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, maxTags, allowDuplicates, disabled } = state;
    return `const [tags, setTags] = useState(${JSON.stringify(tags)});

<TagInput
  label="Project Keywords"
  value={tags}
  onChange={setTags}
  variant="${variant}"
  maxTags={${maxTags}}
  ${allowDuplicates ? 'allowDuplicates\n  ' : ''}${disabled ? 'disabled\n  ' : ''}placeholder="Type keyword and press Enter..."
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
                { value: 'outline', label: 'Outline' },
                { value: 'pills', label: 'Pills Capsule' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'glow', label: 'Cyber Neon Glow' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'subtle', label: 'Subtle' },
                { value: 'dark', label: 'Dark Mode' },
                { value: 'bordered', label: 'Bordered' },
                { value: 'accent', label: 'Primary Accent' },
                { value: 'minimal', label: 'Minimal Underline' },
              ]}
              fullWidth
            />
            <Select
              label="Max Tags Limit"
              value={state.maxTags.toString()}
              onChange={(e) => updateState('maxTags', parseInt(e.target.value))}
              options={[
                { value: '3', label: 'Max 3 Tags' },
                { value: '6', label: 'Max 6 Tags' },
                { value: '10', label: 'Max 10 Tags' },
              ]}
              fullWidth
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Checkbox
              label="Allow Duplicates"
              checked={state.allowDuplicates}
              onChange={(c) => updateState('allowDuplicates', c)}
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
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center min-h-[140px]">
            <TagInput
              label="Interactive Tag Creator"
              value={tags}
              onChange={setTags}
              variant={state.variant as any}
              maxTags={state.maxTags}
              allowDuplicates={state.allowDuplicates}
              disabled={state.disabled}
              placeholder="Type tag and press Enter or comma..."
              className="w-full max-w-md"
            />
            <span className="text-xs text-core-circle-text-muted mt-4">
              Current Array: {JSON.stringify(tags)}
            </span>
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
