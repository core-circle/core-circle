'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { WatermarkPlayground } from '../../../components/playground/watermark/watermarkPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { watermarkPageStyles as s } from './watermark.styles';
import { WatermarkContainerProps } from '../../../interface/containers/atoms/watermark.types';
import {
  WATERMARK_HEADER_CONTENT,
  WATERMARK_BREADCRUMB_ITEMS,
  WATERMARK_THEME_CONFIGS,
  WATERMARK_VARIANT_GROUPS,
  WATERMARK_PLAYGROUND_SECTION,
  WATERMARK_MOCK_SECTION,
  WATERMARK_OVERVIEW_SECTION,
  WATERMARK_PROPS_DATA,
} from '../../../constants/atoms-page/watermark/watermarkConstants';

export default function WatermarkContainer({
  headerContent = WATERMARK_HEADER_CONTENT,
  breadcrumbItems = WATERMARK_BREADCRUMB_ITEMS,
}: WatermarkContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {WATERMARK_THEME_CONFIGS.map((theme) => (
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
        {WATERMARK_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full max-w-xl">{item.render()}</div>
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
      <DocSection {...WATERMARK_PLAYGROUND_SECTION}>
        <WatermarkPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={WATERMARK_MOCK_SECTION.id}
          title={WATERMARK_MOCK_SECTION.title}
          description={WATERMARK_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {WATERMARK_MOCK_SECTION.snippets.map((snippet) => (
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
          id={WATERMARK_OVERVIEW_SECTION.id}
          title={WATERMARK_OVERVIEW_SECTION.title}
          description={WATERMARK_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={WATERMARK_OVERVIEW_SECTION.quickUsage.label}
              code={WATERMARK_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable data={WATERMARK_PROPS_DATA} />
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
