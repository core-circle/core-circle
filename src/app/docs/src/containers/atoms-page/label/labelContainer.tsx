'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Label, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { LabelPlayground } from '../../../components/playground/label/labelPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import {
  LABEL_PROPS_DATA
} from '../../../constants/atoms-page/label/labelConstants';
import { LabelContainerProps } from '../../../interface/containers/atoms/label.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function LabelContainer({ sections, headerContent, breadcrumbItems }: LabelContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <LabelPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="label-variants" title="Visual Variants" description="Labels come in different semantic variants for different contexts.">
              <div className="flex flex-wrap gap-6">
                {sections.find(s => s.id === 'variants')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    <Label variant={preview.id as any}>
                      {preview.id.charAt(0).toUpperCase() + preview.id.slice(1)} Label
                    </Label>
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="label-sizes" title="Standardized Sizes" description="Standardized sizes from extra small to 2xl.">
              <div className="flex flex-wrap gap-6">
                {sections.find(s => s.id === 'sizes')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    <Label size={preview.id as any}>
                      Size {preview.id.toUpperCase()}
                    </Label>
                  </ComponentPreview>
                ))}
              </div>
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
          <DocSection id="label-intro" title="Introduction" description="Label is a primitive component used to provide text labels for form controls and other UI elements. It supports semantic variants and a full typography scale.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Label } from '@core-circle/ui';\n\n<Label size="sm" weight="medium">User Name</Label>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={LABEL_PROPS_DATA} />
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
          <DocSection id="label-mock" title="Dynamic Integration" description="Example of generating form labels dynamically based on field metadata.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "field_101",
                  displayName: "Email Address",
                  isRequired: true,
                  style: {
                    size: "sm",
                    uppercase: true
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const FormLabel = ({ field }) => {\n  return (\n    <Label \n      size={field.style.size}\n      uppercase={field.style.uppercase}\n    >\n      {field.displayName}\n      {field.isRequired && <span className="text-red-500 ml-1">*</span>}\n    </Label>\n  );\n};`}
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
