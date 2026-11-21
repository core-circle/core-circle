'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  RadioButton, 
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
import { atomsPageStyles as s } from '../atoms.styles';
import { 
  RADIO_BUTTON_PROPS_DATA, 
  RADIO_BUTTON_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/radio-button/radioButtonConstants';
import { RadioButtonPlayground } from '../../../components/playground/radio-button/radioButtonPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { RadioButtonContainerProps } from '../../../interface/containers/atoms/radio-button.types';

export default function RadioButtonContainer({
  headerContent,
  breadcrumbItems
}: RadioButtonContainerProps) {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedShipping, setSelectedShipping] = useState('express');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [selectedRegion, setSelectedRegion] = useState('us_east');
  const [selectedDatabase, setSelectedDatabase] = useState('postgres');

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. SaaS Subscription Plan Selector Cards */}
          <DocSection
            id="theming-saas-plans"
            title="1. SaaS Subscription Plan Selector Theme"
            description="Selectable rich card radio buttons with prices, feature bullet points, and popular badges."
          >
            <ComponentPreview
              title="Subscription Tier Selection"
              code={`<div className="w-full max-w-md flex flex-col gap-3">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 2. E-Commerce Shipping Selection */}
          <DocSection
            id="theming-shipping-methods"
            title="2. E-Commerce Checkout Shipping Methods Theme"
            description="Elevated floating radio cards displaying transit times and costs."
          >
            <ComponentPreview
              title="Delivery Method Selector"
              code={`<div className="w-full max-w-md flex flex-col gap-3">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 3. Payment Method Selection */}
          <DocSection
            id="theming-payment-methods"
            title="3. Payment Gateway Options Theme"
            description="Strong 2px bordered radio selector for checkout gateways."
          >
            <ComponentPreview
              title="Payment Gateway Selection"
              code={`<div className="w-full max-w-md flex flex-col gap-3">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic Cloud Region Selection */}
          <DocSection
            id="theming-cloud-regions"
            title="4. Glassmorphic Cloud Deployment Region Theme"
            description="Translucent frosted radio card on gradient backdrop."
          >
            <ComponentPreview
              title="Edge Node Deployment Region"
              code={`<div className="w-full max-w-md flex flex-col gap-3">
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
</div>`}
            >
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
            </ComponentPreview>
          </DocSection>

          {/* 5. Database Engine Selection */}
          <DocSection
            id="theming-database-engines"
            title="5. Database Engine Architecture Theme"
            description="Standard outline radio group with clean visual indicator."
          >
            <ComponentPreview
              title="Database Engine Selector"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
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
</div>`}
            >
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
          <DocSection id="radio-variants-styles" title="1. Visual Variants (10 Variants)" description="Outline, solid, card, floating, glassmorphic, gradient, pill, bordered, success, and ghost.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <RadioButton name="var-demo" value="1" variant="outline" label="Outline Variant" defaultChecked />
              <RadioButton name="var-demo" value="2" variant="solid" label="Solid Variant" />
              <RadioButton name="var-demo" value="3" variant="gradient" label="Gradient Glow" />
              <RadioButton name="var-demo" value="4" variant="success" label="Success Emerald" />
              <RadioButton name="var-demo" value="5" variant="pill" label="Pill Capsule" />
              <RadioButton name="var-demo" value="6" variant="ghost" label="Ghost Minimal" />
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
          id="radio-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, card containers, subtitle descriptions, and badges."
        >
          <RadioButtonPlayground />
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
            id="radio-mock"
            title="Dynamic SaaS Plan Selection Pattern"
            description="Manage and submit mutually exclusive subscription options with backend persistence."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Plan Selection Payload"
                code={JSON.stringify({
                  user_id: "usr_4892",
                  selected_plan_id: "pro_monthly",
                  billing_cycle: "monthly",
                  price_cents: 8900
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Plan Selection Component"
                code={`import React, { useState } from 'react';
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
          <DocSection id="radio-usage" title="Introduction" description="The RadioButton atom provides an accessible exclusive choice input supporting 10 visual variants and rich card containers.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { RadioButton } from '@core-circle/ui';

<RadioButton
  name="plan"
  value="pro"
  label="Professional Plan"
  defaultChecked
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={RADIO_BUTTON_PROPS_DATA} />
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
