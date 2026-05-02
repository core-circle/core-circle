'use client';

import React from 'react';
import Link from 'next/link';
import { Accordion, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { AccordionPlayground } from '../../../components/playground/accordion/AccordionPlayground';
import { textInputPageStyles as s } from '../../atoms-page/text-input/text-input.styles';
import {
  ACCORDION_PROPS_DATA
} from '../../../constants/molecules-page/accordion/accordionConstants';
import { AccordionContainerProps } from '../../../interface/containers/molecules/accordion.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function AccordionContainer({ sections, headerContent, breadcrumbItems }: AccordionContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <AccordionPlayground />;
      case 'compound':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="accordion-basic" title="Basic Usage" description="Building an accordion with triggers and content.">
              <ComponentPreview title="Simple Accordion" code={section.previews?.[0].code}>
                <Accordion type="single">
                  <Accordion.Item value="1">
                    <Accordion.Trigger>What is this library?</Accordion.Trigger>
                    <Accordion.Content>Core Circle is a high-performance UI library.</Accordion.Content>
                  </Accordion.Item>
                </Accordion>
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
          <DocSection id="accordion-intro" title="Introduction" description="Accordions are useful for displaying collapsible content sections. Our compound component pattern gives you full control over the trigger and content areas.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Compound Structure"
                code={`<Accordion type="single">\n  <Accordion.Item value="item-1">\n    <Accordion.Trigger>Title</Accordion.Trigger>\n    <Accordion.Content>Content goes here...</Accordion.Content>\n  </Accordion.Item>\n</Accordion>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={ACCORDION_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'compound',
      label: 'Structure',
      icon: <Layers size={16} />,
      content: getSectionContent('compound')
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
