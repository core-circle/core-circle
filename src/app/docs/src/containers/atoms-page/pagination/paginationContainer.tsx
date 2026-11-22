'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { PaginationPlayground } from '../../../components/playground/pagination/paginationPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { paginationPageStyles as s } from './pagination.styles';
import { PaginationContainerProps } from '../../../interface/containers/atoms/pagination.types';
import {
  PAGINATION_HEADER_CONTENT,
  PAGINATION_BREADCRUMB_ITEMS,
  PAGINATION_THEME_CONFIGS,
  PAGINATION_VARIANT_GROUPS,
  PAGINATION_PLAYGROUND_SECTION,
  PAGINATION_MOCK_SECTION,
  PAGINATION_OVERVIEW_SECTION,
  PAGINATION_PROPS_DATA,
} from '../../../constants/atoms-page/pagination/paginationConstants';

export default function PaginationContainer({
  headerContent = PAGINATION_HEADER_CONTENT,
  breadcrumbItems = PAGINATION_BREADCRUMB_ITEMS,
}: PaginationContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {PAGINATION_THEME_CONFIGS.map((theme) => (
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
        {PAGINATION_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...PAGINATION_PLAYGROUND_SECTION}>
        <PaginationPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={PAGINATION_MOCK_SECTION.id}
          title={PAGINATION_MOCK_SECTION.title}
          description={PAGINATION_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {PAGINATION_MOCK_SECTION.snippets.map((snippet) => (
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
          id={PAGINATION_OVERVIEW_SECTION.id}
          title={PAGINATION_OVERVIEW_SECTION.title}
          description={PAGINATION_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={PAGINATION_OVERVIEW_SECTION.quickUsage.label}
              code={PAGINATION_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {PAGINATION_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={PAGINATION_PROPS_DATA} />
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
