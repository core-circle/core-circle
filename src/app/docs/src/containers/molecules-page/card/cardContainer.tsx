'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Card } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { CardPlayground } from '../../../components/playground/card/cardPlayground';
import { textInputPageStyles as s } from '../../atoms-page/text-input/text-input.styles';
import {
  CARD_PROPS_DATA
} from '../../../constants/molecules-page/card/cardConstants';
import { CardContainerProps } from '../../../interface/containers/molecules/card.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function CardContainer({ sections, headerContent, breadcrumbItems }: CardContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <CardPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="card-variants" title="Visual Variants" description="Different card styles for different contextual needs.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'outline' && (
                      <Card variant="outline">
                        <Card.Body>Outline variant for subtle grouping.</Card.Body>
                      </Card>
                    )}
                    {preview.id === 'shadow' && (
                      <Card variant="shadow">
                        <Card.Body>Shadow variant for elevated content.</Card.Body>
                      </Card>
                    )}
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
          <DocSection id="card-intro" title="Introduction" description="Cards are used to group related content together. By using sub-components like Header, Body, and Footer, you can create a wide variety of card layouts while maintaining visual consistency.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Compound Pattern"
                code={`<Card>\n  <Card.Header divider>\n    <h3>Title</h3>\n  </Card.Header>\n  <Card.Body>\n    Content goes here...\n  </Card.Body>\n  <Card.Footer divider>\n    <Button>Action</Button>\n  </Card.Footer>\n</Card>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Card Props</h4>
                <PropsTable data={CARD_PROPS_DATA} />
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
