'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { RatingPlayground } from '../../../components/playground/rating/ratingPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { ratingPageStyles as s } from './rating.styles';
import { RatingContainerProps } from '../../../interface/containers/atoms/rating.types';
import {
  RATING_HEADER_CONTENT,
  RATING_BREADCRUMB_ITEMS,
  RATING_THEME_CONFIGS,
  RATING_VARIANT_GROUPS,
  RATING_PLAYGROUND_SECTION,
  RATING_MOCK_SECTION,
  RATING_OVERVIEW_SECTION,
  RATING_PROPS_DATA,
} from '../../../constants/atoms-page/rating/ratingConstants';

export default function RatingContainer({
  headerContent = RATING_HEADER_CONTENT,
  breadcrumbItems = RATING_BREADCRUMB_ITEMS,
}: RatingContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {RATING_THEME_CONFIGS.map((theme) => (
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
        {RATING_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...RATING_PLAYGROUND_SECTION}>
        <RatingPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={RATING_MOCK_SECTION.id}
          title={RATING_MOCK_SECTION.title}
          description={RATING_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {RATING_MOCK_SECTION.snippets.map((snippet) => (
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
          id={RATING_OVERVIEW_SECTION.id}
          title={RATING_OVERVIEW_SECTION.title}
          description={RATING_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={RATING_OVERVIEW_SECTION.quickUsage.label}
              code={RATING_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {RATING_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={RATING_PROPS_DATA} />
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
