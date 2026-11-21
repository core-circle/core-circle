'use client';

import { AvatarGroupContainerProps } from '../../../interface/containers/atoms/avatar-group.types';
import React from 'react';
import Link from 'next/link';
import { AvatarGroup, Avatar, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  UserCircle, 
  Shield, 
  Sparkles, 
  Terminal, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AvatarGroupPlayground } from '../../../components/playground/avatar-group/avatarGroupPlayground';
import { avatarGroupPageStyles as s } from './avatar-group.styles';
import { AVATAR_GROUP_PROPS_DATA } from '../../../constants/atoms-page/avatar-group/avatarGroupConstants';

const COLLABORATORS = [
  { fallback: 'AK', name: 'Alex Knight', status: 'online' as const },
  { fallback: 'SL', name: 'Sarah Lin', status: 'online' as const },
  { fallback: 'DV', name: 'David Vance', status: 'busy' as const },
  { fallback: 'EL', name: 'Elena Rostova', status: 'offline' as const },
  { fallback: 'MJ', name: 'Michael Jordan' },
  { fallback: 'CW', name: 'Claire Wright' },
  { fallback: 'RB', name: 'Robert Bruce' },
];

export default function AvatarGroupContainer({
  headerContent,
  breadcrumbItems
}: AvatarGroupContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. GitHub Pull Request Reviewers */}
          <DocSection
            id="theming-pr-reviewers"
            title="1. GitHub Pull Request Reviewers & Approvals Theme"
            description="Clean white-ringed avatar stack with green approval badges and branch assignees."
          >
            <ComponentPreview
              title="Pull Request Reviewers"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
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
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Figma Realtime Canvas Collaborators */}
          <DocSection
            id="theming-figma-canvas"
            title="2. Realtime Multiplayer Canvas Collaborators Theme"
            description="Radiant purple gradient avatar rings indicating live active cursors on canvas."
          >
            <ComponentPreview
              title="Active Canvas Collaborators"
              code={`<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle flex items-center justify-between w-full">
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
</div>`}
            >
              <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle flex items-center justify-between w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Cyber Gaming Lobby Room */}
          <DocSection
            id="theming-gaming-lobby"
            title="3. Cyber Neon Tournament Lobby Team Theme"
            description="Luminous emerald halo outlines for competitive esport squad rosters."
          >
            <ComponentPreview
              title="Esport Squad Roster"
              code={`<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-emerald-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
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
</div>`}
            >
              <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-emerald-500/30 shadow-core-circle-subtle flex items-center justify-between w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. VIP Concierge Support Team */}
          <DocSection
            id="theming-vip-concierge"
            title="4. VIP Dedicated Concierge Account Team Theme"
            description="Frosted glassmorphism avatar ring cluster with direct support routing."
          >
            <ComponentPreview
              title="Dedicated Account Team"
              code={`<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm flex items-center justify-between w-full">
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
</div>`}
            >
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm flex items-center justify-between w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Linear Issue Project Assignees */}
          <DocSection
            id="theming-linear-assignees"
            title="5. Project Management Issue Assignees Theme"
            description="Compact dark border avatar cluster embedded in sprint task boards."
          >
            <ComponentPreview
              title="Sprint Issue Assignees"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
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
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm flex items-center justify-between w-full">
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
          {/* 1. Ring Styles */}
          <DocSection
            id="avatar-group-variants-rings"
            title="1. Ring Border Styles (Default, Bordered, Primary Ring)"
            description="High-contrast white rings, subtle slate borders, and primary brand outlines."
          >
            <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <div className="text-center space-y-2">
                <AvatarGroup max={3} variant="default" items={COLLABORATORS.slice(0, 4)} />
                <p className="text-xs text-slate-500">Default Ring</p>
              </div>
              <div className="text-center space-y-2">
                <AvatarGroup max={3} variant="bordered" items={COLLABORATORS.slice(0, 4)} />
                <p className="text-xs text-slate-500">Bordered Ring</p>
              </div>
              <div className="text-center space-y-2">
                <AvatarGroup max={3} variant="ring" items={COLLABORATORS.slice(0, 4)} />
                <p className="text-xs text-slate-500">Primary Brand Ring</p>
              </div>
            </div>
          </DocSection>

          {/* 2. Radiant Gradient & Neon Glow */}
          <DocSection
            id="avatar-group-variants-glow-gradient"
            title="2. Gradient & Neon Glow Rings"
            description="Luminous emerald halos and purple gradient outlines."
          >
            <div className="flex flex-wrap gap-8 items-center justify-around p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
              <div className="text-center space-y-2">
                <AvatarGroup max={3} variant="gradient" items={COLLABORATORS.slice(0, 4)} />
                <p className="text-xs text-purple-300">Gradient Ring</p>
              </div>
              <div className="text-center space-y-2">
                <AvatarGroup max={3} variant="glow" items={COLLABORATORS.slice(0, 4)} />
                <p className="text-xs text-emerald-400">Neon Glow Ring</p>
              </div>
            </div>
          </DocSection>

          {/* 3. Negative Spacing Overlaps */}
          <DocSection
            id="avatar-group-variants-spacing"
            title="3. Negative Spacing Densities (Compact, Normal, Relaxed)"
            description="Control the horizontal overlap distance between adjacent avatars."
          >
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
          </DocSection>

          {/* 4. Dimensional Scales (xs - xl) */}
          <DocSection
            id="avatar-group-variants-sizes"
            title="4. Scale Sizes (xs, sm, md, lg, xl)"
            description="Proportionally scaled avatar sizes with matching overflow badges."
          >
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
          id="avatar-group-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, max thresholds, negative spacing, and live React code generation."
        >
          <AvatarGroupPlayground />
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
            id="avatar-group-mock-section"
            title="Dynamic Project Team API Integration"
            description="Pattern for rendering dynamic team member rosters from a remote organization API."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Project Members Payload"
                code={JSON.stringify({
                  projectId: "proj_9f82b1",
                  teamName: "Core UI Platform",
                  members: [
                    { id: "usr_1", name: "Alex Knight", initials: "AK", status: "online" },
                    { id: "usr_2", name: "Sarah Lin", initials: "SL", status: "online" },
                    { id: "usr_3", name: "David Vance", initials: "DV", status: "busy" },
                    { id: "usr_4", name: "Elena Rostova", initials: "ER", status: "offline" }
                  ],
                  totalMembers: 14
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Team Avatar Group Component"
                code={`import React, { useState, useEffect } from 'react';
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
          <DocSection
            id="avatar-group-overview-intro"
            title="Introduction"
            description="The AvatarGroup component organizes multiple user avatars into a clean overlapping horizontal cluster. It features automatic overflow truncation (+N badge), 10 surface ring variants, hover scale elevations, and negative spacing controls."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { AvatarGroup } from '@core-circle/ui';

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
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={AVATAR_GROUP_PROPS_DATA} />
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
