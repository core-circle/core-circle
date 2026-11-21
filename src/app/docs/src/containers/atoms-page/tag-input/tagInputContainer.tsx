'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TagInput, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Mail, 
  Terminal, 
  Sparkles, 
  Shield, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TagInputPlayground } from '../../../components/playground/tag-input/tagInputPlayground';
import { tagInputPageStyles as s } from './tag-input.styles';
import { TAG_INPUT_PROPS_DATA } from '../../../constants/atoms-page/tag-input/tagInputConstants';

export default function TagInputContainer({ headerContent, breadcrumbItems }: any) {
  const [emailRecipients, setEmailRecipients] = useState(['alex@corecircle.io', 'sarah@corecircle.io']);
  const [k8sLabels, setK8sLabels] = useState(['env=production', 'tier=frontend', 'region=us-east-1']);

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Email CC Recipient Bar */}
          <DocSection
            id="theming-email-recipients"
            title="1. Corporate Email CC Recipient Bar Theme"
            description="Pill-shaped tag chips formatted for multi-recipient email distribution lists."
          >
            <ComponentPreview
              title="Email Recipient Tag Input"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
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
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900">New Message Dispatch</h4>
                  <Badge variant="primary" size="sm" shape="pill">{emailRecipients.length} Recipients</Badge>
                </div>
                <TagInput
                  label="CC / BCC Recipients"
                  variant="pills"
                  value={emailRecipients}
                  onChange={setEmailRecipients}
                  placeholder="Type email address and press Enter..."
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Kubernetes Pod Labels */}
          <DocSection
            id="theming-k8s-labels"
            title="2. Kubernetes Pod & Service Selector Labels Theme"
            description="High-contrast glowing cyber chips for distributed cluster key-value metadata."
          >
            <ComponentPreview
              title="Kubernetes Pod Metadata Tags"
              code={`<div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl space-y-4 w-full">
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
</div>`}
            >
              <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl space-y-4 w-full">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. AI Reasoning Keywords */}
          <DocSection
            id="theming-ai-keywords"
            title="3. AI Neural Network Reasoning Keywords Theme"
            description="Radiant purple gradient tag chips representing extracted semantic topics."
          >
            <ComponentPreview
              title="Semantic Keywords Tagging"
              code={`<div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-purple-950">Extracted Document Topics</h4>
  <TagInput
    variant="gradient"
    defaultValue={['transformers', 'self-attention', 'reinforcement-learning', 'lora']}
    placeholder="Add custom topic..."
  />
</div>`}
            >
              <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-purple-950">Extracted Document Topics</h4>
                <TagInput
                  variant="gradient"
                  defaultValue={['transformers', 'self-attention', 'reinforcement-learning', 'lora']}
                  placeholder="Add custom topic..."
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. GitHub Issue Labels */}
          <DocSection
            id="theming-github-labels"
            title="4. GitHub Issue & Pull Request Label Dispatcher Theme"
            description="Bordered tag input for categorizing triage issues."
          >
            <ComponentPreview
              title="Issue Triage Labels"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-slate-900">Sprint Triage Labels</h4>
  <TagInput
    variant="bordered"
    defaultValue={['bug', 'priority-high', 'ui-system', 'v2-release']}
    placeholder="Attach issue label..."
  />
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-slate-900">Sprint Triage Labels</h4>
                <TagInput
                  variant="bordered"
                  defaultValue={['bug', 'priority-high', 'ui-system', 'v2-release']}
                  placeholder="Attach issue label..."
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. E-Commerce Product Categories */}
          <DocSection
            id="theming-ecommerce-categories"
            title="5. E-Commerce Product Catalog Tagging Theme"
            description="Frosted glassmorphism tag input for catalog taxonomy."
          >
            <ComponentPreview
              title="Product Taxonomy Tagging"
              code={`<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-blue-950">Catalog Search Keywords</h4>
  <TagInput
    variant="glassmorphic"
    defaultValue={['footwear', 'running', 'waterproof', 'marathon']}
    placeholder="Add SEO search keyword..."
  />
</div>`}
            >
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-blue-950">Catalog Search Keywords</h4>
                <TagInput
                  variant="glassmorphic"
                  defaultValue={['footwear', 'running', 'waterproof', 'marathon']}
                  placeholder="Add SEO search keyword..."
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
          {/* 1. Outline, Pills & Subtle */}
          <DocSection
            id="tag-input-variants-surfaces"
            title="1. Form Surface Styles (Outline, Pills, Subtle)"
            description="Square badges, round capsule pills, and soft slate surfaces."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <TagInput label="Outline" variant="outline" defaultValue={['design', 'tokens']} />
              <TagInput label="Pills Capsule" variant="pills" defaultValue={['mobile', 'responsive']} />
              <TagInput label="Subtle" variant="subtle" defaultValue={['frontend', 'react']} />
            </div>
          </DocSection>

          {/* 2. Gradient, Neon Glow & Glassmorphic */}
          <DocSection
            id="tag-input-variants-glow"
            title="2. Radiant Gradient & Neon Glow Styles"
            description="Purple-indigo gradients, cyber emerald halos, and translucent glass."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-slate-950 rounded-2xl border border-slate-800 w-full">
              <TagInput label="Gradient" variant="gradient" defaultValue={['neural', 'agents']} />
              <TagInput label="Neon Glow" variant="glow" defaultValue={['cluster', '120fps']} />
              <TagInput label="Glassmorphic" variant="glassmorphic" defaultValue={['cloud', 'edge']} />
            </div>
          </DocSection>

          {/* 3. Dark, Bordered & Accent */}
          <DocSection
            id="tag-input-variants-dark-accent"
            title="3. Dark, Bordered & Brand Accent Styles"
            description="Deep slate backgrounds, high-contrast borders, and primary brand badges."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <TagInput label="Dark Mode" variant="dark" defaultValue={['server', 'logs']} />
              <TagInput label="Bordered" variant="bordered" defaultValue={['schema', 'graphql']} />
              <TagInput label="Accent" variant="accent" defaultValue={['monorepo', 'turbo']} />
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
          id="tag-input-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, max tag thresholds, duplicate rules, and code generator."
        >
          <TagInputPlayground />
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
            id="tag-input-mock-section"
            title="Dynamic Article Tagging Integration"
            description="Pattern for synchronizing tags with an editorial publishing API."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Article Tags Payload"
                code={JSON.stringify({
                  articleId: "art_98124b",
                  tags: ["react", "typescript", "design-systems", "tailwind"],
                  maxAllowed: 8
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Tag Editor Component"
                code={`import React, { useState } from 'react';
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
            id="tag-input-overview-intro"
            title="Introduction"
            description="The TagInput component provides an intuitive interface for creating and managing multiple categorical tags. It generates dismissible badge chips upon typing and pressing Enter or comma, featuring 10 visual variants, duplicate prevention, and maximum tag limits."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { TagInput } from '@core-circle/ui';

const [tags, setTags] = useState(['react', 'typescript']);

<TagInput
  label="Keywords"
  value={tags}
  onChange={setTags}
  variant="gradient"
  placeholder="Add tag..."
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={TAG_INPUT_PROPS_DATA} />
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
