'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DiffViewerPlayground } from '../../../components/playground/diff-viewer/diffViewerPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { diffViewerPageStyles as s } from './diff-viewer.styles';
import { DiffViewerContainerProps } from '../../../interface/containers/atoms/diff-viewer.types';
import {
  DIFF_VIEWER_HEADER_CONTENT,
  DIFF_VIEWER_BREADCRUMB_ITEMS,
  DIFF_VIEWER_THEME_CONFIGS,
  DIFF_VIEWER_VARIANT_GROUPS,
  DIFF_VIEWER_PLAYGROUND_SECTION,
  DIFF_VIEWER_MOCK_SECTION,
  DIFF_VIEWER_OVERVIEW_SECTION,
  DIFF_VIEWER_PROPS_DATA,
} from '../../../constants/atoms-page/diff-viewer/diffViewerConstants';

export default function DiffViewerContainer({
  headerContent = DIFF_VIEWER_HEADER_CONTENT,
  breadcrumbItems = DIFF_VIEWER_BREADCRUMB_ITEMS,
}: DiffViewerContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {DIFF_VIEWER_THEME_CONFIGS.map((theme) => (
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
        {DIFF_VIEWER_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full max-w-2xl">{item.render()}</div>
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
      <DocSection {...DIFF_VIEWER_PLAYGROUND_SECTION}>
        <DiffViewerPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={DIFF_VIEWER_MOCK_SECTION.id}
          title={DIFF_VIEWER_MOCK_SECTION.title}
          description={DIFF_VIEWER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {DIFF_VIEWER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={DIFF_VIEWER_OVERVIEW_SECTION.id}
          title={DIFF_VIEWER_OVERVIEW_SECTION.title}
          description={DIFF_VIEWER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={DIFF_VIEWER_OVERVIEW_SECTION.quickUsage.label}
              code={DIFF_VIEWER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={DIFF_VIEWER_PROPS_DATA} />
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
