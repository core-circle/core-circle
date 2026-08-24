'use client';

import React, { useState } from 'react';
import { Card, Select, Checkbox, Button, TextInput, Badge } from '@core-circle/ui';
import { CodeIcon, CopyIcon, Sparkles, Star, Shield, ArrowRight } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { cardPlaygroundStyles as s } from './cardPlayground.styles';

export const CardPlayground = () => {
  const [state, setState] = useState({
    variant: 'cover',
    orientation: 'vertical',
    rounded: true,
    hoverable: true,
    mediaPosition: 'top',
    cornerType: 'badge',
    showHeader: true,
    showFooter: true,
    headerDivider: true,
    footerDivider: true,
    showClose: false,
    footerAlign: 'between',
    title: 'Patagonia Glaciers & Fjords',
    body: 'Guided alpine expeditions through remote polar waterways, glacial peaks, and wildlife habitats.',
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const sampleImage = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80';
  const avatarPhoto = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

  const generateCode = () => {
    const {
      variant,
      orientation,
      rounded,
      hoverable,
      mediaPosition,
      cornerType,
      showHeader,
      showFooter,
      headerDivider,
      footerDivider,
      showClose,
      footerAlign,
      title,
      body,
    } = state;

    let code = `<Card variant="${variant}"`;
    if (orientation !== 'vertical') code += ` orientation="${orientation}"`;
    if (!rounded) code += ' rounded={false}';
    if (hoverable) code += ' hoverable';
    code += '>\n';

    if (cornerType !== 'none') {
      if (cornerType === 'avatar') {
        code += `  <Card.Corner position="top-right" shape="circle" size="md">\n    <img src="/avatar.jpg" className="w-full h-full object-cover" />\n  </Card.Corner>\n`;
      } else if (cornerType === 'icon') {
        code += `  <Card.Corner position="top-left" shape="rounded" size="md">\n    <Shield size={18} className="text-core-circle-primary" />\n  </Card.Corner>\n`;
      } else if (cornerType === 'tag') {
        code += `  <Card.Corner position="bottom-right" shape="square" size="sm">\n    <Badge variant="gradient" shape="square">NEW</Badge>\n  </Card.Corner>\n`;
      } else {
        code += `  <Card.Corner position="top-right" shape="circle">\n    <Badge variant="primary" shape="pill" size="sm">PRO</Badge>\n  </Card.Corner>\n`;
      }
    }

    if (variant === 'cover') {
      code += `  <Card.Media src="${sampleImage}" position="cover" />\n`;
    } else if (orientation === 'horizontal') {
      if (mediaPosition !== 'none') {
        code += `  <Card.Media src="${sampleImage}" position="side" />\n`;
      }
    } else if (mediaPosition === 'top') {
      code += `  <Card.Media src="${sampleImage}" aspect="video" position="top" />\n`;
    }

    if (showHeader) {
      code += `  <Card.Header${headerDivider ? ' divider' : ''}${showClose ? ' onClose={() => {}}' : ''}>\n    <h3 className="font-bold">${title}</h3>\n  </Card.Header>\n`;
    }

    code += `  <Card.Body>\n    <p>${body}</p>\n  </Card.Body>\n`;

    if (variant !== 'cover' && orientation === 'vertical' && mediaPosition === 'bottom') {
      code += `  <Card.Media src="${sampleImage}" aspect="video" position="bottom" />\n`;
    }

    if (showFooter) {
      code += `  <Card.Footer${footerDivider ? ' divider' : ''} align="${footerAlign}">\n    <span className="text-xs">From $1,490</span>\n    <Button variant="primary" size="sm">Book Now</Button>\n  </Card.Footer>\n`;
    }

    code += '</Card>';
    return code;
  };

  const isCover = state.variant === 'cover';
  const isSolid = state.variant === 'solid-brand' || state.variant === 'solid-dark';

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel (Max 4 Dropdowns per row) */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            {/* 1. Select Dropdowns (Strict 4 Columns Max) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={state.variant}
                onChange={(e) => updateState('variant', e.target.value)}
                options={[
                  { value: 'cover', label: 'Cover (Full Background Image)' },
                  { value: 'solid-brand', label: 'Solid Brand (Gradient Color)' },
                  { value: 'solid-dark', label: 'Solid Dark (Deep Slate)' },
                  { value: 'floating', label: 'Floating (Elevated Lift)' },
                  { value: 'shadow', label: 'Shadow (Ambient Depth)' },
                  { value: 'outline', label: 'Outline (Bordered Box)' },
                  { value: 'glassmorphic', label: 'Glassmorphic (Frosted)' },
                  { value: 'gradient', label: 'Gradient (Subtle Radiant)' },
                  { value: 'gradient-border', label: 'Gradient Border' },
                  { value: 'flat', label: 'Flat (Tone on Tone)' },
                  { value: 'interactive', label: 'Interactive (Clickable)' },
                  { value: 'minimal', label: 'Minimal (No Border)' },
                  { value: 'ghost', label: 'Ghost (Transparent)' },
                ]}
                fullWidth
              />
              <Select
                label="Orientation"
                value={state.orientation}
                onChange={(e) => updateState('orientation', e.target.value)}
                options={[
                  { value: 'vertical', label: 'Vertical (Stacked Card)' },
                  { value: 'horizontal', label: 'Horizontal (Side Banner)' },
                ]}
                fullWidth
              />
              <Select
                label="Media Placement"
                value={state.mediaPosition}
                onChange={(e) => updateState('mediaPosition', e.target.value)}
                options={[
                  { value: 'top', label: 'Top Banner' },
                  { value: 'bottom', label: 'Bottom Media' },
                  { value: 'side', label: 'Side Media' },
                  { value: 'none', label: 'No Media' },
                ]}
                disabled={isCover}
                fullWidth
              />
              <Select
                label="Corner Element"
                value={state.cornerType}
                onChange={(e) => updateState('cornerType', e.target.value)}
                options={[
                  { value: 'badge', label: 'PRO Badge (Top-Right)' },
                  { value: 'avatar', label: 'User Avatar (Top-Right)' },
                  { value: 'icon', label: 'Shield Icon (Top-Left)' },
                  { value: 'tag', label: 'Square Tag (Bottom-Right)' },
                  { value: 'none', label: 'None' },
                ]}
                fullWidth
              />
            </div>

            {/* 2. Checkboxes & Switches Horizontally */}
            <div className="flex flex-wrap items-center gap-6 py-1">
              <Checkbox
                label="Rounded Corners"
                checked={state.rounded}
                onChange={(c) => updateState('rounded', c)}
              />
              <Checkbox
                label="Hover Lift"
                checked={state.hoverable}
                onChange={(c) => updateState('hoverable', c)}
              />
              <Checkbox
                label="Show Header"
                checked={state.showHeader}
                onChange={(c) => updateState('showHeader', c)}
              />
              <Checkbox
                label="Show Footer"
                checked={state.showFooter}
                onChange={(c) => updateState('showFooter', c)}
              />
              <Checkbox
                label="Header Divider"
                checked={state.headerDivider}
                onChange={(c) => updateState('headerDivider', c)}
              />
              <Checkbox
                label="Footer Divider"
                checked={state.footerDivider}
                onChange={(c) => updateState('footerDivider', c)}
              />
              <Checkbox
                label="Dismiss Close"
                checked={state.showClose}
                onChange={(c) => updateState('showClose', c)}
              />
            </div>

            {/* 3. Text Inputs Horizontally */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
              <TextInput
                label="Header Title"
                value={state.title}
                onChange={(e) => updateState('title', e.target.value)}
                fullWidth
                disabled={!state.showHeader}
              />
              <TextInput
                label="Body Description"
                value={state.body}
                onChange={(e) => updateState('body', e.target.value)}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={state.orientation === 'horizontal' ? "w-full max-w-2xl" : "w-full max-w-md"}>
              <Card
                variant={state.variant as any}
                orientation={state.orientation as any}
                rounded={state.rounded}
                hoverable={state.hoverable}
                className={isCover ? "min-h-[320px]" : ""}
              >
                {/* Floating Corner Element */}
                {state.cornerType === 'avatar' && (
                  <Card.Corner position="top-right" shape="circle" size="md">
                    <img src={avatarPhoto} alt="User Profile" className="w-full h-full object-cover rounded-full border-2 border-white shadow-md" />
                  </Card.Corner>
                )}
                {state.cornerType === 'icon' && (
                  <Card.Corner position="top-left" shape="rounded" size="md">
                    <div className="bg-white/90 backdrop-blur-md p-2 shadow-core-circle-subtle border border-core-circle-border-main/80 flex items-center justify-center">
                      <Shield size={16} className="text-core-circle-primary" />
                    </div>
                  </Card.Corner>
                )}
                {state.cornerType === 'badge' && (
                  <Card.Corner position="top-right" shape="circle" size="md">
                    <Badge variant="primary" shape="pill" size="sm">
                      PRO
                    </Badge>
                  </Card.Corner>
                )}
                {state.cornerType === 'tag' && (
                  <Card.Corner position="bottom-right" shape="square" size="sm">
                    <Badge variant="gradient" shape="square" size="sm" startIcon={<Sparkles size={10} />}>
                      NEW
                    </Badge>
                  </Card.Corner>
                )}

                {/* Full Cover Background Image */}
                {isCover && (
                  <Card.Media
                    src={sampleImage}
                    position="cover"
                  />
                )}

                {/* Top Media */}
                {!isCover && state.orientation === 'vertical' && state.mediaPosition === 'top' && (
                  <Card.Media
                    src={sampleImage}
                    alt="Cover banner"
                    aspect="video"
                    overlay
                  >
                    <div className="flex justify-between items-start">
                      <Badge variant="primary" size="sm" shape="pill">Featured</Badge>
                    </div>
                  </Card.Media>
                )}

                {/* Side Media for Horizontal */}
                {!isCover && state.orientation === 'horizontal' && state.mediaPosition !== 'none' && (
                  <Card.Media
                    src={sampleImage}
                    alt="Side thumbnail"
                    position="side"
                  />
                )}

                <div className="flex-1 flex flex-col justify-between">
                  {state.showHeader && (
                    <Card.Header
                      divider={state.headerDivider}
                      onClose={state.showClose ? () => alert('Dismiss clicked') : undefined}
                      className={isCover || isSolid ? "text-white border-white/15" : ""}
                    >
                      <h3 className="font-bold flex items-center gap-2">
                        <Sparkles size={16} className={isCover || isSolid ? "text-amber-300" : "text-core-circle-primary"} />
                        {state.title}
                      </h3>
                    </Card.Header>
                  )}

                  <Card.Body className={isCover || isSolid ? "text-white/90" : "text-core-circle-text-muted"}>
                    <p className="text-sm leading-relaxed">{state.body}</p>
                  </Card.Body>

                  {!isCover && state.orientation === 'vertical' && state.mediaPosition === 'bottom' && (
                    <Card.Media
                      src={sampleImage}
                      alt="Bottom banner"
                      aspect="video"
                      position="bottom"
                    />
                  )}

                  {state.showFooter && (
                    <Card.Footer
                      divider={state.footerDivider}
                      align={state.footerAlign as any}
                      className={isCover || isSolid ? "border-white/15 text-white" : ""}
                    >
                      <span className={isCover || isSolid ? "text-xs text-white/80" : "text-xs text-slate-500"}>
                        From $1,490 / traveler
                      </span>
                      <Button
                        variant={isCover ? "gradient" : isSolid ? "glassmorphic" : "primary"}
                        size="sm"
                        endIcon={<ArrowRight size={14} />}
                      >
                        Reserve Now
                      </Button>
                    </Card.Footer>
                  )}
                </div>
              </Card>
            </div>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                Copy Snippet
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightCode(generateCode()),
                }}
              />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
