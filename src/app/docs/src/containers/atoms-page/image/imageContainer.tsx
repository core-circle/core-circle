'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Image, AspectRatio, Typography } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ImagePlayground } from '../../../components/playground/image/imagePlayground';
import { buttonPageStyles as s } from '../button/button.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export default function ImageContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="image-intro" title="Introduction" description="The Image component is a robust wrapper around the native <img> element. It provides built-in handling for loading states (shimmer), error fallbacks, and standardized corner rounding.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Image } from '@core-circle/ui';\n\n<Image src="..." alt="..." rounded="md" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={[
                  { name: 'src', type: 'string', defaultValue: '-', description: 'URL of the image' },
                  { name: 'fit', type: 'cover | contain | fill', defaultValue: 'cover', description: 'Object fit property' },
                  { name: 'rounded', type: 'none | sm | md | lg | xl | full', defaultValue: 'none', description: 'Radius' },
                  { name: 'fallback', type: 'ReactNode', defaultValue: '-', description: 'Custom error content' },
                ]} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: DOC_TEXT.COMMON.VARIANTS,
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="image-rounding" title="Border Radius" description="standardized rounding options to match the design system.">
            <ComponentPreview 
              title="Rounding"
              code={`<Image rounded="md" ... />\n<Image rounded="xl" ... />\n<Image rounded="full" ... />`}
            >
              <div className="flex items-center gap-8">
                <Image 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200" 
                  width={100} 
                  height={100} 
                  rounded="md" 
                />
                <Image 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200" 
                  width={100} 
                  height={100} 
                  rounded="xl" 
                />
                <Image 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200" 
                  width={100} 
                  height={100} 
                  rounded="full" 
                />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="image-layout" title="Layout Integration" description="Using Image with AspectRatio for layout stability.">
            <ComponentPreview 
              title="Aspect Ratio"
              code={`<AspectRatio ratio={16/9}>\n  <Image src="..." fit="cover" />\n</AspectRatio>`}
            >
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-2">
                   <span className="text-xs font-medium text-core-circle-text-muted">16:9 Landscape</span>
                   <AspectRatio ratio={16/9}>
                     <Image 
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400" 
                        rounded="lg" 
                     />
                   </AspectRatio>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-xs font-medium text-core-circle-text-muted">1:1 Square</span>
                   <AspectRatio ratio={1/1}>
                     <Image 
                        src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400" 
                        rounded="lg" 
                     />
                   </AspectRatio>
                </div>
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
      content: <ImagePlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="image-mock" title="Dynamic Media Gallery" description="Example of how to render images from a headless CMS with dynamic optimization.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Media API Response"
                code={JSON.stringify({
                  id: "img_432",
                  urls: {
                    original: "https://example.com/main.jpg",
                    thumbnail: "https://example.com/thumb.jpg",
                    shimmer: "data:image/svg+xml;..."
                  },
                  metadata: {
                    alt: "Forest landscape",
                    ratio: 1.5
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Gallery Implementation"
                code={`const GalleryItem = ({ image }) => {\n  return (\n    <AspectRatio ratio={image.metadata.ratio}>\n      <Image \n        src={image.urls.original} \n        alt={image.metadata.alt} \n        rounded="lg"\n      />\n    </AspectRatio>\n  );\n};`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <Typography variant="h1" className={s?.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s?.description}>{headerContent?.description}</Typography>
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
