'use client';

import { HomeIcon, ChevronDown, Sparkles, Clock, CircleCheck, Shield, Lock, DocumentText } from '@core-circle/icons';
import { Collapsible, Badge } from '@core-circle/ui';

export const COLLAPSIBLE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Collapsible' },
];

export const COLLAPSIBLE_HEADER_CONTENT = {
  title: 'Collapsible',
  description: 'An interactive height-transition disclosure container enabling expandable details, nested settings panels, and accordion-style reveals with full keyboard accessibility.',
};

export const COLLAPSIBLE_THEME_CONFIGS = [
  {
    id: 'theme-clean-card',
    title: '1. Clean Surface Card Theme',
    description: 'Elevated clean card container with subtle shadow for dashboard setting cards.',
    previewTitle: 'Collapsible Card Variant',
    code: `<Collapsible variant="card" defaultOpen className="w-full max-w-xl">
  <Collapsible.Trigger className="flex items-center justify-between p-4 font-medium">
    <span>Database Backup Schedule</span>
    <ChevronDown size={16} />
  </Collapsible.Trigger>
  <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-slate-600">
    Automated snapshots execute daily at 02:00 UTC with 30-day retention policies.
  </Collapsible.Content>
</Collapsible>`,
    render: () => (
      <Collapsible variant="card" defaultOpen className="w-full max-w-xl">
        <Collapsible.Trigger className="flex items-center justify-between p-4 font-semibold text-core-circle-text-main hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-core-circle-primary" />
            <span>Database Backup Schedule</span>
          </div>
          <ChevronDown size={16} />
        </Collapsible.Trigger>
        <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted bg-white">
          Automated snapshots execute daily at 02:00 UTC with 30-day retention policies and cross-region replication.
        </Collapsible.Content>
      </Collapsible>
    ),
  },
  {
    id: 'theme-bordered-audit',
    title: '2. Bordered Audit & Compliance Theme',
    description: 'High-contrast 2px borders for security reviews and critical data audit panels.',
    previewTitle: 'Bordered Compliance Review',
    code: `<Collapsible variant="bordered" className="w-full max-w-xl">
  <Collapsible.Trigger className="flex items-center justify-between p-4 font-semibold">
    <span>SOC2 Compliance Credentials</span>
    <ChevronDown size={16} />
  </Collapsible.Trigger>
  <Collapsible.Content className="p-4 border-t-2 border-core-circle-border-main bg-slate-50 text-xs font-mono">
    Cert ID: CC-SOC2-2026-X9. All audit trails cryptographically signed.
  </Collapsible.Content>
</Collapsible>`,
    render: () => (
      <Collapsible variant="bordered" className="w-full max-w-xl">
        <Collapsible.Trigger className="flex items-center justify-between p-4 font-semibold text-core-circle-text-main hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-emerald-600" />
            <span>SOC2 Compliance Credentials</span>
            <Badge size="sm" variant="soft">VERIFIED</Badge>
          </div>
          <ChevronDown size={16} />
        </Collapsible.Trigger>
        <Collapsible.Content className="p-4 border-t-2 border-core-circle-border-main bg-slate-50 text-xs font-mono text-slate-700">
          Cert ID: CC-SOC2-2026-X9. All audit trails cryptographically signed and stored in immutable ledger storage.
        </Collapsible.Content>
      </Collapsible>
    ),
  },
  {
    id: 'theme-ghost-inline',
    title: '3. Ghost Inline Prose Theme',
    description: 'Seamless zero-background expandable text block suitable for FAQs and rich documentation.',
    previewTitle: 'Inline FAQ Expandable',
    code: `<Collapsible variant="default" className="w-full max-w-xl">
  <Collapsible.Trigger className="flex items-center justify-between py-3 text-sm font-medium text-core-circle-primary">
    <span>Can I customize rate limit thresholds per API key?</span>
    <ChevronDown size={14} />
  </Collapsible.Trigger>
  <Collapsible.Content className="pb-3 text-sm text-slate-600 leading-relaxed">
    Yes. Rate limits can be configured globally, per organization workspace, or scoped to individual token keys.
  </Collapsible.Content>
</Collapsible>`,
    render: () => (
      <Collapsible variant="default" className="w-full max-w-xl">
        <Collapsible.Trigger className="flex items-center justify-between py-3 text-sm font-semibold text-core-circle-primary hover:underline">
          <span>Can I customize rate limit thresholds per API key?</span>
          <ChevronDown size={14} />
        </Collapsible.Trigger>
        <Collapsible.Content className="pb-3 text-sm text-core-circle-text-muted leading-relaxed">
          Yes. Rate limits can be configured globally, per organization workspace, or scoped to individual token keys with granular burst allowances.
        </Collapsible.Content>
      </Collapsible>
    ),
  },
  {
    id: 'theme-developer-telemetry',
    title: '4. Developer Telemetry Inspector',
    description: 'Structured card displaying expandable JSON payloads and debug details.',
    previewTitle: 'Developer Debug Panel',
    code: `<Collapsible variant="card" className="w-full max-w-xl">
  <Collapsible.Trigger className="flex items-center justify-between p-4 font-mono text-xs">
    <span>DEBUG: Worker Process Pool Status</span>
    <ChevronDown size={14} />
  </Collapsible.Trigger>
  <Collapsible.Content className="p-4 border-t bg-slate-900 text-emerald-400 font-mono text-xs">
    { "activeWorkers": 8, "queueDepth": 0, "p99LatencyMs": 14.2 }
  </Collapsible.Content>
</Collapsible>`,
    render: () => (
      <Collapsible variant="card" className="w-full max-w-xl">
        <Collapsible.Trigger className="flex items-center justify-between p-4 font-mono text-xs font-semibold text-core-circle-text-main hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2">
            <Lock size={14} className="text-amber-500" />
            <span>DEBUG: Worker Process Pool Status</span>
          </div>
          <ChevronDown size={14} />
        </Collapsible.Trigger>
        <Collapsible.Content className="p-4 border-t border-core-circle-border-main bg-slate-950 text-emerald-400 font-mono text-xs">
          {`{ "activeWorkers": 8, "queueDepth": 0, "memoryUsedMb": 184.6, "p99LatencyMs": 14.2 }`}
        </Collapsible.Content>
      </Collapsible>
    ),
  },
  {
    id: 'theme-billing-breakdown',
    title: '5. Billing & Invoice Breakdown Theme',
    description: 'Detailed billing cost breakdown inside an interactive expandable invoice item.',
    previewTitle: 'Invoice Sub-Item Accord',
    code: `<Collapsible variant="card" className="w-full max-w-xl">
  <Collapsible.Trigger className="flex items-center justify-between p-4">
    <div className="font-semibold text-sm">Enterprise Core Cluster (8 Nodes)</div>
    <div className="flex items-center gap-3">
      <span className="font-mono font-bold">$1,480.00</span>
      <ChevronDown size={16} />
    </div>
  </Collapsible.Trigger>
  <Collapsible.Content className="p-4 border-t text-xs text-slate-500 flex flex-col gap-2">
    <div>vCPU Allocations (64 Cores): $840.00</div>
    <div>Fast NVMe Storage (2TB): $440.00</div>
    <div>Dedicated NAT Gateway: $200.00</div>
  </Collapsible.Content>
</Collapsible>`,
    render: () => (
      <Collapsible variant="card" className="w-full max-w-xl">
        <Collapsible.Trigger className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
          <div className="font-semibold text-sm text-core-circle-text-main">Enterprise Core Cluster (8 Nodes)</div>
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-core-circle-text-main">$1,480.00</span>
            <ChevronDown size={16} className="text-core-circle-text-muted" />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-xs text-core-circle-text-muted bg-slate-50 flex flex-col gap-2">
          <div className="flex justify-between"><span>vCPU Allocations (64 Cores):</span><span className="font-mono font-medium">$840.00</span></div>
          <div className="flex justify-between"><span>Fast NVMe Storage (2TB):</span><span className="font-mono font-medium">$440.00</span></div>
          <div className="flex justify-between"><span>Dedicated NAT Gateway:</span><span className="font-mono font-medium">$200.00</span></div>
        </Collapsible.Content>
      </Collapsible>
    ),
  },
];

export const COLLAPSIBLE_VARIANT_GROUPS = [
  {
    id: 'surface-variants',
    title: 'Surface Variants',
    description: 'Explore card, bordered, and transparent default surface styling containers.',
    items: [
      {
        title: 'Card Surface with Subtle Shadow',
        code: `<Collapsible variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <span>Card Surface</span>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
              Card surface provides clean separation on neutral canvas backgrounds.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'Bordered 2px Surface',
        code: `<Collapsible variant="bordered">...</Collapsible>`,
        render: () => (
          <Collapsible variant="bordered" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <span>Bordered Surface</span>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t-2 border-core-circle-border-main text-sm text-core-circle-text-muted">
              High-contrast border container for structured forms and settings.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'Default Transparent Surface',
        code: `<Collapsible variant="default">...</Collapsible>`,
        render: () => (
          <Collapsible variant="default" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main border-b border-core-circle-border-main">
              <span>Default Transparent</span>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 text-sm text-core-circle-text-muted">
              Blends transparently into parent backgrounds without border or shadow.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
    ],
  },
  {
    id: 'behavior-variants',
    title: 'States & Dynamic Behaviors',
    description: 'Test default open states, disabled interaction triggers, and unmount behaviors.',
    items: [
      {
        title: 'Default Open State',
        code: `<Collapsible defaultOpen variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible defaultOpen variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <span>Pre-Expanded Section</span>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
              Rendered initially expanded without requiring an initial click.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'Disabled Interactive Trigger',
        code: `<Collapsible disabled variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible disabled variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <span>Locked Advanced Config (Disabled)</span>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
              Cannot be expanded when disabled.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'Unmount Content On Exit',
        code: `<Collapsible unmountOnExit variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible unmountOnExit variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <span>Heavy DOM Component (Unmounted when closed)</span>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
              Completely removed from the DOM tree when collapsed to save memory.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
    ],
  },
  {
    id: 'content-compositions',
    title: 'Rich Content Compositions',
    description: 'Embed rich badges, metadata rows, and status indicators in collapsible containers.',
    items: [
      {
        title: 'With Status Badge Indicator',
        code: `<Collapsible variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <div className="flex items-center gap-2">
                <CircleCheck size={16} className="text-emerald-500" />
                <span>Health Check Protocol</span>
              </div>
              <Badge size="sm" variant="soft">HEALTHY</Badge>
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
              All 12 microservices responded with HTTP 200 within 25ms.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'With Code & Documentation Snippet',
        code: `<Collapsible variant="bordered">...</Collapsible>`,
        render: () => (
          <Collapsible variant="bordered" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <div className="flex items-center gap-2">
                <DocumentText size={16} className="text-core-circle-primary" />
                <span>API Header Schema</span>
              </div>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t-2 border-core-circle-border-main font-mono text-xs bg-slate-50 text-slate-800">
              Authorization: Bearer cc_live_token_9921
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'Feature Showcase with Sparkles',
        code: `<Collapsible variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between font-semibold text-core-circle-text-main">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-500" />
                <span>AI Agent Auto-Pilot</span>
              </div>
              <ChevronDown size={16} />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-core-circle-text-muted">
              Autonomous reasoning agents scan codebase PR diffs and flag potential regressions.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
      {
        title: 'Multi-line Description Trigger',
        code: `<Collapsible variant="card">...</Collapsible>`,
        render: () => (
          <Collapsible variant="card" className="w-full max-w-md">
            <Collapsible.Trigger className="p-4 flex items-center justify-between text-left">
              <div>
                <div className="font-semibold text-core-circle-text-main text-sm">Automated CDN Edge Invalidation</div>
                <div className="text-xs text-core-circle-text-muted">Purge edge cache across 320 points of presence globally.</div>
              </div>
              <ChevronDown size={16} className="text-core-circle-text-muted shrink-0 ml-3" />
            </Collapsible.Trigger>
            <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-xs text-core-circle-text-muted bg-slate-50">
              CDN cache invalidation triggers whenever an atom bundle release is tagged on git main.
            </Collapsible.Content>
          </Collapsible>
        ),
      },
    ],
  },
];

export const COLLAPSIBLE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test collapsible layout variants, initial open states, disabled constraints, and DOM unmount options.',
};

export const COLLAPSIBLE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Usage',
  description: 'Learn how to consume Collapsible within production application settings and dynamic admin dashboards.',
  snippets: [
    {
      label: 'Admin Settings Panel (TypeScript)',
      code: `import React, { useState } from 'react';
import { Collapsible, Button, Badge } from '@core-circle/ui';
import { ChevronDown, Shield } from '@core-circle/icons';

export const SecuritySettingsBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      variant="card"
      className="w-full"
    >
      <Collapsible.Trigger className="flex items-center justify-between p-4 font-semibold">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-core-circle-primary" />
          <span>Two-Factor Authentication (2FA)</span>
        </div>
        <div className="flex items-center gap-3">
          <Badge size="sm" variant="pill">ENABLED</Badge>
          <ChevronDown
            size={16}
            className={\`transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`}
          />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className="p-4 border-t border-core-circle-border-main text-sm text-slate-600">
        <p className="mb-4">Hardware security keys (FIDO2/WebAuthn) and TOTP authenticator apps are configured.</p>
        <Button variant="outline" size="sm">Manage Security Keys</Button>
      </Collapsible.Content>
    </Collapsible>
  );
};`,
    },
  ],
};

export const COLLAPSIBLE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Complete documentation for the Collapsible container component and compound Trigger/Content slots.',
  quickUsage: {
    label: 'Basic Usage',
    code: `import { Collapsible } from '@core-circle/ui';
import { ChevronDown } from '@core-circle/icons';

export default function Example() {
  return (
    <Collapsible variant="card">
      <Collapsible.Trigger className="p-4 flex items-center justify-between">
        <span>Click to expand</span>
        <ChevronDown size={16} />
      </Collapsible.Trigger>
      <Collapsible.Content className="p-4 border-t">
        Revealed content goes here!
      </Collapsible.Content>
    </Collapsible>
  );
}`,
  },
};

export const COLLAPSIBLE_PROPS_DATA = [
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Visual surface styling of the collapsible container.',
  },
  {
    name: 'open',
    type: 'boolean',
    defaultValue: 'undefined',
    description: 'Controlled open state of the collapsible container.',
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial open state when operating in uncontrolled mode.',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    defaultValue: 'undefined',
    description: 'Callback fired whenever the disclosure state transitions.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user interaction and prevents opening or closing.',
  },
  {
    name: 'unmountOnExit',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Completely unmounts child elements from the DOM when closed to free up resources.',
  },
];
