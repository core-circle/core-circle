'use client';

import React from 'react';
import { Command } from '@core-circle/ui';
import { HomeIcon, SearchIcon, File, Rotate, Sparkles, Terminal } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const COMMAND_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Command' },
];

export const COMMAND_HEADER_CONTENT = {
  title: 'Command',
  description:
    'A keyboard-first command palette, omnibar search, and shortcut menu facilitating rapid navigation, action execution, and symbol searching with full keyboard control.',
};

export const COMMAND_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore IDE quick open, cloud devops consoles, design tool omnibars, and customer ops.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore framing containers, shortcut keycaps, query filters, and category groupings.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test command searches, keyboard navigation, and variant styles.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Global Cmd+K keyboard shortcut listener integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sharedGroups = [
  {
    id: 'actions',
    heading: 'Core Actions',
    items: [
      { id: 'new-doc', label: 'Create New Document', icon: <File size={16} />, shortcut: '⌘N' },
      { id: 'search-sym', label: 'Find File or Symbol', icon: <SearchIcon size={16} />, shortcut: '⌘P' },
      { id: 'ask-ai', label: 'Ask AI Engineer', icon: <Sparkles size={16} className="text-amber-500" />, shortcut: '⌘J' },
    ],
  },
  {
    id: 'developer',
    heading: 'Developer Tools',
    items: [
      { id: 'open-term', label: 'Open Integrated Terminal', icon: <Terminal size={16} />, shortcut: '⌃`' },
      { id: 'sync-branch', label: 'Rebase Current Branch', icon: <Rotate size={16} />, shortcut: '⌘R' },
    ],
  },
];

export const COMMAND_THEME_CONFIGS = [
  {
    id: 'theming-ide-quickopen',
    title: '1. Modern Code Editor Quick Open Theme',
    description: 'Monospace shortcut badges and symbol discovery for IDE workspaces.',
    previewTitle: 'Codebase Command Palette',
    code: `<Command
  placeholder="Search files by name or type > for commands..."
  groups={groups}
  shortcutHint="⌘P"
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Command
            placeholder="Search files by name or type > for commands..."
            groups={sharedGroups}
            shortcutHint="⌘P"
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-cloud-devops',
    title: '2. Cloud DevOps Observability Console Theme',
    description: 'High-contrast console for Kubernetes pods, log streams, and CI/CD triggers.',
    previewTitle: 'DevOps Action Center',
    code: `<Command
  placeholder="Type a Kubernetes cluster or pod command..."
  groups={[
    {
      id: 'k8s',
      heading: 'Kubernetes Workloads',
      items: [
        { id: 'restart-pod', label: 'Rolling Restart: api-gateway', shortcut: '⌘⇧R' },
        { id: 'scale-up', label: 'Scale Deployment: worker-pool to 8x', shortcut: '⌘⇧S' },
      ],
    },
  ]}
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Command
            placeholder="Type a Kubernetes cluster or pod command..."
            groups={[
              {
                id: 'k8s',
                heading: 'Kubernetes Workloads',
                items: [
                  { id: 'restart-pod', label: 'Rolling Restart: api-gateway', shortcut: '⌘⇧R' },
                  { id: 'scale-up', label: 'Scale Deployment: worker-pool to 8x', shortcut: '⌘⇧S' },
                ],
              },
            ]}
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-design-omnibar',
    title: '3. Vector Design & Canvas Omnibar Theme',
    description: 'Quick-access styling commands for Figma-like canvas editors.',
    previewTitle: 'Canvas Quick Actions',
    code: `<Command
  placeholder="Transform, align, or distribute shapes..."
  groups={[
    {
      id: 'canvas',
      heading: 'Layout Actions',
      items: [
        { id: 'auto-layout', label: 'Add Auto Layout', shortcut: '⇧A' },
        { id: 'create-comp', label: 'Create Component', shortcut: '⌥⌘K' },
      ],
    },
  ]}
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Command
            placeholder="Transform, align, or distribute shapes..."
            groups={[
              {
                id: 'canvas',
                heading: 'Layout Actions',
                items: [
                  { id: 'auto-layout', label: 'Add Auto Layout', shortcut: '⇧A' },
                  { id: 'create-comp', label: 'Create Component', shortcut: '⌥⌘K' },
                ],
              },
            ]}
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-support-crm',
    title: '4. Support CRM & Customer Ops Theme',
    description: 'Ticket management, email refund triggers, and customer profile lookup.',
    previewTitle: 'Agent Fast-Action Menu',
    code: `<Command
  placeholder="Lookup user, refund invoice, or reassign ticket..."
  groups={[
    {
      id: 'crm',
      heading: 'Billing & Account',
      items: [
        { id: 'issue-refund', label: 'Issue Full Refund (Stripe)', shortcut: '⌘⇧F' },
        { id: 'impersonate', label: 'Impersonate User Session', shortcut: '⌘⇧U' },
      ],
    },
  ]}
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Command
            placeholder="Lookup user, refund invoice, or reassign ticket..."
            groups={[
              {
                id: 'crm',
                heading: 'Billing & Account',
                items: [
                  { id: 'issue-refund', label: 'Issue Full Refund (Stripe)', shortcut: '⌘⇧F' },
                  { id: 'impersonate', label: 'Impersonate User Session', shortcut: '⌘⇧U' },
                ],
              },
            ]}
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-minimal-flat',
    title: '5. Ultra-Minimal Underline Omnibar Theme',
    description: 'Flush borderless style for clean embedded document searching.',
    previewTitle: 'Minimal Inline Finder',
    code: `<Command
  placeholder="Jump to header, section, or bookmark..."
  groups={groups}
  variant="minimal"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl bg-white p-4 rounded-xl border border-slate-200">
          <Command
            placeholder="Jump to header, section, or bookmark..."
            groups={sharedGroups}
            variant="minimal"
          />
        </div>
      </div>
    ),
  },
];

export const COMMAND_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Framing & Border Variants',
    description: 'Elevated floating card, high-contrast border, and minimal underline.',
    items: [
      {
        title: 'Default Elevated Card',
        code: `<Command groups={groups} variant="default" />`,
        render: () => (
          <Command groups={sharedGroups} variant="default" />
        ),
      },
      {
        title: 'High-Contrast Bordered',
        code: `<Command groups={groups} variant="bordered" />`,
        render: () => (
          <Command groups={sharedGroups} variant="bordered" />
        ),
      },
      {
        title: 'Minimal Flat Underline',
        code: `<Command groups={groups} variant="minimal" />`,
        render: () => (
          <Command groups={sharedGroups} variant="minimal" />
        ),
      },
    ],
  },
  {
    id: 'group-filtering-states',
    title: 'Pre-Filtered & Specialized States',
    description: 'Query-driven item filtering, disabled permissions, and action shortcuts.',
    items: [
      {
        title: 'Pre-Filtered Query ("AI")',
        code: `<Command groups={groups} query="AI" />`,
        render: () => (
          <Command groups={sharedGroups} query="AI" />
        ),
      },
      {
        title: 'Empty Search Query Response',
        code: `<Command groups={groups} query="nonexistent-xyz" />`,
        render: () => (
          <Command groups={sharedGroups} query="nonexistent-xyz" />
        ),
      },
      {
        title: 'With Disabled Permission Item',
        code: `<Command
  groups={[
    {
      id: 'admin',
      heading: 'Restricted Controls',
      items: [
        { id: 'delete-db', label: 'Purge Production Database', disabled: true },
        { id: 'view-logs', label: 'View Realtime Access Logs' },
      ],
    },
  ]}
/>`,
        render: () => (
          <Command
            groups={[
              {
                id: 'admin',
                heading: 'Restricted Controls',
                items: [
                  { id: 'delete-db', label: 'Purge Production Database', disabled: true },
                  { id: 'view-logs', label: 'View Realtime Access Logs' },
                ],
              },
            ]}
          />
        ),
      },
    ],
  },
];

export const COMMAND_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test search filtering, variant themes, shortcut tags, and keyboard arrow keys.',
};

export const COMMAND_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Global ⌘K and Ctrl+K keyboard shortcut listener integration.',
  snippets: [
    {
      label: 'GlobalCommandPalette.tsx',
      code: `import React, { useState, useEffect } from 'react';
import { Command } from '@core-circle/ui';
import { useRouter } from 'next/navigation';

export const GlobalCommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commandGroups = [
    {
      id: 'navigation',
      heading: 'Pages',
      items: [
        { id: 'atoms', label: 'Explore Atoms', onSelect: () => router.push('/atoms') },
        { id: 'tokens', label: 'Design Tokens', onSelect: () => router.push('/docs/tokens') },
      ],
    },
  ];

  return (
    <Command
      mode="modal"
      open={isOpen}
      onOpenChange={setIsOpen}
      groups={commandGroups}
      placeholder="Type a page or command (esc to close)..."
    />
  );
};`,
    },
  ],
};

export const COMMAND_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Command } from '@core-circle/ui';

export default function MyMenu() {
  const groups = [
    {
      id: 'quick',
      heading: 'Quick Actions',
      items: [
        { id: 'copy', label: 'Copy Link', shortcut: '⌘C' },
        { id: 'open', label: 'Open Settings' },
      ],
    },
  ];

  return <Command groups={groups} placeholder="Search commands..." />;
}`,
  },
};

export const COMMAND_PROPS_DATA: PropItem[] = [
  {
    name: 'groups',
    type: 'CommandGroup[]',
    defaultValue: '[]',
    description: 'Array of categorized command groups containing items with labels and shortcuts.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Type a command or search...'",
    description: 'Watermark placeholder text displayed inside the search input.',
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'minimal'",
    defaultValue: "'default'",
    description: 'Container styling variant: elevated rounded card, bordered, or minimal underline.',
  },
  {
    name: 'mode',
    type: "'inline' | 'modal'",
    defaultValue: "'inline'",
    description: 'Rendering mode: embedded inside parent layout or rendered as a centered modal backdrop.',
  },
  {
    name: 'open',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Controlled visibility state when mode is set to modal.',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when modal dismisses or requests to open.',
  },
  {
    name: 'shortcutHint',
    type: 'string',
    defaultValue: "'⌘K'",
    description: 'Shortcut hint keycap displayed in the right side of the search input.',
  },
  {
    name: 'query',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Controlled search string for external search filter management.',
  },
  {
    name: 'onQueryChange',
    type: '(query: string) => void',
    defaultValue: 'undefined',
    description: 'Callback fired whenever the search input text changes.',
  },
];
