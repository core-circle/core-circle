'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs } from '@core-circle/ui';
import { UserIcon, SettingsIcon, Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { TabsPlayground } from '../../../components/playground/tabs/tabsPlayground';
import { atomsPageStyles as s } from '../atoms.styles';
import {
  TABS_BREADCRUMB_ITEMS,
  TABS_HEADER_CONTENT,
  TABS_SECTIONS,
  TABS_PROPS_DATA
} from '../../../constants/atoms-page/tabs/tabsConstants';
import { TabsContainerProps } from '../../../interface/containers/atoms/tabs.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function TabsContainer({ sections = TABS_SECTIONS, headerContent = TABS_HEADER_CONTENT, breadcrumbItems = TABS_BREADCRUMB_ITEMS }: TabsContainerProps) {
  const defaultItems = [
    { id: 'profile', label: 'Profile', content: <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">Profile Content</div>, icon: <UserIcon size={16} /> },
    { id: 'settings', label: 'Settings', content: <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">Settings Content</div>, icon: <SettingsIcon size={16} /> },
    { id: 'messages', label: 'Messages', content: <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">Messages Content</div>, disabled: true }
  ];

  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <TabsPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="tabs-styles" title="Style Variants" description="Choose from different visual styles to match your design context.">
              <div className="flex flex-col gap-8">
                {sections.find(s => s.id === 'variants')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    <div className="flex flex-col gap-8 w-full">
                      <Tabs variant="underline" items={defaultItems.slice(0, 2)} />
                      <Tabs variant="pills" items={defaultItems.slice(0, 2)} />
                      <Tabs variant="enclosed" items={defaultItems.slice(0, 2)} />
                    </div>
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="tabs-sizes" title="Sizes" description="Adjust the scale of the tabs for different UI densities.">
              <ComponentPreview title="Size Scale" code={sections.find(s => s.id === 'sizes')?.previews?.[0].code}>
                <div className="flex flex-col gap-8 w-full">
                  <Tabs size="sm" items={defaultItems.slice(0, 2)} />
                  <Tabs size="md" items={defaultItems.slice(0, 2)} />
                  <Tabs size="lg" items={defaultItems.slice(0, 2)} />
                </div>
              </ComponentPreview>
            </DocSection>

            <DocSection id="tabs-icons" title="With Icons" description="Use icons alongside labels to improve scanability.">
              <ComponentPreview title="Icons Integration" code={sections.find(s => s.id === 'icons')?.previews?.[0].code}>
                <Tabs items={defaultItems} />
              </ComponentPreview>
            </DocSection>
          </div>
        );
      default:
        return null;
    }
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="tabs-intro" title="Introduction" description="Tabs are used to organize related content into separate views that users can switch between. They are ideal for saving space while keeping relevant information accessible within the same context.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Tabs } from '@core-circle/ui';\n\n<Tabs items={[\n  { id: '1', label: 'Tab 1', content: <p>Content 1</p> },\n  { id: '2', label: 'Tab 2', content: <p>Content 2</p> }\n]} />`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={TABS_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: getSectionContent('variants')
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: getSectionContent('playground')
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="tabs-mock" title="Dynamic Integration" description="Example of building a dynamic tab system from an API-driven configuration.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  activeTab: "settings",
                  layout: "pills",
                  panels: [
                    { id: "profile", title: "User Profile" },
                    { id: "settings", title: "App Settings" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicDashboard = ({ widgets }) => {\n  const tabItems = widgets.map(w => ({\n    id: w.id,\n    label: w.title,\n    content: <WidgetContent type={w.type} data={w.data} />\n  }));\n\n  return (\n    <Tabs \n      items={tabItems} \n      variant="pills" \n      fullWidth\n    />\n  );\n};`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s.title}>{headerContent.title}</h1>
        <p className={s.description}>{headerContent.description}</p>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
