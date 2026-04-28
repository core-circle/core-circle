'use client';

import React, { useState } from 'react';
import { Image, Select, Button, AspectRatio } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { buttonPlaygroundStyles as s } from '../button/buttonPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export const ImagePlayground = () => {
  const [state, setState] = useState({
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60',
    fit: 'cover',
    rounded: 'md',
    aspectRatio: '16/9',
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const { src, fit, rounded, aspectRatio } = state;
    const ratioParts = aspectRatio.split('/');
    const ratio = parseInt(ratioParts[0]) / parseInt(ratioParts[1]);
    
    return `<AspectRatio ratio={${ratio}}>\n  <Image \n    src="${src}" \n    alt="Scenic nature" \n    fit="${fit}" \n    rounded="${rounded}" \n  />\n</AspectRatio>`;
  };

  const ratioValue = () => {
    const parts = state.aspectRatio.split('/');
    return parseInt(parts[0]) / parseInt(parts[1]);
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Fit"
              value={state.fit}
              onChange={(e) => updateState('fit', e.target.value)}
              options={[
                { value: 'cover', label: 'Cover' },
                { value: 'contain', label: 'Contain' },
                { value: 'fill', label: 'Fill' },
                { value: 'none', label: 'None' },
                { value: 'scaleDown', label: 'Scale Down' },
              ]}
              fullWidth
            />
            <Select
              label="Rounded"
              value={state.rounded}
              onChange={(e) => updateState('rounded', e.target.value)}
              options={[
                { value: 'none', label: 'None' },
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
                { value: 'xl', label: 'Extra Large' },
                { value: 'full', label: 'Full (Circle)' },
              ]}
              fullWidth
            />
             <Select
              label="Aspect Ratio"
              value={state.aspectRatio}
              onChange={(e) => updateState('aspectRatio', e.target.value)}
              options={[
                { value: '16/9', label: '16:9' },
                { value: '4/3', label: '4:3' },
                { value: '1/1', label: '1:1' },
                { value: '21/9', label: '21:9' },
              ]}
              fullWidth
            />
            <div className="flex flex-col gap-2 col-span-2">
              <label className="text-sm font-medium">Image Source</label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => updateState('src', 'invalid-path')}>Test Error State</Button>
                <Button variant="outline" size="sm" onClick={() => updateState('src', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60')}>Restore Image</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-md">
              <AspectRatio ratio={ratioValue()}>
                <Image
                  src={state.src}
                  alt="Scenic nature"
                  fit={state.fit as any}
                  rounded={state.rounded as any}
                  width="100%"
                  height="100%"
                />
              </AspectRatio>
            </div>
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
                className="text-xs text-core-circle-text-muted hover:text-core-circle-primary transition-colors h-7"
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
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
