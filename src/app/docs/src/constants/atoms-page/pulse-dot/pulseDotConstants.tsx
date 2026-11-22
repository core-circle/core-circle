import React from 'react';
import { PulseDot } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
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

export const PULSE_DOT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'PulseDot' },
];

export const PULSE_DOT_HEADER_CONTENT = {
  title: 'PulseDot',
  description: 'An animated live status indicator beacon with a radiating radar ping pulse effect for system uptime, presence states, live connections, and deployment pipelines.',
};

export const PULSE_DOT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production pulse dot configurations across infrastructure monitoring, member presence, CI/CD pipelines, and NOC health boards.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore operational statuses (online, deploying, busy, away, offline, neutral) across sizing scales.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive pulse beacon sandbox with live status, sizing, ping, and label controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic server status health poller payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const PULSE_DOT_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-system-operational',
    title: '1. Production Cluster Status Theme',
    description: 'Emerald beacon indicating active, zero-latency system health.',
    previewTitle: 'All Systems Operational',
    code: `<PulseDot status="online" size="sm" label="All Systems Operational" />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Engine</span>
          <div className="text-sm font-bold text-slate-900 mt-0.5">us-east-1a Cluster</div>
        </div>
        <PulseDot status="online" size="sm" label="Operational" />
      </div>
    ),
  },
  {
    id: 'theming-deploying-pipeline',
    title: '2. CI/CD Deployment Pipeline Theme',
    description: 'Indigo beacon indicating an in-progress automated deployment.',
    previewTitle: 'Pipeline Deploying Beacon',
    code: `<PulseDot status="deploying" size="sm" label="Deploying Release #412" />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-indigo-50/50 border border-indigo-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Pipeline Status</span>
          <div className="text-sm font-bold text-slate-900 mt-0.5">Branch: main (commit 98f1a)</div>
        </div>
        <PulseDot status="deploying" size="sm" label="Deploying" />
      </div>
    ),
  },
  {
    id: 'theming-active-incident',
    title: '3. Incident & Degraded Performance Theme',
    description: 'Rose-tinted alert beacon signalling an active outage or latency degradation.',
    previewTitle: 'Active Incident Beacon',
    code: `<PulseDot status="busy" size="md" label="Incident Investigated" />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-rose-50/50 border border-rose-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Edge Gateway</span>
          <div className="text-sm font-bold text-slate-900 mt-0.5">Packet Drop Alert</div>
        </div>
        <PulseDot status="busy" size="md" label="Elevated Latency" />
      </div>
    ),
  },
  {
    id: 'theming-user-presence',
    title: '4. User Profile Presence Theme',
    description: 'Subtle micro indicator displaying whether an engineer is actively in workspace.',
    previewTitle: 'Team Member Presence',
    code: `<PulseDot status="away" size="xs" label="In a meeting (Away)" />`,
    render: () => (
      <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
          AJ
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Alex Jenkins</div>
          <PulseDot status="away" size="xs" label="Away" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-offline',
    title: '5. Offline Disconnected Theme',
    description: 'Static neutral dot with ping disabled to reflect inactive state.',
    previewTitle: 'Disconnected Node State',
    code: `<PulseDot status="offline" ping={false} label="Node Offline" />`,
    render: () => (
      <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full max-w-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Worker Node 14</span>
          <div className="text-sm font-bold text-slate-600 mt-0.5">Instance Terminated</div>
        </div>
        <PulseDot status="offline" ping={false} label="Offline" />
      </div>
    ),
  },
];

export const PULSE_DOT_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-statuses',
    title: 'Operational Statuses',
    description: 'Six semantic operational states with corresponding color tokens.',
    items: [
      {
        title: 'Online (Success)',
        code: `<PulseDot status="online" label="Online" />`,
        render: () => <PulseDot status="online" label="Online" />,
      },
      {
        title: 'Deploying (Active)',
        code: `<PulseDot status="deploying" label="Deploying" />`,
        render: () => <PulseDot status="deploying" label="Deploying" />,
      },
      {
        title: 'Busy (Incident/Alert)',
        code: `<PulseDot status="busy" label="Busy" />`,
        render: () => <PulseDot status="busy" label="Busy" />,
      },
      {
        title: 'Away (Warning/Idle)',
        code: `<PulseDot status="away" label="Away" />`,
        render: () => <PulseDot status="away" label="Away" />,
      },
      {
        title: 'Offline (Disabled)',
        code: `<PulseDot status="offline" label="Offline" ping={false} />`,
        render: () => <PulseDot status="offline" label="Offline" ping={false} />,
      },
      {
        title: 'Neutral (Standby)',
        code: `<PulseDot status="neutral" label="Neutral" />`,
        render: () => <PulseDot status="neutral" label="Neutral" />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Four proportional sizing options from extra small (xs) to large (lg).',
    items: [
      {
        title: 'Extra Small (xs - 6px)',
        code: `<PulseDot size="xs" label="Extra Small" />`,
        render: () => <PulseDot size="xs" label="Extra Small (xs)" />,
      },
      {
        title: 'Small Scale (sm - 8px, default)',
        code: `<PulseDot size="sm" label="Small Scale" />`,
        render: () => <PulseDot size="sm" label="Small Scale (sm)" />,
      },
      {
        title: 'Medium Scale (md - 10px)',
        code: `<PulseDot size="md" label="Medium Scale" />`,
        render: () => <PulseDot size="md" label="Medium Scale (md)" />,
      },
      {
        title: 'Large Scale (lg - 12px)',
        code: `<PulseDot size="lg" label="Large Scale" />`,
        render: () => <PulseDot size="lg" label="Large Scale (lg)" />,
      },
    ],
  },
];

export const PULSE_DOT_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test operational status colors, radar ping animations, sizing scales, and label positions.',
};

export const PULSE_DOT_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Infrastructure Telemetry Poller Integration',
  description: 'Pattern for binding live WebSocket or polling server statuses to pulse dots.',
  snippets: [
    {
      label: 'ServerStatusCard.tsx',
      code: `import React from 'react';
import { PulseDot } from '@core-circle/ui';

export interface ServerNode {
  id: string;
  name: string;
  region: string;
  status: 'online' | 'offline' | 'busy' | 'deploying';
  latencyMs: number;
}

export function ServerStatusRow({ node }: { node: ServerNode }) {
  const labelMap = {
    online: 'Healthy',
    offline: 'Down',
    busy: 'High Load',
    deploying: 'Rolling',
  };

  return (
    <div className="flex items-center justify-between p-3 border-b">
      <div>
        <span className="font-semibold text-sm">{node.name}</span>
        <span className="text-xs text-slate-400 ml-2 font-mono">({node.region})</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono">{node.latencyMs}ms</span>
        <PulseDot status={node.status} label={labelMap[node.status]} size="sm" />
      </div>
    </div>
  );
}`,
    },
  ],
};

export const PULSE_DOT_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { PulseDot } from '@core-circle/ui';

export default function MyStatus() {
  return (
    <div className="flex items-center gap-3">
      <PulseDot status="online" size="sm" label="API Online" />
      <PulseDot status="deploying" size="sm" label="Deploying" />
    </div>
  );
}`,
  },
  propsTableTitle: 'PulseDot Props',
};

export const PULSE_DOT_PROPS_DATA: PropItem[] = [
  {
    name: 'status',
    type: "'online' | 'offline' | 'busy' | 'away' | 'deploying' | 'neutral'",
    required: false,
    defaultValue: "'online'",
    description: 'Semantic operational state determining the color palette and ping animation.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'sm'",
    description: 'Size scale controlling dot diameter and label typography.',
  },
  {
    name: 'ping',
    type: 'boolean',
    required: false,
    defaultValue: 'true',
    description: 'Whether to render the animated radiating radar ping pulse effect.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    required: false,
    description: 'Optional textual caption displayed next to the beacon.',
  },
  {
    name: 'labelPlacement',
    type: "'left' | 'right'",
    required: false,
    defaultValue: "'right'",
    description: 'Positioning of the label text relative to the indicator dot.',
  },
  {
    name: 'colorClass',
    type: 'string',
    required: false,
    description: 'Custom Tailwind color utility override for the dot and ping ring.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the container element.',
  },
];
