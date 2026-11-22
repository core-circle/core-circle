'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { TagInput, Badge } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface TagInputThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface TagInputVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const TAG_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TagInput' },
];

export const TAG_INPUT_HEADER_CONTENT = {
  title: 'TagInput',
  description:
    'An interactive chip and tag creation input that generates dismissible badges on Enter or comma keystrokes, with duplicate prevention, limit thresholds, and 10 styling variants.',
};

export const TAG_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade tag creation inputs for email recipient bars, GitHub issue label dispatchers, AI LLM reasoning keywords, and Kubernetes pod labels.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 10 surface styling variants from capsule pills to radiant gradients and cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive tag input playground with live chip creation, duplicate toggles, max limits, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic tagging metadata payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const EmailRecipientsDemo = () => {
  const [emailRecipients, setEmailRecipients] = useState([
    'alex@corecircle.io',
    'sarah@corecircle.io',
  ]);
  return (
    <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-sm text-slate-900">
          New Message Dispatch
        </h4>
        <Badge variant="primary" size="sm" shape="pill">
          {emailRecipients.length} Recipients
        </Badge>
      </div>
      <TagInput
        label="CC / BCC Recipients"
        variant="pills"
        value={emailRecipients}
        onChange={setEmailRecipients}
        placeholder="Type email address and press Enter..."
      />
    </div>
  );
};

const K8sLabelsDemo = () => {
  const [k8sLabels, setK8sLabels] = useState([
    'env=production',
    'tier=frontend',
    'region=us-east-1',
  ]);
  return (
    <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-emerald-400">
          POD: ingress-controller-v2
        </span>
        <Badge variant="info" size="sm" shape="pill">
          Selectors
        </Badge>
      </div>
      <TagInput
        label="Active Deployment Key-Value Selectors"
        variant="glow"
        value={k8sLabels}
        onChange={setK8sLabels}
        placeholder="Add label (e.g. app=gateway)..."
      />
    </div>
  );
};

export const TAG_INPUT_THEME_CONFIGS: TagInputThemeConfig[] = [
  {
    id: 'theming-email-recipients',
    sectionTitle: '1. Corporate Email CC Recipient Bar Theme',
    description:
      'Pill-shaped tag chips formatted for multi-recipient email distribution lists.',
    previewTitle: 'Email Recipient Tag Input',
    render: () => <EmailRecipientsDemo />,
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <div className="flex items-center justify-between">
    <h4 className="font-bold text-sm text-slate-900">New Message Dispatch</h4>
    <Badge variant="primary" size="sm" shape="pill">2 Recipients</Badge>
  </div>
  <TagInput
    label="CC / BCC Recipients"
    variant="pills"
    value={emailRecipients}
    onChange={setEmailRecipients}
    placeholder="Type email address and press Enter..."
  />
</div>`,
  },
  {
    id: 'theming-k8s-labels',
    sectionTitle:
      '2. Kubernetes Pod & Service Selector Labels Theme',
    description:
      'High-contrast glowing cyber chips for distributed cluster key-value metadata.',
    previewTitle: 'Kubernetes Pod Metadata Tags',
    render: () => <K8sLabelsDemo />,
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-emerald-400">POD: ingress-controller-v2</span>
    <Badge variant="info" size="sm" shape="pill">Selectors</Badge>
  </div>
  <TagInput
    label="Active Deployment Key-Value Selectors"
    variant="glow"
    value={k8sLabels}
    onChange={setK8sLabels}
    placeholder="Add label (e.g. app=gateway)..."
  />
</div>`,
  },
  {
    id: 'theming-ai-keywords',
    sectionTitle: '3. AI Neural Network Reasoning Keywords Theme',
    description:
      'Radiant purple gradient tag chips representing extracted semantic topics.',
    previewTitle: 'Semantic Keywords Tagging',
    render: () => (
      <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
        <h4 className="font-bold text-sm text-purple-950">
          Extracted Document Topics
        </h4>
        <TagInput
          variant="gradient"
          defaultValue={[
            'transformers',
            'self-attention',
            'reinforcement-learning',
            'lora',
          ]}
          placeholder="Add custom topic..."
        />
      </div>
    ),
    code: `<div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-purple-950">Extracted Document Topics</h4>
  <TagInput
    variant="gradient"
    defaultValue={['transformers', 'self-attention', 'reinforcement-learning', 'lora']}
    placeholder="Add custom topic..."
  />
</div>`,
  },
  {
    id: 'theming-github-labels',
    sectionTitle:
      '4. GitHub Issue & Pull Request Label Dispatcher Theme',
    description: 'Bordered tag input for categorizing triage issues.',
    previewTitle: 'Issue Triage Labels',
    render: () => (
      <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
        <h4 className="font-bold text-sm text-slate-900">
          Sprint Triage Labels
        </h4>
        <TagInput
          variant="bordered"
          defaultValue={['bug', 'priority-high', 'ui-system', 'v2-release']}
          placeholder="Attach issue label..."
        />
      </div>
    ),
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-slate-900">Sprint Triage Labels</h4>
  <TagInput
    variant="bordered"
    defaultValue={['bug', 'priority-high', 'ui-system', 'v2-release']}
    placeholder="Attach issue label..."
  />
</div>`,
  },
  {
    id: 'theming-ecommerce-categories',
    sectionTitle: '5. E-Commerce Product Catalog Tagging Theme',
    description: 'Frosted glassmorphism tag input for catalog taxonomy.',
    previewTitle: 'Product Taxonomy Tagging',
    render: () => (
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
        <h4 className="font-bold text-sm text-blue-950">
          Catalog Search Keywords
        </h4>
        <TagInput
          variant="glassmorphic"
          defaultValue={['footwear', 'running', 'waterproof', 'marathon']}
          placeholder="Add SEO search keyword..."
        />
      </div>
    ),
    code: `<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-blue-950">Catalog Search Keywords</h4>
  <TagInput
    variant="glassmorphic"
    defaultValue={['footwear', 'running', 'waterproof', 'marathon']}
    placeholder="Add SEO search keyword..."
  />
</div>`,
  },
];

export const TAG_INPUT_VARIANT_GROUPS: TagInputVariantGroup[] = [
  {
    id: 'tag-input-variants-surfaces',
    title: '1. Form Surface Styles (Outline, Pills, Subtle)',
    description:
      'Square badges, round capsule pills, and soft slate surfaces.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <TagInput
          label="Outline"
          variant="outline"
          defaultValue={['design', 'tokens']}
        />
        <TagInput
          label="Pills Capsule"
          variant="pills"
          defaultValue={['mobile', 'responsive']}
        />
        <TagInput
          label="Subtle"
          variant="subtle"
          defaultValue={['frontend', 'react']}
        />
      </div>
    ),
  },
  {
    id: 'tag-input-variants-glow',
    title: '2. Radiant Gradient & Neon Glow Styles',
    description:
      'Purple-indigo gradients, cyber emerald halos, and translucent glass.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <TagInput
          label="Gradient"
          variant="gradient"
          defaultValue={['neural', 'agents']}
        />
        <TagInput
          label="Neon Glow"
          variant="glow"
          defaultValue={['cluster', '120fps']}
        />
        <TagInput
          label="Glassmorphic"
          variant="glassmorphic"
          defaultValue={['cloud', 'edge']}
        />
      </div>
    ),
  },
  {
    id: 'tag-input-variants-dark-accent',
    title: '3. Dark, Bordered & Brand Accent Styles',
    description:
      'Deep slate backgrounds, high-contrast borders, and primary brand badges.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <TagInput
          label="Dark Mode"
          variant="dark"
          defaultValue={['server', 'logs']}
        />
        <TagInput
          label="Bordered"
          variant="bordered"
          defaultValue={['schema', 'graphql']}
        />
        <TagInput
          label="Accent"
          variant="accent"
          defaultValue={['monorepo', 'turbo']}
        />
      </div>
    ),
  },
];

export const TAG_INPUT_PLAYGROUND_SECTION = {
  id: 'tag-input-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 variants, max tag thresholds, duplicate rules, and code generator.',
};

export const TAG_INPUT_MOCK_SECTION = {
  id: 'tag-input-mock-section',
  title: 'Dynamic Article Tagging Integration',
  description:
    'Pattern for synchronizing tags with an editorial publishing API.',
  snippets: [
    {
      label: 'Sample Article Tags Payload',
      code: JSON.stringify(
        {
          articleId: 'art_98124b',
          tags: ['react', 'typescript', 'design-systems', 'tailwind'],
          maxAllowed: 8,
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Tag Editor Component',
      code: `import React, { useState } from 'react';
import { TagInput, Button } from '@core-circle/ui';

export const ArticleTagEditor = ({ articleId, initialTags }) => {
  const [tags, setTags] = useState(initialTags);

  const handleSave = async () => {
    await fetch(\`/api/v1/articles/\${articleId}/tags\`, {
      method: 'PUT',
      body: JSON.stringify({ tags }),
    });
  };

  return (
    <div className="space-y-4 max-w-md">
      <TagInput
        label="Article SEO & Taxonomy Tags"
        value={tags}
        onChange={setTags}
        variant="gradient"
        maxTags={8}
        placeholder="Type tag and press Enter..."
      />
      <Button variant="primary" onClick={handleSave}>Save Taxonomy</Button>
    </div>
  );
};`,
    },
  ],
};

export const TAG_INPUT_OVERVIEW_SECTION = {
  id: 'tag-input-overview-intro',
  title: 'Introduction',
  description:
    'The TagInput component provides an intuitive interface for creating and managing multiple categorical tags. It generates dismissible badge chips upon typing and pressing Enter or comma, featuring 10 visual variants, duplicate prevention, and maximum tag limits.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { TagInput } from '@core-circle/ui';

const [tags, setTags] = useState(['react', 'typescript']);

<TagInput
  label="Keywords"
  value={tags}
  onChange={setTags}
  variant="gradient"
  placeholder="Add tag..."
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TAG_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string[]',
    defaultValue: '-',
    description: 'Controlled array of tag strings.',
  },
  {
    name: 'defaultValue',
    type: 'string[]',
    defaultValue: '[]',
    description: 'Default initial array of tags in uncontrolled mode.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Add a tag...'",
    description: 'Placeholder shown when no tags have been entered yet.',
  },
  {
    name: 'variant',
    type: "'outline' | 'pills' | 'gradient' | 'glow' | 'glassmorphic' | 'subtle' | 'dark' | 'bordered' | 'accent' | 'minimal'",
    defaultValue: "'outline'",
    description: 'Container and chip surface styling aesthetic.',
  },
  {
    name: 'maxTags',
    type: 'number',
    defaultValue: '-',
    description: 'Maximum allowable number of tags.',
  },
  {
    name: 'allowDuplicates',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether duplicate tag strings are allowed.',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: '-',
    description: 'Label text positioned above the input.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Subtle guidance caption below the input.',
  },
  {
    name: 'onChange',
    type: '(tags: string[]) => void',
    defaultValue: '-',
    description: 'Callback triggered whenever tags are added or removed.',
  },
];
