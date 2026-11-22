'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ResizablePlayground } from '../../../components/playground/resizable/resizablePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { resizablePageStyles as s } from './resizable.styles';
import { ResizableContainerProps } from '../../../interface/containers/atoms/resizable.types';
import {
  RESIZABLE_HEADER_CONTENT,
  RESIZABLE_BREADCRUMB_ITEMS,
  RESIZABLE_THEME_CONFIGS,
  RESIZABLE_VARIANT_GROUPS,
  RESIZABLE_PLAYGROUND_SECTION,
  RESIZABLE_MOCK_SECTION,
  RESIZABLE_OVERVIEW_SECTION,
  RESIZABLE_PROPS_DATA,
} from '../../../constants/atoms-page/resizable/resizableConstants';

export default function ResizableContainer({
  headerContent = RESIZABLE_HEADER_CONTENT,
  breadcrumbItems = RESIZABLE_BREADCRUMB_ITEMS,
}: ResizableContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {RESIZABLE_THEME_CONFIGS.map((theme) => (
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
        {RESIZABLE_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...RESIZABLE_PLAYGROUND_SECTION}>
        <ResizablePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={RESIZABLE_MOCK_SECTION.id}
          title={RESIZABLE_MOCK_SECTION.title}
          description={RESIZABLE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {RESIZABLE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={RESIZABLE_OVERVIEW_SECTION.id}
          title={RESIZABLE_OVERVIEW_SECTION.title}
          description={RESIZABLE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={RESIZABLE_OVERVIEW_SECTION.quickUsage.label}
              code={RESIZABLE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={RESIZABLE_PROPS_DATA} />
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
