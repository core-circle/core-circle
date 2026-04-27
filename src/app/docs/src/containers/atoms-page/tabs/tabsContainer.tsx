'use client';

import Link from 'next/link';
import { Breadcrumb, Tabs } from '@core-circle/ui';
import { UserIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { TabsPlayground } from '../../../components/playground/tabs/tabsPlayground';
import { tabsPageStyles as s } from './tabs.styles';
import { TABS_BREADCRUMB_ITEMS, TABS_HEADER_CONTENT, TABS_SECTIONS } from '../../../constants/atoms-page/tabs/tabsConstants';

export default function TabsContainer() {
  const getSectionContent = (section: any) => {
    switch (section.id) {
      case 'playground':
        return <TabsPlayground />;
      case 'variants':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-col gap-8 w-full max-w-lg">
              <Tabs variant="underline" items={[{ id: '1', label: 'Tab 1', content: <div className="mt-2 text-sm text-slate-500">Underline Content</div> }]} />
              <Tabs variant="pills" items={[{ id: '1', label: 'Tab 1', content: <div className="mt-2 text-sm text-slate-500">Pills Content</div> }]} />
              <Tabs variant="enclosed" items={[{ id: '1', label: 'Tab 1', content: <div className="p-4 bg-white border border-slate-200 mt-0 text-sm text-slate-500">Enclosed Content</div> }]} />
            </div>
          </ComponentPreview>
        );
      case 'sizes':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-col gap-8 w-full max-w-lg">
              <Tabs size="sm" variant="pills" items={[{ id: '1', label: 'Small', content: null }]} />
              <Tabs size="md" variant="pills" items={[{ id: '1', label: 'Medium', content: null }]} />
              <Tabs size="lg" variant="pills" items={[{ id: '1', label: 'Large', content: null }]} />
            </div>
          </ComponentPreview>
        );
      case 'icons':
        return (
          <ComponentPreview title={section?.previews?.[0].title} code={section?.previews?.[0].code}>
            <div className="flex flex-wrap gap-4 w-full max-w-lg">
              <Tabs 
                variant="underline" 
                items={[
                  { id: '1', label: 'Profile', icon: <UserIcon size={16} />, content: <div className="mt-2 text-sm text-slate-500">Profile with Icon</div> }
                ]} 
              />
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
        <Breadcrumb items={TABS_BREADCRUMB_ITEMS} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s?.title}>{TABS_HEADER_CONTENT?.title}</h1>
        <p className={s?.description}>{TABS_HEADER_CONTENT?.description}</p>
      </header>
      <div className={s?.sectionWrapper}>
        {TABS_SECTIONS?.map((section) => (
          <DocSection key={section.id} id={`atoms-tabs-${section.id}`} title={section.title} description={section.description} showBorder={section.showBorder}>
            {getSectionContent(section)}
          </DocSection>
        ))}
      </div>
    </div>
  );
}
