'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Avatar, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Info, 
  CodeIcon, 
  Palette, 
  Layers, 
  Play, 
  CheckIcon, 
  Shield, 
  Sparkles, 
  Star, 
  Mail, 
  Clock,
  Terminal,
  ExternalLink
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { avatarPageStyles as s } from './avatar.styles';
import { AVATAR_PROPS_DATA } from '../../../constants/atoms-page/avatar/avatarConstants';
import { AvatarPlayground } from '../../../components/playground/avatar/AvatarPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { AvatarContainerProps } from '../../../interface/containers/atoms/avatar.types';

export default function AvatarContainer({
  headerContent,
  breadcrumbItems
}: AvatarContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Executive Leadership Directory Theme */}
          <DocSection
            id="theming-executive-directory"
            title="1. Executive Directory & Team Profile Theme"
            description="Polished profile card with presence badge, verified credentials, and communication CTA."
          >
            <ComponentPreview
              title="Executive Profile Card"
              code={`<div className="flex items-center gap-4 p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
  <Avatar 
    size="xl" 
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
    name="Sarah Jenkins" 
    status="online" 
    bordered 
  />
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-2">
      <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main truncate">
        Sarah Jenkins, Ph.D.
      </Typography>
      <Badge variant="primary" size="sm" shape="pill" startIcon={<Shield size={12} />}>VP Eng</Badge>
    </div>
    <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">
      Platform Architecture • CoreCircle Cloud
    </Typography>
  </div>
  <Button variant="outline" size="sm" startIcon={<Mail size={14} />}>
    Contact
  </Button>
</div>`}
            >
              <div className="w-full max-w-xl p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar 
                    size="xl" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                    name="Sarah Jenkins" 
                    status="online" 
                    bordered 
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main">
                        Sarah Jenkins, Ph.D.
                      </Typography>
                      <Badge variant="primary" size="sm" shape="pill" startIcon={<Shield size={12} />}>VP Eng</Badge>
                    </div>
                    <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">
                      Platform Architecture • CoreCircle Cloud
                    </Typography>
                  </div>
                </div>
                <Button variant="outline" size="sm" startIcon={<Mail size={14} />}>
                  Contact
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Live Collaboration Banner Theme */}
          <DocSection
            id="theming-collaborative-banner"
            title="2. Real-Time Workspace Collaboration Presence Theme"
            description="Active collaborative document header displaying active editors with presence rings."
          >
            <ComponentPreview
              title="Document Co-editing Header"
              code={`<div className="flex items-center justify-between p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
  <div className="flex items-center gap-3">
    <Typography variant="h4" className="text-sm font-core-circle-bold text-core-circle-text-main">
      Q3 Product Roadmap RFC
    </Typography>
    <Badge variant="success" size="sm" shape="pill">Live</Badge>
  </div>
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2">
      <Avatar size="sm" name="Alex Rivera" status="online" bordered />
      <Avatar size="sm" name="Elena Rostova" status="online" bordered />
      <Avatar size="sm" name="Kenji Sato" status="busy" bordered />
    </div>
    <Typography variant="p" className="text-xs text-core-circle-text-muted">
      3 editors active
    </Typography>
  </div>
</div>`}
            >
              <div className="w-full max-w-xl p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Typography variant="h4" className="text-sm font-core-circle-bold text-core-circle-text-main">
                    Q3 Product Roadmap RFC
                  </Typography>
                  <Badge variant="success" size="sm" shape="pill">Live</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <Avatar size="sm" name="Alex Rivera" status="online" bordered />
                    <Avatar size="sm" name="Elena Rostova" status="online" bordered />
                    <Avatar size="sm" name="Kenji Sato" status="busy" bordered />
                  </div>
                  <Typography variant="p" className="text-xs text-core-circle-text-muted">
                    3 editors active
                  </Typography>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Customer Support Help Desk Theme */}
          <DocSection
            id="theming-support-desk"
            title="3. Customer Support & Priority Help Desk Theme"
            description="Support specialist card with real-time response indicator and direct resolution link."
          >
            <ComponentPreview
              title="Support Specialist Widget"
              code={`<div className="p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
  <div className="flex items-center gap-3">
    <Avatar 
      size="lg" 
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
      name="Marcus Bell" 
      status="online" 
      shape="rounded" 
    />
    <div>
      <div className="flex items-center gap-2">
        <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-sm">Marcus Bell</Typography>
        <span className="text-amber-500 flex items-center text-xs"><Star size={12} className="fill-amber-500" /> 4.9</span>
      </div>
      <Typography variant="p" className="text-xs text-emerald-600 text-emerald-600 font-medium mt-0.5">
        Typically replies in &lt; 2 mins
      </Typography>
    </div>
  </div>
  <Button size="sm" variant="primary">Start Chat</Button>
</div>`}
            >
              <div className="w-full max-w-xl p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar 
                    size="lg" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                    name="Marcus Bell" 
                    status="online" 
                    shape="rounded" 
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-sm">Marcus Bell</Typography>
                      <span className="text-amber-500 flex items-center text-xs gap-0.5"><Star size={12} className="fill-amber-500" /> 4.9</span>
                    </div>
                    <Typography variant="p" className="text-xs text-emerald-600 text-emerald-600 font-medium mt-0.5">
                      Typically replies in &lt; 2 mins
                    </Typography>
                  </div>
                </div>
                <Button size="sm" variant="primary">Start Chat</Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Article Editorial Byline Theme */}
          <DocSection
            id="theming-author-byline"
            title="4. Editorial Article Byline & Author Theme"
            description="Clean byline format for blog posts and whitepapers with publication metadata."
          >
            <ComponentPreview
              title="Publication Author Byline"
              code={`<div className="flex items-center gap-3 py-3 border-y border-core-circle-border-main">
  <Avatar size="md" name="Devon Vance" shape="circle" bordered />
  <div className="flex-1">
    <div className="flex items-center gap-2">
      <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-sm">Devon Vance</Typography>
      <Badge variant="neutral" size="sm" shape="pill">Staff Writer</Badge>
    </div>
    <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5 flex items-center gap-2">
      <Clock size={12} /> May 18, 2026 • 6 min read
    </Typography>
  </div>
  <Button variant="ghost" size="sm">Follow</Button>
</div>`}
            >
              <div className="w-full max-w-xl flex items-center gap-3 py-3 border-y border-core-circle-border-main">
                <Avatar size="md" name="Devon Vance" shape="circle" bordered />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-sm">Devon Vance</Typography>
                    <Badge variant="neutral" size="sm" shape="pill">Staff Writer</Badge>
                  </div>
                  <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5 flex items-center gap-2">
                    <Clock size={12} /> May 18, 2026 • 6 min read
                  </Typography>
                </div>
                <Button variant="ghost" size="sm">Follow</Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Security & Governance Audit Log Theme */}
          <DocSection
            id="theming-audit-log"
            title="5. Security & Audit Trail Activity Theme"
            description="Activity record capturing system actions with actor initials and authorization state."
          >
            <ComponentPreview
              title="Audit Trail Entry"
              code={`<div className="flex items-center gap-3 p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main">
  <Avatar size="sm" name="System Admin" shape="square" />
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-2">
      <span className="text-xs font-core-circle-bold text-core-circle-text-main">sysadmin@corecircle.dev</span>
      <Badge variant="warning" size="sm" shape="pill">API_KEY_ROTATED</Badge>
    </div>
    <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">
      Production API credentials regenerated from IP 192.168.1.42
    </Typography>
  </div>
  <span className="text-xs text-core-circle-text-muted">4m ago</span>
</div>`}
            >
              <div className="w-full max-w-xl flex items-center gap-3 p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main">
                <Avatar size="sm" name="System Admin" shape="square" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-core-circle-bold text-core-circle-text-main">sysadmin@corecircle.dev</span>
                    <Badge variant="warning" size="sm" shape="pill">API_KEY_ROTATED</Badge>
                  </div>
                  <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">
                    Production API credentials regenerated from IP 192.168.1.42
                  </Typography>
                </div>
                <span className="text-xs text-core-circle-text-muted">4m ago</span>
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
          <DocSection id="avatar-variants-shapes" title="1. Shape Variants" description="Available in Circle, Rounded, and Square shapes to match your UI aesthetic.">
            <ComponentPreview
              title="Shapes (Circle, Rounded, Square)"
              code={`<Avatar shape="circle" name="Circle" size="lg" />\n<Avatar shape="rounded" name="Rounded" size="lg" />\n<Avatar shape="square" name="Square" size="lg" />`}
            >
              <div className="flex items-center gap-8">
                <Avatar shape="circle" name="Circle" size="lg" />
                <Avatar shape="rounded" name="Rounded" size="lg" />
                <Avatar shape="square" name="Square" size="lg" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="avatar-variants-status" title="2. Presence Status Indicators" description="Real-time status indicators for Online, Away, Busy, and Offline.">
            <ComponentPreview
              title="Status Indicators"
              code={`<Avatar status="online" size="lg" name="User" />\n<Avatar status="away" size="lg" name="User" />\n<Avatar status="busy" size="lg" name="User" />\n<Avatar status="offline" size="lg" name="User" />`}
            >
              <div className="flex items-center gap-8">
                <Avatar status="online" size="lg" name="User" />
                <Avatar status="away" size="lg" name="User" />
                <Avatar status="busy" size="lg" name="User" />
                <Avatar status="offline" size="lg" name="User" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="avatar-variants-sizes" title="3. Size Scale" description="Comprehensive scale from xs (24px) to 2xl (64px).">
            <ComponentPreview
              title="Sizes (xs to 2xl)"
              code={`<Avatar size="xs" name="Alex Vance" />\n<Avatar size="sm" name="Alex Vance" />\n<Avatar size="md" name="Alex Vance" />\n<Avatar size="lg" name="Alex Vance" />\n<Avatar size="xl" name="Alex Vance" />\n<Avatar size="2xl" name="Alex Vance" />`}
            >
              <div className="flex items-center gap-6">
                <Avatar size="xs" name="Alex Vance" />
                <Avatar size="sm" name="Alex Vance" />
                <Avatar size="md" name="Alex Vance" />
                <Avatar size="lg" name="Alex Vance" />
                <Avatar size="xl" name="Alex Vance" />
                <Avatar size="2xl" name="Alex Vance" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="avatar-variants-bordered" title="4. Bordered Ring & Elevation" description="Add a crisp border ring around the avatar for enhanced surface contrast.">
            <ComponentPreview
              title="Bordered Avatars"
              code={`<Avatar bordered size="xl" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80" />\n<Avatar bordered size="xl" name="Core Circle" />`}
            >
              <div className="flex items-center gap-8">
                <Avatar bordered size="xl" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80" />
                <Avatar bordered size="xl" name="Core Circle" />
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection id="avatar-playground" title="Interactive Playground" description="Customize avatar variants, sizes, and behaviors in real-time.">
          <AvatarPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="avatar-mock" title="Dynamic User Directory API Consumer" description="Consume user profiles and render avatars with fallback initials and presence status.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample Backend User Response"
                code={JSON.stringify({
                  users: [
                    { id: 1, name: "Alice Freeman", avatar: "https://example.com/alice.jpg", status: "online" },
                    { id: 2, name: "Bob Martin", avatar: null, status: "away" },
                    { id: 3, name: "Charlie Davis", avatar: "https://example.com/charlie.jpg", status: "busy" }
                  ]
                }, null, 2)}
              />
              <CodeSnippet
                label="Implementation Component"
                code={`import { Avatar } from '@core-circle/ui';

interface UserItem {
  id: number;
  name: string;
  avatar: string | null;
  status: 'online' | 'away' | 'busy' | 'offline';
}

export const ActiveTeamRoster = ({ users }: { users: UserItem[] }) => (
  <div className="flex items-center -space-x-2">
    {users.map(user => (
      <Avatar 
        key={user.id} 
        src={user.avatar || undefined} 
        name={user.name} 
        status={user.status} 
        bordered
        size="md"
      />
    ))}
  </div>
);`}
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
          <DocSection id="avatar-usage" title="Introduction" description="The Avatar atom represents a user or entity with an image, auto-generated initials, or fallback icon.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Avatar } from '@core-circle/ui';

<Avatar 
  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
  name="Sarah Jenkins" 
  status="online" 
  size="lg" 
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={AVATAR_PROPS_DATA} />
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
