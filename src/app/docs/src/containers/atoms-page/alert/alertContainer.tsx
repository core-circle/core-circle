'use client';

import React from 'react';
import Link from 'next/link';
import { Alert, Breadcrumb, Tabs, Typography, Button, Badge } from '@core-circle/ui';
import {
  Info,
  CircleCheck,
  Alert as AlertIcon,
  CircleX,
  Layers,
  Play,
  CodeIcon,
  Sparkles,
  Shield,
  Star,
  ArrowRight,
  Refresh,
  Palette,
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AlertPlayground } from '../../../components/playground/alert/alertPlayground';
import { ALERT_PROPS_DATA } from '../../../constants/atoms-page/alert/alertConstants';
import { DOC_TEXT } from '../../../constants/common-constants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function AlertContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="theming-production-alert"
            title="Enterprise Service Incident Notice Theme"
            description="High-visibility bordered alert with clear resolution CTAs and status telemetry."
          >
            <ComponentPreview
              title="Automated Failover Alert"
              code={`<Alert
  variant="warning"
  title="Automated Database Failover Initiated"
  description="Primary cluster node unresponsiveness detected. Replicas promoted in region us-east-1 with zero data loss."
  dismissible
  action={
    <div className="flex gap-2">
      <Button size="sm" variant="outline">Live Dashboard</Button>
      <Button size="sm" variant="primary">Acknowledge</Button>
    </div>
  }
/>`}
            >
              <div className="w-full">
                <Alert
                  variant="warning"
                  title="Automated Database Failover Initiated"
                  description="Primary cluster node unresponsiveness detected. Replicas promoted in region us-east-1 with zero data loss."
                  dismissible
                  onDismiss={() => alert('Dismissed')}
                  action={
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Live Dashboard</Button>
                      <Button size="sm" variant="primary">Acknowledge</Button>
                    </div>
                  }
                />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection
            id="theming-vip-reward"
            title="VIP Loyalty & Reward Alert"
            description="Radiant purple gradient banner with action triggers and glowing star decoration."
          >
            <ComponentPreview
              title="VIP Tier Upgrade Callout"
              code={`<Alert
  variant="gradient"
  title="Congratulations! You have reached Platinum VIP Tier"
  description="Enjoy 25% discount on all cloud compute instances and 24/7 dedicated engineering support."
  dismissible
  action={<Button size="sm" variant="primary">Claim VIP Perks</Button>}
/>`}
            >
              <div className="w-full">
                <Alert
                  variant="gradient"
                  title="Congratulations! You have reached Platinum VIP Tier"
                  description="Enjoy a 25% automatic discount on all GPU cluster instances and 24/7 dedicated engineering support."
                  dismissible
                  onDismiss={() => alert('Dismissed')}
                  action={<Button size="sm" variant="primary" endIcon={<ArrowRight size={14} />}>Claim VIP Perks</Button>}
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
          <DocSection
            id="alert-variants-semantic"
            title="1. Semantic Status Variants"
            description="Standard alerts for communicative status, verification, warning, and critical errors."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Primary & Secondary"
                code={`<Alert variant="primary" title="Update Available" description="A new release v3.2.0 is available." />\n<Alert variant="secondary" title="Feature Announcement" description="Dark mode support is now enabled." />`}
              >
                <div className="flex flex-col gap-4 w-full">
                  <Alert variant="primary" title="Update Available" description="A new version v3.2.0 of the CoreCircle Design System is ready to install." />
                  <Alert variant="secondary" title="Feature Announcement" description="Subtle glassmorphic and floating elevated variant styles are now live." />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Success, Warning & Destructive"
                code={`<Alert variant="success" title="Changes Saved" description="Profile preferences were updated." />\n<Alert variant="warning" title="Approaching Quota" description="Storage limit reached 85%." />\n<Alert variant="destructive" title="Connection Dropped" description="Unable to reach replica server." />`}
              >
                <div className="flex flex-col gap-4 w-full">
                  <Alert variant="success" title="Deployment Successful" description="Production services are active with zero latency degradation." />
                  <Alert variant="warning" title="Approaching Rate Limit" description="Your workspace has consumed 88% of this month's allocated API units." />
                  <Alert variant="destructive" title="Database Connection Dropped" description="Worker node lost heartbeat with master cluster node. Reconnecting..." />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection
            id="alert-variants-advanced"
            title="2. Advanced Surface Variants"
            description="Modern surface treatments including glassmorphic frosted glass, gradient glow, floating depth, soft tint, and segmented outline."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Glassmorphic & Gradient"
                code={`<Alert variant="glassmorphic" title="Frosted Alert" description="Translucent frosted background." />\n<Alert variant="gradient" title="Radiant Glow" description="Subtle linear gradient background." />`}
              >
                <div className="flex flex-col gap-4 w-full p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl">
                  <Alert variant="glassmorphic" title="Frosted Glass Surface" description="Translucent glass overlay with soft backdrop blur for modern hero sections." />
                  <Alert variant="gradient" title="Gradient Ambient Alert" description="Luminous linear color blend for high-impact announcements and promotional banners." />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Floating, Pill, Soft & Bordered Segment"
                code={`<Alert variant="floating" title="Floating Lift" description="Elevated card with soft shadow." />\n<Alert variant="soft" title="Soft Tint" description="Subtle tone-on-tone container." />`}
              >
                <div className="flex flex-col gap-4 w-full">
                  <Alert variant="floating" title="Floating Elevated Alert" description="Elevated with ambient drop shadow for dynamic toast and overlay announcements." />
                  <Alert variant="soft" title="Soft Pastel Tint" description="Tone-on-tone soft background for clean, low-distraction form feedback." />
                  <Alert variant="bordered-segment" title="Segmented Outline" description="Thick structured left boundary accent for dense tabular views." />
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
          id="alert-playground-section"
          title="Interactive Alert Playground"
          description="Test all 12 visual variants, dismiss triggers, custom action buttons, and live code generation."
        >
          <AlertPlayground />
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
            id="alert-mock"
            title="Dynamic Notification Event Stream API"
            description="Consume server events or WebSocket payloads to render reactive alert banners."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Alert Payload"
                code={JSON.stringify({
                  event_id: "evt_98321",
                  timestamp: "2026-08-24T12:00:00Z",
                  severity: "warning",
                  title: "High Memory Utilization Detected",
                  message: "Cluster worker-03 has exceeded 90% memory threshold for > 5 minutes.",
                  action: {
                    label: "Scale Cluster",
                    href: "/infrastructure/scale"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useState, useEffect } from 'react';
import { Alert, Button } from '@core-circle/ui';

export const DynamicAlertBanner = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/alerts/stream');
    ws.onmessage = (msg) => setEvent(JSON.parse(msg.data));
    return () => ws.close();
  }, []);

  if (!event) return null;

  return (
    <Alert
      variant={event.severity === 'warning' ? 'warning' : 'destructive'}
      title={event.title}
      description={event.message}
      dismissible
      onDismiss={() => setEvent(null)}
      action={
        event.action && (
          <Button size="sm" variant="outline" onClick={() => window.location.href = event.action.href}>
            {event.action.label}
          </Button>
        )
      }
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
          <DocSection id="alert-intro" title="Introduction" description="Alerts communicate critical status updates, feedback, and action items directly in the layout flow.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Alert, Button } from '@core-circle/ui';

<Alert
  variant="primary"
  title="Security Update"
  description="Please verify your two-factor authentication recovery codes."
  dismissible
  action={<Button size="sm" variant="outline">Verify</Button>}
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={ALERT_PROPS_DATA} />
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
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
