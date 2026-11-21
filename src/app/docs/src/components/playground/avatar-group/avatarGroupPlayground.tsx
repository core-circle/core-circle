'use client';

import React, { useState } from 'react';
import { AvatarGroup, Select, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

const DEMO_COLLABORATORS = [
  { fallback: 'JD', name: 'John Doe', status: 'online' as const },
  { fallback: 'AL', name: 'Alice Lee', status: 'online' as const },
  { fallback: 'MR', name: 'Marcus Ray', status: 'busy' as const },
  { fallback: 'SK', name: 'Sophia Kim', status: 'offline' as const },
  { fallback: 'EW', name: 'Emma Watson', status: 'online' as const },
  { fallback: 'TW', name: 'Tom Wilson' },
  { fallback: 'CK', name: 'Clark Kent' },
  { fallback: 'BW', name: 'Bruce Wayne' },
];

export const AvatarGroupPlayground = () => {
  const [state, setState] = useState({
    variant: 'gradient',
    size: 'lg',
    max: 4,
    spacing: 'normal',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, max, spacing } = state;
    return `<AvatarGroup
  max={${max}}
  size="${size}"
  variant="${variant}"
  spacing="${spacing}"
  items={[
    { fallback: 'JD', name: 'John Doe', status: 'online' },
    { fallback: 'AL', name: 'Alice Lee', status: 'online' },
    { fallback: 'MR', name: 'Marcus Ray', status: 'busy' },
    { fallback: 'SK', name: 'Sophia Kim', status: 'offline' },
    { fallback: 'EW', name: 'Emma Watson' },
    { fallback: 'TW', name: 'Tom Wilson' }
  ]}
/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'default', label: 'Default Ring' },
                { value: 'bordered', label: 'Bordered' },
                { value: 'ring', label: 'Primary Ring' },
                { value: 'glow', label: 'Neon Glow' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'compact', label: 'Compact' },
                { value: 'relaxed', label: 'Relaxed' },
                { value: 'dark', label: 'Dark Mode' },
                { value: 'pill', label: 'Subtle Pill' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'xs', label: 'Extra Small (xs)' },
                { value: 'sm', label: 'Small (sm)' },
                { value: 'md', label: 'Medium (md)' },
                { value: 'lg', label: 'Large (lg)' },
                { value: 'xl', label: 'Extra Large (xl)' },
              ]}
              fullWidth
            />
            <Select
              label="Max Visible"
              value={state.max.toString()}
              onChange={(e) => updateState('max', parseInt(e.target.value))}
              options={[
                { value: '2', label: 'Max 2 (6 in overflow)' },
                { value: '3', label: 'Max 3 (5 in overflow)' },
                { value: '4', label: 'Max 4 (4 in overflow)' },
                { value: '5', label: 'Max 5 (3 in overflow)' },
                { value: '8', label: 'Max 8 (Show All)' },
              ]}
              fullWidth
            />
            <Select
              label="Spacing"
              value={state.spacing}
              onChange={(e) => updateState('spacing', e.target.value)}
              options={[
                { value: 'compact', label: 'Compact (-16px)' },
                { value: 'normal', label: 'Normal (-10px)' },
                { value: 'relaxed', label: 'Relaxed (-4px)' },
              ]}
              fullWidth
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center min-h-[140px]">
            <AvatarGroup
              max={state.max}
              size={state.size as any}
              variant={state.variant as any}
              spacing={state.spacing as any}
              items={DEMO_COLLABORATORS}
            />
            <span className="text-xs text-core-circle-text-muted mt-4">
              Hover over avatars to view interactive scale elevation
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
