'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ColorSwatchPlayground } from '../../../components/playground/color-swatch/colorSwatchPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { colorSwatchPageStyles as s } from './color-swatch.styles';
import { ColorSwatchContainerProps } from '../../../interface/containers/atoms/color-swatch.types';
import {
  COLOR_SWATCH_HEADER_CONTENT,
  COLOR_SWATCH_BREADCRUMB_ITEMS,
  COLOR_SWATCH_THEME_CONFIGS,
  COLOR_SWATCH_VARIANT_GROUPS,
  COLOR_SWATCH_PLAYGROUND_SECTION,
  COLOR_SWATCH_MOCK_SECTION,
  COLOR_SWATCH_OVERVIEW_SECTION,
  COLOR_SWATCH_PROPS_DATA,
} from '../../../constants/atoms-page/color-swatch/colorSwatchConstants';

export default function ColorSwatchContainer({
  headerContent = COLOR_SWATCH_HEADER_CONTENT,
  breadcrumbItems = COLOR_SWATCH_BREADCRUMB_ITEMS,
}: ColorSwatchContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {COLOR_SWATCH_THEME_CONFIGS.map((theme) => (
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
        {COLOR_SWATCH_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...COLOR_SWATCH_PLAYGROUND_SECTION}>
        <ColorSwatchPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={COLOR_SWATCH_MOCK_SECTION.id}
          title={COLOR_SWATCH_MOCK_SECTION.title}
          description={COLOR_SWATCH_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {COLOR_SWATCH_MOCK_SECTION.snippets.map((snippet) => (
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
          id={COLOR_SWATCH_OVERVIEW_SECTION.id}
          title={COLOR_SWATCH_OVERVIEW_SECTION.title}
          description={COLOR_SWATCH_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={COLOR_SWATCH_OVERVIEW_SECTION.quickUsage.label}
              code={COLOR_SWATCH_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {COLOR_SWATCH_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={COLOR_SWATCH_PROPS_DATA} />
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
