'use client';

import React, { useState } from 'react';
import { 
  Image, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Badge, 
  Card,
  ImageVariant,
  ImageAspectRatio,
  ImageFit,
  ImageRadius 
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

export const ImagePlayground: React.FC = () => {
  const [src, setSrc] = useState('https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&auto=format&fit=crop&q=80');
  const [variant, setVariant] = useState<ImageVariant>('card');
  const [aspectRatio, setAspectRatio] = useState<ImageAspectRatio>('16:9');
  const [fit, setFit] = useState<ImageFit>('cover');
  const [rounded, setRounded] = useState<ImageRadius>('2xl');

  const [zoomOnHover, setZoomOnHover] = useState(true);
  const [showCaption, setShowCaption] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [simulateError, setSimulateError] = useState(false);

  const [captionText, setCaptionText] = useState('Yosemite National Park, California');

  const variantOptions = [
    { label: 'Card (Default)', value: 'card' },
    { label: 'Floating Depth', value: 'floating' },
    { label: 'Glassmorphic Blur', value: 'glassmorphic' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Circular Disc', value: 'circular' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Polaroid Photo Card', value: 'polaroid' },
    { label: 'Bordered Strong', value: 'bordered' },
    { label: 'Thumbnail Preview', value: 'thumbnail' },
    { label: 'Minimal Clean', value: 'minimal' },
  ];

  const aspectOptions = [
    { label: '16:9 (Widescreen Video)', value: '16:9' },
    { label: '1:1 (Square Profile)', value: '1:1' },
    { label: '4:3 (Standard Photo)', value: '4:3' },
    { label: '21:9 (Ultrawide Panoramic)', value: '21:9' },
    { label: '3:2 (Classic 35mm)', value: '3:2' },
    { label: 'Auto Dimensions', value: 'auto' },
  ];

  const fitOptions = [
    { label: 'Cover (Fill & Crop)', value: 'cover' },
    { label: 'Contain (Fit Inside)', value: 'contain' },
    { label: 'Fill (Stretch to Edge)', value: 'fill' },
    { label: 'Scale Down', value: 'scale-down' },
  ];

  const roundedOptions = [
    { label: '2XL (16px)', value: '2xl' },
    { label: '3XL (24px)', value: '3xl' },
    { label: 'Large (12px)', value: 'lg' },
    { label: 'Full (Pill/Circle)', value: 'full' },
    { label: 'None (Square)', value: 'none' },
  ];

  const generateCodeSnippet = () => {
    let props = `src="${simulateError ? 'https://broken-url-example.jpg' : src}"\n  alt="Scenic Landscape"`;
    if (variant !== 'card') props += `\n  variant="${variant}"`;
    if (aspectRatio !== 'auto') props += `\n  aspectRatio="${aspectRatio}"`;
    if (fit !== 'cover') props += `\n  fit="${fit}"`;
    if (rounded !== '2xl') props += `\n  rounded="${rounded}"`;
    if (zoomOnHover) props += `\n  zoomOnHover`;
    if (showCaption && captionText) props += `\n  caption="${captionText}"`;
    if (showOverlay) props += `\n  overlay={<Badge variant="primary" shape="pill" size="sm">Featured</Badge>}`;

    return `<Image\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive Image Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-8 w-full min-h-[300px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <div className="w-full max-w-md">
            <Image
              src={simulateError ? 'https://broken-url-example.jpg' : src}
              alt="Scenic Landscape"
              variant={variant}
              aspectRatio={aspectRatio}
              fit={fit}
              rounded={rounded}
              zoomOnHover={zoomOnHover}
              caption={showCaption ? captionText : undefined}
              overlay={showOverlay ? <Badge variant="primary" shape="pill" size="sm">Featured</Badge> : undefined}
            />
          </div>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          Image Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 4 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as ImageVariant)}
            />
            <Select
              label="Aspect Ratio"
              value={aspectRatio}
              options={aspectOptions}
              onChange={(val) => setAspectRatio(val as ImageAspectRatio)}
            />
            <Select
              label="Object Fit"
              value={fit}
              options={fitOptions}
              onChange={(val) => setFit(val as ImageFit)}
            />
            <Select
              label="Border Radius"
              value={rounded}
              options={roundedOptions}
              onChange={(val) => setRounded(val as ImageRadius)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="zoom-hover"
              label="Zoom on Hover"
              checked={zoomOnHover}
              onChange={(e) => setZoomOnHover(e.target.checked)}
            />
            <Checkbox
              id="show-caption"
              label="Show Caption"
              checked={showCaption}
              onChange={(e) => setShowCaption(e.target.checked)}
            />
            <Checkbox
              id="show-overlay"
              label="Overlay Badge"
              checked={showOverlay}
              onChange={(e) => setShowOverlay(e.target.checked)}
            />
            <Checkbox
              id="sim-error"
              label="Simulate Broken URL"
              checked={simulateError}
              onChange={(e) => setSimulateError(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Image Source URL"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
              placeholder="https://..."
            />
            <TextInput
              label="Caption Text"
              value={captionText}
              onChange={(e) => setCaptionText(e.target.value)}
              placeholder="e.g. Scenic Sunset..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
