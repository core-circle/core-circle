'use client';

import React, { useState } from 'react';
import { Accordion, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from './accordionPlayground.styles';
import { ACCORDION_PLAYGROUND_ITEMS } from '../../../constants/atoms-page/accordion/accordionConstants';

export const AccordionPlayground = () => {
  const [state, setState] = useState({
    variant: 'bordered',
    size: 'md',
    type: 'single',
    fullWidth: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    let props = `items={[...]}\n  variant="${state.variant}"\n  size="${state.size}"\n  type="${state.type}"`;
    if (!state.fullWidth) props += `\n  fullWidth={false}`;

    return `<Accordion \n  ${props} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <Select
              label="Variant"
              value={state.variant}
              onChange={(e) => updateState('variant', e.target.value)}
              options={[
                { value: 'bordered', label: 'Bordered' },
                { value: 'ghost', label: 'Ghost' },
                { value: 'separated', label: 'Separated' },
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
              label="Type"
              value={state.type}
              onChange={(e) => updateState('type', e.target.value)}
              options={[
                { value: 'single', label: 'Single' },
                { value: 'multiple', label: 'Multiple' },
              ]}
              fullWidth
            />
            <div className="flex items-end pb-2">
              <Checkbox
                label="Full Width"
                checked={state.fullWidth}
                onChange={(checked) => updateState('fullWidth', checked)}
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Accordion
              items={ACCORDION_PLAYGROUND_ITEMS}
              variant={state.variant as any}
              size={state.size as any}
              type={state.type as any}
              fullWidth={state.fullWidth}
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
