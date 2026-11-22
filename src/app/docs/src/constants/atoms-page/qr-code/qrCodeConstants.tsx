'use client';

import React from 'react';
import { QRCode } from '@core-circle/ui';
import { Barcode, HomeIcon, Sparkles } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const QR_CODE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'QRCode' },
];

export const QR_CODE_HEADER_CONTENT = {
  title: 'QRCode',
  description:
    'A high-performance zero-dependency SVG Quick Response (QR) matrix generator supporting ISO/IEC 18004 standards, brand color palettes, center logo emblems, and one-click image download.',
};

export const QR_CODE_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore Wi-Fi onboarding, 2FA MFA enrollment, crypto transactions, and event passes.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual container frames, brand tints, error correction levels, and center logos.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive QR Code sandbox with dynamic URL binding and color palettes.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Authenticator TOTP enrollment integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const QR_CODE_THEME_CONFIGS = [
  {
    id: 'theming-app-onboarding',
    title: '1. Mobile App Quick-Pair Onboarding Theme',
    description: 'Fast mobile device pairing with interactive download and scan prompts.',
    previewTitle: 'Mobile Device Pairing',
    code: `<QRCode
  value="https://corecircle.io/pair?token=cc_99182a"
  size={180}
  variant="card"
  caption="Scan with Camera"
  helperText="Open CoreCircle mobile app to link account"
  downloadable
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <QRCode
          value="https://corecircle.io/pair?token=cc_99182a"
          size={180}
          variant="card"
          caption="Scan with Camera"
          helperText="Open CoreCircle mobile app to link account"
          downloadable
        />
      </div>
    ),
  },
  {
    id: 'theming-wifi-guest',
    title: '2. Office Guest Wi-Fi Network Theme',
    description: 'High-contrast branded badge for conference room and visitor connectivity.',
    previewTitle: 'Guest Wi-Fi Connection',
    code: `<QRCode
  value="WIFI:S:CoreCircleGuest;T:WPA;P:CoreSecure2026;;"
  size={180}
  color="#2563eb"
  bgColor="#eff6ff"
  variant="card"
  caption="Office Guest Wi-Fi"
  helperText="Automatically connects your iOS or Android device"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <QRCode
          value="WIFI:S:CoreCircleGuest;T:WPA;P:CoreSecure2026;;"
          size={180}
          color="#2563eb"
          bgColor="#eff6ff"
          variant="card"
          caption="Office Guest Wi-Fi"
          helperText="Automatically connects your iOS or Android device"
        />
      </div>
    ),
  },
  {
    id: 'theming-crypto-payment',
    title: '3. Web3 & Crypto Merchant Invoice Theme',
    description: 'Cryptocurrency payment address with deep brand styling.',
    previewTitle: 'USDC Merchant Checkout',
    code: `<QRCode
  value="ethereum:0x71C...438?amount=250"
  size={180}
  color="#059669"
  bgColor="#ecfdf5"
  variant="card"
  caption="Pay $250.00 USDC"
  helperText="Polygon & Ethereum L2 networks accepted"
  downloadable
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <QRCode
          value="ethereum:0x71C...438?amount=250"
          size={180}
          color="#059669"
          bgColor="#ecfdf5"
          variant="card"
          caption="Pay $250.00 USDC"
          helperText="Polygon & Ethereum L2 networks accepted"
          downloadable
        />
      </div>
    ),
  },
  {
    id: 'theming-totp-mfa',
    title: '4. Authenticator 2FA MFA Enrollment Theme',
    description: 'Time-based one-time password security pairing for Google Authenticator & 1Password.',
    previewTitle: 'Two-Factor Enrollment',
    code: `<QRCode
  value="otpauth://totp/CoreCircle:alex?secret=JBSWY3DPEHPK3PXP"
  size={180}
  color="#0f172a"
  level="H"
  variant="bordered"
  caption="Scan in 2FA App"
  helperText="Google Authenticator or 1Password"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <QRCode
          value="otpauth://totp/CoreCircle:alex?secret=JBSWY3DPEHPK3PXP"
          size={180}
          color="#0f172a"
          level="H"
          variant="bordered"
          caption="Scan in 2FA App"
          helperText="Google Authenticator or 1Password"
        />
      </div>
    ),
  },
  {
    id: 'theming-event-ticket',
    title: '5. VIP Pass & Event Gate Check-In Theme',
    description: 'High-density gate pass badge featuring custom center brand icon.',
    previewTitle: 'Keynote VIP Admission',
    code: `<QRCode
  value="https://corecircle.io/tickets/vip-88219"
  size={180}
  color="#7c3aed"
  bgColor="#f5f3ff"
  variant="card"
  logo={<Sparkles size={20} className="text-purple-600" />}
  caption="VIP Keynote Pass"
  helperText="Present at Fast-Track Hall B entry gate"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <QRCode
          value="https://corecircle.io/tickets/vip-88219"
          size={180}
          color="#7c3aed"
          bgColor="#f5f3ff"
          variant="card"
          logo={<Sparkles size={20} className="text-purple-600" />}
          caption="VIP Keynote Pass"
          helperText="Present at Fast-Track Hall B entry gate"
        />
      </div>
    ),
  },
];

export const QR_CODE_VARIANT_GROUPS = [
  {
    id: 'group-containers',
    title: 'Container & Framing Styles',
    description: 'Elevated shadow card, high-contrast double border, and borderless transparent.',
    items: [
      {
        title: 'Elevated Card Container',
        code: `<QRCode value="https://corecircle.io" variant="card" caption="Card Container" />`,
        render: () => (
          <QRCode value="https://corecircle.io" variant="card" caption="Card Container" />
        ),
      },
      {
        title: 'High-Contrast Bordered',
        code: `<QRCode value="https://corecircle.io" variant="bordered" caption="Bordered Frame" />`,
        render: () => (
          <QRCode value="https://corecircle.io" variant="bordered" caption="Bordered Frame" />
        ),
      },
      {
        title: 'Transparent Inline',
        code: `<QRCode value="https://corecircle.io" variant="default" />`,
        render: () => (
          <QRCode value="https://corecircle.io" variant="default" />
        ),
      },
    ],
  },
  {
    id: 'group-brand-colors',
    title: 'Brand Palettes & Sizing Scales',
    description: 'Custom foreground/background combinations and sizing options.',
    items: [
      {
        title: 'Indigo Brand Palette (140px Compact)',
        code: `<QRCode value="https://corecircle.io" size={140} color="#4338ca" bgColor="#eef2ff" variant="card" />`,
        render: () => (
          <QRCode value="https://corecircle.io" size={140} color="#4338ca" bgColor="#eef2ff" variant="card" />
        ),
      },
      {
        title: 'Emerald Green Palette (180px Standard)',
        code: `<QRCode value="https://corecircle.io" size={180} color="#047857" bgColor="#ecfdf5" variant="card" />`,
        render: () => (
          <QRCode value="https://corecircle.io" size={180} color="#047857" bgColor="#ecfdf5" variant="card" />
        ),
      },
      {
        title: 'Amber Warning Palette (220px Large)',
        code: `<QRCode value="https://corecircle.io" size={220} color="#b45309" bgColor="#fffbeb" variant="card" />`,
        render: () => (
          <QRCode value="https://corecircle.io" size={220} color="#b45309" bgColor="#fffbeb" variant="card" />
        ),
      },
    ],
  },
  {
    id: 'group-logo-actions',
    title: 'Center Logo & Download Utilities',
    description: 'Embedded center badge and direct PNG export buttons.',
    items: [
      {
        title: 'Embedded Center Emblem Slot',
        code: `<QRCode
  value="https://corecircle.io"
  level="H"
  variant="card"
  logo={<Barcode size={22} className="text-slate-800" />}
  caption="Branded QR"
/>`,
        render: () => (
          <QRCode
            value="https://corecircle.io"
            level="H"
            variant="card"
            logo={<Barcode size={22} className="text-slate-800" />}
            caption="Branded QR"
          />
        ),
      },
      {
        title: 'With Download & Copy Buttons',
        code: `<QRCode
  value="https://corecircle.io/invite"
  variant="card"
  caption="Share Workspace"
  downloadable
/>`,
        render: () => (
          <QRCode
            value="https://corecircle.io/invite"
            variant="card"
            caption="Share Workspace"
            downloadable
          />
        ),
      },
    ],
  },
];

export const QR_CODE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Customize values, dimensions, color palettes, captions, and download behaviors.',
};

export const QR_CODE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Production integration example for Time-Based One-Time Password (TOTP) 2FA setup.',
  snippets: [
    {
      label: 'TwoFactorEnrollmentModal.tsx',
      code: `import React, { useState } from 'react';
import { QRCode, TextInput, Button, Dialog } from '@core-circle/ui';

export const TwoFactorEnrollment: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [otpCode, setOtpCode] = useState('');
  const totpUri = 'otpauth://totp/CoreCircle:alex.morgan@company.com?secret=HXDMVJECJJWSRB3HW&issuer=CoreCircle';

  return (
    <Dialog open={isOpen} onClose={onClose} title="Setup Two-Factor Authentication">
      <div className="flex flex-col items-center gap-4 py-4">
        <QRCode
          value={totpUri}
          size={190}
          level="H"
          variant="card"
          caption="Scan with Authenticator"
          helperText="Google Authenticator, Authy, or 1Password"
        />
        <div className="w-full max-w-xs flex flex-col gap-3 mt-2">
          <TextInput
            label="Verification 6-Digit Code"
            placeholder="000000"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            fullWidth
          />
          <Button variant="primary" fullWidth onClick={onClose}>
            Verify & Enable 2FA
          </Button>
        </div>
      </div>
    </Dialog>
  );
};`,
    },
  ],
};

export const QR_CODE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { QRCode } from '@core-circle/ui';

export default function Example() {
  return (
    <QRCode
      value="https://corecircle.io"
      size={180}
      variant="card"
      caption="Visit CoreCircle"
      downloadable
    />
  );
}`,
  },
};

export const QR_CODE_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    defaultValue: "''",
    description: 'Target text, URL string, WiFi configuration, or cryptographic data string to encode.',
  },
  {
    name: 'size',
    type: 'number',
    defaultValue: '180',
    description: 'Width and height dimensions in pixels for the SVG canvas.',
  },
  {
    name: 'color',
    type: 'string',
    defaultValue: "'#0f172a'",
    description: 'Hex or CSS color fill for the dark modules of the QR matrix.',
  },
  {
    name: 'bgColor',
    type: 'string',
    defaultValue: "'#ffffff'",
    description: 'Hex or CSS background color fill for the canvas modules.',
  },
  {
    name: 'level',
    type: "'L' | 'M' | 'Q' | 'H'",
    defaultValue: "'M'",
    description: 'ISO error correction level: L (7%), M (15%), Q (25%), or H (30% recovery capacity).',
  },
  {
    name: 'includeMargin',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to include the standard quiet zone margin around the matrix modules.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Container framing style: transparent, elevated shadow card, or high-contrast border.',
  },
  {
    name: 'logo',
    type: 'React.ReactNode',
    defaultValue: 'undefined',
    description: 'Center icon, brand mark, or avatar element rendered in the center of the QR matrix.',
  },
  {
    name: 'caption',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Primary title label rendered beneath the QR Code.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Secondary instructional subtitle rendered beneath the caption.',
  },
  {
    name: 'downloadable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to render interactive Copy URL and Download PNG buttons.',
  },
];
