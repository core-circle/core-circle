'use client';

import React from 'react';
import Link from 'next/link';
import { Tooltip, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, Alert, CircleX, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TooltipPlayground } from '../../../components/playground/tooltip/tooltipPlayground';
import { buttonPageStyles as s } from '../button/button.styles';

export default function TooltipContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="tooltip-intro" title="Introduction" description="Tooltip provides brief, supplemental information about an element.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Tooltip } from '@core-circle/ui';\n\n<Tooltip title="Help" description="This is an informative message" />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={[
                  { name: 'title', type: 'string', defaultValue: '-', description: 'The title of the tooltip' },
                  { name: 'description', type: 'string', defaultValue: '-', description: 'The content/description' },
                  { name: 'trigger', type: 'click | hover', defaultValue: 'click', description: 'What triggers the tooltip' },
                  { name: 'position', type: 'top | bottom | left | right', defaultValue: 'top', description: 'Placement of the popover' },
                  { name: 'variant', type: 'primary | info | warning | destructive', defaultValue: 'primary', description: 'Visual variant' },
                  { name: 'icon', type: 'ReactNode', defaultValue: 'Info icon', description: 'Custom trigger icon' },
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
          <DocSection id="tooltip-click" title="Click Trigger" description="Appears when the user clicks the icon. Includes a close button.">
            <ComponentPreview title="Click">
              <div className="flex gap-4 items-center">
                <Tooltip 
                  trigger="click" 
                  title="Click Tooltip" 
                  description="You clicked me! Click the X or the icon again to close." 
                />
                <span className="text-sm text-core-circle-text-muted">Click the info icon</span>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="tooltip-hover" title="Hover Trigger" description="Appears when the user hovers over the icon.">
            <ComponentPreview title="Hover">
              <div className="flex gap-4 items-center">
                <Tooltip 
                  trigger="hover" 
                  title="Hover Tooltip" 
                  description="I appear on hover. No close button needed here." 
                />
                <span className="text-sm text-core-circle-text-muted">Hover over the info icon</span>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="tooltip-variants" title="Semantic Variants" description="Different styles for different types of information.">
            <ComponentPreview title="Variants">
              <div className="flex flex-wrap gap-12 items-center">
                <div className="flex flex-col items-center gap-2">
                  <Tooltip variant="primary" title="Primary" description="Default primary style" />
                  <span className="text-xs text-core-circle-text-muted">Primary</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Tooltip 
                    variant="warning" 
                    title="Warning" 
                    description="Be careful with this action" 
                    icon={<Alert size={20} className="text-core-circle-warning cursor-pointer" />}
                  />
                  <span className="text-xs text-core-circle-text-muted">Warning</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Tooltip 
                    variant="destructive" 
                    title="Error" 
                    description="Something went wrong" 
                    icon={<CircleX size={20} className="text-core-circle-destructive cursor-pointer" />}
                  />
                  <span className="text-xs text-core-circle-text-muted">Destructive</span>
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
      content: <TooltipPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="tooltip-mock" title="Enterprise Integration" description="Example of how to consume dynamic tooltip configurations from an API.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "tooltip_help",
                  data: {
                    title: "System Status",
                    message: "All services are running normally.",
                    type: "info"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicInfo = ({ data }) => {\n  return (\n    <Tooltip\n      title={data.title}\n      description={data.message}\n      variant={data.type === 'info' ? 'primary' : 'warning'}\n    />\n  );\n};`}
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
