'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { BreadcrumbPlayground } from '../../../components/playground/breadcrumb/breadcrumbPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { breadcrumbPageStyles as s } from './breadcrumb.styles';
import { BreadcrumbContainerProps } from '../../../interface/containers/atoms/breadcrumb.types';
import {
  BREADCRUMB_HEADER_CONTENT,
  BREADCRUMB_BREADCRUMB_ITEMS,
  BREADCRUMB_THEME_CONFIGS,
  BREADCRUMB_VARIANT_GROUPS,
  BREADCRUMB_PLAYGROUND_SECTION,
  BREADCRUMB_MOCK_SECTION,
  BREADCRUMB_OVERVIEW_SECTION,
  BREADCRUMB_PROPS_DATA,
} from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';

export default function BreadcrumbContainer({
  headerContent = BREADCRUMB_HEADER_CONTENT,
  breadcrumbItems = BREADCRUMB_BREADCRUMB_ITEMS,
}: BreadcrumbContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {BREADCRUMB_THEME_CONFIGS.map((theme) => (
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
        {BREADCRUMB_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...BREADCRUMB_PLAYGROUND_SECTION}>
        <BreadcrumbPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={BREADCRUMB_MOCK_SECTION.id}
          title={BREADCRUMB_MOCK_SECTION.title}
          description={BREADCRUMB_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {BREADCRUMB_MOCK_SECTION.snippets.map((snippet) => (
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
          id={BREADCRUMB_OVERVIEW_SECTION.id}
          title={BREADCRUMB_OVERVIEW_SECTION.title}
          description={BREADCRUMB_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={BREADCRUMB_OVERVIEW_SECTION.quickUsage.label}
              code={BREADCRUMB_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {BREADCRUMB_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={BREADCRUMB_PROPS_DATA} />
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
