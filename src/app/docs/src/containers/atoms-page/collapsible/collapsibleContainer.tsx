'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CollapsiblePlayground } from '../../../components/playground/collapsible/collapsiblePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { collapsiblePageStyles as s } from './collapsible.styles';
import { CollapsibleContainerProps } from '../../../interface/containers/atoms/collapsible.types';
import {
  COLLAPSIBLE_HEADER_CONTENT,
  COLLAPSIBLE_BREADCRUMB_ITEMS,
  COLLAPSIBLE_THEME_CONFIGS,
  COLLAPSIBLE_VARIANT_GROUPS,
  COLLAPSIBLE_PLAYGROUND_SECTION,
  COLLAPSIBLE_MOCK_SECTION,
  COLLAPSIBLE_OVERVIEW_SECTION,
  COLLAPSIBLE_PROPS_DATA,
} from '../../../constants/atoms-page/collapsible/collapsibleConstants';

export default function CollapsibleContainer({
  headerContent = COLLAPSIBLE_HEADER_CONTENT,
  breadcrumbItems = COLLAPSIBLE_BREADCRUMB_ITEMS,
}: CollapsibleContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {COLLAPSIBLE_THEME_CONFIGS.map((theme) => (
          <DocSection key={theme.id} id={theme.id} title={theme.title} description={theme.description}>
            <ComponentPreview title={theme.previewTitle} code={theme.code}>
              <div className="flex justify-center w-full">{theme.render()}</div>
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
        {COLLAPSIBLE_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...COLLAPSIBLE_PLAYGROUND_SECTION}>
        <CollapsiblePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={COLLAPSIBLE_MOCK_SECTION.id}
          title={COLLAPSIBLE_MOCK_SECTION.title}
          description={COLLAPSIBLE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {COLLAPSIBLE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={COLLAPSIBLE_OVERVIEW_SECTION.id}
          title={COLLAPSIBLE_OVERVIEW_SECTION.title}
          description={COLLAPSIBLE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={COLLAPSIBLE_OVERVIEW_SECTION.quickUsage.label}
              code={COLLAPSIBLE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={COLLAPSIBLE_PROPS_DATA} />
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
