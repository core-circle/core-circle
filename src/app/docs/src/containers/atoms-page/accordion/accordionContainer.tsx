'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Accordion } from '@core-circle/ui';
import { Info, Image, CodeIcon, SettingsIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { accordionPageStyles as s } from './accordion.styles';
import {
  ACCORDION_PROPS_DATA,
  ACCORDION_SAMPLE_ITEMS,
} from '../../../constants/atoms-page/accordion/accordionConstants';
import { AccordionPlayground } from '../../../components/playground/accordion/AccordionPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { AccordionContainerProps } from '../../../interface/containers/atoms/accordion.types';

export default function AccordionContainer({
  headerContent,
  breadcrumbItems
}: AccordionContainerProps) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="accordion-usage" title="Usage" description="Import the Accordion component and provide an array of items. Each item requires a unique ID, a title, and content.">
            <CodeSnippet
              label="Basic Usage"
              code={`import { Accordion } from '@core-circle/ui';\n\nconst items = [\n  { id: '1', title: 'Section 1', content: 'Content 1' },\n  { id: '2', title: 'Section 2', content: 'Content 2' }\n];\n\n<Accordion items={items} />`}
            />
          </DocSection>

          <DocSection id="accordion-props" title="Properties" description="Explore the available props for the Accordion component.">
            <PropsTable data={ACCORDION_PROPS_DATA} />
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
          <DocSection id="accordion-variants-bordered" title="Bordered" description="The default style with a solid border and internal dividers.">
            <ComponentPreview
              title="Bordered Style"
              code={`<Accordion \n  items={items} \n  variant="bordered" \n  defaultValue="1" \n/>`}
            >
              <div className="w-full">
                <Accordion items={ACCORDION_SAMPLE_ITEMS} variant="bordered" defaultValue="1" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="accordion-variants-separated" title="Separated" description="Items are displayed as individual cards with gaps between them.">
            <ComponentPreview
              title="Separated Style"
              code={`<Accordion \n  items={items} \n  variant="separated" \n  defaultValue="1" \n/>`}
            >
              <div className="w-full">
                <Accordion items={ACCORDION_SAMPLE_ITEMS} variant="separated" defaultValue="1" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="accordion-variants-ghost" title="Ghost" description="A minimal style without outer borders, useful for embedding in other containers.">
            <ComponentPreview
              title="Ghost Style"
              code={`<Accordion \n  items={items} \n  variant="ghost" \n  defaultValue="1" \n/>`}
            >
              <div className="w-full">
                <Accordion items={ACCORDION_SAMPLE_ITEMS} variant="ghost" defaultValue="1" />
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
        <DocSection id="accordion-playground" title="Interactive Playground" description="Customize the accordion variants, sizes, and behavior in real-time.">
          <AccordionPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="accordion-mock" title="API Integration" description="Example of how to render an accordion dynamically from an API response.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  sections: [
                    { id: "billing", title: "Billing Information", content: "..." },
                    { id: "security", title: "Security Settings", content: "..." }
                  ],
                  config: {
                    variant: "separated",
                    type: "multiple"
                  }
                }, null, 2)}
              />
              <CodeSnippet
                label="Implementation"
                code={`const MyAccordion = ({ data }) => (\n  <Accordion \n    items={data.sections} \n    variant={data.config.variant} \n    type={data.config.type} \n  />\n);`}
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
