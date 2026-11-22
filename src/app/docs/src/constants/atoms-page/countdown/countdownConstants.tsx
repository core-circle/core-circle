import React from 'react';
import { Countdown } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const COUNTDOWN_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Countdown' },
];

export const COUNTDOWN_HEADER_CONTENT = {
  title: 'Countdown',
  description:
    'A live precision timer countdown displaying Days, Hours, Minutes, and Seconds with segmented boxes, minimal colons, and automated expiration callbacks.',
};

export const COUNTDOWN_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore product launches, flash sales, live broadcasts, and session timeouts.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore segmented boxes, card containers, minimal typography, and sizing scales.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test real-time ticking, label toggles, and size variations.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'E-commerce limited time offer and sale expiration banner pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const futureDate48h = new Date(Date.now() + 1000 * 60 * 60 * 48 + 1000 * 60 * 15);
const futureDate2h = new Date(Date.now() + 1000 * 60 * 60 * 2 + 1000 * 60 * 45);

export const COUNTDOWN_THEME_CONFIGS = [
  {
    id: 'theming-product-launch',
    title: '1. Global Product Launch Keynote Theme',
    description: 'Hero scale countdown blocks for major announcements and release dates.',
    previewTitle: 'CoreCircle 2.0 Global Keynote',
    code: `<Countdown
  targetDate={launchDate}
  size="lg"
  variant="boxes"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Countdown targetDate={futureDate48h} size="lg" variant="boxes" />
      </div>
    ),
  },
  {
    id: 'theming-flash-sale',
    title: '2. Cyber Week Flash Sale Offer Theme',
    description: 'Elevated card surface for limited-time retail promotion banners.',
    previewTitle: '40% Off Pro Annual Subscriptions',
    code: `<Countdown
  targetDate={saleEndDate}
  size="md"
  variant="cards"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Countdown targetDate={futureDate48h} size="md" variant="cards" />
      </div>
    ),
  },
  {
    id: 'theming-live-webinar',
    title: '3. Live Broadcast & Webinar Starting Soon Theme',
    description: 'Hours and minutes focus for live streaming event countdowns.',
    previewTitle: 'Design Systems Live Stream',
    code: `<Countdown
  targetDate={webinarTime}
  showDays={false}
  size="md"
  variant="boxes"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Countdown targetDate={futureDate2h} showDays={false} size="md" variant="boxes" />
      </div>
    ),
  },
  {
    id: 'theming-session-timeout',
    title: '4. Security Session Expiration Theme',
    description: 'Minimal compact countdown clock for authenticated banking portals.',
    previewTitle: 'Banking Idle Timeout',
    code: `<div className="flex items-center gap-2 text-sm text-slate-600">
  <span>Session expires in:</span>
  <Countdown targetDate={sessionExpiry} variant="minimal" size="sm" showDays={false} />
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-600">Session expires in:</span>
          <Countdown targetDate={futureDate2h} variant="minimal" size="sm" showDays={false} />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-compact-pill',
    title: '5. Compact Navigation Header Theme',
    description: 'Small pill blocks embedded in navigation topbars.',
    previewTitle: 'Deal of the Day',
    code: `<Countdown targetDate={dealEnd} size="sm" variant="boxes" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Countdown targetDate={futureDate48h} size="sm" variant="boxes" />
      </div>
    ),
  },
];

export const COUNTDOWN_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Variant Presentation Styles',
    description: 'Segmented individual boxes, elevated cards, and minimal inline digits.',
    items: [
      {
        title: 'Segmented Boxes',
        code: `<Countdown targetDate={targetDate} variant="boxes" />`,
        render: () => (
          <Countdown targetDate={futureDate48h} variant="boxes" />
        ),
      },
      {
        title: 'Elevated Card Container',
        code: `<Countdown targetDate={targetDate} variant="cards" />`,
        render: () => (
          <Countdown targetDate={futureDate48h} variant="cards" />
        ),
      },
      {
        title: 'Minimal Inline Typography',
        code: `<Countdown targetDate={targetDate} variant="minimal" />`,
        render: () => (
          <Countdown targetDate={futureDate48h} variant="minimal" />
        ),
      },
    ],
  },
  {
    id: 'group-sizing',
    title: 'Scale & Segment Controls',
    description: 'Sizing tiers (sm, md, lg) and segment toggles.',
    items: [
      {
        title: 'Hero Large Scale (lg)',
        code: `<Countdown targetDate={targetDate} size="lg" />`,
        render: () => (
          <Countdown targetDate={futureDate48h} size="lg" />
        ),
      },
      {
        title: 'Compact Scale (sm)',
        code: `<Countdown targetDate={targetDate} size="sm" />`,
        render: () => (
          <Countdown targetDate={futureDate48h} size="sm" />
        ),
      },
      {
        title: 'Without Days Segment',
        code: `<Countdown targetDate={targetDate} showDays={false} />`,
        render: () => (
          <Countdown targetDate={futureDate48h} showDays={false} />
        ),
      },
    ],
  },
];

export const COUNTDOWN_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test live countdown timers, sizing scales, and segment visibility.',
};

export const COUNTDOWN_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Promotional announcement banner integration with countdown timer.',
  snippets: [
    {
      label: 'FlashSaleBanner.tsx',
      code: `import React from 'react';
import { Countdown, Button } from '@core-circle/ui';

export const FlashSaleBanner: React.FC<{ saleEndTime: string }> = ({ saleEndTime }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-900 text-white rounded-2xl">
      <div>
        <h3 className="text-lg font-bold">Black Friday Exclusive Deals</h3>
        <p className="text-xs text-slate-400">Save up to 50% across all enterprise plans.</p>
      </div>
      <div className="flex items-center gap-4">
        <Countdown targetDate={saleEndTime} size="sm" variant="boxes" />
        <Button variant="primary" size="sm">Claim Offer</Button>
      </div>
    </div>
  );
};`,
    },
  ],
};

export const COUNTDOWN_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Countdown } from '@core-circle/ui';

export default function LaunchTimer() {
  const launchDate = new Date('2026-12-31T00:00:00Z');
  return <Countdown targetDate={launchDate} size="md" variant="boxes" />;
}`,
  },
};

export const COUNTDOWN_PROPS_DATA: PropItem[] = [
  {
    name: 'targetDate',
    type: 'Date | string | number',
    defaultValue: 'undefined',
    description: 'Target expiration deadline date, timestamp, or ISO string.',
  },
  {
    name: 'onFinish',
    type: '() => void',
    defaultValue: 'undefined',
    description: 'Callback fired once when countdown reaches 00:00:00:00.',
  },
  {
    name: 'variant',
    type: "'boxes' | 'cards' | 'minimal'",
    defaultValue: "'boxes'",
    description: 'Visual framing style: individual rounded boxes, elevated card, or inline text.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Sizing scale of digit blocks and text labels.',
  },
  {
    name: 'showDays',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render the Days digit segment.',
  },
  {
    name: 'showLabels',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display uppercase text labels (Days, Hours, Minutes, Seconds) beneath digits.',
  },
];
