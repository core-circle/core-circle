'use client';

import React, { useState } from 'react';
import { Rating, Select, Checkbox } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { Button } from '@core-circle/ui';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';

export const RatingPlayground = () => {
  const [rating, setRating] = useState(4);
  const [state, setState] = useState({
    variant: 'gold',
    size: 'lg',
    max: 5,
    allowHalf: true,
    readOnly: false,
    disabled: false,
    showScore: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { variant, size, max, allowHalf, readOnly, disabled, showScore } = state;
    return `const [rating, setRating] = useState(${rating});

<Rating
  value={rating}
  onChange={setRating}
  variant="${variant}"
  size="${size}"
  max={${max}}
  ${allowHalf ? 'allowHalf\n  ' : ''}${readOnly ? 'readOnly\n  ' : ''}${disabled ? 'disabled\n  ' : ''}${showScore ? 'showScore\n  ' : ''}/>`;
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
                { value: 'default', label: 'Default Amber' },
                { value: 'amber', label: 'Deep Amber' },
                { value: 'gold', label: 'Luminous Gold' },
                { value: 'rose', label: 'Rose Red' },
                { value: 'emerald', label: 'Emerald Green' },
                { value: 'indigo', label: 'Indigo Blue' },
                { value: 'gradient', label: 'Purple Gradient' },
                { value: 'glow', label: 'Neon Glow' },
                { value: 'glassmorphic', label: 'Glassmorphic' },
                { value: 'dark', label: 'Dark Mode' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'sm', label: 'Small (sm)' },
                { value: 'md', label: 'Medium (md)' },
                { value: 'lg', label: 'Large (lg)' },
                { value: 'xl', label: 'Extra Large (xl)' },
              ]}
              fullWidth
            />
            <Select
              label="Max Stars"
              value={state.max.toString()}
              onChange={(e) => updateState('max', parseInt(e.target.value))}
              options={[
                { value: '3', label: '3 Stars' },
                { value: '5', label: '5 Stars (Standard)' },
                { value: '7', label: '7 Stars' },
                { value: '10', label: '10 Stars (Net Promoter)' },
              ]}
              fullWidth
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Checkbox
              label="Allow Half Stars"
              checked={state.allowHalf}
              onChange={(c) => updateState('allowHalf', c)}
            />
            <Checkbox
              label="Show Numeric Score"
              checked={state.showScore}
              onChange={(c) => updateState('showScore', c)}
            />
            <Checkbox
              label="Read Only"
              checked={state.readOnly}
              onChange={(c) => updateState('readOnly', c)}
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
          <div className="p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main flex flex-col items-center justify-center min-h-[140px]">
            <Rating
              value={rating}
              onChange={setRating}
              variant={state.variant as any}
              size={state.size as any}
              max={state.max}
              allowHalf={state.allowHalf}
              readOnly={state.readOnly}
              disabled={state.disabled}
              showScore={state.showScore}
            />
            <span className="text-xs text-core-circle-text-muted mt-3">
              {state.readOnly ? 'Read Only Mode' : 'Click or hover over stars to update score'}
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
