import React from 'react';
import { RichText, Badge } from '@core-circle/ui';
import { Shield, Terminal, Star, DocumentText, Lock, HomeIcon } from '@core-circle/icons';
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

export const RICHTEXT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'RichText' }
];

export const RICHTEXT_HEADER_CONTENT = {
  title: 'RichText',
  description: 'A component for rendering complex HTML or formatted content with consistent design system styles. Perfect for blog posts, documentation, and user-generated content.',
};

export const RICHTEXT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-ready themes for security compliance, API release notes, VIP editorials, and knowledge bases.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 11 surface and typography variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive playground to test variants and content templates.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Headless CMS integration and dynamic article viewer examples.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage guide and component properties.',
  },
];

export const RICHTEXT_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-security-compliance',
    title: '1. Enterprise Security & Compliance Briefing Theme',
    description: 'Crisp card layout with verified status chips, cryptographic hash callouts, and structured governance policies.',
    previewTitle: 'Security & Governance Audit Briefing',
    code: `<div className="flex flex-col gap-4 w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Shield size={18} className="text-emerald-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Security & Audit Compliance Report</span>
    </div>
    <Badge variant="success" size="sm" shape="pill">SOC2 Type II Certified</Badge>
  </div>
  
  <RichText
    variant="card"
    size="base"
    content={\`
      <h2>Data Residency & Envelope Encryption Guarantee</h2>
      <p>All CoreCircle customer telemetry and workspace metadata are encrypted in-transit via <strong>TLS 1.3</strong> and at rest using <strong>AES-256 GCM</strong> envelope encryption with customer-managed keys (CMK).</p>
      <blockquote>
        Audited report reference: <code>SEC-AUDIT-2026-Q3-PASS</code> | Independent auditor: <em>KPMG Governance Labs</em>
      </blockquote>
      <h3>Key Governance Pillars</h3>
      <ul>
        <li>Automated hourly penetration testing with zero critical vulnerability SLA.</li>
        <li>Immutable audit logs preserved across multi-region geographic backups.</li>
        <li>Role-Based Access Control (RBAC) integrated directly with enterprise IdPs via SCIM 2.0.</li>
      </ul>
    \`}
  />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-emerald-600" />
            <span className="font-bold text-core-circle-text-main text-sm">Security & Audit Compliance Report</span>
          </div>
          <Badge variant="success" size="sm" shape="pill">SOC2 Type II Certified</Badge>
        </div>
        
        <RichText
          variant="card"
          size="base"
          content={`
            <h2>Data Residency & Envelope Encryption Guarantee</h2>
            <p>All CoreCircle customer telemetry and workspace metadata are encrypted in-transit via <strong>TLS 1.3</strong> and at rest using <strong>AES-256 GCM</strong> envelope encryption with customer-managed keys (CMK).</p>
            <blockquote>
              Audited report reference: <code>SEC-AUDIT-2026-Q3-PASS</code> | Independent auditor: <em>KPMG Governance Labs</em>
            </blockquote>
            <h3>Key Governance Pillars</h3>
            <ul>
              <li>Automated hourly penetration testing with zero critical vulnerability SLA.</li>
              <li>Immutable audit logs preserved across multi-region geographic backups.</li>
              <li>Role-Based Access Control (RBAC) integrated directly with enterprise IdPs via SCIM 2.0.</li>
            </ul>
          `}
        />
      </div>
    )
  },
  {
    id: 'theming-dev-changelog',
    title: '2. Developer API Release Notes & Changelog Theme',
    description: 'High-contrast dark terminal container with monospace endpoint code blocks, versioning tags, and release notes.',
    previewTitle: 'API Release Notes & Migration Guide',
    code: `<div className="flex flex-col gap-4 w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Terminal size={18} className="text-core-circle-primary" />
      <span className="font-bold text-core-circle-text-main text-sm">Core Engine API v4.2.0</span>
    </div>
    <Badge variant="primary" size="sm" shape="pill">v4.2.0 Stable</Badge>
  </div>
  
  <RichText
    variant="dark"
    size="base"
    content={\`
      <h2>Release Highlights: Streaming Webhook Pipeline</h2>
      <p>This release exposes real-time SSE streaming for long-running batch migrations and introduces native JWT signature validation.</p>
      <h3>Quick Migration Example</h3>
      <pre><code>// Initialize client with authenticated JWT bearer
const client = new CoreCircleClient({
  apiKey: process.env.CORE_CIRCLE_API_KEY,
  endpoint: 'https://api.corecircle.io/v4'
});</code></pre>
      <p>For complete endpoint documentation, refer to the <a href="#">Developer Documentation Portal</a>.</p>
    \`}
  />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-core-circle-primary" />
            <span className="font-bold text-core-circle-text-main text-sm">Core Engine API v4.2.0</span>
          </div>
          <Badge variant="primary" size="sm" shape="pill">v4.2.0 Stable</Badge>
        </div>
        
        <RichText
          variant="dark"
          size="base"
          content={`
            <h2>Release Highlights: Streaming Webhook Pipeline</h2>
            <p>This release exposes real-time SSE streaming for long-running batch migrations and introduces native JWT signature validation.</p>
            <h3>Quick Migration Example</h3>
            <pre><code>// Initialize client with authenticated JWT bearer
const client = new CoreCircleClient({
  apiKey: process.env.CORE_CIRCLE_API_KEY,
  endpoint: 'https://api.corecircle.io/v4'
});</code></pre>
            <p>For complete endpoint documentation, refer to the <a href="#">Developer Documentation Portal</a>.</p>
          `}
        />
      </div>
    )
  },
  {
    id: 'theming-vip-editorial',
    title: '3. VIP Member Editorial & Product Launch Theme',
    description: 'Radiant gradient headings, gold stars, and elevated editorial aesthetics for exclusive product announcements.',
    previewTitle: 'Executive Circle Launch Announcement',
    code: `<div className="flex flex-col gap-4 w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Star size={18} className="text-amber-500 fill-amber-500" />
      <span className="font-bold text-purple-950 text-sm">Executive Member Editorial</span>
    </div>
    <Badge variant="gradient" size="sm" shape="pill">VIP Exclusive</Badge>
  </div>
  
  <RichText
    variant="gradient"
    size="base"
    content={\`
      <h1>Introducing the Executive Concierge Cloud</h1>
      <p>Designed exclusively for tier-1 enterprises, the <strong>Executive Concierge Cloud</strong> provides dedicated hardware instances, sub-millisecond database replicas, and private Slack access to our principal architect team.</p>
      <blockquote>
        "Our mission is to elevate enterprise software craft to the level of haute horlogerie."
      </blockquote>
      <p>Members can request automated cluster provisioning via their dedicated account dashboard.</p>
    \`}
  />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-amber-500 fill-amber-500" />
            <span className="font-bold text-purple-950 text-sm">Executive Member Editorial</span>
          </div>
          <Badge variant="gradient" size="sm" shape="pill">VIP Exclusive</Badge>
        </div>
        
        <RichText
          variant="gradient"
          size="base"
          content={`
            <h1>Introducing the Executive Concierge Cloud</h1>
            <p>Designed exclusively for tier-1 enterprises, the <strong>Executive Concierge Cloud</strong> provides dedicated hardware instances, sub-millisecond database replicas, and private Slack access to our principal architect team.</p>
            <blockquote>
              "Our mission is to elevate enterprise software craft to the level of haute horlogerie."
            </blockquote>
            <p>Members can request automated cluster provisioning via their dedicated account dashboard.</p>
          `}
        />
      </div>
    )
  },
  {
    id: 'theming-support-kb',
    title: '4. Customer Support Knowledge Base & Troubleshooting Theme',
    description: 'Brand primary accent-bordered container with structured troubleshooting steps and clear callout highlights.',
    previewTitle: 'Support Knowledge Base Article',
    code: `<div className="flex flex-col gap-4 w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <DocumentText size={18} className="text-blue-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Troubleshooting Guide #KB-204</span>
    </div>
    <Badge variant="info" size="sm" shape="pill">Verified Guide</Badge>
  </div>
  
  <RichText
    variant="accent"
    size="base"
    content={\`
      <h2>Resolving TLS Certificate Renewal Warnings</h2>
      <p>If your custom domain shows an SSL certificate expiry warning within 7 days, verify your DNS CAA records before initiating manual renewal.</p>
      <h3>Recommended Action Items</h3>
      <ol>
        <li>Confirm <code>issue "letsencrypt.org"</code> exists in your authoritative DNS zone.</li>
        <li>Navigate to <em>Settings &gt; Domains</em> and click <strong>Force Re-Verify</strong>.</li>
        <li>Allow 3-5 minutes for edge propagation across global PoPs.</li>
      </ol>
      <blockquote>
        Still encountering issues? Contact our 24/7 technical support war room for immediate assistance.
      </blockquote>
    \`}
  />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DocumentText size={18} className="text-blue-600" />
            <span className="font-bold text-core-circle-text-main text-sm">Troubleshooting Guide #KB-204</span>
          </div>
          <Badge variant="info" size="sm" shape="pill">Verified Guide</Badge>
        </div>
        
        <RichText
          variant="accent"
          size="base"
          content={`
            <h2>Resolving TLS Certificate Renewal Warnings</h2>
            <p>If your custom domain shows an SSL certificate expiry warning within 7 days, verify your DNS CAA records before initiating manual renewal.</p>
            <h3>Recommended Action Items</h3>
            <ol>
              <li>Confirm <code>issue "letsencrypt.org"</code> exists in your authoritative DNS zone.</li>
              <li>Navigate to <em>Settings &gt; Domains</em> and click <strong>Force Re-Verify</strong>.</li>
              <li>Allow 3-5 minutes for edge propagation across global PoPs.</li>
            </ol>
            <blockquote>
              Still encountering issues? Contact our 24/7 technical support war room for immediate assistance.
            </blockquote>
          `}
        />
      </div>
    )
  },
  {
    id: 'theming-legal-terms',
    title: '5. Terms of Service & Privacy Compliance Theme',
    description: 'Crisp outlined container with clean typography and structured legal clauses.',
    previewTitle: 'Master Service Agreement Summary',
    code: `<div className="flex flex-col gap-4 w-full">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Lock size={18} className="text-slate-600" />
      <span className="font-bold text-core-circle-text-main text-sm">Master Service Agreement (MSA)</span>
    </div>
    <Badge variant="outline" size="sm" shape="pill">Effective 2026</Badge>
  </div>
  
  <RichText
    variant="bordered"
    size="base"
    content={\`
      <h2>Section 4. Service Level Availability (99.99%)</h2>
      <p>CoreCircle warrants that the SaaS Platform services will maintain a Monthly Uptime Percentage of not less than <strong>99.99%</strong> during each calendar month billing cycle.</p>
      <h3>4.1 SLA Financial Service Credits</h3>
      <ul>
        <li><strong>&lt; 99.99% to 99.90%:</strong> 10% Service Credit applied to next invoice.</li>
        <li><strong>&lt; 99.90% to 99.00%:</strong> 25% Service Credit applied to next invoice.</li>
        <li><strong>&lt; 99.00%:</strong> 50% Service Credit applied to next invoice.</li>
      </ul>
    \`}
  />
</div>`,
    render: () => (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-slate-600" />
            <span className="font-bold text-core-circle-text-main text-sm">Master Service Agreement (MSA)</span>
          </div>
          <Badge variant="outline" size="sm" shape="pill">Effective 2026</Badge>
        </div>
        
        <RichText
          variant="bordered"
          size="base"
          content={`
            <h2>Section 4. Service Level Availability (99.99%)</h2>
            <p>CoreCircle warrants that the SaaS Platform services will maintain a Monthly Uptime Percentage of not less than <strong>99.99%</strong> during each calendar month billing cycle.</p>
            <h3>4.1 SLA Financial Service Credits</h3>
            <ul>
              <li><strong>&lt; 99.99% to 99.90%:</strong> 10% Service Credit applied to next invoice.</li>
              <li><strong>&lt; 99.90% to 99.00%:</strong> 25% Service Credit applied to next invoice.</li>
              <li><strong>&lt; 99.00%:</strong> 50% Service Credit applied to next invoice.</li>
            </ul>
          `}
        />
      </div>
    )
  }
];

export const RICHTEXT_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'richtext-variants-card',
    title: '1. Card & Bordered Surface Containers',
    description: 'Structured card containers with soft drop shadows or clean crisp borders.',
    items: [
      {
        title: 'Card Style',
        code: `<RichText variant="card" content="<h2>Card Title</h2><p>Padded container with subtle drop shadow.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="card"
              content="<h2>Card Surface Style</h2><p>Elevated white container with structured padding, subtle borders, and harmonious design token typography.</p>"
            />
          </div>
        )
      },
      {
        title: 'Bordered Style',
        code: `<RichText variant="bordered" content="<h2>Bordered Title</h2><p>Outlined container with crisp borders.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="bordered"
              content="<h2>Bordered Container Style</h2><p>Crisp border outlines with balanced margins, ideal for documentation guides and legal agreements.</p>"
            />
          </div>
        )
      }
    ]
  },
  {
    id: 'richtext-variants-floating',
    title: '2. Floating & Glassmorphic Translucent Styles',
    description: 'Elevated interactive shadows and frosted glass backdrop blur surfaces.',
    items: [
      {
        title: 'Floating Elevated Style',
        code: `<RichText variant="floating" content="<h2>Floating Surface</h2><p>Elevated container with soft floating depth.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="floating"
              content="<h2>Floating Elevated Style</h2><p>Enhanced depth with elevation shadows and smooth hover transition effects.</p>"
            />
          </div>
        )
      },
      {
        title: 'Glassmorphic Style',
        code: `<RichText variant="glassmorphic" content="<h2>Glassmorphic Surface</h2><p>Frosted glass backdrop blur with translucent borders.</p>" />`,
        render: () => (
          <div className="w-full p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-3xl">
            <RichText
              variant="glassmorphic"
              content="<h2>Glassmorphic Frosted Style</h2><p>Translucent backdrop blur with subtle borders for ultra-modern dashboard widgets.</p>"
            />
          </div>
        )
      }
    ]
  },
  {
    id: 'richtext-variants-gradient',
    title: '3. Gradient Accent & Tinted Highlight Styles',
    description: 'Vibrant gradient heading highlights and vertical brand accent borders.',
    items: [
      {
        title: 'Gradient Accent Style',
        code: `<RichText variant="gradient" content="<h1>Radiant Gradient</h1><p>Luminous gradient headings with styled quotes.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="gradient"
              content="<h1>Radiant Gradient Heading</h1><p>Vibrant gradient color highlights on headings with tinted quote backgrounds and stylish links.</p>"
            />
          </div>
        )
      },
      {
        title: 'Accent Border Style',
        code: `<RichText variant="accent" content="<h2>Accent Callout</h2><p>Left border highlight for key callout sections.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="accent"
              content="<h2>Accent Callout Style</h2><p>Thick primary vertical accent border with subtle blue tint for alerts, tips, and important callouts.</p>"
            />
          </div>
        )
      }
    ]
  },
  {
    id: 'richtext-variants-filled-dark',
    title: '4. Filled Soft Page & High-Contrast Dark Styles',
    description: 'Subtle page surface wash or high-contrast inverted dark container.',
    items: [
      {
        title: 'Filled Soft Page Style',
        code: `<RichText variant="filled" content="<h2>Filled Surface</h2><p>Soft slate wash background.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="filled"
              content="<h2>Filled Page Surface</h2><p>Soft tinted page background container for seamless layout grouping without hard borders.</p>"
            />
          </div>
        )
      },
      {
        title: 'Dark Mode Style',
        code: `<RichText variant="dark" content="<h2>Dark Mode Container</h2><p>High-contrast dark background with crisp white typography.</p>" />`,
        render: () => (
          <div className="w-full">
            <RichText
              variant="dark"
              content="<h2>Dark Terminal Mode</h2><p>High-contrast slate-900 surface with crisp white headings, light blue code highlights, and styled blockquotes.</p>"
            />
          </div>
        )
      }
    ]
  },
  {
    id: 'richtext-variants-minimal',
    title: '5. Minimal, Ghost & Size Scales',
    description: 'Compact line height, borderless ghost styling, and small/base/large typography scales.',
    items: [
      {
        title: 'Minimal Compact & Ghost Styles',
        code: `<RichText variant="minimal" size="sm" content="<h3>Dense Sidebar</h3><p>Tight margins and compact line height.</p>" />
<RichText variant="ghost" size="base" content="<p>Translucent ghost styling.</p>" />`,
        render: () => (
          <div className="flex flex-col gap-4 w-full">
            <div className="p-4 bg-slate-50 border rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Minimal Dense Scale (sm)</span>
              <RichText
                variant="minimal"
                size="sm"
                content="<h3>Compact Widget Content</h3><p>Designed specifically for dense sidebar drawers, popup cards, and nested table cells.</p>"
              />
            </div>
            
            <div className="p-4 border rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Ghost Borderless Style (base)</span>
              <RichText
                variant="ghost"
                size="base"
                content="<p>Lightweight borderless surface that inherits parent background colors naturally.</p>"
              />
            </div>
          </div>
        )
      }
    ]
  }
];

export const RICHTEXT_PLAYGROUND_SECTION = {
  id: 'richtext-playground-section',
  title: 'Interactive Playground',
  description: 'Explore 11 surface variants, typography scales, content presets, and generated markup in real-time.',
};

export const RICHTEXT_MOCK_SECTION = {
  id: 'richtext-mock',
  title: 'Dynamic Headless CMS & Markdown API Integration',
  description: 'Fetch and safely render formatted HTML / Markdown payloads from a headless CMS API.',
  snippets: [
    {
      label: 'Sample Headless CMS Article Payload',
      code: JSON.stringify({
        id: "post_9831",
        slug: "introducing-corecircle-v3",
        title: "Scaling Design Systems Across Multi-Repo Architecture",
        publishedAt: "2026-08-25T12:00:00Z",
        author: "CoreCircle Architecture Team",
        bodyHtml: "<h2>Atomic Design at Scale</h2><p>Monorepo structure guarantees that shared tokens automatically propagate across all consumer apps.</p><blockquote>Zero drift across design and code.</blockquote>"
      }, null, 2),
    },
    {
      label: 'Dynamic Consumer Article Component',
      code: `import React, { useEffect, useState } from 'react';
import { RichText, Badge, Typography } from '@core-circle/ui';

export const CmsArticleViewer = ({ slug }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(\`/api/v1/posts/\${slug}\`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [slug]);

  if (!post) return null;

  return (
    <article className="flex flex-col gap-6 max-w-3xl">
      <header className="space-y-3">
        <Badge variant="primary" size="sm" shape="pill">Article</Badge>
        <Typography variant="h1">{post.title}</Typography>
        <Typography variant="span" className="text-xs text-core-circle-text-muted">
          Published by {post.author}
        </Typography>
      </header>

      <RichText
        variant="card"
        size="lg"
        content={post.bodyHtml}
      />
    </article>
  );
};`,
    }
  ]
};

export const RICHTEXT_OVERVIEW_SECTION = {
  id: 'richtext-intro',
  title: 'Introduction',
  description: 'The RichText primitive safely formats raw HTML and Markdown strings into beautiful design system typography with customizable surface themes, size scales, and accessible markup.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { RichText } from '@core-circle/ui';

<RichText
  variant="card"
  size="base"
  content="<h1>Welcome</h1><p>Formatted HTML content rendered with CoreCircle design tokens.</p>"
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const RICHTEXT_PROPS_DATA: PropItem[] = [
  {
    name: 'content',
    type: 'string',
    description: 'The raw HTML string to be safely sanitized and formatted with design system typography rules.'
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered' | 'floating' | 'glassmorphic' | 'gradient' | 'filled' | 'minimal' | 'ghost' | 'accent' | 'dark'",
    defaultValue: "'default'",
    description: 'Visual surface, border, and elevation theme of the rich text container.'
  },
  {
    name: 'size',
    type: "'sm' | 'base' | 'lg'",
    defaultValue: "'base'",
    description: 'Typography scale and heading sizing hierarchy.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS class names to apply custom overrides.'
  }
];
