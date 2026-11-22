'use client';

import type { ReactNode } from 'react';
import { Star, Lock, CircleCheck, Terminal } from '@core-circle/icons';
import { Button } from '@core-circle/ui';

export interface AlertThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  props: {
    variant: 'warning' | 'gradient' | 'destructive' | 'success' | 'floating';
    title: string;
    description: string;
    dismissible?: boolean;
    icon?: ReactNode;
    action?: ReactNode;
  };
  code: string;
}

export interface AlertVariantItem {
  title: string;
  description: string;
  variant: 'info' | 'success' | 'warning' | 'destructive' | 'card' | 'floating' | 'glassmorphic' | 'pill' | 'minimal' | 'outline' | 'soft';
}

export interface AlertVariantGroup {
  id: string;
  title: string;
  description: string;
  variants: AlertVariantItem[];
}

export const ALERT_HEADER_CONTENT = {
  title: 'Alert',
  description: 'Displays a callout for user attention or information with various visual styles and action triggers.',
};

export const ALERT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Alert' },
];

export const ALERT_SECTIONS = [
  { id: 'theming', title: 'Theming', description: 'Real-world production themes.' },
  { id: 'variants', title: 'Variants', description: '12 visual alert styles.' },
  { id: 'playground', title: 'Playground', description: 'Interactive alert playground.' },
  { id: 'mock-code', title: 'Mock Code', description: 'Telemetry API payload & consumer component.' },
  { id: 'overview', title: 'Overview', description: 'Alert semantics and usage.' },
];

export const ALERT_THEME_CONFIGS: AlertThemeConfig[] = [
  {
    id: 'theming-production-alert',
    sectionTitle: '1. Enterprise Service Incident Notice Theme',
    description: 'High-visibility bordered alert with clear resolution CTAs and status telemetry.',
    previewTitle: 'Automated Failover Alert',
    props: {
      variant: 'warning',
      title: 'Automated Database Failover Initiated',
      description: 'Primary cluster node unresponsiveness detected. Replicas promoted in region us-east-1 with zero data loss.',
      dismissible: true,
      action: (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Live Dashboard</Button>
          <Button size="sm" variant="primary">Acknowledge</Button>
        </div>
      ),
    },
    code: `<Alert
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
/>`,
  },
  {
    id: 'theming-luxury-purple',
    sectionTitle: '2. Royal VIP Loyalty Reward Theme',
    description: 'Luminous gradient banner with gold star icon badges and instant claim actions.',
    previewTitle: 'VIP Loyalty Tier Upgrade',
    props: {
      variant: 'gradient',
      icon: <Star size={18} className="text-amber-500" />,
      title: 'You have unlocked Executive VIP Tier',
      description: 'Enjoy 25% discount across all cloud services, dedicated Slack war room, and custom SLA agreements.',
      dismissible: true,
      action: (
        <Button size="sm" variant="gradient">
          Claim Executive Perks
        </Button>
      ),
    },
    code: `<Alert
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
/>`,
  },
  {
    id: 'theming-security-threat',
    sectionTitle: '3. Fintech Security & Fraud Prevention Theme',
    description: 'High-urgency destructive banner with account freeze triggers and security audit logs.',
    previewTitle: 'Suspicious Login Activity Flagged',
    props: {
      variant: 'destructive',
      icon: <Lock size={18} />,
      title: 'Unrecognized Device Login Detected (Berlin, DE)',
      description: 'A new session was initiated from IP 194.26.29.112. If this was not you, freeze your API credentials immediately.',
      dismissible: true,
      action: (
        <div className="flex gap-2">
          <Button size="sm" variant="destructive">Freeze Account</Button>
          <Button size="sm" variant="outline">Verify Identity</Button>
        </div>
      ),
    },
    code: `<Alert
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
/>`,
  },
  {
    id: 'theming-cloud-backup',
    sectionTitle: '4. Cloud Database Backup Success Theme',
    description: 'Clean emerald confirmation banner with snapshot verification links.',
    previewTitle: 'Snapshot Backup Succeeded',
    props: {
      variant: 'success',
      icon: <CircleCheck size={18} />,
      title: 'Daily Database Snapshot Succeeded',
      description: 'Point-in-time recovery image created (2.4 TB). Verified hash: 8f92a1bc40.',
      dismissible: true,
      action: (
        <Button size="sm" variant="outline">View Storage Bucket</Button>
      ),
    },
    code: `<Alert
  variant="success"
  icon={<CircleCheck size={18} />}
  title="Daily Database Snapshot Succeeded"
  description="Point-in-time recovery image created (2.4 TB). Verified hash: 8f92a1bc40."
  dismissible
  action={
    <Button size="sm" variant="outline">View Storage Bucket</Button>
  }
/>`,
  },
  {
    id: 'theming-dev-quota',
    sectionTitle: '5. Developer API Usage Quota Theme',
    description: 'Elevated floating info card with meter warnings and instant plan upgrading.',
    previewTitle: 'API Rate Limit Approaching 90%',
    props: {
      variant: 'floating',
      icon: <Terminal size={18} className="text-core-circle-primary" />,
      title: 'Monthly Request Quota at 88% Capacity',
      description: 'Your workspace has consumed 880,000 of 1,000,000 requests. Upgrade to Unlimited Tier to avoid automatic burst charges.',
      dismissible: true,
      action: (
        <div className="flex gap-2">
          <Button size="sm" variant="primary">Upgrade Tier</Button>
          <Button size="sm" variant="ghost">Usage Breakdown</Button>
        </div>
      ),
    },
    code: `<Alert
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
/>`,
  },
];

export const ALERT_VARIANT_GROUPS: AlertVariantGroup[] = [
  {
    id: 'alert-variants-semantic',
    title: '1. Semantic System States',
    description: 'Core semantic alerts for informational, positive, warning, and fatal conditions.',
    variants: [
      { variant: 'info', title: 'Information Update', description: 'A new software update is ready to install.' },
      { variant: 'success', title: 'Deployment Successful', description: 'All container workloads are online.' },
      { variant: 'warning', title: 'SSL Certificate Expiring', description: 'Your TLS certificate expires in 3 days.' },
      { variant: 'destructive', title: 'Storage Quota Exceeded', description: 'Clean up older artifacts or increase disk size.' },
    ],
  },
  {
    id: 'alert-variants-card-floating',
    title: '2. Card, Floating & Glassmorphic Styles',
    description: 'Translucent frosted card, elevated shadow box, and structured container alerts.',
    variants: [
      { variant: 'card', title: 'Card Layout Alert', description: 'Contained box alert with border contrast.' },
      { variant: 'floating', title: 'Floating Elevated Alert', description: 'Soft shadow alert module with modern depth.' },
      { variant: 'glassmorphic', title: 'Glassmorphic Frost Alert', description: 'Frosted translucent backdrop blur banner.' },
    ],
  },
  {
    id: 'alert-variants-pill-minimal',
    title: '3. Pill, Minimal, Outline & Soft Styles',
    description: 'Pill-shaped capsule, flat minimal lines, crisp outline, and subtle soft tinted surfaces.',
    variants: [
      { variant: 'pill', title: 'Capsule Pill Alert', description: 'Smooth rounded-full edges for onboarding toasts.' },
      { variant: 'minimal', title: 'Minimal Border Alert', description: 'Clean left-edge indicator bar with transparent surface.' },
      { variant: 'outline', title: 'Outline Alert', description: 'Crisp geometric outline with high text clarity.' },
      { variant: 'soft', title: 'Soft Tint Alert', description: 'Gentle background wash for low-urgency notifications.' },
    ],
  },
];

export const ALERT_PLAYGROUND_SECTION = {
  id: 'alert-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 12 visual variants, titles, descriptions, icons, and dismiss handlers.',
};

export const ALERT_MOCK_PAYLOAD = JSON.stringify(
  {
    incident_id: 'inc_9824',
    severity: 'warning',
    title: 'High Latency in Edge Region us-west',
    details: 'p99 latency increased to 480ms. Traffic rerouted to secondary POP.',
    dismissible: true,
  },
  null,
  2
);

export const ALERT_MOCK_CONSUMER_CODE = `import React, { useEffect, useState } from 'react';
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
};`;

export const ALERT_MOCK_SECTION = {
  id: 'alert-mock',
  title: 'Dynamic Telemetry Alert Integration',
  description: 'Render system alerts dynamically based on incident API responses.',
  snippets: [
    { label: 'Sample Backend Incident Payload', code: ALERT_MOCK_PAYLOAD },
    { label: 'Dynamic Consumer Component', code: ALERT_MOCK_CONSUMER_CODE },
  ],
};

export const ALERT_QUICK_USAGE_CODE = `import { Alert } from '@core-circle/ui';

<Alert
  variant="info"
  title="System Notice"
  description="Scheduled maintenance is planned for Sunday 02:00 UTC."
/>`;

export const ALERT_OVERVIEW_SECTION = {
  id: 'alert-usage',
  title: 'Introduction',
  description: 'The Alert atom communicates critical status information, callouts, and actionable system events to users.',
  quickUsage: {
    label: 'Quick Usage',
    code: ALERT_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const ALERT_PROPS_DATA = [
  { name: 'variant', type: "'info' | 'success' | 'warning' | 'destructive' | 'card' | 'floating' | 'glassmorphic' | 'gradient' | 'pill' | 'minimal' | 'outline' | 'soft'", defaultValue: "'info'", description: 'The visual style of the alert (12 options).' },
  { name: 'title', type: 'ReactNode', defaultValue: '-', description: 'Optional bold title of the alert.' },
  { name: 'description', type: 'ReactNode', defaultValue: '-', description: 'The main message or content of the alert (or pass children).' },
  { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'Content of the alert passed as children.' },
  { name: 'icon', type: 'ReactNode', defaultValue: '-', description: 'Optional icon element displayed before the title.' },
  { name: 'action', type: 'ReactNode', defaultValue: '-', description: 'Optional action button or link element slot.' },
  { name: 'dismissible', type: 'boolean', defaultValue: 'false', description: 'Whether the alert shows a dismiss close button.' },
  { name: 'onDismiss', type: '() => void', defaultValue: '-', description: 'Callback triggered when the dismiss button is clicked.' },
  { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Callback triggered when the dismiss button is clicked (alias).' },
  { name: 'fullWidth', type: 'boolean', defaultValue: 'true', description: 'Whether the alert expands to fill its container width.' },
];
