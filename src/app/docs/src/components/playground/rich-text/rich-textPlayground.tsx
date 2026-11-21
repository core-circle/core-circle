'use client';

import React, { useState } from 'react';
import { RichText, Select, Button } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { richTextPlaygroundStyles as s } from './rich-textPlayground.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

const CONTENT_PRESETS: Record<string, { label: string; html: string }> = {
  announcement: {
    label: 'Product Announcement',
    html: `<h1>CoreCircle Design System v3.0</h1>
<p>We are thrilled to announce <strong>CoreCircle 3.0</strong>, engineered from the ground up for high-performance React enterprise applications with complete token theming.</p>
<h2>Key Architecture Pillars</h2>
<ul>
  <li><strong>Zero Redundancy:</strong> Unified 33+ Atoms and composable Molecules.</li>
  <li><strong>CVA Variant Engine:</strong> Type-safe variant resolution with Tailwind CSS tokens.</li>
  <li><strong>Accessible by Default:</strong> Full keyboard navigation and WCAG 2.1 AAA contrast compliance.</li>
</ul>
<blockquote>
  "CoreCircle reduces UI boilerplate by 60% while enforcing strict design consistency across teams."
</blockquote>
<p>Get started today by installing the packages via your preferred package manager:</p>
<pre><code>npm install @core-circle/ui @core-circle/theme @core-circle/icons</code></pre>`
  },
  changelog: {
    label: 'Release Notes & Changelog',
    html: `<h2>v3.4.0 Release Notes</h2>
<p>Released on August 25, 2026. This minor update introduces rich theming presets and new atomic variants.</p>
<h3>What's New</h3>
<ul>
  <li>Added <code>Progress</code> multi-track variants with barber-pole animated stripes.</li>
  <li>Enhanced <code>RichText</code> typography scaling and dark mode surface presets.</li>
  <li>Introduced 10+ surface variants across all primitives.</li>
</ul>
<h3>Breaking Changes</h3>
<p>None. All component APIs are 100% backward compatible.</p>`
  },
  compliance: {
    label: 'Enterprise Security Compliance',
    html: `<h2>SOC2 Type II & Security Briefing</h2>
<p>All CoreCircle customer workspaces are encrypted at rest using <strong>AES-256 GCM</strong> envelope encryption with automated continuous audit monitoring.</p>
<blockquote>
  Security audit report SHA-256 fingerprint: <code>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code>
</blockquote>
<h3>Data Handling Guarantees</h3>
<ol>
  <li>Zero data retention on edge proxies</li>
  <li>Multi-region automated disaster recovery within 15 minutes RTO</li>
  <li>Annual independent penetration testing by certified CREST auditors</li>
</ol>`
  }
};

export const RichTextPlayground = () => {
  const [variant, setVariant] = useState('card');
  const [size, setSize] = useState('base');
  const [presetKey, setPresetKey] = useState('announcement');

  const currentContent = CONTENT_PRESETS[presetKey]?.html || CONTENT_PRESETS.announcement.html;

  const generateCode = () => {
    let props = `content={\`...\`}`;
    if (variant !== 'default') props += `\n  variant="${variant}"`;
    if (size !== 'base') props += `\n  size="${size}"`;

    return `<RichText\n  ${props}\n/>`;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.controlsWrapper}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <Select
              label="Variant Theme"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              options={[
                { value: 'default', label: 'Default (Clean Prose)' },
                { value: 'card', label: 'Card Surface' },
                { value: 'bordered', label: 'Bordered Container' },
                { value: 'floating', label: 'Floating Elevated' },
                { value: 'glassmorphic', label: 'Glassmorphic Blur' },
                { value: 'gradient', label: 'Gradient Accent' },
                { value: 'filled', label: 'Filled Soft Page' },
                { value: 'minimal', label: 'Minimal Dense' },
                { value: 'ghost', label: 'Ghost Translucent' },
                { value: 'accent', label: 'Accent Border' },
                { value: 'dark', label: 'Dark Mode Container' },
              ]}
              fullWidth
            />

            <Select
              label="Typography Scale"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              options={[
                { value: 'sm', label: 'Small (Dense docs)' },
                { value: 'base', label: 'Base (Standard prose)' },
                { value: 'lg', label: 'Large (Editorial article)' },
              ]}
              fullWidth
            />

            <Select
              label="Content Preset"
              value={presetKey}
              onChange={(e) => setPresetKey(e.target.value)}
              options={[
                { value: 'announcement', label: 'Product Announcement' },
                { value: 'changelog', label: 'Release Notes / Changelog' },
                { value: 'compliance', label: 'Enterprise Security Briefing' },
              ]}
              fullWidth
            />
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className="p-6 sm:p-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] overflow-auto flex justify-center">
            <div className="w-full max-w-2xl">
              <RichText
                variant={variant as any}
                size={size as any}
                content={currentContent}
              />
            </div>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                {DOC_TEXT.PLAYGROUND.LIVE_CODE}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon size={14} />}
              >
                {DOC_TEXT.PLAYGROUND.COPY_SNIPPET}
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightCode(generateCode()) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
