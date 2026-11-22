import { HomeIcon, Chat, Phone, Mail, Sparkles, DocumentText, AlertTriangle } from '@core-circle/icons';
import { FloatingAction } from '@core-circle/ui';

export const FLOATING_ACTION_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
  { label: 'Atoms', href: '/atoms' },
  { label: 'FloatingAction' },
];

export const FLOATING_ACTION_HEADER_CONTENT = {
  title: 'FloatingAction',
  description: 'A floating action button (FAB) anchoring high-priority speed-dial actions with animated radial rotations, customizable direction fan-outs, and extended label pills.',
};

const defaultActions = [
  { id: 'chat', label: 'Live Chat', icon: <Chat size={16} /> },
  { id: 'phone', label: 'Call Helpdesk', icon: <Phone size={16} /> },
  { id: 'ticket', label: 'Submit Ticket', icon: <Mail size={16} /> },
  { id: 'ai', label: 'AI Copilot', icon: <Sparkles size={16} /> },
];

export const FLOATING_ACTION_THEME_CONFIGS = [
  {
    id: 'theme-primary-helpdesk',
    title: '1. Primary Helpdesk Support Theme',
    description: 'Vibrant brand blue floating button for customer support, chat portals, and ticketing.',
    previewTitle: 'Primary Brand FAB',
    code: `<FloatingAction
  variant="primary"
  size="md"
  actions={[
    { id: 'chat', label: 'Live Chat', icon: <Chat size={16} /> },
    { id: 'phone', label: 'Call Helpdesk', icon: <Phone size={16} /> },
    { id: 'ticket', label: 'Submit Ticket', icon: <Mail size={16} /> },
  ]}
/>`,
    render: () => (
      <div className="relative w-full max-w-xl h-64 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
        Customer Support Portal Viewport
        <FloatingAction
          fixed={false}
          position="bottom-right"
          variant="primary"
          actions={defaultActions}
        />
      </div>
    ),
  },
  {
    id: 'theme-dark-incident',
    title: '2. Cyber Dark Incident Response Theme',
    description: 'High-contrast dark action button designed for DevOps incident rooms and monitoring cockpits.',
    previewTitle: 'Cyber Dark FAB',
    code: `<FloatingAction
  variant="dark"
  size="md"
  actions={[
    { id: 'alert', label: 'Declare Incident', icon: <AlertTriangle size={16} /> },
    { id: 'ticket', label: 'Page On-Call Lead', icon: <Phone size={16} /> },
  ]}
/>`,
    render: () => (
      <div className="relative w-full max-w-xl h-64 rounded-core-circle-xl border border-core-circle-border-main bg-slate-100 flex items-center justify-center text-xs text-slate-400">
        Infrastructure Status Viewport
        <FloatingAction
          fixed={false}
          position="bottom-right"
          variant="dark"
          actions={[
            { id: 'alert', label: 'Declare Incident', icon: <AlertTriangle size={16} /> },
            { id: 'call', label: 'Page On-Call Lead', icon: <Phone size={16} /> },
            { id: 'logs', label: 'Tail Audit Stream', icon: <DocumentText size={16} /> },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'theme-extended-pill',
    title: '3. Extended Pill Quick Create Theme',
    description: 'Extended horizontal capsule button with descriptive label for high-conversion actions.',
    previewTitle: 'Extended Pill Action',
    code: `<FloatingAction
  variant="primary"
  label="Create Issue"
  actions={actions}
/>`,
    render: () => (
      <div className="relative w-full max-w-xl h-64 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
        Project Backlog Board Viewport
        <FloatingAction
          fixed={false}
          position="bottom-right"
          variant="primary"
          label="Create Issue"
          actions={defaultActions}
        />
      </div>
    ),
  },
  {
    id: 'theme-ai-gradient',
    title: '4. AI Copilot Gradient Theme',
    description: 'Vibrant indigo-to-purple gradient button representing autonomous intelligence and copilot assistance.',
    previewTitle: 'AI Gradient FAB',
    code: `<FloatingAction
  variant="gradient"
  icon={<Sparkles size={20} />}
  actions={actions}
/>`,
    render: () => (
      <div className="relative w-full max-w-xl h-64 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
        Copilot Workspace Canvas Viewport
        <FloatingAction
          fixed={false}
          position="bottom-right"
          variant="gradient"
          icon={<Sparkles size={20} />}
          actions={defaultActions}
        />
      </div>
    ),
  },
  {
    id: 'theme-secondary-minimal',
    title: '5. Secondary White Minimal Theme',
    description: 'Subtle clean white card button with discrete border and soft shadow.',
    previewTitle: 'Minimal White FAB',
    code: `<FloatingAction
  variant="secondary"
  actions={actions}
/>`,
    render: () => (
      <div className="relative w-full max-w-xl h-64 rounded-core-circle-xl border border-core-circle-border-main bg-slate-100 flex items-center justify-center text-xs text-slate-400">
        Documentation Article Viewport
        <FloatingAction
          fixed={false}
          position="bottom-right"
          variant="secondary"
          actions={defaultActions}
        />
      </div>
    ),
  },
];

export const FLOATING_ACTION_VARIANT_GROUPS = [
  {
    id: 'surface-colors',
    title: 'Surface Color Variants',
    description: 'Choose between primary brand blue, secondary white, cyber dark, and glowing gradient surfaces.',
    items: [
      {
        title: 'Primary Brand Surface',
        code: `<FloatingAction variant="primary" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Primary Trigger Surface
            <FloatingAction fixed={false} variant="primary" actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Secondary White Surface',
        code: `<FloatingAction variant="secondary" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-100 flex items-center justify-center text-xs text-slate-400">
            Secondary Trigger Surface
            <FloatingAction fixed={false} variant="secondary" actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Cyber Dark Surface',
        code: `<FloatingAction variant="dark" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Dark Trigger Surface
            <FloatingAction fixed={false} variant="dark" actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Gradient Surface',
        code: `<FloatingAction variant="gradient" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Gradient Trigger Surface
            <FloatingAction fixed={false} variant="gradient" actions={defaultActions} />
          </div>
        ),
      },
    ],
  },
  {
    id: 'sizes',
    title: 'Size Scales',
    description: 'Compact 40px, standard 56px, and prominent 64px button diameters.',
    items: [
      {
        title: 'Small Scale (40px)',
        code: `<FloatingAction size="sm" />`,
        render: () => (
          <div className="relative w-full max-w-md h-40 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Small FAB Size
            <FloatingAction fixed={false} size="sm" actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Medium Scale (56px Standard)',
        code: `<FloatingAction size="md" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Medium FAB Size
            <FloatingAction fixed={false} size="md" actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Large Scale (64px Prominent)',
        code: `<FloatingAction size="lg" />`,
        render: () => (
          <div className="relative w-full max-w-md h-48 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Large FAB Size
            <FloatingAction fixed={false} size="lg" actions={defaultActions} />
          </div>
        ),
      },
    ],
  },
  {
    id: 'directions-and-states',
    title: 'Fan-Out Directions & Extended States',
    description: 'Configure directional fan-outs, trigger labels, and disabled states.',
    items: [
      {
        title: 'Extended Pill with Action Label',
        code: `<FloatingAction label="Quick Actions" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Extended Pill Container
            <FloatingAction fixed={false} label="Quick Actions" actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Disabled Interaction State',
        code: `<FloatingAction disabled />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Disabled FAB
            <FloatingAction fixed={false} disabled actions={defaultActions} />
          </div>
        ),
      },
      {
        title: 'Leftward Speed-Dial Fan-Out',
        code: `<FloatingAction direction="left" />`,
        render: () => (
          <div className="relative w-full max-w-md h-44 rounded-core-circle-xl border border-core-circle-border-main bg-slate-50 flex items-center justify-center text-xs text-slate-400">
            Leftward Expand
            <FloatingAction fixed={false} direction="left" actions={defaultActions} />
          </div>
        ),
      },
    ],
  },
];

export const FLOATING_ACTION_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test floating action colors, sizing dimensions, corner anchors, direction orientations, and extended labels.',
};

export const FLOATING_ACTION_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Usage',
  description: 'Learn how to integrate FloatingAction into production dashboards and live support widgets.',
  snippets: [
    {
      label: 'Global Support Concierge (TypeScript)',
      code: `import React from 'react';
import { FloatingAction } from '@core-circle/ui';
import { Chat, Phone, Mail, Sparkles } from '@core-circle/icons';

export const LiveSupportConcierge = () => {
  const actions = [
    { id: 'chat', label: 'Live Chat', icon: <Chat size={16} />, onClick: () => window.open('/chat') },
    { id: 'phone', label: 'Call Support', icon: <Phone size={16} />, onClick: () => window.open('tel:18005550199') },
    { id: 'ticket', label: 'Open Ticket', icon: <Mail size={16} />, onClick: () => window.open('/tickets/new') },
    { id: 'copilot', label: 'Ask Copilot', icon: <Sparkles size={16} />, onClick: () => alert('Copilot activated') },
  ];

  return (
    <FloatingAction
      position="bottom-right"
      variant="primary"
      size="md"
      actions={actions}
    />
  );
};`,
    },
  ],
};

export const FLOATING_ACTION_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Complete documentation for the FloatingAction component and speed-dial action parameters.',
  quickUsage: {
    label: 'Basic Usage',
    code: `import { FloatingAction } from '@core-circle/ui';
import { Chat, Phone } from '@core-circle/icons';

export default function Example() {
  return (
    <FloatingAction
      position="bottom-right"
      actions={[
        { id: 'chat', label: 'Live Chat', icon: <Chat size={16} /> },
        { id: 'phone', label: 'Call', icon: <Phone size={16} /> },
      ]}
    />
  );
}`,
  },
};

export const FLOATING_ACTION_PROPS_DATA = [
  {
    name: 'actions',
    type: 'FabAction[]',
    defaultValue: '[]',
    description: 'Array of speed-dial child action items each with id, label, icon, and onClick.',
  },
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'dark' | 'gradient'",
    defaultValue: "'primary'",
    description: 'Visual color styling of the main circular trigger button.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Diameter scale of the circular trigger button (sm: 40px, md: 56px, lg: 64px).',
  },
  {
    name: 'position',
    type: "'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'",
    defaultValue: "'bottom-right'",
    description: 'Viewport corner anchor coordinates.',
  },
  {
    name: 'fixed',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether CSS position is fixed to viewport window or absolute within parent container.',
  },
  {
    name: 'direction',
    type: "'up' | 'down' | 'left' | 'right'",
    defaultValue: "'up'",
    description: 'Speed-dial fan-out axis and alignment relative to trigger button.',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Optional text string transforming the circular trigger into an extended pill FAB.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables button interactions and suppresses speed-dial menu expansion.',
  },
];
