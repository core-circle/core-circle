'use client';

import React from 'react';
import { DiffViewer } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const DIFF_VIEWER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'DiffViewer' },
];

export const DIFF_VIEWER_HEADER_CONTENT = {
  title: 'DiffViewer',
  description:
    'A code comparison and change tracking viewport visualizing additions, deletions, and modifications in split side-by-side or unified single-column layouts.',
};

export const DIFF_VIEWER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore Git PR reviews, database schema migrations, environment diffs, and security hotfixes.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore side-by-side split versus unified views, surface framing, and line numbering.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test code diff comparisons and view layout toggles.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'GitHub pull request code review integration pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const oldSample = `function authenticateUser(req) {
  const token = req.headers.authorization;
  if (!token) throw new Error('Unauthorized');
  return jwt.verify(token, SECRET);
}`;

const newSample = `function authenticateUser(req) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token) {
    logger.warn('Missing auth bearer token');
    throw new UnauthorizedException();
  }
  return jwt.verify(token, process.env.JWT_SECRET);
}`;

export const DIFF_VIEWER_THEME_CONFIGS = [
  {
    id: 'theming-pr-review',
    title: '1. Git Pull Request Code Review Theme',
    description: 'Standard side-by-side diff for code review workflows.',
    previewTitle: 'PR #492: Security Bearer Token Parsing',
    code: `<DiffViewer
  oldCode={oldSample}
  newCode={newSample}
  filename="auth.service.ts"
  splitView
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <DiffViewer
            oldCode={oldSample}
            newCode={newSample}
            filename="auth.service.ts"
            splitView
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-unified-mobile',
    title: '2. Compact Unified Single-Column Theme',
    description: 'Streamlined vertical view for mobile screens and side panels.',
    previewTitle: 'Unified Revision View',
    code: `<DiffViewer
  oldCode={oldSample}
  newCode={newSample}
  filename="auth.service.ts"
  splitView={false}
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <DiffViewer
            oldCode={oldSample}
            newCode={newSample}
            filename="auth.service.ts"
            splitView={false}
            variant="card"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-sql-migration',
    title: '3. SQL Schema Migration Theme',
    description: 'Tracking schema alterations and column additions.',
    previewTitle: 'migration_0042_add_roles.sql',
    code: `<DiffViewer
  oldCode="CREATE TABLE users (\\n  id UUID PRIMARY KEY,\\n  email TEXT NOT NULL\\n);"
  newCode="CREATE TABLE users (\\n  id UUID PRIMARY KEY,\\n  email TEXT NOT NULL,\\n  role TEXT NOT NULL DEFAULT 'viewer',\\n  created_at TIMESTAMPTZ DEFAULT NOW()\\n);"
  filename="migration_0042.sql"
  splitView
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <DiffViewer
            oldCode={`CREATE TABLE users (\n  id UUID PRIMARY KEY,\n  email TEXT NOT NULL\n);`}
            newCode={`CREATE TABLE users (\n  id UUID PRIMARY KEY,\n  email TEXT NOT NULL,\n  role TEXT NOT NULL DEFAULT 'viewer',\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);`}
            filename="migration_0042.sql"
            splitView
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-json-config',
    title: '4. JSON Environment Configuration Theme',
    description: 'Comparing staging versus production environment flags.',
    previewTitle: 'config.production.json',
    code: `<DiffViewer
  oldCode='{\\n  "debug": true,\\n  "cacheTtl": 60\\n}'
  newCode='{\\n  "debug": false,\\n  "cacheTtl": 3600,\\n  "clusterReplicas": 8\\n}'
  filename="config.json"
  splitView={false}
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <DiffViewer
            oldCode={`{\n  "debug": true,\n  "cacheTtl": 60\n}`}
            newCode={`{\n  "debug": false,\n  "cacheTtl": 3600,\n  "clusterReplicas": 8\n}`}
            filename="config.json"
            splitView={false}
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-hotfix-patch',
    title: '5. Critical CVE Security Hotfix Theme',
    description: 'Pinpointing sanitization patch changes for compliance audits.',
    previewTitle: 'CVE-2026-9021 Hotfix',
    code: `<DiffViewer
  oldCode="const safeHtml = rawContent;"
  newCode="const safeHtml = DOMPurify.sanitize(rawContent);"
  filename="htmlParser.ts"
  splitView
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-2xl">
          <DiffViewer
            oldCode="const safeHtml = rawContent;"
            newCode="const safeHtml = DOMPurify.sanitize(rawContent);"
            filename="htmlParser.ts"
            splitView
            variant="card"
          />
        </div>
      </div>
    ),
  },
];

export const DIFF_VIEWER_VARIANT_GROUPS = [
  {
    id: 'group-views',
    title: 'Layout & Presentation Views',
    description: 'Split side-by-side columns versus unified interleaved rows.',
    items: [
      {
        title: 'Side-by-Side Split View',
        code: `<DiffViewer oldCode={oldSample} newCode={newSample} splitView />`,
        render: () => (
          <DiffViewer oldCode={oldSample} newCode={newSample} splitView />
        ),
      },
      {
        title: 'Unified Interleaved View',
        code: `<DiffViewer oldCode={oldSample} newCode={newSample} splitView={false} />`,
        render: () => (
          <DiffViewer oldCode={oldSample} newCode={newSample} splitView={false} />
        ),
      },
    ],
  },
  {
    id: 'group-framing',
    title: 'Container Surface Variants',
    description: 'Default Slate 900, Deep Slate 950 Card, and Bordered.',
    items: [
      {
        title: 'Default Slate Surface',
        code: `<DiffViewer oldCode={oldSample} newCode={newSample} variant="default" />`,
        render: () => (
          <DiffViewer oldCode={oldSample} newCode={newSample} variant="default" />
        ),
      },
      {
        title: 'High-Contrast Bordered Frame',
        code: `<DiffViewer oldCode={oldSample} newCode={newSample} variant="bordered" />`,
        render: () => (
          <DiffViewer oldCode={oldSample} newCode={newSample} variant="bordered" />
        ),
      },
    ],
  },
];

export const DIFF_VIEWER_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test code differences, switch between Split and Unified modes, and customize headers.',
};

export const DIFF_VIEWER_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Git commit revision comparison viewer integration.',
  snippets: [
    {
      label: 'PullRequestFileViewer.tsx',
      code: `import React, { useState } from 'react';
import { DiffViewer } from '@core-circle/ui';

export const PullRequestFileViewer: React.FC<{ fileDiff: { filename: string; before: string; after: string } }> = ({
  fileDiff,
}) => {
  const [splitView, setSplitView] = useState(true);

  return (
    <div className="w-full my-4">
      <DiffViewer
        oldCode={fileDiff.before}
        newCode={fileDiff.after}
        filename={fileDiff.filename}
        splitView={splitView}
        onSplitViewChange={setSplitView}
        showLineNumbers
        variant="card"
      />
    </div>
  );
};`,
    },
  ],
};

export const DIFF_VIEWER_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { DiffViewer } from '@core-circle/ui';

export default function MyDiff() {
  return (
    <DiffViewer
      oldCode="const port = 3000;"
      newCode="const port = process.env.PORT || 3000;"
      filename="server.ts"
      splitView
    />
  );
}`,
  },
};

export const DIFF_VIEWER_PROPS_DATA: PropItem[] = [
  {
    name: 'oldCode',
    type: 'string',
    defaultValue: "''",
    description: 'Original baseline source code string.',
  },
  {
    name: 'newCode',
    type: 'string',
    defaultValue: "''",
    description: 'Modified updated source code string.',
  },
  {
    name: 'splitView',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render side-by-side columns (true) or unified interleaved rows (false).',
  },
  {
    name: 'onSplitViewChange',
    type: '(split: boolean) => void',
    defaultValue: 'undefined',
    description: 'Callback fired when user clicks the Split / Unified view toggle buttons.',
  },
  {
    name: 'filename',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Optional file name header displayed with file icon.',
  },
  {
    name: 'language',
    type: 'string',
    defaultValue: "'typescript'",
    description: 'Programming language identifier tag.',
  },
  {
    name: 'showLineNumbers',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display gutter line numbers.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Container background surface style.',
  },
  {
    name: 'maxHeight',
    type: 'number | string',
    defaultValue: 'undefined',
    description: 'Maximum height of the diff container before vertical scrolling engages.',
  },
];
