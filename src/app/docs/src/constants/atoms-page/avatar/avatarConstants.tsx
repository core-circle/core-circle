import type { ReactNode } from 'react';
import { Avatar, Typography, Badge, Button } from '@core-circle/ui';
import { Shield, Mail, Star, Clock } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface AvatarThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface AvatarVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const AVATAR_HEADER_CONTENT = {
  title: 'Avatar',
  description:
    'A visual representation of a user or entity, with support for images, initials, and fallback icons.',
};

export const AVATAR_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Avatar' },
];

export const AVATAR_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description:
      'Avatars are used throughout the application to represent users in profile sections, comments, and lists.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Multiple shapes, sizes, and fallback states to suit any context.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];

export const AVATAR_THEME_CONFIGS: AvatarThemeConfig[] = [
  {
    id: 'theming-executive-directory',
    sectionTitle: '1. Executive Directory & Team Profile Theme',
    description:
      'Polished profile card with presence badge, verified credentials, and communication CTA.',
    previewTitle: 'Executive Profile Card',
    render: () => (
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
              <Typography
                variant="h4"
                className="font-core-circle-bold text-core-circle-text-main"
              >
                Sarah Jenkins, Ph.D.
              </Typography>
              <Badge
                variant="primary"
                size="sm"
                shape="pill"
                startIcon={<Shield size={12} />}
              >
                VP Eng
              </Badge>
            </div>
            <Typography
              variant="p"
              className="text-xs text-core-circle-text-muted mt-0.5"
            >
              Platform Architecture • CoreCircle Cloud
            </Typography>
          </div>
        </div>
        <Button variant="outline" size="sm" startIcon={<Mail size={14} />}>
          Contact
        </Button>
      </div>
    ),
    code: `<div className="flex items-center gap-4 p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
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
</div>`,
  },
  {
    id: 'theming-collaborative-banner',
    sectionTitle: '2. Real-Time Workspace Collaboration Presence Theme',
    description:
      'Active collaborative document header displaying active editors with presence rings.',
    previewTitle: 'Document Co-editing Header',
    render: () => (
      <div className="w-full max-w-xl p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Typography
            variant="h4"
            className="text-sm font-core-circle-bold text-core-circle-text-main"
          >
            Q3 Product Roadmap RFC
          </Typography>
          <Badge variant="success" size="sm" shape="pill">
            Live
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <Avatar size="sm" name="Alex Rivera" status="online" bordered />
            <Avatar size="sm" name="Elena Rostova" status="online" bordered />
            <Avatar size="sm" name="Kenji Sato" status="busy" bordered />
          </div>
          <Typography
            variant="p"
            className="text-xs text-core-circle-text-muted"
          >
            3 editors active
          </Typography>
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
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
</div>`,
  },
  {
    id: 'theming-support-desk',
    sectionTitle: '3. Customer Support & Priority Help Desk Theme',
    description:
      'Support specialist card with real-time response indicator and direct resolution link.',
    previewTitle: 'Support Specialist Widget',
    render: () => (
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
              <Typography
                variant="h4"
                className="font-core-circle-bold text-core-circle-text-main text-sm"
              >
                Marcus Bell
              </Typography>
              <span className="text-amber-500 flex items-center text-xs gap-0.5">
                <Star size={12} className="fill-amber-500" /> 4.9
              </span>
            </div>
            <Typography
              variant="p"
              className="text-xs text-emerald-600 font-medium mt-0.5"
            >
              Typically replies in &lt; 2 mins
            </Typography>
          </div>
        </div>
        <Button size="sm" variant="primary">
          Start Chat
        </Button>
      </div>
    ),
    code: `<div className="p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
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
      <Typography variant="p" className="text-xs text-emerald-600 font-medium mt-0.5">
        Typically replies in &lt; 2 mins
      </Typography>
    </div>
  </div>
  <Button size="sm" variant="primary">Start Chat</Button>
</div>`,
  },
  {
    id: 'theming-author-byline',
    sectionTitle: '4. Editorial Article Byline & Author Theme',
    description:
      'Clean byline format for blog posts and whitepapers with publication metadata.',
    previewTitle: 'Publication Author Byline',
    render: () => (
      <div className="w-full max-w-xl flex items-center gap-3 py-3 border-y border-core-circle-border-main">
        <Avatar size="md" name="Devon Vance" shape="circle" bordered />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Typography
              variant="h4"
              className="font-core-circle-bold text-core-circle-text-main text-sm"
            >
              Devon Vance
            </Typography>
            <Badge variant="neutral" size="sm" shape="pill">
              Staff Writer
            </Badge>
          </div>
          <Typography
            variant="p"
            className="text-xs text-core-circle-text-muted mt-0.5 flex items-center gap-2"
          >
            <Clock size={12} /> May 18, 2026 • 6 min read
          </Typography>
        </div>
        <Button variant="ghost" size="sm">
          Follow
        </Button>
      </div>
    ),
    code: `<div className="flex items-center gap-3 py-3 border-y border-core-circle-border-main">
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
</div>`,
  },
  {
    id: 'theming-audit-log',
    sectionTitle: '5. Security & Audit Trail Activity Theme',
    description:
      'Activity record capturing system actions with actor initials and authorization state.',
    previewTitle: 'Audit Trail Entry',
    render: () => (
      <div className="w-full max-w-xl flex items-center gap-3 p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main">
        <Avatar size="sm" name="System Admin" shape="square" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-core-circle-bold text-core-circle-text-main">
              sysadmin@corecircle.dev
            </span>
            <Badge variant="warning" size="sm" shape="pill">
              API_KEY_ROTATED
            </Badge>
          </div>
          <Typography
            variant="p"
            className="text-xs text-core-circle-text-muted mt-0.5"
          >
            Production API credentials regenerated from IP 192.168.1.42
          </Typography>
        </div>
        <span className="text-xs text-core-circle-text-muted">4m ago</span>
      </div>
    ),
    code: `<div className="flex items-center gap-3 p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main">
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
</div>`,
  },
];

export const AVATAR_VARIANT_GROUPS: AvatarVariantGroup[] = [
  {
    id: 'avatar-variants-shapes',
    title: '1. Shape Variants',
    description:
      'Available in Circle, Rounded, and Square shapes to match your UI aesthetic.',
    render: () => (
      <div className="flex items-center gap-8">
        <Avatar shape="circle" name="Circle" size="lg" />
        <Avatar shape="rounded" name="Rounded" size="lg" />
        <Avatar shape="square" name="Square" size="lg" />
      </div>
    ),
  },
  {
    id: 'avatar-variants-status',
    title: '2. Presence Status Indicators',
    description:
      'Real-time status indicators for Online, Away, Busy, and Offline.',
    render: () => (
      <div className="flex items-center gap-8">
        <Avatar status="online" size="lg" name="User" />
        <Avatar status="away" size="lg" name="User" />
        <Avatar status="busy" size="lg" name="User" />
        <Avatar status="offline" size="lg" name="User" />
      </div>
    ),
  },
  {
    id: 'avatar-variants-sizes',
    title: '3. Size Scale',
    description: 'Comprehensive scale from xs (24px) to 2xl (64px).',
    render: () => (
      <div className="flex items-center gap-6">
        <Avatar size="xs" name="Alex Vance" />
        <Avatar size="sm" name="Alex Vance" />
        <Avatar size="md" name="Alex Vance" />
        <Avatar size="lg" name="Alex Vance" />
        <Avatar size="xl" name="Alex Vance" />
        <Avatar size="2xl" name="Alex Vance" />
      </div>
    ),
  },
  {
    id: 'avatar-variants-bordered',
    title: '4. Bordered Ring & Elevation',
    description:
      'Add a crisp border ring around the avatar for enhanced surface contrast.',
    render: () => (
      <div className="flex items-center gap-8">
        <Avatar
          bordered
          size="xl"
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80"
        />
        <Avatar bordered size="xl" name="Core Circle" />
      </div>
    ),
  },
];

export const AVATAR_PLAYGROUND_SECTION = {
  id: 'avatar-playground',
  title: 'Interactive Playground',
  description:
    'Customize avatar variants, sizes, and behaviors in real-time.',
};

export const AVATAR_MOCK_SECTION = {
  id: 'avatar-mock',
  title: 'Dynamic User Directory API Consumer',
  description:
    'Consume user profiles and render avatars with fallback initials and presence status.',
  snippets: [
    {
      label: 'Sample Backend User Response',
      code: JSON.stringify(
        {
          users: [
            {
              id: 1,
              name: 'Alice Freeman',
              avatar: 'https://example.com/alice.jpg',
              status: 'online',
            },
            { id: 2, name: 'Bob Martin', avatar: null, status: 'away' },
            {
              id: 3,
              name: 'Charlie Davis',
              avatar: 'https://example.com/charlie.jpg',
              status: 'busy',
            },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Implementation Component',
      code: `import { Avatar } from '@core-circle/ui';

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
);`,
    },
  ],
};

export const AVATAR_OVERVIEW_SECTION = {
  id: 'avatar-usage',
  title: 'Introduction',
  description:
    'The Avatar atom represents a user or entity with an image, auto-generated initials, or fallback icon.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Avatar } from '@core-circle/ui';

<Avatar 
  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
  name="Sarah Jenkins" 
  status="online" 
  size="lg" 
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const AVATAR_PROPS_DATA: PropItem[] = [
  {
    name: 'src',
    type: 'string',
    defaultValue: '-',
    description: 'The image source for the avatar.',
  },
  {
    name: 'alt',
    type: 'string',
    defaultValue: '""',
    description: 'Alternative text for the image.',
  },
  {
    name: 'name',
    type: 'string',
    defaultValue: '-',
    description:
      'The name of the user, used to generate initials if image is missing.',
  },
  {
    name: 'size',
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
    defaultValue: '"md"',
    description: 'The size of the avatar.',
  },
  {
    name: 'shape',
    type: '"circle" | "square" | "rounded"',
    defaultValue: '"circle"',
    description: 'The shape of the avatar.',
  },
  {
    name: 'status',
    type: '"online" | "offline" | "away" | "busy"',
    defaultValue: '-',
    description: 'Optional status indicator.',
  },
  {
    name: 'bordered',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to show a border around the avatar.',
  },
];
