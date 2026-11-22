'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TreeViewPlayground } from '../../../components/playground/tree-view/treeViewPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { treeViewPageStyles as s } from './tree-view.styles';
import { TreeViewContainerProps } from '../../../interface/containers/atoms/tree-view.types';
import {
  TREE_VIEW_HEADER_CONTENT,
  TREE_VIEW_BREADCRUMB_ITEMS,
  TREE_VIEW_THEME_CONFIGS,
  TREE_VIEW_VARIANT_GROUPS,
  TREE_VIEW_PLAYGROUND_SECTION,
  TREE_VIEW_MOCK_SECTION,
  TREE_VIEW_OVERVIEW_SECTION,
  TREE_VIEW_PROPS_DATA,
} from '../../../constants/atoms-page/tree-view/treeViewConstants';

export default function TreeViewContainer({
  headerContent = TREE_VIEW_HEADER_CONTENT,
  breadcrumbItems = TREE_VIEW_BREADCRUMB_ITEMS,
}: TreeViewContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TREE_VIEW_THEME_CONFIGS.map((theme) => (
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
        {TREE_VIEW_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full max-w-sm">{item.render()}</div>
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
      <DocSection {...TREE_VIEW_PLAYGROUND_SECTION}>
        <TreeViewPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TREE_VIEW_MOCK_SECTION.id}
          title={TREE_VIEW_MOCK_SECTION.title}
          description={TREE_VIEW_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TREE_VIEW_MOCK_SECTION.snippets.map((snippet) => (
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
          id={TREE_VIEW_OVERVIEW_SECTION.id}
          title={TREE_VIEW_OVERVIEW_SECTION.title}
          description={TREE_VIEW_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TREE_VIEW_OVERVIEW_SECTION.quickUsage.label}
              code={TREE_VIEW_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={TREE_VIEW_PROPS_DATA} />
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
