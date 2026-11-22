import React from 'react';
import { Markdown } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const MARKDOWN_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Markdown' },
];

export const MARKDOWN_HEADER_CONTENT = {
  title: 'Markdown',
  description:
    'An in-browser Markdown parser and rich prose renderer styled with CoreCircle typography tokens supporting headings, blockquotes, code blocks, lists, and links.',
};

export const MARKDOWN_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore technical whitepapers, product changelogs, API documentation, and postmortems.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore prose typography, elevated cards, blockquotes, and lists.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test live Markdown rendering and sanitization.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic blog post or CMS article renderer integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sampleChangelog = `## Version 2.4.0 Release Notes

We are thrilled to announce **CoreCircle v2.4.0** with 33 new accessible foundational atoms!

### Highlights
- **Command Palette (\`⌘K\`)**: Rapid keyboard-first action navigation.
- **DiffViewer**: Side-by-side Git code review viewport.
- **Markdown**: Pure TypeScript in-browser document renderer.

> Note: All primitives are compiled with 0 external runtime dependencies.`;

export const MARKDOWN_THEME_CONFIGS = [
  {
    id: 'theming-changelog',
    title: '1. Product Release Changelog Theme',
    description: 'Formatted version update announcements and feature release lists.',
    previewTitle: 'v2.4.0 Changelog',
    code: `<Markdown content={sampleChangelog} variant="card" />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <Markdown content={sampleChangelog} variant="card" />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-whitepaper',
    title: '2. Technical Engineering Whitepaper Theme',
    description: 'Prose layout optimized for reading density and typographic hierarchy.',
    previewTitle: 'Distributed Consensus Whitepaper',
    code: `<Markdown
  content="# Raft Leader Election Protocol\\n\\nIn **Raft**, leader election operates using randomized timer heartbeats.\\n\\n> \\"Safety is never compromised, even in network partitions.\\"\\n\\n1. Follower timeout triggers candidate state.\\n2. RequestVote RPC broadcast.\\n3. Quorum majority validation."
  variant="prose"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl bg-white p-6 rounded-2xl border border-slate-200">
          <Markdown
            content={`# Raft Leader Election Protocol\n\nIn **Raft**, leader election operates using randomized timer heartbeats.\n\n> "Safety is never compromised, even in network partitions."\n\n1. Follower timeout triggers candidate state.\n2. RequestVote RPC broadcast.\n3. Quorum majority validation.`}
            variant="prose"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-api-guide',
    title: '3. API Developer Quickstart Guide Theme',
    description: 'Code-heavy developer instructions and endpoint parameters.',
    previewTitle: 'Authentication Quickstart',
    code: `<Markdown
  content="### Authenticating API Requests\\n\\nPass your bearer secret key in the \`Authorization\` header:\\n\\n\`\`\`bash\\ncurl https://api.corecircle.io/v1/user \\\\\\n  -H \\"Authorization: Bearer cc_test_8819\\"\\n\`\`\`"
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <Markdown
            content={`### Authenticating API Requests\n\nPass your bearer secret key in the \`Authorization\` header:\n\n\`\`\`bash\ncurl https://api.corecircle.io/v1/user \\\n  -H "Authorization: Bearer cc_test_8819"\n\`\`\``}
            variant="card"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-postmortem',
    title: '4. Engineering Incident Postmortem Theme',
    description: 'Structured root cause analysis and resolution timeline.',
    previewTitle: 'Incident Report #INC-902',
    code: `<Markdown
  content="## Incident Summary: Cache Cluster Latency\\n\\n- **Impact**: 1.2% elevated response latency\\n- **Root Cause**: BGP route flapping during maintenance\\n- **Resolution**: Static peering route failover triggered"
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <Markdown
            content={`## Incident Summary: Cache Cluster Latency\n\n- **Impact**: 1.2% elevated response latency\n- **Root Cause**: BGP route flapping during maintenance\n- **Resolution**: Static peering route failover triggered`}
            variant="card"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-legal-covenant',
    title: '5. Terms of Service & Privacy Covenant Theme',
    description: 'Formal policy document layout with legal numbering.',
    previewTitle: 'Privacy Policy',
    code: `<Markdown
  content="## Data Retention Covenant\\n\\n1. User telemetric logs are retained for **90 days**.\\n2. Encryption at rest utilizes **AES-256** standards.\\n3. Right to erasure requests are executed within 48 hours."
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <Markdown
            content={`## Data Retention Covenant\n\n1. User telemetric logs are retained for **90 days**.\n2. Encryption at rest utilizes **AES-256** standards.\n3. Right to erasure requests are executed within 48 hours.`}
            variant="card"
          />
        </div>
      </div>
    ),
  },
];

export const MARKDOWN_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Container Surface Variants',
    description: 'Elevated card surface, prose typography column, and borderless raw view.',
    items: [
      {
        title: 'Elevated Card Surface',
        code: `<Markdown content={sampleChangelog} variant="card" />`,
        render: () => (
          <Markdown content={sampleChangelog} variant="card" />
        ),
      },
      {
        title: 'Prose Typography Layout',
        code: `<Markdown content={sampleChangelog} variant="prose" />`,
        render: () => (
          <Markdown content={sampleChangelog} variant="prose" />
        ),
      },
    ],
  },
  {
    id: 'group-elements',
    title: 'Markdown Syntax Elements',
    description: 'Blockquotes, unordered lists, ordered lists, and code blocks.',
    items: [
      {
        title: 'Blockquote Highlight',
        code: `<Markdown content="> This is an important security notice regarding API token rotations." />`,
        render: () => (
          <Markdown content="> This is an important security notice regarding API token rotations." />
        ),
      },
      {
        title: 'Bullet List & Inline Code',
        code: `<Markdown content="- Feature 1: Built with \`class-variance-authority\`\\n- Feature 2: Strict **TypeScript** typing" />`,
        render: () => (
          <Markdown content={`- Feature 1: Built with \`class-variance-authority\`\n- Feature 2: Strict **TypeScript** typing`} />
        ),
      },
    ],
  },
];

export const MARKDOWN_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test Markdown parsing, headers, lists, blockquotes, and code blocks.',
};

export const MARKDOWN_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Dynamic headless CMS blog article renderer integration.',
  snippets: [
    {
      label: 'BlogPostViewer.tsx',
      code: `import React from 'react';
import { Markdown } from '@core-circle/ui';

export const BlogPostViewer: React.FC<{ post: { title: string; markdownBody: string } }> = ({
  post,
}) => {
  return (
    <article className="w-full max-w-3xl mx-auto py-8">
      <Markdown content={post.markdownBody} variant="prose" sanitize />
    </article>
  );
};`,
    },
  ],
};

export const MARKDOWN_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Markdown } from '@core-circle/ui';

export default function MyDoc() {
  return <Markdown content="# Hello World\\nThis is **bold** text." variant="card" />;
}`,
  },
};

export const MARKDOWN_PROPS_DATA: PropItem[] = [
  {
    name: 'content',
    type: 'string',
    defaultValue: "''",
    description: 'Raw markdown string containing headers, lists, code, and links.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'prose'",
    defaultValue: "'default'",
    description: 'Visual layout style: raw inline, elevated card surface, or prose column.',
  },
  {
    name: 'sanitize',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to strip dangerous script tags and JavaScript execution vectors.',
  },
];
