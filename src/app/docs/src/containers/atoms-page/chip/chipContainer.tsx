'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ChipPlayground } from '../../../components/playground/chip/chipPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { chipPageStyles as s } from './chip.styles';
import { ChipContainerProps } from '../../../interface/containers/atoms/chip.types';
import {
  CHIP_HEADER_CONTENT,
  CHIP_BREADCRUMB_ITEMS,
  CHIP_THEME_CONFIGS,
  CHIP_VARIANT_GROUPS,
  CHIP_PLAYGROUND_SECTION,
  CHIP_MOCK_SECTION,
  CHIP_OVERVIEW_SECTION,
  CHIP_PROPS_DATA,
} from '../../../constants/atoms-page/chip/chipConstants';

export default function ChipContainer({
  headerContent = CHIP_HEADER_CONTENT,
  breadcrumbItems = CHIP_BREADCRUMB_ITEMS,
}: ChipContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {CHIP_THEME_CONFIGS.map((theme) => (
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
        {CHIP_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="flex items-center">{item.render()}</div>
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
      <DocSection {...CHIP_PLAYGROUND_SECTION}>
        <ChipPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={CHIP_MOCK_SECTION.id}
          title={CHIP_MOCK_SECTION.title}
          description={CHIP_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {CHIP_MOCK_SECTION.snippets.map((snippet) => (
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
          id={CHIP_OVERVIEW_SECTION.id}
          title={CHIP_OVERVIEW_SECTION.title}
          description={CHIP_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={CHIP_OVERVIEW_SECTION.quickUsage.label}
              code={CHIP_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {CHIP_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={CHIP_PROPS_DATA} />
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
