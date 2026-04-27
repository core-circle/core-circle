'use client';

import Link from 'next/link';
import { Breadcrumb } from '@core-circle/ui';
import { HomeIcon, ShoppingBag, ArrowRight } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { BreadcrumbPlayground } from '../../../components/playground/breadcrumb/breadcrumbPlayground';
import { breadcrumbPageStyles as s } from './breadcrumb.styles';
import { BREADCRUMB_DOCS_ITEMS, BREADCRUMB_HEADER_CONTENT, BREADCRUMB_SECTIONS } from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';

export default function BreadcrumbDocsPage() {
  const defaultItems = [
    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
    { label: 'Atoms', href: '/atoms' },
    { label: 'Breadcrumb' },
  ];

  const getSectionContent = (id: string) => {
    switch (id) {
      case 'playground':
        return <BreadcrumbPlayground />;
      case 'variants':
        const variantsSection = BREADCRUMB_SECTIONS.find(s => s.id === 'variants');
        return (
          <div className="space-y-8">
            {variantsSection?.previews?.map(preview => (
              <ComponentPreview
                key={preview.id}
                title={preview.title}
                code={preview.code}
              >
                {preview.id === 'standard' && <Breadcrumb items={defaultItems} />}
                {preview.id === 'ghost' && <Breadcrumb variant="ghost" items={defaultItems} />}
                {preview.id === 'pills' && <Breadcrumb variant="pills" items={defaultItems} />}
              </ComponentPreview>
            ))}
          </div>
        );
      case 'back-link':
        return (
          <ComponentPreview
            title={BREADCRUMB_SECTIONS.find(s => s.id === 'back-link')?.previews?.[0].title}
            code={BREADCRUMB_SECTIONS.find(s => s.id === 'back-link')?.previews?.[0].code}
          >
            <Breadcrumb showBack backLabel="Go Back" items={defaultItems} />
          </ComponentPreview>
        );
      case 'customization':
        return (
          <ComponentPreview
            title={BREADCRUMB_SECTIONS.find(s => s.id === 'customization')?.previews?.[0].title}
            code={BREADCRUMB_SECTIONS.find(s => s.id === 'customization')?.previews?.[0].code}
          >
            <Breadcrumb separator={<ArrowRight size={14} className="opacity-30 mx-1" />} items={defaultItems} />
          </ComponentPreview>
        );
      case 'item-prefix-suffix':
        return (
          <ComponentPreview
            title={BREADCRUMB_SECTIONS.find(s => s.id === 'item-prefix-suffix')?.previews?.[0].title}
            code={BREADCRUMB_SECTIONS.find(s => s.id === 'item-prefix-suffix')?.previews?.[0].code}
          >
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
                { label: 'Orders', href: '#', prefix: <ShoppingBag size={14} /> },
                { label: 'Checkout', suffix: '(Active)' }
              ]} 
            />
          </ComponentPreview>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb 
          items={BREADCRUMB_DOCS_ITEMS}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s?.title}>
          {BREADCRUMB_HEADER_CONTENT?.title}
        </h1>
        <p className={s?.description}>
          {BREADCRUMB_HEADER_CONTENT?.description}
        </p>
      </header>

      <div className="space-y-16">
        {BREADCRUMB_SECTIONS?.map((section) => (
          <DocSection
            key={section.id}
            id={`atoms-breadcrumb-${section.id}`}
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
