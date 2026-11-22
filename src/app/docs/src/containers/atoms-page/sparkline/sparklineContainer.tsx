'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SparklinePlayground } from '../../../components/playground/sparkline/sparklinePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { sparklinePageStyles as s } from './sparkline.styles';
import { SparklineContainerProps } from '../../../interface/containers/atoms/sparkline.types';
import {
  SPARKLINE_HEADER_CONTENT,
  SPARKLINE_BREADCRUMB_ITEMS,
  SPARKLINE_THEME_CONFIGS,
  SPARKLINE_VARIANT_GROUPS,
  SPARKLINE_PLAYGROUND_SECTION,
  SPARKLINE_MOCK_SECTION,
  SPARKLINE_OVERVIEW_SECTION,
  SPARKLINE_PROPS_DATA,
} from '../../../constants/atoms-page/sparkline/sparklineConstants';

export default function SparklineContainer({
  headerContent = SPARKLINE_HEADER_CONTENT,
  breadcrumbItems = SPARKLINE_BREADCRUMB_ITEMS,
}: SparklineContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {SPARKLINE_THEME_CONFIGS.map((theme) => (
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
        {SPARKLINE_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...SPARKLINE_PLAYGROUND_SECTION}>
        <SparklinePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={SPARKLINE_MOCK_SECTION.id}
          title={SPARKLINE_MOCK_SECTION.title}
          description={SPARKLINE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {SPARKLINE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={SPARKLINE_OVERVIEW_SECTION.id}
          title={SPARKLINE_OVERVIEW_SECTION.title}
          description={SPARKLINE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={SPARKLINE_OVERVIEW_SECTION.quickUsage.label}
              code={SPARKLINE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {SPARKLINE_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={SPARKLINE_PROPS_DATA} />
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
