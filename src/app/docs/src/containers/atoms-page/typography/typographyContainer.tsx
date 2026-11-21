'use client';

import { TypographyContainerProps } from '../../../interface/containers/atoms/typography.types';
import React from 'react';
import Link from 'next/link';
import { Typography, Breadcrumb, Tabs, Badge, Button } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Banknotes, 
  Shield, 
  Sparkles, 
  Terminal, 
  ShoppingBag, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TypographyPlayground } from '../../../components/playground/typography/typographyPlayground';
import { typographyPageStyles as s } from './typography.styles';
import { TYPOGRAPHY_PROPS_DATA } from '../../../constants/atoms-page/typography/typographyConstants';


export default function TypographyContainer({ headerContent, breadcrumbItems }: TypographyContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. FinTech Executive Earnings Report */}
          <DocSection
            id="theming-fintech-earnings"
            title="1. FinTech Executive Financial Report & Earnings Call Theme"
            description="Authoritative typography hierarchy featuring primary headings, numeric balance stats, and muted footnotes."
          >
            <ComponentPreview
              title="Q3 FY26 Financial Summary"
              code={`<div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
  <div className="flex items-center justify-between">
    <Typography variant="small" weight="bold" className="text-core-circle-primary uppercase tracking-widest">
      FINANCIAL DISCLOSURE
    </Typography>
    <Badge variant="success" size="sm" shape="pill">+18.4% YoY</Badge>
  </div>
  <Typography variant="h1" color="primary">
    $4.82B Net Operating Revenue
  </Typography>
  <Typography variant="lead">
    Driven by accelerated international cloud adoption and enterprise AI runtime consumption.
  </Typography>
  <Typography variant="muted">
    Audited in accordance with GAAP standards by independent compliance officers on August 25, 2026.
  </Typography>
</div>`}
            >
              <div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <Typography variant="small" weight="bold" className="text-core-circle-primary uppercase tracking-widest">
                    FINANCIAL DISCLOSURE
                  </Typography>
                  <Badge variant="success" size="sm" shape="pill">+18.4% YoY</Badge>
                </div>
                <Typography variant="h1" color="primary">
                  $4.82B Net Operating Revenue
                </Typography>
                <Typography variant="lead">
                  Driven by accelerated international cloud adoption and enterprise AI runtime consumption.
                </Typography>
                <Typography variant="muted">
                  Audited in accordance with GAAP standards by independent compliance officers on August 25, 2026.
                </Typography>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Zero-Trust Security Whitepaper */}
          <DocSection
            id="theming-zero-trust-whitepaper"
            title="2. Zero-Trust Security Whitepaper & Architecture Matrix Theme"
            description="Structured editorial hierarchy with blockquotes and accent section headings."
          >
            <ComponentPreview
              title="Zero-Trust Policy Architecture"
              code={`<div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
  <Typography variant="h2" color="accent">
    Cryptographic Mutual TLS & Ephemeral Passkeys
  </Typography>
  <Typography variant="p">
    Every inter-service communication packet is authenticated via short-lived SPIFFE/SPIRE x509 certificates.
  </Typography>
  <Typography variant="blockquote">
    "Never trust, always verify. Security perimeters are defined by identity assertions, not network topologies."
  </Typography>
</div>`}
            >
              <div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
                <Typography variant="h2" color="accent">
                  Cryptographic Mutual TLS & Ephemeral Passkeys
                </Typography>
                <Typography variant="p">
                  Every inter-service communication packet is authenticated via short-lived SPIFFE/SPIRE x509 certificates.
                </Typography>
                <Typography variant="blockquote">
                  &quot;Never trust, always verify. Security perimeters are defined by identity assertions, not network topologies.&quot;
                </Typography>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. AI Neural Network Hyperparameters */}
          <DocSection
            id="theming-ai-neural-benchmark"
            title="3. AI Neural Network Benchmark & Token Stream Theme"
            description="Radiant purple-indigo gradient headings and prominent metric typography."
          >
            <ComponentPreview
              title="Neural Benchmark Display"
              code={`<div className="p-8 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
  <Typography variant="h2" color="gradient">
    99.8% Reasoning Precision Benchmark
  </Typography>
  <Typography variant="large" weight="semibold" className="text-purple-950">
    MMLU-Pro 5-Shot Benchmark Evaluation Score
  </Typography>
  <Typography variant="muted">
    Evaluated across 12,000 multi-disciplinary logic, calculus, and software engineering questions.
  </Typography>
</div>`}
            >
              <div className="p-8 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
                <Typography variant="h2" color="gradient">
                  99.8% Reasoning Precision Benchmark
                </Typography>
                <Typography variant="large" weight="semibold" className="text-purple-950">
                  MMLU-Pro 5-Shot Benchmark Evaluation Score
                </Typography>
                <Typography variant="muted">
                  Evaluated across 12,000 multi-disciplinary logic, calculus, and software engineering questions.
                </Typography>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. DevOps Terminal Log Stream */}
          <DocSection
            id="theming-devops-terminal-log"
            title="4. DevOps Terminal Log Stream & Error Diagnostic Theme"
            description="High-contrast glowing monospace code text for real-time telemetry."
          >
            <ComponentPreview
              title="Terminal Stream Typography"
              code={`<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-3 w-full">
  <div className="flex items-center justify-between">
    <Typography variant="code" color="glow">
      SYS_INF: gRPC listener bound to 0.0.0.0:50051
    </Typography>
    <Badge variant="info" size="sm" shape="pill">Telemetry</Badge>
  </div>
  <Typography variant="code" className="text-slate-300 block">
    [2026-08-25T16:40:12Z] memory_rss_bytes: 412,876,800 • vcpu_usage: 12.4%
  </Typography>
</div>`}
            >
              <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <Typography variant="code" color="glow">
                    SYS_INF: gRPC listener bound to 0.0.0.0:50051
                  </Typography>
                  <Badge variant="info" size="sm" shape="pill">Telemetry</Badge>
                </div>
                <Typography variant="code" className="text-slate-300 block">
                  [2026-08-25T16:40:12Z] memory_rss_bytes: 412,876,800 • vcpu_usage: 12.4%
                </Typography>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. E-Commerce VIP Product Editorial */}
          <DocSection
            id="theming-ecommerce-editorial"
            title="5. E-Commerce VIP Product Editorial Showcase Theme"
            description="Sophisticated editorial typography pairing large headings with italicized captions."
          >
            <ComponentPreview
              title="Editorial Product Headline"
              code={`<div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <Typography variant="small" weight="bold" className="text-slate-400 uppercase tracking-widest">
    LIMITED EDITION
  </Typography>
  <Typography variant="h2" weight="bold" className="text-slate-900">
    Artisanal Titanium Chronograph Series 4
  </Typography>
  <Typography variant="lead">
    Forged from aerospace-grade Grade 5 titanium alloy with sapphire crystal anti-reflective glass.
  </Typography>
  <Typography variant="p" italic className="text-slate-500">
    Each timepiece includes a hand-engraved individual serial allocation.
  </Typography>
</div>`}
            >
              <div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
                <Typography variant="small" weight="bold" className="text-slate-400 uppercase tracking-widest">
                  LIMITED EDITION
                </Typography>
                <Typography variant="h2" weight="bold" className="text-slate-900">
                  Artisanal Titanium Chronograph Series 4
                </Typography>
                <Typography variant="lead">
                  Forged from aerospace-grade Grade 5 titanium alloy with sapphire crystal anti-reflective glass.
                </Typography>
                <Typography variant="p" italic className="text-slate-500">
                  Each timepiece includes a hand-engraved individual serial allocation.
                </Typography>
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
          {/* 1. Headings Scale */}
          <DocSection
            id="typography-variants-headings"
            title="1. Heading Scales (H1 - H6)"
            description="Semantic heading hierarchy scaled for responsive typography across all screen sizes."
          >
            <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Typography variant="h1">Heading 1 (4xl/5xl bold)</Typography>
              <Typography variant="h2">Heading 2 (3xl semibold)</Typography>
              <Typography variant="h3">Heading 3 (2xl semibold)</Typography>
              <Typography variant="h4">Heading 4 (xl semibold)</Typography>
              <Typography variant="h5">Heading 5 (lg semibold)</Typography>
              <Typography variant="h6">Heading 6 (base semibold)</Typography>
            </div>
          </DocSection>

          {/* 2. Body Text & Paragraphs */}
          <DocSection
            id="typography-variants-body"
            title="2. Body Text, Lead & Large"
            description="Comfortable reading typography with optimal line-heights and paragraph margins."
          >
            <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Typography variant="lead">
                Lead paragraph text designed for introductory blurbs and article subtitles.
              </Typography>
              <Typography variant="p">
                Standard paragraph element engineered for long-form readability, accessibility contrast compliance, and balanced spacing.
              </Typography>
              <Typography variant="large">
                Large body text for emphasized statements and highlights.
              </Typography>
            </div>
          </DocSection>

          {/* 3. Blockquotes & Inline Code */}
          <DocSection
            id="typography-variants-quotes-code"
            title="3. Blockquote & Inline Code Blocks"
            description="Callout quotes with primary accent borders and monospace code badges."
          >
            <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Typography variant="blockquote">
                &quot;Simplicity is prerequisite for reliability.&quot; — Edsger W. Dijkstra
              </Typography>
              <Typography variant="p">
                Execute <Typography variant="code">npm install @core-circle/ui</Typography> to install design system components.
              </Typography>
            </div>
          </DocSection>

          {/* 4. Color Tokens & Radiant Gradients */}
          <DocSection
            id="typography-variants-colors"
            title="4. Design Token Colors & Radiant Gradients"
            description="Color variations mapped to design system semantic tokens."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Typography variant="h4" color="primary">Primary Brand Blue</Typography>
              <Typography variant="h4" color="success">Success Emerald</Typography>
              <Typography variant="h4" color="warning">Warning Amber</Typography>
              <Typography variant="h4" color="danger">Danger Rose</Typography>
              <Typography variant="h4" color="gradient">Radiant Purple Gradient</Typography>
              <Typography variant="h4" color="accent">Accent Indigo</Typography>
            </div>
          </DocSection>

          {/* 5. Font Weights & Styles */}
          <DocSection
            id="typography-variants-weights"
            title="5. Font Weights, Alignment & Underlines"
            description="Fine-grained typographic formatting controls."
          >
            <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <Typography variant="p" weight="light">Light Weight (300)</Typography>
              <Typography variant="p" weight="normal">Normal Regular Weight (400)</Typography>
              <Typography variant="p" weight="medium">Medium Weight (500)</Typography>
              <Typography variant="p" weight="semibold">Semibold Weight (600)</Typography>
              <Typography variant="p" weight="bold">Bold Weight (700)</Typography>
              <Typography variant="p" italic underline>Italicized and Underlined</Typography>
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
          id="typography-playground-section"
          title="Interactive Playground"
          description="Experiment with 14 variants, 12 color modes, font weights, alignment, and live code generation."
        >
          <TypographyPlayground />
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
            id="typography-mock-section"
            title="Dynamic CMS Content Payload Integration"
            description="Pattern for rendering complex rich-text article nodes from headless CMS responses."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Headless CMS Article Payload"
                code={JSON.stringify({
                  articleId: "art_fintech_breakthrough",
                  blocks: [
                    { type: "h1", color: "primary", text: "Autonomous Multi-Agent Architecture" },
                    { type: "lead", color: "default", text: "How self-healing distributed pipelines minimize cloud downtime." },
                    { type: "blockquote", color: "default", text: "Reliability is the foundation of customer trust." },
                    { type: "p", color: "secondary", text: "By deploying lightweight edge workers with zero memory allocations, throughput quadrupled." }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Content Renderer Component"
                code={`import React from 'react';
import { Typography } from '@core-circle/ui';

export const CMSArticleRenderer = ({ blocks }) => {
  return (
    <article className="space-y-6 max-w-3xl">
      {blocks.map((b, i) => (
        <Typography
          key={i}
          variant={b.type}
          color={b.color}
        >
          {b.text}
        </Typography>
      ))}
    </article>
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
          <DocSection
            id="typography-overview-intro"
            title="Introduction"
            description="The Typography component is the foundational primitive for all textual elements in CoreCircle. It provides 14 semantic variants, 12 design token colors, 5 font weights, and full accessibility support."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Typography } from '@core-circle/ui';

<Typography variant="h1" color="primary">
  CoreCircle Design System
</Typography>
<Typography variant="lead">
  Empowering developers with unified UI primitives.
</Typography>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={TYPOGRAPHY_PROPS_DATA} />
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
