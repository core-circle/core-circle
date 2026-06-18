'use client';

import React from 'react';
import Link from 'next/link';
import { TextInput, Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { Mail, SearchIcon, Lock, Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { TextInputPlayground } from '../../../components/playground/text-input/textInputPlayground';
import { textInputPageStyles as s } from './text-input.styles';
import {
  TEXT_INPUT_PROPS_DATA
} from '../../../constants/atoms-page/text-input/textInputConstants';
import { TextInputContainerProps } from '../../../interface/containers/atoms/text-input.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function TextInputContainer({ sections, headerContent, breadcrumbItems }: TextInputContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <TextInputPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="text-input-variants" title="Visual Variants" description="Five distinct styles to fit any design requirement.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'material-animated' && <TextInput variant="material-animated" label="Floating Label" placeholder="Click me to animate" fullWidth />}
                    {preview.id === 'outline' && <TextInput variant="outline" label="Username" placeholder="Enter username" fullWidth />}
                    {preview.id === 'material' && <TextInput variant="material" label="Email Address" placeholder="name@example.com" fullWidth />}
                    {preview.id === 'standard' && <TextInput variant="standard" label="Company Name" placeholder="Google" fullWidth />}
                    {preview.id === 'ghost' && <TextInput variant="ghost" placeholder="Search components..." fullWidth />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="text-input-icons" title="Icons" description="Enhance usability with contextual icons at the start or end of the input.">
              <ComponentPreview title="Icon Positions" code={sections.find(s => s.id === 'icons')?.previews?.[0].code}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                  <TextInput startIcon={<Mail size={18} />} placeholder="Email" fullWidth />
                  <TextInput endIcon={<SearchIcon size={18} />} placeholder="Search..." fullWidth />
                  <TextInput startIcon={<Lock size={18} />} type="password" placeholder="Password" fullWidth />
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="text-input-prefix-suffix" title="Prefix & Suffix" description="Add non-editable text or symbols at the start or end of the input field.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.find(s => s.id === 'prefix-suffix')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'currency' && (
                      <TextInput label="Price" prefix={<span className="font-bold text-core-circle-text-main">$</span>} suffix={<span className="text-core-circle-text-muted">USD</span>} placeholder="0.00" fullWidth />
                    )}
                    {preview.id === 'titles' && (
                      <div className="space-y-6 w-full">
                        <TextInput prefix="Mr." placeholder="Full Name" fullWidth />
                        <TextInput suffix="kgs" placeholder="Weight" fullWidth />
                      </div>
                    )}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="text-input-validation" title="Validation States" description="Built-in error and helper text support for clear user feedback.">
              <ComponentPreview title="Errors and Helpers" code={sections.find(s => s.id === 'validation')?.previews?.[0].code}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  <TextInput label="Password" type="password" helperText="Must be at least 8 characters" fullWidth />
                  <TextInput label="Email" error="Please enter a valid email address" defaultValue="invalid-email" fullWidth />
                </div>
              </ComponentPreview>
            </DocSection>
          </div>
        );
      default:
        return null;
    }
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="text-input-intro" title="Introduction" description="TextInput is a fundamental component for collecting text-based user input. It supports multiple design styles, integrated validation, and flexible prefix/suffix slots.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { TextInput } from '@core-circle/ui';\n\n<TextInput \n  label="Email" \n  placeholder="Enter your email" \n  variant="outline"\n/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={TEXT_INPUT_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: getSectionContent('variants')
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: getSectionContent('playground')
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="text-input-mock" title="Dynamic Integration" description="Example of how to map API or CMS response data to the TextInput component props.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "input_456",
                  fieldLabel: "Username",
                  placeholder: "Enter your handle",
                  style: {
                    variant: "material-animated",
                  },
                  validation: {
                    error: "Handle already taken",
                    required: true
                  },
                  layout: {
                    fullWidth: true
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicInput = ({ data }) => {\n  return (\n    <TextInput\n      label={data.fieldLabel}\n      placeholder={data.placeholder}\n      variant={data.style.variant}\n      error={data.validation.error}\n      fullWidth={data.layout.fullWidth}\n    />\n  );\n};`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <Typography variant="h1" className={s.title}>{headerContent.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
