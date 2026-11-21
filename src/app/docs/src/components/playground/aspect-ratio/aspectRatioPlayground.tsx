'use client';

import React, { useState } from 'react';
import { AspectRatio, Select, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const AspectRatioPlayground = () => {
  const [state, setState] = useState({
    ratio: '16:9' as any,
    variant: 'gradient',
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { ratio, variant } = state;
    return `<AspectRatio ratio="${ratio}" variant="${variant}" className="w-full max-w-lg">
  <div className="bg-slate-100 text-slate-800 flex items-center justify-center p-4">
    <p className="font-bold text-base">Responsive Content (${ratio})</p>
  </div>
</AspectRatio>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Aspect Ratio Preset"
              value={state.ratio}
              onChange={(e) => updateState('ratio', e.target.value)}
              options={[
                { value: '16:9', label: '16:9 (Cinematic Video)' },
                { value: '4:3', label: '4:3 (Classic TV / Tablet)' },
                { value: '1:1', label: '1:1 (Square Profile / Grid)' },
                { value: '21:9', label: '21:9 (Ultra-Wide Panorama)' },
                { value: '9:16', label: '9:16 (Vertical Story / TikTok)' },
                { value: '3:2', label: '3:2 (Photography 35mm)' },
                { value: '3:4', label: '3:4 (Portrait Document)' },
              ]}
              fullWidth
            />
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'default', label: 'Default' },
                { value: 'bordered', label: 'Bordered' },
                { value: 'rounded', label: 'Rounded' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'glow', label: 'Cyber Neon Glow' },
                { value: 'dark', label: 'Dark Mode' },
                { value: 'shadow', label: 'High Shadow' },
                { value: 'accent', label: 'Primary Accent' },
                { value: 'minimal', label: 'Minimal' },
              ]}
              fullWidth
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className="p-8 bg-core-circle-bg-surface rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center min-h-[220px]">
            <div className="w-full max-w-sm">
              <AspectRatio ratio={state.ratio} variant={state.variant as any}>
                <div className="bg-slate-100 text-slate-800 flex flex-col items-center justify-center p-6 h-full w-full">
                  <p className="font-bold text-sm text-emerald-400 font-mono">
                    RATIO: {state.ratio}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Auto-proportioned container
                  </p>
                </div>
              </AspectRatio>
            </div>
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
