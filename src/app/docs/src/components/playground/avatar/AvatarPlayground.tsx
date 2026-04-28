'use client';

import React, { useState } from 'react';
import { Avatar, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from '../accordion/accordionPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const AvatarPlayground = () => {
  const [state, setState] = useState({
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
    name: 'John Wick',
    size: 'xl',
    shape: 'circle',
    status: 'online',
    bordered: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    let props = `name="${state.name}"\n  size="${state.size}"\n  shape="${state.shape}"`;
    if (state.src) props += `\n  src="${state.src}"`;
    if (state.status) props += `\n  status="${state.status}"`;
    if (state.bordered) props += `\n  bordered`;

    return `<Avatar \n  ${props} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <TextInput
              label="Image Source"
              value={state.src}
              onChange={(e) => updateState('src', e.target.value)}
              placeholder="https://..."
              fullWidth
            />
            <TextInput
              label="Name (for Initials)"
              value={state.name}
              onChange={(e) => updateState('name', e.target.value)}
              placeholder="User Name"
              fullWidth
            />
            <Select
              label="Size"
              value={state.size}
              onChange={(e) => updateState('size', e.target.value)}
              options={[
                { value: 'xs', label: 'Extra Small' },
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
                { value: 'xl', label: 'Extra Large' },
                { value: '2xl', label: '2XL' },
              ]}
              fullWidth
            />
            <Select
              label="Shape"
              value={state.shape}
              onChange={(e) => updateState('shape', e.target.value)}
              options={[
                { value: 'circle', label: 'Circle' },
                { value: 'rounded', label: 'Rounded' },
                { value: 'square', label: 'Square' },
              ]}
              fullWidth
            />
            <Select
              label="Status"
              value={state.status || ''}
              onChange={(e) => updateState('status', e.target.value || undefined)}
              options={[
                { value: '', label: 'None' },
                { value: 'online', label: 'Online' },
                { value: 'offline', label: 'Offline' },
                { value: 'away', label: 'Away' },
                { value: 'busy', label: 'Busy' },
              ]}
              fullWidth
            />
            <div className="flex items-end pb-2">
              <Checkbox
                label="Bordered"
                checked={state.bordered}
                onChange={(checked) => updateState('bordered', checked)}
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Avatar
              src={state.src}
              name={state.name}
              size={state.size as any}
              shape={state.shape as any}
              status={state.status as any}
              bordered={state.bordered}
            />
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
