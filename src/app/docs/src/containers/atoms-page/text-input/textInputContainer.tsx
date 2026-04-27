'use client';

import Link from 'next/link';
import { TextInput, Breadcrumb } from '@core-circle/ui';
import { Mail, SearchIcon, Lock } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { TextInputPlayground } from '../../../components/playground/text-input/textInputPlayground';
import { textInputPageStyles as s } from './text-input.styles';
import { TEXT_INPUT_BREADCRUMB_ITEMS, TEXT_INPUT_HEADER_CONTENT, TEXT_INPUT_SECTIONS } from '../../../constants/atoms-page/text-input/textInputConstants';

interface TextInputContainerProps {
  sections: typeof TEXT_INPUT_SECTIONS;
  headerContent: typeof TEXT_INPUT_HEADER_CONTENT;
  breadcrumbItems: typeof TEXT_INPUT_BREADCRUMB_ITEMS;
}

export default function TextInputContainer({ sections, headerContent, breadcrumbItems }: TextInputContainerProps) {
  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <TextInputPlayground />;
      case 'variants':
        return (
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
        );
      case 'icons':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <TextInput startIcon={<Mail size={18} />} placeholder="Email" fullWidth />
              <TextInput endIcon={<SearchIcon size={18} />} placeholder="Search..." fullWidth />
              <TextInput startIcon={<Lock size={18} />} type="password" placeholder="Password" fullWidth />
            </div>
          </ComponentPreview>
        );
      case 'prefix-suffix':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section?.previews?.map((preview: any) => (
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
        );
      case 'validation':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <TextInput label="Password" type="password" helperText="Must be at least 8 characters" fullWidth />
              <TextInput label="Email" error="Please enter a valid email address" defaultValue="invalid-email" fullWidth />
            </div>
          </ComponentPreview>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s?.title}>{headerContent?.title}</h1>
        <p className={s?.description}>{headerContent?.description}</p>
      </header>
      <div className={s?.sectionWrapper}>
        {sections?.map((section) => (
          <DocSection key={section.id} id={`atoms-text-input-${section.id}`} title={section.title} description={section.description} showBorder={section.showBorder}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
