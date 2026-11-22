'use client';

import type { ReactNode } from 'react';
import {
  UserIcon,
  Shield,
  SettingsIcon,
  ArrowRight,
  Sparkles,
  Star,
  CreditCard,
  ShoppingBag,
  Key,
  Terminal,
  Clock,
  Banknotes,
  Lock,
} from '@core-circle/icons';
import { Badge } from '@core-circle/ui';

export interface AccordionThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  props: {
    variant: 'card' | 'gradient' | 'floating' | 'minimal' | 'filled';
    type: 'single' | 'multiple';
    collapsible?: boolean;
    defaultValue?: string;
  };
  items: Array<{
    id: string;
    title: ReactNode;
    content: string;
  }>;
  code: string;
}

export interface AccordionVariantItem {
  title: string;
  variant: 'card' | 'floating' | 'separated' | 'bordered' | 'glassmorphic' | 'gradient' | 'pill' | 'filled' | 'minimal' | 'ghost';
  wrapperClassName?: string;
}

export interface AccordionVariantGroup {
  id: string;
  title: string;
  description: string;
  variants: AccordionVariantItem[];
}

export const ACCORDION_HEADER_CONTENT = {
  title: 'Accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
};

export const ACCORDION_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Accordion' },
];

export const ACCORDION_PLAYGROUND_ITEMS = [
  {
    id: '1',
    title: 'Account Settings',
    content: 'Manage your account settings and preferences.',
    icon: <UserIcon size={18} />,
  },
  {
    id: '2',
    title: 'Privacy & Security',
    content: 'Configure your privacy settings and security options.',
    icon: <Shield size={18} />,
  },
  {
    id: '3',
    title: 'System Preferences',
    content: 'Adjust system-wide settings like notifications.',
    icon: <SettingsIcon size={18} />,
  },
];

export const ACCORDION_SAMPLE_ITEMS = [
  {
    id: '1',
    title: 'Profile Information',
    content: 'Manage your personal details, contact information, and public profile settings.',
    startIcon: <UserIcon size={18} />,
    endIcon: (
      <div className="px-2 py-0.5 rounded-full bg-core-circle-primary/10 text-[10px] text-core-circle-primary font-bold uppercase tracking-wider">
        New
      </div>
    ),
  },
  {
    id: '2',
    title: 'Security & Privacy',
    content: 'Control your account security, two-factor authentication, and privacy preferences.',
    startIcon: <Shield size={18} />,
  },
  {
    id: '3',
    title: 'Notifications',
    content: 'Customize how you receive alerts and stay updated with your account activity.',
    endIcon: <ArrowRight size={14} />,
  },
];

export const ACCORDION_THEME_CONFIGS: AccordionThemeConfig[] = [
  {
    id: 'theming-security-audit',
    sectionTitle: '1. Enterprise Security & Compliance FAQ Theme',
    description: 'Crisp card layout with verified status badges and clear typography for governance and audit documentation.',
    previewTitle: 'Security & Compliance FAQ',
    props: {
      variant: 'card',
      type: 'single',
      collapsible: true,
      defaultValue: '1',
    },
    items: [
      {
        id: '1',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <Shield size={16} className="text-emerald-600" /> SOC2 Type II & ISO 27001 Compliance
            </span>
            <Badge variant="success" size="sm" shape="pill">Certified</Badge>
          </div>
        ),
        content: 'CoreCircle undergoes independent third-party audits annually with continuous automated evidence collection.',
      },
      {
        id: '2',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <Sparkles size={16} className="text-core-circle-primary" /> Multi-Region Data Residency
            </span>
            <Badge variant="primary" size="sm" shape="pill">EU & US</Badge>
          </div>
        ),
        content: 'Customer workspace data is encrypted at rest using AES-256 and can be pinned to specific geographical regions.',
      },
    ],
    code: `<Accordion
  variant="card"
  type="single"
  collapsible
  defaultValue="1"
  items={[
    {
      id: '1',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <Shield size={16} className="text-emerald-600" /> SOC2 Type II & ISO 27001 Compliance
          </span>
          <Badge variant="success" size="sm" shape="pill">Certified</Badge>
        </div>
      ),
      content: 'CoreCircle undergoes independent third-party audits annually with continuous automated evidence collection.'
    },
    {
      id: '2',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <Sparkles size={16} className="text-core-circle-primary" /> Multi-Region Data Residency
          </span>
          <Badge variant="primary" size="sm" shape="pill">EU & US</Badge>
        </div>
      ),
      content: 'Customer workspace data is encrypted at rest using AES-256 and can be pinned to specific geographical regions.'
    }
  ]}
/>`,
  },
  {
    id: 'theming-luxury-purple',
    sectionTitle: '2. Royal VIP Knowledge Base Theme',
    description: 'Luminous gradient cards with purple badges and gold accent highlights for high-tier memberships.',
    previewTitle: 'Royal VIP Subscription FAQ',
    props: {
      variant: 'gradient',
      type: 'single',
      collapsible: true,
      defaultValue: '1',
    },
    items: [
      {
        id: '1',
        title: (
          <div className="flex items-center gap-3 text-purple-950 font-bold">
            <span className="flex items-center gap-2">
              <Star size={16} className="text-amber-500" /> Executive Concierge Support
            </span>
            <Badge variant="gradient" size="sm" shape="pill">VIP Access</Badge>
          </div>
        ),
        content: 'Access a dedicated engineering war room with guaranteed 15-minute response times and quarterly on-site system audits.',
      },
      {
        id: '2',
        title: (
          <div className="flex items-center gap-3 text-purple-950 font-bold">
            <span className="flex items-center gap-2">
              <Lock size={16} className="text-purple-600" /> Custom SSO & Okta SCIM Provisioning
            </span>
            <Badge variant="outline" size="sm" shape="pill">Enterprise</Badge>
          </div>
        ),
        content: 'Automate team access controls and single sign-on across SAML 2.0, Microsoft Entra ID, and Google Workspace.',
      },
    ],
    code: `<Accordion
  variant="gradient"
  type="single"
  collapsible
  defaultValue="1"
  items={[
    {
      id: '1',
      title: (
        <div className="flex items-center gap-3 text-purple-950 font-bold">
          <span className="flex items-center gap-2">
            <Star size={16} className="text-amber-500" /> Executive Concierge Support
          </span>
          <Badge variant="gradient" size="sm" shape="pill">VIP Access</Badge>
        </div>
      ),
      content: 'Access a dedicated engineering war room with guaranteed 15-minute response times and quarterly on-site system audits.'
    },
    {
      id: '2',
      title: (
        <div className="flex items-center gap-3 text-purple-950 font-bold">
          <span className="flex items-center gap-2">
            <Lock size={16} className="text-purple-600" /> Custom SSO & Okta SCIM Provisioning
          </span>
          <Badge variant="outline" size="sm" shape="pill">Enterprise</Badge>
        </div>
      ),
      content: 'Automate team access controls and single sign-on across SAML 2.0, Microsoft Entra ID, and Google Workspace.'
    }
  ]}
/>`,
  },
  {
    id: 'theming-ecommerce-orders',
    sectionTitle: '3. E-Commerce Orders & Delivery Policy Theme',
    description: 'Floating surface accordion with order timeline badges and international return terms.',
    previewTitle: 'Order Fulfillment & Returns',
    props: {
      variant: 'floating',
      type: 'single',
      collapsible: true,
      defaultValue: '1',
    },
    items: [
      {
        id: '1',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <ShoppingBag size={16} className="text-blue-600" /> Worldwide Express Air Shipping
            </span>
            <Badge variant="info" size="sm" shape="pill">2-4 Business Days</Badge>
          </div>
        ),
        content: 'All global orders are fulfilled within 24 hours from our automated logistics hubs with real-time GPS parcel tracking.',
      },
      {
        id: '2',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <Clock size={16} className="text-emerald-600" /> 30-Day Hassle-Free Return Guarantee
            </span>
            <Badge variant="success" size="sm" shape="pill">Prepaid Labels</Badge>
          </div>
        ),
        content: 'Return unused items in their original packaging within 30 days for an instant 100% refund to your original payment method.',
      },
    ],
    code: `<Accordion
  variant="floating"
  type="single"
  collapsible
  defaultValue="1"
  items={[
    {
      id: '1',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <ShoppingBag size={16} className="text-blue-600" /> Worldwide Express Air Shipping
          </span>
          <Badge variant="info" size="sm" shape="pill">2-4 Business Days</Badge>
        </div>
      ),
      content: 'All global orders are fulfilled within 24 hours from our automated logistics hubs with real-time GPS parcel tracking.'
    },
    {
      id: '2',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <Clock size={16} className="text-emerald-600" /> 30-Day Hassle-Free Return Guarantee
          </span>
          <Badge variant="success" size="sm" shape="pill">Prepaid Labels</Badge>
        </div>
      ),
      content: 'Return unused items in their original packaging within 30 days for an instant 100% refund to your original payment method.'
    }
  ]}
/>`,
  },
  {
    id: 'theming-dev-api',
    sectionTitle: '4. Developer API & Webhook Specs Theme',
    description: 'Flat minimal line entries with developer endpoint badges and security signatures.',
    previewTitle: 'API Integration Specs',
    props: {
      variant: 'minimal',
      type: 'single',
      collapsible: true,
      defaultValue: '1',
    },
    items: [
      {
        id: '1',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <Key size={16} className="text-amber-600" /> API Authentication & HMAC Signatures
            </span>
            <Badge variant="outline" size="sm" shape="pill">v2.4 Core</Badge>
          </div>
        ),
        content: 'Authenticate all incoming HTTP requests using Bearer JWT tokens with SHA-256 HMAC payload signatures in the header.',
      },
      {
        id: '2',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <Terminal size={16} className="text-core-circle-primary" /> Webhook Retry Backoff Logic
            </span>
            <Badge variant="primary" size="sm" shape="pill">Exponential</Badge>
          </div>
        ),
        content: 'Failed delivery attempts are retried up to 5 times using exponential backoff with jitter (5s, 15s, 45s, 2m, 10m).',
      },
    ],
    code: `<Accordion
  variant="minimal"
  type="single"
  collapsible
  defaultValue="1"
  items={[
    {
      id: '1',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <Key size={16} className="text-amber-600" /> API Authentication & HMAC Signatures
          </span>
          <Badge variant="outline" size="sm" shape="pill">v2.4 Core</Badge>
        </div>
      ),
      content: 'Authenticate all incoming HTTP requests using Bearer JWT tokens with SHA-256 HMAC payload signatures in the header.'
    },
    {
      id: '2',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <Terminal size={16} className="text-core-circle-primary" /> Webhook Retry Backoff Logic
          </span>
          <Badge variant="primary" size="sm" shape="pill">Exponential</Badge>
        </div>
      ),
      content: 'Failed delivery attempts are retried up to 5 times using exponential backoff with jitter (5s, 15s, 45s, 2m, 10m).'
    }
  ]}
/>`,
  },
  {
    id: 'theming-billing-tiers',
    sectionTitle: '5. Billing & Subscription Tiers Theme',
    description: 'Soft filled surface accordion with billing frequency chips and enterprise cost calculators.',
    previewTitle: 'Subscription Tier Details',
    props: {
      variant: 'filled',
      type: 'single',
      collapsible: true,
      defaultValue: '1',
    },
    items: [
      {
        id: '1',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <CreditCard size={16} className="text-indigo-600" /> Metered API Usage & Overage Billing
            </span>
            <Badge variant="primary" size="sm" shape="pill">Monthly</Badge>
          </div>
        ),
        content: 'Requests beyond the monthly tier allowance are charged at $0.002 per 1,000 requests without throttling your services.',
      },
      {
        id: '2',
        title: (
          <div className="flex items-center gap-3">
            <span className="text-core-circle-text-main font-bold flex items-center gap-2">
              <Banknotes size={16} className="text-emerald-600" /> Volume Discounts & Annual Contracts
            </span>
            <Badge variant="success" size="sm" shape="pill">Save 20%</Badge>
          </div>
        ),
        content: 'Annual billing locks in a 20% discount across all compute tiers with custom PO and invoicing options for enterprise teams.',
      },
    ],
    code: `<Accordion
  variant="filled"
  type="single"
  collapsible
  defaultValue="1"
  items={[
    {
      id: '1',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <CreditCard size={16} className="text-indigo-600" /> Metered API Usage & Overage Billing
          </span>
          <Badge variant="primary" size="sm" shape="pill">Monthly</Badge>
        </div>
      ),
      content: 'Requests beyond the monthly tier allowance are charged at $0.002 per 1,000 requests without throttling your services.'
    },
    {
      id: '2',
      title: (
        <div className="flex items-center gap-3">
          <span className="text-core-circle-text-main font-bold flex items-center gap-2">
            <Banknotes size={16} className="text-emerald-600" /> Volume Discounts & Annual Contracts
          </span>
          <Badge variant="success" size="sm" shape="pill">Save 20%</Badge>
        </div>
      ),
      content: 'Annual billing locks in a 20% discount across all compute tiers with custom PO and invoicing options for enterprise teams.'
    }
  ]}
/>`,
  },
];

export const ACCORDION_VARIANT_GROUPS: AccordionVariantGroup[] = [
  {
    id: 'accordion-variants-card',
    title: '1. Card & Floating Styles',
    description: 'Elevated card modules with soft drop shadows and clean description containers.',
    variants: [
      { title: 'Card Style', variant: 'card' },
      { title: 'Floating Style', variant: 'floating' },
    ],
  },
  {
    id: 'accordion-variants-separated',
    title: '2. Separated & Bordered Styles',
    description: 'Structured segmented cards or single unified container with dividers.',
    variants: [
      { title: 'Separated Style', variant: 'separated' },
      { title: 'Bordered Style', variant: 'bordered' },
    ],
  },
  {
    id: 'accordion-variants-glassmorphic',
    title: '3. Glassmorphic, Gradient, Pill & Filled Styles',
    description: 'Translucent frosted backdrop, radiant gradient, capsule pill, and soft filled surfaces.',
    variants: [
      {
        title: 'Glassmorphic Style',
        variant: 'glassmorphic',
        wrapperClassName: 'p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl',
      },
      { title: 'Gradient Style', variant: 'gradient' },
      { title: 'Pill Style', variant: 'pill' },
      { title: 'Filled Style', variant: 'filled' },
    ],
  },
  {
    id: 'accordion-variants-minimal',
    title: '4. Minimal & Ghost Styles',
    description: 'Clean flat line items or borderless surfaces for dense layout integration.',
    variants: [
      { title: 'Minimal Flat Style', variant: 'minimal' },
      { title: 'Ghost Style', variant: 'ghost' },
    ],
  },
];

export const ACCORDION_MOCK_PAYLOAD = JSON.stringify(
  {
    status: 'success',
    data: [
      {
        id: 'faq_billing_01',
        question: 'How does metered billing work?',
        answer: 'Usage is calculated at the end of each billing cycle based on active node hours.',
      },
      {
        id: 'faq_security_02',
        question: 'Are my API keys encrypted at rest?',
        answer: 'Yes, all credentials are encrypted using AES-256 GCM envelope encryption.',
      },
    ],
  },
  null,
  2
);

export const ACCORDION_MOCK_CONSUMER_CODE = `import React, { useEffect, useState } from 'react';
import { Accordion } from '@core-circle/ui';

export const DynamicFaqList = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/api/v1/faqs')
      .then(res => res.json())
      .then(json => setFaqs(json.data));
  }, []);

  const accordionItems = faqs.map(faq => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer
  }));

  return (
    <Accordion
      items={accordionItems}
      type="multiple"
      variant="floating"
    />
  );
};`;

export const ACCORDION_QUICK_USAGE_CODE = `import { Accordion } from '@core-circle/ui';

const items = [
  { id: '1', title: 'Section 1', content: 'Content 1' },
  { id: '2', title: 'Section 2', content: 'Content 2' }
];

<Accordion items={items} type="single" collapsible variant="floating" />`;

export const ACCORDION_PLAYGROUND_SECTION = {
  id: 'accordion-playground-section',
  title: 'Interactive Playground',
  description: 'Explore accordion variants, sizes, icon alignments, and multiple expansion modes.',
};

export const ACCORDION_MOCK_SECTION = {
  id: 'accordion-mock',
  title: 'Dynamic FAQ API Integration',
  description: 'Render accordion entries dynamically from remote JSON API responses.',
  snippets: [
    {
      label: 'Sample Backend API Payload',
      code: ACCORDION_MOCK_PAYLOAD,
    },
    {
      label: 'Dynamic Consumer Component',
      code: ACCORDION_MOCK_CONSUMER_CODE,
    },
  ],
};

export const ACCORDION_OVERVIEW_SECTION = {
  id: 'accordion-usage',
  title: 'Introduction',
  description: 'The Accordion primitive collapses and expands dense information sections with animated transitions and customizable icons.',
  quickUsage: {
    label: 'Quick Usage',
    code: ACCORDION_QUICK_USAGE_CODE,
  },
  propsTableTitle: 'Component Props',
};

export const ACCORDION_PROPS_DATA = [
  {
    name: 'items',
    type: 'AccordionItemProps[]',
    defaultValue: '[]',
    description: 'The list of items to display in the accordion.',
  },
  {
    name: 'type',
    type: '"single" | "multiple"',
    defaultValue: '"single"',
    description: 'Whether one or multiple items can be open at a time.',
  },
  {
    name: 'collapsible',
    type: 'boolean',
    defaultValue: 'true',
    description: 'When type is "single", allows closing the open item by clicking it again.',
  },
  {
    name: 'variant',
    type: '"bordered" | "card" | "filled" | "glassmorphic" | "floating" | "gradient" | "pill" | "separated" | "minimal" | "ghost"',
    defaultValue: '"bordered"',
    description: 'The visual style of the accordion.',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: 'The vertical padding and font size of the accordion items.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether the accordion should take up the full width of its container.',
  },
  {
    name: 'expandIcon',
    type: 'ReactNode | ((isOpen: boolean) => ReactNode)',
    defaultValue: '<ChevronDown />',
    description: 'Custom icon or dynamic render function to replace the default toggle icon.',
  },
  {
    name: 'collapseIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Custom icon to display when expanded (e.g. Minus or X icon paired with Plus expandIcon).',
  },
];

export const ACCORDION_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Accordions are useful for organizing large amounts of content into digestible sections.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Multiple visual styles to match your design requirements.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];
