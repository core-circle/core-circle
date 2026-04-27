'use client';

import Link from 'next/link';
import { Breadcrumb, RadioButton } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { RadioButtonPlayground } from '../../../components/playground/radio-button/radioButtonPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import { RADIO_BUTTON_BREADCRUMB_ITEMS, RADIO_BUTTON_HEADER_CONTENT, RADIO_BUTTON_SECTIONS } from '../../../constants/atoms-page/radio-button/radioButtonConstants';

interface RadioButtonContainerProps {
  sections: typeof RADIO_BUTTON_SECTIONS;
  headerContent: typeof RADIO_BUTTON_HEADER_CONTENT;
  breadcrumbItems: typeof RADIO_BUTTON_BREADCRUMB_ITEMS;
}

export default function RadioButtonContainer({ sections, headerContent, breadcrumbItems }: RadioButtonContainerProps) {
  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <RadioButtonPlayground />;
      case 'variants':
        return (
          <div className="space-y-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                {preview.id === 'outline' && <RadioButton variant="outline" label="Default Outline" />}
                {preview.id === 'solid' && <RadioButton variant="solid" label="Solid Variant" defaultChecked />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'groups':
        return (
          <div className="space-y-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                <div className="flex flex-col gap-3">
                  <RadioButton name="fruit" value="apple" label="Apple" defaultChecked />
                  <RadioButton name="fruit" value="banana" label="Banana" />
                  <RadioButton name="fruit" value="cherry" label="Cherry" />
                </div>
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
                  <RadioButton size="sm" label="Small Radio" name="s" />
                  <RadioButton size="md" label="Medium Radio" name="m" />
                  <RadioButton size="lg" label="Large Radio" name="l" />
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
          <DocSection key={section.id} id={`atoms-radio-button-${section.id}`} title={section.title} description={section.description}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
