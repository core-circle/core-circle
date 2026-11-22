'use client';

import React, { useState } from 'react';
import { Accordion, Select, Checkbox, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Plus, Minus, ArrowDown, Sparkles, EyeIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { accordionPlaygroundStyles as s } from './accordionPlayground.styles';
import { ACCORDION_PLAYGROUND_ITEMS } from '../../../constants/atoms-page/accordion/accordionConstants';
import { DOC_TEXT } from '../../../constants/common-constants';

export const AccordionPlayground = () => {
  const [state, setState] = useState({
    variant: 'bordered',
    size: 'md',
    type: 'single',
    iconType: 'chevron',
    fullWidth: true,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const displayedItems = state.type === 'single'
    ? [ACCORDION_PLAYGROUND_ITEMS[0]]
    : ACCORDION_PLAYGROUND_ITEMS;

  const getCustomIcons = () => {
    switch (state.iconType) {
      case 'plus-minus':
        return {
          expandIcon: <Plus size={state.size === 'sm' ? 14 : state.size === 'lg' ? 18 : 16} />,
          collapseIcon: <Minus size={state.size === 'sm' ? 14 : state.size === 'lg' ? 18 : 16} />
        };
      case 'arrow':
        return {
          expandIcon: <ArrowDown size={state.size === 'sm' ? 14 : state.size === 'lg' ? 18 : 16} />
        };
      case 'sparkles':
        return {
          expandIcon: <Sparkles size={state.size === 'sm' ? 14 : state.size === 'lg' ? 18 : 16} className="text-amber-500" />
        };
      case 'eye':
        return {
          expandIcon: (isOpen: boolean) => (
            <EyeIcon
              size={state.size === 'sm' ? 14 : state.size === 'lg' ? 18 : 16}
              className={isOpen ? 'text-core-circle-primary' : 'text-core-circle-text-muted'}
            />
          )
        };
      default:
        return {};
    }
  };

  const generateCode = () => {
    let iconProps = '';
    if (state.iconType === 'plus-minus') {
      iconProps = `\n  expandIcon={<Plus size={16} />}\n  collapseIcon={<Minus size={16} />}`;
    } else if (state.iconType === 'arrow') {
      iconProps = `\n  expandIcon={<ArrowDown size={16} />}`;
    } else if (state.iconType === 'sparkles') {
      iconProps = `\n  expandIcon={<Sparkles size={16} className="text-amber-500" />}`;
    } else if (state.iconType === 'eye') {
      iconProps = `\n  expandIcon={(isOpen) => <EyeIcon className={isOpen ? 'text-primary' : ''} />}`;
    }

    let props = `items={${state.type === 'single' ? '[item]' : '[item1, item2, item3]'}}\n  variant="${state.variant}"\n  size="${state.size}"\n  type="${state.type}"${iconProps}`;
    if (!state.fullWidth) props += `\n  fullWidth={false}`;

    return `<Accordion \n  ${props} \n/>`;
  };

  const { expandIcon, collapseIcon } = getCustomIcons();

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'bordered', label: 'Bordered' },
                  { value: 'card', label: 'Card (Elevated Header)' },
                  { value: 'filled', label: 'Filled (Soft Surface)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted Glass)' },
                  { value: 'floating', label: 'Floating (Lift on Hover)' },
                  { value: 'gradient', label: 'Gradient (Glowing Border)' },
                  { value: 'pill', label: 'Pill (Curved Capsules)' },
                  { value: 'separated', label: 'Separated' },
                  { value: 'minimal', label: 'Minimal (Underline)' },
                  { value: 'ghost', label: 'Ghost' },
                ]}
                fullWidth
              />
              <Select
                label="Toggle Icon"
                value={state.iconType}
                onChange={(e) => updateState('iconType', e.target.value)}
                options={[
                  { value: 'chevron', label: 'Chevron (Default)' },
                  { value: 'plus-minus', label: 'Plus / Minus (+ / -)' },
                  { value: 'arrow', label: 'Arrow Down (↓)' },
                  { value: 'sparkles', label: 'Sparkles (✨)' },
                  { value: 'eye', label: 'Eye Indicator (👁)' },
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
                  { value: 'single', label: 'Single (1 Item)' },
                  { value: 'multiple', label: 'Multiple (Many Items)' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Checkboxes & Switches Horizontally */}
            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Full Width"
                checked={state.fullWidth}
                onCheckedChange={(checked) => updateState('fullWidth', checked)}
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Accordion
              items={displayedItems}
              type={state.type as any}
              variant={state.variant as any}
              size={state.size as any}
              fullWidth={state.fullWidth}
              expandIcon={expandIcon}
              collapseIcon={collapseIcon}
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
