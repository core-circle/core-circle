'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { OtpInput, Badge, Button } from '@core-circle/ui';
import {
  Shield,
  Lock,
  Mobile,
  Key,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface OtpInputThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface OtpInputVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const OTP_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'OtpInput' },
];

export const OTP_INPUT_HEADER_CONTENT = {
  title: 'OtpInput',
  description:
    'A verification code and one-time password entry primitive supporting 10 visual variants, PIN masking, smart clipboard paste distribution, arrow key navigation, and automatic onComplete callbacks.',
};

const TwoFactorVerificationDemo = () => {
  const [authCode, setAuthCode] = useState('');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
      <div className="p-3 bg-blue-50 text-core-circle-primary rounded-2xl">
        <Mobile size={24} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">Check your mobile phone</h4>
        <p className="text-xs text-slate-500 mt-0.5">
          We sent a 6-digit code to +1 (555) •••-4892
        </p>
      </div>
      <OtpInput
        length={6}
        separator="-"
        variant="outline"
        size="md"
        value={authCode}
        onChange={setAuthCode}
      />
      <div className="flex justify-between items-center w-full text-xs text-slate-500 pt-2 border-t border-slate-100">
        <span>Didn&apos;t receive code?</span>
        <button className="text-core-circle-primary font-bold hover:underline cursor-pointer">
          Resend in 0:42
        </button>
      </div>
    </div>
  );
};

const BankingPinDemo = () => {
  const [bankingPin, setBankingPin] = useState('');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2 text-emerald-600">
        <Lock size={18} />
        <span className="text-xs font-bold uppercase tracking-wider">
          Authorize Transfer ($2,400.00)
        </span>
      </div>
      <OtpInput
        length={4}
        mask
        variant="floating"
        size="lg"
        value={bankingPin}
        onChange={setBankingPin}
        helperText="Enter your 4-digit master transaction PIN."
      />
      <Button
        variant="primary"
        size="md"
        fullWidth
        disabled={bankingPin.length < 4}
      >
        Confirm Transaction
      </Button>
    </div>
  );
};

const GlassmorphicSsoDemo = () => {
  const [ssoCode, setSsoCode] = useState('');
  return (
    <div className="w-full p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex flex-col items-center gap-4 text-center">
      <Shield size={24} className="text-core-circle-primary" />
      <h4 className="font-bold text-slate-900 text-sm">
        Enterprise SAML Handshake
      </h4>
      <OtpInput
        length={6}
        variant="glassmorphic"
        size="md"
        value={ssoCode}
        onChange={setSsoCode}
      />
    </div>
  );
};

const PillMobileDemo = () => {
  const [pillCode, setPillCode] = useState('');
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
      <Badge variant="primary" shape="pill" size="sm">
        Instant Verification
      </Badge>
      <OtpInput
        length={6}
        variant="pill"
        shape="circle"
        size="md"
        value={pillCode}
        onChange={setPillCode}
      />
    </div>
  );
};

const RecoveryKeyDemo = () => {
  const [recoveryKey, setRecoveryKey] = useState('');
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2 text-slate-800">
        <Key size={18} />
        <span className="text-xs font-bold uppercase tracking-wider">
          Emergency 8-Digit Recovery Key
        </span>
      </div>
      <OtpInput
        length={8}
        separator="-"
        variant="bordered"
        size="sm"
        value={recoveryKey}
        onChange={setRecoveryKey}
      />
    </div>
  );
};

export const OTP_INPUT_THEME_CONFIGS: OtpInputThemeConfig[] = [
  {
    id: 'theming-2fa-verification',
    sectionTitle:
      '1. Two-Factor Authenticator (2FA) Verification Theme',
    description:
      '6-digit verification code with mid-group dash separator and resend cooldown countdown.',
    previewTitle: 'SMS 2FA Verification Card',
    render: () => <TwoFactorVerificationDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
  <div className="p-3 bg-blue-50 text-core-circle-primary rounded-2xl">
    <Smartphone size={24} />
  </div>
  <div>
    <h4 className="font-bold text-slate-900 text-sm">Check your mobile phone</h4>
    <p className="text-xs text-slate-500 mt-0.5">We sent a 6-digit code to +1 (555) •••-4892</p>
  </div>
  <OtpInput
    length={6}
    separator="-"
    variant="outline"
    size="md"
    value={authCode}
    onChange={setAuthCode}
  />
  <div className="flex justify-between items-center w-full text-xs text-slate-500 pt-2 border-t border-slate-100">
    <span>Didn't receive code?</span>
    <button className="text-core-circle-primary font-bold hover:underline">Resend in 0:42</button>
  </div>
</div>`,
  },
  {
    id: 'theming-banking-pin',
    sectionTitle: '2. Financial Banking 4-Digit Security PIN Theme',
    description:
      'Floating elevation card with masked bullet dots for secure PIN authorization.',
    previewTitle: 'Secure Wire Transfer Authorization',
    render: () => <BankingPinDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col items-center gap-4 text-center">
  <div className="flex items-center gap-2 text-emerald-600">
    <Lock size={18} />
    <span className="text-xs font-bold uppercase tracking-wider">Authorize Transfer ($2,400.00)</span>
  </div>
  <OtpInput
    length={4}
    mask
    variant="floating"
    size="lg"
    value={bankingPin}
    onChange={setBankingPin}
    helperText="Enter your 4-digit master transaction PIN."
  />
  <Button variant="primary" size="md" fullWidth disabled={bankingPin.length < 4}>
    Confirm Transaction
  </Button>
</div>`,
  },
  {
    id: 'theming-glassmorphic-sso',
    sectionTitle:
      '3. Glassmorphic Enterprise SSO Login Verification Theme',
    description:
      'Translucent frosted digit boxes on radiant gradient backdrop.',
    previewTitle: 'Enterprise Single Sign-On Code',
    render: () => <GlassmorphicSsoDemo />,
    code: `<div className="p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex flex-col items-center gap-4 text-center">
  <Shield size={24} className="text-core-circle-primary" />
  <h4 className="font-bold text-slate-900 text-sm">Enterprise SAML Handshake</h4>
  <OtpInput
    length={6}
    variant="glassmorphic"
    size="md"
    value={ssoCode}
    onChange={setSsoCode}
  />
</div>`,
  },
  {
    id: 'theming-pill-mobile',
    sectionTitle:
      '4. Pill Capsule Mobile Instant Verification Theme',
    description:
      'Rounded-full circular digit slots with rapid auto-advance.',
    previewTitle: 'Circular Capsule Code Slots',
    render: () => <PillMobileDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
  <Badge variant="primary" shape="pill" size="sm">Instant Verification</Badge>
  <OtpInput
    length={6}
    variant="pill"
    shape="circle"
    size="md"
    value={pillCode}
    onChange={setPillCode}
  />
</div>`,
  },
  {
    id: 'theming-recovery-key',
    sectionTitle:
      '5. Cryptographic 8-Digit Account Recovery Key Theme',
    description:
      'Strong 2px bordered slots for high-entropy emergency recovery backup codes.',
    previewTitle: '8-Digit Account Recovery Key',
    render: () => <RecoveryKeyDemo />,
    code: `<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
  <div className="flex items-center gap-2 text-slate-800">
    <Key size={18} />
    <span className="text-xs font-bold uppercase tracking-wider">Emergency 8-Digit Recovery Key</span>
  </div>
  <OtpInput
    length={8}
    separator="-"
    variant="bordered"
    size="sm"
    value={recoveryKey}
    onChange={setRecoveryKey}
  />
</div>`,
  },
];

export const OTP_INPUT_VARIANT_GROUPS: OtpInputVariantGroup[] = [
  {
    id: 'otp-variants-styles',
    title: '1. Visual Variants (10 Variants)',
    description:
      'Outline, filled, floating, glassmorphic, pill, material, gradient, bordered, success, and ghost.',
    render: () => (
      <div className="flex flex-col gap-6 w-full items-center">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Outline:</span>
          <OtpInput length={4} variant="outline" defaultValue="1234" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Filled:</span>
          <OtpInput length={4} variant="filled" defaultValue="4892" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Floating:</span>
          <OtpInput length={4} variant="floating" defaultValue="9102" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Pill:</span>
          <OtpInput length={4} variant="pill" shape="circle" defaultValue="7719" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Gradient:</span>
          <OtpInput length={4} variant="gradient" defaultValue="3340" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Bordered:</span>
          <OtpInput length={4} variant="bordered" defaultValue="6184" />
        </div>
      </div>
    ),
  },
  {
    id: 'otp-variants-shapes',
    title: '2. Contour Shapes',
    description: 'Rounded box, circular ring, and sharp square.',
    render: () => (
      <div className="flex flex-col gap-6 w-full items-center">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Rounded:</span>
          <OtpInput length={4} shape="rounded" defaultValue="1234" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Circular:</span>
          <OtpInput length={4} shape="circle" defaultValue="5678" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold w-24">Square:</span>
          <OtpInput length={4} shape="square" defaultValue="9012" />
        </div>
      </div>
    ),
  },
];

export const OTP_INPUT_PLAYGROUND_SECTION = {
  id: 'otp-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual variants, digit lengths (4/6/8), PIN masking, and clipboard paste.',
};

export const OTP_INPUT_MOCK_SECTION = {
  id: 'otp-mock',
  title: 'Dynamic 2FA Verification & Auto-Submit Pattern',
  description:
    'Automatically trigger REST API verification upon typing the final digit.',
  snippets: [
    {
      label: 'Sample Auth Verification Payload',
      code: JSON.stringify(
        {
          session_challenge_id: 'ch_982489',
          entered_code: '489214',
          verification_method: 'totp_authenticator',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic 2FA Form Component',
      code: `import React, { useState } from 'react';
import { OtpInput, Button } from '@core-circle/ui';

export const TwoFactorVerificationModal = ({ challengeId, onVerified }) => {
  const [code, setCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (completedCode) => {
    setIsVerifying(true);
    const res = await fetch('/api/v1/auth/verify-2fa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ challengeId, code: completedCode })
    });
    if (res.ok) {
      onVerified();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <OtpInput
        length={6}
        separator="-"
        variant="outline"
        value={code}
        onChange={setCode}
        onComplete={handleVerify}
        disabled={isVerifying}
        autoFocus
      />
      <Button 
        variant="primary" 
        onClick={() => handleVerify(code)} 
        disabled={code.length < 6 || isVerifying}
        fullWidth
      >
        {isVerifying ? 'Verifying...' : 'Verify Code'}
      </Button>
    </div>
  );
};`,
    },
  ],
};

export const OTP_INPUT_OVERVIEW_SECTION = {
  id: 'otp-usage',
  title: 'Introduction',
  description:
    'The OtpInput atom provides a verification code input with automatic focus advance, backspace management, smart paste, and PIN masking.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { OtpInput } from '@core-circle/ui';

<OtpInput
  length={6}
  separator="-"
  onComplete={(code) => console.log('Entered:', code)}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const OTP_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'length',
    type: 'number',
    defaultValue: '6',
    description: 'Number of individual digit input slots (4, 6, or 8).',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'bordered' | 'success' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style variant of the input slots (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Dimensions of the digit slots (from 36px to 64px).',
  },
  {
    name: 'shape',
    type: "'rounded' | 'circle' | 'square'",
    defaultValue: "'rounded'",
    description: 'Contour shape of the input boxes.',
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: '-',
    description: 'Controlled string value.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    defaultValue: "''",
    description: 'Initial value for uncontrolled usage.',
  },
  {
    name: 'mask',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Whether to mask entered digits with bullet dots for sensitive PINs.',
  },
  {
    name: 'separator',
    type: 'ReactNode',
    defaultValue: '-',
    description:
      'Optional divider element rendered midway between digit groups.',
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the first slot auto-focuses on mount.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether inputs are disabled.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    defaultValue: '-',
    description: 'Callback fired on every keystroke with current full value.',
  },
  {
    name: 'onComplete',
    type: '(value: string) => void',
    defaultValue: '-',
    description: 'Callback triggered automatically once all digits are filled.',
  },
  {
    name: 'error',
    type: 'string',
    defaultValue: '-',
    description: 'Validation error message displayed below.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Guidance text displayed below.',
  },
];
