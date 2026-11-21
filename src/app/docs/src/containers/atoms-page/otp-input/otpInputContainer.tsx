'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  OtpInput, 
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
  Lock, 
  CheckIcon, 
  Mail, 
  Mobile, 
  Key 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { otpInputPageStyles as s } from './otp-input.styles';
import { 
  OTP_INPUT_PROPS_DATA, 
  OTP_INPUT_BREADCRUMB_ITEMS 
} from '../../../constants/atoms-page/otp-input/otpInputConstants';
import { OtpInputPlayground } from '../../../components/playground/otp-input/otpInputPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { OtpInputContainerProps } from '../../../interface/containers/atoms/otp-input.types';

export default function OtpInputContainer({
  headerContent,
  breadcrumbItems
}: OtpInputContainerProps) {
  const [authCode, setAuthCode] = useState('');
  const [bankingPin, setBankingPin] = useState('');
  const [ssoCode, setSsoCode] = useState('');
  const [pillCode, setPillCode] = useState('');
  const [recoveryKey, setRecoveryKey] = useState('');

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Two-Factor Authenticator 6-Digit Verification */}
          <DocSection
            id="theming-2fa-verification"
            title="1. Two-Factor Authenticator (2FA) Verification Theme"
            description="6-digit verification code with mid-group dash separator and resend cooldown countdown."
          >
            <ComponentPreview
              title="SMS 2FA Verification Card"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
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
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
                <div className="p-3 bg-blue-50 text-core-circle-primary rounded-2xl">
                  <Mobile size={24} />
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
                  <button className="text-core-circle-primary font-bold hover:underline cursor-pointer">Resend in 0:42</button>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Financial Banking 4-Digit Security PIN */}
          <DocSection
            id="theming-banking-pin"
            title="2. Financial Banking 4-Digit Security PIN Theme"
            description="Floating elevation card with masked bullet dots for secure PIN authorization."
          >
            <ComponentPreview
              title="Secure Wire Transfer Authorization"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col items-center gap-4 text-center">
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
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-core-circle-elevated flex flex-col items-center gap-4 text-center">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Glassmorphic Enterprise SSO Login */}
          <DocSection
            id="theming-glassmorphic-sso"
            title="3. Glassmorphic Enterprise SSO Login Verification Theme"
            description="Translucent frosted digit boxes on radiant gradient backdrop."
          >
            <ComponentPreview
              title="Enterprise Single Sign-On Code"
              code={`<div className="p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex flex-col items-center gap-4 text-center">
  <Shield size={24} className="text-core-circle-primary" />
  <h4 className="font-bold text-slate-900 text-sm">Enterprise SAML Handshake</h4>
  <OtpInput
    length={6}
    variant="glassmorphic"
    size="md"
    value={ssoCode}
    onChange={setSsoCode}
  />
</div>`}
            >
              <div className="w-full p-8 bg-gradient-to-r from-blue-100/60 via-indigo-100/40 to-purple-100/60 rounded-3xl flex flex-col items-center gap-4 text-center">
                <Shield size={24} className="text-core-circle-primary" />
                <h4 className="font-bold text-slate-900 text-sm">Enterprise SAML Handshake</h4>
                <OtpInput
                  length={6}
                  variant="glassmorphic"
                  size="md"
                  value={ssoCode}
                  onChange={setSsoCode}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Pill Capsule Mobile Instant Verification */}
          <DocSection
            id="theming-pill-mobile"
            title="4. Pill Capsule Mobile Instant Verification Theme"
            description="Rounded-full circular digit slots with rapid auto-advance."
          >
            <ComponentPreview
              title="Circular Capsule Code Slots"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
  <Badge variant="primary" shape="pill" size="sm">Instant Verification</Badge>
  <OtpInput
    length={6}
    variant="pill"
    shape="circle"
    size="md"
    value={pillCode}
    onChange={setPillCode}
  />
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
                <Badge variant="primary" shape="pill" size="sm">Instant Verification</Badge>
                <OtpInput
                  length={6}
                  variant="pill"
                  shape="circle"
                  size="md"
                  value={pillCode}
                  onChange={setPillCode}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Cryptographic 8-Digit Recovery Key */}
          <DocSection
            id="theming-recovery-key"
            title="5. Cryptographic 8-Digit Account Recovery Key Theme"
            description="Strong 2px bordered slots for high-entropy emergency recovery backup codes."
          >
            <ComponentPreview
              title="8-Digit Account Recovery Key"
              code={`<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
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
</div>`}
            >
              <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center">
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
          <DocSection id="otp-variants-styles" title="1. Visual Variants (10 Variants)" description="Outline, filled, floating, glassmorphic, pill, material, gradient, bordered, success, and ghost.">
            <div className="flex flex-col gap-6 w-full items-center">
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Outline:</span><OtpInput length={4} variant="outline" defaultValue="1234" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Filled:</span><OtpInput length={4} variant="filled" defaultValue="4892" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Floating:</span><OtpInput length={4} variant="floating" defaultValue="9102" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Pill:</span><OtpInput length={4} variant="pill" shape="circle" defaultValue="7719" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Gradient:</span><OtpInput length={4} variant="gradient" defaultValue="3340" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Bordered:</span><OtpInput length={4} variant="bordered" defaultValue="6184" /></div>
            </div>
          </DocSection>

          <DocSection id="otp-variants-shapes" title="2. Contour Shapes" description="Rounded box, circular ring, and sharp square.">
            <div className="flex flex-col gap-6 w-full items-center">
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Rounded:</span><OtpInput length={4} shape="rounded" defaultValue="1234" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Circular:</span><OtpInput length={4} shape="circle" defaultValue="5678" /></div>
              <div className="flex items-center gap-4"><span className="text-xs font-bold w-24">Square:</span><OtpInput length={4} shape="square" defaultValue="9012" /></div>
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
          id="otp-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, digit lengths (4/6/8), PIN masking, and clipboard paste."
        >
          <OtpInputPlayground />
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
            id="otp-mock"
            title="Dynamic 2FA Verification & Auto-Submit Pattern"
            description="Automatically trigger REST API verification upon typing the final digit."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Auth Verification Payload"
                code={JSON.stringify({
                  session_challenge_id: "ch_982489",
                  entered_code: "489214",
                  verification_method: "totp_authenticator"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic 2FA Form Component"
                code={`import React, { useState } from 'react';
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
          <DocSection id="otp-usage" title="Introduction" description="The OtpInput atom provides a verification code input with automatic focus advance, backspace management, smart paste, and PIN masking.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { OtpInput } from '@core-circle/ui';

<OtpInput
  length={6}
  separator="-"
  onComplete={(code) => console.log('Entered:', code)}
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={OTP_INPUT_PROPS_DATA} />
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
