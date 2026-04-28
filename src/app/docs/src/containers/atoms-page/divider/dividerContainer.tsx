'use client';

import React from 'react';
import Link from 'next/link';
import { Divider, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DividerPlayground } from '../../../components/playground/divider/dividerPlayground';
import { buttonPageStyles as s } from '../button/button.styles';

export default function DividerContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="divider-intro" title="Introduction" description="Dividers are used to logically separate content within a page or component. They support horizontal and vertical layouts and can optionally contain text labels.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Divider } from '@core-circle/ui';\n\n<Divider />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={[
                  { name: 'orientation', type: 'horizontal | vertical', defaultValue: 'horizontal', description: 'The layout direction' },
                  { name: 'variant', type: 'solid | dashed | dotted', defaultValue: 'solid', description: 'Visual line style' },
                  { name: 'thickness', type: 'sm | md | lg', defaultValue: 'sm', description: 'Weight of the divider' },
                ]} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="divider-styles" title="Line Styles" description="Solid, dashed, and dotted lines for different visual weight.">
            <ComponentPreview 
              title="Styles"
              code={`<Divider variant="solid" />\n<Divider variant="dashed" />\n<Divider variant="dotted" />`}
            >
              <div className="flex flex-col gap-8 w-full max-w-md">
                <Divider variant="solid" />
                <Divider variant="dashed" />
                <Divider variant="dotted" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="divider-with-text" title="With Content" description="Horizontal dividers can contain text or icons in the center.">
            <ComponentPreview 
              title="Content Label"
              code={`<Divider>OR</Divider>\n<Divider variant="dashed">Continue with</Divider>`}
            >
              <div className="flex flex-col gap-8 w-full max-w-md">
                <Divider>OR</Divider>
                <Divider variant="dashed">Continue with</Divider>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="divider-vertical" title="Vertical Orientation" description="Use vertical dividers to separate inline elements like breadcrumbs or nav links.">
            <ComponentPreview 
              title="Vertical"
              code={`<div className="flex h-10 items-center gap-4">\n  <span>Item 1</span>\n  <Divider orientation="vertical" />\n  <span>Item 2</span>\n</div>`}
            >
              <div className="flex h-10 items-center gap-4 text-sm font-medium">
                <span>Dashboard</span>
                <Divider orientation="vertical" />
                <span>Analytics</span>
                <Divider orientation="vertical" thickness="md" />
                <span>Settings</span>
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
      content: <DividerPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="divider-mock" title="Enterprise Integration" description="Example of using dividers in a login form context.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Social Login Divider"
                code={`const LoginForm = () => (\n  <form className="space-y-6">\n    <TextInput label="Email" />\n    <Button fullWidth>Login</Button>\n    \n    <Divider>or continue with</Divider>\n\n    <div className="grid grid-cols-2 gap-4">\n      <Button variant="outline">Google</Button>\n      <Button variant="outline">GitHub</Button>\n    </div>\n  </form>\n);`}
              />
            </div>
          </DocSection>
        </div>
      )
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
