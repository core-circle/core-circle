'use client';

import React, { useState } from 'react';
import { Breadcrumb, Select, Checkbox, TextInput } from '@core-circle/ui';
import { HomeIcon, CodeIcon, CopyIcon, ShoppingBag, LightningBolt } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { breadcrumbPlaygroundStyles as s } from './breadcrumbPlayground.styles';


export const BreadcrumbPlayground = () => {
  const [state, setState] = useState({
    variant: 'standard',
    showBack: false,
    backLabel: 'Back',
    itemCount: 3,
  });

  const updateState = (key: string, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const getItems = () => {
    const items = [
      { label: 'Home', href: '#', icon: <HomeIcon size={14} /> },
      { label: 'Products', href: '#', prefix: <ShoppingBag size={14} /> },
      { label: 'Category', href: '#', suffix: '(Refined)' },
      { label: 'Electronics', href: '#', prefix: <LightningBolt size={14} /> },
      { label: 'Smartphones' },
    ];
    return items.slice(0, state.itemCount);
  };

  const generateCode = () => {
    const items = getItems();
    let props = `items={[\n    ${items.map(item => {
      let itemStr = `{ label: '${item.label}'`;
      if (item.href) itemStr += `, href: '${item.href}'`;
      if (item.prefix) itemStr += `, prefix: <ShoppingBag size={14} />`;
      if (item.suffix) itemStr += `, suffix: '${item.suffix}'`;
      if (item.icon) itemStr += `, icon: <HomeIcon size={14} />`;
      itemStr += ' }';
      return itemStr;
    }).join(',\n    ')}\n  ]}`;
    props += `\n  variant="${state.variant}"`;
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
          <div className="space-y-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(v) => updateState('variant', v)}
                options={[
                  { value: 'standard', label: 'Standard' },
                  { value: 'ghost', label: 'Ghost' },
                  { value: 'pills', label: 'Pills' },
                ]}
              />

            <div>
              <label className={s.controlLabel}>Item Count</label>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={state.itemCount} 
                onChange={(e) => updateState('itemCount', parseInt(e.target.value))}
                className="w-full accent-core-circle-primary cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-core-circle-text-muted mt-1 uppercase font-core-circle-bold">
                <span>1 Item</span>
                <span>5 Items</span>
              </div>
            </div>

            <div className={s.dividerSection}>
              <Checkbox
                label="Show Back Link"
                checked={state.showBack}
                onChange={(checked) => updateState('showBack', checked)}
              />
            </div>

            {state.showBack && (
              <div>
                <TextInput
                  label="Back Label"
                  value={state.backLabel}
                  onChange={(e) => updateState('backLabel', e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <Breadcrumb
              items={getItems()}
              variant={state.variant as any}
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
              <button
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
              >
                <CopyIcon className="w-3.5 h-3.5" />
                Copy
              </button>
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
