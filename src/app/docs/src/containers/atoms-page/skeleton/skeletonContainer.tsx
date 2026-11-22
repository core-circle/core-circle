'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SkeletonPlayground } from '../../../components/playground/skeleton/skeletonPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { skeletonPageStyles as s } from './skeleton.styles';
import {
  SKELETON_HEADER_CONTENT,
  SKELETON_BREADCRUMB_ITEMS,
  SKELETON_THEME_CONFIGS,
  SKELETON_VARIANT_GROUPS,
  SKELETON_PLAYGROUND_SECTION,
  SKELETON_MOCK_SECTION,
  SKELETON_OVERVIEW_SECTION,
  SKELETON_PROPS_DATA,
} from '../../../constants/atoms-page/skeleton/skeletonConstants';

export interface SkeletonContainerProps {
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function SkeletonContainer({
  headerContent = SKELETON_HEADER_CONTENT,
  breadcrumbItems = SKELETON_BREADCRUMB_ITEMS,
}: SkeletonContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {SKELETON_THEME_CONFIGS.map((theme) => (
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
        {SKELETON_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  {item.render()}
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
      <DocSection {...SKELETON_PLAYGROUND_SECTION}>
        <SkeletonPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={SKELETON_MOCK_SECTION.id}
          title={SKELETON_MOCK_SECTION.title}
          description={SKELETON_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {SKELETON_MOCK_SECTION.snippets.map((snippet) => (
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
          id={SKELETON_OVERVIEW_SECTION.id}
          title={SKELETON_OVERVIEW_SECTION.title}
          description={SKELETON_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={SKELETON_OVERVIEW_SECTION.quickUsage.label}
              code={SKELETON_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {SKELETON_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={SKELETON_PROPS_DATA} />
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
