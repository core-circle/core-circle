'use client';

import React, { useState } from 'react';
import { Badge, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Sparkles } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const BadgePlayground = () => {
  const [state, setState] = useState({
    content: 'New Feature',
    variant: 'success',
    size: 'md',
    shape: 'pill',
    removable: false,
    pulse: false,
    withIcon: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    let props = `variant="${state.variant}"\n  size="${state.size}"\n  shape="${state.shape}"`;
    if (state.removable) props += `\n  removable\n  onRemove={() => console.log('Removed')}`;
    if (state.pulse) props += `\n  pulse`;
    if (state.withIcon) props += `\n  startIcon={<Sparkles size={12} />}`;

    return `<Badge \n  ${props} \n>\n  ${state.content}\n</Badge>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <TextInput
              label="Content"
              value={state.content}
              onChange={(e) => updateState('content', e.target.value)}
              placeholder="Badge text..."
              fullWidth
            />
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'primary', label: 'Primary' },
                { value: 'secondary', label: 'Secondary' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'danger', label: 'Danger' },
                { value: 'ghost', label: 'Ghost' },
                { value: 'outline', label: 'Outline' },
              ]}
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ]}
              fullWidth
            />
            <Select
              label="Shape"
              value={state.shape}
              onChange={(e) => updateState('shape', e.target.value)}
              options={[
                { value: 'rounded', label: 'Rounded' },
                { value: 'pill', label: 'Pill Shape' },
                { value: 'square', label: 'Square' },
              ]}
              fullWidth
            />
            <div className="flex items-end pb-2 gap-4 flex-wrap">
              <Checkbox
                label="Removable"
                checked={state.removable}
                onChange={(checked) => updateState('removable', checked)}
              />
              <Checkbox
                label="Pulse"
                checked={state.pulse}
                onChange={(checked) => updateState('pulse', checked)}
              />
              <Checkbox
                label="With Icon"
                checked={state.withIcon}
                onChange={(checked) => updateState('withIcon', checked)}
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Badge
              variant={state.variant as any}
              size={state.size as any}
              shape={state.shape as any}
              removable={state.removable}
              pulse={state.pulse}
              startIcon={state.withIcon ? <Sparkles size={12} /> : undefined}
              onRemove={state.removable ? () => alert('Remove clicked') : undefined}
            >
              {state.content}
            </Badge>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
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
