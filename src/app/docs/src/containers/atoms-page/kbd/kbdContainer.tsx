'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Kbd } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { KbdPlayground } from '../../../components/playground/kbd/kbdPlayground';
import { buttonPageStyles as s } from '../button/button.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export default function KbdContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="kbd-intro" title="Introduction" description="The Kbd component is used to display keyboard keys and combinations. It helps users understand which shortcuts are available for specific actions.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Kbd } from '@core-circle/ui';\n\n<Kbd>⌘</Kbd> + <Kbd>K</Kbd>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={[
                  { name: 'variant', type: 'outline | solid | ghost', defaultValue: 'outline', description: 'Visual style' },
                  { name: 'size', type: 'sm | md', defaultValue: 'md', description: 'Size of the key' },
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
          <DocSection id="kbd-styles" title="Visual Variants" description="Different styles to match your UI depth.">
            <ComponentPreview 
              title="Styles"
              code={`<Kbd variant="outline">⌘</Kbd>\n<Kbd variant="solid">Alt</Kbd>\n<Kbd variant="ghost">Shift</Kbd>`}
            >
              <div className="flex items-center gap-4">
                <Kbd variant="outline">⌘</Kbd>
                <Kbd variant="solid">Alt</Kbd>
                <Kbd variant="ghost">Shift</Kbd>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="kbd-combinations" title="Shortcut Combinations" description="Common patterns for key combinations.">
            <ComponentPreview 
              title="Combinations"
              code={`<div className="flex items-center gap-1">\n  <Kbd>⌘</Kbd>\n  <span>+</span>\n  <Kbd>Shift</Kbd>\n  <span>+</span>\n  <Kbd>P</Kbd>\n</div>`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <Kbd size="sm">⌘</Kbd>
                  <span className="text-core-circle-text-muted">+</span>
                  <Kbd size="sm">Shift</Kbd>
                  <span className="text-core-circle-text-muted">+</span>
                  <Kbd size="sm">P</Kbd>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <Kbd>Ctrl</Kbd>
                  <span className="text-core-circle-text-muted">+</span>
                  <Kbd>Alt</Kbd>
                  <span className="text-core-circle-text-muted">+</span>
                  <Kbd>Del</Kbd>
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
      content: <KbdPlayground />
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
