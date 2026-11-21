'use client';

import React from 'react';
import Link from 'next/link';
import { Select, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Banknotes, 
  Cloud, 
  Star, 
  Shield, 
  ShoppingBag, 
  Filter, 
  SettingsIcon, 
  CheckIcon, 
  Lock 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { SelectPlayground } from '../../../components/playground/select/selectPlayground';
import { selectPageStyles as s } from './select.styles';
import {
  SELECT_PROPS_DATA
} from '../../../constants/atoms-page/select/selectConstants';
import { SelectContainerProps } from '../../../interface/containers/atoms/select.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function SelectContainer({ headerContent, breadcrumbItems }: SelectContainerProps) {
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

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Global Financial & Multi-Currency Selector Theme */}
          <DocSection
            id="theming-currency"
            title="1. Global Currency & Financial Multi-Asset Selector Theme"
            description="Elevated floating card dropdown with live currency prefixes and financial status indicators."
          >
            <ComponentPreview
              title="Global Multi-Currency Selector"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Cloud DevOps Kubernetes Region Switcher Theme */}
          <DocSection
            id="theming-cloud-devops"
            title="2. Cloud DevOps Kubernetes Cluster & Region Switcher Theme"
            description="High-contrast dark terminal selector for production cluster switching and multi-region deployment."
          >
            <ComponentPreview
              title="Kubernetes Cluster Switcher"
              code={`<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. VIP Membership Tier & Priority Lounge Level Theme */}
          <DocSection
            id="theming-vip-tiers"
            title="3. VIP Membership Tier & Priority Lounge Level Theme"
            description="Radiant gradient border and tinted highlight dropdown for luxury tier elevation."
          >
            <ComponentPreview
              title="VIP Tier Upgrade Selector"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 border border-indigo-100 rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Enterprise Security Permission & RBAC Role Theme */}
          <DocSection
            id="theming-rbac-roles"
            title="4. Enterprise Security Permission & RBAC Role Theme"
            description="High-security accent-bordered selector with IAM policy feedback and strict validation."
          >
            <ComponentPreview
              title="Role-Based Access Control (RBAC)"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. E-Commerce Product Size & Variant Picker Theme */}
          <DocSection
            id="theming-ecommerce-size"
            title="5. E-Commerce Product Size & Variant Picker Theme"
            description="Rounded pill dropdown with inventory guidance and shopping bag iconography."
          >
            <ComponentPreview
              title="E-Commerce Size Selector"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`}
            >
              <div className="flex flex-col gap-4 w-full">
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
          {/* 1. Outline & Material Animated */}
          <DocSection
            id="select-variants-outline-material"
            title="1. Outline & Material Animated Styles"
            description="Standard bordered box and modern floating label animation styles."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Outline Style (Default)"
                code={`<Select variant="outline" label="Fruit Choice" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="outline" label="Fruit Choice" options={standardFruitOptions} defaultValue="apple" fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Material Animated Floating Label"
                code={`<Select variant="material-animated" label="Category" options={options} placeholder="Choose..." fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="material-animated" label="Category" options={standardFruitOptions} placeholder="Choose a fruit..." fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Floating & Glassmorphic Surfaces */}
          <DocSection
            id="select-variants-floating-glass"
            title="2. Floating Elevated & Glassmorphic Surfaces"
            description="Elevated dropdown with deep shadows and frosted glass backdrop blur styling."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Floating Style"
                code={`<Select variant="floating" label="Workspace Account" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="floating" label="Workspace Account" options={standardFruitOptions} defaultValue="banana" fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Glassmorphic Style"
                code={`<Select variant="glassmorphic" label="Glassmorphic Selector" options={options} fullWidth />`}
              >
                <div className="w-full p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-2xl">
                  <Select variant="glassmorphic" label="Glassmorphic Selector" options={standardFruitOptions} defaultValue="cherry" fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Radiant Gradient & Accent Highlight */}
          <DocSection
            id="select-variants-gradient-accent"
            title="3. Radiant Gradient & Accent Highlight Styles"
            description="Vibrant indigo gradient borders and vertical left accent stripe."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Gradient Style"
                code={`<Select variant="gradient" label="VIP Program" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="gradient" label="VIP Program" options={standardFruitOptions} defaultValue="dragonfruit" fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Accent Border Style"
                code={`<Select variant="accent" label="Priority Setting" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="accent" label="Priority Setting" options={standardFruitOptions} defaultValue="apple" fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. Filled & Dark Mode Surfaces */}
          <DocSection
            id="select-variants-filled-dark"
            title="4. Filled Soft Page & High-Contrast Dark Styles"
            description="Soft neutral page wash or deep slate-900 dark mode container."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Filled Style"
                code={`<Select variant="filled" label="Page Filter" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="filled" label="Page Filter" options={standardFruitOptions} defaultValue="banana" fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Dark Mode Style"
                code={`<Select variant="dark" label="Cluster Terminal" options={options} fullWidth />`}
              >
                <div className="w-full p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main">
                  <Select variant="dark" label="Cluster Terminal" options={standardFruitOptions} defaultValue="apple" fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Pill & Standard Minimal */}
          <DocSection
            id="select-variants-pill-standard"
            title="5. Pill Rounded & Standard Underline Styles"
            description="Pill-shaped rounded-full geometry and classical bottom-border underline."
          >
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Pill Style"
                code={`<Select variant="pill" label="Quick Tag" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="pill" label="Quick Tag" options={standardFruitOptions} defaultValue="cherry" fullWidth />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Standard Underline Style"
                code={`<Select variant="standard" label="Underline" options={options} fullWidth />`}
              >
                <div className="w-full">
                  <Select variant="standard" label="Underline" options={standardFruitOptions} defaultValue="dragonfruit" fullWidth />
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
          id="select-playground-section"
          title="Interactive Playground"
          description="Test 12 visual variants, size scales, prefix labels, start icons, and validation states live."
        >
          <SelectPlayground />
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
            id="select-mock-section"
            title="Dynamic Remote API Option Integration"
            description="Pattern for fetching remote options via asynchronous REST API and managing state."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend API Endpoint Payload"
                code={JSON.stringify({
                  status: "success",
                  timestamp: "2026-08-25T12:00:00Z",
                  data: {
                    defaultRegion: "us-east-1",
                    regions: [
                      { id: "us-east-1", label: "US East (N. Virginia)", status: "healthy", latencyMs: 14 },
                      { id: "eu-central-1", label: "EU Central (Frankfurt)", status: "healthy", latencyMs: 38 },
                      { id: "ap-southeast-1", label: "AP Southeast (Singapore)", status: "healthy", latencyMs: 72 }
                    ]
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Region Picker Component"
                code={`import React, { useState, useEffect } from 'react';
import { Select, Badge } from '@core-circle/ui';
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
          <DocSection
            id="select-overview-intro"
            title="Introduction"
            description="Select allows users to pick a single item from a clean, customized dropdown list with complete keyboard navigation, customizable surface variants, prefixes, and validation support."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Select } from '@core-circle/ui';

<Select
  variant="outline"
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'de', label: 'Germany' },
    { value: 'jp', label: 'Japan' }
  ]}
  defaultValue="us"
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={SELECT_PROPS_DATA} />
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
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
