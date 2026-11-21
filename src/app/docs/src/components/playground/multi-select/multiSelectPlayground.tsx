'use client';

import React, { useState } from 'react';
import { 
  MultiSelect, 
  Select, 
  Checkbox, 
  TextInput, 
  Typography, 
  Card,
  MultiSelectVariant,
  MultiSelectSize 
} from '@core-circle/ui';
import ComponentPreview from '../../component-preview';

const SAMPLE_TECH_OPTIONS = [
  { value: 'react', label: 'React.js' },
  { value: 'nextjs', label: 'Next.js 15' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
];

export const MultiSelectPlayground: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(['react', 'typescript']);
  const [variant, setVariant] = useState<MultiSelectVariant>('outline');
  const [size, setSize] = useState<MultiSelectSize>('md');
  const [maxTags, setMaxTags] = useState('3');

  const [label, setLabel] = useState('Required Core Technologies');
  const [placeholder, setPlaceholder] = useState('Select tech stack...');

  const [searchable, setSearchable] = useState(true);
  const [showSelectAll, setShowSelectAll] = useState(true);
  const [showClearAll, setShowClearAll] = useState(true);
  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const variantOptions = [
    { label: 'Outline (Default)', value: 'outline' },
    { label: 'Filled Surface', value: 'filled' },
    { label: 'Floating Depth', value: 'floating' },
    { label: 'Glassmorphic Blur', value: 'glassmorphic' },
    { label: 'Pill Capsule', value: 'pill' },
    { label: 'Material Underline', value: 'material' },
    { label: 'Gradient Glow', value: 'gradient' },
    { label: 'Chips Container', value: 'chips' },
    { label: 'Compact Trigger', value: 'compact' },
    { label: 'Ghost Minimal', value: 'ghost' },
  ];

  const sizeOptions = [
    { label: 'Small (sm)', value: 'sm' },
    { label: 'Medium (md)', value: 'md' },
    { label: 'Large (lg)', value: 'lg' },
  ];

  const maxTagOptions = [
    { label: '2 Tags (Collapse +N)', value: '2' },
    { label: '3 Tags (Default)', value: '3' },
    { label: '5 Tags', value: '5' },
    { label: 'Unlimited (99)', value: '99' },
  ];

  const generateCodeSnippet = () => {
    let props = `options={techOptions}\n  value={selected}\n  onChange={setSelected}`;
    if (variant !== 'outline') props += `\n  variant="${variant}"`;
    if (size !== 'md') props += `\n  size="${size}"`;
    if (label) props += `\n  label="${label}"`;
    if (placeholder) props += `\n  placeholder="${placeholder}"`;
    if (maxTags !== '3') props += `\n  maxTags={${maxTags}}`;
    if (!searchable) props += `\n  searchable={false}`;
    if (showSelectAll) props += `\n  showSelectAll`;
    if (!showClearAll) props += `\n  showClearAll={false}`;
    if (fullWidth) props += `\n  fullWidth`;
    if (disabled) props += `\n  disabled`;

    return `<MultiSelect\n  ${props}\n/>`;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview title="Interactive MultiSelect Sandbox" code={generateCodeSnippet()}>
        <div className="flex items-center justify-center p-8 w-full min-h-[260px] bg-slate-50/50 rounded-2xl border border-slate-100">
          <div className="w-full max-w-md">
            <MultiSelect
              options={SAMPLE_TECH_OPTIONS}
              value={selected}
              onChange={setSelected}
              variant={variant}
              size={size}
              label={label}
              placeholder={placeholder}
              maxTags={Number(maxTags)}
              searchable={searchable}
              showSelectAll={showSelectAll}
              showClearAll={showClearAll}
              fullWidth={fullWidth}
              disabled={disabled}
            />
          </div>
        </div>
      </ComponentPreview>

      {/* Control Configuration Panel */}
      <Card variant="outline" className="p-6 bg-white border border-core-circle-border-main/70">
        <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted mb-6">
          MultiSelect Controls
        </Typography>

        <div className="flex flex-col gap-6">
          {/* Tier 1: Exactly 3 Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Visual Variant"
              value={variant}
              options={variantOptions}
              onChange={(val) => setVariant(val as MultiSelectVariant)}
            />
            <Select
              label="Size Scale"
              value={size}
              options={sizeOptions}
              onChange={(val) => setSize(val as MultiSelectSize)}
            />
            <Select
              label="Max Visible Tags"
              value={maxTags}
              options={maxTagOptions}
              onChange={(val) => setMaxTags(val as string)}
            />
          </div>

          {/* Tier 2: Horizontal Checkboxes Row */}
          <div className="flex flex-wrap items-center gap-6 py-2 border-t border-core-circle-border-main/40">
            <Checkbox
              id="search-toggle"
              label="Search Filtering"
              checked={searchable}
              onChange={(e) => setSearchable(e.target.checked)}
            />
            <Checkbox
              id="select-all-toggle"
              label="Select All Button"
              checked={showSelectAll}
              onChange={(e) => setShowSelectAll(e.target.checked)}
            />
            <Checkbox
              id="clear-all-toggle"
              label="Clear (X) Button"
              checked={showClearAll}
              onChange={(e) => setShowClearAll(e.target.checked)}
            />
            <Checkbox
              id="fullwidth-toggle"
              label="Full Width"
              checked={fullWidth}
              onChange={(e) => setFullWidth(e.target.checked)}
            />
            <Checkbox
              id="disabled-toggle"
              label="Disabled"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
          </div>

          {/* Tier 3: Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main/60 pt-4">
            <TextInput
              label="Input Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Core Technologies"
            />
            <TextInput
              label="Placeholder Text"
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
              placeholder="e.g. Select options..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
