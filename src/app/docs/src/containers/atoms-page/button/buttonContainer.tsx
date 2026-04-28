'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Breadcrumb, Tabs } from '@core-circle/ui';
import { Mail, ArrowRight, SettingsIcon, Rotate, Clock, Bell, Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { ButtonPlayground } from '../../../components/playground/button/buttonPlayground';
import { buttonPageStyles as s } from './button.styles';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import {
  BUTTON_PROPS_DATA
} from '../../../constants/atoms-page/button/buttonConstants';
import { ButtonContainerProps } from '../../../interface/containers/atoms/button.types';

export default function ButtonContainer({ sections, headerContent, breadcrumbItems }: ButtonContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <ButtonPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="button-color-variants" title="Color Variants" description="Different visual styles for different semantic purposes.">
              <ComponentPreview title="Variants" code={section?.previews?.[0].code}>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="button-sizes" title="Sizes" description="Four standardized sizes for different layout requirements.">
              <ComponentPreview title="Sizes" code={sections.find(s => s.id === 'sizes')?.previews?.[0].code}>
                <div className="flex flex-wrap items-end gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" variant="outline"><Bell size={18} /></Button>
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="button-icons" title="Icons" description="Buttons can include icons at the start or end of the label.">
              <ComponentPreview title="Icons" code={sections.find(s => s.id === 'icons')?.previews?.[0].code}>
                <div className="flex flex-wrap gap-4">
                  <Button startIcon={<Mail size={18} />}>Email</Button>
                  <Button variant="secondary" startIcon={<SettingsIcon size={18} />}>Continue</Button>
                  <Button variant="ghost" endIcon={<ArrowRight size={18} />}>Settings</Button>
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="button-loading" title="Loading States" description="Interactive loading indicators for async actions.">
              <ComponentPreview title="Loading" code={sections.find(s => s.id === 'loading')?.previews?.[0].code}>
                <div className="flex flex-wrap gap-4">
                  <Button loading>Default Loader</Button>
                  <Button variant="secondary" loading startLoadingIcon={<Rotate size={16} />}>Custom Start Loader</Button>
                  <Button variant="warning" loading endLoadingIcon={<Clock size={16} />}>Custom End Loader</Button>
                </div>
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
          <DocSection id="button-intro" title="Introduction" description="Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Button } from '@core-circle/ui';\n\n<Button variant="primary">\n  Click Me\n</Button>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={BUTTON_PROPS_DATA} />
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
      content: getSectionContent('variants')
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: getSectionContent('playground')
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="button-mock" title="Enterprise Integration" description="Example of how to consume dynamic button configurations from an API.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "btn_123",
                  label: "Upgrade Plan",
                  style: {
                    variant: "primary",
                    size: "lg",
                    fullWidth: true
                  },
                  action: {
                    type: "NAVIGATE",
                    payload: "/subscribe"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicButton = ({ data }) => {\n  return (\n    <Button\n      variant={data.style.variant}\n      size={data.style.size}\n      fullWidth={data.style.fullWidth}\n      onClick={() => handleAction(data.action)}\n    >\n      {data.label}\n    </Button>\n  );\n};`}
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
