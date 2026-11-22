'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { RadioButton, Badge } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface RadioButtonThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface RadioButtonVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const RADIO_BUTTON_HEADER_CONTENT = {
  title: 'RadioButton',
  description: 'A single-selection control allowing users to select one option from a mutually exclusive set, supporting 10 style variants, rich plan cards, and subtitle descriptions.',
};

export const RADIO_BUTTON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'RadioButton' },
];

const PricingTierSelectorDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3">
      <RadioButton
        name="pricing-tier"
        value="starter"
        checked={selectedPlan === 'starter'}
        onChange={setSelectedPlan}
        variant="card"
        label="Starter Plan ($29/mo)"
        description="Up to 5 team members with standard shared compute."
      />
      <RadioButton
        name="pricing-tier"
        value="pro"
        checked={selectedPlan === 'pro'}
        onChange={setSelectedPlan}
        variant="card"
        label="Professional Plan ($89/mo)"
        description="Unlimited team members, dedicated instances, and priority SLA."
        badge={<Badge variant="primary" shape="pill" size="sm">MOST POPULAR</Badge>}
      />
      <RadioButton
        name="pricing-tier"
        value="enterprise"
        checked={selectedPlan === 'enterprise'}
        onChange={setSelectedPlan}
        variant="card"
        label="Enterprise Plan (Custom)"
        description="Custom SAML SSO, 24/7 dedicated support engineer, and custom contracts."
      />
    </div>
  );
};

const ShippingMethodDemo = () => {
  const [selectedShipping, setSelectedShipping] = useState('express');
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3">
      <RadioButton
        name="shipping-method"
        value="standard"
        checked={selectedShipping === 'standard'}
        onChange={setSelectedShipping}
        variant="floating"
        label="Standard Ground Delivery ($4.99)"
        description="Delivers in 3-5 business days with live tracking."
      />
      <RadioButton
        name="shipping-method"
        value="express"
        checked={selectedShipping === 'express'}
        onChange={setSelectedShipping}
        variant="floating"
        label="Next-Day Express Courier ($14.99)"
        description="Guaranteed delivery by 10:30 AM tomorrow morning."
        badge={<Badge variant="success" shape="pill" size="sm">FASTEST</Badge>}
      />
    </div>
  );
};

const PaymentGatewayDemo = () => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3">
      <RadioButton
        name="payment-method"
        value="card"
        checked={selectedPayment === 'card'}
        onChange={setSelectedPayment}
        variant="bordered"
        label="Credit or Debit Card"
        description="Visa, Mastercard, American Express, and Discover."
      />
      <RadioButton
        name="payment-method"
        value="apple_pay"
        checked={selectedPayment === 'apple_pay'}
        onChange={setSelectedPayment}
        variant="bordered"
        label="Apple Pay / Google Pay"
        description="Biometric one-touch instant checkout."
        badge={<Badge variant="primary" shape="pill" size="sm">1-CLICK</Badge>}
      />
    </div>
  );
};

const CloudRegionDemo = () => {
  const [selectedRegion, setSelectedRegion] = useState('us_east');
  return (
    <div className="w-full p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex justify-center">
      <div className="w-full max-w-md flex flex-col gap-3">
        <RadioButton
          name="cloud-region"
          value="us_east"
          checked={selectedRegion === 'us_east'}
          onChange={setSelectedRegion}
          variant="glassmorphic"
          label="US East (N. Virginia • us-east-1)"
          description="Lowest latency for North American users (12ms average)."
        />
        <RadioButton
          name="cloud-region"
          value="eu_central"
          checked={selectedRegion === 'eu_central'}
          onChange={setSelectedRegion}
          variant="glassmorphic"
          label="EU Central (Frankfurt • eu-central-1)"
          description="GDPR compliant storage and compute cluster."
        />
      </div>
    </div>
  );
};

const DatabaseEngineDemo = () => {
  const [selectedDatabase, setSelectedDatabase] = useState('postgres');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
      <RadioButton
        name="db-engine"
        value="postgres"
        checked={selectedDatabase === 'postgres'}
        onChange={setSelectedDatabase}
        label="PostgreSQL 16 (Relational & JSONB)"
      />
      <RadioButton
        name="db-engine"
        value="redis"
        checked={selectedDatabase === 'redis'}
        onChange={setSelectedDatabase}
        label="Redis 7 (In-Memory Key-Value & Cache)"
      />
    </div>
  );
};

export const RADIO_BUTTON_THEME_CONFIGS: RadioButtonThemeConfig[] = [
  {
    id: 'theming-saas-plans',
    sectionTitle: '1. SaaS Subscription Plan Selector Theme',
    description: 'Selectable rich card radio buttons with prices, feature bullet points, and popular badges.',
    previewTitle: 'Subscription Tier Selection',
    render: () => <PricingTierSelectorDemo />,
    code: `<div className="w-full max-w-md flex flex-col gap-3">
  <RadioButton
    name="pricing-tier"
    value="starter"
    checked={selectedPlan === 'starter'}
    onChange={setSelectedPlan}
    variant="card"
    label="Starter Plan ($29/mo)"
    description="Up to 5 team members with standard shared compute."
  />
  <RadioButton
    name="pricing-tier"
    value="pro"
    checked={selectedPlan === 'pro'}
    onChange={setSelectedPlan}
    variant="card"
    label="Professional Plan ($89/mo)"
    description="Unlimited team members, dedicated instances, and priority SLA."
    badge={<Badge variant="primary" shape="pill" size="sm">MOST POPULAR</Badge>}
  />
  <RadioButton
    name="pricing-tier"
    value="enterprise"
    checked={selectedPlan === 'enterprise'}
    onChange={setSelectedPlan}
    variant="card"
    label="Enterprise Plan (Custom)"
    description="Custom SAML SSO, 24/7 dedicated support engineer, and custom contracts."
  />
</div>`,
  },
  {
    id: 'theming-shipping-methods',
    sectionTitle: '2. E-Commerce Checkout Shipping Methods Theme',
    description: 'Elevated floating radio cards displaying transit times and costs.',
    previewTitle: 'Delivery Method Selector',
    render: () => <ShippingMethodDemo />,
    code: `<div className="w-full max-w-md flex flex-col gap-3">
  <RadioButton
    name="shipping-method"
    value="standard"
    checked={selectedShipping === 'standard'}
    onChange={setSelectedShipping}
    variant="floating"
    label="Standard Ground Delivery ($4.99)"
    description="Delivers in 3-5 business days with live tracking."
  />
  <RadioButton
    name="shipping-method"
    value="express"
    checked={selectedShipping === 'express'}
    onChange={setSelectedShipping}
    variant="floating"
    label="Next-Day Express Courier ($14.99)"
    description="Guaranteed delivery by 10:30 AM tomorrow morning."
    badge={<Badge variant="success" shape="pill" size="sm">FASTEST</Badge>}
  />
</div>`,
  },
  {
    id: 'theming-payment-methods',
    sectionTitle: '3. Payment Gateway Options Theme',
    description: 'Strong 2px bordered radio selector for checkout gateways.',
    previewTitle: 'Payment Gateway Selection',
    render: () => <PaymentGatewayDemo />,
    code: `<div className="w-full max-w-md flex flex-col gap-3">
  <RadioButton
    name="payment-method"
    value="card"
    checked={selectedPayment === 'card'}
    onChange={setSelectedPayment}
    variant="bordered"
    label="Credit or Debit Card"
    description="Visa, Mastercard, American Express, and Discover."
  />
  <RadioButton
    name="payment-method"
    value="apple_pay"
    checked={selectedPayment === 'apple_pay'}
    onChange={setSelectedPayment}
    variant="bordered"
    label="Apple Pay / Google Pay"
    description="Biometric one-touch instant checkout."
    badge={<Badge variant="primary" shape="pill" size="sm">1-CLICK</Badge>}
  />
</div>`,
  },
  {
    id: 'theming-cloud-regions',
    sectionTitle: '4. Glassmorphic Cloud Deployment Region Theme',
    description: 'Translucent frosted radio card on gradient backdrop.',
    previewTitle: 'Edge Node Deployment Region',
    render: () => <CloudRegionDemo />,
    code: `<div className="w-full max-w-md flex flex-col gap-3">
  <RadioButton
    name="cloud-region"
    value="us_east"
    checked={selectedRegion === 'us_east'}
    onChange={setSelectedRegion}
    variant="glassmorphic"
    label="US East (N. Virginia • us-east-1)"
    description="Lowest latency for North American users (12ms average)."
  />
  <RadioButton
    name="cloud-region"
    value="eu_central"
    checked={selectedRegion === 'eu_central'}
    onChange={setSelectedRegion}
    variant="glassmorphic"
    label="EU Central (Frankfurt • eu-central-1)"
    description="GDPR compliant storage and compute cluster."
  />
</div>`,
  },
  {
    id: 'theming-database-engines',
    sectionTitle: '5. Database Engine Architecture Theme',
    description: 'Standard outline radio group with clean visual indicator.',
    previewTitle: 'Database Engine Selector',
    render: () => <DatabaseEngineDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
  <RadioButton
    name="db-engine"
    value="postgres"
    checked={selectedDatabase === 'postgres'}
    onChange={setSelectedDatabase}
    label="PostgreSQL 16 (Relational & JSONB)"
  />
  <RadioButton
    name="db-engine"
    value="redis"
    checked={selectedDatabase === 'redis'}
    onChange={setSelectedDatabase}
    label="Redis 7 (In-Memory Key-Value & Cache)"
  />
</div>`,
  },
];

export const RADIO_BUTTON_VARIANT_GROUPS: RadioButtonVariantGroup[] = [
  {
    id: 'radio-variants-styles',
    title: '1. Visual Variants (10 Variants)',
    description: 'Outline, solid, card, floating, glassmorphic, gradient, pill, bordered, success, and ghost.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <RadioButton name="var-demo" value="1" variant="outline" label="Outline Variant" defaultChecked />
        <RadioButton name="var-demo" value="2" variant="solid" label="Solid Variant" />
        <RadioButton name="var-demo" value="3" variant="gradient" label="Gradient Glow" />
        <RadioButton name="var-demo" value="4" variant="success" label="Success Emerald" />
        <RadioButton name="var-demo" value="5" variant="pill" label="Pill Capsule" />
        <RadioButton name="var-demo" value="6" variant="ghost" label="Ghost Minimal" />
      </div>
    ),
  },
];

export const RADIO_BUTTON_PLAYGROUND_SECTION = {
  id: 'radio-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 10 visual variants, card containers, subtitle descriptions, and badges.',
};

export const RADIO_BUTTON_MOCK_SECTION = {
  id: 'radio-mock',
  title: 'Dynamic SaaS Plan Selection Pattern',
  description: 'Manage and submit mutually exclusive subscription options with backend persistence.',
  snippets: [
    {
      label: 'Sample Plan Selection Payload',
      code: JSON.stringify(
        {
          user_id: 'usr_4892',
          selected_plan_id: 'pro_monthly',
          billing_cycle: 'monthly',
          price_cents: 8900,
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Plan Selection Component',
      code: `import React, { useState } from 'react';
import { RadioButton, Badge, Button } from '@core-circle/ui';

export const PricingPlanSelector = ({ plans, onSelectPlan }) => {
  const [selected, setSelected] = useState('pro');

  return (
    <div className="space-y-3">
      {plans.map(plan => (
        <RadioButton
          key={plan.id}
          name="subscription-plan"
          value={plan.id}
          checked={selected === plan.id}
          onChange={setSelected}
          variant="card"
          label={plan.name}
          description={plan.description}
          badge={plan.isPopular ? <Badge variant="primary" shape="pill" size="sm">POPULAR</Badge> : undefined}
        />
      ))}
      <Button variant="primary" onClick={() => onSelectPlan(selected)} fullWidth>
        Proceed with Selection
      </Button>
    </div>
  );
};`,
    },
  ],
};

export const RADIO_BUTTON_OVERVIEW_SECTION = {
  id: 'radio-usage',
  title: 'Introduction',
  description: 'The RadioButton atom provides an accessible exclusive choice input supporting 10 visual variants and rich card containers.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { RadioButton } from '@core-circle/ui';

<RadioButton
  name="plan"
  value="pro"
  label="Professional Plan"
  defaultChecked
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const RADIO_BUTTON_PROPS_DATA: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled checked state of the radio button.',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial checked state for uncontrolled usage.',
  },
  {
    name: 'variant',
    type: "'outline' | 'solid' | 'card' | 'floating' | 'glassmorphic' | 'gradient' | 'pill' | 'bordered' | 'success' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style and container variant (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the radio circle and label.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Primary label text displayed alongside the radio circle.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Subtitle description text rendered under the label.',
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional badge pill rendered next to the label.',
  },
  {
    name: 'name',
    type: 'string',
    defaultValue: '-',
    description: 'HTML group name for mutually exclusive selection.',
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: '-',
    description: 'Value of this radio option passed to onChange.',
  },
  {
    name: 'error',
    type: 'string',
    defaultValue: '-',
    description: 'Error validation message displayed below.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Guidance text displayed below.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the radio option is disabled.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    defaultValue: '-',
    description: 'Callback fired when this option is selected.',
  },
];
