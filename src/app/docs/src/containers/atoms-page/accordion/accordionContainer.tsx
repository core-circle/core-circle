'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Accordion, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Info, 
  CodeIcon, 
  Sparkles, 
  Shield, 
  Star, 
  Palette, 
  Layers, 
  Play, 
  CheckIcon, 
  CreditCard, 
  ShoppingBag, 
  Key, 
  Terminal, 
  Clock, 
  Banknotes,
  Lock
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import {
  ACCORDION_PROPS_DATA,
  ACCORDION_SAMPLE_ITEMS,
} from '../../../constants/atoms-page/accordion/accordionConstants';
import { AccordionPlayground } from '../../../components/playground/accordion/AccordionPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { AccordionContainerProps } from '../../../interface/containers/atoms/accordion.types';

export default function AccordionContainer({
  headerContent,
  breadcrumbItems
}: AccordionContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Security & Compliance FAQ */}
          <DocSection
            id="theming-security-audit"
            title="1. Enterprise Security & Compliance FAQ Theme"
            description="Crisp card layout with verified status badges and clear typography for governance and audit documentation."
          >
            <ComponentPreview
              title="Security & Compliance FAQ"
              code={`<Accordion
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
/>`}
            >
              <div className="w-full">
                <Accordion
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
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Royal VIP Subscription FAQ */}
          <DocSection
            id="theming-luxury-purple"
            title="2. Royal VIP Knowledge Base Theme"
            description="Luminous gradient cards with purple badges and gold accent highlights for high-tier memberships."
          >
            <ComponentPreview
              title="Royal VIP Subscription FAQ"
              code={`<Accordion
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
/>`}
            >
              <div className="w-full">
                <Accordion
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
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. E-Commerce Order & Fulfillment Theme */}
          <DocSection
            id="theming-ecommerce-orders"
            title="3. E-Commerce Orders & Delivery Policy Theme"
            description="Floating surface accordion with order timeline badges and international return terms."
          >
            <ComponentPreview
              title="Order Fulfillment & Returns"
              code={`<Accordion
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
/>`}
            >
              <div className="w-full">
                <Accordion
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
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Developer API & Webhooks Theme */}
          <DocSection
            id="theming-dev-api"
            title="4. Developer API & Webhook Specs Theme"
            description="Flat minimal line entries with developer endpoint badges and security signatures."
          >
            <ComponentPreview
              title="API Integration Specs"
              code={`<Accordion
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
/>`}
            >
              <div className="w-full">
                <Accordion
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
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Billing & Subscription Tiers Theme */}
          <DocSection
            id="theming-billing-tiers"
            title="5. Billing & Subscription Tiers Theme"
            description="Soft filled surface accordion with billing frequency chips and enterprise cost calculators."
          >
            <ComponentPreview
              title="Subscription Tier Details"
              code={`<Accordion
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
/>`}
            >
              <div className="w-full">
                <Accordion
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
          <DocSection id="accordion-variants-card" title="1. Card & Floating Styles" description="Elevated card modules with soft drop shadows and clean description containers.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Card Style"
                code={`<Accordion items={items} type="single" variant="card" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="card" defaultValue="1" />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Floating Style"
                code={`<Accordion items={items} type="single" variant="floating" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="floating" defaultValue="1" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="accordion-variants-separated" title="2. Separated & Bordered Styles" description="Structured segmented cards or single unified container with dividers.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Separated Style"
                code={`<Accordion items={items} type="single" variant="separated" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="separated" defaultValue="1" />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Bordered Style"
                code={`<Accordion items={items} type="single" variant="bordered" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="bordered" defaultValue="1" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="accordion-variants-glassmorphic" title="3. Glassmorphic, Gradient, Pill & Filled Styles" description="Translucent frosted backdrop, radiant gradient, capsule pill, and soft filled surfaces.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Glassmorphic Style"
                code={`<Accordion items={items} type="single" variant="glassmorphic" defaultValue="1" />`}
              >
                <div className="w-full p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="glassmorphic" defaultValue="1" />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Gradient Style"
                code={`<Accordion items={items} type="single" variant="gradient" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="gradient" defaultValue="1" />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Pill & Filled Styles"
                code={`<Accordion items={items} type="single" variant="pill" defaultValue="1" />\n<Accordion items={items} type="single" variant="filled" defaultValue="1" />`}
              >
                <div className="flex flex-col gap-6 w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="pill" defaultValue="1" />
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="filled" defaultValue="1" />
                </div>
              </ComponentPreview>
            </div>
          </DocSection>

          <DocSection id="accordion-variants-minimal" title="4. Minimal & Ghost Styles" description="Clean flat line items or borderless surfaces for dense layout integration.">
            <div className="flex flex-col gap-6 w-full">
              <ComponentPreview
                title="Minimal Flat Style"
                code={`<Accordion items={items} type="single" variant="minimal" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="minimal" defaultValue="1" />
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Ghost Style"
                code={`<Accordion items={items} type="single" variant="ghost" defaultValue="1" />`}
              >
                <div className="w-full">
                  <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant="ghost" defaultValue="1" />
                </div>
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
          id="accordion-playground-section"
          title="Interactive Playground"
          description="Explore accordion variants, sizes, icon alignments, and multiple expansion modes."
        >
          <AccordionPlayground />
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
            id="accordion-mock"
            title="Dynamic FAQ API Integration"
            description="Render accordion entries dynamically from remote JSON API responses."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend API Payload"
                code={JSON.stringify({
                  status: "success",
                  data: [
                    { id: "faq_billing_01", question: "How does metered billing work?", answer: "Usage is calculated at the end of each billing cycle based on active node hours." },
                    { id: "faq_security_02", question: "Are my API keys encrypted at rest?", answer: "Yes, all credentials are encrypted using AES-256 GCM envelope encryption." }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useEffect, useState } from 'react';
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
          <DocSection id="accordion-usage" title="Introduction" description="The Accordion primitive collapses and expands dense information sections with animated transitions and customizable icons.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Accordion } from '@core-circle/ui';

const items = [
  { id: '1', title: 'Section 1', content: 'Content 1' },
  { id: '2', title: 'Section 2', content: 'Content 2' }
];

<Accordion items={items} type="single" collapsible variant="floating" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={ACCORDION_PROPS_DATA} />
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
