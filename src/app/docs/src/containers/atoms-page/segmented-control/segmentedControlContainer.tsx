'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SegmentedControlPlayground } from '../../../components/playground/segmented-control/segmentedControlPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { segmentedControlPageStyles as s } from './segmented-control.styles';
import { SegmentedControlContainerProps } from '../../../interface/containers/atoms/segmented-control.types';
import {
  SEGMENTED_CONTROL_HEADER_CONTENT,
  SEGMENTED_CONTROL_BREADCRUMB_ITEMS,
  SEGMENTED_CONTROL_THEME_CONFIGS,
  SEGMENTED_CONTROL_VARIANT_GROUPS,
  SEGMENTED_CONTROL_PLAYGROUND_SECTION,
  SEGMENTED_CONTROL_MOCK_SECTION,
  SEGMENTED_CONTROL_OVERVIEW_SECTION,
  SEGMENTED_CONTROL_PROPS_DATA,
} from '../../../constants/atoms-page/segmented-control/segmentedControlConstants';

export default function SegmentedControlContainer({
  headerContent = SEGMENTED_CONTROL_HEADER_CONTENT,
  breadcrumbItems = SEGMENTED_CONTROL_BREADCRUMB_ITEMS,
}: SegmentedControlContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {SEGMENTED_CONTROL_THEME_CONFIGS.map((theme) => (
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
        {SEGMENTED_CONTROL_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full max-w-md">{item.render()}</div>
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
      <DocSection {...SEGMENTED_CONTROL_PLAYGROUND_SECTION}>
        <SegmentedControlPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={SEGMENTED_CONTROL_MOCK_SECTION.id}
          title={SEGMENTED_CONTROL_MOCK_SECTION.title}
          description={SEGMENTED_CONTROL_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {SEGMENTED_CONTROL_MOCK_SECTION.snippets.map((snippet) => (
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
          id={SEGMENTED_CONTROL_OVERVIEW_SECTION.id}
          title={SEGMENTED_CONTROL_OVERVIEW_SECTION.title}
          description={SEGMENTED_CONTROL_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={SEGMENTED_CONTROL_OVERVIEW_SECTION.quickUsage.label}
              code={SEGMENTED_CONTROL_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {SEGMENTED_CONTROL_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={SEGMENTED_CONTROL_PROPS_DATA} />
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
