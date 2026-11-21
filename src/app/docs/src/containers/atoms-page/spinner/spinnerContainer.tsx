'use client';

import React from 'react';
import Link from 'next/link';
import { Spinner, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Banknotes, 
  Cloud, 
  Sparkles, 
  Terminal, 
  ShoppingBag, 
  CheckIcon, 
  Lock 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SpinnerPlayground } from '../../../components/playground/spinner/spinnerPlayground';
import { spinnerPageStyles as s } from './spinner.styles';
import { SPINNER_PROPS_DATA } from '../../../constants/atoms-page/spinner/spinnerConstants';

export interface SpinnerContainerProps {
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function SpinnerContainer({ headerContent, breadcrumbItems }: SpinnerContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. High-Frequency Real-Time Payment Gateway Theme */}
          <DocSection
            id="theming-payment-gateway"
            title="1. High-Frequency Real-Time Payment Gateway Theme"
            description="Luminous neon green spinner with live cryptographic transaction status feedback."
          >
            <ComponentPreview
              title="Payment Gateway Settlement Processing"
              code={`<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-emerald-500/30 rounded-core-circle-xl shadow-core-circle-subtle w-full">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud Kubernetes Rolling Update Pipeline Theme */}
          <DocSection
            id="theming-k8s-rolling"
            title="2. Cloud Kubernetes Rolling Deployment Pipeline Theme"
            description="Primary branded spinner inside containerized node cluster update modal."
          >
            <ComponentPreview
              title="Kubernetes Rolling Pod Update"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="primary" size="lg" thickness={4} />
    <div className="space-y-1">
      <h4 className="font-bold text-sm text-core-circle-text-main">Deploying Production Pods (v2.14.0)</h4>
      <p className="text-xs text-core-circle-text-muted">Draining us-east-1a • 4 of 12 replicas ready</p>
    </div>
  </div>
  <Badge variant="primary" size="sm" shape="pill">In Progress</Badge>
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 3. AI Large Language Model Token Generation Stream Theme */}
          <DocSection
            id="theming-ai-stream"
            title="3. AI Large Language Model Token Generation Stream Theme"
            description="Radiant purple-indigo gradient spinner highlighting live token synthesis."
          >
            <ComponentPreview
              title="AI Neural Model Token Stream"
              code={`<div className="flex items-center justify-between p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 4. DevOps Terminal Health Ping & Zero-Trust Telemetry Theme */}
          <DocSection
            id="theming-devops-ping"
            title="4. DevOps Terminal Health Ping & Zero-Trust Telemetry Theme"
            description="High-contrast dark terminal spinner for continuous server uptime pings."
          >
            <ComponentPreview
              title="DevOps Terminal Health Monitor"
              code={`<div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="dark" size="md" thickness={3} />
    <div className="space-y-1">
      <span className="font-mono text-xs font-bold text-slate-300">PINGING CLUSTER GATEWAY: 192.168.1.1</span>
      <p className="font-mono text-[11px] text-slate-400">RTT: 0.84ms • Packets: 128/128 transmitted</p>
    </div>
  </div>
  <Badge variant="info" size="sm" shape="pill">Healthy</Badge>
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full max-w-xl">
                <div className="flex items-center gap-4">
                  <Spinner variant="dark" size="md" thickness={3} />
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-bold text-slate-300">PINGING CLUSTER GATEWAY: 192.168.1.1</span>
                    <p className="font-mono text-[11px] text-slate-400">RTT: 0.84ms • Packets: 128/128 transmitted</p>
                  </div>
                </div>
                <Badge variant="info" size="sm" shape="pill">Healthy</Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. E-Commerce Order Fulfillment Cargo Dispatch Sync Theme */}
          <DocSection
            id="theming-ecommerce-dispatch"
            title="5. E-Commerce Order Fulfillment & Cargo Dispatch Sync Theme"
            description="Success emerald spinner with cargo barcode reconciliation status."
          >
            <ComponentPreview
              title="Cargo Warehouse Dispatch Synchronization"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center gap-4">
    <Spinner variant="success" size="lg" thickness={4} />
    <div className="space-y-1">
      <h4 className="font-bold text-sm text-core-circle-text-main">Synchronizing Warehouse Cargo Manifest</h4>
      <p className="text-xs text-core-circle-text-muted">Batch #ORD-88219 • 382 parcels ready for dispatch</p>
    </div>
  </div>
  <Badge variant="outline" size="sm" shape="pill">Syncing</Badge>
</div>`}
            >
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
          {/* 1. Primary, Secondary & Accent */}
          <DocSection
            id="spinner-variants-brand"
            title="1. Primary, Secondary & Accent Spinners"
            description="Core theme and high-contrast brand indicators."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Primary & Secondary Styles"
                code={`<Spinner variant="primary" size="lg" />\n<Spinner variant="secondary" size="lg" />\n<Spinner variant="accent" size="lg" />`}
              >
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
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Radiant Gradient & Neon Glow */}
          <DocSection
            id="spinner-variants-gradient-glow"
            title="2. Radiant Gradient & Neon Glow Spinners"
            description="Luminous drop-shadow halos and multi-spectrum color tones."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Gradient & Glow Styles"
                code={`<Spinner variant="gradient" size="lg" />\n<Spinner variant="glow" size="lg" />`}
              >
                <div className="flex items-center gap-10 p-6 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="gradient" size="lg" />
                    <span className="text-xs text-purple-300">Gradient</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="glow" size="lg" />
                    <span className="text-xs text-emerald-300">Neon Glow</span>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Success, Warning, Danger & Info */}
          <DocSection
            id="spinner-variants-feedback"
            title="3. Status Feedback Spinners (Success, Warning, Danger, Info)"
            description="Semantic indicators matching CoreCircle alerts and validation states."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Semantic Feedback Styles"
                code={`<Spinner variant="success" size="lg" />\n<Spinner variant="warning" size="lg" />\n<Spinner variant="danger" size="lg" />\n<Spinner variant="info" size="lg" />`}
              >
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
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. Glassmorphic, Dark & White */}
          <DocSection
            id="spinner-variants-surfaces"
            title="4. Glassmorphic, Dark & White Surfaces"
            description="Translucent frosted glass or high-contrast button spinner indicators."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Surface Spinners"
                code={`<Spinner variant="glassmorphic" size="lg" />\n<Spinner variant="dark" size="lg" />\n<Spinner variant="white" size="lg" />`}
              >
                <div className="flex items-center gap-10 p-6 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="glassmorphic" size="lg" />
                    <span className="text-xs text-slate-300">Glassmorphic</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="dark" size="lg" />
                    <span className="text-xs text-slate-300">Dark Mode</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="white" size="lg" />
                    <span className="text-xs text-white">White</span>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Size Scales (xs to xl) */}
          <DocSection
            id="spinner-variants-sizes"
            title="5. Predefined Size Scales (XS to XL)"
            description="Five standardized scales from micro-inline buttons to fullscreen loaders."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Size Scales Comparison"
                code={`<Spinner size="xs" />\n<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner size="xl" />`}
              >
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
              </ComponentPreview>
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
          id="spinner-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, 5 sizes, custom border thicknesses, and rotation speeds live."
        >
          <SpinnerPlayground />
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
            id="spinner-mock-section"
            title="Dynamic Payment Gateway Transaction Integration"
            description="Pattern for rendering state-aware animated loaders inside async action buttons."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Transaction Processing State"
                code={JSON.stringify({
                  transactionId: "tx_994821",
                  status: "PROCESSING",
                  step: "AUTHORIZING_CARD",
                  amount: 450.00,
                  currency: "USD",
                  estimatedMs: 650
                }, null, 2)}
              />

              <CodeSnippet
                label="Async Checkout Button Component"
                code={`import React, { useState } from 'react';
import { Button, Spinner, Badge } from '@core-circle/ui';
import { Lock, CheckIcon } from '@core-circle/icons';

export const AsyncCheckoutButton = ({ amount, onComplete }) => {
  const [status, setStatus] = useState('idle'); // idle | processing | complete

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
            id="spinner-overview-intro"
            title="Introduction"
            description="The Spinner component provides visual feedback for indefinite loading and asynchronous background processing. It includes 12 preset aesthetic styles, stroke thickness controls, and size scales."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Spinner } from '@core-circle/ui';

// 1. Standard brand spinner
<Spinner variant="primary" size="md" />

// 2. Glow effect with custom thickness and speed
<Spinner variant="glow" size="lg" thickness={4} speed={0.6} />`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={SPINNER_PROPS_DATA} />
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
