'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TabsPlayground } from '../../../components/playground/tabs/tabsPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { tabsPageStyles as s } from './tabs.styles';
import { TabsContainerProps } from '../../../interface/containers/atoms/tabs.types';
import {
  TABS_HEADER_CONTENT,
  TABS_BREADCRUMB_ITEMS,
  TABS_THEME_CONFIGS,
  TABS_VARIANT_GROUPS,
  TABS_PLAYGROUND_SECTION,
  TABS_MOCK_SECTION,
  TABS_OVERVIEW_SECTION,
  TABS_PROPS_DATA,
} from '../../../constants/atoms-page/tabs/tabsConstants';

export default function TabsContainer({
  headerContent = TABS_HEADER_CONTENT,
  breadcrumbItems = TABS_BREADCRUMB_ITEMS,
}: TabsContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TABS_THEME_CONFIGS.map((theme) => (
          <DocSection key={theme.id} id={theme.id} title={theme.title} description={theme.description}>
            <ComponentPreview title={theme.previewTitle} code={theme.code}>
              {theme.render()}
            </ComponentPreview>
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const variants = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TABS_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  {item.render()}
                </ComponentPreview>
              ))}
            </div>
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...TABS_PLAYGROUND_SECTION}>
        <TabsPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TABS_MOCK_SECTION.id}
          title={TABS_MOCK_SECTION.title}
          description={TABS_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TABS_MOCK_SECTION.snippets.map((snippet) => (
              <CodeSnippet key={snippet.label} label={snippet.label} code={snippet.code} />
            ))}
          </div>
        </DocSection>
      </div>
    ),
    []
  );

  const overview = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TABS_OVERVIEW_SECTION.id}
          title={TABS_OVERVIEW_SECTION.title}
          description={TABS_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TABS_OVERVIEW_SECTION.quickUsage.label}
              code={TABS_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {TABS_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={TABS_PROPS_DATA} />
            </div>
          </div>
        </DocSection>
      </div>
    ),
    []
  );

  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{ theming, variants, playground, mockCode, overview }}
    />
  );
}
