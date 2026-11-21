'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TextInput, Breadcrumb, Tabs, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Banknotes, 
  Shield, 
  Sparkles, 
  Terminal, 
  ShoppingBag, 
  SearchIcon, 
  Lock, 
  Mail, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TextInputPlayground } from '../../../components/playground/text-input/textInputPlayground';
import { textInputPageStyles as s } from './text-input.styles';
import { TEXT_INPUT_PROPS_DATA } from '../../../constants/atoms-page/text-input/textInputConstants';
import { TextInputContainerProps } from '../../../interface/containers/atoms/text-input.types';

export default function TextInputContainer({ headerContent, breadcrumbItems }: TextInputContainerProps) {
  const [wireAmount, setWireAmount] = useState('25000.00');
  const [ssoEmail, setSsoEmail] = useState('alex.chen@enterprise.corp');
  const [llmTemp, setLlmTemp] = useState('0.75');
  const [gitSha, setGitSha] = useState('9b4f8ae219');
  const [couponCode, setCouponCode] = useState('BLACKFRIDAY2026');

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Multi-Currency Instant Wire Transfer Terminal */}
          <DocSection
            id="theming-wire-transfer"
            title="1. Multi-Currency Instant Wire Transfer Terminal Theme"
            description="Elevated floating input field with custom currency prefix, unit suffix, and instant conversion badge."
          >
            <ComponentPreview
              title="Instant Wire Settlement Input"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Banknotes size={18} className="text-core-circle-primary" />
      <span className="font-bold text-sm text-core-circle-text-main">International SWIFT / FedWire Transfer</span>
    </div>
    <Badge variant="primary" size="sm" shape="pill">Tier 1 Liquidity</Badge>
  </div>
  
  <TextInput
    variant="floating"
    label="Gross Transfer Amount"
    prefix={<span className="font-bold text-slate-900">$</span>}
    suffix={<span className="text-xs font-bold text-slate-500">USD</span>}
    value={wireAmount}
    onChange={(e) => setWireAmount(e.target.value)}
    helperText="Estimated FX conversion rate: 1 USD = 0.924 EUR (Zero Spread)"
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Banknotes size={18} className="text-core-circle-primary" />
                    <span className="font-bold text-sm text-core-circle-text-main">International SWIFT / FedWire Transfer</span>
                  </div>
                  <Badge variant="primary" size="sm" shape="pill">Tier 1 Liquidity</Badge>
                </div>
                
                <TextInput
                  variant="floating"
                  label="Gross Transfer Amount"
                  prefix={<span className="font-bold text-slate-900">$</span>}
                  suffix={<span className="text-xs font-bold text-slate-500">USD</span>}
                  value={wireAmount}
                  onChange={(e) => setWireAmount(e.target.value)}
                  helperText="Estimated FX conversion rate: 1 USD = 0.924 EUR (Zero Spread)"
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Zero-Trust Access Gateway SSO Login */}
          <DocSection
            id="theming-sso-login"
            title="2. Zero-Trust Access Gateway SSO Login Theme"
            description="Animated floating label material input with corporate single sign-on authentication."
          >
            <ComponentPreview
              title="Okta / SAML SSO Authentication Input"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Shield size={18} className="text-emerald-600" />
      <span className="font-bold text-sm text-core-circle-text-main">Corporate SSO Authentication</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">Hardware 2FA Required</Badge>
  </div>
  
  <TextInput
    variant="material-animated"
    label="Corporate Work Email"
    startIcon={<Mail size={18} />}
    value={ssoEmail}
    onChange={(e) => setSsoEmail(e.target.value)}
    helperText="Redirects to enterprise SAML 2.0 Identity Provider"
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-emerald-600" />
                    <span className="font-bold text-sm text-core-circle-text-main">Corporate SSO Authentication</span>
                  </div>
                  <Badge variant="success" size="sm" shape="pill">Hardware 2FA Required</Badge>
                </div>
                
                <TextInput
                  variant="material-animated"
                  label="Corporate Work Email"
                  startIcon={<Mail size={18} />}
                  value={ssoEmail}
                  onChange={(e) => setSsoEmail(e.target.value)}
                  helperText="Redirects to enterprise SAML 2.0 Identity Provider"
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. AI Prompt Engineering & LLM Hyperparameters Input */}
          <DocSection
            id="theming-ai-hyperparameters"
            title="3. AI Prompt Engineering & LLM Hyperparameters Theme"
            description="Radiant purple-indigo gradient input for fine-tuning machine learning inference parameters."
          >
            <ComponentPreview
              title="LLM Sampling Temperature Tuning"
              code={`<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Sparkles size={18} className="text-purple-600" />
      <span className="font-bold text-sm text-purple-950">Inference Temperature (0.00 - 2.00)</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">GPT-4o Omnichannel</Badge>
  </div>
  
  <TextInput
    variant="gradient"
    label="Sampling Randomness"
    prefix={<span className="font-mono text-xs text-purple-900 font-bold">temp:</span>}
    value={llmTemp}
    onChange={(e) => setLlmTemp(e.target.value)}
    helperText="Higher values introduce more divergent creative outputs; 0.2 produces deterministic code."
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-purple-600" />
                    <span className="font-bold text-sm text-purple-950">Inference Temperature (0.00 - 2.00)</span>
                  </div>
                  <Badge variant="gradient" size="sm" shape="pill">GPT-4o Omnichannel</Badge>
                </div>
                
                <TextInput
                  variant="gradient"
                  label="Sampling Randomness"
                  prefix={<span className="font-mono text-xs text-purple-900 font-bold">temp:</span>}
                  value={llmTemp}
                  onChange={(e) => setLlmTemp(e.target.value)}
                  helperText="Higher values introduce more divergent creative outputs; 0.2 produces deterministic code."
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. DevOps Terminal SSH Key & Git Commit SHA Search */}
          <DocSection
            id="theming-devops-commit-search"
            title="4. DevOps Terminal SSH Key & Git Commit SHA Search Theme"
            description="Deep slate-900 dark input field with monospace commit locator."
          >
            <ComponentPreview
              title="Git Commit SHA Finder"
              code={`<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Terminal size={18} className="text-core-circle-primary" />
      <span className="font-mono text-xs font-bold text-core-circle-text-main">REPOSITORY REVISION LOCATOR</span>
    </div>
    <Badge variant="info" size="sm" shape="pill">main@origin</Badge>
  </div>
  
  <TextInput
    variant="dark"
    label="Commit Hash or Branch Ref"
    startIcon={<SearchIcon size={18} className="text-slate-400" />}
    value={gitSha}
    onChange={(e) => setGitSha(e.target.value)}
    helperText="Press Enter to checkout working tree revision"
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-core-circle-primary" />
                    <span className="font-mono text-xs font-bold text-core-circle-text-main">REPOSITORY REVISION LOCATOR</span>
                  </div>
                  <Badge variant="info" size="sm" shape="pill">main@origin</Badge>
                </div>
                
                <TextInput
                  variant="dark"
                  label="Commit Hash or Branch Ref"
                  startIcon={<SearchIcon size={18} className="text-slate-400" />}
                  value={gitSha}
                  onChange={(e) => setGitSha(e.target.value)}
                  helperText="Press Enter to checkout working tree revision"
                  fullWidth
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. E-Commerce VIP Checkout Address & Coupon Code */}
          <DocSection
            id="theming-ecommerce-coupon"
            title="5. E-Commerce VIP Checkout Address & Coupon Code Theme"
            description="Frosted glass translucent input field with validation coupon code badge."
          >
            <ComponentPreview
              title="Promotional Coupon Voucher"
              code={`<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <ShoppingBag size={18} className="text-blue-600" />
      <span className="font-bold text-sm text-core-circle-text-main">Checkout Promotion Code</span>
    </div>
    <Badge variant="outline" size="sm" shape="pill">-25% Applied</Badge>
  </div>
  
  <TextInput
    variant="glassmorphic"
    label="Voucher / Discount Code"
    value={couponCode}
    onChange={(e) => setCouponCode(e.target.value)}
    endIcon={<CheckIcon size={18} className="text-emerald-500" />}
    helperText="Discount applied to total order value at final checkout step"
    fullWidth
  />
</div>`}
            >
              <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag size={18} className="text-blue-600" />
                    <span className="font-bold text-sm text-core-circle-text-main">Checkout Promotion Code</span>
                  </div>
                  <Badge variant="outline" size="sm" shape="pill">-25% Applied</Badge>
                </div>
                
                <TextInput
                  variant="glassmorphic"
                  label="Voucher / Discount Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  endIcon={<CheckIcon size={18} className="text-emerald-500" />}
                  helperText="Discount applied to total order value at final checkout step"
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
          {/* 1. Outline, Material & Material-Animated */}
          <DocSection
            id="input-variants-material-outline"
            title="1. Outline, Material & Material-Animated Styles"
            description="Traditional bordered input or Google Material animated floating labels."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Outline Style (Default)"
                code={`<TextInput variant="outline" label="Username" placeholder="Enter username" />`}
              >
                <TextInput variant="outline" label="Username" placeholder="Enter username" fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Material Animated"
                code={`<TextInput variant="material-animated" label="Password" placeholder="Click to float" />`}
              >
                <TextInput variant="material-animated" label="Password" placeholder="Click to float" fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 2. Radiant Gradient & Neon Glow */}
          <DocSection
            id="input-variants-gradient-floating"
            title="2. Radiant Gradient & Floating Elevated Styles"
            description="Multi-color radiant borders and elevated drop shadows."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Radiant Gradient"
                code={`<TextInput variant="gradient" label="AI Directive" placeholder="Type prompt..." />`}
              >
                <TextInput variant="gradient" label="AI Directive" placeholder="Type prompt..." fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Floating Elevated"
                code={`<TextInput variant="floating" label="Search Index" placeholder="Search knowledge base..." />`}
              >
                <TextInput variant="floating" label="Search Index" placeholder="Search knowledge base..." fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 3. Glassmorphic, Pill & Accent */}
          <DocSection
            id="input-variants-glass-pill-accent"
            title="3. Glassmorphic, Pill & Accent Styles"
            description="Translucent frosted surfaces, fully rounded capsules, and bold blue borders."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Glassmorphic Surface"
                code={`<TextInput variant="glassmorphic" label="API Key" placeholder="sk_live_..." />`}
              >
                <TextInput variant="glassmorphic" label="API Key" placeholder="sk_live_..." fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Pill Capsule"
                code={`<TextInput variant="pill" placeholder="Search catalog..." />`}
              >
                <TextInput variant="pill" placeholder="Search catalog..." startIcon={<SearchIcon size={16} />} fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Accent Blue"
                code={`<TextInput variant="accent" label="Security PIN" placeholder="6-digit PIN" />`}
              >
                <TextInput variant="accent" label="Security PIN" placeholder="6-digit PIN" fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Filled Surface"
                code={`<TextInput variant="filled" label="Company Name" placeholder="Google Inc." />`}
              >
                <TextInput variant="filled" label="Company Name" placeholder="Google Inc." fullWidth />
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 4. Ghost, Standard & Dark */}
          <DocSection
            id="input-variants-ghost-standard-dark"
            title="4. Ghost, Standard & Dark Mode Styles"
            description="Borderless minimal fields and high-contrast dark theme inputs."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Standard Bottom Border"
                code={`<TextInput variant="standard" label="Full Name" placeholder="John Doe" />`}
              >
                <TextInput variant="standard" label="Full Name" placeholder="John Doe" fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Dark Mode Terminal"
                code={`<TextInput variant="dark" label="SSH Host" placeholder="root@192.168.1.1" />`}
              >
                <div className="p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
                  <TextInput variant="dark" label="SSH Host" placeholder="root@192.168.1.1" fullWidth />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          {/* 5. Prefix, Suffix & Validation Errors */}
          <DocSection
            id="input-variants-prefix-validation"
            title="5. Adornments (Prefix/Suffix) & Validation States"
            description="Non-editable prefix/suffix strings and error feedback messages."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ComponentPreview
                title="Prefix and Suffix"
                code={`<TextInput label="Price" prefix="$" suffix="USD" placeholder="0.00" />`}
              >
                <TextInput label="Price" prefix={<span className="font-bold">$</span>} suffix="USD" placeholder="0.00" fullWidth />
              </ComponentPreview>

              <ComponentPreview
                title="Validation Error State"
                code={`<TextInput label="Email" error="Please enter a valid work email" defaultValue="invalid@" />`}
              >
                <TextInput label="Email" error="Please enter a valid work email" defaultValue="invalid@" fullWidth />
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
          id="text-input-playground-section"
          title="Interactive Playground"
          description="Experiment with 12 variants, 3 size scales, leading/trailing icons, error messages, and live snippet generation."
        >
          <TextInputPlayground />
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
            id="text-input-mock-section"
            title="Dynamic Form Field API Schema Integration"
            description="Pattern for rendering form fields dynamically from a JSON schema response."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Form Schema Payload"
                code={JSON.stringify({
                  formId: "form_user_registration",
                  fields: [
                    { name: "username", label: "Username", variant: "floating", placeholder: "johndoe", required: true },
                    { name: "email", label: "Email Address", variant: "material-animated", placeholder: "john@example.com", required: true },
                    { name: "salary", label: "Expected Annual Comp", variant: "outline", prefix: "$", suffix: "USD", required: false }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Form Schema Consumer"
                code={`import React, { useState } from 'react';
import { TextInput, Button, Card, Typography } from '@core-circle/ui';

export const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, val) => {
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  return (
    <Card variant="floating" className="p-6 flex flex-col gap-6 max-w-xl">
      <Typography variant="h3" className="text-base font-bold">Dynamic Registration</Typography>
      
      {schema.fields.map((f) => (
        <TextInput
          key={f.name}
          variant={f.variant}
          label={f.label}
          placeholder={f.placeholder}
          prefix={f.prefix}
          suffix={f.suffix}
          value={formData[f.name] || ''}
          onChange={(e) => handleChange(f.name, e.target.value)}
          fullWidth
        />
      ))}

      <Button variant="primary" size="lg" className="w-full">
        Submit Information
      </Button>
    </Card>
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
            id="text-input-overview-intro"
            title="Introduction"
            description="The TextInput component captures single-line text data from users. It features 12 styling variants, Material animated floating labels, customizable prefix/suffix slots, and full keyboard navigation support."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { TextInput } from '@core-circle/ui';
import { Mail } from '@core-circle/icons';

// 1. Floating elevated input
<TextInput
  variant="floating"
  label="Email Address"
  placeholder="name@example.com"
  startIcon={<Mail size={18} />}
  fullWidth
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={TEXT_INPUT_PROPS_DATA} />
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
