'use client';

import Link from 'next/link';
import { Select, Breadcrumb } from '@core-circle/ui';
import { Filter } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { SelectPlayground } from '../../../components/playground/select/selectPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import { SELECT_BREADCRUMB_ITEMS, SELECT_HEADER_CONTENT, SELECT_SECTIONS } from '../../../constants/atoms-page/select/selectConstants';

import { SelectContainerProps } from '../../../interface/containers/atoms/select.types';

export default function SelectContainer({ sections, headerContent, breadcrumbItems }: SelectContainerProps) {
  const defaultOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <SelectPlayground />;
      case 'variants':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                {preview.id === 'material-animated' && <Select variant="material-animated" label="Select Category" options={defaultOptions} placeholder="Choose a category" fullWidth />}
                {preview.id === 'outline' && <Select variant="outline" label="Choose Fruit" options={defaultOptions} placeholder="Pick a fruit..." fullWidth />}
                {preview.id === 'standard' && <Select variant="standard" label="Select Theme" options={defaultOptions} fullWidth />}
                {preview.id === 'ghost' && <Select variant="ghost" options={defaultOptions} fullWidth />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'icons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                {preview.id === 'start-icon' && <Select startIcon={<Filter size={18} />} options={defaultOptions} fullWidth />}
                {preview.id === 'prefix' && <Select prefix="ID:" options={defaultOptions} fullWidth />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'validation':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="max-w-md w-full">
              <Select error="This field is required" options={defaultOptions} fullWidth />
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
          <DocSection key={section.id} id={`atoms-select-${section.id}`} title={section.title} description={section.description} showBorder={section.showBorder}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
