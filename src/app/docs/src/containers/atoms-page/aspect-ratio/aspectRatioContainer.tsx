'use client';

import { AspectRatioContainerProps } from '../../../interface/containers/atoms/aspect-ratio.types';
import React from 'react';
import Link from 'next/link';
import { AspectRatio, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Sparkles, 
  Terminal, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AspectRatioPlayground } from '../../../components/playground/aspect-ratio/aspectRatioPlayground';
import { aspectRatioPageStyles as s } from './aspect-ratio.styles';
import { ASPECT_RATIO_PROPS_DATA } from '../../../constants/atoms-page/aspect-ratio/aspectRatioConstants';

export default function AspectRatioContainer({
  headerContent,
  breadcrumbItems
}: AspectRatioContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. 4K Cinematic Video Player */}
          <DocSection
            id="theming-cinematic-video"
            title="1. 4K Ultra HD Cinematic Video Player Theme (16:9)"
            description="Bordered high-definition 16:9 container designed for embedded video feeds and media streaming."
          >
            <ComponentPreview
              title="16:9 Cinematic Video Container"
              code={`<div className="w-full max-w-xl mx-auto">
  <AspectRatio ratio="16:9" variant="bordered">
    <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full">
      <Play size={48} className="text-core-circle-primary hover:scale-110 transition-transform cursor-pointer" />
      <span className="text-xs font-mono font-bold text-slate-300 mt-2">4K UHD STREAM (60 FPS)</span>
    </div>
  </AspectRatio>
</div>`}
            >
              <div className="w-full max-w-xl mx-auto">
                <AspectRatio ratio="16:9" variant="bordered">
                  <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full">
                    <Play size={48} className="text-core-circle-primary hover:scale-110 transition-transform cursor-pointer" />
                    <span className="text-xs font-mono font-bold text-slate-300 mt-2">4K UHD STREAM (60 FPS)</span>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Instagram 1:1 Square Grid */}
          <DocSection
            id="theming-instagram-square"
            title="2. Social Media 1:1 Square Photo Grid Theme"
            description="Radiant purple gradient 1:1 square container for product shots and photography feeds."
          >
            <ComponentPreview
              title="1:1 Square Photo Card"
              code={`<div className="w-64 mx-auto">
  <AspectRatio ratio="1:1" variant="gradient">
    <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
      <Sparkles size={32} className="text-purple-500" />
      <span className="font-bold text-sm text-core-circle-text-main mt-2">1:1 Square Product Shot</span>
    </div>
  </AspectRatio>
</div>`}
            >
              <div className="w-64 mx-auto">
                <AspectRatio ratio="1:1" variant="gradient">
                  <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
                    <Sparkles size={32} className="text-purple-500" />
                    <span className="font-bold text-sm text-core-circle-text-main mt-2">1:1 Square Product Shot</span>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Ultra-Wide 21:9 Terminal Monitor */}
          <DocSection
            id="theming-ultrawide-terminal"
            title="3. Ultra-Wide 21:9 Panoramic Telemetry Monitor Theme"
            description="Deep cyber slate 21:9 container with glowing emerald borders for wide server telemetry displays."
          >
            <ComponentPreview
              title="21:9 Panoramic Terminal"
              code={`<div className="w-full max-w-2xl mx-auto">
  <AspectRatio ratio="21:9" variant="glow">
    <div className="bg-slate-50 text-emerald-600 font-mono text-xs flex items-center justify-between p-6 h-full w-full">
      <div>
        <p className="font-bold text-sm">21:9 Panoramic Cloud Metrics</p>
        <p className="text-slate-400 mt-1">Cluster Nodes: 128 • CPU Load: 18.2% • Ingress: 42Gbps</p>
      </div>
      <Badge variant="success" size="sm" shape="pill">Nominal</Badge>
    </div>
  </AspectRatio>
</div>`}
            >
              <div className="w-full max-w-2xl mx-auto">
                <AspectRatio ratio="21:9" variant="glow">
                  <div className="bg-slate-50 text-emerald-600 font-mono text-xs flex items-center justify-between p-6 h-full w-full">
                    <div>
                      <p className="font-bold text-sm">21:9 Panoramic Cloud Metrics</p>
                      <p className="text-slate-400 mt-1">Cluster Nodes: 128 • CPU Load: 18.2% • Ingress: 42Gbps</p>
                    </div>
                    <Badge variant="success" size="sm" shape="pill">Nominal</Badge>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Classic 4:3 Presentation Slide */}
          <DocSection
            id="theming-classic-slide"
            title="4. Classic 4:3 Keynote Presentation Slide Theme"
            description="Frosted glassmorphism 4:3 container for tablet viewports and slide decks."
          >
            <ComponentPreview
              title="4:3 Presentation Slide"
              code={`<div className="w-72 mx-auto">
  <AspectRatio ratio="4:3" variant="glassmorphic">
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center h-full w-full p-4">
      <span className="font-bold text-sm text-blue-950">4:3 Slide Frame</span>
      <p className="text-xs text-blue-700 mt-1 text-center">Tablet & legacy viewport compatibility</p>
    </div>
  </AspectRatio>
</div>`}
            >
              <div className="w-72 mx-auto">
                <AspectRatio ratio="4:3" variant="glassmorphic">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center h-full w-full p-4">
                    <span className="font-bold text-sm text-blue-950">4:3 Slide Frame</span>
                    <p className="text-xs text-blue-700 mt-1 text-center">Tablet & legacy viewport compatibility</p>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Mobile Story 9:16 Feed */}
          <DocSection
            id="theming-mobile-story"
            title="5. Mobile Vertical Video Story Theme (9:16)"
            description="Vertical 9:16 container formatted for mobile shorts and reels."
          >
            <ComponentPreview
              title="9:16 Vertical Reel Frame"
              code={`<div className="w-48 mx-auto">
  <AspectRatio ratio="9:16" variant="dark">
    <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
      <span className="font-bold text-sm text-core-circle-text-main">9:16 Mobile Reel</span>
      <p className="text-xs text-slate-400 mt-1 text-center">Portrait video asset</p>
    </div>
  </AspectRatio>
</div>`}
            >
              <div className="w-48 mx-auto">
                <AspectRatio ratio="9:16" variant="dark">
                  <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
                    <span className="font-bold text-sm text-core-circle-text-main">9:16 Mobile Reel</span>
                    <p className="text-xs text-slate-400 mt-1 text-center">Portrait video asset</p>
                  </div>
                </AspectRatio>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Proportional Presets */}
          <DocSection
            id="aspect-ratio-variants-presets"
            title="1. Ratio Presets (16:9, 4:3, 1:1, 21:9, 9:16)"
            description="Standard aspect ratio presets."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full items-center">
              <AspectRatio ratio="16:9" variant="bordered">
                <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 h-full">16:9</div>
              </AspectRatio>
              <AspectRatio ratio="4:3" variant="bordered">
                <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 h-full">4:3</div>
              </AspectRatio>
              <AspectRatio ratio="1:1" variant="bordered">
                <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 h-full">1:1</div>
              </AspectRatio>
            </div>
          </DocSection>

          {/* 2. Glassmorphic, Gradient & Neon Glow */}
          <DocSection
            id="aspect-ratio-variants-glow"
            title="2. Radiant Gradient & Neon Glow Styles"
            description="Surface halo styling around the proportioned media element."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
              <AspectRatio ratio="16:9" variant="glassmorphic">
                <div className="bg-white/10 flex items-center justify-center font-bold text-xs text-white h-full">Glassmorphic</div>
              </AspectRatio>
              <AspectRatio ratio="16:9" variant="gradient">
                <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-purple-300 h-full">Gradient Border</div>
              </AspectRatio>
              <AspectRatio ratio="16:9" variant="glow">
                <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-emerald-400 h-full">Neon Glow</div>
              </AspectRatio>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="aspect-ratio-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, ratio presets, and live code generator."
        >
          <AspectRatioPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="aspect-ratio-mock-section"
            title="Dynamic Video Player Integration"
            description="Pattern for embedding responsive iframe video players with fixed aspect ratios."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Media Asset Payload"
                code={JSON.stringify({
                  mediaId: "vid_9821c",
                  title: "CoreCircle Component Architect Tutorial",
                  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                  aspectRatio: "16:9",
                  resolution: "3840x2160"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Video Player Component"
                code={`import React from 'react';
import { AspectRatio } from '@core-circle/ui';

export const ResponsiveVideoPlayer = ({ videoUrl, title, ratio = '16:9' }) => {
  return (
    <AspectRatio ratio={ratio} variant="bordered" className="w-full max-w-3xl shadow-xl">
      <iframe
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="aspect-ratio-overview-intro"
            title="Introduction"
            description="The AspectRatio component prevents layout shift (CLS) by locking child media elements (images, videos, iframes, maps) to precise mathematical proportions such as 16:9, 4:3, 1:1, or 21:9 across all responsive viewport dimensions."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { AspectRatio } from '@core-circle/ui';

<AspectRatio ratio="16:9" variant="bordered">
  <img src="/hero.jpg" alt="Hero Banner" />
</AspectRatio>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={ASPECT_RATIO_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
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
