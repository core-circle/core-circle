import type { ReactNode } from 'react';
import { Image, Badge, Button } from '@core-circle/ui';
import { ShoppingBag } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ImageThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface ImageVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const IMAGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Image' },
];

export const IMAGE_HEADER_CONTENT = {
  title: 'Image',
  description:
    'An enhanced media primitive featuring automatic skeleton loading, graceful error fallbacks, 10 frame variants, aspect ratio bounding boxes, hover zoom transitions, and caption overlays.',
};

export const IMAGE_THEME_CONFIGS: ImageThemeConfig[] = [
  {
    id: 'theming-travel-adventure',
    sectionTitle: '1. Wilderness Travel & Media Showcase Theme',
    description:
      'Floating 16:9 widescreen frame with hover zoom, GPS status badge, and blurred caption overlay.',
    previewTitle: 'Scenic Adventure Media Card',
    render: () => (
      <div className="w-full max-w-lg mx-auto py-4">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80"
          alt="Yosemite Valley Mist"
          variant="floating"
          aspectRatio="16:9"
          zoomOnHover
          overlay={
            <Badge variant="primary" shape="pill" size="sm">
              Yosemite • 4K HDR
            </Badge>
          }
          caption="Sunrise over Tunnel View with morning alpine mist"
        />
      </div>
    ),
    code: `<Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80"
  alt="Yosemite Valley Mist"
  variant="floating"
  aspectRatio="16:9"
  zoomOnHover
  overlay={<Badge variant="primary" shape="pill" size="sm">Yosemite • 4K HDR</Badge>}
  caption="Sunrise over Tunnel View with morning alpine mist"
/>`,
  },
  {
    id: 'theming-ecommerce-product',
    sectionTitle: '2. E-Commerce Modern Product Gallery Theme',
    description:
      'Square 1:1 studio frame with discount pill badge and fast hover zoom inspection.',
    previewTitle: 'Storefront Product Card',
    render: () => (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <Image
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"
          alt="Smart Watch"
          variant="card"
          aspectRatio="1:1"
          zoomOnHover
          overlay={
            <Badge variant="destructive" shape="pill" size="sm">
              30% OFF
            </Badge>
          }
        />
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-slate-900">Series 8 Chronograph</h4>
            <p className="text-xs text-slate-500">Space Grey • Titanium Bezel</p>
          </div>
          <span className="font-bold text-slate-900">$399</span>
        </div>
        <Button
          variant="primary"
          size="sm"
          fullWidth
          startIcon={<ShoppingBag size={16} />}
        >
          Add to Bag
        </Button>
      </div>
    ),
    code: `<div className="w-full max-w-sm p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Image
    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"
    alt="Smart Watch"
    variant="card"
    aspectRatio="1:1"
    zoomOnHover
    overlay={<Badge variant="destructive" shape="pill" size="sm">30% OFF</Badge>}
  />
  <div className="flex justify-between items-center">
    <div>
      <h4 className="font-bold text-slate-900">Series 8 Chronograph</h4>
      <p className="text-xs text-slate-500">Space Grey • Titanium Bezel</p>
    </div>
    <span className="font-bold text-slate-900">$399</span>
  </div>
  <Button variant="primary" size="sm" fullWidth startIcon={<ShoppingBag size={16} />}>Add to Bag</Button>
</div>`,
  },
  {
    id: 'theming-polaroid-photo',
    sectionTitle: '3. Polaroid Vintage Editorial Photography Theme',
    description:
      'Retro photo card frame with bottom caption area for editorial galleries.',
    previewTitle: 'Polaroid Photo Snapshot',
    render: () => (
      <div className="w-full max-w-sm mx-auto py-4 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80"
          alt="Redwood Forest"
          variant="polaroid"
          aspectRatio="4:3"
          zoomOnHover
          caption="Autumn in the Pacific Northwest (1984)"
        />
      </div>
    ),
    code: `<Image
  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80"
  alt="Redwood Forest"
  variant="polaroid"
  aspectRatio="4:3"
  zoomOnHover
  caption="Autumn in the Pacific Northwest (1984)"
/>`,
  },
  {
    id: 'theming-glassmorphic-art',
    sectionTitle: '4. Glassmorphic Creative Portfolio & Artwork Theme',
    description:
      'Translucent frosted container displaying panoramic 21:9 visual assets.',
    previewTitle: 'Panoramic Artwork Showcase',
    render: () => (
      <div className="w-full p-6 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
          alt="Digital Earth Network"
          variant="glassmorphic"
          aspectRatio="21:9"
          zoomOnHover
          caption="Global Quantum Computing Mesh • Live Nodes"
        />
      </div>
    ),
    code: `<Image
  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
  alt="Digital Earth Network"
  variant="glassmorphic"
  aspectRatio="21:9"
  zoomOnHover
  caption="Global Quantum Computing Mesh • Live Nodes"
/>`,
  },
  {
    id: 'theming-circular-profile',
    sectionTitle: '5. Circular Media Disc & Creator Showcase Theme',
    description: 'Circular disc frame with online status badge overlay.',
    previewTitle: 'Creator Profile Disc',
    render: () => (
      <div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-slate-200 shadow-sm w-fit mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
          alt="Creator Portrait"
          variant="circular"
          width={72}
          height={72}
          zoomOnHover
        />
        <div>
          <h4 className="font-bold text-slate-900">Elena Rostova</h4>
          <p className="text-xs text-slate-500">Principal Design Engineer</p>
          <Badge variant="success" shape="pill" size="sm" className="mt-1">
            Available for hire
          </Badge>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-slate-200 shadow-sm w-fit">
  <Image
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
    alt="Creator Portrait"
    variant="circular"
    width={72}
    height={72}
    zoomOnHover
  />
  <div>
    <h4 className="font-bold text-slate-900">Elena Rostova</h4>
    <p className="text-xs text-slate-500">Principal Design Engineer</p>
    <Badge variant="success" shape="pill" size="sm" className="mt-1">Available for hire</Badge>
  </div>
</div>`,
  },
];

export const IMAGE_VARIANT_GROUPS: ImageVariantGroup[] = [
  {
    id: 'image-variants-styles',
    title: '1. Frame Styles (10 Variants)',
    description:
      'Card, floating, glassmorphic, gradient, circular, pill, polaroid, minimal, bordered, and thumbnail.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          variant="card"
          aspectRatio="16:9"
          caption="Card Variant"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          variant="floating"
          aspectRatio="16:9"
          caption="Floating Variant"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          variant="glassmorphic"
          aspectRatio="16:9"
          caption="Glassmorphic Variant"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          variant="gradient"
          aspectRatio="16:9"
          caption="Gradient Border"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          variant="bordered"
          aspectRatio="16:9"
          caption="Bordered Strong"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          variant="polaroid"
          aspectRatio="4:3"
          caption="Polaroid Photo"
        />
      </div>
    ),
  },
  {
    id: 'image-variants-aspect',
    title: '2. Aspect Ratio Constraints',
    description: '16:9, 1:1, 4:3, 21:9, and 3:2 bounding boxes.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          aspectRatio="16:9"
          caption="16:9 Video"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          aspectRatio="1:1"
          caption="1:1 Square"
        />
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=80"
          aspectRatio="4:3"
          caption="4:3 Standard"
        />
      </div>
    ),
  },
];

export const IMAGE_PLAYGROUND_SECTION = {
  id: 'image-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual frame variants, aspect ratios, object-fit rules, and hover zoom.',
};

export const IMAGE_MOCK_SECTION = {
  id: 'image-mock',
  title: 'Dynamic Cloud Media Gallery Pattern',
  description:
    'Render image assets from remote CDN with built-in loading placeholders and error resilience.',
  snippets: [
    {
      label: 'Sample Media Asset API Payload',
      code: JSON.stringify(
        {
          media_id: 'img_8492',
          cdn_url:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
          metadata: {
            title: 'Yosemite Valley Mist',
            aspect_ratio: '16:9',
            author: 'Elena Rostova',
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Consumer Component',
      code: `import React from 'react';
import { Image, Badge } from '@core-circle/ui';

export const MediaGalleryCard = ({ asset }) => {
  return (
    <Image
      src={asset.cdn_url}
      alt={asset.metadata.title}
      variant="floating"
      aspectRatio={asset.metadata.aspect_ratio}
      zoomOnHover
      caption={asset.metadata.title}
      overlay={<Badge variant="primary" shape="pill" size="sm">HD</Badge>}
    />
  );
};`,
    },
  ],
};

export const IMAGE_OVERVIEW_SECTION = {
  id: 'image-usage',
  title: 'Introduction',
  description:
    'The Image atom provides an accessible media wrapper with automatic skeleton loading, error handling, aspect ratio boxing, and hover zoom.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Image } from '@core-circle/ui';

<Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  alt="Scenic View"
  aspectRatio="16:9"
  variant="floating"
  zoomOnHover
  caption="Yosemite Sunrise"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const IMAGE_PROPS_DATA: PropItem[] = [
  {
    name: 'src',
    type: 'string',
    defaultValue: '-',
    description: 'The source URL of the image asset.',
  },
  {
    name: 'alt',
    type: 'string',
    defaultValue: "'Image asset'",
    description: 'Accessible alternative text description.',
  },
  {
    name: 'variant',
    type: "'card' | 'floating' | 'glassmorphic' | 'gradient' | 'circular' | 'pill' | 'polaroid' | 'minimal' | 'bordered' | 'thumbnail'",
    defaultValue: "'card'",
    description: 'Visual frame and container style (10 options).',
  },
  {
    name: 'aspectRatio',
    type: "'1:1' | '16:9' | '4:3' | '21:9' | '3:2' | 'auto'",
    defaultValue: "'auto'",
    description: 'Constrained aspect ratio box preventing layout shifts.',
  },
  {
    name: 'fit',
    type: "'cover' | 'contain' | 'fill' | 'none' | 'scale-down'",
    defaultValue: "'cover'",
    description: 'CSS object-fit behavior inside the frame.',
  },
  {
    name: 'rounded',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
    defaultValue: "'xl'",
    description: 'Corner radius curvature scale.',
  },
  {
    name: 'zoomOnHover',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to apply a smooth scale zoom on hover.',
  },
  {
    name: 'caption',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Bottom caption text or element overlay.',
  },
  {
    name: 'overlay',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Top overlay badge or interactive action slot.',
  },
  {
    name: 'fallback',
    type: 'ReactNode',
    defaultValue: '-',
    description:
      'Custom UI rendered if the image fails to load (404/offline).',
  },
  {
    name: 'width',
    type: 'string | number',
    defaultValue: '-',
    description: 'Custom width constraint.',
  },
  {
    name: 'height',
    type: 'string | number',
    defaultValue: '-',
    description: 'Custom height constraint.',
  },
];
