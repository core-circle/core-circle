'use client';

import React from 'react';
import { PasswordInput, Badge } from '@core-circle/ui';
import { Lock, Shield, Key, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const PASSWORD_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'PasswordInput' },
];

export const PASSWORD_INPUT_HEADER_CONTENT = {
  title: 'PasswordInput',
  description:
    'A specialized security credential input featuring single-click visibility reveal, dynamic zxcvbn-style entropy strength scoring, and Caps Lock hardware state detection.',
};

export const PASSWORD_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore real-world credential capture scenarios across enterprise authentication, financial vaults, and modern sign-up gates.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore aesthetic input styling (outline, filled, material), sizing scales, and error states.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive password input sandbox with live entropy calculation and toggle options.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'OAuth2/SSO credential authentication payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const PASSWORD_INPUT_THEME_CONFIGS = [
  {
    id: 'theming-enterprise-sso',
    title: '1. Enterprise SSO & Vault Theme',
    description: 'Compliant password field with real-time entropy strength meter and helper guidelines.',
    previewTitle: 'Zero-Trust Enterprise Vault',
    code: `<PasswordInput
  label="Master Key / Password"
  placeholder="Enter cryptographic key"
  showStrength
  fullWidth
  helperText="Requires 12+ chars, mixed case, number and symbol"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PasswordInput
            label="Master Key / Password"
            placeholder="Enter cryptographic key"
            defaultValue="Str0ng!P@ssw0rd2026"
            showStrength
            fullWidth
            helperText="Requires 12+ chars, mixed case, number and symbol"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-banking-pin',
    title: '2. FinTech Wire Authorisation Theme',
    description: 'Filled background treatment for biometric or transactional authorization prompts.',
    previewTitle: 'Wire Transfer Authorization',
    code: `<PasswordInput
  label="Transaction PIN"
  variant="filled"
  placeholder="Enter PIN"
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PasswordInput
            label="Transaction PIN"
            variant="filled"
            placeholder="Enter PIN"
            defaultValue="994218"
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-signup-onboarding',
    title: '3. Consumer SaaS Sign-Up Theme',
    description: 'Clean outline input guiding new users with instant password rating feedback.',
    previewTitle: 'Account Registration',
    code: `<PasswordInput
  label="Create New Password"
  placeholder="Choose your password"
  showStrength
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PasswordInput
            label="Create New Password"
            placeholder="Choose your password"
            defaultValue="welcome123"
            showStrength
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-minimal-material',
    title: '4. Minimal Material Underline Theme',
    description: 'Underlined borderless styling for lightweight modal auth dialogs.',
    previewTitle: 'Minimal Inline Auth',
    code: `<PasswordInput
  label="Access Token"
  variant="material"
  placeholder="Paste secret token"
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PasswordInput
            label="Access Token"
            variant="material"
            placeholder="Paste secret token"
            defaultValue="sk_live_99214710294"
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-error-validation',
    title: '5. Policy Breach & Validation Theme',
    description: 'Error feedback rendering with clear remediation message.',
    previewTitle: 'Password Policy Breach',
    code: `<PasswordInput
  label="New Password"
  error="Password contains known breached character patterns"
  defaultValue="password123"
  showStrength
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PasswordInput
            label="New Password"
            error="Password contains known breached character patterns"
            defaultValue="password123"
            showStrength
            fullWidth
          />
        </div>
      </div>
    ),
  },
];

export const PASSWORD_INPUT_VARIANT_GROUPS = [
  {
    id: 'variants-surfaces',
    title: '1. Surface Treatments',
    description: 'Outline, Filled, and Material styling variants.',
    items: [
      {
        title: 'Outline Variant (Default)',
        code: '<PasswordInput variant="outline" label="Outline" />',
        render: () => <PasswordInput variant="outline" label="Outline" defaultValue="SecurePass1!" fullWidth />,
      },
      {
        title: 'Filled Variant',
        code: '<PasswordInput variant="filled" label="Filled" />',
        render: () => <PasswordInput variant="filled" label="Filled" defaultValue="SecurePass1!" fullWidth />,
      },
      {
        title: 'Material Underline Variant',
        code: '<PasswordInput variant="material" label="Material" />',
        render: () => <PasswordInput variant="material" label="Material" defaultValue="SecurePass1!" fullWidth />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: '2. Sizing Scale',
    description: 'Compact (sm), Standard (md), and Prominent (lg) form dimensions.',
    items: [
      {
        title: 'Small Scale (sm - 32px height)',
        code: '<PasswordInput size="sm" label="Small" />',
        render: () => <PasswordInput size="sm" label="Small Input" defaultValue="SecretKey" fullWidth />,
      },
      {
        title: 'Medium Scale (md - 40px height)',
        code: '<PasswordInput size="md" label="Medium" />',
        render: () => <PasswordInput size="md" label="Medium Input" defaultValue="SecretKey" fullWidth />,
      },
      {
        title: 'Large Scale (lg - 48px height)',
        code: '<PasswordInput size="lg" label="Large" />',
        render: () => <PasswordInput size="lg" label="Large Input" defaultValue="SecretKey" fullWidth />,
      },
    ],
  },
  {
    id: 'variants-states',
    title: '3. Interactive & Validation States',
    description: 'Disabled, strength meter, and error states.',
    items: [
      {
        title: 'Disabled State',
        code: '<PasswordInput label="Disabled Password" disabled defaultValue="ProtectedSecret" />',
        render: () => <PasswordInput label="Disabled Password" disabled defaultValue="ProtectedSecret" fullWidth />,
      },
      {
        title: 'Live Entropy Strength Meter',
        code: '<PasswordInput label="Password" showStrength defaultValue="Super$ecur3P@ssw0rd!" />',
        render: () => <PasswordInput label="Password" showStrength defaultValue="Super$ecur3P@ssw0rd!" fullWidth />,
      },
      {
        title: 'Error Validation State',
        code: '<PasswordInput label="Password" error="Must include at least one symbol" defaultValue="Simple123" />',
        render: () => <PasswordInput label="Password" error="Must include at least one symbol" defaultValue="Simple123" fullWidth />,
      },
      {
        title: 'Hidden Toggle Button',
        code: '<PasswordInput label="No Toggle" showToggle={false} defaultValue="HiddenToggle" />',
        render: () => <PasswordInput label="No Toggle" showToggle={false} defaultValue="HiddenToggle" fullWidth />,
      },
    ],
  },
];

export const PASSWORD_INPUT_PLAYGROUND_SECTION = {
  id: 'password-input-playground-section',
  title: 'Interactive Playground',
  description: 'Test password visibility toggle, entropy calculation, caps lock warning, and surface variants.',
};

export const PASSWORD_INPUT_MOCK_SECTION = {
  id: 'password-input-mock',
  title: 'Enterprise Authentication Gateway',
  description: 'Connect PasswordInput with authentication payload and validation checks.',
  snippets: [
    {
      label: 'Authentication API Payload',
      code: JSON.stringify(
        {
          authPolicy: {
            requireMinLength: 10,
            requireDigits: true,
            requireSymbols: true,
            entropyThreshold: 'good',
          },
          userSession: {
            username: 'alex.morgan@corecircle.io',
            vaultKeyId: 'vlt-99124-prod',
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { PasswordInput, Button } from '@core-circle/ui';

export function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password must contain at least 8 characters');
      return;
    }
    setError('');
    // Dispatch auth token request
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <PasswordInput
        label="Account Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error}
        showStrength
        fullWidth
      />
      <Button type="submit" variant="primary">Sign In</Button>
    </form>
  );
}`,
    },
  ],
};

export const PASSWORD_INPUT_OVERVIEW_SECTION = {
  id: 'password-input-overview',
  title: 'Introduction',
  description:
    'PasswordInput is a specialized credential entry atom with built-in accessibility, hardware Caps Lock detection, show/hide visibility toggling, and live entropy rating bars.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { PasswordInput } from '@core-circle/ui';

<PasswordInput
  label="Password"
  showStrength
  placeholder="Enter secure password"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const PASSWORD_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'material'",
    defaultValue: "'outline'",
    description: 'Visual styling boundary of the input.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Dimensional height and font scale.',
  },
  {
    name: 'showStrength',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays dynamic 4-stage password strength bar below the field.',
  },
  {
    name: 'capsLockWarning',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Detects active Caps Lock hardware state and displays warning badge.',
  },
  {
    name: 'showToggle',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Shows the single-click visibility reveal toggle icon button.',
  },
  {
    name: 'error',
    type: 'string | boolean',
    defaultValue: 'undefined',
    description: 'Error message text or validation boolean flag.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Auxiliary guidance caption displayed underneath.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Expands the field width to occupy 100% of container.',
  },
];
