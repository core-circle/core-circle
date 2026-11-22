'use client';

import type { ReactNode } from 'react';
import { AvatarGroup, Badge } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface AvatarGroupThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface AvatarGroupVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const COLLABORATORS = [
  { fallback: 'AK', name: 'Alex Knight', status: 'online' as const },
  { fallback: 'SL', name: 'Sarah Lin', status: 'online' as const },
  { fallback: 'DV', name: 'David Vance', status: 'busy' as const },
  { fallback: 'EL', name: 'Elena Rostova', status: 'offline' as const },
  { fallback: 'MJ', name: 'Michael Jordan' },
  { fallback: 'CW', name: 'Claire Wright' },
  { fallback: 'RB', name: 'Robert Bruce' },
];

export const AVATAR_GROUP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'AvatarGroup' },
];

export const AVATAR_GROUP_HEADER_CONTENT = {
  title: 'AvatarGroup',
  description:
    'A stacked cluster of user identity avatars featuring configurable maximum thresholds, +N overflow badges, hover zoom interactions, and 10 styling ring variants.',
};

export const AVATAR_GROUP_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade avatar groups for GitHub PR reviewers, Figma realtime canvas collaborators, Linear project assignees, and multiplayer lobbies.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 10 surface border rings, neon halos, compact spacings, and sizes from xs through xl.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive avatar group sandbox with live overflow calculation, size adjustments, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic team collaborators API response payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const AVATAR_GROUP_THEME_CONFIGS: AvatarGroupThemeConfig[] = [
  {
    id: 'theming-pr-reviewers',
    sectionTitle: '1. GitHub Pull Request Reviewers & Approvals Theme',
    description:
      'Clean white-ringed avatar stack with green approval badges and branch assignees.',
    previewTitle: 'Pull Request Reviewers',
    render: () => (
      <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="success" size="sm" shape="pill">
              Approved
            </Badge>
            <span className="font-mono text-xs font-bold text-slate-500">
              PR #1284
            </span>
          </div>
          <h4 className="font-bold text-sm text-slate-900 mt-1">
            feat(core-circle): add Wave 1 atom components
          </h4>
        </div>
        <AvatarGroup
          max={3}
          size="md"
          variant="ring"
          items={[
            { fallback: 'AK', name: 'Alex Knight', status: 'online' },
            { fallback: 'SL', name: 'Sarah Lin', status: 'online' },
            { fallback: 'DV', name: 'David Vance', status: 'busy' },
            { fallback: 'EL', name: 'Elena Rostova' },
          ]}
        />
      </div>
    ),
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div>
    <div className="flex items-center gap-2">
      <Badge variant="success" size="sm" shape="pill">Approved</Badge>
      <span className="font-mono text-xs font-bold text-slate-500">PR #1284</span>
    </div>
    <h4 className="font-bold text-sm text-slate-900 mt-1">feat(core-circle): add Wave 1 atom components</h4>
  </div>
  <AvatarGroup
    max={3}
    size="md"
    variant="ring"
    items={[
      { fallback: 'AK', name: 'Alex Knight', status: 'online' },
      { fallback: 'SL', name: 'Sarah Lin', status: 'online' },
      { fallback: 'DV', name: 'David Vance', status: 'busy' },
      { fallback: 'EL', name: 'Elena Rostova' }
    ]}
  />
</div>`,
  },
  {
    id: 'theming-figma-canvas',
    sectionTitle: '2. Realtime Multiplayer Canvas Collaborators Theme',
    description:
      'Radiant purple gradient avatar rings indicating live active cursors on canvas.',
    previewTitle: 'Active Canvas Collaborators',
    render: () => (
      <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Live Design Canvas: Design System v2
            </h4>
            <p className="text-xs text-slate-400">
              5 designers editing frame #MainLayout
            </p>
          </div>
        </div>
        <AvatarGroup max={4} size="md" variant="gradient" items={COLLABORATORS} />
      </div>
    ),
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle flex items-center justify-between w-full">
  <div className="flex items-center gap-3">
    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Live Design Canvas: Design System v2</h4>
      <p className="text-xs text-slate-400">5 designers editing frame #MainLayout</p>
    </div>
  </div>
  <AvatarGroup
    max={4}
    size="md"
    variant="gradient"
    items={COLLABORATORS}
  />
</div>`,
  },
  {
    id: 'theming-gaming-lobby',
    sectionTitle: '3. Cyber Neon Tournament Lobby Team Theme',
    description:
      'Luminous emerald halo outlines for competitive esport squad rosters.',
    previewTitle: 'Esport Squad Roster',
    render: () => (
      <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-emerald-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400">
            SQUAD ALPHA (RANK: DIAMOND)
          </span>
          <h4 className="font-bold text-base text-core-circle-text-main mt-1">
            Apex Cyber Champions
          </h4>
        </div>
        <AvatarGroup
          max={3}
          size="lg"
          variant="glow"
          items={[
            { fallback: 'ZX', name: 'ZeroX', status: 'online' },
            { fallback: 'NV', name: 'Nova', status: 'online' },
            { fallback: 'PH', name: 'Phantom', status: 'busy' },
            { fallback: 'VT', name: 'Vector' },
          ]}
        />
      </div>
    ),
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-emerald-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
  <div>
    <span className="text-xs font-mono font-bold text-emerald-400">SQUAD ALPHA (RANK: DIAMOND)</span>
    <h4 className="font-bold text-base text-core-circle-text-main mt-1">Apex Cyber Champions</h4>
  </div>
  <AvatarGroup
    max={3}
    size="lg"
    variant="glow"
    items={[
      { fallback: 'ZX', name: 'ZeroX', status: 'online' },
      { fallback: 'NV', name: 'Nova', status: 'online' },
      { fallback: 'PH', name: 'Phantom', status: 'busy' },
      { fallback: 'VT', name: 'Vector' }
    ]}
  />
</div>`,
  },
  {
    id: 'theming-vip-concierge',
    sectionTitle: '4. VIP Dedicated Concierge Account Team Theme',
    description:
      'Frosted glassmorphism avatar ring cluster with direct support routing.',
    previewTitle: 'Dedicated Account Team',
    render: () => (
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm flex items-center justify-between w-full">
        <div>
          <h4 className="font-bold text-sm text-blue-950">
            Enterprise Dedicated Support Pod
          </h4>
          <p className="text-xs text-blue-700">
            Direct Slack channel & 15min SLA
          </p>
        </div>
        <AvatarGroup
          max={3}
          size="md"
          variant="glassmorphic"
          items={COLLABORATORS.slice(0, 5)}
        />
      </div>
    ),
    code: `<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div>
    <h4 className="font-bold text-sm text-blue-950">Enterprise Dedicated Support Pod</h4>
    <p className="text-xs text-blue-700">Direct Slack channel & 15min SLA</p>
  </div>
  <AvatarGroup
    max={3}
    size="md"
    variant="glassmorphic"
    items={COLLABORATORS.slice(0, 5)}
  />
</div>`,
  },
  {
    id: 'theming-linear-assignees',
    sectionTitle: '5. Project Management Issue Assignees Theme',
    description:
      'Compact dark border avatar cluster embedded in sprint task boards.',
    previewTitle: 'Sprint Issue Assignees',
    render: () => (
      <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Badge variant="warning" size="sm" shape="pill">
            In Progress
          </Badge>
          <span className="font-bold text-sm text-slate-800">
            ENG-4091: Migrate cluster ingress to Envoy v2
          </span>
        </div>
        <AvatarGroup
          max={3}
          size="sm"
          variant="bordered"
          spacing="compact"
          items={COLLABORATORS.slice(0, 4)}
        />
      </div>
    ),
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
  <div className="flex items-center gap-3">
    <Badge variant="warning" size="sm" shape="pill">In Progress</Badge>
    <span className="font-bold text-sm text-slate-800">ENG-4091: Migrate cluster ingress to Envoy v2</span>
  </div>
  <AvatarGroup
    max={3}
    size="sm"
    variant="bordered"
    spacing="compact"
    items={COLLABORATORS.slice(0, 4)}
  />
</div>`,
  },
];

export const AVATAR_GROUP_VARIANT_GROUPS: AvatarGroupVariantGroup[] = [
  {
    id: 'avatar-group-variants-rings',
    title: '1. Ring Border Styles (Default, Bordered, Primary Ring)',
    description:
      'High-contrast white rings, subtle slate borders, and primary brand outlines.',
    render: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <div className="text-center space-y-2">
          <AvatarGroup
            max={3}
            variant="default"
            items={COLLABORATORS.slice(0, 4)}
          />
          <p className="text-xs text-slate-500">Default Ring</p>
        </div>
        <div className="text-center space-y-2">
          <AvatarGroup
            max={3}
            variant="bordered"
            items={COLLABORATORS.slice(0, 4)}
          />
          <p className="text-xs text-slate-500">Bordered Ring</p>
        </div>
        <div className="text-center space-y-2">
          <AvatarGroup
            max={3}
            variant="ring"
            items={COLLABORATORS.slice(0, 4)}
          />
          <p className="text-xs text-slate-500">Primary Brand Ring</p>
        </div>
      </div>
    ),
  },
  {
    id: 'avatar-group-variants-glow-gradient',
    title: '2. Gradient & Neon Glow Rings',
    description: 'Luminous emerald halos and purple gradient outlines.',
    render: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <div className="text-center space-y-2">
          <AvatarGroup
            max={3}
            variant="gradient"
            items={COLLABORATORS.slice(0, 4)}
          />
          <p className="text-xs text-purple-300">Gradient Ring</p>
        </div>
        <div className="text-center space-y-2">
          <AvatarGroup
            max={3}
            variant="glow"
            items={COLLABORATORS.slice(0, 4)}
          />
          <p className="text-xs text-emerald-400">Neon Glow Ring</p>
        </div>
      </div>
    ),
  },
  {
    id: 'avatar-group-variants-spacing',
    title: '3. Negative Spacing Densities (Compact, Normal, Relaxed)',
    description:
      'Control the horizontal overlap distance between adjacent avatars.',
    render: () => (
      <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <div className="text-center space-y-2">
          <AvatarGroup max={4} spacing="compact" items={COLLABORATORS} />
          <p className="text-xs text-slate-500">Compact (-16px)</p>
        </div>
        <div className="text-center space-y-2">
          <AvatarGroup max={4} spacing="normal" items={COLLABORATORS} />
          <p className="text-xs text-slate-500">Normal (-10px)</p>
        </div>
        <div className="text-center space-y-2">
          <AvatarGroup max={4} spacing="relaxed" items={COLLABORATORS} />
          <p className="text-xs text-slate-500">Relaxed (-4px)</p>
        </div>
      </div>
    ),
  },
  {
    id: 'avatar-group-variants-sizes',
    title: '4. Scale Sizes (xs, sm, md, lg, xl)',
    description:
      'Proportionally scaled avatar sizes with matching overflow badges.',
    render: () => (
      <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">XS</span>
          <AvatarGroup max={3} size="xs" items={COLLABORATORS} />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">SM</span>
          <AvatarGroup max={3} size="sm" items={COLLABORATORS} />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">MD</span>
          <AvatarGroup max={3} size="md" items={COLLABORATORS} />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">LG</span>
          <AvatarGroup max={3} size="lg" items={COLLABORATORS} />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 text-xs font-bold text-slate-400">XL</span>
          <AvatarGroup max={3} size="xl" items={COLLABORATORS} />
        </div>
      </div>
    ),
  },
];

export const AVATAR_GROUP_PLAYGROUND_SECTION = {
  id: 'avatar-group-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 variants, max thresholds, negative spacing, and live React code generation.',
};

export const AVATAR_GROUP_MOCK_SECTION = {
  id: 'avatar-group-mock-section',
  title: 'Dynamic Project Team API Integration',
  description:
    'Pattern for rendering dynamic team member rosters from a remote organization API.',
  snippets: [
    {
      label: 'Sample Project Members Payload',
      code: JSON.stringify(
        {
          projectId: 'proj_9f82b1',
          teamName: 'Core UI Platform',
          members: [
            {
              id: 'usr_1',
              name: 'Alex Knight',
              initials: 'AK',
              status: 'online',
            },
            {
              id: 'usr_2',
              name: 'Sarah Lin',
              initials: 'SL',
              status: 'online',
            },
            {
              id: 'usr_3',
              name: 'David Vance',
              initials: 'DV',
              status: 'busy',
            },
            {
              id: 'usr_4',
              name: 'Elena Rostova',
              initials: 'ER',
              status: 'offline',
            },
          ],
          totalMembers: 14,
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Team Avatar Group Component',
      code: `import React, { useState, useEffect } from 'react';
import { AvatarGroup, Spinner } from '@core-circle/ui';

export const DynamicProjectRoster = ({ projectId }) => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(\`/api/v1/projects/\${projectId}/members\`)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, [projectId]);

  if (!team) return <Spinner size="sm" />;

  return (
    <div className="flex items-center justify-between p-4 border rounded-xl">
      <div>
        <h4 className="font-bold text-sm">{team.teamName}</h4>
        <p className="text-xs text-slate-500">{team.totalMembers} total contributors</p>
      </div>
      <AvatarGroup
        max={4}
        size="md"
        variant="gradient"
        items={team.members.map(m => ({
          fallback: m.initials,
          name: m.name,
          status: m.status
        }))}
      />
    </div>
  );
};`,
    },
  ],
};

export const AVATAR_GROUP_OVERVIEW_SECTION = {
  id: 'avatar-group-overview-intro',
  title: 'Introduction',
  description:
    'The AvatarGroup component organizes multiple user avatars into a clean overlapping horizontal cluster. It features automatic overflow truncation (+N badge), 10 surface ring variants, hover scale elevations, and negative spacing controls.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { AvatarGroup } from '@core-circle/ui';

<AvatarGroup
  max={4}
  size="md"
  variant="gradient"
  items={[
    { fallback: 'AK', name: 'Alex Knight', status: 'online' },
    { fallback: 'SL', name: 'Sarah Lin', status: 'online' },
    { fallback: 'DV', name: 'David Vance', status: 'busy' },
    { fallback: 'EL', name: 'Elena Rostova' }
  ]}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const AVATAR_GROUP_PROPS_DATA: PropItem[] = [
  {
    name: 'max',
    type: 'number',
    defaultValue: '4',
    description:
      'Maximum visible avatars before collapsing into the +N overflow count.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description:
      'Uniform dimensional scale applied to avatars and the overflow badge.',
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'ring' | 'glow' | 'glassmorphic' | 'gradient' | 'compact' | 'relaxed' | 'dark' | 'pill'",
    defaultValue: "'default'",
    description: 'Ring surface and drop-shadow halo styling.',
  },
  {
    name: 'spacing',
    type: "'compact' | 'normal' | 'relaxed'",
    defaultValue: "'normal'",
    description: 'Horizontal negative overlap distance between avatar cards.',
  },
  {
    name: 'items',
    type: 'Array<{ src?: string; fallback?: string; name?: string; status?: string }>',
    defaultValue: '-',
    description:
      'Structured array of user data objects to automatically map to Avatars.',
  },
  {
    name: 'renderOverflow',
    type: '(count: number) => React.ReactNode',
    defaultValue: '-',
    description: 'Custom JSX renderer for the trailing +N badge.',
  },
];
