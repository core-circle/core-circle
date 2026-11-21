'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  MultiSelect, 
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
  Shield, 
  Sparkles, 
  Tag, 
  Terminal, 
  Bell, 
  ShoppingBag, 
  UserGroup 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { multiSelectPageStyles as s } from './multi-select.styles';
import { 
  MULTI_SELECT_PROPS_DATA, 
  MULTI_SELECT_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/multi-select/multiSelectConstants';
import { MultiSelectPlayground } from '../../../components/playground/multi-select/multiSelectPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { MultiSelectContainerProps } from '../../../interface/containers/atoms/multi-select.types';

const TECH_TOPICS = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'docker', label: 'Docker' },
];

const WORKSPACE_ROLES = [
  { value: 'admin', label: 'Security Admin' },
  { value: 'billing', label: 'Billing Manager' },
  { value: 'developer', label: 'DevOps Engineer' },
  { value: 'auditor', label: 'Compliance Auditor' },
  { value: 'member', label: 'General Member' },
];

const ECOM_CATEGORIES = [
  { value: 'apparel', label: 'Luxury Apparel' },
  { value: 'footwear', label: 'Footwear & Boots' },
  { value: 'accessories', label: 'Leather Accessories' },
  { value: 'eyewear', label: 'Polarized Eyewear' },
  { value: 'watches', label: 'Chronograph Watches' },
];

const SKILL_TAGS = [
  { value: 'design_systems', label: 'Design Systems' },
  { value: 'motion_3d', label: '3D Motion' },
  { value: 'interaction', label: 'Interaction Design' },
  { value: 'tokens', label: 'Design Tokens' },
];

const NOTIFY_CHANNELS = [
  { value: 'slack', label: 'Slack (#security-alerts)' },
  { value: 'email', label: 'Email Digest (Daily)' },
  { value: 'pagerduty', label: 'PagerDuty (Critical Incidents)' },
  { value: 'discord', label: 'Discord Webhook' },
];

export default function MultiSelectContainer({
  headerContent,
  breadcrumbItems
}: MultiSelectContainerProps) {
  const [selectedTopics, setSelectedTopics] = useState(['typescript', 'nextjs', 'tailwind']);
  const [selectedRoles, setSelectedRoles] = useState(['admin', 'developer']);
  const [selectedCats, setSelectedCats] = useState(['apparel', 'accessories']);
  const [selectedSkills, setSelectedSkills] = useState(['design_systems', 'tokens']);
  const [selectedChannels, setSelectedChannels] = useState(['slack', 'pagerduty']);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Developer Git Repo Tags */}
          <DocSection
            id="theming-repo-tags"
            title="1. Developer Git Repository Topic Tags Theme"
            description="Chips multi-select with search filter and quick topic tag deletion."
          >
            <ComponentPreview
              title="GitHub Repository Topic Selector"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Workspace Access Control & Role Permissions */}
          <DocSection
            id="theming-role-permissions"
            title="2. Workspace Access Control & Role Permissions Theme"
            description="Floating elevation selector for assigning multiple security permission sets."
          >
            <ComponentPreview
              title="Team Permission Roles Selector"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
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
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col gap-4">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Product Category Filters */}
          <DocSection
            id="theming-ecom-categories"
            title="3. E-Commerce Storefront Category Filter Theme"
            description="Pill capsule selector for filtering active store department catalog."
          >
            <ComponentPreview
              title="Department Filter Selector"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic Creative Portfolio Tags */}
          <DocSection
            id="theming-glassmorphic-skills"
            title="4. Glassmorphic Creative Portfolio Skill Tags Theme"
            description="Frosted translucent multi-select on radiant gradient backdrop."
          >
            <ComponentPreview
              title="Design Skillset Matrix"
              code={`<MultiSelect
  variant="glassmorphic"
  label="Creative Specializations"
  options={SKILL_TAGS}
  value={selectedSkills}
  onChange={setSelectedSkills}
  fullWidth
/>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 5. Enterprise Alert Notification Channels */}
          <DocSection
            id="theming-notify-channels"
            title="5. Enterprise Incident Broadcast Channels Theme"
            description="Clean outline selector with multi-channel subscribers."
          >
            <ComponentPreview
              title="Incident Dispatch Channels"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
          <DocSection id="multiselect-variants-styles" title="1. Container Styles (10 Variants)" description="Outline, filled, floating, glassmorphic, pill, material, gradient, chips, compact, and ghost.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <MultiSelect variant="outline" label="Outline" options={TECH_TOPICS} defaultValue={['react']} fullWidth />
              <MultiSelect variant="filled" label="Filled" options={TECH_TOPICS} defaultValue={['typescript']} fullWidth />
              <MultiSelect variant="floating" label="Floating" options={TECH_TOPICS} defaultValue={['nextjs']} fullWidth />
              <MultiSelect variant="glassmorphic" label="Glassmorphic" options={TECH_TOPICS} defaultValue={['tailwind']} fullWidth />
              <MultiSelect variant="pill" label="Pill Capsule" options={TECH_TOPICS} defaultValue={['graphql']} fullWidth />
              <MultiSelect variant="chips" label="Chips Container" options={TECH_TOPICS} defaultValue={['docker', 'react']} fullWidth />
              <MultiSelect variant="gradient" label="Gradient Glow" options={TECH_TOPICS} defaultValue={['nextjs']} fullWidth />
              <MultiSelect variant="material" label="Material Underline" options={TECH_TOPICS} defaultValue={['typescript']} fullWidth />
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
          id="multiselect-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, search filtering, tag overflow limits, and select all actions."
        >
          <MultiSelectPlayground />
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
            id="multiselect-mock"
            title="Dynamic Team Roles & Permissions Integration"
            description="Manage and persist multi-select membership roles with backend REST API calls."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Role Assignment Payload"
                code={JSON.stringify({
                  user_id: "usr_4892",
                  organization_id: "org_corecircle",
                  assigned_roles: ["security_admin", "devops_engineer", "billing_manager"],
                  updated_at: "2026-08-24T23:00:00Z"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Form Consumer Component"
                code={`import React, { useState } from 'react';
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
          <DocSection id="multiselect-usage" title="Introduction" description="The MultiSelect atom allows users to pick multiple options from a searchable dropdown, rendering selected items as removable tags.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { MultiSelect } from '@core-circle/ui';

<MultiSelect
  label="Categories"
  options={[
    { value: 'design', label: 'Design' },
    { value: 'engineering', label: 'Engineering' }
  ]}
  defaultValue={['design']}
  searchable
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={MULTI_SELECT_PROPS_DATA} />
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
