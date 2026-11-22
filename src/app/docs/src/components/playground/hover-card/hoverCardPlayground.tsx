'use client';

import React, { useState } from 'react';
import { HoverCard, Button, Avatar, Badge, Select, TextInput } from '@core-circle/ui';
import {
  HoverCardVariant,
  HoverCardPosition,
  HoverCardSize,
} from '@core-circle/ui';
import { Calendar, CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { hoverCardPlaygroundStyles as s } from './hoverCardPlayground.styles';

export const HoverCardPlayground: React.FC = () => {
  const [variant, setVariant] = useState<HoverCardVariant>('card');
  const [position, setPosition] = useState<HoverCardPosition>('bottom');
  const [size, setSize] = useState<HoverCardSize>('md');
  const [openDelay, setOpenDelay] = useState<number>(200);

  const generatedCode = `<HoverCard
  variant="${variant}"
  size="${size}"
  position="${position}"
  openDelay={${openDelay}}
  trigger={
    <Button variant="primary">
      Hover Over Me
    </Button>
  }
>
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <Avatar name="Sarah Jenkins" size="md" />
      <div>
        <h4 className="text-sm font-bold text-slate-900 leading-tight">Sarah Jenkins</h4>
        <p className="text-xs text-slate-500">@sarah_design</p>
      </div>
      <Badge size="sm" variant="gradient" className="ml-auto">PRO</Badge>
    </div>
    <p className="text-xs text-slate-600 leading-relaxed">
      Lead Product Designer @corecircle. Building accessible design systems and design tokens.
    </p>
    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
      <Calendar size={13} />
      <span>Joined March 2022</span>
    </div>
  </div>
</HoverCard>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Select
                label="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as HoverCardVariant)}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'card', label: 'Card' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'glassmorphic', label: 'Glassmorphic' },
                  { value: 'gradient', label: 'Gradient' },
                  { value: 'bordered', label: 'Bordered' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'compact', label: 'Compact' },
                  { value: 'pill', label: 'Pill' },
                  { value: 'accent', label: 'Accent' },
                ]}
                fullWidth
              />

              <Select
                label="Placement"
                value={position}
                onChange={(e) => setPosition(e.target.value as HoverCardPosition)}
                options={[
                  { value: 'bottom', label: 'Bottom' },
                  { value: 'top', label: 'Top' },
                  { value: 'left', label: 'Left' },
                  { value: 'right', label: 'Right' },
                  { value: 'bottom-start', label: 'Bottom Start' },
                  { value: 'bottom-end', label: 'Bottom End' },
                  { value: 'top-start', label: 'Top Start' },
                  { value: 'top-end', label: 'Top End' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as HoverCardSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />

              <TextInput
                label="Open Delay (ms)"
                type="number"
                min={0}
                max={1000}
                step={50}
                value={openDelay}
                onChange={(e) => setOpenDelay(Number(e.target.value))}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <HoverCard
              variant={variant}
              size={size}
              position={position}
              openDelay={openDelay}
              trigger={
                <Button variant="primary">
                  Hover Over This Button
                </Button>
              }
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Avatar name="Sarah Jenkins" size="md" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Sarah Jenkins</h4>
                    <p className="text-xs text-slate-500">@sarah_design</p>
                  </div>
                  <Badge size="sm" variant="gradient" className="ml-auto">PRO</Badge>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lead Product Designer @corecircle. Building accessible design systems and design tokens.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Calendar size={13} />
                  <span>Joined March 2022</span>
                </div>
              </div>
            </HoverCard>
          </div>

          {/* Live Code Output */}
          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generatedCode) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
