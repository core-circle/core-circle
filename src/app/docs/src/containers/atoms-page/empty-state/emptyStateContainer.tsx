'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { EmptyStatePlayground } from '../../../components/playground/empty-state/emptyStatePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { emptyStatePageStyles as s } from './empty-state.styles';
import { EmptyStateContainerProps } from '../../../interface/containers/atoms/empty-state.types';
import {
  EMPTY_STATE_HEADER_CONTENT,
  EMPTY_STATE_BREADCRUMB_ITEMS,
  EMPTY_STATE_THEME_CONFIGS,
  EMPTY_STATE_VARIANT_GROUPS,
  EMPTY_STATE_PLAYGROUND_SECTION,
  EMPTY_STATE_MOCK_SECTION,
  EMPTY_STATE_OVERVIEW_SECTION,
  EMPTY_STATE_PROPS_DATA,
} from '../../../constants/atoms-page/empty-state/emptyStateConstants';

export default function EmptyStateContainer({
  headerContent = EMPTY_STATE_HEADER_CONTENT,
  breadcrumbItems = EMPTY_STATE_BREADCRUMB_ITEMS,
}: EmptyStateContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {EMPTY_STATE_THEME_CONFIGS.map((theme) => (
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
        {EMPTY_STATE_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...EMPTY_STATE_PLAYGROUND_SECTION}>
        <EmptyStatePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={EMPTY_STATE_MOCK_SECTION.id}
          title={EMPTY_STATE_MOCK_SECTION.title}
          description={EMPTY_STATE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {EMPTY_STATE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={EMPTY_STATE_OVERVIEW_SECTION.id}
          title={EMPTY_STATE_OVERVIEW_SECTION.title}
          description={EMPTY_STATE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={EMPTY_STATE_OVERVIEW_SECTION.quickUsage.label}
              code={EMPTY_STATE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {EMPTY_STATE_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={EMPTY_STATE_PROPS_DATA} />
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
