'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DividerPlayground } from '../../../components/playground/divider/dividerPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { dividerPageStyles as s } from './divider.styles';
import { DividerContainerProps } from '../../../interface/containers/atoms/divider.types';
import {
  DIVIDER_HEADER_CONTENT,
  DIVIDER_BREADCRUMB_ITEMS,
  DIVIDER_THEME_CONFIGS,
  DIVIDER_VARIANT_GROUPS,
  DIVIDER_PLAYGROUND_SECTION,
  DIVIDER_MOCK_SECTION,
  DIVIDER_OVERVIEW_SECTION,
  DIVIDER_PROPS_DATA,
} from '../../../constants/atoms-page/divider/dividerConstants';

export default function DividerContainer({
  headerContent = DIVIDER_HEADER_CONTENT,
  breadcrumbItems = DIVIDER_BREADCRUMB_ITEMS,
}: DividerContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {DIVIDER_THEME_CONFIGS.map((theme) => (
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
        {DIVIDER_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...DIVIDER_PLAYGROUND_SECTION}>
        <DividerPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={DIVIDER_MOCK_SECTION.id}
          title={DIVIDER_MOCK_SECTION.title}
          description={DIVIDER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {DIVIDER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={DIVIDER_OVERVIEW_SECTION.id}
          title={DIVIDER_OVERVIEW_SECTION.title}
          description={DIVIDER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={DIVIDER_OVERVIEW_SECTION.quickUsage.label}
              code={DIVIDER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {DIVIDER_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={DIVIDER_PROPS_DATA} />
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
