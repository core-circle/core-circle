'use client';

import React, { useState } from 'react';
import { ScrollArea, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const ScrollAreaPlayground = () => {
  const [state, setState] = useState({
    variant: 'gradient',
    orientation: 'vertical',
    maxHeight: '180px',
    hideScrollbar: false,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, orientation, maxHeight, hideScrollbar } = state;
    return `<ScrollArea
  variant="${variant}"
  orientation="${orientation}"
  maxHeight="${maxHeight}"
  ${hideScrollbar ? 'hideScrollbar\n  ' : ''}>
  <div className="space-y-2 p-2">
    {/* Scrollable list items */}
  </div>
</ScrollArea>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'default', label: 'Default Slate' },
                { value: 'subtle', label: 'Subtle' },
                { value: 'thin', label: 'Thin Track' },
                { value: 'glow', label: 'Neon Emerald Glow' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'dark', label: 'Dark Mode' },
                { value: 'rounded', label: 'Rounded Capsule' },
                { value: 'accent', label: 'Primary Accent' },
                { value: 'minimal', label: 'Minimal' },
              ]}
              fullWidth
            />
            <Select
              label="Orientation"
              value={state.orientation}
              onChange={(e) => updateState('orientation', e.target.value)}
              options={[
                { value: 'vertical', label: 'Vertical Only' },
                { value: 'horizontal', label: 'Horizontal Only' },
                { value: 'both', label: 'Both Axes' },
              ]}
              fullWidth
            />
            <Select
              label="Max Height"
              value={state.maxHeight}
              onChange={(e) => updateState('maxHeight', e.target.value)}
              options={[
                { value: '120px', label: 'Compact (120px)' },
                { value: '180px', label: 'Medium (180px)' },
                { value: '260px', label: 'Large (260px)' },
              ]}
              fullWidth
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Checkbox
              label="Hide Scrollbar (Keep scroll functionality)"
              checked={state.hideScrollbar}
              onChange={(c) => updateState('hideScrollbar', c)}
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-6 bg-core-circle-bg-surface rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center">
            <ScrollArea
              variant={state.variant as any}
              orientation={state.orientation as any}
              maxHeight={state.maxHeight}
              hideScrollbar={state.hideScrollbar}
              className="w-full bg-white p-4 border rounded-xl"
            >
              {state.orientation === 'horizontal' ? (
                <div className="flex gap-4 w-[800px] py-2">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="p-4 bg-slate-100 rounded-xl shrink-0 w-48 text-center">
                      <p className="font-bold text-sm">Cluster Card #{i + 1}</p>
                      <p className="text-xs text-slate-500 mt-1">Status: OK (99.9%)</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="p-2.5 bg-core-circle-bg-surface rounded-lg flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                        [2026-08-25T16:50:0{i}Z] event_id={1000 + i} payload_verified
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600">200 OK</span>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
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
