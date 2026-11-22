import React from 'react';
import { Watermark, Badge } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const WATERMARK_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Watermark' },
];

export const WATERMARK_HEADER_CONTENT = {
  title: 'Watermark',
  description:
    'A document security and brand protection overlay that tiles rotated text or vector patterns behind or across sensitive content surfaces to prevent unauthorized leaks.',
};

export const WATERMARK_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore legal contracts, medical charts, banking statements, and engineering blueprints.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore framing containers, custom angles, density gaps, and multi-line user stamps.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive watermark sandbox with dynamic angle, opacity, and text controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic user session watermarking for confidential SaaS dashboards.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const WATERMARK_THEME_CONFIGS = [
  {
    id: 'theming-legal-contract',
    title: '1. Legal NDA & Confidential Contract Theme',
    description: 'Heavy diagonal security stamp for high-stakes non-disclosure contracts.',
    previewTitle: 'Mutual Non-Disclosure Agreement',
    code: `<Watermark
  content="CONFIDENTIAL & PROPRIETARY"
  rotate={-25}
  opacity={0.16}
  variant="card"
  className="p-8"
>
  <div className="flex flex-col gap-3">
    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
      <span className="font-mono text-xs text-slate-500">CONTRACT #88219-NDA</span>
      <Badge size="sm" variant="outline">EXECUTION DRAFT</Badge>
    </div>
    <h3 className="text-base font-bold text-slate-900">Proprietary Algorithm Terms</h3>
    <p className="text-sm text-slate-600 leading-relaxed">
      Neither party shall disclose, reproduce, or reverse-engineer any intellectual property
      conveyed under this covenant without prior bilateral consent.
    </p>
  </div>
</Watermark>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Watermark
            content="CONFIDENTIAL & PROPRIETARY"
            rotate={-25}
            opacity={0.16}
            variant="card"
            className="p-8"
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="font-mono text-xs text-slate-500">CONTRACT #88219-NDA</span>
                <Badge size="sm" variant="outline">EXECUTION DRAFT</Badge>
              </div>
              <h3 className="text-base font-bold text-slate-900">Proprietary Algorithm Terms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Neither party shall disclose, reproduce, or reverse-engineer any intellectual property
                conveyed under this covenant without prior bilateral consent.
              </p>
            </div>
          </Watermark>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-banking-statement',
    title: '2. Wealth Management & Bank Wire Audit Theme',
    description: 'Multi-line watermark with account timestamp stamping against audit evasion.',
    previewTitle: 'Private Banking Wire Notice',
    code: `<Watermark
  content={['CORE PRIVATE BANK', 'OFFICIAL RECORD']}
  rotate={-20}
  opacity={0.14}
  variant="card"
  className="p-8"
>
  <div className="flex flex-col gap-3">
    <span className="text-xs font-semibold text-emerald-700">ESCROW SETTLEMENT VERIFIED</span>
    <h3 className="text-lg font-bold text-slate-900">$2,450,000.00 USD</h3>
    <p className="text-sm text-slate-600">
      Beneficiary account verified via Federal Reserve ACH Network. Clearing cycle completed.
    </p>
  </div>
</Watermark>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Watermark
            content={['CORE PRIVATE BANK', 'OFFICIAL RECORD']}
            rotate={-20}
            opacity={0.14}
            variant="card"
            className="p-8"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-emerald-700">ESCROW SETTLEMENT VERIFIED</span>
              <h3 className="text-lg font-bold text-slate-900">$2,450,000.00 USD</h3>
              <p className="text-sm text-slate-600">
                Beneficiary account verified via Federal Reserve ACH Network. Clearing cycle completed.
              </p>
            </div>
          </Watermark>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-healthcare-ehr',
    title: '3. HIPAA Medical Record & Patient Chart Theme',
    description: 'Subtle high-density privacy pattern guarding personal health information.',
    previewTitle: 'Diagnostic Pathology Summary',
    code: `<Watermark
  content="RESTRICTED PHI"
  gap={[80, 80]}
  opacity={0.12}
  variant="card"
  className="p-8"
>
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
      <span>PATIENT MRN: 904-228</span>
      <span>•</span>
      <span>ATTENDING: DR. V. CHEN</span>
    </div>
    <h3 className="text-base font-bold text-slate-900">Genomic Sequencing Panel</h3>
    <p className="text-sm text-slate-600">
      Negative for targeted oncogenic mutations in EGFR and KRAS loci. Follow-up scheduled in 6 months.
    </p>
  </div>
</Watermark>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Watermark
            content="RESTRICTED PHI"
            gap={[80, 80]}
            opacity={0.12}
            variant="card"
            className="p-8"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <span>PATIENT MRN: 904-228</span>
                <span>•</span>
                <span>ATTENDING: DR. V. CHEN</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Genomic Sequencing Panel</h3>
              <p className="text-sm text-slate-600">
                Negative for targeted oncogenic mutations in EGFR and KRAS loci. Follow-up scheduled in 6 months.
              </p>
            </div>
          </Watermark>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-engineering-blueprint',
    title: '4. Internal Technical Architecture Theme',
    description: 'Preliminary release watermark for engineering whitepapers and specs.',
    previewTitle: 'Distributed Cache Spec v2.4',
    code: `<Watermark
  content="DO NOT REDISTRIBUTE"
  rotate={-35}
  opacity={0.18}
  variant="card"
  className="p-8"
>
  <div className="flex flex-col gap-3">
    <Badge size="sm" variant="gradient">ENGINEERING REVIEW</Badge>
    <h3 className="text-base font-bold text-slate-900">Multi-Region Cache Invalidation</h3>
    <p className="text-sm text-slate-600">
      Proposing gossip-based bloom filters to throttle raft consensus write amplification across datacenters.
    </p>
  </div>
</Watermark>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Watermark
            content="DO NOT REDISTRIBUTE"
            rotate={-35}
            opacity={0.18}
            variant="card"
            className="p-8"
          >
            <div className="flex flex-col gap-3">
              <Badge size="sm" variant="gradient">ENGINEERING REVIEW</Badge>
              <h3 className="text-base font-bold text-slate-900">Multi-Region Cache Invalidation</h3>
              <p className="text-sm text-slate-600">
                Proposing gossip-based bloom filters to throttle raft consensus write amplification across datacenters.
              </p>
            </div>
          </Watermark>
        </div>
      </div>
    ),
  },
  {
    id: 'theming-draft-press',
    title: '5. Embargoed Public Announcement Theme',
    description: 'Horizontal embargo notice marking pre-release media publications.',
    previewTitle: 'Press Release Embargo',
    code: `<Watermark
  content="EMBARGOED UNTIL 09:00 UTC"
  rotate={0}
  opacity={0.15}
  variant="card"
  className="p-8"
>
  <div className="flex flex-col gap-3">
    <span className="text-xs font-semibold text-indigo-600">GLOBAL PRODUCT LAUNCH</span>
    <h3 className="text-base font-bold text-slate-900">CoreCircle 2.0 Design Monorepo</h3>
    <p className="text-sm text-slate-600">
      Introducing 33 new accessible foundational atoms and composable design tokens.
    </p>
  </div>
</Watermark>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <Watermark
            content="EMBARGOED UNTIL 09:00 UTC"
            rotate={0}
            opacity={0.15}
            variant="card"
            className="p-8"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-indigo-600">GLOBAL PRODUCT LAUNCH</span>
              <h3 className="text-base font-bold text-slate-900">CoreCircle 2.0 Design Monorepo</h3>
              <p className="text-sm text-slate-600">
                Introducing 33 new accessible foundational atoms and composable design tokens.
              </p>
            </div>
          </Watermark>
        </div>
      </div>
    ),
  },
];

export const WATERMARK_VARIANT_GROUPS = [
  {
    id: 'group-containers',
    title: 'Container Variants',
    description: 'Elevated card boundaries versus borderless inline document wrappers.',
    items: [
      {
        title: 'Card Surface Container',
        code: `<Watermark content="CARD CONTAINER" variant="card" className="p-6">
  <p className="text-sm text-slate-700">Enclosed within elevated rounded borders.</p>
</Watermark>`,
        render: () => (
          <Watermark content="CARD CONTAINER" variant="card" className="p-6">
            <p className="text-sm text-slate-700">Enclosed within elevated rounded borders.</p>
          </Watermark>
        ),
      },
      {
        title: 'Borderless Raw Surface',
        code: `<Watermark content="BORDERLESS" variant="default" className="p-6 bg-slate-100 rounded-xl">
  <p className="text-sm text-slate-700">Raw layout overlay without enclosing border.</p>
</Watermark>`,
        render: () => (
          <Watermark content="BORDERLESS" variant="default" className="p-6 bg-slate-100 rounded-xl">
            <p className="text-sm text-slate-700">Raw layout overlay without enclosing border.</p>
          </Watermark>
        ),
      },
    ],
  },
  {
    id: 'group-rotation-angles',
    title: 'Rotation Angle Variants',
    description: 'Standard steep diagonal, shallow pitch, and flat zero-degree alignments.',
    items: [
      {
        title: 'Steep Diagonal (-45°)',
        code: `<Watermark content="SAMPLE ONLY" rotate={-45} variant="card" className="p-6">
  <p className="text-sm text-slate-700">Steep 45-degree angle crossing full canvas diagonal.</p>
</Watermark>`,
        render: () => (
          <Watermark content="SAMPLE ONLY" rotate={-45} variant="card" className="p-6">
            <p className="text-sm text-slate-700">Steep 45-degree angle crossing full canvas diagonal.</p>
          </Watermark>
        ),
      },
      {
        title: 'Horizontal Alignment (0°)',
        code: `<Watermark content="DRAFT DOCUMENT" rotate={0} variant="card" className="p-6">
  <p className="text-sm text-slate-700">Flat zero-degree horizontal repeating pattern.</p>
</Watermark>`,
        render: () => (
          <Watermark content="DRAFT DOCUMENT" rotate={0} variant="card" className="p-6">
            <p className="text-sm text-slate-700">Flat zero-degree horizontal repeating pattern.</p>
          </Watermark>
        ),
      },
      {
        title: 'Positive Pitch (+30°)',
        code: `<Watermark content="ARCHIVED RECORD" rotate={30} variant="card" className="p-6">
  <p className="text-sm text-slate-700">Positive upward slope orientation.</p>
</Watermark>`,
        render: () => (
          <Watermark content="ARCHIVED RECORD" rotate={30} variant="card" className="p-6">
            <p className="text-sm text-slate-700">Positive upward slope orientation.</p>
          </Watermark>
        ),
      },
    ],
  },
  {
    id: 'group-density-opacity',
    title: 'Density & Opacity Variants',
    description: 'Adjust grid spacing and watermark opacity for readability balances.',
    items: [
      {
        title: 'High Density (Close Repeats)',
        code: `<Watermark content="PROTECTED" gap={[50, 50]} opacity={0.2} variant="card" className="p-6">
  <p className="text-sm text-slate-700">Tight 50px grid repeat spacing.</p>
</Watermark>`,
        render: () => (
          <Watermark content="PROTECTED" gap={[50, 50]} opacity={0.2} variant="card" className="p-6">
            <p className="text-sm text-slate-700">Tight 50px grid repeat spacing.</p>
          </Watermark>
        ),
      },
      {
        title: 'Subtle Low Opacity (0.07)',
        code: `<Watermark content="CONFIDENTIAL" opacity={0.07} variant="card" className="p-6">
  <p className="text-sm text-slate-700">Ghost watermark for text-heavy reading comfort.</p>
</Watermark>`,
        render: () => (
          <Watermark content="CONFIDENTIAL" opacity={0.07} variant="card" className="p-6">
            <p className="text-sm text-slate-700">Ghost watermark for text-heavy reading comfort.</p>
          </Watermark>
        ),
      },
      {
        title: 'Multi-Line Array Content',
        code: `<Watermark
  content={['INTERNAL USE ONLY', 'john.doe@company.com']}
  variant="card"
  className="p-6"
>
  <p className="text-sm text-slate-700">Multi-line identifier array with user email tracking.</p>
</Watermark>`,
        render: () => (
          <Watermark
            content={['INTERNAL USE ONLY', 'john.doe@company.com']}
            variant="card"
            className="p-6"
          >
            <p className="text-sm text-slate-700">Multi-line identifier array with user email tracking.</p>
          </Watermark>
        ),
      },
    ],
  },
];

export const WATERMARK_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test text phrases, rotation angles, opacity ratios, and container framing.',
};

export const WATERMARK_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Example showing user session-anchored dynamic watermarking for leak traceability.',
  snippets: [
    {
      label: 'SessionWatermarkProvider.tsx',
      code: `import React from 'react';
import { Watermark } from '@core-circle/ui';
import { useAuthSession } from '@/hooks/useAuthSession';

export const SecureDocumentViewer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthSession();

  // Multi-line watermark identifying user, IP, and audit timestamp
  const watermarkStamp = [
    'CONFIDENTIAL',
    \`\${user.email} (\${user.ipAddress})\`,
    new Date().toISOString().split('T')[0],
  ];

  return (
    <Watermark
      content={watermarkStamp}
      rotate={-24}
      opacity={0.14}
      variant="card"
      className="p-8 shadow-md"
    >
      {children}
    </Watermark>
  );
};`,
    },
  ],
};

export const WATERMARK_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start import syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Watermark } from '@core-circle/ui';

export default function DocumentPreview() {
  return (
    <Watermark content="CONFIDENTIAL" rotate={-22} opacity={0.15} variant="card" className="p-8">
      <h3>Financial Results</h3>
      <p>Quarterly earnings and forecasted runway metrics.</p>
    </Watermark>
  );
}`,
  },
};

export const WATERMARK_PROPS_DATA: PropItem[] = [
  {
    name: 'content',
    type: 'string | string[]',
    defaultValue: "'CONFIDENTIAL'",
    description: 'The text string or array of lines repeated across the watermark grid.',
  },
  {
    name: 'variant',
    type: "'default' | 'card'",
    defaultValue: "'default'",
    description: 'Surrounding container style: borderless or elevated rounded card.',
  },
  {
    name: 'rotate',
    type: 'number',
    defaultValue: '-22',
    description: 'Rotation angle in degrees for the repeated watermark stamps.',
  },
  {
    name: 'opacity',
    type: 'number',
    defaultValue: '0.14',
    description: 'Opacity multiplier between 0 and 1.',
  },
  {
    name: 'fontSize',
    type: 'number',
    defaultValue: '15',
    description: 'Font size in pixels for the rendered SVG text.',
  },
  {
    name: 'fontColor',
    type: 'string',
    defaultValue: "'rgba(15, 23, 42, 0.4)'",
    description: 'CSS color string used to fill the watermark characters.',
  },
  {
    name: 'gap',
    type: '[number, number]',
    defaultValue: '[100, 100]',
    description: 'Horizontal and vertical grid spacing intervals in pixels.',
  },
  {
    name: 'zIndex',
    type: 'number',
    defaultValue: '9',
    description: 'CSS z-index of the pointer-events-none watermark overlay layer.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    defaultValue: 'undefined',
    description: 'The interactive document, card, or dashboard content rendered underneath.',
  },
];
