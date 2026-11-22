'use client';

import React from 'react';
import { Tour, Hotspot, Badge } from '@core-circle/ui';
import { Sparkles, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const TOUR_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tour' },
];

export const TOUR_HEADER_CONTENT = {
  title: 'Tour',
  description:
    'A contextual multi-step onboarding walkthrough card and pulsing target hotspot component for guiding users through application features.',
};

export const TOUR_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore SaaS workspace walkthroughs, feature adoption prompts, developer sandbox tours, and security checklist highlights.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore card surface treatments, progress dots, and standalone Hotspot beacons.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive walkthrough sandbox with live step progression and variant controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'User onboarding completion tracking payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sampleTourSteps = [
  {
    title: 'Welcome to Analytics Hub',
    description: 'Monitor real-time server health, latency deciles, and transaction logs in one place.',
    badge: 'Step 1/3',
  },
  {
    title: 'Customizing Token Palettes',
    description: 'Generate white-labeled CSS variables for instant dark mode and theme switching.',
    badge: 'Step 2/3',
  },
  {
    title: 'Exporting Production Bundles',
    description: 'Download audited React 19 packages and static assets directly to your monorepo.',
    badge: 'Step 3/3',
  },
];

export const TOUR_THEME_CONFIGS = [
  {
    id: 'theming-onboarding-welcome',
    title: '1. New Workspace Onboarding Tour',
    description: 'Standard card walkthrough with step counter pills and progress dots.',
    previewTitle: 'New User Onboarding Guide',
    code: `<Tour
  steps={[
    { title: 'Welcome to Analytics Hub', description: 'Monitor real-time server health...', badge: 'Step 1/3' },
    { title: 'Customizing Token Palettes', description: 'Generate white-labeled CSS...', badge: 'Step 2/3' },
    { title: 'Exporting Bundles', description: 'Download audited packages...', badge: 'Step 3/3' },
  ]}
  open
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Tour steps={sampleTourSteps} open={true} />
      </div>
    ),
  },
  {
    id: 'theming-elevated-floating',
    title: '2. Elevated Floating Tooltip Tour',
    description: 'Deep shadow popover anchoring above interface cards.',
    previewTitle: 'Elevated Guidance Popover',
    code: `<Tour
  variant="elevated"
  steps={[
    { title: 'Database Optimization', description: 'Review suggested indexing strategies to decrease p99 latency.', badge: 'Optimization' },
  ]}
  open
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Tour
          variant="elevated"
          steps={[
            {
              title: 'Database Optimization',
              description: 'Review suggested indexing strategies to decrease p99 latency by up to 40%.',
              badge: 'Optimization',
            },
          ]}
          open={true}
        />
      </div>
    ),
  },
  {
    id: 'theming-hotspot-radar',
    title: '3. Pulsing Hotspot Radar Beacons',
    description: 'Standalone pinging radar beacons highlighting unread notifications or new features.',
    previewTitle: 'Interactive Feature Hotspots',
    code: `<div className="flex items-center gap-6">
  <div className="p-4 bg-white border rounded-xl flex items-center gap-3">
    <span>API Keys</span>
    <Hotspot color="primary" />
  </div>
  <div className="p-4 bg-white border rounded-xl flex items-center gap-3">
    <span>Security Audit</span>
    <Hotspot color="emerald" />
  </div>
</div>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="flex flex-wrap items-center gap-6">
          <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm">
            <span className="text-sm font-semibold text-slate-800">API Keys</span>
            <Hotspot color="primary" />
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm">
            <span className="text-sm font-semibold text-slate-800">Security Audit</span>
            <Hotspot color="emerald" />
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm">
            <span className="text-sm font-semibold text-slate-800">System Alert</span>
            <Hotspot color="amber" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-glassmorphic-dialog',
    title: '4. Translucent Frosted Glass Tour',
    description: 'Modern glassmorphic surface backdrop filter.',
    previewTitle: 'Glassmorphic Step Card',
    code: `<Tour
  variant="glassmorphic"
  steps={[
    { title: 'Multi-Region Replication', description: 'Enable global cluster failover with one click.', badge: 'Cluster' },
  ]}
  open
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-gradient-to-r from-blue-50/60 to-purple-50/60 border border-slate-200 rounded-2xl w-full">
        <Tour
          variant="glassmorphic"
          steps={[
            {
              title: 'Multi-Region Replication',
              description: 'Enable global cluster failover with zero manual script modifications.',
              badge: 'Cluster',
            },
          ]}
          open={true}
        />
      </div>
    ),
  },
  {
    id: 'theming-quick-finish',
    title: '5. Single-Step Feature Announcement',
    description: 'Compact card celebrating user milestones or newly released tools.',
    previewTitle: 'Feature Discovery Milestone',
    code: `<Tour
  steps={[
    { title: 'Project Scaffolder Released', description: 'Instantly download configured Next.js 15 zip boilerplates.', badge: 'What\'s New' },
  ]}
  finishLabel="Try Scaffolder"
  open
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <Tour
          steps={[
            {
              title: 'Project Scaffolder Released',
              description: 'Instantly download configured Next.js 15 and React 19 zip boilerplates with tokens.',
              badge: "What's New",
            },
          ]}
          finishLabel="Try Scaffolder"
          open={true}
        />
      </div>
    ),
  },
];

export const TOUR_VARIANT_GROUPS = [
  {
    id: 'variants-surfaces',
    title: '1. Surface Styles',
    description: 'Card, Elevated, and Glassmorphic styling treatments.',
    items: [
      {
        title: 'Card Style (Default)',
        code: '<Tour variant="card" steps={steps} open />',
        render: () => <Tour variant="card" steps={sampleTourSteps} open={true} />,
      },
      {
        title: 'Elevated Style (Floating Shadow)',
        code: '<Tour variant="elevated" steps={sampleTourSteps} open />',
        render: () => <Tour variant="elevated" steps={sampleTourSteps} open={true} />,
      },
      {
        title: 'Glassmorphic Style (Frosted Glass)',
        code: '<Tour variant="glassmorphic" steps={sampleTourSteps} open />',
        render: () => <Tour variant="glassmorphic" steps={sampleTourSteps} open={true} />,
      },
    ],
  },
  {
    id: 'variants-hotspots',
    title: '2. Hotspot Radar Beacons',
    description: 'Pulsing animated indicators across color tokens.',
    items: [
      {
        title: 'Primary Blue Hotspot',
        code: '<Hotspot color="primary" />',
        render: () => <Hotspot color="primary" />,
      },
      {
        title: 'Emerald Green Hotspot',
        code: '<Hotspot color="emerald" />',
        render: () => <Hotspot color="emerald" />,
      },
      {
        title: 'Amber Warning Hotspot',
        code: '<Hotspot color="amber" />',
        render: () => <Hotspot color="amber" />,
      },
    ],
  },
];

export const TOUR_PLAYGROUND_SECTION = {
  id: 'tour-playground-section',
  title: 'Interactive Playground',
  description: 'Step through onboarding cards, toggle skip buttons, and explore styling variants.',
};

export const TOUR_MOCK_SECTION = {
  id: 'tour-mock',
  title: 'User Onboarding Lifecycle API',
  description: 'Persist onboarding milestone completions in backend user profiles.',
  snippets: [
    {
      label: 'Onboarding State Payload',
      code: JSON.stringify(
        {
          userId: 'usr_alex_9912',
          onboardingTour: {
            tourId: 'tour_dashboard_v2',
            completed: false,
            currentStep: 2,
            totalSteps: 3,
            completedSteps: ['step_welcome', 'step_theming'],
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { Tour } from '@core-circle/ui';

export function AppOnboarding() {
  const [open, setOpen] = useState(true);

  const steps = [
    { title: 'Step 1', description: 'First milestone description' },
    { title: 'Step 2', description: 'Second milestone description' },
  ];

  return (
    <Tour
      steps={steps}
      open={open}
      onClose={() => setOpen(false)}
      onFinish={() => {
        // Update user profile API
        setOpen(false);
      }}
    />
  );
}`,
    },
  ],
};

export const TOUR_OVERVIEW_SECTION = {
  id: 'tour-overview',
  title: 'Introduction',
  description:
    'Tour provides a structured multi-step onboarding card with progress indicators, keyboard navigation, and pulsing Hotspot beacons.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Tour, Hotspot } from '@core-circle/ui';

<Tour
  steps={[
    { title: 'Welcome', description: 'Get started with our system' },
  ]}
  open
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TOUR_PROPS_DATA: PropItem[] = [
  {
    name: 'steps',
    type: 'TourStep[]',
    defaultValue: '[]',
    description: 'Array of tour steps with title, description, badge, and placement.',
  },
  {
    name: 'currentStep',
    type: 'number',
    defaultValue: '0',
    description: 'Zero-based active step index.',
  },
  {
    name: 'open',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Controls card visibility.',
  },
  {
    name: 'variant',
    type: "'card' | 'elevated' | 'glassmorphic'",
    defaultValue: "'card'",
    description: 'Surface styling and shadow elevation.',
  },
  {
    name: 'showSkip',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Displays the dismiss / skip button on bottom-left.',
  },
  {
    name: 'onFinish',
    type: '() => void',
    defaultValue: 'undefined',
    description: 'Callback fired when the final step completes.',
  },
  {
    name: 'onClose',
    type: '() => void',
    defaultValue: 'undefined',
    description: 'Callback fired when the user closes or skips the tour.',
  },
];
