'use client';

import React from 'react';
import Link from 'next/link';
import { RichText, Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { RichTextPlayground } from '../../../components/playground/rich-text/rich-textPlayground';
import { richTextPageStyles as s } from './rich-text.styles';
import { RICHTEXT_PROPS_DATA } from '../../../constants/atoms-page/rich-text/richTextConstants';

export default function RichTextContainer({ headerContent, breadcrumbItems }: any) {
  const getSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'playground':
        return <RichTextPlayground />;
      case 'variants': {
        const sampleHtml = `<h2>Design Principles</h2><p>Core Circle is built on three pillars:</p><ul><li>Consistency</li><li>Scalability</li><li>Accessibility</li></ul>`;
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="richtext-sizes" title="Size Scales" description="Adjust the overall scale of the rendered content to fit different contexts.">
              <ComponentPreview title="Sizes" code={`<RichText size="sm" content="..." />\n<RichText size="base" content="..." />\n<RichText size="lg" content="..." />`}>
                <div className="flex flex-col gap-12 w-full">
                  <div className="p-4 border rounded-lg bg-slate-50">
                    <span className="text-xs font-bold text-slate-400 mb-2 block uppercase tracking-widest">Small Scale</span>
                    <RichText size="sm" content={sampleHtml} />
                  </div>
                  <div className="p-4 border rounded-lg">
                    <span className="text-xs font-bold text-slate-400 mb-2 block uppercase tracking-widest">Base Scale</span>
                    <RichText size="base" content={sampleHtml} />
                  </div>
                </div>
              </ComponentPreview>
            </DocSection>
          </div>
        );
      }
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
          <DocSection id="richtext-intro" title="Introduction" description="RichText allows you to safely render HTML strings while automatically applying Core Circle's standardized typography and layout styles.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { RichText } from '@core-circle/ui';\n\n<RichText content="<h1>Hello</h1><p>Description</p>" />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={RICHTEXT_PROPS_DATA} />
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
          <DocSection id="richtext-mock" title="CMS Integration" description="Example of how to consume and render dynamic HTML content from a headless CMS.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="CMS Payload"
                code={JSON.stringify({
                  id: "post_456",
                  title: "Release Notes v2.0",
                  body_html: "<h2>What's New</h2><ul><li>Performance improvements</li><li>Bug fixes</li></ul>"
                }, null, 2)}
              />

              <CodeSnippet
                label="Rendering Content"
                code={`const PostBody = ({ post }) => {\n  return (\n    <article className="max-w-prose">\n      <Typography variant="h1">{post.title}</Typography>\n      <RichText content={post.body_html} size="lg" />\n    </article>\n  );\n};`}
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
