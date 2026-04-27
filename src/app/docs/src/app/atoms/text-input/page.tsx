'use client';

import Link from 'next/link';
import { TextInput, Breadcrumb } from '@core-circle/ui';
import { Mail, Lock, SearchIcon, HomeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { TextInputPlayground } from '../../../components/playground/text-input/textInputPlayground';
import { textInputPageStyles as s } from './text-input.styles';

export default function TextInputDocsPage() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
            { label: 'Atoms', href: '/atoms' },
            { label: 'TextInput' }
          ]}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s.title}>
          TextInput
        </h1>
        <p className={s.description}>
          A highly versatile input component supporting multiple visual styles, including Google Material design, with integrated icon slots and validation states.
        </p>
      </header>

      <div className={s.sectionWrapper}>
        <DocSection
          id="playground"
          title="Live Playground"
          description="Experiment with variants, sizes, and icon positions live."
          showBorder
        >
          <TextInputPlayground />
        </DocSection>

        <DocSection
          id="variants"
          title="Visual Variants"
          description="Five distinct styles to fit any design requirement."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentPreview
              title="Material Animated"
              code={`<TextInput variant="material-animated" label="Floating Label" placeholder="" />`}
            >
              <TextInput variant="material-animated" label="Floating Label" placeholder="Click me to animate" fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Outline (Default)"
              code={`<TextInput variant="outline" label="Username" placeholder="Enter username" />`}
            >
              <TextInput variant="outline" label="Username" placeholder="Enter username" fullWidth />
            </ComponentPreview>
            
            <ComponentPreview
              title="Material Design (Static)"
              code={`<TextInput variant="material" label="Email Address" placeholder="name@example.com" />`}
            >
              <TextInput variant="material" label="Email Address" placeholder="name@example.com" fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Standard (Minimal)"
              code={`<TextInput variant="standard" label="Company Name" placeholder="Google" />`}
            >
              <TextInput variant="standard" label="Company Name" placeholder="Google" fullWidth />
            </ComponentPreview>

            <ComponentPreview
              title="Ghost"
              code={`<TextInput variant="ghost" placeholder="Search components..." />`}
            >
              <TextInput variant="ghost" placeholder="Search components..." fullWidth />
            </ComponentPreview>
          </div>
        </DocSection>

        <DocSection
          id="icons"
          title="With Icons"
          description="Enhance usability with contextual icons at the start or end of the input."
        >
          <ComponentPreview
            title="Icon Positions"
            code={`<TextInput startIcon={<Mail />} placeholder="Email" />\n<TextInput endIcon={<SearchIcon />} placeholder="Search..." />\n<TextInput startIcon={<Lock />} type="password" placeholder="Password" />`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <TextInput startIcon={<Mail size={18} />} placeholder="Email" fullWidth />
              <TextInput endIcon={<SearchIcon size={18} />} placeholder="Search..." fullWidth />
              <TextInput startIcon={<Lock size={18} />} type="password" placeholder="Password" fullWidth />
            </div>
          </ComponentPreview>
        </DocSection>
        
        <DocSection
          id="prefix-suffix"
          title="Prefix and Suffix"
          description="Add non-editable text or symbols at the start or end of the input field."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentPreview
              title="Currency & Units"
              code={`<TextInput \n  label="Price" \n  prefix={<span className="font-bold">$</span>} \n  suffix="USD" \n  placeholder="0.00" \n/>`}
            >
              <TextInput 
                label="Price" 
                prefix={<span className="font-bold text-core-circle-text-main">$</span>} 
                suffix={<span className="text-core-circle-text-muted">USD</span>} 
                placeholder="0.00" 
                fullWidth 
              />
            </ComponentPreview>

            <ComponentPreview
              title="Titles & Measurements"
              code={`<TextInput prefix="Mr." placeholder="Full Name" />\n<TextInput suffix="kgs" placeholder="Weight" />`}
            >
              <div className="space-y-6 w-full">
                <TextInput prefix="Mr." placeholder="Full Name" fullWidth />
                <TextInput suffix="kgs" placeholder="Weight" fullWidth />
              </div>
            </ComponentPreview>
          </div>
        </DocSection>

        <DocSection
          id="validation"
          title="Validation States"
          description="Built-in error and helper text support for clear user feedback."
        >
          <ComponentPreview
            title="Errors and Helpers"
            code={`<TextInput label="Password" type="password" helperText="Must be at least 8 characters" />\n<TextInput label="Email" error="Please enter a valid email address" defaultValue="invalid-email" />`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <TextInput label="Password" type="password" helperText="Must be at least 8 characters" fullWidth />
              <TextInput label="Email" error="Please enter a valid email address" defaultValue="invalid-email" fullWidth />
            </div>
          </ComponentPreview>
        </DocSection>
      </div>
    </div>
  );
}
