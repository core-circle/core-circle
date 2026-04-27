'use client';

import Link from 'next/link';
import { Breadcrumb, Checkbox } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { CheckboxPlayground } from '../../../components/playground/checkbox/checkboxPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import { CHECKBOX_BREADCRUMB_ITEMS, CHECKBOX_HEADER_CONTENT, CHECKBOX_SECTIONS } from '../../../constants/atoms-page/checkbox/checkboxConstants';

export default function CheckboxDocsPage() {
  const getSectionContent = (id: string) => {
    switch (id) {
      case 'playground':
        return <CheckboxPlayground />;
      case 'variants':
        const variantsSection = CHECKBOX_SECTIONS.find(s => s.id === 'variants');
        return (
          <div className="space-y-8">
            {variantsSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
                {preview.id === 'outline' && <Checkbox variant="outline" label="Default Outline" />}
                {preview.id === 'solid' && <Checkbox variant="solid" label="Solid Variant" defaultChecked />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'sizes':
        const sizesSection = CHECKBOX_SECTIONS.find(s => s.id === 'sizes');
        return (
          <div className="space-y-8">
            {sizesSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
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
        const statesSection = CHECKBOX_SECTIONS.find(s => s.id === 'states');
        return (
          <div className="space-y-8">
            {statesSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
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
        <Breadcrumb 
          items={CHECKBOX_BREADCRUMB_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s?.title}>{CHECKBOX_HEADER_CONTENT?.title}</h1>
        <p className={s?.description}>
          {CHECKBOX_HEADER_CONTENT?.description}
        </p>
      </header>

      <div className="space-y-16">
        {CHECKBOX_SECTIONS?.map((section) => (
          <DocSection
            key={section.id}
            id={`atoms-checkbox-${section.id}`}
            title={section.title}
            description={section.description}
          >
            {getSectionContent(section.id)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
