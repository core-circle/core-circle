import React from 'react';
import { EmptyState, Button } from '@core-circle/ui';
import {
  Folder,
  SearchIcon,
  Plus,
  HomeIcon,
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

export const EMPTY_STATE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'EmptyState' },
];

export const EMPTY_STATE_HEADER_CONTENT = {
  title: 'EmptyState',
  description: 'An informative placeholder surface communicating that a table, list, search, or inbox has no data, with clear calls-to-action to guide the user.',
};

export const EMPTY_STATE_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore production empty state designs for zero-inbox, first-time project onboarding, search query misses, and permission gates.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual container variants (dashed, card, default, minimal, glassmorphic, dark) across sizes.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive empty state sandbox with live title, description, variant, and action controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic data-table empty fallback integration payload example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const EMPTY_STATE_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-dashed-onboarding',
    title: '1. First-Time Project Onboarding (Dashed)',
    description: 'Dashed border inviting users to take immediate creation action on an empty workspace.',
    previewTitle: 'Dashed Border Project Creator',
    code: `<EmptyState
  variant="dashed"
  icon={<Folder size={32} />}
  title="No projects created yet"
  description="Kick off your new workspace by scaffolding your first design system module."
  action={<Button variant="primary" size="sm" startIcon={<Plus size={14} />}>Create Project</Button>}
  secondaryAction={<Button variant="outline" size="sm">Browse Templates</Button>}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <EmptyState
          variant="dashed"
          icon={<Folder size={32} />}
          title="No projects created yet"
          description="Kick off your new workspace by scaffolding your first design system module."
          action={<Button variant="primary" size="sm" startIcon={<Plus size={14} />}>Create Project</Button>}
          secondaryAction={<Button variant="outline" size="sm">Browse Templates</Button>}
        />
      </div>
    ),
  },
  {
    id: 'theming-search-not-found',
    title: '2. Search & Filter Query Miss Theme',
    description: 'Clean elevated card prompting user to reset filters or retry query terms.',
    previewTitle: 'Search Query No Results',
    code: `<EmptyState
  variant="card"
  icon={<SearchIcon size={32} />}
  title="No matching components found"
  description="We couldn't find any results matching your search terms. Try clearing filters or checking typos."
  action={<Button variant="outline" size="sm">Reset All Filters</Button>}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <EmptyState
          variant="card"
          icon={<SearchIcon size={32} />}
          title="No matching components found"
          description="We couldn't find any results matching your search terms. Try clearing filters or checking typos."
          action={<Button variant="outline" size="sm">Reset All Filters</Button>}
        />
      </div>
    ),
  },
  {
    id: 'theming-glassmorphic',
    title: '3. Frosted Glassmorphism Theme',
    description: 'Translucent backdrop filter with bright primary accent iconography.',
    previewTitle: 'Glassmorphic Empty Surface',
    code: `<EmptyState
  variant="glassmorphic"
  icon={<Folder size={32} />}
  title="Workspace Assets Empty"
  description="Drag and drop SVG assets, icon sets, or token packages here to begin."
  action={<Button variant="primary" size="sm">Upload Assets</Button>}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-slate-200 rounded-2xl w-full">
        <EmptyState
          variant="glassmorphic"
          icon={<Folder size={32} />}
          title="Workspace Assets Empty"
          description="Drag and drop SVG assets, icon sets, or token packages here to begin."
          action={<Button variant="primary" size="sm">Upload Assets</Button>}
        />
      </div>
    ),
  },
  {
    id: 'theming-dark',
    title: '4. Cyber Dark Console Theme',
    description: 'High-contrast dark card for database query logs and terminal trace views.',
    previewTitle: 'Dark Console Empty Log',
    code: `<EmptyState
  variant="dark"
  icon={<Folder size={32} />}
  title="Zero Security Vulnerabilities Detected"
  description="All scanned npm dependencies, lockfiles, and secrets are clear of CVE alerts."
  action={<Button variant="secondary" size="sm">Run New Audit</Button>}
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-100 border border-slate-200 rounded-2xl w-full">
        <EmptyState
          variant="dark"
          icon={<Folder size={32} />}
          title="Zero Security Vulnerabilities Detected"
          description="All scanned npm dependencies, lockfiles, and secrets are clear of CVE alerts."
          action={<Button variant="secondary" size="sm">Run New Audit</Button>}
        />
      </div>
    ),
  },
  {
    id: 'theming-minimal',
    title: '5. Minimalist Inline Table Fallback',
    description: 'Borderless and compact for tight table row spans.',
    previewTitle: 'Compact Inline Table Fallback',
    code: `<EmptyState
  variant="minimal"
  size="sm"
  icon={<SearchIcon size={24} />}
  title="No active sessions"
  description="User has no other active logins."
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl w-full">
        <EmptyState
          variant="minimal"
          size="sm"
          icon={<SearchIcon size={24} />}
          title="No active sessions"
          description="User has no other active logins."
        />
      </div>
    ),
  },
];

export const EMPTY_STATE_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-surfaces',
    title: 'Surface Variations',
    description: 'Visual presentations across the available container variants.',
    items: [
      {
        title: 'Dashed Outline',
        code: `<EmptyState variant="dashed" title="Dashed Container" />`,
        render: () => (
          <EmptyState
            variant="dashed"
            icon={<Folder size={28} />}
            title="Dashed Container"
            description="Invites drop or click creation."
            size="sm"
          />
        ),
      },
      {
        title: 'Elevated Card',
        code: `<EmptyState variant="card" title="Card Container" />`,
        render: () => (
          <EmptyState
            variant="card"
            icon={<Folder size={28} />}
            title="Card Container"
            description="Clean shadow and solid surface."
            size="sm"
          />
        ),
      },
      {
        title: 'Minimal Inline',
        code: `<EmptyState variant="minimal" title="Minimal Container" />`,
        render: () => (
          <EmptyState
            variant="minimal"
            icon={<Folder size={24} />}
            title="Minimal Container"
            description="Zero padding borderless presentation."
            size="sm"
          />
        ),
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Proportional sizing scale (sm, md, lg).',
    items: [
      {
        title: 'Small Scale (sm)',
        code: `<EmptyState size="sm" title="Small Scale" />`,
        render: () => (
          <EmptyState
            size="sm"
            variant="card"
            icon={<Folder size={24} />}
            title="Small Scale (sm)"
            description="Compact padding for modals and sidebars."
          />
        ),
      },
      {
        title: 'Medium Scale (md)',
        code: `<EmptyState size="md" title="Medium Scale" />`,
        render: () => (
          <EmptyState
            size="md"
            variant="card"
            icon={<Folder size={32} />}
            title="Medium Scale (md)"
            description="Standard sizing for full page views."
          />
        ),
      },
      {
        title: 'Large Scale (lg)',
        code: `<EmptyState size="lg" title="Large Scale" />`,
        render: () => (
          <EmptyState
            size="lg"
            variant="card"
            icon={<Folder size={40} />}
            title="Large Scale (lg)"
            description="Hero empty state with prominent messaging."
          />
        ),
      },
    ],
  },
];

export const EMPTY_STATE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test empty state visual containers, sizing scales, titles, and call-to-action buttons.',
};

export const EMPTY_STATE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Data Table Empty Fallback Integration',
  description: 'Conditional rendering example handling empty array payloads.',
  snippets: [
    {
      label: 'MembersTable.tsx',
      code: `import React from 'react';
import { EmptyState, Button } from '@core-circle/ui';
import { UserCircle, Plus } from '@core-circle/icons';

export function MembersList({ members = [] }: { members: any[] }) {
  if (members.length === 0) {
    return (
      <EmptyState
        variant="dashed"
        icon={<UserCircle size={36} />}
        title="No team members invited"
        description="Invite engineers and designers to start collaborating on design tokens."
        action={
          <Button variant="primary" size="sm" startIcon={<Plus size={14} />}>
            Invite Member
          </Button>
        }
      />
    );
  }

  return (
    <div>{/* Render active members */}</div>
  );
}`,
    },
  ],
};

export const EMPTY_STATE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { EmptyState, Button } from '@core-circle/ui';
import { Folder, Plus } from '@core-circle/icons';

export default function MyEmptyView() {
  return (
    <EmptyState
      variant="dashed"
      icon={<Folder size={32} />}
      title="No files yet"
      description="Create a file or upload an asset to get started."
      action={<Button variant="primary" startIcon={<Plus size={14} />}>New File</Button>}
    />
  );
}`,
  },
  propsTableTitle: 'EmptyState Props',
};

export const EMPTY_STATE_PROPS_DATA: PropItem[] = [
  {
    name: 'title',
    type: 'ReactNode',
    required: true,
    description: 'Primary headline explaining the absence of data.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    required: false,
    description: 'Contextual supporting paragraph guiding the user on next steps.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    required: false,
    description: 'Central icon or illustration element.',
  },
  {
    name: 'action',
    type: 'ReactNode',
    required: false,
    description: 'Primary button or link providing a quick way to resolve the empty state.',
  },
  {
    name: 'secondaryAction',
    type: 'ReactNode',
    required: false,
    description: 'Optional secondary button or link.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'dashed' | 'minimal' | 'glassmorphic' | 'dark'",
    required: false,
    defaultValue: "'default'",
    description: 'Visual container styling variant.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Proportional sizing scale controlling padding and typography.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the container element.',
  },
];
