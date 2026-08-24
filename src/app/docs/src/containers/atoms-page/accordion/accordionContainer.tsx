'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Accordion, Typography, Badge } from '@core-circle/ui';
import { Info, CodeIcon, Sparkles, Shield, Star, Palette, Layers, Play, CheckIcon } from '@core-circle/icons';
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
          <DocSection
            id="theming-security-audit"
            title="Enterprise Security & Compliance FAQ Theme"
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

          <DocSection
            id="theming-luxury-purple"
            title="Royal VIP Knowledge Base Theme"
            description="Luminous gradient cards with purple badges and gold accent highlights."
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
                          <span>Custom SSO & Okta SCIM Provisioning</span>
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
