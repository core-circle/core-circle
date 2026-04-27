'use client';

import Link from 'next/link';
import { Breadcrumb, RadioButton } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { RadioButtonPlayground } from '../../../components/playground/radio-button/radioButtonPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import { RADIO_BUTTON_BREADCRUMB_ITEMS, RADIO_BUTTON_HEADER_CONTENT, RADIO_BUTTON_SECTIONS } from '../../../constants/atoms-page/radio-button/radioButtonConstants';

export default function RadioButtonDocsPage() {
  const getSectionContent = (id: string) => {
    switch (id) {
      case 'playground':
        return <RadioButtonPlayground />;
      case 'variants':
        const variantsSection = RADIO_BUTTON_SECTIONS.find(s => s.id === 'variants');
        return (
          <div className="space-y-8">
            {variantsSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
                {preview.id === 'outline' && <RadioButton variant="outline" label="Default Outline" />}
                {preview.id === 'solid' && <RadioButton variant="solid" label="Solid Variant" defaultChecked />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'groups':
        const groupsSection = RADIO_BUTTON_SECTIONS.find(s => s.id === 'groups');
        return (
          <div className="space-y-8">
            {groupsSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
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
        const sizesSection = RADIO_BUTTON_SECTIONS.find(s => s.id === 'sizes');
        return (
          <div className="space-y-8">
            {sizesSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
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
        <Breadcrumb 
          items={RADIO_BUTTON_BREADCRUMB_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s?.title}>{RADIO_BUTTON_HEADER_CONTENT?.title}</h1>
        <p className={s?.description}>
          {RADIO_BUTTON_HEADER_CONTENT?.description}
        </p>
      </header>

      <div className="space-y-16">
        {RADIO_BUTTON_SECTIONS?.map((section) => (
          <DocSection
            key={section.id}
            id={`atoms-radio-button-${section.id}`}
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
