'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  Indicator, 
  Avatar, 
  Button, 
  Badge, 
  Typography 
} from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Bell, 
  ShoppingBag, 
  Shield, 
  Sparkles, 
  Mail, 
  Terminal, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { indicatorPageStyles as s } from './indicator.styles';
import { 
  INDICATOR_PROPS_DATA, 
  INDICATOR_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/indicator/indicatorConstants';
import { IndicatorPlayground } from '../../../components/playground/indicator/indicatorPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { IndicatorContainerProps } from '../../../interface/containers/atoms/indicator.types';

export default function IndicatorContainer({
  headerContent,
  breadcrumbItems
}: IndicatorContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Real-Time Server Incident Radar Ping */}
          <DocSection
            id="theming-server-radar"
            title="1. Real-Time Infrastructure Status & Radar Ping Theme"
            description="Micro status dot emitting continuous pulse ping animation for live edge nodes."
          >
            <ComponentPreview
              title="Edge Node Health Monitor"
              code={`<div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <Indicator variant="success" size="sm" pulse standalone />
    <div>
      <h4 className="font-bold text-sm text-slate-900">US-East Primary Gateway</h4>
      <p className="text-xs text-slate-500">Latency: 14ms • 99.99% Uptime</p>
    </div>
  </div>
  <Badge variant="success" shape="pill" size="sm">Operational</Badge>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Indicator variant="success" size="sm" pulse standalone />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">US-East Primary Gateway</h4>
                    <p className="text-xs text-slate-500">Latency: 14ms • 99.99% Uptime</p>
                  </div>
                </div>
                <Badge variant="success" shape="pill" size="sm">Operational</Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Team Presence & Collaboration Status */}
          <DocSection
            id="theming-avatar-presence"
            title="2. Team Presence & Active Collaboration Status Theme"
            description="Avatar anchor with bottom-right presence indicators for online, away, and busy states."
          >
            <ComponentPreview
              title="Team Member Presence Badges"
              code={`<div className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit">
  <Indicator variant="success" size="sm" position="bottom-right">
    <Avatar name="Sarah Jenkins" size="lg" />
  </Indicator>
  <Indicator variant="warning" size="sm" position="bottom-right">
    <Avatar name="Alex Rivera" size="lg" />
  </Indicator>
  <Indicator variant="destructive" size="sm" position="bottom-right">
    <Avatar name="David Chen" size="lg" />
  </Indicator>
</div>`}
            >
              <div className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit mx-auto">
                <div className="flex flex-col items-center gap-1.5">
                  <Indicator variant="success" size="sm" position="bottom-right">
                    <Avatar name="Sarah Jenkins" size="lg" />
                  </Indicator>
                  <span className="text-[11px] font-bold text-slate-700">Online</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Indicator variant="warning" size="sm" position="bottom-right">
                    <Avatar name="Alex Rivera" size="lg" />
                  </Indicator>
                  <span className="text-[11px] font-bold text-slate-700">Away</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Indicator variant="destructive" size="sm" position="bottom-right">
                    <Avatar name="David Chen" size="lg" />
                  </Indicator>
                  <span className="text-[11px] font-bold text-slate-700">Busy</span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Cart Badge Count */}
          <DocSection
            id="theming-cart-badge"
            title="3. E-Commerce Cart & Action Bar Notification Theme"
            description="Counter badge attached to action buttons with automatic clipping."
          >
            <ComponentPreview
              title="Shopping Cart & Notification Triggers"
              code={`<div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit">
  <Indicator variant="primary" count={3} size="md">
    <Button variant="outline" size="md" startIcon={<ShoppingBag size={18} />}>
      Shopping Bag
    </Button>
  </Indicator>
  <Indicator variant="destructive" count={12} size="md" pulse>
    <Button variant="outline" size="md" startIcon={<Bell size={18} />}>
      Alerts
    </Button>
  </Indicator>
</div>`}
            >
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-fit mx-auto">
                <Indicator variant="primary" count={3} size="md">
                  <Button variant="outline" size="md" startIcon={<ShoppingBag size={18} />}>
                    Shopping Bag
                  </Button>
                </Indicator>
                <Indicator variant="destructive" count={12} size="md" pulse>
                  <Button variant="outline" size="md" startIcon={<Bell size={18} />}>
                    Alerts
                  </Button>
                </Indicator>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Developer CI/CD Release Version Pill */}
          <DocSection
            id="theming-release-pill"
            title="4. Developer CI/CD Release & Feature Tag Theme"
            description="Gradient standalone pill indicator displaying version badges."
          >
            <ComponentPreview
              title="Release Pipeline Tag"
              code={`<div className="p-4 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle shadow-sm flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <Terminal size={18} className="text-emerald-400" />
    <div>
      <h4 className="font-bold text-sm text-core-circle-text-main">Production Engine</h4>
      <p className="text-xs text-slate-400">Deployed 2m ago to 14 regions</p>
    </div>
  </div>
  <Indicator variant="gradient" content="v3.2.0" size="lg" shape="pill" standalone />
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-4 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Terminal size={18} className="text-emerald-400" />
                  <div>
                    <h4 className="font-bold text-sm text-core-circle-text-main">Production Engine</h4>
                    <p className="text-xs text-slate-400">Deployed 2m ago to 14 regions</p>
                  </div>
                </div>
                <Indicator variant="gradient" content="v3.2.0" size="lg" shape="pill" standalone />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Enterprise Inbox Overflow Counter */}
          <DocSection
            id="theming-inbox-overflow"
            title="5. Enterprise Inbox & Message Counter (99+ Clipping) Theme"
            description="Numeric counter with automatic 99+ overflow clipping."
          >
            <ComponentPreview
              title="Unread Inbox Notification Counter"
              code={`<div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 max-w-md">
  <div className="flex items-center gap-3">
    <Indicator variant="destructive" count={142} max={99} size="md">
      <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
        <Mail size={20} />
      </div>
    </Indicator>
    <div>
      <h4 className="font-bold text-sm text-slate-900">Unread Support Tickets</h4>
      <p className="text-xs text-slate-500">Requires triage review</p>
    </div>
  </div>
  <Button variant="primary" size="sm">Open Queue</Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Indicator variant="destructive" count={142} max={99} size="md">
                    <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
                      <Mail size={20} />
                    </div>
                  </Indicator>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Unread Support Tickets</h4>
                    <p className="text-xs text-slate-500">Requires triage review</p>
                  </div>
                </div>
                <Button variant="primary" size="sm">Open Queue</Button>
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
          <DocSection id="indicator-variants-colors" title="1. Color & Style Variants (10 Variants)" description="Primary, success, warning, destructive, info, gradient, glassmorphic, soft, bordered, and neutral.">
            <div className="flex flex-wrap gap-6 items-center w-full">
              <Indicator variant="primary" content="P" size="md" standalone />
              <Indicator variant="success" content="S" size="md" standalone />
              <Indicator variant="warning" content="W" size="md" standalone />
              <Indicator variant="destructive" content="D" size="md" standalone />
              <Indicator variant="info" content="I" size="md" standalone />
              <Indicator variant="gradient" content="G" size="md" standalone />
              <Indicator variant="glassmorphic" content="GL" size="md" standalone />
              <Indicator variant="soft" content="SF" size="md" standalone />
              <Indicator variant="bordered" content="B" size="md" standalone />
              <Indicator variant="neutral" content="N" size="md" standalone />
            </div>
          </DocSection>

          <DocSection id="indicator-variants-sizes" title="2. Size Scales" description="Micro dot (xs), small dot (sm), medium badge (md), large (lg), and extra large (xl).">
            <div className="flex flex-wrap gap-8 items-center w-full">
              <div className="flex items-center gap-2">
                <Indicator size="xs" variant="success" standalone />
                <span className="text-xs text-slate-500">XS (Dot)</span>
              </div>
              <div className="flex items-center gap-2">
                <Indicator size="sm" variant="success" standalone />
                <span className="text-xs text-slate-500">SM (Dot)</span>
              </div>
              <div className="flex items-center gap-2">
                <Indicator size="md" count={5} variant="primary" standalone />
                <span className="text-xs text-slate-500">MD Badge</span>
              </div>
              <div className="flex items-center gap-2">
                <Indicator size="lg" count={25} variant="primary" standalone />
                <span className="text-xs text-slate-500">LG Badge</span>
              </div>
              <div className="flex items-center gap-2">
                <Indicator size="xl" count={99} variant="primary" standalone />
                <span className="text-xs text-slate-500">XL Badge</span>
              </div>
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
          id="indicator-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, anchor positions, radar pings, and numeric counters."
        >
          <IndicatorPlayground />
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
            id="indicator-mock"
            title="Real-Time WebSocket Notification Pattern"
            description="Subscribe to server events and dynamically increment unread counter indicators."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample WebSocket Notification Payload"
                code={JSON.stringify({
                  event: "notification:new",
                  channel: "user_inbox",
                  unread_count: 14,
                  has_critical_alerts: true
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useState, useEffect } from 'react';
import { Indicator, Button } from '@core-circle/ui';
import { Bell } from '@core-circle/icons';

export const LiveNotificationBell = () => {
  const [unreadCount, setUnreadCount] = useState(14);

  return (
    <Indicator 
      variant="destructive" 
      count={unreadCount} 
      max={99}
      pulse={unreadCount > 10}
    >
      <Button variant="outline" startIcon={<Bell size={18} />}>
        Notifications
      </Button>
    </Indicator>
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
          <DocSection id="indicator-usage" title="Introduction" description="The Indicator atom displays presence status, notification counters, and pulsing radar markers on top of avatars and buttons.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Indicator, Avatar } from '@core-circle/ui';

<Indicator variant="success" size="sm" position="bottom-right">
  <Avatar name="Sarah Jenkins" />
</Indicator>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={INDICATOR_PROPS_DATA} />
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
