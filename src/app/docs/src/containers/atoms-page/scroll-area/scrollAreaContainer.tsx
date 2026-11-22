'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ScrollAreaPlayground } from '../../../components/playground/scroll-area/scrollAreaPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { scrollAreaPageStyles as s } from './scroll-area.styles';
import { ScrollAreaContainerProps } from '../../../interface/containers/atoms/scroll-area.types';
import {
  SCROLL_AREA_HEADER_CONTENT,
  SCROLL_AREA_BREADCRUMB_ITEMS,
  SCROLL_AREA_THEME_CONFIGS,
  SCROLL_AREA_VARIANT_GROUPS,
  SCROLL_AREA_PLAYGROUND_SECTION,
  SCROLL_AREA_MOCK_SECTION,
  SCROLL_AREA_OVERVIEW_SECTION,
  SCROLL_AREA_PROPS_DATA,
} from '../../../constants/atoms-page/scroll-area/scrollAreaConstants';

export default function ScrollAreaContainer({
  headerContent = SCROLL_AREA_HEADER_CONTENT,
  breadcrumbItems = SCROLL_AREA_BREADCRUMB_ITEMS,
}: ScrollAreaContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {SCROLL_AREA_THEME_CONFIGS.map((theme) => (
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
        {SCROLL_AREA_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            {group.customRender ? (
              group.customRender()
            ) : (
              <div className="flex flex-col gap-8 w-full">
                {group.items?.map((item) => (
                  <ComponentPreview key={item.title} title={item.title} code={item.code}>
                    {item.render()}
                  </ComponentPreview>
                ))}
              </div>
            )}
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...SCROLL_AREA_PLAYGROUND_SECTION}>
        <ScrollAreaPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={SCROLL_AREA_MOCK_SECTION.id}
          title={SCROLL_AREA_MOCK_SECTION.title}
          description={SCROLL_AREA_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {SCROLL_AREA_MOCK_SECTION.snippets.map((snippet) => (
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
          id={SCROLL_AREA_OVERVIEW_SECTION.id}
          title={SCROLL_AREA_OVERVIEW_SECTION.title}
          description={SCROLL_AREA_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={SCROLL_AREA_OVERVIEW_SECTION.quickUsage.label}
              code={SCROLL_AREA_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {SCROLL_AREA_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={SCROLL_AREA_PROPS_DATA} />
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
