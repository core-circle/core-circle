'use client';

import React from 'react';
import Link from 'next/link';
import { Stepper, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { StepperPlayground } from '../../../components/playground/stepper/stepperPlayground';
import { textInputPageStyles as s } from '../../atoms-page/text-input/text-input.styles';
import {
  STEPPER_PROPS_DATA
} from '../../../constants/molecules-page/stepper/stepperConstants';
import { StepperContainerProps } from '../../../interface/containers/molecules/stepper.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

const demoSteps = [
  { title: 'Information', description: 'Enter details' },
  { title: 'Payment', description: 'Pay secure' },
  { title: 'Success', description: 'Done' },
];

export default function StepperContainer({ sections, headerContent, breadcrumbItems }: StepperContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <StepperPlayground />;
      case 'orientations':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="stepper-horiz" title="Horizontal Layout" description="The default layout, perfect for wide content areas.">
              <ComponentPreview title="Horizontal Stepper" code={section.previews?.[0].code}>
                <Stepper orientation="horizontal" activeStep={1} steps={demoSteps} />
              </ComponentPreview>
            </DocSection>
            <DocSection id="stepper-vert" title="Vertical Layout" description="Ideal for sidebars or narrow containers.">
              <ComponentPreview title="Vertical Stepper" code={section.previews?.[1].code}>
                <Stepper orientation="vertical" activeStep={1} steps={demoSteps} />
              </ComponentPreview>
            </DocSection>
          </div>
        );
      default:
        return null;
    }
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="stepper-intro" title="Introduction" description="The Stepper component provides a visual guide for multi-step processes. It clearly indicates completed, active, and upcoming stages.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Basic Usage"
                code={`import { Stepper } from '@core-circle/ui';\n\n<Stepper \n  activeStep={1} \n  steps={[\n    { title: 'Login' },\n    { title: 'Pay' },\n    { title: 'Done' }\n  ]} \n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={STEPPER_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Orientations',
      icon: <Layers size={16} />,
      content: getSectionContent('orientations')
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: getSectionContent('playground')
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
