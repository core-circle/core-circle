'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  Image, 
  Badge, 
  Button, 
  Typography 
} from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Sparkles, 
  Star, 
  ShoppingBag, 
  Heart, 
  ExternalLink 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { 
  IMAGE_PROPS_DATA, 
  IMAGE_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/image/imageConstants';
import { ImagePlayground } from '../../../components/playground/image/imagePlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ImageContainerProps } from '../../../interface/containers/atoms/image.types';

export default function ImageContainer({
  headerContent,
  breadcrumbItems
}: ImageContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Wilderness Travel Adventure */}
          <DocSection
            id="theming-travel-adventure"
            title="1. Wilderness Travel & Media Showcase Theme"
            description="Floating 16:9 widescreen frame with hover zoom, GPS status badge, and blurred caption overlay."
          >
            <ComponentPreview
              title="Scenic Adventure Media Card"
              code={`<Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80"
  alt="Yosemite Valley Mist"
  variant="floating"
  aspectRatio="16:9"
  zoomOnHover
  overlay={<Badge variant="primary" shape="pill" size="sm">Yosemite • 4K HDR</Badge>}
  caption="Sunrise over Tunnel View with morning alpine mist"
/>`}
            >
              <div className="w-full max-w-lg mx-auto py-4">
                <Image
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80"
                  alt="Yosemite Valley Mist"
                  variant="floating"
                  aspectRatio="16:9"
                  zoomOnHover
                  overlay={<Badge variant="primary" shape="pill" size="sm">Yosemite • 4K HDR</Badge>}
                  caption="Sunrise over Tunnel View with morning alpine mist"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. E-Commerce Product Gallery */}
          <DocSection
            id="theming-ecommerce-product"
            title="2. E-Commerce Modern Product Gallery Theme"
            description="Square 1:1 studio frame with discount pill badge and fast hover zoom inspection."
          >
            <ComponentPreview
              title="Storefront Product Card"
              code={`<div className="w-full max-w-sm p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
</div>`}
            >
              <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Polaroid Editorial Photo Card */}
          <DocSection
            id="theming-polaroid-photo"
            title="3. Polaroid Vintage Editorial Photography Theme"
            description="Retro photo card frame with bottom caption area for editorial galleries."
          >
            <ComponentPreview
              title="Polaroid Photo Snapshot"
              code={`<Image
  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80"
  alt="Redwood Forest"
  variant="polaroid"
  aspectRatio="4:3"
  zoomOnHover
  caption="Autumn in the Pacific Northwest (1984)"
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic Creative Portfolio */}
          <DocSection
            id="theming-glassmorphic-art"
            title="4. Glassmorphic Creative Portfolio & Artwork Theme"
            description="Translucent frosted container displaying panoramic 21:9 visual assets."
          >
            <ComponentPreview
              title="Panoramic Artwork Showcase"
              code={`<Image
  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
  alt="Digital Earth Network"
  variant="glassmorphic"
  aspectRatio="21:9"
  zoomOnHover
  caption="Global Quantum Computing Mesh • Live Nodes"
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 5. Circular Profile & Avatar Disc */}
          <DocSection
            id="theming-circular-profile"
            title="5. Circular Media Disc & Creator Showcase Theme"
            description="Circular disc frame with online status badge overlay."
          >
            <ComponentPreview
              title="Creator Profile Disc"
              code={`<div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-slate-200 shadow-sm w-fit">
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
</div>`}
            >
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
                  <Badge variant="success" shape="pill" size="sm" className="mt-1">Available for hire</Badge>
                </div>
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
          <DocSection id="image-variants-styles" title="1. Frame Styles (10 Variants)" description="Card, floating, glassmorphic, gradient, circular, pill, polaroid, minimal, bordered, and thumbnail.">
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
          </DocSection>

          <DocSection id="image-variants-aspect" title="2. Aspect Ratio Constraints" description="16:9, 1:1, 4:3, 21:9, and 3:2 bounding boxes.">
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
          id="image-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual frame variants, aspect ratios, object-fit rules, and hover zoom."
        >
          <ImagePlayground />
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
            id="image-mock"
            title="Dynamic Cloud Media Gallery Pattern"
            description="Render image assets from remote CDN with built-in loading placeholders and error resilience."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Media Asset API Payload"
                code={JSON.stringify({
                  media_id: "img_8492",
                  cdn_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                  metadata: {
                    title: "Yosemite Valley Mist",
                    aspect_ratio: "16:9",
                    author: "Elena Rostova"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React from 'react';
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
          <DocSection id="image-usage" title="Introduction" description="The Image atom provides an accessible media wrapper with automatic skeleton loading, error handling, aspect ratio boxing, and hover zoom.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Image } from '@core-circle/ui';

<Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  alt="Scenic View"
  aspectRatio="16:9"
  variant="floating"
  zoomOnHover
  caption="Yosemite Sunrise"
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={IMAGE_PROPS_DATA} />
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
        <Typography variant="h1" className={s.title}>{headerContent.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
