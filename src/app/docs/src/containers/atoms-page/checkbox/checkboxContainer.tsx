'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Checkbox, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { CheckboxPlayground } from '../../../components/playground/checkbox/checkboxPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import {
  CHECKBOX_PROPS_DATA
} from '../../../constants/atoms-page/checkbox/checkboxConstants';
import { CheckboxContainerProps } from '../../../interface/containers/atoms/checkbox.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function CheckboxContainer({ sections, headerContent, breadcrumbItems }: CheckboxContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <CheckboxPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="checkbox-variants" title="Visual Variants" description="Choose between different visual styles.">
              <div className="flex flex-col gap-8">
                {sections.find(s => s.id === 'variants')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'outline' && <Checkbox variant="outline" label="Default Outline" />}
                    {preview.id === 'solid' && <Checkbox variant="solid" label="Solid Variant" defaultChecked />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="checkbox-sizes" title="Sizes" description="Available in three sizes to fit your layout.">
              <ComponentPreview title="Sizes Gallery" code={sections.find(s => s.id === 'sizes')?.previews?.[0].code}>
                <div className="flex flex-col gap-4">
                  <Checkbox size="sm" label="Small Checkbox" />
                  <Checkbox size="md" label="Medium Checkbox" />
                  <Checkbox size="lg" label="Large Checkbox" />
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="checkbox-states" title="States" description="Support for different interaction and feedback states.">
              <ComponentPreview title="Interaction States" code={sections.find(s => s.id === 'states')?.previews?.[0].code}>
                <div className="flex flex-col gap-6">
                  <Checkbox label="Disabled Checkbox" disabled />
                  <Checkbox label="Error State" error="This field is required" />
                  <Checkbox label="Indeterminate State" indeterminate />
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
          <DocSection id="checkbox-intro" title="Introduction" description="Checkbox allows users to select one or more items from a set. It can also be used as a standalone toggle for binary options. Supports various sizes, custom labels, and validation states.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Checkbox } from '@core-circle/ui';\n\n<Checkbox label="I agree to terms" variant="outline" />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={CHECKBOX_PROPS_DATA} />
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
          <DocSection id="checkbox-mock" title="Dynamic Integration" description="Example of mapping dynamic list data to a group of checkboxes.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  items: [
                    { id: "pref_1", text: "Email Notifications", isLocked: false, style: "outline" },
                    { id: "pref_2", text: "SMS Alerts", isLocked: true, style: "solid" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const CheckboxGroup = ({ items }) => {\n  return (\n    <div className="space-y-4">\n      {items.map(item => (\n        <Checkbox \n          key={item.id}\n          label={item.text}\n          variant={item.style}\n          disabled={item.isLocked}\n          onChange={(checked) => handleUpdate(item.id, checked)}\n        />\n      ))}\n    </div>\n  );\n};`}
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
