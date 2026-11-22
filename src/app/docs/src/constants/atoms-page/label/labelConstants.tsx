import type { ReactNode } from 'react';
import { Label, TextInput, Badge } from '@core-circle/ui';
import { Info, Lock } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface LabelThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface LabelVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const LABEL_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Label' },
];

export const LABEL_HEADER_CONTENT = {
  title: 'Label',
  description:
    'An accessible form label primitive with support for required indicators (*), optional tags, helper icon tooltips, sub-badges, 10 color styles, and responsive typography scales.',
};

export const LABEL_THEME_CONFIGS: LabelThemeConfig[] = [
  {
    id: 'theming-auth-label',
    sectionTitle: '1. Enterprise Authentication & Security Form Label Theme',
    description:
      'Required field labels with helper tooltips and clean typography weights.',
    previewTitle: 'Secure Account Input Label',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="work-email"
            size="sm"
            weight="semibold"
            required
            helperIcon={<Info size={13} />}
          >
            Work Email Address
          </Label>
          <TextInput id="work-email" placeholder="alex@company.com" fullWidth />
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="work-email" size="sm" weight="semibold" required helperIcon={<Info size={13} />}>
      Work Email Address
    </Label>
    <TextInput id="work-email" placeholder="alex@company.com" fullWidth />
  </div>
</div>`,
  },
  {
    id: 'theming-vip-badge-label',
    sectionTitle: '2. Royal VIP Billing & Enterprise Tax Label Theme',
    description: 'Luminous gradient label with attached VIP badge pill.',
    previewTitle: 'VIP Plan Configuration Label',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label
            variant="gradient"
            size="md"
            weight="bold"
            uppercase
            badge={<Badge variant="primary" shape="pill" size="sm">PLATINUM</Badge>}
          >
            Dedicated Invoicing Entity
          </Label>
          <TextInput defaultValue="CoreCircle Global Inc." fullWidth />
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label 
      variant="gradient" 
      size="md" 
      weight="bold" 
      uppercase 
      badge={<Badge variant="primary" shape="pill" size="sm">PLATINUM</Badge>}
    >
      Dedicated Invoicing Entity
    </Label>
    <TextInput defaultValue="CoreCircle Global Inc." fullWidth />
  </div>
</div>`,
  },
  {
    id: 'theming-optional-label',
    sectionTitle:
      '3. E-Commerce Checkout & Delivery Instructions Label Theme',
    description:
      'Optional field label clearly demarcating non-mandatory inputs.',
    previewTitle: 'Delivery Gate Code Label',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="gate-code" size="sm" weight="medium" optional>
            Apartment Gate / Buzzer Code
          </Label>
          <TextInput id="gate-code" placeholder="e.g. #4892" fullWidth />
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="gate-code" size="sm" weight="medium" optional>
      Apartment Gate / Buzzer Code
    </Label>
    <TextInput id="gate-code" placeholder="e.g. #4892" fullWidth />
  </div>
</div>`,
  },
  {
    id: 'theming-danger-label',
    sectionTitle:
      '4. Cloud Infrastructure Secret Key Warning Label Theme',
    description:
      'Destructive alert label for highly sensitive credential inputs.',
    previewTitle: 'Sensitive Key Access Label',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-red-200 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label
            variant="destructive"
            size="sm"
            weight="bold"
            required
            helperIcon={<Lock size={13} />}
          >
            Master Production Secret Key (Do Not Share)
          </Label>
          <TextInput type="password" defaultValue="sk_live_98249824892" fullWidth />
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-red-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label variant="destructive" size="sm" weight="bold" required helperIcon={<Lock size={13} />}>
      Master Production Secret Key (Do Not Share)
    </Label>
    <TextInput type="password" defaultValue="sk_live_98249824892" fullWidth />
  </div>
</div>`,
  },
  {
    id: 'theming-glassmorphic-section-label',
    sectionTitle: '5. Glassmorphic Category Partition Label Theme',
    description:
      'Frosted chip label for separating multi-category preference sections.',
    previewTitle: 'Settings Category Header Label',
    render: () => (
      <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <Label variant="glassmorphic" size="md" weight="bold" uppercase>
          Organization Governance Policies
        </Label>
        <p className="text-xs text-slate-500">
          Configure audit log retention and SAML SSO single sign-on providers.
        </p>
      </div>
    ),
    code: `<div className="w-full max-w-md p-6 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Label variant="glassmorphic" size="md" weight="bold" uppercase>
    Organization Governance Policies
  </Label>
  <p className="text-xs text-slate-500">Configure audit log retention and SAML SSO single sign-on providers.</p>
</div>`,
  },
];

export const LABEL_VARIANT_GROUPS: LabelVariantGroup[] = [
  {
    id: 'label-variants-styles',
    title: '1. Color & Style Variants (10 Variants)',
    description:
      'Default, primary, muted, success, warning, destructive, gradient, glassmorphic, pill, and badge-label.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full items-center">
        <Label variant="default">Default Slate Label</Label>
        <Label variant="primary">Primary Brand Label</Label>
        <Label variant="muted">Muted Text Label</Label>
        <Label variant="success">Success Emerald Label</Label>
        <Label variant="warning">Warning Amber Label</Label>
        <Label variant="destructive">Destructive Red Label</Label>
        <Label variant="gradient">Gradient Glow Label</Label>
        <Label variant="glassmorphic">Glassmorphic Chip Label</Label>
        <Label variant="pill">Pill Capsule Label</Label>
      </div>
    ),
  },
  {
    id: 'label-variants-sizes',
    title: '2. Typography Size Scales',
    description: 'From micro (xs: 11px) to prominent display (2xl: 20px).',
    render: () => (
      <div className="flex flex-wrap gap-8 items-baseline w-full">
        <Label size="xs">Size XS (11px)</Label>
        <Label size="sm">Size SM (12px)</Label>
        <Label size="md">Size MD (14px)</Label>
        <Label size="lg">Size LG (16px)</Label>
        <Label size="xl">Size XL (18px)</Label>
        <Label size="2xl">Size 2XL (20px)</Label>
      </div>
    ),
  },
];

export const LABEL_PLAYGROUND_SECTION = {
  id: 'label-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual variants, sizes, font weights, required asterisks, and optional tags.',
};

export const LABEL_MOCK_SECTION = {
  id: 'label-mock',
  title: 'Dynamic Accessible Form Field Pattern',
  description:
    'Pair Label with Input and validation helpers for WCAG compliant form experiences.',
  snippets: [
    {
      label: 'Sample Form Schema Payload',
      code: JSON.stringify(
        {
          field_id: 'user_password',
          label: 'Account Password',
          is_required: true,
          helper_tooltip:
            'Must contain at least 8 characters with 1 number and 1 symbol',
          validation_state: 'valid',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Form Field Component',
      code: `import React from 'react';
import { Label, TextInput } from '@core-circle/ui';
import { Info } from '@core-circle/icons';

export const FormField = ({ id, label, required, helper, error, ...inputProps }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <Label 
        htmlFor={id}
        size="sm"
        weight="semibold"
        required={required}
        helperIcon={helper ? <Info size={13} /> : undefined}
      >
        {label}
      </Label>
      <TextInput id={id} error={error} {...inputProps} />
    </div>
  );
};`,
    },
  ],
};

export const LABEL_OVERVIEW_SECTION = {
  id: 'label-usage',
  title: 'Introduction',
  description:
    'The Label atom provides an accessible semantic form label with built-in required asterisks, optional markers, and tooltips.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Label, TextInput } from '@core-circle/ui';

<Label htmlFor="email" size="sm" weight="semibold" required>
  Email Address
</Label>
<TextInput id="email" />`,
  },
  propsTableTitle: 'Component Props',
};

export const LABEL_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'primary' | 'muted' | 'success' | 'warning' | 'destructive' | 'gradient' | 'glassmorphic' | 'pill' | 'badge-label'",
    defaultValue: "'default'",
    description:
      'Visual color and styling variant of the label text (10 options).',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    defaultValue: "'sm'",
    description: 'Typography size scale from 11px to 20px.',
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'medium'",
    description: 'Font weight scale.',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the red required asterisk indicator (*).',
  },
  {
    name: 'optional',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the (Optional) subtitle tag.',
  },
  {
    name: 'uppercase',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Transforms text to uppercase with wide tracking.',
  },
  {
    name: 'helperIcon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional helper icon or info tooltip slot.',
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional sub-badge pill rendered alongside the label.',
  },
  {
    name: 'as',
    type: "'label' | 'span' | 'div'",
    defaultValue: "'label'",
    description: 'The underlying HTML tag to render.',
  },
  {
    name: 'htmlFor',
    type: 'string',
    defaultValue: '-',
    description: 'ID of the form input associated with this label.',
  },
];
