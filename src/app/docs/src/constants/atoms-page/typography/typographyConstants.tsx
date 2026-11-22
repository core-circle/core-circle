import React from 'react';
import { Typography, Badge } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

export const TYPOGRAPHY_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Typography' }
];

export const TYPOGRAPHY_HEADER_CONTENT = {
  title: 'Typography',
  description: 'A comprehensive typographic design system primitive providing 14 semantic text variants, 12 design token color modes, 5 font weight scales, and alignment controls.',
};

export const TYPOGRAPHY_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade typographic hierarchies for financial earnings calls, zero-trust whitepapers, AI neural benchmarks, terminal logs, and VIP editorial showcases.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 14 semantic heading, body, blockquote, inline code, and caption variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive typography sandbox with live variant, color token, font weight, and alignment controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic CMS headline and rich editorial payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TYPOGRAPHY_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-fintech-earnings',
    title: '1. FinTech Executive Financial Report & Earnings Call Theme',
    description: 'Authoritative typography hierarchy featuring primary headings, numeric balance stats, and muted footnotes.',
    previewTitle: 'Q3 FY26 Financial Summary',
    code: `<div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
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
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-zero-trust-whitepaper',
    title: '2. Zero-Trust Security Whitepaper & Architecture Matrix Theme',
    description: 'Structured editorial hierarchy with blockquotes and accent section headings.',
    previewTitle: 'Zero-Trust Policy Architecture',
    code: `<div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
  <Typography variant="h2" color="accent">
    Cryptographic Mutual TLS & Ephemeral Passkeys
  </Typography>
  <Typography variant="p">
    Every inter-service communication packet is authenticated via short-lived SPIFFE/SPIRE x509 certificates.
  </Typography>
  <Typography variant="blockquote">
    "Never trust, always verify. Security perimeters are defined by identity assertions, not network topologies."
  </Typography>
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-ai-neural-benchmark',
    title: '3. AI Neural Network Benchmark & Token Stream Theme',
    description: 'Radiant purple-indigo gradient headings and prominent metric typography.',
    previewTitle: 'Neural Benchmark Display',
    code: `<div className="p-8 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
  <Typography variant="h2" color="gradient">
    99.8% Reasoning Precision Benchmark
  </Typography>
  <Typography variant="large" weight="semibold" className="text-purple-950">
    MMLU-Pro 5-Shot Benchmark Evaluation Score
  </Typography>
  <Typography variant="muted">
    Evaluated across 12,000 multi-disciplinary logic, calculus, and software engineering questions.
  </Typography>
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-devops-terminal-log',
    title: '4. DevOps Terminal Log Stream & Error Diagnostic Theme',
    description: 'High-contrast glowing monospace code text for real-time telemetry.',
    previewTitle: 'Terminal Stream Typography',
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-3 w-full">
  <div className="flex items-center justify-between">
    <Typography variant="code" color="glow">
      SYS_INF: gRPC listener bound to 0.0.0.0:50051
    </Typography>
    <Badge variant="info" size="sm" shape="pill">Telemetry</Badge>
  </div>
  <Typography variant="code" className="text-slate-300 block">
    [2026-08-25T16:40:12Z] memory_rss_bytes: 412,876,800 • vcpu_usage: 12.4%
  </Typography>
</div>`,
    render: () => (
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
    )
  },
  {
    id: 'theming-ecommerce-editorial',
    title: '5. E-Commerce VIP Product Editorial Showcase Theme',
    description: 'Sophisticated editorial typography pairing large headings with italicized captions.',
    previewTitle: 'Editorial Product Headline',
    code: `<div className="p-8 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
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
</div>`,
    render: () => (
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
    )
  }
];

export const TYPOGRAPHY_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'typography-variants-headings',
    title: '1. Heading Scales (H1 - H6)',
    description: 'Semantic heading hierarchy scaled for responsive typography across all screen sizes.',
    customRender: () => (
      <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <Typography variant="h1">Heading 1 (4xl/5xl bold)</Typography>
        <Typography variant="h2">Heading 2 (3xl semibold)</Typography>
        <Typography variant="h3">Heading 3 (2xl semibold)</Typography>
        <Typography variant="h4">Heading 4 (xl semibold)</Typography>
        <Typography variant="h5">Heading 5 (lg semibold)</Typography>
        <Typography variant="h6">Heading 6 (base semibold)</Typography>
      </div>
    )
  },
  {
    id: 'typography-variants-body',
    title: '2. Body Text, Lead & Large',
    description: 'Comfortable reading typography with optimal line-heights and paragraph margins.',
    customRender: () => (
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
    )
  },
  {
    id: 'typography-variants-quotes-code',
    title: '3. Blockquote & Inline Code Blocks',
    description: 'Callout quotes with primary accent borders and monospace code badges.',
    customRender: () => (
      <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <Typography variant="blockquote">
          &quot;Simplicity is prerequisite for reliability.&quot; — Edsger W. Dijkstra
        </Typography>
        <Typography variant="p">
          Execute <Typography variant="code">npm install @core-circle/ui</Typography> to install design system components.
        </Typography>
      </div>
    )
  },
  {
    id: 'typography-variants-colors',
    title: '4. Design Token Colors & Radiant Gradients',
    description: 'Color variations mapped to design system semantic tokens.',
    customRender: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <Typography variant="h4" color="primary">Primary Brand Blue</Typography>
        <Typography variant="h4" color="success">Success Emerald</Typography>
        <Typography variant="h4" color="warning">Warning Amber</Typography>
        <Typography variant="h4" color="danger">Danger Rose</Typography>
        <Typography variant="h4" color="gradient">Radiant Purple Gradient</Typography>
        <Typography variant="h4" color="accent">Accent Indigo</Typography>
      </div>
    )
  },
  {
    id: 'typography-variants-weights',
    title: '5. Font Weights, Alignment & Underlines',
    description: 'Fine-grained typographic formatting controls.',
    customRender: () => (
      <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <Typography variant="p" weight="light">Light Weight (300)</Typography>
        <Typography variant="p" weight="normal">Normal Regular Weight (400)</Typography>
        <Typography variant="p" weight="medium">Medium Weight (500)</Typography>
        <Typography variant="p" weight="semibold">Semibold Weight (600)</Typography>
        <Typography variant="p" weight="bold">Bold Weight (700)</Typography>
        <Typography variant="p" italic underline>Italicized and Underlined</Typography>
      </div>
    )
  }
];

export const TYPOGRAPHY_PLAYGROUND_SECTION = {
  id: 'typography-playground-section',
  title: 'Interactive Playground',
  description: 'Experiment with 14 variants, 12 color modes, font weights, alignment, and live code generation.',
};

export const TYPOGRAPHY_MOCK_SECTION = {
  id: 'typography-mock-section',
  title: 'Dynamic CMS Content Payload Integration',
  description: 'Pattern for rendering complex rich-text article nodes from headless CMS responses.',
  snippets: [
    {
      label: 'Sample Headless CMS Article Payload',
      code: JSON.stringify({
        articleId: "art_fintech_breakthrough",
        blocks: [
          { type: "h1", color: "primary", text: "Autonomous Multi-Agent Architecture" },
          { type: "lead", color: "default", text: "How self-healing distributed pipelines minimize cloud downtime." },
          { type: "blockquote", color: "default", text: "Reliability is the foundation of customer trust." },
          { type: "p", color: "secondary", text: "By deploying lightweight edge workers with zero memory allocations, throughput quadrupled." }
        ]
      }, null, 2),
    },
    {
      label: 'Dynamic Content Renderer Component',
      code: `import React from 'react';
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
};`,
    }
  ]
};

export const TYPOGRAPHY_OVERVIEW_SECTION = {
  id: 'typography-overview-intro',
  title: 'Introduction',
  description: 'The Typography component is the foundational primitive for all textual elements in CoreCircle. It provides 14 semantic variants, 12 design token colors, 5 font weights, and full accessibility support.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Typography } from '@core-circle/ui';

<Typography variant="h1" color="primary">
  CoreCircle Design System
</Typography>
<Typography variant="lead">
  Empowering developers with unified UI primitives.
</Typography>`,
  },
  propsTableTitle: 'Component Props',
};

export const TYPOGRAPHY_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted'",
    defaultValue: "'p'",
    description: 'Semantic scale and typography hierarchy level.'
  },
  {
    name: 'color',
    type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glow' | 'accent' | 'muted' | 'white'",
    defaultValue: "'default'",
    description: 'Design token text color or radiant gradient fill.'
  },
  {
    name: 'as',
    type: 'React.ElementType',
    description: 'Custom underlying HTML element tag override (e.g. span, p, h2).'
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'normal'",
    description: 'Font weight scale from 300 to 700.'
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right' | 'justify'",
    defaultValue: "'left'",
    description: 'Horizontal text alignment.'
  },
  {
    name: 'italic',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether font style is italic.'
  },
  {
    name: 'underline',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether text has an underline with offset.'
  }
];
