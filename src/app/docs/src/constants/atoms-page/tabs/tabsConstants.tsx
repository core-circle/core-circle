import React from 'react';
import { Tabs, Badge } from '@core-circle/ui';
import { Cloud, Banknotes, Terminal, Shield, ShoppingBag, HomeIcon } from '@core-circle/icons';
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

export const TABS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tabs' }
];

export const TABS_HEADER_CONTENT = {
  title: 'Tabs',
  description: 'An interactive navigation component organizing content into contextual tabbed panels, featuring 10 distinct styling variants, size scales, icon slots, and controlled/uncontrolled state support.',
};

export const TABS_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade tab navigation implementations for Kubernetes clusters, crypto portfolios, DevOps log streams, IAM role matrices, and dispatch hubs.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 distinct layout and indicator surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live variant selection and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API user dashboard and tab configuration integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const k8sTabs = [
  {
    id: 'nodes',
    label: 'Worker Nodes',
    icon: <Cloud size={16} />,
    content: (
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">12 / 12 Nodes Healthy (us-east-1a, us-east-1b)</span>
        <Badge variant="success" size="sm" shape="pill">Operational</Badge>
      </div>
    ),
  },
  {
    id: 'deployments',
    label: 'Deployments',
    content: (
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">Production Ingress Controller • v2.14.0</span>
        <Badge variant="primary" size="sm" shape="pill">Rolling Update</Badge>
      </div>
    ),
  },
  {
    id: 'secrets',
    label: 'Secrets & Vault',
    content: (
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">KMS Sealed Secrets (AES-256 GCM)</span>
        <Badge variant="outline" size="sm" shape="pill">Encrypted</Badge>
      </div>
    ),
  },
];

const cryptoTabs = [
  {
    id: 'spot',
    label: 'Spot Trading',
    icon: <Banknotes size={16} />,
    content: (
      <div className="p-6 bg-white text-core-circle-text-main border border-purple-200 rounded-core-circle-xl shadow-core-circle-subtle flex items-center justify-between">
        <div>
          <span className="font-mono text-xs text-purple-600">BTC/USD REAL-TIME ORDERBOOK</span>
          <h3 className="font-mono text-2xl font-bold text-core-circle-text-main">$92,450.00</h3>
        </div>
        <Badge variant="gradient" size="sm" shape="pill">+4.82% 24h</Badge>
      </div>
    ),
  },
  {
    id: 'futures',
    label: 'Perp Futures (20x)',
    content: (
      <div className="p-6 bg-white text-core-circle-text-main border border-purple-200 rounded-core-circle-xl shadow-core-circle-subtle flex items-center justify-between">
        <div>
          <span className="font-mono text-xs text-purple-600">CROSS MARGIN LEVERAGE</span>
          <h3 className="font-mono text-xl font-bold text-core-circle-text-main">$480,000.00 Open Interest</h3>
        </div>
        <Badge variant="warning" size="sm" shape="pill">High Leverage</Badge>
      </div>
    ),
  },
];

const devopsTabs = [
  {
    id: 'stdout',
    label: 'Stdout Stream',
    icon: <Terminal size={16} />,
    content: (
      <div className="p-4 bg-slate-50 text-emerald-600 font-mono text-xs rounded-xl border border-slate-800 space-y-1">
        <p>[2026-08-25T16:20:00Z] INF: worker cluster sync completed in 14ms</p>
        <p>[2026-08-25T16:20:01Z] INF: grpc listener online: 0.0.0.0:50051</p>
      </div>
    ),
  },
  {
    id: 'telemetry',
    label: 'Prometheus Metrics',
    content: (
      <div className="p-4 bg-slate-50 text-slate-700 font-mono text-xs rounded-core-circle-xl border border-core-circle-border-main">
        <p>http_requests_total&#123;code=&quot;200&quot;&#125; 1,489,201 req/sec</p>
      </div>
    ),
  },
];

const iamTabs = [
  {
    id: 'roles',
    label: 'IAM Roles',
    icon: <Shield size={16} />,
    content: (
      <div className="p-4 bg-white border border-core-circle-border-main rounded-xl flex items-center justify-between">
        <span className="text-sm font-bold text-core-circle-text-main">AdministratorAccess • 14 Assigned Users</span>
        <Badge variant="primary" size="sm" shape="pill">High Privilege</Badge>
      </div>
    ),
  },
  {
    id: 'policies',
    label: 'Policy Documents',
    content: (
      <div className="p-4 bg-white border border-core-circle-border-main rounded-xl flex items-center justify-between">
        <span className="text-sm font-bold text-core-circle-text-main">Custom JSON RBAC Policy (Strict S3 Deny)</span>
        <Badge variant="success" size="sm" shape="pill">Enforced</Badge>
      </div>
    ),
  },
];

const ecommerceTabs = [
  {
    id: 'pending',
    label: 'Pending Orders (18)',
    icon: <ShoppingBag size={16} />,
    content: (
      <div className="p-4 bg-white border border-core-circle-border-main rounded-xl flex items-center justify-between">
        <span className="text-sm font-medium text-core-circle-text-main">18 orders awaiting courier pickup</span>
        <Badge variant="outline" size="sm" shape="pill">Warehouse 4</Badge>
      </div>
    ),
  },
  {
    id: 'shipped',
    label: 'In Transit (142)',
    content: (
      <div className="p-4 bg-white border border-core-circle-border-main rounded-xl flex items-center justify-between">
        <span className="text-sm font-medium text-core-circle-text-main">142 packages dispatched via FedEx Express</span>
        <Badge variant="success" size="sm" shape="pill">On Schedule</Badge>
      </div>
    ),
  },
];

const standardDemoItems = [
  { id: 'general', label: 'General', content: <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">General settings and workspace details.</div> },
  { id: 'security', label: 'Security', content: <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">2FA enforcement and session management.</div> },
  { id: 'billing', label: 'Billing', content: <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">Payment methods and subscription invoices.</div> },
];

export const TABS_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-k8s-cluster',
    title: '1. Multi-Cloud Kubernetes Cluster Inspector Theme',
    description: 'Pill-styled tab navigation for switching between cloud cluster views.',
    previewTitle: 'Kubernetes Cluster Tabs',
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-core-circle-text-main">Production EKS Cluster (us-east-1)</h4>
    <Badge variant="primary" size="sm" shape="pill">Kubernetes v1.30</Badge>
  </div>
  <Tabs variant="pills" items={k8sTabs} fullWidth />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-core-circle-text-main">Production EKS Cluster (us-east-1)</h4>
          <Badge variant="primary" size="sm" shape="pill">Kubernetes v1.30</Badge>
        </div>
        <Tabs variant="pills" items={k8sTabs} fullWidth />
      </div>
    )
  },
  {
    id: 'theming-crypto-portfolio',
    title: '2. Financial Asset Portfolio & Crypto Exchange Tiers Theme',
    description: 'Radiant purple-indigo gradient tabs for institutional crypto trading.',
    previewTitle: 'Institutional Crypto Exchange Tabs',
    code: `<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-core-circle-text-main">Derivatives Trading Console</h4>
    <Badge variant="gradient" size="sm" shape="pill">VIP Tier 4</Badge>
  </div>
  <Tabs variant="gradient" items={cryptoTabs} fullWidth />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-core-circle-text-main">Derivatives Trading Console</h4>
          <Badge variant="gradient" size="sm" shape="pill">VIP Tier 4</Badge>
        </div>
        <Tabs variant="gradient" items={cryptoTabs} fullWidth />
      </div>
    )
  },
  {
    id: 'theming-devops-logs',
    title: '3. DevOps Terminal Log Telemetry & Metrics Stream Theme',
    description: 'Dark high-contrast tabs with integrated glowing terminal output.',
    previewTitle: 'DevOps Terminal Log Tabs',
    code: `<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-core-circle-text-main">CLUSTER TELEMETRY ENGINE</span>
    <Badge variant="info" size="sm" shape="pill">Real-Time</Badge>
  </div>
  <Tabs variant="glow" items={devopsTabs} fullWidth />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-core-circle-text-main">CLUSTER TELEMETRY ENGINE</span>
          <Badge variant="info" size="sm" shape="pill">Real-Time</Badge>
        </div>
        <Tabs variant="glow" items={devopsTabs} fullWidth />
      </div>
    )
  },
  {
    id: 'theming-iam-roles',
    title: '4. Enterprise IAM Role & Permission Matrix Theme',
    description: 'Elevated card tabs for role-based access control management.',
    previewTitle: 'IAM Role Management Tabs',
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-core-circle-text-main">Zero-Trust Access Control</h4>
    <Badge variant="outline" size="sm" shape="pill">RBAC Policy</Badge>
  </div>
  <Tabs variant="cards" items={iamTabs} fullWidth />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-core-circle-text-main">Zero-Trust Access Control</h4>
          <Badge variant="outline" size="sm" shape="pill">RBAC Policy</Badge>
        </div>
        <Tabs variant="cards" items={iamTabs} fullWidth />
      </div>
    )
  },
  {
    id: 'theming-ecommerce-orders',
    title: '5. E-Commerce Order Fulfillment Dispatch Hub Theme',
    description: 'Clean underline tabs for order queue filtering.',
    previewTitle: 'Order Queue Tabs',
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-core-circle-text-main">Warehouse Order Fulfillment Queue</h4>
    <Badge variant="success" size="sm" shape="pill">160 Total</Badge>
  </div>
  <Tabs variant="underline" items={ecommerceTabs} fullWidth />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-core-circle-text-main">Warehouse Order Fulfillment Queue</h4>
          <Badge variant="success" size="sm" shape="pill">160 Total</Badge>
        </div>
        <Tabs variant="underline" items={ecommerceTabs} fullWidth />
      </div>
    )
  }
];

export const TABS_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'tabs-variants-underline-pills',
    title: '1. Underline & Pills Styles',
    description: 'Classical border underline indicator and rounded floating pills.',
    items: [
      {
        title: 'Underline Style (Default)',
        code: `<Tabs variant="underline" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="underline" items={standardDemoItems} />
          </div>
        )
      },
      {
        title: 'Pills Style',
        code: `<Tabs variant="pills" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="pills" items={standardDemoItems} />
          </div>
        )
      }
    ]
  },
  {
    id: 'tabs-variants-gradient-glow',
    title: '2. Radiant Gradient & Neon Glow Styles',
    description: 'Luminous halos and purple-indigo active indicator fills.',
    items: [
      {
        title: 'Radiant Gradient Style',
        code: `<Tabs variant="gradient" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="gradient" items={standardDemoItems} />
          </div>
        )
      },
      {
        title: 'Neon Glow Style',
        code: `<Tabs variant="glow" items={items} />`,
        render: () => (
          <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
            <Tabs variant="glow" items={standardDemoItems} />
          </div>
        )
      }
    ]
  },
  {
    id: 'tabs-variants-cards-glass',
    title: '3. Cards & Glassmorphic Container Styles',
    description: 'Elevated box cards with active rings or frosted glass backdrops.',
    items: [
      {
        title: 'Card Box Containers',
        code: `<Tabs variant="cards" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="cards" items={standardDemoItems} />
          </div>
        )
      },
      {
        title: 'Glassmorphic Container',
        code: `<Tabs variant="glassmorphic" items={items} />`,
        render: () => (
          <div className="w-full p-4 bg-gradient-to-br from-blue-50/70 to-purple-50/70 rounded-2xl">
            <Tabs variant="glassmorphic" items={standardDemoItems} />
          </div>
        )
      }
    ]
  },
  {
    id: 'tabs-variants-segmented-bordered',
    title: '4. Enclosed, Segmented & Bordered Styles',
    description: 'Folder-tab enclosed headers, segmented switch tracks, and bordered pills.',
    items: [
      {
        title: 'Enclosed Style',
        code: `<Tabs variant="enclosed" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="enclosed" items={standardDemoItems} />
          </div>
        )
      },
      {
        title: 'Segmented Style',
        code: `<Tabs variant="segmented" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="segmented" items={standardDemoItems} />
          </div>
        )
      },
      {
        title: 'Bordered Style',
        code: `<Tabs variant="bordered" items={items} />`,
        render: () => (
          <div className="w-full">
            <Tabs variant="bordered" items={standardDemoItems} />
          </div>
        )
      }
    ]
  },
  {
    id: 'tabs-variants-sizes-dark',
    title: '5. Size Scales (SM, MD, LG) & Dark Mode',
    description: 'Dense table scales or large hero navigation with dark mode styling.',
    items: [
      {
        title: 'Size Scales',
        code: `<Tabs size="sm" items={items} />\n<Tabs size="md" items={items} />\n<Tabs size="lg" items={items} />`,
        render: () => (
          <div className="flex flex-col gap-6 w-full">
            <Tabs size="sm" variant="pills" items={standardDemoItems.slice(0, 2)} />
            <Tabs size="md" variant="pills" items={standardDemoItems.slice(0, 2)} />
            <Tabs size="lg" variant="pills" items={standardDemoItems.slice(0, 2)} />
          </div>
        )
      },
      {
        title: 'Dark Mode Terminal',
        code: `<Tabs variant="dark" items={items} />`,
        render: () => (
          <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
            <Tabs variant="dark" items={standardDemoItems} />
          </div>
        )
      }
    ]
  }
];

export const TABS_PLAYGROUND_SECTION = {
  id: 'tabs-playground-section',
  title: 'Interactive Playground',
  description: 'Add custom tabs dynamically, switch variants and sizes, and inspect generated code live.',
};

export const TABS_MOCK_SECTION = {
  id: 'tabs-mock-section',
  title: 'Dynamic API Dashboard Tab Integration',
  description: 'Pattern for fetching remote dashboard tab definitions from an API.',
  snippets: [
    {
      label: 'Sample Backend Tabs Configuration Payload',
      code: JSON.stringify({
        dashboardId: "dash_cloud_monitoring",
        defaultTab: "metrics",
        variant: "pills",
        tabs: [
          { id: "overview", label: "Overview", icon: "Cloud", badge: "Live" },
          { id: "metrics", label: "CPU & Memory", icon: "SlidersHorizontal", badge: "99.4%" },
          { id: "audit", label: "Security Audit", icon: "Shield", badge: "0 Alerts" }
        ]
      }, null, 2),
    },
    {
      label: 'Dynamic Tabs Consumer Component',
      code: `import React, { useState, useEffect } from 'react';
import { Tabs, Spinner, Card } from '@core-circle/ui';

export const DynamicDashboardTabs = ({ dashboardId }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch(\`/api/v1/dashboards/\${dashboardId}/tabs\`)
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, [dashboardId]);

  if (!config) return <Spinner variant="primary" size="lg" />;

  return (
    <Card variant="floating" className="p-6">
      <Tabs
        variant={config.variant}
        defaultValue={config.defaultTab}
        fullWidth
        items={config.tabs.map((t) => ({
          id: t.id,
          label: t.label,
          content: <div className="p-4 mt-2">Dynamic content for {t.label}</div>
        }))}
      />
    </Card>
  );
};`,
    }
  ]
};

export const TABS_OVERVIEW_SECTION = {
  id: 'tabs-overview-intro',
  title: 'Introduction',
  description: 'The Tabs component organizes related content into separate views within the same context. It supports 10 styling variants, dynamic item addition, and full accessibility support.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Tabs } from '@core-circle/ui';

<Tabs
  variant="underline"
  items={[
    { id: 'profile', label: 'Profile', content: <p>Profile details</p> },
    { id: 'settings', label: 'Settings', content: <p>Account settings</p> }
  ]}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TABS_PROPS_DATA: PropItem[] = [
  {
    name: 'items',
    type: 'TabItem[]',
    description: 'Array of tab descriptor objects ({ id, label, content, icon?, disabled? }).'
  },
  {
    name: 'variant',
    type: "'underline' | 'pills' | 'enclosed' | 'cards' | 'glassmorphic' | 'gradient' | 'glow' | 'segmented' | 'bordered' | 'dark'",
    defaultValue: "'underline'",
    description: 'Visual layout and active indicator styling variant.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Padding and typography size scale.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the tab buttons stretch to fill the entire container width.'
  },
  {
    name: 'value',
    type: 'string',
    description: 'The currently active tab ID (controlled mode).'
  },
  {
    name: 'defaultValue',
    type: 'string',
    description: 'The initial active tab ID for uncontrolled mode.'
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    description: 'Callback fired whenever active tab selection changes.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class name applied to outer wrapper container.'
  }
];
