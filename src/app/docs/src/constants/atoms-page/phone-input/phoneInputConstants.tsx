'use client';

import React from 'react';
import { PhoneInput, Badge } from '@core-circle/ui';
import { Phone, CheckIcon, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const PHONE_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'PhoneInput' },
];

export const PHONE_INPUT_HEADER_CONTENT = {
  title: 'PhoneInput',
  description:
    'An international telephone number input featuring country flag indicators, searchable dial code popovers, and automated regional input masks.',
};

export const PHONE_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore international telephone input scenarios across global checkout, user onboarding, and enterprise contact forms.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore visual surface treatments (outline, filled, material), dimensions, and validation states.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive international phone sandbox with live country selector and formatting masks.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'SMS verification and 2FA telephone registration payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const PHONE_INPUT_THEME_CONFIGS = [
  {
    id: 'theming-us-checkout',
    title: '1. North American E-Commerce Checkout',
    description: 'Standard US phone input preformatted with parentheses and dashes.',
    previewTitle: 'Shipping Delivery Contact',
    code: `<PhoneInput
  label="Mobile Telephone"
  defaultCountry="US"
  placeholder="(555) 000-0000"
  fullWidth
  helperText="Used for SMS delivery status updates"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PhoneInput
            label="Mobile Telephone"
            defaultCountry="US"
            defaultValue="4155552671"
            fullWidth
            helperText="Used for SMS delivery status updates"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-uk-fintech',
    title: '2. London FinTech Onboarding',
    description: 'United Kingdom telephone field with +44 dial code and validation styling.',
    previewTitle: 'Bank Account Two-Factor Phone',
    code: `<PhoneInput
  label="Primary Telephone"
  defaultCountry="GB"
  variant="filled"
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PhoneInput
            label="Primary Telephone"
            defaultCountry="GB"
            defaultValue="7911123456"
            variant="filled"
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-india-kyc',
    title: '3. India KYC & Aadhaar Verification',
    description: 'India +91 mobile input split into two 5-digit segments.',
    previewTitle: 'Mobile Verification OTP',
    code: `<PhoneInput
  label="Aadhaar Registered Mobile"
  defaultCountry="IN"
  fullWidth
  helperText="A 6-digit verification OTP will be transmitted"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PhoneInput
            label="Aadhaar Registered Mobile"
            defaultCountry="IN"
            defaultValue="9876543210"
            fullWidth
            helperText="A 6-digit verification OTP will be transmitted"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-europe-support',
    title: '4. Pan-European Multi-Country Support',
    description: 'European customer support direct line with France (+33) configuration.',
    previewTitle: 'Customer Care Helpline',
    code: `<PhoneInput
  label="Helpline Number"
  defaultCountry="FR"
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PhoneInput
            label="Helpline Number"
            defaultCountry="FR"
            defaultValue="612345678"
            fullWidth
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-minimal-material',
    title: '5. Minimal Material Underline Theme',
    description: 'Clean borderless baseline input for modern dialog auth boxes.',
    previewTitle: 'Direct SMS Authentication',
    code: `<PhoneInput
  label="Phone Number"
  variant="material"
  defaultCountry="SG"
  fullWidth
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <PhoneInput
            label="Phone Number"
            variant="material"
            defaultCountry="SG"
            defaultValue="81234567"
            fullWidth
          />
        </div>
      </div>
    ),
  },
];

export const PHONE_INPUT_VARIANT_GROUPS = [
  {
    id: 'variants-surfaces',
    title: '1. Surface Treatments',
    description: 'Outline, Filled, and Material styling variants.',
    items: [
      {
        title: 'Outline Variant (Default)',
        code: '<PhoneInput variant="outline" label="Outline" defaultCountry="US" />',
        render: () => <PhoneInput variant="outline" label="Outline" defaultCountry="US" defaultValue="4155550192" fullWidth />,
      },
      {
        title: 'Filled Variant',
        code: '<PhoneInput variant="filled" label="Filled" defaultCountry="GB" />',
        render: () => <PhoneInput variant="filled" label="Filled" defaultCountry="GB" defaultValue="7911123456" fullWidth />,
      },
      {
        title: 'Material Variant',
        code: '<PhoneInput variant="material" label="Material" defaultCountry="DE" />',
        render: () => <PhoneInput variant="material" label="Material" defaultCountry="DE" defaultValue="1512345678" fullWidth />,
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: '2. Sizing Scale',
    description: 'Compact (sm), Standard (md), and Prominent (lg) dimensions.',
    items: [
      {
        title: 'Small Scale (sm - 32px height)',
        code: '<PhoneInput size="sm" label="Small" defaultCountry="US" />',
        render: () => <PhoneInput size="sm" label="Small Input" defaultCountry="US" defaultValue="4155550192" fullWidth />,
      },
      {
        title: 'Medium Scale (md - 40px height)',
        code: '<PhoneInput size="md" label="Medium" defaultCountry="US" />',
        render: () => <PhoneInput size="md" label="Medium Input" defaultCountry="US" defaultValue="4155550192" fullWidth />,
      },
      {
        title: 'Large Scale (lg - 48px height)',
        code: '<PhoneInput size="lg" label="Large" defaultCountry="US" />',
        render: () => <PhoneInput size="lg" label="Large Input" defaultCountry="US" defaultValue="4155550192" fullWidth />,
      },
    ],
  },
  {
    id: 'variants-states',
    title: '3. Interactive & Validation States',
    description: 'Disabled, validation error, and international dial masks.',
    items: [
      {
        title: 'Disabled State',
        code: '<PhoneInput label="Disabled" disabled defaultCountry="US" defaultValue="4155550192" />',
        render: () => <PhoneInput label="Disabled" disabled defaultCountry="US" defaultValue="4155550192" fullWidth />,
      },
      {
        title: 'Validation Error State',
        code: '<PhoneInput label="Phone" error="Incomplete telephone number" defaultCountry="US" defaultValue="415" />',
        render: () => <PhoneInput label="Phone" error="Incomplete telephone number" defaultCountry="US" defaultValue="415" fullWidth />,
      },
      {
        title: 'Japan (+81) Format Mask',
        code: '<PhoneInput label="Tokyo Contact" defaultCountry="JP" defaultValue="9012345678" />',
        render: () => <PhoneInput label="Tokyo Contact" defaultCountry="JP" defaultValue="9012345678" fullWidth />,
      },
      {
        title: 'Australia (+61) Format Mask',
        code: '<PhoneInput label="Sydney Contact" defaultCountry="AU" defaultValue="412345678" />',
        render: () => <PhoneInput label="Sydney Contact" defaultCountry="AU" defaultValue="412345678" fullWidth />,
      },
    ],
  },
];

export const PHONE_INPUT_PLAYGROUND_SECTION = {
  id: 'phone-input-playground-section',
  title: 'Interactive Playground',
  description: 'Test international dialing codes, mask formatting, surface styles, and error handling.',
};

export const PHONE_INPUT_MOCK_SECTION = {
  id: 'phone-input-mock',
  title: 'SMS 2FA Gateway Payload',
  description: 'Connect PhoneInput to an SMS dispatch or 2FA registration service.',
  snippets: [
    {
      label: 'SMS Gateway Request Payload',
      code: JSON.stringify(
        {
          recipient: {
            countryCode: 'US',
            dialCode: '+1',
            nationalNumber: '4155552671',
            e164Formatted: '+14155552671',
          },
          dispatch: {
            service: 'Twilio Verify',
            channel: 'sms',
            template: 'AUTH_OTP',
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { PhoneInput, Button } from '@core-circle/ui';

export function SmsVerificationCard() {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null);

  const handlePhoneChange = (formatted, raw, countryData) => {
    setPhone(formatted);
    setCountry(countryData);
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <PhoneInput
        label="Phone Number"
        defaultCountry="US"
        onPhoneChange={handlePhoneChange}
        fullWidth
      />
      <Button variant="primary">Send Verification Code</Button>
    </div>
  );
}`,
    },
  ],
};

export const PHONE_INPUT_OVERVIEW_SECTION = {
  id: 'phone-input-overview',
  title: 'Introduction',
  description:
    'PhoneInput provides a frictionless international telephone capture interface with searchable country prefixes, dynamic formatting masks, and E.164 compliance.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { PhoneInput } from '@core-circle/ui';

<PhoneInput
  label="Phone Number"
  defaultCountry="US"
  fullWidth
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const PHONE_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'defaultCountry',
    type: 'string',
    defaultValue: "'US'",
    description: 'ISO 2-letter country code initially selected in dropdown.',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'material'",
    defaultValue: "'outline'",
    description: 'Visual framing style of the input container.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical height and font scale.',
  },
  {
    name: 'onPhoneChange',
    type: '(formattedValue: string, rawNumber: string, country: CountryData) => void',
    defaultValue: 'undefined',
    description: 'Event callback fired when digits or country change.',
  },
  {
    name: 'searchPlaceholder',
    type: 'string',
    defaultValue: "'Search countries...'",
    description: 'Placeholder label inside the country search popup.',
  },
  {
    name: 'error',
    type: 'string | boolean',
    defaultValue: 'undefined',
    description: 'Error alert text or validation flag.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Helpful caption displayed below the input.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Expands the input to 100% width of parent container.',
  },
];
