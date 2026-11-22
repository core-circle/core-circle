'use client';

import React from 'react';
import { InputGroup, TextInput, Badge } from '@core-circle/ui';
import { AtSign, SearchIcon, HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const INPUT_GROUP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'InputGroup' },
];

export const INPUT_GROUP_HEADER_CONTENT = {
  title: 'InputGroup',
  description:
    'A layout primitive that seamlessly attaches static text prefixes/suffixes, action buttons, and dropdown accessories directly onto inputs with unified border radius handling.',
};

export const INPUT_GROUP_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore domain setup, financial currency badges, search bars with submit buttons, and coupon redemption.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore joined vs disjoined styles, dimensions, and prefix/suffix configurations.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive addon sandbox attaching prefixes, suffixes, buttons, and joined borders.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Domain reservation and vanity URL configuration payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const INPUT_GROUP_THEME_CONFIGS = [
  {
    id: 'theming-domain-registration',
    title: '1. Vanity Subdomain Registration Theme',
    description: 'HTTPS protocol prefix and root domain suffix surrounding the tenant subdomain input.',
    previewTitle: 'Custom Tenant URL',
    code: `<InputGroup label="Custom Workspace Domain" fullWidth>
  <InputGroup.Text>https://</InputGroup.Text>
  <TextInput defaultValue="acme-corp" fullWidth />
  <InputGroup.Text>.corecircle.cloud</InputGroup.Text>
</InputGroup>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <InputGroup label="Custom Workspace Domain" fullWidth>
            <InputGroup.Text>https://</InputGroup.Text>
            <TextInput defaultValue="acme-corp" fullWidth />
            <InputGroup.Text>.corecircle.cloud</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-search-action',
    title: '2. Search Bar with Action Button',
    description: 'Unified search input flanked with a primary search trigger button.',
    previewTitle: 'Knowledge Base Search',
    code: `<InputGroup label="Search Articles" fullWidth>
  <TextInput placeholder="Search documentation, guides, and SDKs..." fullWidth />
  <InputGroup.Button variant="primary">Search</InputGroup.Button>
</InputGroup>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <InputGroup label="Search Articles" fullWidth>
            <TextInput placeholder="Search documentation, guides, and SDKs..." fullWidth />
            <InputGroup.Button variant="primary">Search</InputGroup.Button>
          </InputGroup>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-currency-frequency',
    title: '3. SaaS Pricing Plan Configuration',
    description: 'Currency prefix and billing cadence suffix.',
    previewTitle: 'Seat Price Configuration',
    code: `<InputGroup label="Monthly Seat Price" fullWidth>
  <InputGroup.Text>$</InputGroup.Text>
  <TextInput defaultValue="39.00" fullWidth />
  <InputGroup.Text>/ user / mo</InputGroup.Text>
</InputGroup>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <InputGroup label="Monthly Seat Price" fullWidth>
            <InputGroup.Text>$</InputGroup.Text>
            <TextInput defaultValue="39.00" fullWidth />
            <InputGroup.Text>/ user / mo</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-coupon-discount',
    title: '4. Promo Code & Voucher Redemption',
    description: 'Disjoined input with standalone outline Apply button.',
    previewTitle: 'Checkout Voucher',
    code: `<InputGroup label="Promo Code" joined={false} fullWidth>
  <TextInput defaultValue="SUMMER2026" fullWidth />
  <InputGroup.Button variant="outline">Apply</InputGroup.Button>
</InputGroup>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <InputGroup label="Promo Code" joined={false} fullWidth>
            <TextInput defaultValue="SUMMER2026" fullWidth />
            <InputGroup.Button variant="outline">Apply</InputGroup.Button>
          </InputGroup>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-social-handle',
    title: '5. Social Profile & Username Handle',
    description: 'Leading @ symbol prefix for community profiles.',
    previewTitle: 'Public Profile Handle',
    code: `<InputGroup label="Twitter / X Username" fullWidth>
  <InputGroup.Text>@</InputGroup.Text>
  <TextInput defaultValue="alexmorgan" fullWidth />
</InputGroup>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-md">
          <InputGroup label="Twitter / X Username" fullWidth>
            <InputGroup.Text>@</InputGroup.Text>
            <TextInput defaultValue="alexmorgan" fullWidth />
          </InputGroup>
        </div>
      </div>
    ),
  },
];

export const INPUT_GROUP_VARIANT_GROUPS = [
  {
    id: 'variants-layouts',
    title: '1. Attachment Layouts',
    description: 'Joined (touching unified border) vs Disjoined (spaced gap).',
    items: [
      {
        title: 'Joined Layout (Default)',
        code: '<InputGroup joined={true}><InputGroup.Text>https://</InputGroup.Text><TextInput /><InputGroup.Button>Go</InputGroup.Button></InputGroup>',
        render: () => (
          <InputGroup joined={true} fullWidth>
            <InputGroup.Text>https://</InputGroup.Text>
            <TextInput defaultValue="example.org" fullWidth />
            <InputGroup.Button variant="primary">Go</InputGroup.Button>
          </InputGroup>
        ),
      },
      {
        title: 'Disjoined Spaced Layout',
        code: '<InputGroup joined={false}><TextInput /><InputGroup.Button>Search</InputGroup.Button></InputGroup>',
        render: () => (
          <InputGroup joined={false} fullWidth>
            <TextInput placeholder="Search terms..." fullWidth />
            <InputGroup.Button variant="outline">Search</InputGroup.Button>
          </InputGroup>
        ),
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
        code: '<InputGroup size="sm"><InputGroup.Text>@</InputGroup.Text><TextInput /></InputGroup>',
        render: () => (
          <InputGroup size="sm" fullWidth>
            <InputGroup.Text>@</InputGroup.Text>
            <TextInput defaultValue="smalluser" fullWidth />
          </InputGroup>
        ),
      },
      {
        title: 'Medium Scale (md - 40px height)',
        code: '<InputGroup size="md"><InputGroup.Text>@</InputGroup.Text><TextInput /></InputGroup>',
        render: () => (
          <InputGroup size="md" fullWidth>
            <InputGroup.Text>@</InputGroup.Text>
            <TextInput defaultValue="mediumuser" fullWidth />
          </InputGroup>
        ),
      },
      {
        title: 'Large Scale (lg - 48px height)',
        code: '<InputGroup size="lg"><InputGroup.Text>@</InputGroup.Text><TextInput /></InputGroup>',
        render: () => (
          <InputGroup size="lg" fullWidth>
            <InputGroup.Text>@</InputGroup.Text>
            <TextInput defaultValue="largeuser" fullWidth />
          </InputGroup>
        ),
      },
    ],
  },
  {
    id: 'variants-buttons',
    title: '3. Button Accessories',
    description: 'Primary, Outline, and Default action button attachments.',
    items: [
      {
        title: 'Primary Button Action',
        code: '<InputGroup><TextInput /><InputGroup.Button variant="primary">Submit</InputGroup.Button></InputGroup>',
        render: () => (
          <InputGroup fullWidth>
            <TextInput placeholder="Enter email..." fullWidth />
            <InputGroup.Button variant="primary">Subscribe</InputGroup.Button>
          </InputGroup>
        ),
      },
      {
        title: 'Outline Button Action',
        code: '<InputGroup><TextInput /><InputGroup.Button variant="outline">Copy</InputGroup.Button></InputGroup>',
        render: () => (
          <InputGroup fullWidth>
            <TextInput defaultValue="git clone https://github.com/..." fullWidth />
            <InputGroup.Button variant="outline">Copy</InputGroup.Button>
          </InputGroup>
        ),
      },
    ],
  },
];

export const INPUT_GROUP_PLAYGROUND_SECTION = {
  id: 'input-group-playground-section',
  title: 'Interactive Playground',
  description: 'Test prefix add-ons, suffix labels, action buttons, and joined borders.',
};

export const INPUT_GROUP_MOCK_SECTION = {
  id: 'input-group-mock',
  title: 'Domain Provisioning API Integration',
  description: 'Connect InputGroup to a domain availability lookup payload.',
  snippets: [
    {
      label: 'Domain Check Payload',
      code: JSON.stringify(
        {
          dnsLookup: {
            protocol: 'https',
            requestedSubdomain: 'nova-analytics',
            rootDomain: 'corecircle.app',
            isAvailable: true,
            sslProvisioned: true,
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Consumer React Component',
      code: `import React, { useState } from 'react';
import { InputGroup, TextInput } from '@core-circle/ui';

export function DomainClaimForm() {
  const [subdomain, setSubdomain] = useState('nova');

  return (
    <InputGroup label="Reserve Subdomain" fullWidth>
      <InputGroup.Text>https://</InputGroup.Text>
      <TextInput
        value={subdomain}
        onChange={(e) => setSubdomain(e.target.value)}
        fullWidth
      />
      <InputGroup.Text>.corecircle.app</InputGroup.Text>
      <InputGroup.Button variant="primary">Claim</InputGroup.Button>
    </InputGroup>
  );
}`,
    },
  ],
};

export const INPUT_GROUP_OVERVIEW_SECTION = {
  id: 'input-group-overview',
  title: 'Introduction',
  description:
    'InputGroup is a container component designed to attach prefix/suffix text tags, dropdowns, and buttons to input fields without CSS border collision.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { InputGroup, TextInput } from '@core-circle/ui';

<InputGroup label="Domain" fullWidth>
  <InputGroup.Text>https://</InputGroup.Text>
  <TextInput placeholder="subdomain" fullWidth />
  <InputGroup.Button variant="primary">Search</InputGroup.Button>
</InputGroup>`,
  },
  propsTableTitle: 'Component Props',
};

export const INPUT_GROUP_PROPS_DATA: PropItem[] = [
  {
    name: 'joined',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Removes adjacent inner border radiuses to merge elements seamlessly.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Unified vertical height scale applied across all children.',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Header label text above the input group.',
  },
  {
    name: 'error',
    type: 'string | boolean',
    defaultValue: 'undefined',
    description: 'Error status styling or alert caption.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Auxiliary helper text displayed below the group.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Expands the container to occupy 100% of available width.',
  },
];
