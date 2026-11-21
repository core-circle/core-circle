'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  Label, 
  Badge, 
  Button, 
  TextInput, 
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
  Lock, 
  CreditCard 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { labelPageStyles as s } from './label.styles';
import { 
  LABEL_PROPS_DATA, 
  LABEL_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/label/labelConstants';
import { LabelPlayground } from '../../../components/playground/label/labelPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { LabelContainerProps } from '../../../interface/containers/atoms/label.types';

export default function LabelContainer({
  headerContent,
  breadcrumbItems
}: LabelContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Enterprise Authentication Required Form Label */}
          <DocSection
            id="theming-auth-label"
            title="1. Enterprise Authentication & Security Form Label Theme"
            description="Required field labels with helper tooltips and clean typography weights."
          >
            <ComponentPreview
              title="Secure Account Input Label"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="work-email" size="sm" weight="semibold" required helperIcon={<Info size={13} />}>
      Work Email Address
    </Label>
    <TextInput id="work-email" placeholder="alex@company.com" fullWidth />
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="work-email" size="sm" weight="semibold" required helperIcon={<Info size={13} />}>
                    Work Email Address
                  </Label>
                  <TextInput id="work-email" placeholder="alex@company.com" fullWidth />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Royal VIP Billing Label with Pro Badge */}
          <DocSection
            id="theming-vip-badge-label"
            title="2. Royal VIP Billing & Enterprise Tax Label Theme"
            description="Luminous gradient label with attached VIP badge pill."
          >
            <ComponentPreview
              title="VIP Plan Configuration Label"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Optional Notes Label */}
          <DocSection
            id="theming-optional-label"
            title="3. E-Commerce Checkout & Delivery Instructions Label Theme"
            description="Optional field label clearly demarcating non-mandatory inputs."
          >
            <ComponentPreview
              title="Delivery Gate Code Label"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="gate-code" size="sm" weight="medium" optional>
      Apartment Gate / Buzzer Code
    </Label>
    <TextInput id="gate-code" placeholder="e.g. #4892" fullWidth />
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="gate-code" size="sm" weight="medium" optional>
                    Apartment Gate / Buzzer Code
                  </Label>
                  <TextInput id="gate-code" placeholder="e.g. #4892" fullWidth />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Financial API Secret Destructive Warning Label */}
          <DocSection
            id="theming-danger-label"
            title="4. Cloud Infrastructure Secret Key Warning Label Theme"
            description="Destructive alert label for highly sensitive credential inputs."
          >
            <ComponentPreview
              title="Sensitive Key Access Label"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-red-200 shadow-sm flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <Label variant="destructive" size="sm" weight="bold" required helperIcon={<Lock size={13} />}>
      Master Production Secret Key (Do Not Share)
    </Label>
    <TextInput type="password" defaultValue="sk_live_98249824892" fullWidth />
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-red-200 shadow-sm flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label variant="destructive" size="sm" weight="bold" required helperIcon={<Lock size={13} />}>
                    Master Production Secret Key (Do Not Share)
                  </Label>
                  <TextInput type="password" defaultValue="sk_live_98249824892" fullWidth />
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Glassmorphic Settings Category Label */}
          <DocSection
            id="theming-glassmorphic-section-label"
            title="5. Glassmorphic Category Partition Label Theme"
            description="Frosted chip label for separating multi-category preference sections."
          >
            <ComponentPreview
              title="Settings Category Header Label"
              code={`<div className="w-full max-w-md p-6 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <Label variant="glassmorphic" size="md" weight="bold" uppercase>
    Organization Governance Policies
  </Label>
  <p className="text-xs text-slate-500">Configure audit log retention and SAML SSO single sign-on providers.</p>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <Label variant="glassmorphic" size="md" weight="bold" uppercase>
                  Organization Governance Policies
                </Label>
                <p className="text-xs text-slate-500">Configure audit log retention and SAML SSO single sign-on providers.</p>
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
          <DocSection id="label-variants-styles" title="1. Color & Style Variants (10 Variants)" description="Default, primary, muted, success, warning, destructive, gradient, glassmorphic, pill, and badge-label.">
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
          </DocSection>

          <DocSection id="label-variants-sizes" title="2. Typography Size Scales" description="From micro (xs: 11px) to prominent display (2xl: 20px).">
            <div className="flex flex-wrap gap-8 items-baseline w-full">
              <Label size="xs">Size XS (11px)</Label>
              <Label size="sm">Size SM (12px)</Label>
              <Label size="md">Size MD (14px)</Label>
              <Label size="lg">Size LG (16px)</Label>
              <Label size="xl">Size XL (18px)</Label>
              <Label size="2xl">Size 2XL (20px)</Label>
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
          id="label-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, sizes, font weights, required asterisks, and optional tags."
        >
          <LabelPlayground />
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
            id="label-mock"
            title="Dynamic Accessible Form Field Pattern"
            description="Pair Label with Input and validation helpers for WCAG compliant form experiences."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Form Schema Payload"
                code={JSON.stringify({
                  field_id: "user_password",
                  label: "Account Password",
                  is_required: true,
                  helper_tooltip: "Must contain at least 8 characters with 1 number and 1 symbol",
                  validation_state: "valid"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Form Field Component"
                code={`import React from 'react';
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
          <DocSection id="label-usage" title="Introduction" description="The Label atom provides an accessible semantic form label with built-in required asterisks, optional markers, and tooltips.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Label, TextInput } from '@core-circle/ui';

<Label htmlFor="email" size="sm" weight="semibold" required>
  Email Address
</Label>
<TextInput id="email" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={LABEL_PROPS_DATA} />
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
