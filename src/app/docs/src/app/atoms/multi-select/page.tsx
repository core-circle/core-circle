'use client';

import Link from 'next/link';
import { MultiSelect, Breadcrumb } from '@core-circle/ui';
import { Users, Tag } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { MultiSelectPlayground } from '../../../components/playground/multi-select/multiSelectPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import { MULTI_SELECT_BREADCRUMB_ITEMS, MULTI_SELECT_HEADER_CONTENT, MULTI_SELECT_SECTIONS } from '../../../constants/atoms-page/multi-select/multiSelectConstants';

export default function MultiSelectDocsPage() {
  const defaultOptions = [
    { value: 'react', label: 'React' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'tailwind', label: 'Tailwind CSS' },
  ];

  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <MultiSelectPlayground />;
      case 'variants':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
                {preview.id === 'material-animated' && <MultiSelect variant="material-animated" label="Skills" options={defaultOptions} placeholder="Search skills..." fullWidth />}
                {preview.id === 'outline' && <MultiSelect variant="outline" label="Categories" options={defaultOptions} fullWidth />}
                {preview.id === 'standard' && <MultiSelect variant="standard" label="Tags" options={defaultOptions} fullWidth />}
                {preview.id === 'ghost' && <MultiSelect variant="ghost" placeholder="Add filters..." options={defaultOptions} fullWidth />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'icons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
                {preview.id === 'user-selection' && <MultiSelect startIcon={<Users size={18} />} options={defaultOptions} fullWidth />}
                {preview.id === 'tagging' && <MultiSelect prefix={<Tag size={14} />} options={defaultOptions} fullWidth />}
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
          items={MULTI_SELECT_BREADCRUMB_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s?.title}>
          {MULTI_SELECT_HEADER_CONTENT?.title}
        </h1>
        <p className={s?.description}>
          {MULTI_SELECT_HEADER_CONTENT?.description}
        </p>
      </header>

      <div className={s?.sectionWrapper}>
        {MULTI_SELECT_SECTIONS?.map((section) => (
          <DocSection
            key={section.id}
            id={`atoms-multi-select-${section.id}`}
            title={section.title}
            description={section.description}
            showBorder={section.showBorder}
          >
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
