'use client';

import React from 'react';
import Link from 'next/link';
import { Label, Breadcrumb } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { LabelPlayground } from '../../../components/playground/label/labelPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import { LABEL_BREADCRUMB_ITEMS, LABEL_HEADER_CONTENT, LABEL_SECTIONS } from '../../../constants/atoms-page/label/labelConstants';

import { LabelContainerProps } from '../../../interface/containers/atoms/label.types';

export default function LabelContainer({ sections, headerContent, breadcrumbItems }: LabelContainerProps) {
  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <LabelPlayground />;
      case 'variants':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                {preview.id === 'default' && <Label>Default Label</Label>}
                {preview.id === 'muted' && <Label variant="muted">Muted Label</Label>}
                {preview.id === 'primary' && <Label variant="primary">Primary Label</Label>}
                {preview.id === 'warning' && <Label variant="warning">Warning Label</Label>}
                {preview.id === 'error' && <Label variant="error">Error Label</Label>}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'sizes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section?.previews?.map((preview: any) => (
              <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                <Label size={preview.id as any}>{preview.title}</Label>
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
      <div className={s?.sectionWrapper}>
        {sections?.map((section) => (
          <DocSection key={section.id} id={`atoms-label-${section.id}`} title={section.title} description={section.description} showBorder={section.showBorder}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
