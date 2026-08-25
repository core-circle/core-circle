'use client';

import React from 'react';
import Link from 'next/link';
import { Tooltip, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Banknotes, 
  Shield, 
  Sparkles, 
  Terminal, 
  ShoppingBag, 
  CheckIcon, 
  Alert, 
  CircleX, 
  Lock 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TooltipPlayground } from '../../../components/playground/tooltip/tooltipPlayground';
import { tooltipPageStyles as s } from './tooltip.styles';
import { TOOLTIP_PROPS_DATA } from '../../../constants/atoms-page/tooltip/tooltipConstants';
import { TooltipContainerProps } from '../../../interface/containers/atoms/tooltip.types';

export default function TooltipContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Crypto Asset Portfolio */}
          <DocSection
            id="theming-crypto-portfolio"
            title="1. Financial Asset Portfolio & Crypto Gauge Theme"
            description="Radiant purple gradient tooltip providing real-time orderbook depth and gas fee metrics."
          >
            <ComponentPreview
              title="Crypto Portfolio Tooltip"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Kubernetes Cluster Node */}
          <DocSection
            id="theming-k8s-node"
            title="2. Kubernetes Worker Node Cluster Telemetry Theme"
            description="Deep slate-900 monospace dark tooltip for container runtime telemetry."
          >
            <ComponentPreview
              title="Kubernetes Pod Telemetry Tooltip"
              code={`<div className="flex items-center justify-between p-6 bg-slate-950 text-white border border-slate-800 rounded-2xl shadow-xl w-full">
  <div className="flex items-center gap-3">
    <Terminal size={20} className="text-emerald-400" />
    <div>
      <span className="font-mono text-xs font-bold text-slate-200">pod/ingress-controller-7f9b</span>
      <p className="font-mono text-[11px] text-slate-400">Node: us-east-1a • 4 Replicas</p>
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
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-slate-950 text-white border border-slate-800 rounded-2xl shadow-xl w-full">
                <div className="flex items-center gap-3">
                  <Terminal size={20} className="text-emerald-400" />
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-200">pod/ingress-controller-7f9b</span>
                    <p className="font-mono text-[11px] text-slate-400">Node: us-east-1a • 4 Replicas</p>
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. KYC Biometrics Verification */}
          <DocSection
            id="theming-kyc-biometrics"
            title="3. KYC Biometrics Identity Verification Theme"
            description="Clean primary blue tooltip detailing government passport and face match guidelines."
          >
            <ComponentPreview
              title="Identity Verification Tooltip"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. SSL/TLS Certificate Expiration */}
          <DocSection
            id="theming-ssl-expiration"
            title="4. SSL/TLS Certificate Expiration Warning Theme"
            description="Amber warning tooltip flagging upcoming domain certificate renewal deadlines."
          >
            <ComponentPreview
              title="SSL Certificate Warning"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. E-Commerce Order Express Shipping */}
          <DocSection
            id="theming-ecommerce-shipping"
            title="5. E-Commerce Order Express Shipping Theme"
            description="Frosted glass translucent tooltip providing estimated courier delivery timelines."
          >
            <ComponentPreview
              title="Express Shipping Tooltip"
              code={`<div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex items-center justify-between p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
          {/* 1. Primary & Secondary */}
          <DocSection
            id="tooltip-variants-primary-secondary"
            title="1. Primary & Secondary Styles"
            description="Clean white surface with primary blue accents or subtle slate backgrounds."
          >
            <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <div className="flex flex-col items-center gap-2">
                <Tooltip variant="primary" trigger="click" title="Primary" description="Default primary style" />
                <span className="text-xs font-bold text-slate-500">Primary</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tooltip variant="secondary" trigger="click" title="Secondary" description="Slate background style" />
                <span className="text-xs font-bold text-slate-500">Secondary</span>
              </div>
            </div>
          </DocSection>

          {/* 2. Success, Warning & Danger */}
          <DocSection
            id="tooltip-variants-feedback"
            title="2. Semantic Status Styles (Success, Warning, Danger, Info)"
            description="Color-coded feedback tooltips for system alerts and critical confirmations."
          >
            <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <div className="flex flex-col items-center gap-2">
                <Tooltip 
                  variant="success" 
                  trigger="click" 
                  title="Operational" 
                  description="All services running normally" 
                  icon={<CheckIcon size={20} className="text-emerald-600 cursor-pointer" />} 
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
                  icon={<CircleX size={20} className="text-rose-600 cursor-pointer" />} 
                />
                <span className="text-xs font-bold text-slate-500">Danger</span>
              </div>
            </div>
          </DocSection>

          {/* 3. Radiant Gradient & Neon Glow */}
          <DocSection
            id="tooltip-variants-gradient-glow"
            title="3. Radiant Gradient & Neon Glow Styles"
            description="Vibrant purple gradients and high-contrast luminous emerald haloes."
          >
            <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-slate-950 rounded-2xl border border-slate-800 w-full">
              <div className="flex flex-col items-center gap-2">
                <Tooltip variant="gradient" trigger="click" title="VIP Status" description="Platinum tier active" />
                <span className="text-xs font-bold text-purple-300">Gradient</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tooltip variant="glow" trigger="click" title="Live Telemetry" description="Socket connected 120fps" />
                <span className="text-xs font-bold text-emerald-400">Neon Glow</span>
              </div>
            </div>
          </DocSection>

          {/* 4. Glassmorphic & Dark Mode */}
          <DocSection
            id="tooltip-variants-glass-dark"
            title="4. Glassmorphic & Dark Mode Styles"
            description="Frosted glass translucent overlays and deep slate-900 dark theme popovers."
          >
            <div className="flex flex-wrap gap-12 items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 w-full">
              <div className="flex flex-col items-center gap-2">
                <Tooltip variant="glassmorphic" trigger="click" title="Glass Overlay" description="Frosted backdrop blur" />
                <span className="text-xs font-bold text-slate-600">Glassmorphic</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tooltip variant="dark" trigger="click" title="Dark Mode" description="High-contrast dark card" />
                <span className="text-xs font-bold text-slate-600">Dark Mode</span>
              </div>
            </div>
          </DocSection>

          {/* 5. Directional Placements */}
          <DocSection
            id="tooltip-variants-placements"
            title="5. Multi-Directional Placements (Top, Bottom, Left, Right)"
            description="Anchor tooltips precisely above, below, or to either side of the trigger."
          >
            <div className="flex flex-wrap gap-12 items-center justify-center p-12 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Tooltip position="top" trigger="click" title="Top" description="Placed above trigger" />
              <Tooltip position="bottom" trigger="click" title="Bottom" description="Placed below trigger" />
              <Tooltip position="left" trigger="click" title="Left" description="Placed left of trigger" />
              <Tooltip position="right" trigger="click" title="Right" description="Placed right of trigger" />
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
          id="tooltip-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, 4 position placements, hover vs click triggers, and live snippet generation."
        >
          <TooltipPlayground />
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
            id="tooltip-mock-section"
            title="Dynamic Remote Telemetry Tooltip Integration"
            description="Pattern for fetching dynamic context tooltips from an external monitoring API."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Tooltip Context Payload"
                code={JSON.stringify({
                  metricId: "mem_cache_hit_ratio",
                  title: "Redis L1 Cache Performance",
                  description: "99.4% cache hit ratio over 1,000,000 requests in last 1h.",
                  variant: "gradient",
                  placement: "top"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Tooltip Consumer Component"
                code={`import React, { useState, useEffect } from 'react';
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
            id="tooltip-overview-intro"
            title="Introduction"
            description="The Tooltip component provides supplementary contextual guidance and telemetry data without cluttering the active user interface. It supports 10 styling variants, hover/click triggers, and multi-directional positioning."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Tooltip } from '@core-circle/ui';

<Tooltip
  title="Resource Info"
  description="Detailed telemetry metrics..."
  variant="gradient"
  position="top"
  trigger="click"
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={TOOLTIP_PROPS_DATA} />
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
