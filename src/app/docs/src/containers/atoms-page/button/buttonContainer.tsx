'use client';

import Link from 'next/link';
import { Button, Breadcrumb } from '@core-circle/ui';
import { Mail, ArrowRight, SettingsIcon, Rotate, Clock, Bell } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { ButtonPlayground } from '../../../components/playground/button/buttonPlayground';
import { buttonPageStyles as s } from './button.styles';
import { BUTTON_BREADCRUMB_ITEMS, BUTTON_HEADER_CONTENT, BUTTON_SECTIONS } from '../../../constants/atoms-page/button/buttonConstants';

interface ButtonContainerProps {
  sections: typeof BUTTON_SECTIONS;
  headerContent: typeof BUTTON_HEADER_CONTENT;
  breadcrumbItems: typeof BUTTON_BREADCRUMB_ITEMS;
}

export default function ButtonContainer({ sections, headerContent, breadcrumbItems }: ButtonContainerProps) {
  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <ButtonPlayground />;
      case 'variants':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </ComponentPreview>
        );
      case 'sizes':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-wrap items-end gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" variant="outline"><Bell size={18} /></Button>
            </div>
          </ComponentPreview>
        );
      case 'icons':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-wrap gap-4">
              <Button startIcon={<Mail size={18} />}>Email</Button>
              <Button variant="secondary" startIcon={<SettingsIcon size={18} />}>Continue</Button>
              <Button variant="ghost" endIcon={<ArrowRight size={18} />}>Settings</Button>
            </div>
          </ComponentPreview>
        );
      case 'loading':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-wrap gap-4">
              <Button loading>Default Loader</Button>
              <Button variant="secondary" loading startLoadingIcon={<Rotate size={16} />}>Custom Start Loader</Button>
              <Button variant="warning" loading endLoadingIcon={<Clock size={16} />}>Custom End Loader</Button>
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
          <DocSection key={section.id} id={`atoms-button-${section.id}`} title={section.title} description={section.description} showBorder={section.showBorder}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
