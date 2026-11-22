import type { ReactNode } from 'react';
import { Spinner, Badge } from '@core-circle/ui';
import { Banknotes, Sparkles } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface SpinnerThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface SpinnerVariantGroup {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => ReactNode;
}

export const SPINNER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Spinner' },
];

export const SPINNER_HEADER_CONTENT = {
  title: 'Spinner',
  description: 'An indeterminate rotating indicator with 12 color variants, custom thickness, rotation speed overrides, and size scales.',
};

export const SPINNER_THEME_CONFIGS: SpinnerThemeConfig[] = [
  {
    id: 'theming-payment-gateway',
    sectionTitle: '1. High-Frequency Real-Time Payment Gateway Theme',
    description: 'Luminous neon green spinner with live cryptographic transaction status feedback.',
    previewTitle: 'Payment Gateway Settlement Processing',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full max-w-xl">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <Spinner variant="glow" size="lg" thickness={4} />
            <Banknotes size={18} className="absolute text-emerald-400" />
          </div>
          <div className="space-y-1">
            <span className="font-mono text-sm font-bold text-core-circle-text-main">ISO-20022 SETTLEMENT PIPELINE</span>
            <p className="text-xs text-emerald-600">Verifying zero-knowledge rollup proofs...</p>
          </div>
        </div>
        <Badge variant="success" size="sm" shape="pill">24ms Latency</Badge>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center gap-4">
    <div className="relative flex items-center justify-center">
      <Spinner variant="glow" size="lg" thickness={4} />
      <Banknotes size={18} className="absolute text-emerald-400" />
    </div>
    <div className="space-y-1">
      <span className="font-mono text-sm font-bold text-core-circle-text-main">ISO-20022 SETTLEMENT PIPELINE</span>
      <p className="text-xs text-emerald-600">Verifying zero-knowledge rollup proofs...</p>
    </div>
  </div>
  <Badge variant="success" size="sm" shape="pill">24ms Latency</Badge>
</div>`,
  },
  {
    id: 'theming-k8s-rolling',
    sectionTitle: '2. Cloud Kubernetes Rolling Deployment Pipeline Theme',
    description: 'Primary branded spinner inside containerized node cluster update modal.',
    previewTitle: 'Kubernetes Rolling Pod Update',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
        <div className="flex items-center gap-4">
          <Spinner variant="primary" size="lg" thickness={4} />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-core-circle-text-main">Deploying Production Pods (v2.14.0)</h4>
            <p className="text-xs text-core-circle-text-muted">Draining us-east-1a • 4 of 12 replicas ready</p>
          </div>
        </div>
        <Badge variant="primary" size="sm" shape="pill">In Progress</Badge>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="primary" size="lg" thickness={4} />
    <div className="space-y-1">
      <h4 className="font-bold text-sm text-core-circle-text-main">Deploying Production Pods (v2.14.0)</h4>
      <p className="text-xs text-core-circle-text-muted">Draining us-east-1a • 4 of 12 replicas ready</p>
    </div>
  </div>
  <Badge variant="primary" size="sm" shape="pill">In Progress</Badge>
</div>`,
  },
  {
    id: 'theming-ai-stream',
    sectionTitle: '3. AI Large Language Model Token Generation Stream Theme',
    description: 'Radiant purple-indigo gradient spinner highlighting live token synthesis.',
    previewTitle: 'AI Neural Model Token Stream',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full max-w-xl">
        <div className="flex items-center gap-4">
          <Spinner variant="gradient" size="lg" thickness={4} />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-purple-600" />
              <h4 className="font-bold text-sm text-purple-950">Synthesizing Neural Reasoning Chain</h4>
            </div>
            <p className="text-xs text-purple-700/80">Generating multi-agent consensus graph • 84 tok/sec</p>
          </div>
        </div>
        <Badge variant="gradient" size="sm" shape="pill">Streaming</Badge>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="gradient" size="lg" thickness={4} />
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-purple-600" />
        <h4 className="font-bold text-sm text-purple-950">Synthesizing Neural Reasoning Chain</h4>
      </div>
      <p className="text-xs text-purple-700/80">Generating multi-agent consensus graph • 84 tok/sec</p>
    </div>
  </div>
  <Badge variant="gradient" size="sm" shape="pill">Streaming</Badge>
</div>`,
  },
  {
    id: 'theming-devops-ping',
    sectionTitle: '4. DevOps Terminal Health Ping & Zero-Trust Telemetry Theme',
    description: 'High-contrast dark terminal spinner for continuous server uptime pings.',
    previewTitle: 'DevOps Terminal Health Monitor',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full max-w-xl">
        <div className="flex items-center gap-4">
          <Spinner variant="dark" size="md" thickness={3} />
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-slate-700">PINGING CLUSTER GATEWAY: 192.168.1.1</span>
            <p className="font-mono text-[11px] text-slate-500">RTT: 0.84ms • Packets: 128/128 transmitted</p>
          </div>
        </div>
        <Badge variant="info" size="sm" shape="pill">Healthy</Badge>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="dark" size="md" thickness={3} />
    <div className="space-y-1">
      <span className="font-mono text-xs font-bold text-slate-700">PINGING CLUSTER GATEWAY: 192.168.1.1</span>
      <p className="font-mono text-[11px] text-slate-500">RTT: 0.84ms • Packets: 128/128 transmitted</p>
    </div>
  </div>
  <Badge variant="info" size="sm" shape="pill">Healthy</Badge>
</div>`,
  },
  {
    id: 'theming-ecommerce-dispatch',
    sectionTitle: '5. E-Commerce Order Fulfillment & Cargo Dispatch Sync Theme',
    description: 'Success emerald spinner with cargo barcode reconciliation status.',
    previewTitle: 'Cargo Warehouse Dispatch Synchronization',
    render: () => (
      <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full max-w-xl">
        <div className="flex items-center gap-4">
          <Spinner variant="success" size="lg" thickness={4} />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-core-circle-text-main">Synchronizing Warehouse Cargo Manifest</h4>
            <p className="text-xs text-core-circle-text-muted">Batch #ORD-88219 • 382 parcels ready for dispatch</p>
          </div>
        </div>
        <Badge variant="outline" size="sm" shape="pill">Syncing</Badge>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="success" size="lg" thickness={4} />
    <div className="space-y-1">
      <h4 className="font-bold text-sm text-core-circle-text-main">Synchronizing Warehouse Cargo Manifest</h4>
      <p className="text-xs text-core-circle-text-muted">Batch #ORD-88219 • 382 parcels ready for dispatch</p>
    </div>
  </div>
  <Badge variant="outline" size="sm" shape="pill">Syncing</Badge>
</div>`,
  },
];

export const SPINNER_VARIANT_GROUPS: SpinnerVariantGroup[] = [
  {
    id: 'spinner-variants-brand',
    title: '1. Primary, Secondary & Accent Spinners',
    description: 'Core theme and high-contrast brand indicators.',
    previewTitle: 'Primary & Secondary Styles',
    code: `<Spinner variant="primary" size="lg" />\n<Spinner variant="secondary" size="lg" />\n<Spinner variant="accent" size="lg" />`,
    render: () => (
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="primary" size="lg" />
          <span className="text-xs text-core-circle-text-muted">Primary</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="secondary" size="lg" />
          <span className="text-xs text-core-circle-text-muted">Secondary</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="accent" size="lg" />
          <span className="text-xs text-core-circle-text-muted">Accent</span>
        </div>
      </div>
    ),
  },
  {
    id: 'spinner-variants-gradient-glow',
    title: '2. Radiant Gradient & Neon Glow Spinners',
    description: 'Luminous drop-shadow halos and multi-spectrum color tones.',
    previewTitle: 'Gradient & Glow Styles',
    code: `<Spinner variant="gradient" size="lg" />\n<Spinner variant="glow" size="lg" />`,
    render: () => (
      <div className="flex items-center gap-10 p-6 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="gradient" size="lg" />
          <span className="text-xs text-purple-600">Gradient</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="glow" size="lg" />
          <span className="text-xs text-emerald-600">Neon Glow</span>
        </div>
      </div>
    ),
  },
  {
    id: 'spinner-variants-feedback',
    title: '3. Status Feedback Spinners (Success, Warning, Danger, Info)',
    description: 'Semantic indicators matching CoreCircle alerts and validation states.',
    previewTitle: 'Semantic Feedback Styles',
    code: `<Spinner variant="success" size="lg" />\n<Spinner variant="warning" size="lg" />\n<Spinner variant="danger" size="lg" />\n<Spinner variant="info" size="lg" />`,
    render: () => (
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="success" size="lg" />
          <span className="text-xs text-emerald-600">Success</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="warning" size="lg" />
          <span className="text-xs text-amber-600">Warning</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="danger" size="lg" />
          <span className="text-xs text-rose-600">Danger</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="info" size="lg" />
          <span className="text-xs text-sky-600">Info</span>
        </div>
      </div>
    ),
  },
  {
    id: 'spinner-variants-surfaces',
    title: '4. Glassmorphic, Dark & White Surfaces',
    description: 'Translucent frosted glass or high-contrast button spinner indicators.',
    previewTitle: 'Surface Spinners',
    code: `<Spinner variant="glassmorphic" size="lg" />\n<Spinner variant="dark" size="lg" />\n<Spinner variant="white" size="lg" />`,
    render: () => (
      <div className="flex items-center gap-10 p-6 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="glassmorphic" size="lg" />
          <span className="text-xs text-slate-700">Glassmorphic</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="dark" size="lg" />
          <span className="text-xs text-slate-700">Dark Mode</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner variant="white" size="lg" />
          <span className="text-xs text-slate-700">White</span>
        </div>
      </div>
    ),
  },
  {
    id: 'spinner-variants-sizes',
    title: '5. Predefined Size Scales (XS to XL)',
    description: 'Five standardized scales from micro-inline buttons to fullscreen loaders.',
    previewTitle: 'Size Scales Comparison',
    code: `<Spinner size="xs" />\n<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner size="xl" />`,
    render: () => (
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Spinner size="xs" />
          <span className="text-xs text-core-circle-text-muted">XS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner size="sm" />
          <span className="text-xs text-core-circle-text-muted">SM</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner size="md" />
          <span className="text-xs text-core-circle-text-muted">MD</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner size="lg" />
          <span className="text-xs text-core-circle-text-muted">LG</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner size="xl" />
          <span className="text-xs text-core-circle-text-muted">XL</span>
        </div>
      </div>
    ),
  },
];

export const SPINNER_PLAYGROUND_SECTION = {
  id: 'spinner-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 12 variants, 5 sizes, custom border thicknesses, and rotation speeds live.',
};

export const SPINNER_MOCK_PAYLOAD = JSON.stringify(
  {
    transactionId: 'tx_994821',
    status: 'PROCESSING',
    step: 'AUTHORIZING_CARD',
    amount: 450.0,
    currency: 'USD',
    estimatedMs: 650,
  },
  null,
  2
);

export const SPINNER_MOCK_CONSUMER_CODE = `import React, { useState } from 'react';
import { Button, Spinner } from '@core-circle/ui';
import { Lock, CheckIcon } from '@core-circle/icons';

export const AsyncCheckoutButton = ({ amount, onComplete }) => {
  const [status, setStatus] = useState('idle');

  const handleCheckout = async () => {
    setStatus('processing');
    await new Promise((res) => setTimeout(res, 1200));
    setStatus('complete');
    onComplete?.();
  };

  return (
    <Button
      variant={status === 'complete' ? 'success' : 'primary'}
      size="lg"
      onClick={handleCheckout}
      disabled={status === 'processing'}
      className="min-w-[220px]"
    >
      {status === 'processing' ? (
        <div className="flex items-center gap-2">
          <Spinner variant="white" size="sm" thickness={2.5} />
          <span>Processing $\${amount}...</span>
        </div>
      ) : status === 'complete' ? (
        <div className="flex items-center gap-2">
          <CheckIcon size={16} />
          <span>Payment Authorized!</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Lock size={16} />
          <span>Pay $\${amount.toFixed(2)}</span>
        </div>
      )}
    </Button>
  );
};`;

export const SPINNER_MOCK_SECTION = {
  id: 'spinner-mock-section',
  title: 'Dynamic Payment Gateway Transaction Integration',
  description: 'Pattern for rendering state-aware animated loaders inside async action buttons.',
  snippets: [
    { label: 'Sample Backend Transaction Processing State', code: SPINNER_MOCK_PAYLOAD },
    { label: 'Async Checkout Button Component', code: SPINNER_MOCK_CONSUMER_CODE },
  ],
};

export const SPINNER_QUICK_USAGE_CODE = `import { Spinner } from '@core-circle/ui';

// 1. Standard brand spinner
<Spinner variant="primary" size="md" />

// 2. Glow effect with custom thickness and speed
<Spinner variant="glow" size="lg" thickness={4} speed={0.6} />`;

export const SPINNER_OVERVIEW_SECTION = {
  id: 'spinner-overview-intro',
  title: 'Introduction',
  description: 'The Spinner component provides visual feedback for indefinite loading and asynchronous background processing. It includes 12 preset aesthetic styles, stroke thickness controls, and size scales.',
  quickUsage: {
    label: 'Quick Usage',
    code: SPINNER_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const SPINNER_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glow' | 'glassmorphic' | 'accent' | 'dark' | 'white'",
    defaultValue: "'primary'",
    description: 'Color theme and glow styling applied to the spinner border.'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Predefined diameter and border thickness size scale.'
  },
  {
    name: 'thickness',
    type: 'number',
    description: 'Custom stroke border width in pixels.'
  },
  {
    name: 'speed',
    type: 'number',
    defaultValue: '0.8',
    description: 'Rotation cycle duration in seconds.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.'
  }
];
