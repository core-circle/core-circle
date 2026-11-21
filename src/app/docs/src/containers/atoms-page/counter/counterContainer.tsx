'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Counter, Button, Typography, Badge } from '@core-circle/ui';
import { 
  Info, 
  Layers, 
  Play, 
  Bell, 
  CodeIcon, 
  Palette, 
  ShoppingBag, 
  Shield, 
  Clock, 
  CheckIcon, 
  Mail, 
  FolderOpen,
  Cloud
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CounterPlayground } from '../../../components/playground/counter/counterPlayground';
import { counterPageStyles as s } from './counter.styles';
import { COUNTER_PROPS_DATA } from '../../../constants/atoms-page/counter/counterConstants';
import { CounterContainerProps } from '../../../interface/containers/atoms/counter.types';

export default function CounterContainer({
  headerContent,
  breadcrumbItems
}: CounterContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. App Bar Notification Center Theme */}
          <DocSection
            id="theming-notification-bar"
            title="1. Enterprise App Bar & Inbox Notification Theme"
            description="Navigation bar with unread message counts, system alerts, and capped notification badges."
          >
            <ComponentPreview
              title="Application Header Navigation"
              code={`<div className="flex items-center justify-between p-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
  <div className="flex items-center gap-6">
    <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-base">CoreCircle Portal</Typography>
    <div className="flex items-center gap-4 text-sm font-medium">
      <span className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-1">
        Inbox <Counter count={14} size="xs" variant="primary" />
      </span>
      <span className="flex items-center gap-2 text-core-circle-text-muted hover:text-core-circle-text-main pb-1 cursor-pointer">
        Drafts <Counter count={3} size="xs" variant="neutral" />
      </span>
    </div>
  </div>
  <div className="flex items-center gap-3">
    <Button variant="outline" size="sm" startIcon={<Bell size={16} />} endIcon={<Counter count={128} max={99} size="xs" variant="primary" />}>
      Alerts
    </Button>
  </div>
</div>`}
            >
              <div className="w-full max-w-2xl p-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Typography variant="h4" className="font-core-circle-bold text-core-circle-text-main text-base">CoreCircle Portal</Typography>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-1">
                      Inbox <Counter count={14} size="xs" variant="primary" />
                    </span>
                    <span className="flex items-center gap-2 text-core-circle-text-muted hover:text-core-circle-text-main pb-1 cursor-pointer">
                      Drafts <Counter count={3} size="xs" variant="neutral" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" startIcon={<Bell size={16} />} endIcon={<Counter count={128} max={99} size="xs" variant="primary" />}>
                    Alerts
                  </Button>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. E-Commerce Cart & Wishlist Theme */}
          <DocSection
            id="theming-ecommerce-cart"
            title="2. E-Commerce Shopping Cart & Checkout Theme"
            description="Header shopping actions with live quantity counters and item total indicators."
          >
            <ComponentPreview
              title="Shopping Cart Actions"
              code={`<div className="flex items-center gap-4 p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
  <Button variant="primary" size="md" startIcon={<ShoppingBag size={18} />} endIcon={<Counter count={4} size="xs" variant="ghost" className="text-white bg-white/20" />}>
    View Cart
  </Button>
  <Button variant="outline" size="md" endIcon={<Counter count={12} size="xs" variant="neutral" />}>
    Saved Items
  </Button>
</div>`}
            >
              <div className="w-full max-w-xl flex items-center gap-4 p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
                <Button variant="primary" size="md" startIcon={<ShoppingBag size={18} />} endIcon={<Counter count={4} size="xs" variant="ghost" className="text-white bg-white/20" />}>
                  View Cart
                </Button>
                <Button variant="outline" size="md" endIcon={<Counter count={12} size="xs" variant="neutral" />}>
                  Saved Items
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Agile Sprint Board Columns Theme */}
          <DocSection
            id="theming-kanban-board"
            title="3. Agile Sprint Board & Task Metrics Theme"
            description="Kanban column headers highlighting ticket volume across stages."
          >
            <ComponentPreview
              title="Sprint Status Columns"
              code={`<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
    <span className="text-xs font-core-circle-bold text-core-circle-text-main">To Do</span>
    <Counter count={18} size="xs" variant="neutral" />
  </div>
  <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
    <span className="text-xs font-core-circle-bold text-core-circle-primary">In Progress</span>
    <Counter count={5} size="xs" variant="primary" />
  </div>
  <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
    <span className="text-xs font-core-circle-bold text-emerald-600 text-emerald-600">Completed</span>
    <Counter count={42} size="xs" variant="outline" />
  </div>
</div>`}
            >
              <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
                  <span className="text-xs font-core-circle-bold text-core-circle-text-main">To Do</span>
                  <Counter count={18} size="xs" variant="neutral" />
                </div>
                <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
                  <span className="text-xs font-core-circle-bold text-core-circle-primary">In Progress</span>
                  <Counter count={5} size="xs" variant="primary" />
                </div>
                <div className="p-3.5 rounded-core-circle-lg bg-core-circle-bg-surface border border-core-circle-border-main flex items-center justify-between">
                  <span className="text-xs font-core-circle-bold text-emerald-600 text-emerald-600">Completed</span>
                  <Counter count={42} size="xs" variant="outline" />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. DevOps Deployment Queue Theme */}
          <DocSection
            id="theming-devops-queue"
            title="4. DevOps Pipeline & Service Monitor Theme"
            description="Infrastructure operational metrics card with pending jobs and worker health."
          >
            <ComponentPreview
              title="Pipeline Queue Metrics"
              code={`<div className="p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
  <div className="flex items-center gap-3">
    <Cloud size={20} className="text-core-circle-primary" />
    <div>
      <Typography variant="h4" className="text-sm font-core-circle-bold text-core-circle-text-main">Production Workers</Typography>
      <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">us-east-1 cluster node pool</Typography>
    </div>
  </div>
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
      Queued: <Counter count={8} size="xs" variant="neutral" />
    </div>
    <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
      Active: <Counter count={24} size="xs" variant="primary" />
    </div>
  </div>
</div>`}
            >
              <div className="w-full max-w-xl p-5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cloud size={20} className="text-core-circle-primary" />
                  <div>
                    <Typography variant="h4" className="text-sm font-core-circle-bold text-core-circle-text-main">Production Workers</Typography>
                    <Typography variant="p" className="text-xs text-core-circle-text-muted mt-0.5">us-east-1 cluster node pool</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
                    Queued: <Counter count={8} size="xs" variant="neutral" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
                    Active: <Counter count={24} size="xs" variant="primary" />
                  </div>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Cloud Storage Quota Theme */}
          <DocSection
            id="theming-storage-quota"
            title="5. Workspace Storage & Asset Quota Theme"
            description="Resource utilization card tracking stored artifacts against account allowances."
          >
            <ComponentPreview
              title="Storage Asset Counter"
              code={`<div className="p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between">
  <div className="flex items-center gap-3">
    <FolderOpen size={18} className="text-core-circle-text-muted" />
    <span className="text-xs font-core-circle-bold text-core-circle-text-main">Assets Stored</span>
  </div>
  <div className="flex items-center gap-2">
    <Counter count={2450} size="sm" variant="outline" />
    <Badge variant="neutral" size="sm" shape="pill">2.4k / 5k Limit</Badge>
  </div>
</div>`}
            >
              <div className="w-full max-w-xl p-4 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FolderOpen size={18} className="text-core-circle-text-muted" />
                  <span className="text-xs font-core-circle-bold text-core-circle-text-main">Assets Stored</span>
                </div>
                <div className="flex items-center gap-2">
                  <Counter count={2450} size="sm" variant="outline" />
                  <Badge variant="neutral" size="sm" shape="pill">2.4k / 5k Limit</Badge>
                </div>
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
          <DocSection id="counter-styles" title="1. Visual Variants" description="Primary, neutral, outline, and inverse ghost styles.">
            <ComponentPreview 
              title="Variants (Primary, Neutral, Outline, Ghost)"
              code={`<Counter count={5} variant="primary" />\n<Counter count={12} variant="neutral" />\n<Counter count={8} variant="outline" />\n<Counter count={3} variant="ghost" />`}
            >
              <div className="flex items-center gap-6">
                <Counter count={5} variant="primary" />
                <Counter count={12} variant="neutral" />
                <Counter count={8} variant="outline" />
                <div className="bg-core-circle-bg-surface p-3 rounded-core-circle-lg flex items-center gap-2 border border-core-circle-border-main">
                  <span className="text-core-circle-text-main text-xs font-medium">Outline:</span>
                  <Counter count={3} variant="outline" size="xs" />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="counter-sizes" title="2. Size Scale" description="Compact xs, sm, and md dimensions.">
            <ComponentPreview
              title="Sizes (xs, sm, md)"
              code={`<Counter count={9} size="xs" />\n<Counter count={9} size="sm" />\n<Counter count={9} size="md" />`}
            >
              <div className="flex items-center gap-6">
                <Counter count={9} size="xs" />
                <Counter count={9} size="sm" />
                <Counter count={9} size="md" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="counter-max-cap" title="3. Overflow Capping" description="Cap maximum displayed numbers using the max prop (e.g. 99+).">
            <ComponentPreview
              title="Max Capping (max = 99)"
              code={`<Counter count={45} max={99} />\n<Counter count={120} max={99} />\n<Counter count={1500} max={999} />`}
            >
              <div className="flex items-center gap-6">
                <Counter count={45} max={99} />
                <Counter count={120} max={99} />
                <Counter count={1500} max={999} />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="counter-integration" title="4. Button & Tab Composition" description="Composing counters seamlessly within buttons and nav tabs.">
            <ComponentPreview 
              title="Within Interactive Controls"
              code={`<Button variant="outline" startIcon={<Bell size={18} />} endIcon={<Counter count={5} size="xs" />}>\n  Notifications\n</Button>`}
            >
              <div className="flex items-center gap-8">
                <Button variant="outline" startIcon={<Bell size={18} />} endIcon={<Counter count={5} size="xs" />}>
                  Notifications
                </Button>
                <div className="flex border-b border-core-circle-border-main pb-2 gap-8">
                  <div className="flex items-center gap-2 text-core-circle-primary border-b-2 border-core-circle-primary pb-2 px-1 font-medium text-sm">
                    Inbox <Counter count={120} max={99} variant="neutral" size="xs" />
                  </div>
                  <div className="flex items-center gap-2 text-core-circle-text-muted pb-2 px-1 text-sm">
                    Spam <Counter count={0} size="xs" />
                  </div>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection id="counter-playground" title="Interactive Playground" description="Customize counter values, variants, and maximum limits in real-time.">
          <CounterPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8 max-w-5xl">
          <DocSection id="counter-mock" title="Notification API Integration" description="Example of consuming live counts from a notification or metrics backend.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Unread Counts API Response"
                code={JSON.stringify({
                  user_id: "usr_567",
                  unread_notifications: 45,
                  unread_messages: 102,
                  system_alerts: 2
                }, null, 2)}
              />

              <CodeSnippet
                label="Consumer Component"
                code={`import { Button, Counter } from '@core-circle/ui';
import { Bell } from '@core-circle/icons';

interface NotificationCounts {
  unread_notifications: number;
  unread_messages: number;
}

export const HeaderNotificationBell = ({ counts }: { counts: NotificationCounts }) => {
  return (
    <Button size="icon" variant="ghost" className="relative">
      <Bell size={20} />
      <Counter 
        count={counts.unread_notifications} 
        max={99} 
        variant="primary"
        size="xs"
        className="absolute -top-1 -right-1" 
      />
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
          <DocSection id="counter-intro" title="Introduction" description="The Counter atom displays numeric values, capped counts, and notification badges with high legibility.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Counter } from '@core-circle/ui';

<Counter count={12} max={99} variant="primary" size="sm" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={COUNTER_PROPS_DATA} />
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
