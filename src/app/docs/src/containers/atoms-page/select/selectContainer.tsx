'use client';

import React from 'react';
import Link from 'next/link';
import { Select, Breadcrumb, Tabs } from '@core-circle/ui';
import { Filter, Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { SelectPlayground } from '../../../components/playground/select/selectPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import {
  SELECT_PROPS_DATA
} from '../../../constants/atoms-page/select/selectConstants';
import { SelectContainerProps } from '../../../interface/containers/atoms/select.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function SelectContainer({ sections, headerContent, breadcrumbItems }: SelectContainerProps) {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <SelectPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="select-variants" title="Visual Variants" description="Multiple styles to match your design system.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'material-animated' && <Select variant="material-animated" label="Select Category" options={options} placeholder="Choose a category" fullWidth />}
                    {preview.id === 'outline' && <Select variant="outline" label="Choose Fruit" options={options} placeholder="Pick a fruit..." fullWidth />}
                    {preview.id === 'standard' && <Select variant="standard" label="Select Theme" options={options} fullWidth />}
                    {preview.id === 'ghost' && <Select variant="ghost" options={options} fullWidth />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="select-icons" title="Icons & Prefixes" description="Enhance selection context with start icons and text prefixes.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.find(s => s.id === 'icons')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'start-icon' && <Select startIcon={<Filter size={18} />} options={options} fullWidth />}
                    {preview.id === 'prefix' && <Select prefix="ID:" options={options} fullWidth />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="select-validation" title="Validation States" description="Visual feedback for errors and help text.">
              <ComponentPreview title="Error State" code={sections.find(s => s.id === 'validation')?.previews?.[0].code}>
                <Select error="This field is required" options={options} fullWidth />
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
          <DocSection id="select-intro" title="Introduction" description="Select allows users to choose a single option from a collapsible list. It maintains visual consistency with the TextInput component and supports various interaction styles.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Select } from '@core-circle/ui';\n\n<Select \n  label="Category" \n  options={[\n    { value: '1', label: 'Option 1' },\n    { value: '2', label: 'Option 2' }\n  ]} \n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={SELECT_PROPS_DATA} />
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
        <div className="max-w-5xl">
          <DocSection id="select-mock" title="Dynamic Integration" description="Example of handling dynamic select options and styles from an external data source.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "select_789",
                  title: "Choose Category",
                  ui: {
                    variant: "outline",
                    fullWidth: true
                  },
                  items: [
                    { id: "1", name: "Design" },
                    { id: "2", name: "Engineering" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicSelect = ({ data }) => {\n  return (\n    <Select\n      label={data.title}\n      options={data.items.map(i => ({\n        value: i.id,\n        label: i.name\n      }))}\n      variant={data.ui.variant}\n      fullWidth={data.ui.fullWidth}\n    />\n  );\n};`}
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
