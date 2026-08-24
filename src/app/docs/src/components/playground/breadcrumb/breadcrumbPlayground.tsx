'use client';

import React, { useState } from 'react';
import { Breadcrumb, Select, Checkbox, TextInput, Button, SliderInput } from '@core-circle/ui';
import { HomeIcon, CodeIcon, CopyIcon, ShoppingBag, LightningBolt, ChevronRight, ArrowRight, CircleDot } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { breadcrumbPlaygroundStyles as s } from './breadcrumbPlayground.styles';

export const BreadcrumbPlayground = () => {
  const [state, setState] = useState({
    variant: 'pills',
    size: 'md',
    separatorType: 'chevron',
    showBack: false,
    backLabel: 'Back',
    withIcons: true,
    itemCount: 4,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const getSeparator = () => {
    switch (state.separatorType) {
      case 'slash': return <span className="text-core-circle-text-muted/40 font-mono">/</span>;
      case 'arrow': return <ArrowRight size={12} className="text-core-circle-text-muted/50" />;
      case 'dot': return <CircleDot size={8} className="text-core-circle-text-muted/50" />;
      default: return <ChevronRight size={12} className="text-core-circle-text-muted/50" />;
    }
  };

  const getItems = () => {
    const allItems = [
      { label: 'Home', href: '#', icon: state.withIcons ? <HomeIcon size={14} /> : undefined },
      { label: 'Store', href: '#', icon: state.withIcons ? <ShoppingBag size={14} /> : undefined },
      { label: 'Computers', href: '#', icon: state.withIcons ? <LightningBolt size={14} /> : undefined },
      { label: 'MacBook Pro M3', href: '#' },
      { label: 'Configuration' },
    ];
    return allItems.slice(0, state.itemCount);
  };

  const generateCode = () => {
    const items = getItems();
    let props = `items={[\n    ${items.map(item => {
      let itemStr = `{ label: '${item.label}'`;
      if (item.href) itemStr += `, href: '${item.href}'`;
      if (item.icon) itemStr += `, icon: <HomeIcon size={14} />`;
      itemStr += ' }';
      return itemStr;
    }).join(',\n    ')}\n  ]}`;
    props += `\n  variant="${state.variant}"`;
    props += `\n  size="${state.size}"`;
    if (state.separatorType === 'slash') props += `\n  separator="/"`;
    else if (state.separatorType === 'arrow') props += `\n  separator={<ArrowRight size={12} />}`;
    else if (state.separatorType === 'dot') props += `\n  separator={<CircleDot size={8} />}`;

    if (state.showBack) {
      props += `\n  showBack`;
      if (state.backLabel !== 'Back') props += `\n  backLabel="${state.backLabel}"`;
    }

    return `<Breadcrumb \n  ${props} \n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'pills', label: 'Pills (Capsules)' },
                  { value: 'standard', label: 'Standard (Classic)' },
                  { value: 'card', label: 'Card (Contained Bar)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted)' },
                  { value: 'gradient', label: 'Gradient (Radiant Active)' },
                  { value: 'floating', label: 'Floating (Drop Shadow)' },
                  { value: 'underlined', label: 'Underlined (Editorial)' },
                  { value: 'bordered-segment', label: 'Bordered Segment' },
                  { value: 'soft', label: 'Soft (Tone-on-Tone)' },
                  { value: 'ghost', label: 'Ghost' },
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
                label="Separator"
                value={state.separatorType}
                onChange={(e) => updateState('separatorType', e.target.value)}
                options={[
                  { value: 'chevron', label: 'Chevron ( › )' },
                  { value: 'slash', label: 'Slash ( / )' },
                  { value: 'arrow', label: 'Arrow ( → )' },
                  { value: 'dot', label: 'Dot ( • )' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Checkboxes & Switches Horizontally */}
            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Show Back Link"
                checked={state.showBack}
                onChange={(checked) => updateState('showBack', checked)}
              />
              <Checkbox
                label="With Icons"
                checked={state.withIcons}
                onChange={(checked) => updateState('withIcons', checked)}
              />
            </div>

            {/* 3. Text Inputs & Sliders Horizontally */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <SliderInput
                label="Trail Length (Items)"
                min={2}
                max={5}
                value={state.itemCount}
                onChange={(e) => updateState('itemCount', parseInt(e.target.value))}
                showValue
                fullWidth
              />
              <TextInput
                label="Back Button Text"
                value={state.backLabel}
                onChange={(e) => updateState('backLabel', e.target.value)}
                disabled={!state.showBack}
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Breadcrumb
              items={getItems()}
              variant={state.variant as any}
              size={state.size as any}
              separator={getSeparator()}
              showBack={state.showBack}
              backLabel={state.backLabel}
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
