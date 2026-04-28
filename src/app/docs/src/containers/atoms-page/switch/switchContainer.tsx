'use client';

import React from 'react';
import Link from 'next/link';
import { Switch, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SwitchPlayground } from '../../../components/playground/switch/switchPlayground';
import { buttonPageStyles as s } from '../button/button.styles';

export default function SwitchContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="switch-intro" title="Introduction" description="The Switch component is a toggle that represents a physical switch that allows users to turn things on or off.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Switch } from '@core-circle/ui';\n\n<Switch defaultChecked />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={[
                  { name: 'variant', type: 'primary | secondary | warning | destructive', defaultValue: 'primary', description: 'The visual style of the switch' },
                  { name: 'size', type: 'sm | md | lg', defaultValue: 'md', description: 'The size of the switch' },
                  { name: 'checked', type: 'boolean', defaultValue: '-', description: 'The controlled checked state' },
                  { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'The default checked state' },
                  { name: 'onCheckedChange', type: '(checked: boolean) => void', defaultValue: '-', description: 'Callback when state changes' },
                  { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Whether the switch is disabled' },
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
          <DocSection id="switch-variants" title="Color Variants" description="Different visual styles for brand integration.">
            <ComponentPreview title="Variants">
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center gap-2">
                  <Switch variant="primary" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Primary</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Switch variant="secondary" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Secondary</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Switch variant="warning" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Warning</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Switch variant="destructive" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Destructive</span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="switch-sizes" title="Sizes" description="Three standardized sizes.">
            <ComponentPreview title="Sizes">
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center gap-2">
                  <Switch size="sm" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Small</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Switch size="md" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Switch size="lg" defaultChecked />
                  <span className="text-xs text-core-circle-text-muted">Large</span>
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
      content: <SwitchPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="switch-mock" title="Enterprise Integration" description="Example of how to consume dynamic switch configurations from an API.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "setting_notification",
                  label: "Email Notifications",
                  value: true,
                  style: {
                    variant: "primary",
                    size: "md"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const SettingToggle = ({ data }) => {\n  return (\n    <div className="flex items-center justify-between">\n      <span>{data.label}</span>\n      <Switch\n        variant={data.style.variant}\n        size={data.style.size}\n        defaultChecked={data.value}\n      />\n    </div>\n  );\n};`}
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
