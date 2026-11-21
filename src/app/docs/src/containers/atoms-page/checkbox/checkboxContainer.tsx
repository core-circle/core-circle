'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  Checkbox, 
  Badge, 
  Button, 
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
  CreditCard, 
  Lock, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { checkboxPageStyles as s } from './checkbox.styles';
import { 
  CHECKBOX_PROPS_DATA, 
  CHECKBOX_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/checkbox/checkboxConstants';
import { CheckboxPlayground } from '../../../components/playground/checkbox/checkboxPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { CheckboxContainerProps } from '../../../interface/containers/atoms/checkbox.types';

export default function CheckboxContainer({
  headerContent,
  breadcrumbItems
}: CheckboxContainerProps) {
  const [addonSecurity, setAddonSecurity] = useState(true);
  const [addonBackups, setAddonBackups] = useState(false);

  // Group selection state for nested Select All
  const [childA, setChildA] = useState(true);
  const [childB, setChildB] = useState(false);
  const [childC, setChildC] = useState(true);

  const allChecked = childA && childB && childC;
  const isIndeterminate = (childA || childB || childC) && !allChecked;

  const handleParentToggle = () => {
    const nextVal = !allChecked;
    setChildA(nextVal);
    setChildB(nextVal);
    setChildC(nextVal);
  };

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Subscription Add-On Feature Cards */}
          <DocSection
            id="theming-addon-cards"
            title="1. Cloud Subscription Add-On Feature Card Theme"
            description="Selectable rich card checkboxes with title, subtitle descriptions, and price badges."
          >
            <ComponentPreview
              title="Add-On Service Selector"
              code={`<div className="w-full max-w-md flex flex-col gap-3">
  <Checkbox
    variant="card"
    checked={addonSecurity}
    onChange={(e) => setAddonSecurity(e.target.checked)}
    label="Automated SOC-2 Compliance Auditing"
    description="Real-time compliance checks across your AWS and GCP cloud infrastructure."
    badge={<Badge variant="primary" shape="pill" size="sm">+$49/mo</Badge>}
  />
  <Checkbox
    variant="card"
    checked={addonBackups}
    onChange={(e) => setAddonBackups(e.target.checked)}
    label="Continuous Point-in-Time Database Snapshots"
    description="35-day backup retention with zero-downtime instant restore capabilities."
    badge={<Badge variant="primary" shape="pill" size="sm">+$19/mo</Badge>}
  />
</div>`}
            >
              <div className="w-full max-w-md mx-auto flex flex-col gap-3">
                <Checkbox
                  variant="card"
                  checked={addonSecurity}
                  onChange={(e) => setAddonSecurity(e.target.checked)}
                  label="Automated SOC-2 Compliance Auditing"
                  description="Real-time compliance checks across your AWS and GCP cloud infrastructure."
                  badge={<Badge variant="primary" shape="pill" size="sm">+$49/mo</Badge>}
                />
                <Checkbox
                  variant="card"
                  checked={addonBackups}
                  onChange={(e) => setAddonBackups(e.target.checked)}
                  label="Continuous Point-in-Time Database Snapshots"
                  description="35-day backup retention with zero-downtime instant restore capabilities."
                  badge={<Badge variant="primary" shape="pill" size="sm">+$19/mo</Badge>}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Nested Select All Group */}
          <DocSection
            id="theming-select-all"
            title="2. Nested Group & Indeterminate 'Select All' Theme"
            description="Parent checkbox displays minus dash (-) icon when child options are partially selected."
          >
            <ComponentPreview
              title="Permission Scopes Hierarchy"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Checkbox
    label="All Repository Permissions"
    checked={allChecked}
    indeterminate={isIndeterminate}
    onChange={handleParentToggle}
    badge={<Badge variant="primary" shape="pill" size="sm">Group</Badge>}
  />
  <div className="pl-6 border-l-2 border-slate-100 flex flex-col gap-3 ml-2">
    <Checkbox label="Read Git Commits & Branches" checked={childA} onChange={(e) => setChildA(e.target.checked)} size="sm" />
    <Checkbox label="Write & Merge Pull Requests" checked={childB} onChange={(e) => setChildB(e.target.checked)} size="sm" />
    <Checkbox label="Admin: Delete Repository" checked={childC} onChange={(e) => setChildC(e.target.checked)} size="sm" />
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <Checkbox
                  label="All Repository Permissions"
                  checked={allChecked}
                  indeterminate={isIndeterminate}
                  onChange={handleParentToggle}
                  badge={<Badge variant="primary" shape="pill" size="sm">Group</Badge>}
                />
                <div className="pl-6 border-l-2 border-slate-100 flex flex-col gap-3 ml-2">
                  <Checkbox label="Read Git Commits & Branches" checked={childA} onChange={(e) => setChildA(e.target.checked)} size="sm" />
                  <Checkbox label="Write & Merge Pull Requests" checked={childB} onChange={(e) => setChildB(e.target.checked)} size="sm" />
                  <Checkbox label="Admin: Delete Repository" checked={childC} onChange={(e) => setChildC(e.target.checked)} size="sm" />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Checkout Legal Agreement */}
          <DocSection
            id="theming-terms-policy"
            title="3. E-Commerce Checkout Legal Agreement Theme"
            description="Clean terms acceptance checkbox with interactive inline links."
          >
            <ComponentPreview
              title="Checkout Agreement"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Checkbox
    defaultChecked
    label={
      <span>
        I agree to the <a href="#" className="text-core-circle-primary underline font-bold">Terms of Service</a> and <a href="#" className="text-core-circle-primary underline font-bold">Privacy Policy</a>.
      </span>
    }
    description="Your subscription renews automatically. Cancel anytime in billing settings."
  />
  <Button variant="primary" size="md" fullWidth>Complete Order ($149.00)</Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <Checkbox
                  defaultChecked
                  label={
                    <span>
                      I agree to the <span className="text-core-circle-primary underline font-bold">Terms of Service</span> and <span className="text-core-circle-primary underline font-bold">Privacy Policy</span>.
                    </span>
                  }
                  description="Your subscription renews automatically. Cancel anytime in billing settings."
                />
                <Button variant="primary" size="md" fullWidth>Complete Order ($149.00)</Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic Notification Matrix */}
          <DocSection
            id="theming-glassmorphic-toggle"
            title="4. Glassmorphic Notification Frequency Matrix Theme"
            description="Translucent frosted checkbox card on radiant background."
          >
            <ComponentPreview
              title="Notification Frequency Card"
              code={`<Checkbox
  variant="glassmorphic"
  defaultChecked
  label="Instant Push Notifications"
  description="Receive realtime mobile pings when high priority vulnerabilities are discovered."
  badge={<Badge variant="success" shape="pill" size="sm">ACTIVE</Badge>}
/>`}
            >
              <div className="w-full p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex justify-center">
                <div className="w-full max-w-md">
                  <Checkbox
                    variant="glassmorphic"
                    defaultChecked
                    label="Instant Push Notifications"
                    description="Receive realtime mobile pings when high priority vulnerabilities are discovered."
                    badge={<Badge variant="success" shape="pill" size="sm">ACTIVE</Badge>}
                  />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Enterprise 2FA Policy Enforce */}
          <DocSection
            id="theming-bordered-security"
            title="5. Enterprise Security Policy & 2FA Enforce Theme"
            description="Strong 2px bordered card with mandatory organizational requirements."
          >
            <ComponentPreview
              title="Mandatory Two-Factor Authentication"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
  <Checkbox
    variant="bordered"
    defaultChecked
    label="Mandatory Hardware Security Keys (FIDO2 / WebAuthn)"
    description="Require all engineers to authenticate with a physical security key."
    badge={<Badge variant="destructive" shape="pill" size="sm">REQUIRED</Badge>}
  />
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <Checkbox
                  variant="bordered"
                  defaultChecked
                  label="Mandatory Hardware Security Keys (FIDO2 / WebAuthn)"
                  description="Require all engineers to authenticate with a physical security key."
                  badge={<Badge variant="destructive" shape="pill" size="sm">REQUIRED</Badge>}
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
          <DocSection id="checkbox-variants-styles" title="1. Visual Variants (10 Variants)" description="Solid, outline, card, floating, glassmorphic, gradient, pill, bordered, success, and ghost.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Checkbox variant="solid" label="Solid Variant" defaultChecked />
              <Checkbox variant="outline" label="Outline Variant" defaultChecked />
              <Checkbox variant="gradient" label="Gradient Glow" defaultChecked />
              <Checkbox variant="success" label="Success Emerald" defaultChecked />
              <Checkbox variant="pill" label="Pill Capsule" defaultChecked />
              <Checkbox variant="ghost" label="Ghost Minimal" defaultChecked />
            </div>
          </DocSection>

          <DocSection id="checkbox-variants-shapes" title="2. Contour Shapes" description="Rounded square, circular ring, and sharp square.">
            <div className="flex flex-wrap gap-8 items-center w-full">
              <Checkbox shape="rounded" label="Rounded (Default)" defaultChecked />
              <Checkbox shape="circle" label="Circular Ring" defaultChecked />
              <Checkbox shape="square" label="Sharp Square" defaultChecked />
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
          id="checkbox-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, card containers, indeterminate states, and shapes."
        >
          <CheckboxPlayground />
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
            id="checkbox-mock"
            title="Dynamic Subscription Add-On Selection Pattern"
            description="Manage dynamic billing add-ons and calculate total subscription price."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Add-On Feature Schema"
                code={JSON.stringify({
                  plan_id: "plan_enterprise_pro",
                  selected_addons: ["soc2_audit", "pitr_backups"],
                  total_monthly_usd: 317
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Add-On Component"
                code={`import React, { useState } from 'react';
import { Checkbox, Badge, Button } from '@core-circle/ui';

export const SubscriptionAddonSelector = ({ addons, basePrice }) => {
  const [selected, setSelected] = useState([]);

  const toggleAddon = (addonId) => {
    setSelected(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  return (
    <div className="space-y-3">
      {addons.map(addon => (
        <Checkbox
          key={addon.id}
          variant="card"
          checked={selected.includes(addon.id)}
          onChange={() => toggleAddon(addon.id)}
          label={addon.title}
          description={addon.description}
          badge={<Badge variant="primary" shape="pill" size="sm">+$\${addon.price}/mo</Badge>}
        />
      ))}
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
          <DocSection id="checkbox-usage" title="Introduction" description="The Checkbox atom provides an accessible form toggle supporting 10 style variants, rich card modes, and indeterminate group states.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Checkbox } from '@core-circle/ui';

<Checkbox
  label="I agree to the Terms"
  defaultChecked
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={CHECKBOX_PROPS_DATA} />
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
