'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Counter, Button } from '@core-circle/ui';
import { Info, Layers, Play, Bell } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CounterPlayground } from '../../../components/playground/counter/counterPlayground';
import { buttonPageStyles as s } from '../button/button.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export default function CounterContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="counter-intro" title="Introduction" description="The Counter component is used to display numeric values, typically counts of items, notifications, or results. It is optimized for use within buttons, tabs, and other interactive elements.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Counter } from '@core-circle/ui';\n\n<Counter count={12} max={99} />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={[
                  { name: 'count', type: 'number', defaultValue: '-', description: 'Value to display' },
                  { name: 'max', type: 'number', defaultValue: '-', description: 'Maximum cap (e.g. 99+)' },
                  { name: 'variant', type: 'primary | neutral | outline | ghost', defaultValue: 'primary', description: 'Visual style' },
                ]} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: DOC_TEXT.COMMON.VARIANTS,
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="counter-styles" title="Visual Variants" description="Different styles for various context.">
            <ComponentPreview 
              title="Styles"
              code={`<Counter count={5} variant="primary" />\n<Counter count={5} variant="neutral" />\n<Counter count={5} variant="outline" />`}
            >
              <div className="flex items-center gap-6">
                <Counter count={5} variant="primary" />
                <Counter count={12} variant="neutral" />
                <Counter count={8} variant="outline" />
                <div className="bg-slate-900 p-4 rounded-lg flex items-center gap-2">
                   <span className="text-white text-sm">Ghost (Inverse):</span>
                   <Counter count={3} variant="ghost" className="text-white bg-white/20" />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="counter-integration" title="Integration" description="Common use cases inside other components.">
            <ComponentPreview 
              title="Within Components"
              code={`<Button variant="outline" endIcon={<Counter count={5} size="xs" />}>\n  Messages\n</Button>`}
            >
              <div className="flex items-center gap-8">
                <Button variant="outline" startIcon={<Bell size={18} />} endIcon={<Counter count={5} size="xs" />}>
                  Notifications
                </Button>
                <div className="flex border-b border-core-circle-border-main pb-2 gap-8">
                   <div className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-2 px-1 font-medium">
                      Inbox <Counter count={120} max={99} variant="neutral" size="xs" />
                   </div>
                   <div className="flex items-center gap-2 text-core-circle-text-muted pb-2 px-1">
                      Spam <Counter count={0} size="xs" />
                   </div>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: <CounterPlayground />
    }
  ];

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s?.title}>{headerContent?.title}</h1>
        <p className={s?.description}>{headerContent?.description}</p>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
