import React from 'react';
import { HoverCard, Avatar, Badge, Button } from '@core-circle/ui';
import {
  Calendar,
  ExternalLink,
  Sparkles,
  Info,
  HomeIcon,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

export const HOVER_CARD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'HoverCard' },
];

export const HOVER_CARD_HEADER_CONTENT = {
  title: 'HoverCard',
  description: 'A floating preview card triggered on pointer hover or focus, designed for user profile cards, link previews, contextual tooltips, and rich entity previews.',
};

export const HOVER_CARD_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-ready hover card implementations for social profiles, link bookmarks, API tokens, and rich entity previews.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants, sizing scales, and directional placement coordinates.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive hover card sandbox with live variant, placement, and delay controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic profile data fetching integration with clean loading fallbacks.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const HOVER_CARD_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-user-profile',
    title: '1. User Profile Quick-Peek Theme',
    description: 'Displays author avatar, handle, biography, badges, and join date when hovering an @mention.',
    previewTitle: 'Profile Mention Hover Card',
    code: `<HoverCard
  variant="card"
  position="bottom"
  trigger={<span className="font-semibold text-core-circle-primary hover:underline">@sarah_design</span>}
>
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <Avatar name="Sarah Jenkins" size="md" />
      <div>
        <h4 className="text-sm font-bold text-slate-900">Sarah Jenkins</h4>
        <p className="text-xs text-slate-500">@sarah_design</p>
      </div>
    </div>
    <p className="text-xs text-slate-600">
      Lead Product Designer @corecircle. Building design tokens and UI architecture.
    </p>
  </div>
</HoverCard>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <p className="text-sm text-slate-600">
          Created by{' '}
          <HoverCard
            variant="card"
            position="bottom"
            trigger={
              <span className="font-bold text-core-circle-primary hover:underline cursor-pointer">
                @sarah_design
              </span>
            }
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar name="Sarah Jenkins" size="md" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Sarah Jenkins</h4>
                  <p className="text-xs text-slate-500">@sarah_design</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lead Product Designer @corecircle. Building accessible design systems and token engineering.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar size={13} />
                  <span>Joined March 2022</span>
                </div>
              </div>
            </div>
          </HoverCard>{' '}
          in San Francisco.
        </p>
      </div>
    ),
  },
  {
    id: 'theming-link-preview',
    title: '2. Rich External Link Preview Theme',
    description: 'Translucent preview banner with website title, favicon, and external visit prompt.',
    previewTitle: 'External URL Hover Preview',
    code: `<HoverCard variant="glassmorphic" position="top" trigger={<a>corecircle.design</a>}>
  <div>Website preview card</div>
</HoverCard>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <HoverCard
          variant="glassmorphic"
          position="bottom"
          trigger={
            <Button variant="outline" size="sm" endIcon={<ExternalLink size={14} />}>
              Hover documentation preview
            </Button>
          }
        >
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Docs Portal</span>
              <Badge size="sm" variant="gradient">v2.4.0</Badge>
            </div>
            <h5 className="font-bold text-sm text-slate-900">CoreCircle Component Library</h5>
            <p className="text-xs text-slate-600 leading-normal">
              High-performance React & Tailwind design system with automated accessibility and data-driven documentation.
            </p>
          </div>
        </HoverCard>
      </div>
    ),
  },
  {
    id: 'theming-dark',
    title: '3. Cyber Dark Preview Theme',
    description: 'High-contrast dark card for API metrics, server telemetry, and developer tokens.',
    previewTitle: 'Developer Telemetry Hover Card',
    code: `<HoverCard variant="dark" position="bottom" trigger={<Badge>prod-cluster-01</Badge>}>
  <div>Cluster Health Info</div>
</HoverCard>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-100 border border-slate-200 rounded-2xl w-full">
        <HoverCard
          variant="dark"
          position="bottom"
          trigger={
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-medium cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              us-east-cluster-01
            </span>
          }
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <span className="text-slate-400">Node Status</span>
              <span className="text-emerald-400 font-semibold">Healthy (99.98%)</span>
            </div>
            <div className="text-xs text-slate-300">
              Latency: <span className="font-mono text-white">24ms</span> | CPU: <span className="font-mono text-white">18%</span>
            </div>
          </div>
        </HoverCard>
      </div>
    ),
  },
  {
    id: 'theming-accent',
    title: '4. Accent Ring Focus Theme',
    description: 'Surfaced with branded highlight borders for VIP status, premium tiers, or key notices.',
    previewTitle: 'VIP Membership Hover Card',
    code: `<HoverCard variant="accent" position="bottom" trigger={<Button>Pro Member</Button>}>
  <div>Tier Benefits</div>
</HoverCard>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <HoverCard
          variant="accent"
          position="bottom"
          trigger={
            <Button variant="primary" size="sm" startIcon={<Sparkles size={14} />}>
              Hover Pro Member Badge
            </Button>
          }
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-core-circle-primary uppercase tracking-wider">Enterprise Plan</span>
              <Badge size="sm" variant="gradient">ACTIVE</Badge>
            </div>
            <p className="text-xs text-slate-600">
              Includes unlimited automated accessibility audits, priority support, and multi-tenant token exports.
            </p>
          </div>
        </HoverCard>
      </div>
    ),
  },
  {
    id: 'theming-minimal',
    title: '5. Minimalist Inline Card Theme',
    description: 'Clean subtle borders and crisp typography for uncluttered data tables.',
    previewTitle: 'Minimal Context Card',
    code: `<HoverCard variant="minimal" position="bottom" trigger={<span>Info</span>}>
  <div>Subtle info</div>
</HoverCard>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <HoverCard
          variant="minimal"
          position="bottom"
          trigger={
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium hover:text-slate-800 cursor-pointer">
              <Info size={14} />
              Hover for computation details
            </span>
          }
        >
          <div className="flex flex-col gap-1.5">
            <h6 className="font-bold text-xs text-slate-800">Calculation Method</h6>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Calculated automatically using rolling 30-day weighted averages across all connected active repos.
            </p>
          </div>
        </HoverCard>
      </div>
    ),
  },
];

export const HOVER_CARD_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-surfaces',
    title: 'Surface Variations',
    description: '10 styling surface treatments available for hovercard popovers.',
    items: [
      {
        title: 'Default Card Variant',
        code: `<HoverCard variant="card" trigger={<span>Hover me</span>}><div>Content</div></HoverCard>`,
        render: () => (
          <HoverCard variant="card" trigger={<Button variant="outline" size="sm">Card Variant</Button>}>
            <div className="text-xs text-slate-700">Clean shadow and soft border surface.</div>
          </HoverCard>
        ),
      },
      {
        title: 'Glassmorphic Variant',
        code: `<HoverCard variant="glassmorphic" trigger={<span>Hover me</span>}><div>Content</div></HoverCard>`,
        render: () => (
          <HoverCard variant="glassmorphic" trigger={<Button variant="outline" size="sm">Glassmorphic Variant</Button>}>
            <div className="text-xs text-slate-700">Frosted translucent backdrop blur.</div>
          </HoverCard>
        ),
      },
      {
        title: 'Bordered Strong Variant',
        code: `<HoverCard variant="bordered" trigger={<span>Hover me</span>}><div>Content</div></HoverCard>`,
        render: () => (
          <HoverCard variant="bordered" trigger={<Button variant="outline" size="sm">Bordered Variant</Button>}>
            <div className="text-xs text-slate-800 font-medium">Strong double-width border outline.</div>
          </HoverCard>
        ),
      },
      {
        title: 'Pill Rounded Variant',
        code: `<HoverCard variant="pill" trigger={<span>Hover me</span>}><div>Content</div></HoverCard>`,
        render: () => (
          <HoverCard variant="pill" trigger={<Button variant="outline" size="sm">Pill Variant</Button>}>
            <div className="text-xs text-slate-700 text-center">Rounded 3xl modern pill contour.</div>
          </HoverCard>
        ),
      },
      {
        title: 'Accent Variant',
        code: `<HoverCard variant="accent" trigger={<span>Hover me</span>}><div>Content</div></HoverCard>`,
        render: () => (
          <HoverCard variant="accent" trigger={<Button variant="outline" size="sm">Accent Variant</Button>}>
            <div className="text-xs text-core-circle-primary font-medium">Branded primary glow ring.</div>
          </HoverCard>
        ),
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Scalable width and typography options (sm, md, lg).',
    items: [
      {
        title: 'Small Scale (sm - 256px)',
        code: `<HoverCard size="sm" trigger={<span>Hover</span>}><div>Small</div></HoverCard>`,
        render: () => (
          <HoverCard size="sm" trigger={<Button variant="outline" size="sm">Small (sm)</Button>}>
            <div className="text-xs text-slate-600">Compact width suited for micro-tooltips.</div>
          </HoverCard>
        ),
      },
      {
        title: 'Medium Scale (md - 320px)',
        code: `<HoverCard size="md" trigger={<span>Hover</span>}><div>Medium</div></HoverCard>`,
        render: () => (
          <HoverCard size="md" trigger={<Button variant="outline" size="sm">Medium (md)</Button>}>
            <div className="text-sm text-slate-600">Standard width ideal for user profiles.</div>
          </HoverCard>
        ),
      },
      {
        title: 'Large Scale (lg - 384px)',
        code: `<HoverCard size="lg" trigger={<span>Hover</span>}><div>Large</div></HoverCard>`,
        render: () => (
          <HoverCard size="lg" trigger={<Button variant="outline" size="sm">Large (lg)</Button>}>
            <div className="text-base text-slate-600">Generous space for rich media and multi-row content.</div>
          </HoverCard>
        ),
      },
    ],
  },
];

export const HOVER_CARD_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Hover over the target button to test placement orientations, surface variants, and open/close delay parameters.',
};

export const HOVER_CARD_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Dynamic Entity Hover Integration',
  description: 'Clean pattern for attaching hover cards to data-driven tables or list items.',
  snippets: [
    {
      label: 'UserHoverCard.tsx',
      code: `import React from 'react';
import { HoverCard, Avatar, Badge, Button } from '@core-circle/ui';
import { Calendar } from '@core-circle/icons';

export interface UserRecord {
  id: string;
  name: string;
  handle: string;
  role: string;
  bio: string;
  joinedDate: string;
}

export function UserHoverCard({ user }: { user: UserRecord }) {
  return (
    <HoverCard
      variant="card"
      position="bottom-start"
      trigger={
        <span className="font-semibold text-core-circle-primary hover:underline cursor-pointer">
          @{user.handle}
        </span>
      }
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar name={user.name} size="md" />
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900 leading-tight">{user.name}</h4>
            <p className="text-xs text-slate-500">@{user.handle}</p>
          </div>
          <Badge size="sm" variant="gradient" className="ml-auto">
            {user.role}
          </Badge>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">{user.bio}</p>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Calendar size={13} />
          <span>Joined {user.joinedDate}</span>
        </div>
      </div>
    </HoverCard>
  );
}`,
    },
  ],
};

export const HOVER_CARD_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { HoverCard, Button } from '@core-circle/ui';

export default function MyComponent() {
  return (
    <HoverCard
      variant="card"
      position="bottom"
      trigger={<Button variant="outline">Hover Me</Button>}
    >
      <div className="p-1">
        <h5 className="font-bold text-sm">Contextual Title</h5>
        <p className="text-xs text-slate-500 mt-1">Rich content rendered cleanly on pointer hover.</p>
      </div>
    </HoverCard>
  );
}`,
  },
  propsTableTitle: 'HoverCard Props',
};

export const HOVER_CARD_PROPS_DATA: PropItem[] = [
  {
    name: 'trigger',
    type: 'ReactNode',
    required: true,
    description: 'The interactive element that triggers the hovercard upon hover or keyboard focus.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'Content rendered inside the floating popover card.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'minimal' | 'glassmorphic' | 'gradient' | 'bordered' | 'dark' | 'compact' | 'pill' | 'accent'",
    required: false,
    defaultValue: "'card'",
    description: 'Visual aesthetic styling variant of the hovercard surface.',
  },
  {
    name: 'position',
    type: "'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",
    required: false,
    defaultValue: "'bottom'",
    description: 'Placement orientation of the card relative to the trigger element.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Size scale determining typography size, padding, and width.',
  },
  {
    name: 'openDelay',
    type: 'number',
    required: false,
    defaultValue: '200',
    description: 'Delay in milliseconds before the card opens after pointer enter.',
  },
  {
    name: 'closeDelay',
    type: 'number',
    required: false,
    defaultValue: '150',
    description: 'Delay in milliseconds before the card closes after pointer leave.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description: 'When true, the hovercard will not appear on hover or focus.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the trigger wrapper element.',
  },
  {
    name: 'contentClassName',
    type: 'string',
    required: false,
    description: 'Additional class names applied directly to the floating popover container.',
  },
];
