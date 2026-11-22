import type { ReactNode } from 'react';
import { Tooltip, Badge } from '@core-circle/ui';
import {
  Banknotes,
  Terminal,
  Shield,
  Lock,
  Alert,
  ShoppingBag,
  CheckIcon,
  CircleX,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface TooltipThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface TooltipVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const TOOLTIP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tooltip' },
];

export const TOOLTIP_HEADER_CONTENT = {
  title: 'Tooltip',
  description:
    'An interactive contextual popover element displayed on hover or click, featuring 10 styling variants, multi-directional position placement, and dynamic content slots.',
};

export const TOOLTIP_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade contextual tooltips for crypto asset metrics, Kubernetes nodes, biometrics, TLS certificates, and express delivery.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 10 distinct border, halo glow, and background surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive property playground with live variant selection, position triggers, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic remote user telemetry tooltip integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TOOLTIP_THEME_CONFIGS: TooltipThemeConfig[] = [
  {
    id: 'theming-crypto-portfolio',
    sectionTitle: '1. Financial Asset Portfolio & Crypto Gauge Theme',
    description:
      'Radiant purple gradient tooltip providing real-time orderbook depth and gas fee metrics.',
    previewTitle: 'Crypto Portfolio Tooltip',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center gap-3">
          <Banknotes size={20} className="text-purple-600" />
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Ethereum Staking Pool
            </h4>
            <p className="text-xs text-core-circle-text-muted">
              42.50 ETH ($148,200.00)
            </p>
          </div>
        </div>
        <Tooltip
          variant="gradient"
          trigger="click"
          position="bottom"
          title="Staking Yield Breakdown"
          description="Current APR: 4.82% compounded daily. Unbonding duration: 7 business days."
          icon={
            <Badge
              variant="gradient"
              size="sm"
              shape="pill"
              className="cursor-pointer"
            >
              Inspect Yield
            </Badge>
          }
        />
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-3">
    <Banknotes size={20} className="text-purple-600" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Ethereum Staking Pool</h4>
      <p className="text-xs text-core-circle-text-muted">42.50 ETH ($148,200.00)</p>
    </div>
  </div>
  <Tooltip
    variant="gradient"
    trigger="click"
    position="bottom"
    title="Staking Yield Breakdown"
    description="Current APR: 4.82% compounded daily. Unbonding duration: 7 business days."
    icon={<Badge variant="gradient" size="sm" shape="pill" className="cursor-pointer">Inspect Yield</Badge>}
  />
</div>`,
  },
  {
    id: 'theming-k8s-node',
    sectionTitle: '2. Kubernetes Worker Node Cluster Telemetry Theme',
    description:
      'Deep slate-900 monospace dark tooltip for container runtime telemetry.',
    previewTitle: 'Kubernetes Pod Telemetry Tooltip',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
        <div className="flex items-center gap-3">
          <Terminal size={20} className="text-emerald-500" />
          <div>
            <span className="font-mono text-xs font-bold text-core-circle-text-main">
              pod/ingress-controller-7f9b
            </span>
            <p className="font-mono text-[11px] text-core-circle-text-muted">
              Node: us-east-1a • 4 Replicas
            </p>
          </div>
        </div>
        <Tooltip
          variant="dark"
          trigger="hover"
          position="left"
          title="Resource Quota"
          description="CPU: 320m/1000m (32%) • Memory: 512MiB/2GiB (25%) • Restart Count: 0"
          icon={
            <Badge
              variant="info"
              size="sm"
              shape="pill"
              className="cursor-pointer"
            >
              Metrics
            </Badge>
          }
        />
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center gap-3">
    <Terminal size={20} className="text-emerald-500" />
    <div>
      <span className="font-mono text-xs font-bold text-core-circle-text-main">pod/ingress-controller-7f9b</span>
      <p className="font-mono text-[11px] text-core-circle-text-muted">Node: us-east-1a • 4 Replicas</p>
    </div>
  </div>
  <Tooltip
    variant="dark"
    trigger="hover"
    position="left"
    title="Resource Quota"
    description="CPU: 320m/1000m (32%) • Memory: 512MiB/2GiB (25%) • Restart Count: 0"
    icon={<Badge variant="info" size="sm" shape="pill" className="cursor-pointer">Metrics</Badge>}
  />
</div>`,
  },
  {
    id: 'theming-kyc-biometrics',
    sectionTitle: '3. KYC Biometrics Identity Verification Theme',
    description:
      'Clean primary blue tooltip detailing government passport and face match guidelines.',
    previewTitle: 'Identity Verification Tooltip',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center gap-3">
          <Shield size={20} className="text-core-circle-primary" />
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Passkey & Biometric Liveness
            </h4>
            <p className="text-xs text-core-circle-text-muted">
              FIDO2 WebAuthn Certified
            </p>
          </div>
        </div>
        <Tooltip
          variant="primary"
          trigger="click"
          position="left"
          title="Biometric Encryption"
          description="Your biometric data is processed on-device via Secure Enclave and never leaves your hardware."
        />
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-3">
    <Shield size={20} className="text-core-circle-primary" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Passkey & Biometric Liveness</h4>
      <p className="text-xs text-core-circle-text-muted">FIDO2 WebAuthn Certified</p>
    </div>
  </div>
  <Tooltip
    variant="primary"
    trigger="click"
    position="left"
    title="Biometric Encryption"
    description="Your biometric data is processed on-device via Secure Enclave and never leaves your hardware."
  />
</div>`,
  },
  {
    id: 'theming-ssl-expiration',
    sectionTitle: '4. SSL/TLS Certificate Expiration Warning Theme',
    description:
      'Amber warning tooltip flagging upcoming domain certificate renewal deadlines.',
    previewTitle: 'SSL Certificate Warning',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center gap-3">
          <Lock size={20} className="text-amber-600" />
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">
              api.corecircle.io SSL Cert
            </h4>
            <p className="text-xs text-core-circle-text-muted">
              Expires in 14 days
            </p>
          </div>
        </div>
        <Tooltip
          variant="warning"
          trigger="click"
          position="bottom"
          title="Renewal Recommended"
          description="Automated ACME DNS-01 cert-manager challenge scheduled in 48 hours."
          icon={<Alert size={20} className="text-amber-500 cursor-pointer" />}
        />
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-3">
    <Lock size={20} className="text-amber-600" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">api.corecircle.io SSL Cert</h4>
      <p className="text-xs text-core-circle-text-muted">Expires in 14 days</p>
    </div>
  </div>
  <Tooltip
    variant="warning"
    trigger="click"
    position="bottom"
    title="Renewal Recommended"
    description="Automated ACME DNS-01 cert-manager challenge scheduled in 48 hours."
    icon={<Alert size={20} className="text-amber-500 cursor-pointer" />}
  />
</div>`,
  },
  {
    id: 'theming-ecommerce-shipping',
    sectionTitle: '5. E-Commerce Order Express Shipping Theme',
    description:
      'Frosted glass translucent tooltip providing estimated courier delivery timelines.',
    previewTitle: 'Express Shipping Tooltip',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
        <div className="flex items-center gap-3">
          <ShoppingBag size={20} className="text-blue-600" />
          <div>
            <h4 className="font-bold text-sm text-core-circle-text-main">
              Priority Courier Delivery
            </h4>
            <p className="text-xs text-core-circle-text-muted">
              Next business morning
            </p>
          </div>
        </div>
        <Tooltip
          variant="glassmorphic"
          trigger="hover"
          position="left"
          title="Delivery Guarantees"
          description="Orders placed before 4:00 PM EST qualify for guaranteed next-day FedEx Priority dispatch."
        />
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-3">
    <ShoppingBag size={20} className="text-blue-600" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Priority Courier Delivery</h4>
      <p className="text-xs text-core-circle-text-muted">Next business morning</p>
    </div>
  </div>
  <Tooltip
    variant="glassmorphic"
    trigger="hover"
    position="left"
    title="Delivery Guarantees"
    description="Orders placed before 4:00 PM EST qualify for guaranteed next-day FedEx Priority dispatch."
  />
</div>`,
  },
];

export const TOOLTIP_VARIANT_GROUPS: TooltipVariantGroup[] = [
  {
    id: 'tooltip-variants-primary-secondary',
    title: '1. Primary & Secondary Styles',
    description:
      'Clean white surface with primary blue accents or subtle slate backgrounds.',
    render: () => (
      <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="primary"
            trigger="click"
            title="Primary"
            description="Default primary style"
          />
          <span className="text-xs font-bold text-slate-500">Primary</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="secondary"
            trigger="click"
            title="Secondary"
            description="Slate background style"
          />
          <span className="text-xs font-bold text-slate-500">Secondary</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tooltip-variants-feedback',
    title: '2. Semantic Status Styles (Success, Warning, Danger, Info)',
    description:
      'Color-coded feedback tooltips for system alerts and critical confirmations.',
    render: () => (
      <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="success"
            trigger="click"
            title="Operational"
            description="All services running normally"
            icon={
              <CheckIcon
                size={20}
                className="text-emerald-600 cursor-pointer"
              />
            }
          />
          <span className="text-xs font-bold text-slate-500">Success</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="warning"
            trigger="click"
            title="Storage Limit"
            description="Approaching 90% allocation"
            icon={<Alert size={20} className="text-amber-600 cursor-pointer" />}
          />
          <span className="text-xs font-bold text-slate-500">Warning</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="danger"
            trigger="click"
            title="Fatal Error"
            description="Database connection refused"
            icon={
              <CircleX size={20} className="text-rose-600 cursor-pointer" />
            }
          />
          <span className="text-xs font-bold text-slate-500">Danger</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tooltip-variants-gradient-glow',
    title: '3. Radiant Gradient & Neon Glow Styles',
    description:
      'Vibrant purple gradients and high-contrast luminous emerald haloes.',
    render: () => (
      <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="gradient"
            trigger="click"
            title="VIP Status"
            description="Platinum tier active"
          />
          <span className="text-xs font-bold text-purple-300">Gradient</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="glow"
            trigger="click"
            title="Live Telemetry"
            description="Socket connected 120fps"
          />
          <span className="text-xs font-bold text-emerald-400">Neon Glow</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tooltip-variants-glass-dark',
    title: '4. Glassmorphic & Dark Mode Styles',
    description:
      'Frosted glass translucent overlays and deep slate-900 dark theme popovers.',
    render: () => (
      <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 w-full">
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="glassmorphic"
            trigger="click"
            title="Glass Overlay"
            description="Frosted backdrop blur"
          />
          <span className="text-xs font-bold text-slate-600">Glassmorphic</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Tooltip
            variant="dark"
            trigger="click"
            title="Dark Mode"
            description="High-contrast dark card"
          />
          <span className="text-xs font-bold text-slate-600">Dark Mode</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tooltip-variants-placements',
    title: '5. Multi-Directional Placements (Top, Bottom, Left, Right)',
    description:
      'Anchor tooltips precisely above, below, or to either side of the trigger.',
    render: () => (
      <div className="flex flex-wrap gap-12 items-center justify-center p-12 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <Tooltip
          position="top"
          trigger="click"
          title="Top"
          description="Placed above trigger"
        />
        <Tooltip
          position="bottom"
          trigger="click"
          title="Bottom"
          description="Placed below trigger"
        />
        <Tooltip
          position="left"
          trigger="click"
          title="Left"
          description="Placed left of trigger"
        />
        <Tooltip
          position="right"
          trigger="click"
          title="Right"
          description="Placed right of trigger"
        />
      </div>
    ),
  },
];

export const TOOLTIP_PLAYGROUND_SECTION = {
  id: 'tooltip-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 variants, 4 position placements, hover vs click triggers, and live snippet generation.',
};

export const TOOLTIP_MOCK_SECTION = {
  id: 'tooltip-mock-section',
  title: 'Dynamic Remote Telemetry Tooltip Integration',
  description:
    'Pattern for fetching dynamic context tooltips from an external monitoring API.',
  snippets: [
    {
      label: 'Sample Backend Tooltip Context Payload',
      code: JSON.stringify(
        {
          metricId: 'mem_cache_hit_ratio',
          title: 'Redis L1 Cache Performance',
          description:
            '99.4% cache hit ratio over 1,000,000 requests in last 1h.',
          variant: 'gradient',
          placement: 'top',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Tooltip Consumer Component',
      code: `import React, { useState, useEffect } from 'react';
import { Tooltip, Spinner, Badge } from '@core-circle/ui';

export const DynamicMetricTooltip = ({ metricId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\`/api/v1/metrics/\${metricId}/context\`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [metricId]);

  if (!data) return <Spinner size="sm" />;

  return (
    <Tooltip
      title={data.title}
      description={data.description}
      variant={data.variant}
      position={data.placement}
      trigger="hover"
      icon={<Badge variant="success" size="sm" shape="pill" className="cursor-pointer">99.4% Hit</Badge>}
    />
  );
};`,
    },
  ],
};

export const TOOLTIP_OVERVIEW_SECTION = {
  id: 'tooltip-overview-intro',
  title: 'Introduction',
  description:
    'The Tooltip component provides supplementary contextual guidance and telemetry data without cluttering the active user interface. It supports 10 styling variants, hover/click triggers, and multi-directional positioning.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Tooltip } from '@core-circle/ui';

<Tooltip
  title="Resource Info"
  description="Detailed telemetry metrics..."
  variant="gradient"
  position="top"
  trigger="click"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TOOLTIP_PROPS_DATA: PropItem[] = [
  {
    name: 'title',
    type: 'string',
    description: 'Header headline text of the tooltip popover.',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Descriptive explanatory body text inside the tooltip.',
  },
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glow' | 'glassmorphic' | 'dark'",
    defaultValue: "'primary'",
    description: 'Visual theme and border surface styling variant.',
  },
  {
    name: 'position',
    type: "'top' | 'bottom' | 'left' | 'right'",
    defaultValue: "'top'",
    description: 'Directional anchoring position relative to target trigger.',
  },
  {
    name: 'trigger',
    type: "'click' | 'hover'",
    defaultValue: "'click'",
    description: 'User interaction event that toggles tooltip visibility.',
  },
  {
    name: 'icon',
    type: 'React.ReactNode',
    description: 'Custom trigger node replacing the default Info icon.',
  },
  {
    name: 'showCloseIcon',
    type: 'boolean',
    defaultValue: 'true',
    description:
      'Whether to show the dismiss close icon when in click mode.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.',
  },
];
