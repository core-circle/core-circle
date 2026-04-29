'use client';

import React from 'react';
import Link from 'next/link';
import { Typography, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TypographyPlayground } from '../../../components/playground/typography/typographyPlayground';
import { typographyPageStyles as s } from './typography.styles';
import { TYPOGRAPHY_PROPS_DATA } from '../../../constants/atoms-page/typography/typographyConstants';

export default function TypographyContainer({ headerContent, breadcrumbItems }: any) {
  const getSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'playground':
        return <TypographyPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="typography-headings" title="Headings" description="A set of standard heading levels for hierarchical content.">
              <ComponentPreview title="Headings" code={`<Typography variant="h1">Heading 1</Typography>\n<Typography variant="h2">Heading 2</Typography>\n<Typography variant="h3">Heading 3</Typography>`}>
                <div className="flex flex-col gap-4">
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="typography-utility" title="Utility Variants" description="Specialized text styles for common use cases.">
              <ComponentPreview title="Utility Variants" code={`<Typography variant="lead">Lead paragraph</Typography>\n<Typography variant="blockquote">"Design is how it works."</Typography>\n<Typography variant="code">const system = "Core Circle";</Typography>`}>
                <div className="flex flex-col gap-6">
                  <Typography variant="lead">This is a lead paragraph that stands out.</Typography>
                  <Typography variant="blockquote">"Design is not just what it looks like and feels like. Design is how it works."</Typography>
                  <Typography>Use the <Typography variant="code">Typography</Typography> component for all text elements.</Typography>
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
          <DocSection id="typography-intro" title="Introduction" description="Typography is the foundation of the Core Circle design system. It ensures consistent font sizing, spacing, and hierarchy across the entire platform.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Typography } from '@core-circle/ui';\n\n<Typography variant="h1">Hello World</Typography>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={TYPOGRAPHY_PROPS_DATA} />
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
          <DocSection id="typography-mock" title="Dynamic Content Integration" description="Example of how to render text dynamically based on API responses.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="API Response"
                code={JSON.stringify({
                  sections: [
                    { type: "h2", text: "Introduction" },
                    { type: "p", text: "This content is loaded from a CMS." },
                    { type: "blockquote", text: "Quality is not an act, it is a habit." }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Rendering"
                code={`const ContentRenderer = ({ data }) => {\n  return (\n    <div className="space-y-4">\n      {data.sections.map((item, index) => (\n        <Typography key={index} variant={item.type}>\n          {item.text}\n        </Typography>\n      ))}\n    </div>\n  );\n};`}
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
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
