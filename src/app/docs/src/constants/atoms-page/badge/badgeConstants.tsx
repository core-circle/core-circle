import type { ReactNode } from 'react';
import { 
  Shield, 
  Sparkles, 
  Star, 
  Tag, 
  ShoppingBag, 
  Terminal, 
  CircleCheck, 
  Users 
} from '@core-circle/icons';
import { Badge, type BadgeProps } from '@core-circle/ui';

export interface BadgeThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface BadgeVariantItem {
  label: string;
  variant: BadgeProps['variant'];
  shape?: BadgeProps['shape'];
  size?: BadgeProps['size'];
}

export interface BadgeVariantGroup {
  id: string;
  title: string;
  description: string;
  items: BadgeVariantItem[];
}

export const BADGE_HEADER_CONTENT = {
  title: 'Badge',
  description: 'A versatile visual indicator used for status signaling, numeric counts, feature tags, and categorization.',
};

export const BADGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Badge' },
];

export const BADGE_THEME_CONFIGS: BadgeThemeConfig[] = [
  {
    id: 'theming-live-server-badges',
    sectionTitle: '1. Live Infrastructure & Security Badges Theme',
    description: 'Status tags with pulsing indicators, verified security icons, and clean pill capsules.',
    previewTitle: 'Cloud Cluster Node Statuses',
    render: () => (
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="success" shape="pill" pulse startIcon={<span className="h-2 w-2 rounded-full bg-emerald-500" />}>
          Live Cluster (99.99%)
        </Badge>
        <Badge variant="primary" shape="pill" startIcon={<Shield size={12} />}>
          TLS 1.3 Active
        </Badge>
        <Badge variant="warning" shape="pill" startIcon={<Sparkles size={12} />}>
          Auto-Scaling (24 Nodes)
        </Badge>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="success" shape="pill" pulse startIcon={<span className="h-2 w-2 rounded-full bg-emerald-500" />}>
    Live Cluster (99.99%)
  </Badge>
  <Badge variant="primary" shape="pill" startIcon={<Shield size={12} />}>
    TLS 1.3 Active
  </Badge>
  <Badge variant="warning" shape="pill" startIcon={<Sparkles size={12} />}>
    Auto-Scaling (24 Nodes)
  </Badge>
</div>`,
  },
  {
    id: 'theming-vip-chips',
    sectionTitle: '2. VIP Loyalty & Member Tier Chips Theme',
    description: 'Luminous gradient badges and star icons for premium membership tiers.',
    previewTitle: 'VIP Loyalty Tier Chips',
    render: () => (
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="gradient" shape="pill" size="md" startIcon={<Star size={14} className="text-amber-500" />}>
          Platinum VIP Member
        </Badge>
        <Badge variant="card" shape="pill" size="md" startIcon={<Sparkles size={14} className="text-purple-600" />}>
          Top 1% Creator
        </Badge>
        <Badge variant="outline" shape="pill" size="md">
          Verified Investor
        </Badge>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="gradient" shape="pill" size="md" startIcon={<Star size={14} className="text-amber-500" />}>
    Platinum VIP Member
  </Badge>
  <Badge variant="card" shape="pill" size="md" startIcon={<Sparkles size={14} className="text-purple-600" />}>
    Top 1% Creator
  </Badge>
  <Badge variant="outline" shape="pill" size="md">
    Verified Investor
  </Badge>
</div>`,
  },
  {
    id: 'theming-ecommerce-badges',
    sectionTitle: '3. E-Commerce Stock & Promotion Pills Theme',
    description: 'High-contrast tags for flash sales, low inventory alerts, and instant shipping flags.',
    previewTitle: 'Storefront Promotion & Inventory Tags',
    render: () => (
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="destructive" shape="pill" size="md" startIcon={<Tag size={12} />}>
          Flash Sale -40%
        </Badge>
        <Badge variant="soft" shape="pill" size="md" startIcon={<ShoppingBag size={12} className="text-emerald-600" />}>
          In Stock (Ready to Ship)
        </Badge>
        <Badge variant="warning" shape="pill" size="md">
          Only 3 Left
        </Badge>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="destructive" shape="pill" size="md" startIcon={<Tag size={12} />}>
    Flash Sale -40%
  </Badge>
  <Badge variant="soft" shape="pill" size="md" startIcon={<ShoppingBag size={12} className="text-emerald-600" />}>
    In Stock (Ready to Ship)
  </Badge>
  <Badge variant="warning" shape="pill" size="md">
    Only 3 Left
  </Badge>
</div>`,
  },
  {
    id: 'theming-dev-git-tags',
    sectionTitle: '4. Developer Git & Pipeline Release Tags Theme',
    description: 'Dense monospace tags for semantic versioning, git commit hashes, and build indicators.',
    previewTitle: 'Release & Build Pipeline Tags',
    render: () => (
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="minimal" shape="rounded" size="sm" startIcon={<Terminal size={12} />}>
          v3.4.2-stable
        </Badge>
        <Badge variant="success" shape="rounded" size="sm" startIcon={<CircleCheck size={12} />}>
          CI Passed (42s)
        </Badge>
        <Badge variant="outline" shape="rounded" size="sm">
          sha: 8f92a1b
        </Badge>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="minimal" shape="rounded" size="sm" startIcon={<Terminal size={12} />}>
    v3.4.2-stable
  </Badge>
  <Badge variant="success" shape="rounded" size="sm" startIcon={<CircleCheck size={12} />}>
    CI Passed (42s)
  </Badge>
  <Badge variant="outline" shape="rounded" size="sm">
    sha: 8f92a1b
  </Badge>
</div>`,
  },
  {
    id: 'theming-team-roles',
    sectionTitle: '5. Workspace Roles & Access Governance Theme',
    description: 'Role chips for workspace permission levels and admin verification.',
    previewTitle: 'Workspace Team Role Chips',
    render: () => (
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="primary" shape="pill" size="md" startIcon={<Shield size={12} />}>
          Workspace Owner
        </Badge>
        <Badge variant="secondary" shape="pill" size="md" startIcon={<Users size={12} />}>
          Billing Admin
        </Badge>
        <Badge variant="soft" shape="pill" size="md">
          Read-Only Guest
        </Badge>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-4 items-center">
  <Badge variant="primary" shape="pill" size="md" startIcon={<Shield size={12} />}>
    Workspace Owner
  </Badge>
  <Badge variant="secondary" shape="pill" size="md" startIcon={<Users size={12} />}>
    Billing Admin
  </Badge>
  <Badge variant="soft" shape="pill" size="md">
    Read-Only Guest
  </Badge>
</div>`,
  },
];

export const BADGE_VARIANT_GROUPS: BadgeVariantGroup[] = [
  {
    id: 'badge-variants-solid',
    title: '1. Brand & Semantic Colors',
    description: 'Solid badges for status indicators and high-contrast labeling.',
    items: [
      { label: 'Primary', variant: 'primary' },
      { label: 'Secondary', variant: 'secondary' },
      { label: 'Success', variant: 'success' },
      { label: 'Warning', variant: 'warning' },
      { label: 'Destructive', variant: 'destructive' },
      { label: 'Info', variant: 'info' },
    ],
  },
  {
    id: 'badge-variants-styles',
    title: '2. Surface & Effect Variants',
    description: 'Outline, soft tint, floating shadow, glassmorphic blur, and gradient styling.',
    items: [
      { label: 'Outline', variant: 'outline' },
      { label: 'Soft Wash', variant: 'soft' },
      { label: 'Card Shadow', variant: 'card' },
      { label: 'Floating Depth', variant: 'floating' },
      { label: 'Glassmorphic', variant: 'glassmorphic' },
      { label: 'Gradient VIP', variant: 'gradient' },
      { label: 'Minimal Flat', variant: 'minimal' },
    ],
  },
  {
    id: 'badge-variants-shapes',
    title: '3. Shapes & Sizing',
    description: 'Pill, rounded, and square contours across small, medium, and large scales.',
    items: [
      { label: 'Small Pill', variant: 'primary', shape: 'pill', size: 'sm' },
      { label: 'Medium Rounded', variant: 'primary', shape: 'rounded', size: 'md' },
      { label: 'Large Square', variant: 'primary', shape: 'square', size: 'lg' },
    ],
  },
];

export const BADGE_PLAYGROUND_SECTION = {
  id: 'badge-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 12 variants, shapes, sizes, removable tags, and live pulse animations.',
};

export const BADGE_MOCK_PAYLOAD = JSON.stringify(
  {
    cluster: 'us-west-prod',
    nodes_online: 48,
    health_status: 'success',
    version: '3.2.0',
  },
  null,
  2
);

export const BADGE_MOCK_CONSUMER_CODE = `import React, { useEffect, useState } from 'react';
import { Badge } from '@core-circle/ui';

export const ClusterStatusChip = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/cluster/status')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return null;

  return (
    <Badge
      variant={data.health_status}
      shape="pill"
      pulse
    >
      {data.cluster} ({data.nodes_online} Nodes)
    </Badge>
  );
};`;

export const BADGE_MOCK_SECTION = {
  id: 'badge-mock',
  title: 'Dynamic Telemetry Badge Integration',
  description: 'Render system status chips dynamically from cluster health metrics.',
  snippets: [
    { label: 'Sample Backend Health Payload', code: BADGE_MOCK_PAYLOAD },
    { label: 'Dynamic Consumer Component', code: BADGE_MOCK_CONSUMER_CODE },
  ],
};

export const BADGE_QUICK_USAGE_CODE = `import { Badge } from '@core-circle/ui';

<Badge variant="success" shape="pill">
  Live Production
</Badge>`;

export const BADGE_OVERVIEW_SECTION = {
  id: 'badge-usage',
  title: 'Introduction',
  description: 'The Badge atom represents status, counts, categories, and tags across dashboards and card components.',
  quickUsage: {
    label: 'Quick Usage',
    code: BADGE_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const BADGE_PROPS_DATA = [
  {
    name: 'variant',
    type: '"primary" | "secondary" | "success" | "warning" | "destructive" | "info" | "ghost" | "outline" | "glassmorphic" | "gradient" | "floating" | "dot"',
    defaultValue: '"primary"',
    description: 'The visual styling variant of the badge (12 variants).',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: 'The vertical padding and font size.',
  },
  {
    name: 'shape',
    type: '"rounded" | "pill" | "square"',
    defaultValue: '"rounded"',
    description: 'The border radius geometry of the badge.',
  },
  {
    name: 'dot',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display an animated active status dot.',
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional leading icon.',
  },
  {
    name: 'endIcon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional trailing icon.',
  },
  {
    name: 'removable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to show a dismissible remove button.',
  },
  {
    name: 'onRemove',
    type: '() => void',
    defaultValue: '-',
    description: 'Callback executed when the remove button is clicked.',
  },
  {
    name: 'pulse',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to apply a gentle pulse animation.',
  },
];

export const BADGE_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Badges highlight statuses, tags, counts, and metadata.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Semantic colors and styles to convey different meanings.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];
