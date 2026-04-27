'use client';

import Link from 'next/link';
import { Breadcrumb, Checkbox } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { CheckboxPlayground } from '../../../components/playground/checkbox/checkboxPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import { CHECKBOX_BREADCRUMB_ITEMS, CHECKBOX_HEADER_CONTENT, CHECKBOX_SECTIONS } from '../../../constants/atoms-page/checkbox/checkboxConstants';

interface CheckboxContainerProps {
  sections: typeof CHECKBOX_SECTIONS;
  headerContent: typeof CHECKBOX_HEADER_CONTENT;
  breadcrumbItems: typeof CHECKBOX_BREADCRUMB_ITEMS;
}

export default function CheckboxContainer({ sections, headerContent, breadcrumbItems }: CheckboxContainerProps) {
  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <CheckboxPlayground />;
      case 'variants':
        return (
          <div className="space-y-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                {preview.id === 'outline' && <Checkbox variant="outline" label="Default Outline" />}
                {preview.id === 'solid' && <Checkbox variant="solid" label="Solid Variant" defaultChecked />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'sizes':
        return (
          <div className="space-y-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                <div className="flex flex-col gap-4">
                  <Checkbox size="sm" label="Small Checkbox" />
                  <Checkbox size="md" label="Medium Checkbox" />
                  <Checkbox size="lg" label="Large Checkbox" />
                </div>
              </ComponentPreview>
            ))}
          </div>
        );
      case 'states':
        return (
          <div className="space-y-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                <div className="flex flex-col gap-6">
                  <Checkbox label="Disabled Checkbox" disabled />
                  <Checkbox label="Error State" error="This field is required" />
                  <Checkbox label="Indeterminate State" indeterminate />
                </div>
              </ComponentPreview>
            ))}
          </div>
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
      <div className="space-y-16">
        {sections?.map((section) => (
          <DocSection key={section.id} id={`atoms-checkbox-${section.id}`} title={section.title} description={section.description}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
