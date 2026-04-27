'use client';

import Link from 'next/link';
import { Select, Breadcrumb } from '@core-circle/ui';
import { Filter, HomeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { SelectPlayground } from '../../../components/playground/select/selectPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';

export default function SelectDocsPage() {
  const defaultOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
            { label: 'Atoms', href: '/atoms' },
            { label: 'Select' }
          ]}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s.title}>
          Select
        </h1>
        <p className={s.description}>
          A custom select component that provides a consistent look and feel across different browsers while supporting variants and integrated icons.
        </p>
      </header>

      <div className={s.sectionWrapper}>
        <DocSection
          id="playground"
          title="Live Playground"
          description="Experiment with variants, sizes, and states live."
          showBorder
        >
          <SelectPlayground />
        </DocSection>

        <DocSection
          id="variants"
          title="Visual Variants"
          description="Multiple styles to match your design system."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentPreview
              title="Material Animated"
              code={`<Select variant="material-animated" label="Select Category" options={options} placeholder="Choose a category" />`}
            >
              <Select variant="material-animated" label="Select Category" options={defaultOptions} placeholder="Choose a category" fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Outline (Default)"
              code={`<Select variant="outline" label="Choose Fruit" options={options} placeholder="Pick a fruit..." />`}
            >
              <Select variant="outline" label="Choose Fruit" options={defaultOptions} placeholder="Pick a fruit..." fullWidth />
            </ComponentPreview>
            
            <ComponentPreview
              title="Standard"
              code={`<Select variant="standard" label="Select Theme" options={options} />`}
            >
              <Select variant="standard" label="Select Theme" options={defaultOptions} fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Ghost"
              code={`<Select variant="ghost" options={options} />`}
            >
              <Select variant="ghost" options={defaultOptions} fullWidth />
            </ComponentPreview>
          </div>
        </DocSection>

        <DocSection
          id="icons"
          title="With Icons & Prefixes"
          description="Enhance selection context with start icons and text prefixes."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentPreview
              title="Start Icon"
              code={`<Select startIcon={<Filter />} options={options} />`}
            >
              <Select startIcon={<Filter size={18} />} options={defaultOptions} fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="With Prefix"
              code={`<Select prefix="ID:" options={options} />`}
            >
              <Select prefix="ID:" options={defaultOptions} fullWidth />
            </ComponentPreview>
          </div>
        </DocSection>

        <DocSection
          id="validation"
          title="Validation States"
          description="Visual feedback for errors and help text."
        >
          <ComponentPreview
            title="Error State"
            code={`<Select error="This field is required" options={options} />`}
          >
            <div className="max-w-md w-full">
              <Select error="This field is required" options={defaultOptions} fullWidth />
            </div>
          </ComponentPreview>
        </DocSection>
      </div>
    </div>
  );
}
