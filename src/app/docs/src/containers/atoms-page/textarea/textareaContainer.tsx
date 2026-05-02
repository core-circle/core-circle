'use client';

import React from 'react';
import Link from 'next/link';
import { Textarea, Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { TextareaPlayground } from '../../../components/playground/textarea/textareaPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import {
  TEXTAREA_PROPS_DATA
} from '../../../constants/atoms-page/textarea/textareaConstants';
import { TextareaContainerProps } from '../../../interface/containers/atoms/textarea.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function TextareaContainer({ sections, headerContent, breadcrumbItems }: TextareaContainerProps) {
  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <TextareaPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="textarea-variants" title="Visual Variants" description="Different styles to match your application's design system.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'material-animated' && <Textarea variant="material-animated" label="Floating Label" placeholder="Type here..." fullWidth rows={4} />}
                    {preview.id === 'outline' && <Textarea variant="outline" label="Description" placeholder="Enter description" fullWidth rows={4} />}
                    {preview.id === 'material' && <Textarea variant="material" label="Bio" placeholder="Tell us about yourself" fullWidth rows={4} />}
                    {preview.id === 'standard' && <Textarea variant="standard" label="Feedback" placeholder="How can we improve?" fullWidth rows={4} />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="textarea-resize" title="Resizing" description="Control the resizing capabilities of the textarea.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.find(s => s.id === 'resize')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'none' && <Textarea resize="none" label="Fixed Height" placeholder="I cannot be resized" fullWidth rows={4} />}
                    {preview.id === 'vertical' && <Textarea resize="vertical" label="Vertical Resize" placeholder="I can only be resized vertically" fullWidth rows={4} />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="textarea-validation" title="Validation States" description="Clear feedback through error messages and helper text.">
              <ComponentPreview title="Errors and Helpers" code={sections.find(s => s.id === 'validation')?.previews?.[0].code}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  <Textarea label="Comment" helperText="Maximum 500 characters" fullWidth rows={3} />
                  <Textarea label="Message" error="Message is too short" defaultValue="Hi" fullWidth rows={3} />
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
          <DocSection id="textarea-intro" title="Introduction" description="Textarea is used for collecting multi-line text input. It supports all the visual variants of TextInput while adding specific controls for resizing behavior.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Textarea } from '@core-circle/ui';\n\n<Textarea \n  label="Description" \n  placeholder="Enter details..." \n  rows={5}\n  variant="outline"\n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={TEXTAREA_PROPS_DATA} />
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
          <DocSection id="textarea-mock" title="Dynamic Integration" description="Example of how to map API or CMS response data to the Textarea component props.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "textarea_789",
                  fieldLabel: "Biography",
                  placeholder: "Tell your story...",
                  rows: 8,
                  style: {
                    variant: "material-animated",
                  },
                  behavior: {
                    resize: "none"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicTextarea = ({ data }) => {\n  return (\n    <Textarea\n      label={data.fieldLabel}\n      placeholder={data.placeholder}\n      rows={data.rows}\n      variant={data.style.variant}\n      resize={data.behavior.resize}\n      fullWidth\n    />\n  );\n};`}
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
        <h1 className={s.title}>{headerContent.title}</h1>
        <p className={s.description}>{headerContent.description}</p>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
