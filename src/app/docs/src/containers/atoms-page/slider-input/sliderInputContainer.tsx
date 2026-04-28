'use client';

import React from 'react';
import Link from 'next/link';
import { SliderInput, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { SliderInputPlayground } from '../../../components/playground/slider-input/SliderInputPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import {
  SLIDER_INPUT_PROPS_DATA
} from '../../../constants/atoms-page/slider-input/sliderInputConstants';
import { SliderInputContainerProps } from '../../../interface/containers/atoms/slider-input.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function SliderInputContainer({ sections, headerContent, breadcrumbItems }: SliderInputContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <SliderInputPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="slider-input-variants" title="Visual Variants" description="Distinct color schemes to represent different states or themes.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'standard' && <SliderInput variant="standard" label="Standard" defaultValue={50} fullWidth />}
                    {preview.id === 'primary' && <SliderInput variant="primary" label="Primary" defaultValue={40} fullWidth />}
                    {preview.id === 'success' && <SliderInput variant="success" label="Success" defaultValue={70} fullWidth />}
                    {preview.id === 'warning' && <SliderInput variant="warning" label="Warning" defaultValue={30} fullWidth />}
                    {preview.id === 'danger' && <SliderInput variant="danger" label="Danger" defaultValue={90} fullWidth />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="slider-input-sizes" title="Sizes" description="Three different track heights and thumb sizes.">
              <ComponentPreview title="Small, Medium, and Large" code={sections.find(s => s.id === 'sizes')?.previews?.[0].code}>
                <div className="grid grid-cols-1 gap-8 w-full">
                  <SliderInput size="sm" label="Small Track" defaultValue={25} fullWidth />
                  <SliderInput size="md" label="Medium Track" defaultValue={50} fullWidth />
                  <SliderInput size="lg" label="Large Track" defaultValue={75} fullWidth />
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="slider-input-value-display" title="Value Display" description="Optionally show the current value and format it as needed.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ComponentPreview title="Default Value Label" code={sections.find(s => s.id === 'value-display')?.previews?.[0].code.split('\n\n')[0]}>
                  <SliderInput label="Volume" showValue defaultValue={30} fullWidth />
                </ComponentPreview>
                <ComponentPreview title="Formatted Values" code={sections.find(s => s.id === 'value-display')?.previews?.[0].code.split('\n\n')[1]}>
                  <SliderInput 
                    label="Price Range" 
                    showValue 
                    formatValue={(val) => `$${val}`} 
                    defaultValue={250} 
                    max={1000} 
                    fullWidth 
                  />
                </ComponentPreview>
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
          <DocSection id="slider-input-intro" title="Introduction" description="SliderInput is a range input component that allows users to select a value from a predefined range. It is ideal for settings like volume, brightness, or numeric filters where precise input is less critical than ease of use.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { SliderInput } from '@core-circle/ui';\n\n<SliderInput \n  label="Volume" \n  defaultValue={50} \n  showValue \n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={SLIDER_INPUT_PROPS_DATA} />
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
          <DocSection id="slider-input-mock" title="Dynamic Integration" description="Example of how to map API or CMS response data to the SliderInput component props.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "setting_789",
                  title: "Brightness Level",
                  min: 0,
                  max: 255,
                  current: 128,
                  ui: {
                    variant: "primary",
                    size: "md"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicSlider = ({ data }) => {\n  return (\n    <SliderInput\n      label={data.title}\n      min={data.min}\n      max={data.max}\n      defaultValue={data.current}\n      variant={data.ui.variant}\n      size={data.ui.size}\n      showValue\n      fullWidth\n    />\n  );\n};`}
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
