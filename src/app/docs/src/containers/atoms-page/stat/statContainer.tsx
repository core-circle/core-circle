'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { StatPlayground } from '../../../components/playground/stat/statPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { statPageStyles as s } from './stat.styles';
import { StatContainerProps } from '../../../interface/containers/atoms/stat.types';
import {
  STAT_HEADER_CONTENT,
  STAT_BREADCRUMB_ITEMS,
  STAT_THEME_CONFIGS,
  STAT_VARIANT_GROUPS,
  STAT_PLAYGROUND_SECTION,
  STAT_MOCK_SECTION,
  STAT_OVERVIEW_SECTION,
  STAT_PROPS_DATA,
} from '../../../constants/atoms-page/stat/statConstants';

export default function StatContainer({
  headerContent = STAT_HEADER_CONTENT,
  breadcrumbItems = STAT_BREADCRUMB_ITEMS,
}: StatContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {STAT_THEME_CONFIGS.map((theme) => (
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
        {STAT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...STAT_PLAYGROUND_SECTION}>
        <StatPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={STAT_MOCK_SECTION.id}
          title={STAT_MOCK_SECTION.title}
          description={STAT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {STAT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={STAT_OVERVIEW_SECTION.id}
          title={STAT_OVERVIEW_SECTION.title}
          description={STAT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={STAT_OVERVIEW_SECTION.quickUsage.label}
              code={STAT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {STAT_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={STAT_PROPS_DATA} />
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
