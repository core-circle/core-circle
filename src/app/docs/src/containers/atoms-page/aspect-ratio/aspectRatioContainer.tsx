'use client';

import React from 'react';
import Link from 'next/link';
import { AspectRatio, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AspectRatioPlayground } from '../../../components/playground/aspect-ratio/aspectRatioPlayground';
import { buttonPageStyles as s } from '../button/button.styles';

export default function AspectRatioContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="ar-intro" title="Introduction" description="The AspectRatio component ensures that its children maintain a specific width-to-height ratio. This is essential for preventing layout shifts when loading media like images or videos.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { AspectRatio } from '@core-circle/ui';\n\n<AspectRatio ratio={16 / 9}>\n  <img src="..." />\n</AspectRatio>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={[
                  { name: 'ratio', type: 'number', defaultValue: '1.77 (16/9)', description: 'The width / height ratio' },
                  { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'The content to be constrained' },
                ]} />
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
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="ar-common" title="Common Ratios" description="Standard aspect ratios for modern interfaces.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview 
                title="16:9 (Widescreen)"
                code={`<AspectRatio ratio={16 / 9}>\n  <img src="..." className="object-cover" />\n</AspectRatio>`}
              >
                <div className="w-full overflow-hidden rounded-xl border">
                  <AspectRatio ratio={16 / 9}>
                    <img src="https://images.unsplash.com/photo-1588345921523-c2dcd57f48a4?w=800" className="object-cover w-full h-full" />
                  </AspectRatio>
                </div>
              </ComponentPreview>

              <ComponentPreview 
                title="1:1 (Square)"
                code={`<AspectRatio ratio={1}>\n  <img src="..." className="object-cover" />\n</AspectRatio>`}
              >
                <div className="w-full max-w-[200px] overflow-hidden rounded-xl border mx-auto">
                  <AspectRatio ratio={1}>
                    <img src="https://images.unsplash.com/photo-1588345921523-c2dcd57f48a4?w=400" className="object-cover w-full h-full" />
                  </AspectRatio>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="ar-video" title="Video Placeholders" description="Keep video players consistent while they load.">
            <ComponentPreview 
              title="YouTube Style"
              code={`<AspectRatio ratio={16 / 9}>\n  <iframe src="..." />\n</AspectRatio>`}
            >
              <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-core-circle-floating bg-slate-100 flex items-center justify-center border">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex flex-col items-center gap-2 text-core-circle-text-muted">
                    <Play size={40} />
                    <span className="font-bold">Video Player Mock</span>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: <AspectRatioPlayground />
    }
  ];

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s?.title}>{headerContent?.title}</h1>
        <p className={s?.description}>{headerContent?.description}</p>
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
