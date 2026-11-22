'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { GaugePlayground } from '../../../components/playground/gauge/gaugePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { gaugePageStyles as s } from './gauge.styles';
import { GaugeContainerProps } from '../../../interface/containers/atoms/gauge.types';
import {
  GAUGE_HEADER_CONTENT,
  GAUGE_BREADCRUMB_ITEMS,
  GAUGE_THEME_CONFIGS,
  GAUGE_VARIANT_GROUPS,
  GAUGE_PLAYGROUND_SECTION,
  GAUGE_MOCK_SECTION,
  GAUGE_OVERVIEW_SECTION,
  GAUGE_PROPS_DATA,
} from '../../../constants/atoms-page/gauge/gaugeConstants';

export default function GaugeContainer({
  headerContent = GAUGE_HEADER_CONTENT,
  breadcrumbItems = GAUGE_BREADCRUMB_ITEMS,
}: GaugeContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {GAUGE_THEME_CONFIGS.map((theme) => (
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
        {GAUGE_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="flex justify-center w-full">{item.render()}</div>
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
      <DocSection {...GAUGE_PLAYGROUND_SECTION}>
        <GaugePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={GAUGE_MOCK_SECTION.id}
          title={GAUGE_MOCK_SECTION.title}
          description={GAUGE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {GAUGE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={GAUGE_OVERVIEW_SECTION.id}
          title={GAUGE_OVERVIEW_SECTION.title}
          description={GAUGE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={GAUGE_OVERVIEW_SECTION.quickUsage.label}
              code={GAUGE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={GAUGE_PROPS_DATA} />
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
      tabs={{
        theming,
        variants,
        playground,
        mockCode,
        overview,
      }}
    />
  );
}
