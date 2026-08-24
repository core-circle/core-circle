'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Alert, Button, Typography, Badge } from '@core-circle/ui';
import { 
  Info, 
  CodeIcon, 
  Sparkles, 
  Shield, 
  Star, 
  Palette, 
  Layers, 
  Play, 
  CircleCheck, 
  CircleX, 
  Lock, 
  Cloud, 
  Terminal, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { ALERT_PROPS_DATA } from '../../../constants/atoms-page/alert/alertConstants';
import { AlertPlayground } from '../../../components/playground/alert/alertPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';

export default function AlertContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Incident Notice */}
          <DocSection
            id="theming-production-alert"
            title="1. Enterprise Service Incident Notice Theme"
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

          {/* 2. VIP Loyalty Reward */}
          <DocSection
            id="theming-luxury-purple"
            title="2. Royal VIP Loyalty Reward Theme"
            description="Luminous gradient banner with gold star icon badges and instant claim actions."
          >
            <ComponentPreview
              title="VIP Loyalty Tier Upgrade"
              code={`<Alert
  variant="gradient"
  icon={<Star size={18} className="text-amber-500" />}
  title="You have unlocked Executive VIP Tier"
  description="Enjoy 25% discount across all cloud services, dedicated Slack war room, and custom SLA agreements."
  dismissible
  action={
    <Button size="sm" variant="gradient">
      Claim Executive Perks
    </Button>
  }
/>`}
            >
              <div className="w-full">
                <Alert
                  variant="gradient"
                  icon={<Star size={18} className="text-amber-500" />}
                  title="You have unlocked Executive VIP Tier"
                  description="Enjoy 25% discount across all cloud services, dedicated Slack war room, and custom SLA agreements."
                  dismissible
                  action={
                    <Button size="sm" variant="gradient">
                      Claim Executive Perks
                    </Button>
                  }
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Fintech Security Threat Notice */}
          <DocSection
            id="theming-security-threat"
            title="3. Fintech Security & Fraud Prevention Theme"
            description="High-urgency destructive banner with account freeze triggers and security audit logs."
          >
            <ComponentPreview
              title="Suspicious Login Activity Flagged"
              code={`<Alert
  variant="destructive"
  icon={<Lock size={18} />}
  title="Unrecognized Device Login Detected (Berlin, DE)"
  description="A new session was initiated from IP 194.26.29.112. If this was not you, freeze your API credentials immediately."
  dismissible
  action={
    <div className="flex gap-2">
      <Button size="sm" variant="destructive">Freeze Account</Button>
      <Button size="sm" variant="outline">Verify Identity</Button>
    </div>
  }
/>`}
            >
              <div className="w-full">
                <Alert
                  variant="destructive"
                  icon={<Lock size={18} />}
                  title="Unrecognized Device Login Detected (Berlin, DE)"
                  description="A new session was initiated from IP 194.26.29.112. If this was not you, freeze your API credentials immediately."
                  dismissible
                  action={
                    <div className="flex gap-2">
                      <Button size="sm" variant="destructive">Freeze Account</Button>
                      <Button size="sm" variant="outline">Verify Identity</Button>
                    </div>
                  }
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Cloud Backup Success Notice */}
          <DocSection
            id="theming-cloud-backup"
            title="4. Cloud Database Backup Success Theme"
            description="Clean emerald confirmation banner with snapshot verification links."
          >
            <ComponentPreview
              title="Snapshot Backup Succeeded"
              code={`<Alert
  variant="success"
  icon={<CircleCheck size={18} />}
  title="Daily Database Snapshot Succeeded"
  description="Point-in-time recovery image created (2.4 TB). Verified hash: 8f92a1bc40."
  dismissible
  action={
    <Button size="sm" variant="outline">View Storage Bucket</Button>
  }
/>`}
            >
              <div className="w-full">
                <Alert
                  variant="success"
                  icon={<CircleCheck size={18} />}
                  title="Daily Database Snapshot Succeeded"
                  description="Point-in-time recovery image created (2.4 TB). Verified hash: 8f92a1bc40."
                  dismissible
                  action={
                    <Button size="sm" variant="outline">View Storage Bucket</Button>
                  }
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Developer Workspace Rate Limit Notice */}
          <DocSection
            id="theming-dev-quota"
            title="5. Developer API Usage Quota Theme"
            description="Elevated floating info card with meter warnings and instant plan upgrading."
          >
            <ComponentPreview
              title="API Rate Limit Approaching 90%"
              code={`<Alert
  variant="floating"
  icon={<Terminal size={18} className="text-core-circle-primary" />}
  title="Monthly Request Quota at 88% Capacity"
  description="Your workspace has consumed 880,000 of 1,000,000 requests. Upgrade to Unlimited Tier to avoid automatic burst charges."
  dismissible
  action={
    <div className="flex gap-2">
      <Button size="sm" variant="primary">Upgrade Tier</Button>
      <Button size="sm" variant="ghost">Usage Breakdown</Button>
    </div>
  }
/>`}
            >
              <div className="w-full">
                <Alert
                  variant="floating"
                  icon={<Terminal size={18} className="text-core-circle-primary" />}
                  title="Monthly Request Quota at 88% Capacity"
                  description="Your workspace has consumed 880,000 of 1,000,000 requests. Upgrade to Unlimited Tier to avoid automatic burst charges."
                  dismissible
                  action={
                    <div className="flex gap-2">
                      <Button size="sm" variant="primary">Upgrade Tier</Button>
                      <Button size="sm" variant="ghost">Usage Breakdown</Button>
                    </div>
                  }
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
          <DocSection id="alert-variants-semantic" title="1. Semantic System States" description="Core semantic alerts for informational, positive, warning, and fatal conditions.">
            <div className="flex flex-col gap-4 w-full">
              <Alert variant="info" title="Information Update" description="A new software update is ready to install." />
              <Alert variant="success" title="Deployment Successful" description="All container workloads are online." />
              <Alert variant="warning" title="SSL Certificate Expiring" description="Your TLS certificate expires in 3 days." />
              <Alert variant="destructive" title="Storage Quota Exceeded" description="Clean up older artifacts or increase disk size." />
            </div>
          </DocSection>

          <DocSection id="alert-variants-card-floating" title="2. Card, Floating & Glassmorphic Styles" description="Translucent frosted card, elevated shadow box, and structured container alerts.">
            <div className="flex flex-col gap-4 w-full">
              <Alert variant="card" title="Card Layout Alert" description="Contained box alert with border contrast." />
              <Alert variant="floating" title="Floating Elevated Alert" description="Soft shadow alert module with modern depth." />
              <Alert variant="glassmorphic" title="Glassmorphic Frost Alert" description="Frosted translucent backdrop blur banner." />
            </div>
          </DocSection>

          <DocSection id="alert-variants-pill-minimal" title="3. Pill, Minimal, Outline & Soft Styles" description="Pill-shaped capsule, flat minimal lines, crisp outline, and subtle soft tinted surfaces.">
            <div className="flex flex-col gap-4 w-full">
              <Alert variant="pill" title="Capsule Pill Alert" description="Smooth rounded-full edges for onboarding toasts." />
              <Alert variant="minimal" title="Minimal Border Alert" description="Clean left-edge indicator bar with transparent surface." />
              <Alert variant="outline" title="Outline Alert" description="Crisp geometric outline with high text clarity." />
              <Alert variant="soft" title="Soft Tint Alert" description="Gentle background wash for low-urgency notifications." />
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
          title="Interactive Playground"
          description="Experiment with 12 visual variants, titles, descriptions, icons, and dismiss handlers."
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
            title="Dynamic Telemetry Alert Integration"
            description="Render system alerts dynamically based on incident API responses."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Incident Payload"
                code={JSON.stringify({
                  incident_id: "inc_9824",
                  severity: "warning",
                  title: "High Latency in Edge Region us-west",
                  details: "p99 latency increased to 480ms. Traffic rerouted to secondary POP.",
                  dismissible: true
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useEffect, useState } from 'react';
import { Alert, Button } from '@core-circle/ui';

export const LiveSystemAlert = () => {
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    fetch('/api/v1/incidents/active')
      .then(res => res.json())
      .then(data => setIncident(data));
  }, []);

  if (!incident) return null;

  return (
    <Alert
      variant={incident.severity}
      title={incident.title}
      description={incident.details}
      dismissible={incident.dismissible}
      action={<Button size="sm" variant="outline">View Health Graph</Button>}
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
          <DocSection id="alert-usage" title="Introduction" description="The Alert atom communicates critical status information, callouts, and actionable system events to users.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Alert } from '@core-circle/ui';

<Alert
  variant="info"
  title="System Notice"
  description="Scheduled maintenance is planned for Sunday 02:00 UTC."
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
