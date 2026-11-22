'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TourPlayground } from '../../../components/playground/tour/tourPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { tourPageStyles as s } from './tour.styles';
import { TourContainerProps } from '../../../interface/containers/atoms/tour.types';
import {
  TOUR_HEADER_CONTENT,
  TOUR_BREADCRUMB_ITEMS,
  TOUR_THEME_CONFIGS,
  TOUR_VARIANT_GROUPS,
  TOUR_PLAYGROUND_SECTION,
  TOUR_MOCK_SECTION,
  TOUR_OVERVIEW_SECTION,
  TOUR_PROPS_DATA,
} from '../../../constants/atoms-page/tour/tourConstants';

export default function TourContainer({
  headerContent = TOUR_HEADER_CONTENT,
  breadcrumbItems = TOUR_BREADCRUMB_ITEMS,
}: TourContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TOUR_THEME_CONFIGS.map((theme) => (
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
        {TOUR_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full flex justify-center">{item.render()}</div>
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
      <DocSection {...TOUR_PLAYGROUND_SECTION}>
        <TourPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TOUR_MOCK_SECTION.id}
          title={TOUR_MOCK_SECTION.title}
          description={TOUR_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TOUR_MOCK_SECTION.snippets.map((snippet) => (
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
          id={TOUR_OVERVIEW_SECTION.id}
          title={TOUR_OVERVIEW_SECTION.title}
          description={TOUR_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TOUR_OVERVIEW_SECTION.quickUsage.label}
              code={TOUR_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {TOUR_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={TOUR_PROPS_DATA} />
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
