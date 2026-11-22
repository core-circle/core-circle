import type { ReactNode } from 'react';
import { AspectRatio, Badge } from '@core-circle/ui';
import { Play, Sparkles } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface AspectRatioThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface AspectRatioVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const ASPECT_RATIO_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'AspectRatio' },
];

export const ASPECT_RATIO_HEADER_CONTENT = {
  title: 'AspectRatio',
  description:
    'A responsive layout container that enforces strict proportional dimensions (16:9, 4:3, 1:1, 21:9) across videos, images, maps, and media embeds.',
};

export const ASPECT_RATIO_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade aspect ratio containers for 4K cinematic video players, Instagram photo feeds, ultra-wide terminal dashboards, and product media heroes.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 10 surface styling variants from gradient borders to frosted glass and cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive aspect ratio playground with live ratio switching, presets, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic media embed and responsive iframe video integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const ASPECT_RATIO_THEME_CONFIGS: AspectRatioThemeConfig[] = [
  {
    id: 'theming-cinematic-video',
    sectionTitle: '1. 4K Ultra HD Cinematic Video Player Theme (16:9)',
    description:
      'Bordered high-definition 16:9 container designed for embedded video feeds and media streaming.',
    previewTitle: '16:9 Cinematic Video Container',
    render: () => (
      <div className="w-full max-w-xl mx-auto">
        <AspectRatio ratio="16:9" variant="bordered">
          <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full">
            <Play
              size={48}
              className="text-core-circle-primary hover:scale-110 transition-transform cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-slate-300 mt-2">
              4K UHD STREAM (60 FPS)
            </span>
          </div>
        </AspectRatio>
      </div>
    ),
    code: `<div className="w-full max-w-xl mx-auto">
  <AspectRatio ratio="16:9" variant="bordered">
    <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full">
      <Play size={48} className="text-core-circle-primary hover:scale-110 transition-transform cursor-pointer" />
      <span className="text-xs font-mono font-bold text-slate-300 mt-2">4K UHD STREAM (60 FPS)</span>
    </div>
  </AspectRatio>
</div>`,
  },
  {
    id: 'theming-instagram-square',
    sectionTitle: '2. Social Media 1:1 Square Photo Grid Theme',
    description:
      'Radiant purple gradient 1:1 square container for product shots and photography feeds.',
    previewTitle: '1:1 Square Photo Card',
    render: () => (
      <div className="w-64 mx-auto">
        <AspectRatio ratio="1:1" variant="gradient">
          <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
            <Sparkles size={32} className="text-purple-500" />
            <span className="font-bold text-sm text-core-circle-text-main mt-2">
              1:1 Square Product Shot
            </span>
          </div>
        </AspectRatio>
      </div>
    ),
    code: `<div className="w-64 mx-auto">
  <AspectRatio ratio="1:1" variant="gradient">
    <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
      <Sparkles size={32} className="text-purple-500" />
      <span className="font-bold text-sm text-core-circle-text-main mt-2">1:1 Square Product Shot</span>
    </div>
  </AspectRatio>
</div>`,
  },
  {
    id: 'theming-ultrawide-terminal',
    sectionTitle: '3. Ultra-Wide 21:9 Panoramic Telemetry Monitor Theme',
    description:
      'Deep cyber slate 21:9 container with glowing emerald borders for wide server telemetry displays.',
    previewTitle: '21:9 Panoramic Terminal',
    render: () => (
      <div className="w-full max-w-2xl mx-auto">
        <AspectRatio ratio="21:9" variant="glow">
          <div className="bg-slate-50 text-emerald-600 font-mono text-xs flex items-center justify-between p-6 h-full w-full">
            <div>
              <p className="font-bold text-sm">21:9 Panoramic Cloud Metrics</p>
              <p className="text-slate-400 mt-1">
                Cluster Nodes: 128 • CPU Load: 18.2% • Ingress: 42Gbps
              </p>
            </div>
            <Badge variant="success" size="sm" shape="pill">
              Nominal
            </Badge>
          </div>
        </AspectRatio>
      </div>
    ),
    code: `<div className="w-full max-w-2xl mx-auto">
  <AspectRatio ratio="21:9" variant="glow">
    <div className="bg-slate-50 text-emerald-600 font-mono text-xs flex items-center justify-between p-6 h-full w-full">
      <div>
        <p className="font-bold text-sm">21:9 Panoramic Cloud Metrics</p>
        <p className="text-slate-400 mt-1">Cluster Nodes: 128 • CPU Load: 18.2% • Ingress: 42Gbps</p>
      </div>
      <Badge variant="success" size="sm" shape="pill">Nominal</Badge>
    </div>
  </AspectRatio>
</div>`,
  },
  {
    id: 'theming-classic-slide',
    sectionTitle: '4. Classic 4:3 Keynote Presentation Slide Theme',
    description:
      'Frosted glassmorphism 4:3 container for tablet viewports and slide decks.',
    previewTitle: '4:3 Presentation Slide',
    render: () => (
      <div className="w-72 mx-auto">
        <AspectRatio ratio="4:3" variant="glassmorphic">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center h-full w-full p-4">
            <span className="font-bold text-sm text-blue-950">
              4:3 Slide Frame
            </span>
            <p className="text-xs text-blue-700 mt-1 text-center">
              Tablet & legacy viewport compatibility
            </p>
          </div>
        </AspectRatio>
      </div>
    ),
    code: `<div className="w-72 mx-auto">
  <AspectRatio ratio="4:3" variant="glassmorphic">
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center h-full w-full p-4">
      <span className="font-bold text-sm text-blue-950">4:3 Slide Frame</span>
      <p className="text-xs text-blue-700 mt-1 text-center">Tablet & legacy viewport compatibility</p>
    </div>
  </AspectRatio>
</div>`,
  },
  {
    id: 'theming-mobile-story',
    sectionTitle: '5. Mobile Vertical Video Story Theme (9:16)',
    description: 'Vertical 9:16 container formatted for mobile shorts and reels.',
    previewTitle: '9:16 Vertical Reel Frame',
    render: () => (
      <div className="w-48 mx-auto">
        <AspectRatio ratio="9:16" variant="dark">
          <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
            <span className="font-bold text-sm text-core-circle-text-main">
              9:16 Mobile Reel
            </span>
            <p className="text-xs text-slate-400 mt-1 text-center">
              Portrait video asset
            </p>
          </div>
        </AspectRatio>
      </div>
    ),
    code: `<div className="w-48 mx-auto">
  <AspectRatio ratio="9:16" variant="dark">
    <div className="bg-slate-100 text-slate-700 flex flex-col items-center justify-center h-full w-full p-4">
      <span className="font-bold text-sm text-core-circle-text-main">9:16 Mobile Reel</span>
      <p className="text-xs text-slate-400 mt-1 text-center">Portrait video asset</p>
    </div>
  </AspectRatio>
</div>`,
  },
];

export const ASPECT_RATIO_VARIANT_GROUPS: AspectRatioVariantGroup[] = [
  {
    id: 'aspect-ratio-variants-presets',
    title: '1. Ratio Presets (16:9, 4:3, 1:1, 21:9, 9:16)',
    description: 'Standard aspect ratio presets.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full items-center">
        <AspectRatio ratio="16:9" variant="bordered">
          <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 h-full">
            16:9
          </div>
        </AspectRatio>
        <AspectRatio ratio="4:3" variant="bordered">
          <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 h-full">
            4:3
          </div>
        </AspectRatio>
        <AspectRatio ratio="1:1" variant="bordered">
          <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 h-full">
            1:1
          </div>
        </AspectRatio>
      </div>
    ),
  },
  {
    id: 'aspect-ratio-variants-glow',
    title: '2. Radiant Gradient & Neon Glow Styles',
    description:
      'Surface halo styling around the proportioned media element.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <AspectRatio ratio="16:9" variant="glassmorphic">
          <div className="bg-white/10 flex items-center justify-center font-bold text-xs text-white h-full">
            Glassmorphic
          </div>
        </AspectRatio>
        <AspectRatio ratio="16:9" variant="gradient">
          <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-purple-300 h-full">
            Gradient Border
          </div>
        </AspectRatio>
        <AspectRatio ratio="16:9" variant="glow">
          <div className="bg-slate-100 flex items-center justify-center font-bold text-xs text-emerald-400 h-full">
            Neon Glow
          </div>
        </AspectRatio>
      </div>
    ),
  },
];

export const ASPECT_RATIO_PLAYGROUND_SECTION = {
  id: 'aspect-ratio-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 variants, ratio presets, and live code generator.',
};

export const ASPECT_RATIO_MOCK_SECTION = {
  id: 'aspect-ratio-mock-section',
  title: 'Dynamic Video Player Integration',
  description:
    'Pattern for embedding responsive iframe video players with fixed aspect ratios.',
  snippets: [
    {
      label: 'Sample Media Asset Payload',
      code: JSON.stringify(
        {
          mediaId: 'vid_9821c',
          title: 'CoreCircle Component Architect Tutorial',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          aspectRatio: '16:9',
          resolution: '3840x2160',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Video Player Component',
      code: `import React from 'react';
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
};`,
    },
  ],
};

export const ASPECT_RATIO_OVERVIEW_SECTION = {
  id: 'aspect-ratio-overview-intro',
  title: 'Introduction',
  description:
    'The AspectRatio component prevents layout shift (CLS) by locking child media elements (images, videos, iframes, maps) to precise mathematical proportions such as 16:9, 4:3, 1:1, or 21:9 across all responsive viewport dimensions.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { AspectRatio } from '@core-circle/ui';

<AspectRatio ratio="16:9" variant="bordered">
  <img src="/hero.jpg" alt="Hero Banner" />
</AspectRatio>`,
  },
  propsTableTitle: 'Component Props',
};

export const ASPECT_RATIO_PROPS_DATA: PropItem[] = [
  {
    name: 'ratio',
    type: "'16:9' | '4:3' | '1:1' | '21:9' | '9:16' | '3:2' | '2:3' | '3:4' | number",
    defaultValue: "'16:9'",
    description: 'Width-to-height proportional aspect ratio constraint.',
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'rounded' | 'glassmorphic' | 'gradient' | 'glow' | 'dark' | 'shadow' | 'accent' | 'minimal'",
    defaultValue: "'default'",
    description: 'Container edge rounding, surface border, and halo styling.',
  },
];
