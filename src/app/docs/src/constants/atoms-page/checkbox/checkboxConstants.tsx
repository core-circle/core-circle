import type { ReactNode } from 'react';
import { Checkbox, Badge, Button } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface CheckboxThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface CheckboxVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const CHECKBOX_HEADER_CONTENT = {
  title: 'Checkbox',
  description: 'A multi-state selection control supporting 10 visual variants, rich card containers, indeterminate minus states, contour shapes, and accessibility labels.',
};

export const CHECKBOX_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Checkbox' },
];

export const CHECKBOX_THEME_CONFIGS: CheckboxThemeConfig[] = [
  {
    id: 'theming-addon-cards',
    sectionTitle: '1. Cloud Subscription Add-On Feature Card Theme',
    description: 'Selectable rich card checkboxes with title, subtitle descriptions, and price badges.',
    previewTitle: 'Add-On Service Selector',
    render: () => (
      <div className="w-full max-w-md mx-auto flex flex-col gap-3">
        <Checkbox
          variant="card"
          defaultChecked
          label="Automated SOC-2 Compliance Auditing"
          description="Real-time compliance checks across your AWS and GCP cloud infrastructure."
          badge={<Badge variant="primary" shape="pill" size="sm">+$49/mo</Badge>}
        />
        <Checkbox
          variant="card"
          label="Continuous Point-in-Time Database Snapshots"
          description="35-day backup retention with zero-downtime instant restore capabilities."
          badge={<Badge variant="primary" shape="pill" size="sm">+$19/mo</Badge>}
        />
      </div>
    ),
    code: `<div className="w-full max-w-md flex flex-col gap-3">
  <Checkbox
    variant="card"
    defaultChecked
    label="Automated SOC-2 Compliance Auditing"
    description="Real-time compliance checks across your AWS and GCP cloud infrastructure."
    badge={<Badge variant="primary" shape="pill" size="sm">+$49/mo</Badge>}
  />
  <Checkbox
    variant="card"
    label="Continuous Point-in-Time Database Snapshots"
    description="35-day backup retention with zero-downtime instant restore capabilities."
    badge={<Badge variant="primary" shape="pill" size="sm">+$19/mo</Badge>}
  />
</div>`,
  },
  {
    id: 'theming-select-all',
    sectionTitle: '2. Nested Group & Indeterminate \'Select All\' Theme',
    description: 'Parent checkbox displays minus dash (-) icon when child options are partially selected.',
    previewTitle: 'Permission Scopes Hierarchy',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <Checkbox
          label="All Repository Permissions"
          indeterminate
          badge={<Badge variant="primary" shape="pill" size="sm">Group</Badge>}
        />
        <div className="pl-6 border-l-2 border-slate-100 flex flex-col gap-3 ml-2">
          <Checkbox label="Read Git Commits & Branches" defaultChecked size="sm" />
          <Checkbox label="Write & Merge Pull Requests" size="sm" />
          <Checkbox label="Admin: Delete Repository" defaultChecked size="sm" />
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Checkbox
    label="All Repository Permissions"
    indeterminate
    badge={<Badge variant="primary" shape="pill" size="sm">Group</Badge>}
  />
  <div className="pl-6 border-l-2 border-slate-100 flex flex-col gap-3 ml-2">
    <Checkbox label="Read Git Commits & Branches" defaultChecked size="sm" />
    <Checkbox label="Write & Merge Pull Requests" size="sm" />
    <Checkbox label="Admin: Delete Repository" defaultChecked size="sm" />
  </div>
</div>`,
  },
  {
    id: 'theming-terms-policy',
    sectionTitle: '3. E-Commerce Checkout Legal Agreement Theme',
    description: 'Clean terms acceptance checkbox with interactive inline links.',
    previewTitle: 'Checkout Agreement',
    render: () => (
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
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
</div>`,
  },
  {
    id: 'theming-glassmorphic-toggle',
    sectionTitle: '4. Glassmorphic Notification Frequency Matrix Theme',
    description: 'Translucent frosted checkbox card on radiant background.',
    previewTitle: 'Notification Frequency Card',
    render: () => (
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
    ),
    code: `<Checkbox
  variant="glassmorphic"
  defaultChecked
  label="Instant Push Notifications"
  description="Receive realtime mobile pings when high priority vulnerabilities are discovered."
  badge={<Badge variant="success" shape="pill" size="sm">ACTIVE</Badge>}
/>`,
  },
  {
    id: 'theming-bordered-security',
    sectionTitle: '5. Enterprise Security Policy & 2FA Enforce Theme',
    description: 'Strong 2px bordered card with mandatory organizational requirements.',
    previewTitle: 'Mandatory Two-Factor Authentication',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <Checkbox
          variant="bordered"
          defaultChecked
          label="Mandatory Hardware Security Keys (FIDO2 / WebAuthn)"
          description="Require all engineers to authenticate with a physical security key."
          badge={<Badge variant="destructive" shape="pill" size="sm">REQUIRED</Badge>}
        />
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
  <Checkbox
    variant="bordered"
    defaultChecked
    label="Mandatory Hardware Security Keys (FIDO2 / WebAuthn)"
    description="Require all engineers to authenticate with a physical security key."
    badge={<Badge variant="destructive" shape="pill" size="sm">REQUIRED</Badge>}
  />
</div>`,
  },
];

export const CHECKBOX_VARIANT_GROUPS: CheckboxVariantGroup[] = [
  {
    id: 'checkbox-variants-styles',
    title: '1. Visual Variants (10 Variants)',
    description: 'Solid, outline, card, floating, glassmorphic, gradient, pill, bordered, success, and ghost.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Checkbox variant="solid" label="Solid Variant" defaultChecked />
        <Checkbox variant="outline" label="Outline Variant" defaultChecked />
        <Checkbox variant="gradient" label="Gradient Glow" defaultChecked />
        <Checkbox variant="success" label="Success Emerald" defaultChecked />
        <Checkbox variant="pill" label="Pill Capsule" defaultChecked />
        <Checkbox variant="ghost" label="Ghost Minimal" defaultChecked />
      </div>
    ),
  },
  {
    id: 'checkbox-variants-shapes',
    title: '2. Contour Shapes',
    description: 'Rounded square, circular ring, and sharp square.',
    render: () => (
      <div className="flex flex-wrap gap-8 items-center w-full">
        <Checkbox shape="rounded" label="Rounded (Default)" defaultChecked />
        <Checkbox shape="circle" label="Circular Ring" defaultChecked />
        <Checkbox shape="square" label="Sharp Square" defaultChecked />
      </div>
    ),
  },
];

export const CHECKBOX_PLAYGROUND_SECTION = {
  id: 'checkbox-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 visual variants, card containers, indeterminate states, and shapes.',
};

export const CHECKBOX_MOCK_PAYLOAD = JSON.stringify(
  {
    plan_id: 'plan_enterprise_pro',
    selected_addons: ['soc2_audit', 'pitr_backups'],
    total_monthly_usd: 317,
  },
  null,
  2
);

export const CHECKBOX_MOCK_CONSUMER_CODE = `import React, { useState } from 'react';
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
};`;

export const CHECKBOX_MOCK_SECTION = {
  id: 'checkbox-mock',
  title: 'Dynamic Subscription Add-On Selection Pattern',
  description: 'Manage dynamic billing add-ons and calculate total subscription price.',
  snippets: [
    { label: 'Sample Add-On Feature Schema', code: CHECKBOX_MOCK_PAYLOAD },
    { label: 'Dynamic Add-On Component', code: CHECKBOX_MOCK_CONSUMER_CODE },
  ],
};

export const CHECKBOX_QUICK_USAGE_CODE = `import { Checkbox } from '@core-circle/ui';

<Checkbox
  label="I agree to the Terms"
  defaultChecked
/>`;

export const CHECKBOX_OVERVIEW_SECTION = {
  id: 'checkbox-usage',
  title: 'Introduction',
  description: 'The Checkbox atom provides an accessible form toggle supporting 10 style variants, rich card modes, and indeterminate group states.',
  quickUsage: {
    label: 'Quick Usage',
    code: CHECKBOX_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const CHECKBOX_PROPS_DATA: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled checked state of the checkbox.'
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial checked state for uncontrolled usage.'
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays a horizontal minus icon representing a partially selected parent group.'
  },
  {
    name: 'variant',
    type: "'solid' | 'outline' | 'card' | 'floating' | 'glassmorphic' | 'gradient' | 'pill' | 'bordered' | 'success' | 'ghost'",
    defaultValue: "'solid'",
    description: 'Visual style and container variant (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the checkbox box and label text.'
  },
  {
    name: 'shape',
    type: "'rounded' | 'circle' | 'square'",
    defaultValue: "'rounded'",
    description: 'Contour shape of the checkbox box.'
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Primary label text displayed alongside the checkbox.'
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Subtitle description text rendered under the label.'
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional badge pill rendered next to the label.'
  },
  {
    name: 'error',
    type: 'string',
    defaultValue: '-',
    description: 'Error validation message displayed below.'
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Guidance text displayed below.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the checkbox is disabled.'
  },
  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
    defaultValue: '-',
    description: 'Standard event callback when state changes.'
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean) => void',
    defaultValue: '-',
    description: 'Simplified boolean callback when checked state changes.'
  }
];
