'use client';

import type { ReactNode } from 'react';
import { Select, Badge } from '@core-circle/ui';
import {
  Banknotes,
  Cloud,
  Star,
  Shield,
  ShoppingBag,
  Lock,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';
import ComponentPreview from '../../../components/component-preview';

export interface SelectThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface SelectVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const SELECT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Select' },
];

export const SELECT_HEADER_CONTENT = {
  title: 'Select',
  description:
    'An accessible, fully customized single-select dropdown supporting 12 visual styling variants, floating material labels, prefixes, icons, and validation states.',
};

export const SELECT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade select implementations for currencies, cloud regions, VIP tiers, and RBAC roles.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct surface and outline variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive property playground with live preview and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API option fetching and consumer component code.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and properties reference.',
  },
];

const currencyOptions = [
  { value: 'usd', label: 'USD - United States Dollar ($)' },
  { value: 'eur', label: 'EUR - European Union Euro (€)' },
  { value: 'gbp', label: 'GBP - British Pound Sterling (£)' },
  { value: 'jpy', label: 'JPY - Japanese Yen (¥)' },
  { value: 'chf', label: 'CHF - Swiss Franc (CHF)' },
];

const clusterOptions = [
  { value: 'us-east-1', label: 'aws.us-east-1 (N. Virginia - Production Cluster Alpha)' },
  { value: 'eu-central-1', label: 'aws.eu-central-1 (Frankfurt - Production Cluster Beta)' },
  { value: 'ap-northeast-1', label: 'aws.ap-northeast-1 (Tokyo - Edge Replicas)' },
  { value: 'sa-east-1', label: 'aws.sa-east-1 (São Paulo - Standby DR)' },
];

const vipTierOptions = [
  { value: 'black', label: 'Centurion Black Elite (Sub-Millisecond SLAs + Dedicated TAM)' },
  { value: 'platinum', label: 'Platinum Concierge (Priority Queue + Multi-Region Sync)' },
  { value: 'gold', label: 'Gold Executive (Standard Dedicated Instances)' },
];

const rbacRoleOptions = [
  { value: 'superadmin', label: 'Global Organization SuperAdmin (Full IAM & Security Policies)' },
  { value: 'secops', label: 'SecOps Auditor (Cryptographic Audit & Zero-Trust Telemetry)' },
  { value: 'developer', label: 'Core Engineer (Deploy, Rollback & Pipeline Execution)' },
  { value: 'readonly', label: 'Auditor Read-Only (Dashboard & Telemetry Metrics Only)' },
];

const sizeOptions = [
  { value: 'xs', label: 'Size XS (Chest 34-36 in)' },
  { value: 's', label: 'Size S (Chest 36-38 in)' },
  { value: 'm', label: 'Size M (Chest 38-40 in)' },
  { value: 'l', label: 'Size L (Chest 40-42 in)' },
  { value: 'xl', label: 'Size XL (Chest 42-44 in)' },
];

const standardFruitOptions = [
  { value: 'apple', label: 'Honeycrisp Apple' },
  { value: 'banana', label: 'Cavendish Banana' },
  { value: 'cherry', label: 'Bing Sweet Cherry' },
  { value: 'dragonfruit', label: 'Red Pitaya Dragonfruit' },
];

export const SELECT_THEME_CONFIGS: SelectThemeConfig[] = [
  {
    id: 'theming-currency',
    sectionTitle: '1. Global Currency & Financial Multi-Asset Selector Theme',
    description:
      'Elevated floating card dropdown with live currency prefixes and financial status indicators.',
    previewTitle: 'Global Multi-Currency Selector',
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Banknotes size={18} className="text-emerald-600" />
            <span className="font-bold text-core-circle-text-main text-sm">
              Settlement Account Currency
            </span>
          </div>
          <Badge variant="success" size="sm" shape="pill">
            Real-Time FX
          </Badge>
        </div>

        <Select
          variant="floating"
          label="Settlement Currency"
          options={currencyOptions}
          defaultValue="usd"
          startIcon={<Banknotes size={16} className="text-emerald-600" />}
          fullWidth
        />
      </div>
    ),
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Banknotes size={18} className="text-emerald-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Settlement Account Currency</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">Real-Time FX</Badge>
  </div>
  
  <Select
    variant="floating"
    label="Settlement Currency"
    options={currencyOptions}
    defaultValue="usd"
    startIcon={<Banknotes size={16} className="text-emerald-600" />}
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-cloud-devops',
    sectionTitle:
      '2. Cloud DevOps Kubernetes Cluster & Region Switcher Theme',
    description:
      'High-contrast dark terminal selector for production cluster switching and multi-region deployment.',
    previewTitle: 'Kubernetes Cluster Switcher',
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud size={18} className="text-core-circle-primary" />
            <span className="font-mono text-xs font-bold text-core-circle-text-main">
              ACTIVE INFRASTRUCTURE CLUSTER
            </span>
          </div>
          <Badge variant="primary" size="sm" shape="pill">
            4 Regions Active
          </Badge>
        </div>

        <Select
          variant="dark"
          label="Active Kubernetes Node Group"
          options={clusterOptions}
          defaultValue="us-east-1"
          startIcon={<Cloud size={16} className="text-core-circle-primary" />}
          fullWidth
        />
      </div>
    ),
    code: `<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Cloud size={18} className="text-core-circle-primary" />
      <span className="font-mono text-xs font-bold text-core-circle-text-main">ACTIVE INFRASTRUCTURE CLUSTER</span>
    </div>
    <Badge variant="primary" size="sm" shape="pill">4 Regions Active</Badge>
  </div>
  
  <Select
    variant="dark"
    label="Active Kubernetes Node Group"
    options={clusterOptions}
    defaultValue="us-east-1"
    startIcon={<Cloud size={16} className="text-core-circle-primary" />}
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-vip-tiers',
    sectionTitle: '3. VIP Membership Tier & Priority Lounge Level Theme',
    description:
      'Radiant gradient border and tinted highlight dropdown for luxury tier elevation.',
    previewTitle: 'VIP Tier Upgrade Selector',
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-amber-500 fill-amber-500" />
            <span className="font-bold text-purple-950 text-sm">
              Concierge Membership Tier
            </span>
          </div>
          <Badge variant="gradient" size="sm" shape="pill">
            VIP Access
          </Badge>
        </div>

        <Select
          variant="gradient"
          label="Membership Tier"
          options={vipTierOptions}
          defaultValue="black"
          startIcon={<Star size={16} className="text-amber-500" />}
          fullWidth
        />
      </div>
    ),
    code: `<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 border border-indigo-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Star size={18} className="text-amber-500 fill-amber-500" />
      <span className="font-bold text-purple-950 text-sm">Concierge Membership Tier</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">VIP Access</Badge>
  </div>
  
  <Select
    variant="gradient"
    label="Membership Tier"
    options={vipTierOptions}
    defaultValue="black"
    startIcon={<Star size={16} className="text-amber-500" />}
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-rbac-roles',
    sectionTitle: '4. Enterprise Security Permission & RBAC Role Theme',
    description:
      'High-security accent-bordered selector with IAM policy feedback and strict validation.',
    previewTitle: 'Role-Based Access Control (RBAC)',
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-core-circle-primary" />
            <span className="font-bold text-core-circle-text-main text-sm">
              IAM Role Assignment
            </span>
          </div>
          <Badge variant="info" size="sm" shape="pill">
            SOC2 Compliant
          </Badge>
        </div>

        <Select
          variant="accent"
          label="Granted IAM Permission Policy"
          options={rbacRoleOptions}
          defaultValue="superadmin"
          startIcon={<Lock size={16} className="text-core-circle-primary" />}
          fullWidth
        />
      </div>
    ),
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Shield size={18} className="text-core-circle-primary" />
      <span className="font-bold text-core-circle-text-main text-sm">IAM Role Assignment</span>
    </div>
    <Badge variant="info" size="sm" shape="pill">SOC2 Compliant</Badge>
  </div>
  
  <Select
    variant="accent"
    label="Granted IAM Permission Policy"
    options={rbacRoleOptions}
    defaultValue="superadmin"
    startIcon={<Lock size={16} className="text-core-circle-primary" />}
    fullWidth
  />
</div>`,
  },
  {
    id: 'theming-ecommerce-size',
    sectionTitle: '5. E-Commerce Product Size & Variant Picker Theme',
    description:
      'Rounded pill dropdown with inventory guidance and shopping bag iconography.',
    previewTitle: 'E-Commerce Size Selector',
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-blue-600" />
            <span className="font-bold text-core-circle-text-main text-sm">
              Apparel Sizing Guide
            </span>
          </div>
          <Badge variant="outline" size="sm" shape="pill">
            In Stock
          </Badge>
        </div>

        <Select
          variant="pill"
          label="Select Apparel Size"
          options={sizeOptions}
          defaultValue="m"
          startIcon={<ShoppingBag size={16} className="text-slate-500" />}
          fullWidth
        />
      </div>
    ),
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <ShoppingBag size={18} className="text-blue-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Apparel Sizing Guide</span>
    </div>
    <Badge variant="outline" size="sm" shape="pill">In Stock</Badge>
  </div>
  
  <Select
    variant="pill"
    label="Select Apparel Size"
    options={sizeOptions}
    defaultValue="m"
    startIcon={<ShoppingBag size={16} className="text-slate-500" />}
    fullWidth
  />
</div>`,
  },
];

export const SELECT_VARIANT_GROUPS: SelectVariantGroup[] = [
  {
    id: 'select-variants-outline-material',
    title: '1. Outline & Material Animated Styles',
    description:
      'Standard bordered box and modern floating label animation styles.',
    render: () => (
      <div className="flex flex-col gap-6 w-full">
        <ComponentPreview
          title="Outline Style (Default)"
          code={`<Select variant="outline" label="Fruit Choice" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="outline"
              label="Fruit Choice"
              options={standardFruitOptions}
              defaultValue="apple"
              fullWidth
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Material Animated Floating Label"
          code={`<Select variant="material-animated" label="Category" options={options} placeholder="Choose..." fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="material-animated"
              label="Category"
              options={standardFruitOptions}
              placeholder="Choose a fruit..."
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'select-variants-floating-glass',
    title: '2. Floating Elevated & Glassmorphic Surfaces',
    description:
      'Elevated dropdown with deep shadows and frosted glass backdrop blur styling.',
    render: () => (
      <div className="flex flex-col gap-6 w-full">
        <ComponentPreview
          title="Floating Style"
          code={`<Select variant="floating" label="Workspace Account" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="floating"
              label="Workspace Account"
              options={standardFruitOptions}
              defaultValue="banana"
              fullWidth
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Glassmorphic Style"
          code={`<Select variant="glassmorphic" label="Glassmorphic Selector" options={options} fullWidth />`}
        >
          <div className="w-full p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-2xl">
            <Select
              variant="glassmorphic"
              label="Glassmorphic Selector"
              options={standardFruitOptions}
              defaultValue="cherry"
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'select-variants-gradient-accent',
    title: '3. Radiant Gradient & Accent Highlight Styles',
    description:
      'Vibrant indigo gradient borders and vertical left accent stripe.',
    render: () => (
      <div className="flex flex-col gap-6 w-full">
        <ComponentPreview
          title="Gradient Style"
          code={`<Select variant="gradient" label="VIP Program" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="gradient"
              label="VIP Program"
              options={standardFruitOptions}
              defaultValue="dragonfruit"
              fullWidth
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Accent Border Style"
          code={`<Select variant="accent" label="Priority Setting" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="accent"
              label="Priority Setting"
              options={standardFruitOptions}
              defaultValue="apple"
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'select-variants-filled-dark',
    title: '4. Filled Soft Page & High-Contrast Dark Styles',
    description:
      'Soft neutral page wash or deep slate-900 dark mode container.',
    render: () => (
      <div className="flex flex-col gap-6 w-full">
        <ComponentPreview
          title="Filled Style"
          code={`<Select variant="filled" label="Page Filter" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="filled"
              label="Page Filter"
              options={standardFruitOptions}
              defaultValue="banana"
              fullWidth
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Dark Mode Style"
          code={`<Select variant="dark" label="Cluster Terminal" options={options} fullWidth />`}
        >
          <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
            <Select
              variant="dark"
              label="Cluster Terminal"
              options={standardFruitOptions}
              defaultValue="apple"
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'select-variants-pill-standard',
    title: '5. Pill Rounded & Standard Underline Styles',
    description:
      'Pill-shaped rounded-full geometry and classical bottom-border underline.',
    render: () => (
      <div className="flex flex-col gap-6 w-full">
        <ComponentPreview
          title="Pill Style"
          code={`<Select variant="pill" label="Quick Tag" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="pill"
              label="Quick Tag"
              options={standardFruitOptions}
              defaultValue="cherry"
              fullWidth
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Standard Underline Style"
          code={`<Select variant="standard" label="Underline" options={options} fullWidth />`}
        >
          <div className="w-full">
            <Select
              variant="standard"
              label="Underline"
              options={standardFruitOptions}
              defaultValue="dragonfruit"
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
];

export const SELECT_PLAYGROUND_SECTION = {
  id: 'select-playground-section',
  title: 'Interactive Playground',
  description:
    'Test 12 visual variants, size scales, prefix labels, start icons, and validation states live.',
};

export const SELECT_MOCK_SECTION = {
  id: 'select-mock-section',
  title: 'Dynamic Remote API Option Integration',
  description:
    'Pattern for fetching remote options via asynchronous REST API and managing state.',
  snippets: [
    {
      label: 'Sample Backend API Endpoint Payload',
      code: JSON.stringify(
        {
          status: 'success',
          timestamp: '2026-08-25T12:00:00Z',
          data: {
            defaultRegion: 'us-east-1',
            regions: [
              {
                id: 'us-east-1',
                label: 'US East (N. Virginia)',
                status: 'healthy',
                latencyMs: 14,
              },
              {
                id: 'eu-central-1',
                label: 'EU Central (Frankfurt)',
                status: 'healthy',
                latencyMs: 38,
              },
              {
                id: 'ap-southeast-1',
                label: 'AP Southeast (Singapore)',
                status: 'healthy',
                latencyMs: 72,
              },
            ],
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Consumer Region Picker Component',
      code: `import React, { useState, useEffect } from 'react';
import { Select } from '@core-circle/ui';
import { Cloud } from '@core-circle/icons';

export const DynamicRegionPicker = ({ onRegionChange }) => {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/clusters/regions')
      .then((res) => res.json())
      .then((json) => {
        const options = json.data.regions.map((r) => ({
          value: r.id,
          label: \`\${r.label} (\${r.latencyMs}ms)\`
        }));
        setRegions(options);
        setSelectedRegion(json.data.defaultRegion);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <Select
        variant="floating"
        label="Target Deployment Region"
        options={regions}
        value={selectedRegion}
        onChange={(e) => {
          setSelectedRegion(e.target.value);
          onRegionChange?.(e.target.value);
        }}
        startIcon={<Cloud size={16} className="text-core-circle-primary" />}
        disabled={loading}
        fullWidth
      />
    </div>
  );
};`,
    },
  ],
};

export const SELECT_OVERVIEW_SECTION = {
  id: 'select-overview-intro',
  title: 'Introduction',
  description:
    'Select allows users to pick a single item from a clean, customized dropdown list with complete keyboard navigation, customizable surface variants, prefixes, and validation support.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Select } from '@core-circle/ui';

<Select
  variant="outline"
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'de', label: 'Germany' },
    { value: 'jp', label: 'Japan' }
  ]}
  defaultValue="us"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const SELECT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'floating' | 'gradient' | 'pill' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description:
      'Visual styling theme and border treatment of the select input.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical height and typography scale of the select.',
  },
  {
    name: 'options',
    type: 'SelectOption[]',
    description:
      'Array of selectable option objects ({ value, label, disabled? }).',
  },
  {
    name: 'label',
    type: 'string',
    description:
      'Label text placed above or floating within the select container.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select...'",
    description: 'Placeholder text shown when no option is selected.',
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    description: 'Icon element rendered at the leading start position.',
  },
  {
    name: 'prefix',
    type: 'ReactNode',
    description: 'Static prefix text or element placed before the value.',
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error feedback message displayed beneath the input.',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Helpful guidance text rendered beneath the input.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Whether the select stretches to 100% of its parent container.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user interactions and applies a muted opacity.',
  },
];
