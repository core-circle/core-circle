'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, RadioButton, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { RadioButtonPlayground } from '../../../components/playground/radio-button/radioButtonPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import {
  RADIO_BUTTON_PROPS_DATA
} from '../../../constants/atoms-page/radio-button/radioButtonConstants';
import { RadioButtonContainerProps } from '../../../interface/containers/atoms/radio-button.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function RadioButtonContainer({ sections, headerContent, breadcrumbItems }: RadioButtonContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <RadioButtonPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="radio-variants" title="Visual Variants" description="Choose between different visual styles.">
              <div className="flex flex-col gap-8">
                {sections.find(s => s.id === 'variants')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'outline' && <RadioButton variant="outline" label="Default Outline" />}
                    {preview.id === 'solid' && <RadioButton variant="solid" label="Solid Variant" defaultChecked />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="radio-groups" title="Radio Groups" description="Group radio buttons by using the same 'name' attribute for exclusive selection.">
              <ComponentPreview title="Exclusive Selection" code={sections.find(s => s.id === 'groups')?.previews?.[0].code}>
                <div className="flex flex-col gap-3">
                  <RadioButton name="fruit" value="apple" label="Apple" defaultChecked />
                  <RadioButton name="fruit" value="banana" label="Banana" />
                  <RadioButton name="fruit" value="cherry" label="Cherry" />
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="radio-sizes" title="Sizes" description="Available in three sizes to fit your layout.">
              <ComponentPreview title="Sizes Gallery" code={sections.find(s => s.id === 'sizes')?.previews?.[0].code}>
                <div className="flex flex-col gap-4">
                  <RadioButton size="sm" label="Small Radio" name="s" />
                  <RadioButton size="md" label="Medium Radio" name="m" />
                  <RadioButton size="lg" label="Large Radio" name="l" />
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
          <DocSection id="radio-intro" title="Introduction" description="RadioButton allows users to select one option from a predefined set of mutually exclusive choices. It ensures that only one item in a group can be active at a time.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { RadioButton } from '@core-circle/ui';\n\n<RadioButton name="plan" value="pro" label="Pro Plan" />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={RADIO_BUTTON_PROPS_DATA} />
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
          <DocSection id="radio-mock" title="Dynamic Integration" description="Example of generating radio button groups from dynamic configuration objects.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  group: "plan_selection",
                  options: [
                    { id: "p1", value: "monthly", text: "Monthly Plan", style: "outline" },
                    { id: "p2", value: "yearly", text: "Yearly Plan", style: "solid" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicRadioGroup = ({ options, groupName }) => {\n  return (\n    <div className="flex flex-col gap-3">\n      {options.map(opt => (\n        <RadioButton \n          key={opt.id}\n          name={groupName}\n          value={opt.value}\n          label={opt.text}\n          variant={opt.style}\n          onChange={(val) => console.log('Selected:', val)}\n        />\n      ))}\n    </div>\n  );\n};`}
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
