'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { TextInput, Badge } from '@core-circle/ui';
import {
  Banknotes,
  Shield,
  Sparkles,
  Terminal,
  ShoppingBag,
  SearchIcon,
  Mail,
  CheckIcon,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';
import ComponentPreview from '../../../components/component-preview';

export interface TextInputThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface TextInputVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const TEXT_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TextInput' },
];

export const TEXT_INPUT_HEADER_CONTENT = {
  title: 'TextInput',
  description:
    'A versatile single-line text field supporting 12 visual styling variants, prefix/suffix adornments, leading/trailing icons, size scales, error states, and animated floating labels.',
};

export const TEXT_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade text field themes for multi-currency wire transfers, zero-trust login, AI hyperparameters, SSH commit search, and VIP checkout.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 12 distinct border, surface, and interaction styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive property playground with live variant selection, icon toggling, and snippet generation.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic backend API user registration and form validation integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const WireTransferDemo = () => {
  const [wireAmount, setWireAmount] = useState('25000.00');
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Banknotes size={18} className="text-core-circle-primary" />
          <span className="font-bold text-sm text-core-circle-text-main">
            International SWIFT / FedWire Transfer
          </span>
        </div>
        <Badge variant="primary" size="sm" shape="pill">
          Tier 1 Liquidity
        </Badge>
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
  );
};

const SsoLoginDemo = () => {
  const [ssoEmail, setSsoEmail] = useState('alex.chen@enterprise.corp');
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-emerald-600" />
          <span className="font-bold text-sm text-core-circle-text-main">
            Corporate SSO Authentication
          </span>
        </div>
        <Badge variant="success" size="sm" shape="pill">
          Hardware 2FA Required
        </Badge>
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
  );
};

const AiHyperparametersDemo = () => {
  const [llmTemp, setLlmTemp] = useState('0.75');
  return (
    <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-purple-600" />
          <span className="font-bold text-sm text-purple-950">
            Inference Temperature (0.00 - 2.00)
          </span>
        </div>
        <Badge variant="gradient" size="sm" shape="pill">
          GPT-4o Omnichannel
        </Badge>
      </div>

      <TextInput
        variant="gradient"
        label="Sampling Randomness"
        prefix={
          <span className="font-mono text-xs text-purple-900 font-bold">
            temp:
          </span>
        }
        value={llmTemp}
        onChange={(e) => setLlmTemp(e.target.value)}
        helperText="Higher values introduce more divergent creative outputs; 0.2 produces deterministic code."
        fullWidth
      />
    </div>
  );
};

const GitCommitSearchDemo = () => {
  const [gitSha, setGitSha] = useState('9b4f8ae219');
  return (
    <div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-core-circle-primary" />
          <span className="font-mono text-xs font-bold text-core-circle-text-main">
            REPOSITORY REVISION LOCATOR
          </span>
        </div>
        <Badge variant="info" size="sm" shape="pill">
          main@origin
        </Badge>
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
  );
};

const EcommerceCouponDemo = () => {
  const [couponCode, setCouponCode] = useState('BLACKFRIDAY2026');
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-blue-600" />
          <span className="font-bold text-sm text-core-circle-text-main">
            Checkout Promotion Code
          </span>
        </div>
        <Badge variant="outline" size="sm" shape="pill">
          -25% Applied
        </Badge>
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
  );
};

export const TEXT_INPUT_THEME_CONFIGS: TextInputThemeConfig[] = [
  {
    id: 'theming-wire-transfer',
    sectionTitle:
      '1. Multi-Currency Instant Wire Transfer Terminal Theme',
    description:
      'Elevated floating input field with custom currency prefix, unit suffix, and instant conversion badge.',
    previewTitle: 'Instant Wire Settlement Input',
    render: () => <WireTransferDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`,
  },
  {
    id: 'theming-sso-login',
    sectionTitle: '2. Zero-Trust Access Gateway SSO Login Theme',
    description:
      'Animated floating label material input with corporate single sign-on authentication.',
    previewTitle: 'Okta / SAML SSO Authentication Input',
    render: () => <SsoLoginDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`,
  },
  {
    id: 'theming-ai-hyperparameters',
    sectionTitle:
      '3. AI Prompt Engineering & LLM Hyperparameters Theme',
    description:
      'Radiant purple-indigo gradient input for fine-tuning machine learning inference parameters.',
    previewTitle: 'LLM Sampling Temperature Tuning',
    render: () => <AiHyperparametersDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm w-full">
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
</div>`,
  },
  {
    id: 'theming-devops-commit-search',
    sectionTitle:
      '4. DevOps Terminal SSH Key & Git Commit SHA Search Theme',
    description:
      'Deep slate-900 dark input field with monospace commit locator.',
    previewTitle: 'Git Commit SHA Finder',
    render: () => <GitCommitSearchDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle w-full">
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
</div>`,
  },
  {
    id: 'theming-ecommerce-coupon',
    sectionTitle:
      '5. E-Commerce VIP Checkout Address & Coupon Code Theme',
    description:
      'Frosted glass translucent input field with validation coupon code badge.',
    previewTitle: 'Promotional Coupon Voucher',
    render: () => <EcommerceCouponDemo />,
    code: `<div className="flex flex-col gap-4 p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm w-full">
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
</div>`,
  },
];

export const TEXT_INPUT_VARIANT_GROUPS: TextInputVariantGroup[] = [
  {
    id: 'input-variants-material-outline',
    title: '1. Outline, Material & Material-Animated Styles',
    description:
      'Traditional bordered input or Google Material animated floating labels.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Outline Style (Default)"
          code={`<TextInput variant="outline" label="Username" placeholder="Enter username" />`}
        >
          <TextInput
            variant="outline"
            label="Username"
            placeholder="Enter username"
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Material Animated"
          code={`<TextInput variant="material-animated" label="Password" placeholder="Click to float" />`}
        >
          <TextInput
            variant="material-animated"
            label="Password"
            placeholder="Click to float"
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'input-variants-gradient-floating',
    title: '2. Radiant Gradient & Floating Elevated Styles',
    description:
      'Multi-color radiant borders and elevated drop shadows.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Radiant Gradient"
          code={`<TextInput variant="gradient" label="AI Directive" placeholder="Type prompt..." />`}
        >
          <TextInput
            variant="gradient"
            label="AI Directive"
            placeholder="Type prompt..."
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Floating Elevated"
          code={`<TextInput variant="floating" label="Search Index" placeholder="Search knowledge base..." />`}
        >
          <TextInput
            variant="floating"
            label="Search Index"
            placeholder="Search knowledge base..."
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'input-variants-glass-pill-accent',
    title: '3. Glassmorphic, Pill & Accent Styles',
    description:
      'Translucent frosted surfaces, fully rounded capsules, and bold blue borders.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Glassmorphic Surface"
          code={`<TextInput variant="glassmorphic" label="API Key" placeholder="sk_live_..." />`}
        >
          <TextInput
            variant="glassmorphic"
            label="API Key"
            placeholder="sk_live_..."
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Pill Capsule"
          code={`<TextInput variant="pill" placeholder="Search catalog..." />`}
        >
          <TextInput
            variant="pill"
            placeholder="Search catalog..."
            startIcon={<SearchIcon size={16} />}
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Accent Blue"
          code={`<TextInput variant="accent" label="Security PIN" placeholder="6-digit PIN" />`}
        >
          <TextInput
            variant="accent"
            label="Security PIN"
            placeholder="6-digit PIN"
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Filled Surface"
          code={`<TextInput variant="filled" label="Company Name" placeholder="Google Inc." />`}
        >
          <TextInput
            variant="filled"
            label="Company Name"
            placeholder="Google Inc."
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'input-variants-ghost-standard-dark',
    title: '4. Ghost, Standard & Dark Mode Styles',
    description:
      'Borderless minimal fields and high-contrast dark theme inputs.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Standard Bottom Border"
          code={`<TextInput variant="standard" label="Full Name" placeholder="John Doe" />`}
        >
          <TextInput
            variant="standard"
            label="Full Name"
            placeholder="John Doe"
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Dark Mode Terminal"
          code={`<TextInput variant="dark" label="SSH Host" placeholder="root@192.168.1.1" />`}
        >
          <div className="p-4 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
            <TextInput
              variant="dark"
              label="SSH Host"
              placeholder="root@192.168.1.1"
              fullWidth
            />
          </div>
        </ComponentPreview>
      </div>
    ),
  },
  {
    id: 'input-variants-prefix-validation',
    title: '5. Adornments (Prefix/Suffix) & Validation States',
    description:
      'Non-editable prefix/suffix strings and error feedback messages.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ComponentPreview
          title="Prefix and Suffix"
          code={`<TextInput label="Price" prefix="$" suffix="USD" placeholder="0.00" />`}
        >
          <TextInput
            label="Price"
            prefix={<span className="font-bold">$</span>}
            suffix="USD"
            placeholder="0.00"
            fullWidth
          />
        </ComponentPreview>

        <ComponentPreview
          title="Validation Error State"
          code={`<TextInput label="Email" error="Please enter a valid work email" defaultValue="invalid@" />`}
        >
          <TextInput
            label="Email"
            error="Please enter a valid work email"
            defaultValue="invalid@"
            fullWidth
          />
        </ComponentPreview>
      </div>
    ),
  },
];

export const TEXT_INPUT_PLAYGROUND_SECTION = {
  id: 'text-input-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 12 variants, 3 size scales, leading/trailing icons, error messages, and live snippet generation.',
};

export const TEXT_INPUT_MOCK_SECTION = {
  id: 'text-input-mock-section',
  title: 'Dynamic Form Field API Schema Integration',
  description:
    'Pattern for rendering form fields dynamically from a JSON schema response.',
  snippets: [
    {
      label: 'Sample Backend Form Schema Payload',
      code: JSON.stringify(
        {
          formId: 'form_user_registration',
          fields: [
            {
              name: 'username',
              label: 'Username',
              variant: 'floating',
              placeholder: 'johndoe',
              required: true,
            },
            {
              name: 'email',
              label: 'Email Address',
              variant: 'material-animated',
              placeholder: 'john@example.com',
              required: true,
            },
            {
              name: 'salary',
              label: 'Expected Annual Comp',
              variant: 'outline',
              prefix: '$',
              suffix: 'USD',
              required: false,
            },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Form Schema Consumer',
      code: `import React, { useState } from 'react';
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
};`,
    },
  ],
};

export const TEXT_INPUT_OVERVIEW_SECTION = {
  id: 'text-input-overview-intro',
  title: 'Introduction',
  description:
    'The TextInput component captures single-line text data from users. It features 12 styling variants, Material animated floating labels, customizable prefix/suffix slots, and full keyboard navigation support.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { TextInput } from '@core-circle/ui';
import { Mail } from '@core-circle/icons';

// 1. Floating elevated input
<TextInput
  variant="floating"
  label="Email Address"
  placeholder="name@example.com"
  startIcon={<Mail size={18} />}
  fullWidth
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TEXT_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'floating' | 'gradient' | 'pill' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description: 'Visual styling and container surface treatment variant.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Height and typography scale of the input.',
  },
  {
    name: 'label',
    type: 'string',
    description:
      'Label text rendered above or inside the animated input container.',
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Leading icon displayed before input text.',
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description:
      'Trailing icon or action indicator displayed after input text.',
  },
  {
    name: 'prefix',
    type: 'React.ReactNode',
    description:
      'Fixed adornment text/symbol rendered immediately before user text (e.g. $, https://).',
  },
  {
    name: 'suffix',
    type: 'React.ReactNode',
    description:
      'Fixed adornment text/symbol rendered immediately after user text (e.g. USD, kgs).',
  },
  {
    name: 'error',
    type: 'string',
    description: 'Validation error feedback message displaying beneath the field.',
  },
  {
    name: 'helperText',
    type: 'string',
    description:
      'Subtle guidance or informative footnote beneath the field.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field stretches to fill container width.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the input field is interactive.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.',
  },
];
