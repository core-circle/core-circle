'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TrendBadgePlayground } from '../../../components/playground/trend-badge/trendBadgePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { trendBadgePageStyles as s } from './trend-badge.styles';
import { TrendBadgeContainerProps } from '../../../interface/containers/atoms/trend-badge.types';
import {
  TREND_BADGE_HEADER_CONTENT,
  TREND_BADGE_BREADCRUMB_ITEMS,
  TREND_BADGE_THEME_CONFIGS,
  TREND_BADGE_VARIANT_GROUPS,
  TREND_BADGE_PLAYGROUND_SECTION,
  TREND_BADGE_MOCK_SECTION,
  TREND_BADGE_OVERVIEW_SECTION,
  TREND_BADGE_PROPS_DATA,
} from '../../../constants/atoms-page/trend-badge/trendBadgeConstants';

export default function TrendBadgeContainer({
  headerContent = TREND_BADGE_HEADER_CONTENT,
  breadcrumbItems = TREND_BADGE_BREADCRUMB_ITEMS,
}: TrendBadgeContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TREND_BADGE_THEME_CONFIGS.map((theme) => (
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
        {TREND_BADGE_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...TREND_BADGE_PLAYGROUND_SECTION}>
        <TrendBadgePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TREND_BADGE_MOCK_SECTION.id}
          title={TREND_BADGE_MOCK_SECTION.title}
          description={TREND_BADGE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TREND_BADGE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={TREND_BADGE_OVERVIEW_SECTION.id}
          title={TREND_BADGE_OVERVIEW_SECTION.title}
          description={TREND_BADGE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TREND_BADGE_OVERVIEW_SECTION.quickUsage.label}
              code={TREND_BADGE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {TREND_BADGE_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={TREND_BADGE_PROPS_DATA} />
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
