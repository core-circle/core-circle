'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Progress } from '@core-circle/ui';
import { Info, Image, SettingsIcon, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { accordionPageStyles as s } from '../accordion/accordion.styles';
import {
  PROGRESS_PROPS_DATA,
} from '../../../constants/atoms-page/progress/progressConstants';
import { ProgressPlayground } from '../../../components/playground/progress/ProgressPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ProgressContainerProps } from '../../../interface/containers/atoms/progress.types';

export default function ProgressContainer({
  sections,
  headerContent,
  breadcrumbItems
}: ProgressContainerProps) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="progress-usage" title="Usage" description="The Progress component is used to show the status of a task or process.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Basic Usage"
                code={`import { Progress } from '@core-circle/ui';\n\n<Progress value={60} />`}
              />
            </div>
          </DocSection>

          <DocSection id="progress-props" title="Properties" description="Explore the available props for the Progress component.">
            <PropsTable data={PROGRESS_PROPS_DATA} />
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Image size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="progress-variants-colors" title="Semantic Colors" description="Use variants to communicate status like success, warning, or danger.">
            <ComponentPreview
              title="Color Variants"
              code={`<Progress value={80} variant="success" />\n<Progress value={40} variant="warning" />\n<Progress value={20} variant="danger" />`}
            >
              <div className="flex flex-col gap-8 w-full max-w-md">
                <Progress value={80} variant="success" showLabel label="Completed" />
                <Progress value={40} variant="warning" showLabel label="In Progress" />
                <Progress value={20} variant="danger" showLabel label="Attention Required" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="progress-variants-sizes" title="Sizes" description="Available in multiple sizes to fit different layout constraints.">
            <ComponentPreview
              title="Size Scale"
              code={`<Progress size="sm" value={50} />\n<Progress size="md" value={50} />\n<Progress size="lg" value={50} />`}
            >
              <div className="flex flex-col gap-8 w-full max-w-md">
                <Progress size="sm" value={50} />
                <Progress size="md" value={50} />
                <Progress size="lg" value={50} />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="progress-variants-labels" title="Label Positions" description="Labels can be placed in different positions relative to the bar.">
            <ComponentPreview
              title="Label Placement"
              code={`<Progress showLabel labelPosition="outside-end" value={75} />\n<Progress showLabel labelPosition="outside-top" value={75} />\n<Progress showLabel labelPosition="inside" size="lg" value={75} />`}
            >
              <div className="flex flex-col gap-8 w-full max-w-md">
                <Progress showLabel labelPosition="outside-end" value={75} />
                <Progress showLabel labelPosition="outside-top" value={75} />
                <Progress showLabel labelPosition="inside" size="lg" value={75} />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="progress-variants-indeterminate" title="Indeterminate" description="Use for tasks where the duration is unknown.">
            <ComponentPreview
              title="Loading State"
              code={`<Progress indeterminate />`}
            >
              <div className="w-full max-w-md">
                <Progress indeterminate variant="secondary" />
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <SettingsIcon size={16} />,
      content: (
        <DocSection id="progress-playground" title="Interactive Playground" description="Customize the progress bar variants, sizes, and behavior in real-time.">
          <ProgressPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="progress-mock" title="Dynamic Integration" description="Example of how to implement dynamic progress tracking for file uploads or multi-step processes.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  taskId: "async-001",
                  overallProgress: 75,
                  subtasks: [
                    { id: "1", name: "Data Validation", status: "completed", progress: 100 },
                    { id: "2", name: "Image Optimization", status: "processing", progress: 65 },
                    { id: "3", name: "CDN Propagation", status: "pending", progress: 0 }
                  ]
                }, null, 2)}
              />
              <CodeSnippet
                label="Dynamic Implementation"
                code={`const TaskProgress = ({ data }) => (\n  <div className="flex flex-col gap-6">\n    <div className="space-y-1">\n      <p className="text-xs font-bold uppercase text-core-circle-text-muted">Overall Progress</p>\n      <Progress value={data.overallProgress} variant="primary" showLabel />\n    </div>\n    \n    <div className="flex flex-col gap-4 mt-2">\n      {data.subtasks.map((task) => (\n        <div key={task.id} className="space-y-2">\n          <div className="flex justify-between text-xs">\n            <span className="font-medium">{task.name}</span>\n            <span className="text-core-circle-text-muted capitalize">{task.status}</span>\n          </div>\n          <Progress \n            value={task.progress} \n            size="sm"\n            variant={task.status === 'completed' ? 'success' : 'secondary'} \n          />\n        </div>\n      ))}\n    </div>\n  </div>\n);`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s.title}>{headerContent.title}</h1>
        <p className={s.description}>{headerContent.description}</p>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
