'use client';

import React from 'react';
import Link from 'next/link';
import { ColorPicker, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { ColorPickerPlayground } from '../../../components/playground/color-picker/colorPickerPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import {
  COLOR_PICKER_PROPS_DATA
} from '../../../constants/atoms-page/color-picker/colorPickerConstants';
import { ColorPickerContainerProps } from '../../../interface/containers/atoms/color-picker.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function ColorPickerContainer({ sections, headerContent, breadcrumbItems }: ColorPickerContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <ColorPickerPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="cp-variants" title="Visual Variants" description="Different styles for different use cases.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'outline' && <ColorPicker variant="outline" label="Brand Color" value="#3b82f6" />}
                    {preview.id === 'material' && <ColorPicker variant="material" label="Accent Color" value="#10b981" />}
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
          <DocSection id="cp-intro" title="Introduction" description="The ColorPicker component allows users to select colors visually. It leverages the native browser color picker while providing a consistent design system interface.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { ColorPicker } from '@core-circle/ui';\n\n<ColorPicker \n  label="Theme Color" \n  value="#3b82f6" \n  onChange={(e) => console.log(e.target.value)} \n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={COLOR_PICKER_PROPS_DATA} />
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
