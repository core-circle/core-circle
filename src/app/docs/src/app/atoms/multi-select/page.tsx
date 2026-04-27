'use client';

import Link from 'next/link';
import { MultiSelect, Breadcrumb } from '@core-circle/ui';
import { Users, Tag, HomeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { MultiSelectPlayground } from '../../../components/playground/multi-select/multiSelectPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';

export default function MultiSelectDocsPage() {
  const defaultOptions = [
    { value: 'react', label: 'React' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'tailwind', label: 'Tailwind CSS' },
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
            { label: 'Atoms', href: '/atoms' },
            { label: 'MultiSelect' }
          ]}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s.title}>
          MultiSelect
        </h1>
        <p className={s.description}>
          A powerful dropdown component that allows users to select multiple options. Selected items are displayed as removable tags within the input field.
        </p>
      </header>

      <div className={s.sectionWrapper}>
        <DocSection
          id="playground"
          title="Live Playground"
          description="Experiment with variants, sizes, and selection behavior live."
          showBorder
        >
          <MultiSelectPlayground />
        </DocSection>

        <DocSection
          id="variants"
          title="Visual Variants"
          description="Consistent styling across all input types."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentPreview
              title="Material Animated"
              code={`<MultiSelect variant="material-animated" label="Skills" options={options} placeholder="Search skills..." />`}
            >
              <MultiSelect variant="material-animated" label="Skills" options={defaultOptions} placeholder="Search skills..." fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Outline"
              code={`<MultiSelect variant="outline" label="Categories" options={options} />`}
            >
              <MultiSelect variant="outline" label="Categories" options={defaultOptions} fullWidth />
            </ComponentPreview>
            
            <ComponentPreview
              title="Standard"
              code={`<MultiSelect variant="standard" label="Tags" options={options} />`}
            >
              <MultiSelect variant="standard" label="Tags" options={defaultOptions} fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Ghost"
              code={`<MultiSelect variant="ghost" placeholder="Add filters..." options={options} />`}
            >
              <MultiSelect variant="ghost" placeholder="Add filters..." options={defaultOptions} fullWidth />
            </ComponentPreview>
          </div>
        </DocSection>

        <DocSection
          id="icons"
          title="With Icons"
          description="Use start icons to provide visual cues for the selection type."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentPreview
              title="User Selection"
              code={`<MultiSelect startIcon={<Users />} options={options} />`}
            >
              <MultiSelect startIcon={<Users size={18} />} options={defaultOptions} fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Tagging"
              code={`<MultiSelect prefix={<Tag size={14} />} options={options} />`}
            >
              <MultiSelect prefix={<Tag size={14} />} options={defaultOptions} fullWidth />
            </ComponentPreview>
          </div>
        </DocSection>
      </div>
    </div>
  );
}
