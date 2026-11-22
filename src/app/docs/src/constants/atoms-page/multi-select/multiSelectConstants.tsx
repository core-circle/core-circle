import { useState } from 'react';
import type { ReactNode } from 'react';
import { MultiSelect, Badge, Button } from '@core-circle/ui';
import {
  Terminal,
  Shield,
  Bell,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface MultiSelectThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface MultiSelectVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const MULTI_SELECT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'MultiSelect' },
];

export const MULTI_SELECT_HEADER_CONTENT = {
  title: 'MultiSelect',
  description:
    'A multi-item selection primitive featuring removable tag chips, live search filtering, select-all shortcuts, 10 visual variants, and overflow tag counters.',
};

export const TECH_TOPICS = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'docker', label: 'Docker' },
];

export const WORKSPACE_ROLES = [
  { value: 'admin', label: 'Security Admin' },
  { value: 'billing', label: 'Billing Manager' },
  { value: 'developer', label: 'DevOps Engineer' },
  { value: 'auditor', label: 'Compliance Auditor' },
  { value: 'member', label: 'General Member' },
];

export const ECOM_CATEGORIES = [
  { value: 'apparel', label: 'Luxury Apparel' },
  { value: 'footwear', label: 'Footwear & Boots' },
  { value: 'accessories', label: 'Leather Accessories' },
  { value: 'eyewear', label: 'Polarized Eyewear' },
  { value: 'watches', label: 'Chronograph Watches' },
];

export const SKILL_TAGS = [
  { value: 'design_systems', label: 'Design Systems' },
  { value: 'motion_3d', label: '3D Motion' },
  { value: 'interaction', label: 'Interaction Design' },
  { value: 'tokens', label: 'Design Tokens' },
];

export const NOTIFY_CHANNELS = [
  { value: 'slack', label: 'Slack (#security-alerts)' },
  { value: 'email', label: 'Email Digest (Daily)' },
  { value: 'pagerduty', label: 'PagerDuty (Critical Incidents)' },
  { value: 'discord', label: 'Discord Webhook' },
];

const RepoTagsDemo = () => {
  const [selectedTopics, setSelectedTopics] = useState([
    'typescript',
    'nextjs',
    'tailwind',
  ]);
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-core-circle-primary" />
          <h4 className="font-bold text-slate-900 text-sm">
            Repository Topic Tags
          </h4>
        </div>
        <Badge variant="primary" shape="pill" size="sm">
          Public Repo
        </Badge>
      </div>
      <MultiSelect
        variant="chips"
        options={TECH_TOPICS}
        value={selectedTopics}
        onChange={setSelectedTopics}
        showSelectAll
        fullWidth
      />
    </div>
  );
};

const RolePermissionsDemo = () => {
  const [selectedRoles, setSelectedRoles] = useState(['admin', 'developer']);
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <Shield size={18} className="text-emerald-600" />
        <h4 className="font-bold text-slate-900 text-sm">
          Security Roles & Scopes
        </h4>
      </div>
      <MultiSelect
        variant="floating"
        options={WORKSPACE_ROLES}
        value={selectedRoles}
        onChange={setSelectedRoles}
        fullWidth
      />
      <Button variant="primary" size="sm">
        Update Access Policy
      </Button>
    </div>
  );
};

const EcomCategoriesDemo = () => {
  const [selectedCats, setSelectedCats] = useState([
    'apparel',
    'accessories',
  ]);
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Store Filter
        </span>
        <span className="text-xs text-emerald-600 font-bold">
          142 Products Matching
        </span>
      </div>
      <MultiSelect
        variant="pill"
        options={ECOM_CATEGORIES}
        value={selectedCats}
        onChange={setSelectedCats}
        fullWidth
      />
    </div>
  );
};

const GlassmorphicSkillsDemo = () => {
  const [selectedSkills, setSelectedSkills] = useState([
    'design_systems',
    'tokens',
  ]);
  return (
    <div className="w-full p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex justify-center">
      <div className="w-full max-w-md">
        <MultiSelect
          variant="glassmorphic"
          label="Creative Specializations"
          options={SKILL_TAGS}
          value={selectedSkills}
          onChange={setSelectedSkills}
          fullWidth
        />
      </div>
    </div>
  );
};

const NotifyChannelsDemo = () => {
  const [selectedChannels, setSelectedChannels] = useState([
    'slack',
    'pagerduty',
  ]);
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Bell size={18} className="text-core-circle-primary" />
        <h4 className="font-bold text-slate-900 text-sm">
          Escalation Channels
        </h4>
      </div>
      <MultiSelect
        variant="outline"
        options={NOTIFY_CHANNELS}
        value={selectedChannels}
        onChange={setSelectedChannels}
        showClearAll
        fullWidth
      />
    </div>
  );
};

export const MULTI_SELECT_THEME_CONFIGS: MultiSelectThemeConfig[] = [
  {
    id: 'theming-repo-tags',
    sectionTitle: '1. Developer Git Repository Topic Tags Theme',
    description:
      'Chips multi-select with search filter and quick topic tag deletion.',
    previewTitle: 'GitHub Repository Topic Selector',
    render: () => <RepoTagsDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Terminal size={18} className="text-core-circle-primary" />
      <h4 className="font-bold text-slate-900 text-sm">Repository Topic Tags</h4>
    </div>
    <Badge variant="primary" shape="pill" size="sm">Public Repo</Badge>
  </div>
  <MultiSelect
    variant="chips"
    options={TECH_TOPICS}
    value={selectedTopics}
    onChange={setSelectedTopics}
    showSelectAll
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-role-permissions',
    sectionTitle:
      '2. Workspace Access Control & Role Permissions Theme',
    description:
      'Floating elevation selector for assigning multiple security permission sets.',
    previewTitle: 'Team Permission Roles Selector',
    render: () => <RolePermissionsDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
  <div className="flex items-center gap-2.5">
    <Shield size={18} className="text-emerald-600" />
    <h4 className="font-bold text-slate-900 text-sm">Security Roles & Scopes</h4>
  </div>
  <MultiSelect
    variant="floating"
    options={WORKSPACE_ROLES}
    value={selectedRoles}
    onChange={setSelectedRoles}
    fullWidth
  />
  <Button variant="primary" size="sm">Update Access Policy</Button>
</div>`,
  },
  {
    id: 'theming-ecom-categories',
    sectionTitle: '3. E-Commerce Storefront Category Filter Theme',
    description:
      'Pill capsule selector for filtering active store department catalog.',
    previewTitle: 'Department Filter Selector',
    render: () => <EcomCategoriesDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Store Filter</span>
    <span className="text-xs text-emerald-600 font-bold">142 Products Matching</span>
  </div>
  <MultiSelect
    variant="pill"
    options={ECOM_CATEGORIES}
    value={selectedCats}
    onChange={setSelectedCats}
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-glassmorphic-skills',
    sectionTitle:
      '4. Glassmorphic Creative Portfolio Skill Tags Theme',
    description:
      'Frosted translucent multi-select on radiant gradient backdrop.',
    previewTitle: 'Design Skillset Matrix',
    render: () => <GlassmorphicSkillsDemo />,
    code: `<MultiSelect
  variant="glassmorphic"
  label="Creative Specializations"
  options={SKILL_TAGS}
  value={selectedSkills}
  onChange={setSelectedSkills}
  fullWidth
/>`,
  },
  {
    id: 'theming-notify-channels',
    sectionTitle: '5. Enterprise Incident Broadcast Channels Theme',
    description: 'Clean outline selector with multi-channel subscribers.',
    previewTitle: 'Incident Dispatch Channels',
    render: () => <NotifyChannelsDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <Bell size={18} className="text-core-circle-primary" />
    <h4 className="font-bold text-slate-900 text-sm">Escalation Channels</h4>
  </div>
  <MultiSelect
    variant="outline"
    options={NOTIFY_CHANNELS}
    value={selectedChannels}
    onChange={setSelectedChannels}
    showClearAll
    fullWidth
  />
</div>`,
  },
];

export const MULTI_SELECT_VARIANT_GROUPS: MultiSelectVariantGroup[] = [
  {
    id: 'multiselect-variants-styles',
    title: '1. Container Styles (10 Variants)',
    description:
      'Outline, filled, floating, glassmorphic, pill, material, gradient, chips, compact, and ghost.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <MultiSelect
          variant="outline"
          label="Outline"
          options={TECH_TOPICS}
          defaultValue={['react']}
          fullWidth
        />
        <MultiSelect
          variant="filled"
          label="Filled"
          options={TECH_TOPICS}
          defaultValue={['typescript']}
          fullWidth
        />
        <MultiSelect
          variant="floating"
          label="Floating"
          options={TECH_TOPICS}
          defaultValue={['nextjs']}
          fullWidth
        />
        <MultiSelect
          variant="glassmorphic"
          label="Glassmorphic"
          options={TECH_TOPICS}
          defaultValue={['tailwind']}
          fullWidth
        />
        <MultiSelect
          variant="pill"
          label="Pill Capsule"
          options={TECH_TOPICS}
          defaultValue={['graphql']}
          fullWidth
        />
        <MultiSelect
          variant="chips"
          label="Chips Container"
          options={TECH_TOPICS}
          defaultValue={['docker', 'react']}
          fullWidth
        />
        <MultiSelect
          variant="gradient"
          label="Gradient Glow"
          options={TECH_TOPICS}
          defaultValue={['nextjs']}
          fullWidth
        />
        <MultiSelect
          variant="material"
          label="Material Underline"
          options={TECH_TOPICS}
          defaultValue={['typescript']}
          fullWidth
        />
      </div>
    ),
  },
];

export const MULTI_SELECT_PLAYGROUND_SECTION = {
  id: 'multiselect-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual variants, search filtering, tag overflow limits, and select all actions.',
};

export const MULTI_SELECT_MOCK_SECTION = {
  id: 'multiselect-mock',
  title: 'Dynamic Team Roles & Permissions Integration',
  description:
    'Manage and persist multi-select membership roles with backend REST API calls.',
  snippets: [
    {
      label: 'Sample Backend Role Assignment Payload',
      code: JSON.stringify(
        {
          user_id: 'usr_4892',
          organization_id: 'org_corecircle',
          assigned_roles: [
            'security_admin',
            'devops_engineer',
            'billing_manager',
          ],
          updated_at: '2026-08-24T23:00:00Z',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Form Consumer Component',
      code: `import React, { useState } from 'react';
import { MultiSelect, Button } from '@core-circle/ui';

export const UserRoleAssignmentForm = ({ userId }) => {
  const [roles, setRoles] = useState(['developer']);

  const handleSave = async () => {
    await fetch(\`/api/v1/users/\${userId}/roles\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roles })
    });
  };

  return (
    <div className="space-y-4">
      <MultiSelect
        label="Assigned Permissions"
        options={[
          { value: 'admin', label: 'Admin' },
          { value: 'developer', label: 'Developer' },
          { value: 'auditor', label: 'Auditor' },
        ]}
        value={roles}
        onChange={setRoles}
        showSelectAll
        fullWidth
      />
      <Button variant="primary" onClick={handleSave}>
        Save Permissions
      </Button>
    </div>
  );
};`,
    },
  ],
};

export const MULTI_SELECT_OVERVIEW_SECTION = {
  id: 'multiselect-usage',
  title: 'Introduction',
  description:
    'The MultiSelect atom allows users to pick multiple options from a searchable dropdown, rendering selected items as removable tags.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { MultiSelect } from '@core-circle/ui';

<MultiSelect
  label="Categories"
  options={[
    { value: 'design', label: 'Design' },
    { value: 'engineering', label: 'Engineering' }
  ]}
  defaultValue={['design']}
  searchable
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const MULTI_SELECT_PROPS_DATA: PropItem[] = [
  {
    name: 'options',
    type: 'MultiSelectOption[]',
    defaultValue: '[]',
    description:
      'Array of option objects with label, value, group, and icon properties.',
  },
  {
    name: 'value',
    type: 'string[]',
    defaultValue: '-',
    description: 'Controlled array of selected value keys.',
  },
  {
    name: 'defaultValue',
    type: 'string[]',
    defaultValue: '[]',
    description: 'Initial selected values for uncontrolled usage.',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'compact' | 'chips' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style variant of the input trigger (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the trigger bar and dropdown options.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Label displayed above the multi-select input.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select options...'",
    description: 'Placeholder text shown when no options are selected.',
  },
  {
    name: 'searchable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to show the search input inside the dropdown.',
  },
  {
    name: 'showSelectAll',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Whether to display Select All / Deselect All toolbar buttons.',
  },
  {
    name: 'showClearAll',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render the clear (x) button in the trigger.',
  },
  {
    name: 'maxTags',
    type: 'number',
    defaultValue: '3',
    description:
      'Max chips displayed before collapsing remaining count into a +N badge.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the multi-select expands to fill container width.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the component is disabled.',
  },
  {
    name: 'onChange',
    type: '(values: string[]) => void',
    defaultValue: '-',
    description: 'Callback triggered when selected items change.',
  },
];
