'use client';

import React from 'react';
import { TreeView } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const TREE_VIEW_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TreeView' },
];

export const TREE_VIEW_HEADER_CONTENT = {
  title: 'TreeView',
  description:
    'A hierarchical tree and collapsible folder directory navigator featuring nested nodes, indent guidelines, selection states, and keyboard navigation.',
};

export const TREE_VIEW_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore file explorers, cloud storage browsers, org charts, and component registries.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore container framing, guide line toggles, deep nesting, and selection styles.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test hierarchical expansion and selection states.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic file system directory tree reader integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sampleTree = [
  {
    id: 'packages',
    label: 'packages',
    defaultExpanded: true,
    children: [
      {
        id: 'ui',
        label: 'ui',
        defaultExpanded: true,
        children: [
          { id: 'atoms', label: 'src/components/atoms' },
          { id: 'molecules', label: 'src/components/molecules' },
        ],
      },
      {
        id: 'theme',
        label: 'theme',
        children: [
          { id: 'tokens.ts', label: 'tokens.ts' },
        ],
      },
    ],
  },
  { id: 'package.json', label: 'package.json' },
];

export const TREE_VIEW_THEME_CONFIGS = [
  {
    id: 'theming-ide-explorer',
    title: '1. Monorepo Project Explorer Theme',
    description: 'Standard file/folder directory explorer for software development workflows.',
    previewTitle: 'Project Explorer',
    code: `<TreeView data={sampleTree} variant="card" showGuideLines />`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <TreeView data={sampleTree} variant="card" showGuideLines />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-s3-bucket',
    title: '2. Cloud S3 Storage Bucket Theme',
    description: 'Hierarchical file storage buckets and object assets.',
    previewTitle: 'S3 Bucket: assets.corecircle.io',
    code: `<TreeView
  data={[
    {
      id: 'uploads',
      label: 'uploads/2026',
      defaultExpanded: true,
      children: [
        { id: 'hero.png', label: 'hero-banner.png' },
        { id: 'logo.svg', label: 'brand-logo.svg' },
      ],
    },
  ]}
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <TreeView
            data={[
              {
                id: 'uploads',
                label: 'uploads/2026',
                defaultExpanded: true,
                children: [
                  { id: 'hero.png', label: 'hero-banner.png' },
                  { id: 'logo.svg', label: 'brand-logo.svg' },
                ],
              },
            ]}
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-org-hierarchy',
    title: '3. Corporate Department Hierarchy Theme',
    description: 'Organizational chart mapping teams and subdivisions.',
    previewTitle: 'CoreCircle Engineering Org',
    code: `<TreeView
  data={[
    {
      id: 'eng',
      label: 'Engineering (64)',
      defaultExpanded: true,
      children: [
        { id: 'design-sys', label: 'Design Systems (8)' },
        { id: 'infra', label: 'Platform & SRE (12)' },
      ],
    },
  ]}
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <TreeView
            data={[
              {
                id: 'eng',
                label: 'Engineering (64)',
                defaultExpanded: true,
                children: [
                  { id: 'design-sys', label: 'Design Systems (8)' },
                  { id: 'infra', label: 'Platform & SRE (12)' },
                ],
              },
            ]}
            variant="card"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-api-routes',
    title: '4. REST API Endpoint Route Tree Theme',
    description: 'Nested HTTP API routing tree showing controller endpoints.',
    previewTitle: 'API Route Registry',
    code: `<TreeView
  data={[
    {
      id: 'api-v1',
      label: '/api/v1',
      defaultExpanded: true,
      children: [
        { id: 'get-users', label: 'GET /users' },
        { id: 'post-auth', label: 'POST /auth/token' },
      ],
    },
  ]}
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <TreeView
            data={[
              {
                id: 'api-v1',
                label: '/api/v1',
                defaultExpanded: true,
                children: [
                  { id: 'get-users', label: 'GET /users' },
                  { id: 'post-auth', label: 'POST /auth/token' },
                ],
              },
            ]}
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-design-tokens',
    title: '5. Design Token Taxonomy Theme',
    description: 'Category tree for color swatches, spacing scales, and radii.',
    previewTitle: 'Design Token Library',
    code: `<TreeView
  data={[
    {
      id: 'tokens',
      label: 'tokens',
      defaultExpanded: true,
      children: [
        { id: 'colors', label: 'colors.semantic' },
        { id: 'radii', label: 'radii.primitives' },
      ],
    },
  ]}
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-sm">
          <TreeView
            data={[
              {
                id: 'tokens',
                label: 'tokens',
                defaultExpanded: true,
                children: [
                  { id: 'colors', label: 'colors.semantic' },
                  { id: 'radii', label: 'radii.primitives' },
                ],
              },
            ]}
            variant="card"
          />
        </div>
      </div>
    ),
  },
];

export const TREE_VIEW_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Container Surface Variants',
    description: 'Elevated card surface, bordered container, and transparent layout.',
    items: [
      {
        title: 'Elevated Card Surface',
        code: `<TreeView data={sampleTree} variant="card" />`,
        render: () => (
          <TreeView data={sampleTree} variant="card" />
        ),
      },
      {
        title: 'High-Contrast Bordered',
        code: `<TreeView data={sampleTree} variant="bordered" />`,
        render: () => (
          <TreeView data={sampleTree} variant="bordered" />
        ),
      },
      {
        title: 'Transparent Inline Layout',
        code: `<TreeView data={sampleTree} variant="default" />`,
        render: () => (
          <TreeView data={sampleTree} variant="default" />
        ),
      },
    ],
  },
  {
    id: 'group-guidelines',
    title: 'Guideline & Selection Options',
    description: 'Indent vertical guide borders and selection highlighting.',
    items: [
      {
        title: 'Without Vertical Guidelines',
        code: `<TreeView data={sampleTree} showGuideLines={false} variant="card" />`,
        render: () => (
          <TreeView data={sampleTree} showGuideLines={false} variant="card" />
        ),
      },
      {
        title: 'Pre-Selected Node Highlight',
        code: `<TreeView data={sampleTree} selectedId="packages" variant="card" />`,
        render: () => (
          <TreeView data={sampleTree} selectedId="packages" variant="card" />
        ),
      },
    ],
  },
];

export const TREE_VIEW_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test hierarchical nesting, node selection states, and guideline toggles.',
};

export const TREE_VIEW_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Interactive IDE sidebar file tree integration pattern.',
  snippets: [
    {
      label: 'SidebarFileExplorer.tsx',
      code: `import React, { useState } from 'react';
import { TreeView, TreeNode } from '@core-circle/ui';

export const SidebarFileExplorer: React.FC<{ files: TreeNode[] }> = ({ files }) => {
  const [activeFileId, setActiveFileId] = useState<string>('index.ts');

  return (
    <aside className="w-64 h-full border-r border-slate-200 p-2 bg-slate-50/50">
      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        Explorer
      </div>
      <TreeView
        data={files}
        selectedId={activeFileId}
        onSelect={(node) => setActiveFileId(node.id)}
        showGuideLines
      />
    </aside>
  );
};`,
    },
  ],
};

export const TREE_VIEW_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { TreeView } from '@core-circle/ui';

export default function MyExplorer() {
  const data = [
    {
      id: 'root',
      label: 'src',
      children: [{ id: 'app', label: 'App.tsx' }],
    },
  ];

  return <TreeView data={data} variant="card" />;
}`,
  },
};

export const TREE_VIEW_PROPS_DATA: PropItem[] = [
  {
    name: 'data',
    type: 'TreeNode[]',
    defaultValue: '[]',
    description: 'Array of hierarchical node objects with id, label, icon, and optional children.',
  },
  {
    name: 'selectedId',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Controlled currently selected node ID.',
  },
  {
    name: 'onSelect',
    type: '(node: TreeNode) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when a tree node is clicked.',
  },
  {
    name: 'showGuideLines',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render vertical indentation guide lines between parent and child nodes.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Visual framing style: transparent, elevated card surface, or high-contrast border.',
  },
];
