import React from 'react';
import { DropdownMenu, Button, Badge } from '@core-circle/ui';
import {
  UserCircle,
  SettingsIcon,
  CreditCard,
  Lock,
  ChevronDown,
  Sparkles,
  Shield,
  HomeIcon,
  Download,
  Share,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

export const DROPDOWN_MENU_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'DropdownMenu' },
];

export const DROPDOWN_MENU_HEADER_CONTENT = {
  title: 'DropdownMenu',
  description: 'An interactive contextual action menu triggered by click, featuring keyboard navigation, shortcuts, badges, nested dividers, and 10 styling variants.',
};

export const DROPDOWN_MENU_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade dropdown menus for enterprise account switchers, developer export actions, workspace governance, and billing profiles.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from clean card to frosted glassmorphism and cyber neon dark mode.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive dropdown sandbox with live placement, size, and variant controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic user permissions and RBAC action payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sampleUserItems = [
  { id: 'profile', label: 'My Profile', icon: <UserCircle size={16} />, shortcut: '⇧⌘P' },
  { id: 'billing', label: 'Billing & Invoices', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="gradient">PRO</Badge> },
  { id: 'settings', label: 'Account Settings', icon: <SettingsIcon size={16} />, shortcut: '⌘S' },
  { id: 'security', label: 'Security & 2FA', icon: <Shield size={16} />, divider: true },
  { id: 'logout', label: 'Sign Out', destructive: true, divider: true },
];

export const DROPDOWN_MENU_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-enterprise-account',
    title: '1. Enterprise Account Switcher & Profile Theme',
    description: 'Elevated card surface with role badges, keyboard shortcuts, and destructive sign-out partition.',
    previewTitle: 'Enterprise Workspace Profile Menu',
    code: `<DropdownMenu
  variant="card"
  position="bottom-start"
  trigger={
    <Button variant="outline" endIcon={<ChevronDown size={14} />}>
      Alex Jenkins (Admin)
    </Button>
  }
  items={[
    { id: 'profile', label: 'My Profile', icon: <UserCircle size={16} />, shortcut: '⇧⌘P' },
    { id: 'billing', label: 'Billing & Invoices', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="gradient">PRO</Badge> },
    { id: 'settings', label: 'Account Settings', icon: <SettingsIcon size={16} />, shortcut: '⌘S' },
    { id: 'security', label: 'Security & 2FA', icon: <Shield size={16} />, divider: true },
    { id: 'logout', label: 'Sign Out', destructive: true, divider: true },
  ]}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <DropdownMenu
          variant="card"
          position="bottom-start"
          trigger={
            <Button variant="outline" endIcon={<ChevronDown size={14} />}>
              Alex Jenkins (Admin)
            </Button>
          }
          items={sampleUserItems}
        />
      </div>
    ),
  },
  {
    id: 'theming-devops-export',
    title: '2. Cloud Telemetry & Data Export Actions Theme',
    description: 'Dark terminal menu with instant download format shortcuts and icon callouts.',
    previewTitle: 'Telemetry Export Actions Menu',
    code: `<DropdownMenu
  variant="dark"
  position="bottom-start"
  trigger={
    <Button variant="primary" endIcon={<Download size={14} />}>
      Export Metrics
    </Button>
  }
  items={[
    { id: 'json', label: 'Export as JSON Array', icon: <Download size={16} />, shortcut: '⌘J' },
    { id: 'csv', label: 'Export as Raw CSV', icon: <Download size={16} />, shortcut: '⌘E' },
    { id: 'share', label: 'Share Telemetry Link', icon: <Share size={16} />, divider: true },
  ]}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-100 border border-slate-300 rounded-2xl w-full">
        <DropdownMenu
          variant="dark"
          position="bottom-start"
          trigger={
            <Button variant="primary" endIcon={<Download size={14} />}>
              Export Metrics
            </Button>
          }
          items={[
            { id: 'json', label: 'Export as JSON Array', icon: <Download size={16} />, shortcut: '⌘J' },
            { id: 'csv', label: 'Export as Raw CSV', icon: <Download size={16} />, shortcut: '⌘E' },
            { id: 'share', label: 'Share Telemetry Link', icon: <Share size={16} />, divider: true },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'theming-vip-glassmorphic',
    title: '3. VIP Concierge & Glassmorphic Quick Actions Theme',
    description: 'Luminous backdrop blur with purple gradient tints for modern creator portals.',
    previewTitle: 'VIP Concierge Actions Menu',
    code: `<DropdownMenu
  variant="glassmorphic"
  position="bottom-start"
  trigger={
    <Button variant="glassmorphic" endIcon={<Sparkles size={14} />}>
      VIP Studio Actions
    </Button>
  }
  items={[
    { id: 'deploy', label: 'Deploy to Edge (Global)', icon: <Sparkles size={16} />, shortcut: '⇧⌘D' },
    { id: 'keys', label: 'Rotate Signing Keys', icon: <Lock size={16} />, shortcut: '⌘K' },
    { id: 'audit', label: 'Download Audit Log', icon: <Shield size={16} />, divider: true },
  ]}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-gradient-to-br from-blue-50/70 to-purple-50/70 border border-purple-200/50 rounded-2xl w-full">
        <DropdownMenu
          variant="glassmorphic"
          position="bottom-start"
          trigger={
            <Button variant="glassmorphic" endIcon={<Sparkles size={14} />}>
              VIP Studio Actions
            </Button>
          }
          items={[
            { id: 'deploy', label: 'Deploy to Edge (Global)', icon: <Sparkles size={16} />, shortcut: '⇧⌘D' },
            { id: 'keys', label: 'Rotate Signing Keys', icon: <Lock size={16} />, shortcut: '⌘K' },
            { id: 'audit', label: 'Download Audit Log', icon: <Shield size={16} />, divider: true },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'theming-compact-pill',
    title: '4. Compact Pill Navigation & Mobile Actions Theme',
    description: 'Rounded pill shape menu ideal for tight mobile headers and dense navigation tables.',
    previewTitle: 'Compact Pill Action Menu',
    code: `<DropdownMenu
  variant="pill"
  size="sm"
  position="bottom-end"
  trigger={
    <Button variant="ghost" size="sm">
      Quick Actions ▾
    </Button>
  }
  items={[
    { id: 'edit', label: 'Edit Document', icon: <SettingsIcon size={14} /> },
    { id: 'share', label: 'Copy Share Link', icon: <Share size={14} /> },
    { id: 'delete', label: 'Delete Record', destructive: true, divider: true },
  ]}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-core-circle-border-main rounded-2xl w-full">
        <DropdownMenu
          variant="pill"
          size="sm"
          position="bottom-end"
          trigger={
            <Button variant="ghost" size="sm">
              Quick Actions ▾
            </Button>
          }
          items={[
            { id: 'edit', label: 'Edit Document', icon: <SettingsIcon size={14} /> },
            { id: 'share', label: 'Copy Share Link', icon: <Share size={14} /> },
            { id: 'delete', label: 'Delete Record', destructive: true, divider: true },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'theming-accent-brand',
    title: '5. High-Assurance Primary Accent Theme',
    description: 'Highlighted brand outline with focused active items for secure transactional operations.',
    previewTitle: 'Primary Accent Transaction Menu',
    code: `<DropdownMenu
  variant="accent"
  position="bottom-start"
  trigger={
    <Button variant="primary" endIcon={<ChevronDown size={14} />}>
      Transfer Assets
    </Button>
  }
  items={[
    { id: 'wire', label: 'Instant Bank Wire', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="success">Zero Fee</Badge> },
    { id: 'crypto', label: 'Crypto Liquidity Pool', icon: <Sparkles size={16} /> },
    { id: 'compliance', label: 'KYC Document Vault', icon: <Shield size={16} />, divider: true },
  ]}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-core-circle-border-main rounded-2xl w-full">
        <DropdownMenu
          variant="accent"
          position="bottom-start"
          trigger={
            <Button variant="primary" endIcon={<ChevronDown size={14} />}>
              Transfer Assets
            </Button>
          }
          items={[
            { id: 'wire', label: 'Instant Bank Wire', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="success">Zero Fee</Badge> },
            { id: 'crypto', label: 'Crypto Liquidity Pool', icon: <Sparkles size={16} /> },
            { id: 'compliance', label: 'KYC Document Vault', icon: <Shield size={16} />, divider: true },
          ]}
        />
      </div>
    ),
  },
];

export const DROPDOWN_MENU_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'dropdown-variants-surfaces',
    title: '1. Surface Styles (Default, Minimal, Card, Bordered)',
    description: 'Clean surfaces tailored for light documentation and dashboard layouts.',
    customRender: () => (
      <div className="flex flex-wrap gap-6 items-center justify-around p-8 bg-white border border-core-circle-border-main rounded-2xl w-full">
        <DropdownMenu
          variant="default"
          trigger={<Button variant="outline" size="sm">Default Menu ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
        <DropdownMenu
          variant="minimal"
          trigger={<Button variant="ghost" size="sm">Minimal Menu ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
        <DropdownMenu
          variant="bordered"
          trigger={<Button variant="outline" size="sm">Bordered Menu ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
      </div>
    ),
  },
  {
    id: 'dropdown-variants-modern',
    title: '2. Modern Stylings (Glassmorphic, Gradient, Dark, Pill)',
    description: 'Modern elevation styles with translucent blurs, gradients, and dark mode.',
    customRender: () => (
      <div className="flex flex-wrap gap-6 items-center justify-around p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <DropdownMenu
          variant="glassmorphic"
          trigger={<Button variant="glassmorphic" size="sm">Glassmorphic ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
        <DropdownMenu
          variant="gradient"
          trigger={<Button variant="primary" size="sm">Gradient ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
        <DropdownMenu
          variant="dark"
          trigger={<Button variant="outline" size="sm">Dark Mode ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
        <DropdownMenu
          variant="pill"
          trigger={<Button variant="outline" size="sm">Pill Style ▾</Button>}
          items={sampleUserItems.slice(0, 3)}
        />
      </div>
    ),
  },
];

export const DROPDOWN_MENU_PLAYGROUND_SECTION = {
  id: 'dropdown-menu-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with dropdown variants, anchor placements, sizes, and live generated JSX code.',
};

export const DROPDOWN_MENU_MOCK_SECTION = {
  id: 'dropdown-menu-mock-section',
  title: 'Dynamic User Permissions & RBAC Action Payload',
  description: 'Pattern for rendering contextual dropdown menus dynamically from remote user permission sets.',
  snippets: [
    {
      label: 'Sample User RBAC Permissions Payload',
      code: JSON.stringify(
        {
          userId: 'usr_88921',
          role: 'ADMIN',
          actions: [
            { id: 'invite', label: 'Invite Teammate', shortcut: '⌘I', icon: 'UserPlus' },
            { id: 'billing', label: 'Manage Subscriptions', badge: 'Active', icon: 'CreditCard' },
            { id: 'keys', label: 'API Keys & Secrets', icon: 'Key' },
            { id: 'revoke', label: 'Revoke Access', destructive: true, divider: true },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Dropdown Consumer Component',
      code: `import React, { useState, useEffect } from 'react';
import { DropdownMenu, Button } from '@core-circle/ui';

export const DynamicUserActionsDropdown = ({ userId }) => {
  const [userContext, setUserContext] = useState(null);

  useEffect(() => {
    fetch(\`/api/v1/users/\${userId}/permissions\`)
      .then((res) => res.json())
      .then((data) => setUserContext(data));
  }, [userId]);

  if (!userContext) return null;

  return (
    <DropdownMenu
      variant="card"
      position="bottom-start"
      trigger={<Button variant="primary">Manage Role ▾</Button>}
      items={userContext.actions.map((act) => ({
        id: act.id,
        label: act.label,
        shortcut: act.shortcut,
        destructive: act.destructive,
        divider: act.divider,
        onClick: () => console.log('Executing', act.id),
      }))}
    />
  );
};`,
    },
  ],
};

export const DROPDOWN_MENU_OVERVIEW_SECTION = {
  id: 'dropdown-menu-overview-intro',
  title: 'Introduction',
  description: 'The DropdownMenu component reveals a contextual list of actions, options, or submenus upon clicking a trigger element. It supports full keyboard accessibility, customizable item badges, keyboard shortcut hints, and multiple surface themes.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { DropdownMenu, Button } from '@core-circle/ui';

<DropdownMenu
  variant="card"
  trigger={<Button variant="primary">Actions ▾</Button>}
  items={[
    { id: 'edit', label: 'Edit Record', shortcut: '⌘E' },
    { id: 'share', label: 'Share Link', shortcut: '⌘S' },
    { id: 'delete', label: 'Delete Record', destructive: true, divider: true }
  ]}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const DROPDOWN_MENU_PROPS_DATA: PropItem[] = [
  {
    name: 'trigger',
    type: 'ReactNode',
    description: 'The interactive clickable element that toggles the dropdown popover.',
  },
  {
    name: 'items',
    type: 'DropdownMenuItem[]',
    description: 'Schema array of menu items ({ id, label, icon?, shortcut?, badge?, destructive?, divider?, disabled? }).',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'minimal' | 'glassmorphic' | 'gradient' | 'bordered' | 'dark' | 'compact' | 'pill' | 'accent'",
    defaultValue: "'card'",
    description: 'Visual styling aesthetic of the dropdown card.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Scale size affecting min-width, padding, and font size.',
  },
  {
    name: 'position',
    type: "'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-end' | 'left' | 'right'",
    defaultValue: "'bottom-start'",
    description: 'Anchor placement relative to the trigger element.',
  },
  {
    name: 'open',
    type: 'boolean',
    description: 'Controlled open state of the dropdown.',
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial open state for uncontrolled usage.',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    description: 'Callback fired whenever the dropdown opens or closes.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS class names applied to the dropdown menu popover.',
  },
];
