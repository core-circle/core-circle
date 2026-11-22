'use client';

import React, { useState } from 'react';
import { Timeline, Badge, Select, Button } from '@core-circle/ui';
import {
  TimelineOrientation,
  TimelineVariant,
  TimelineSize,
} from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { DOC_TEXT } from '../../../constants/common-constants';
import { timelinePlaygroundStyles as s } from './timelinePlayground.styles';

export const TimelinePlayground: React.FC = () => {
  const [orientation, setOrientation] = useState<TimelineOrientation>('vertical');
  const [variant, setVariant] = useState<TimelineVariant>('solid');
  const [size, setSize] = useState<TimelineSize>('md');

  const demoItems = [
    {
      id: 'step-1',
      title: 'Order Confirmed',
      description: 'Authorized via Stripe Invoice #INV-8821.',
      timestamp: 'Today, 08:30 AM',
      status: 'completed' as const,
    },
    {
      id: 'step-2',
      title: 'Dispatched from Hub',
      description: 'Picked and packed at fulfillment hub.',
      timestamp: 'Today, 01:15 PM',
      status: 'completed' as const,
    },
    {
      id: 'step-3',
      title: 'Out for Delivery',
      description: 'Assigned to courier. Expected by 4:00 PM.',
      timestamp: 'Today, 03:20 PM',
      status: 'current' as const,
      badge: <Badge size="sm" variant="gradient">IN TRANSIT</Badge>,
    },
    {
      id: 'step-4',
      title: 'Delivered',
      description: 'Signature confirmation required.',
      timestamp: 'Pending',
      status: 'upcoming' as const,
    },
  ];

  const generatedCode = `<Timeline
  items={items}
  orientation="${orientation}"
  variant="${variant}"
  size="${size}"
/>`;

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls Panel */}
        <div className={s.controlsWrapper}>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as TimelineOrientation)}
                options={[
                  { value: 'vertical', label: 'Vertical' },
                  { value: 'horizontal', label: 'Horizontal' },
                ]}
                fullWidth
              />

              <Select
                label="Track Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as TimelineVariant)}
                options={[
                  { value: 'solid', label: 'Solid Line' },
                  { value: 'dashed', label: 'Dashed Border' },
                ]}
                fullWidth
              />

              <Select
                label="Size"
                value={size}
                onChange={(e) => setSize(e.target.value as TimelineSize)}
                options={[
                  { value: 'sm', label: 'Small (sm)' },
                  { value: 'md', label: 'Medium (md)' },
                  { value: 'lg', label: 'Large (lg)' },
                ]}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className={orientation === 'vertical' ? 'w-full max-w-md' : 'w-full max-w-2xl overflow-x-auto'}>
              <Timeline
                items={demoItems}
                orientation={orientation}
                variant={variant}
                size={size}
              />
            </div>
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
