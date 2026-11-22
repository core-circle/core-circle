'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { MarkdownPlayground } from '../../../components/playground/markdown/markdownPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { markdownPageStyles as s } from './markdown.styles';
import { MarkdownContainerProps } from '../../../interface/containers/atoms/markdown.types';
import {
  MARKDOWN_HEADER_CONTENT,
  MARKDOWN_BREADCRUMB_ITEMS,
  MARKDOWN_THEME_CONFIGS,
  MARKDOWN_VARIANT_GROUPS,
  MARKDOWN_PLAYGROUND_SECTION,
  MARKDOWN_MOCK_SECTION,
  MARKDOWN_OVERVIEW_SECTION,
  MARKDOWN_PROPS_DATA,
} from '../../../constants/atoms-page/markdown/markdownConstants';

export default function MarkdownContainer({
  headerContent = MARKDOWN_HEADER_CONTENT,
  breadcrumbItems = MARKDOWN_BREADCRUMB_ITEMS,
}: MarkdownContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {MARKDOWN_THEME_CONFIGS.map((theme) => (
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
        {MARKDOWN_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...MARKDOWN_PLAYGROUND_SECTION}>
        <MarkdownPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={MARKDOWN_MOCK_SECTION.id}
          title={MARKDOWN_MOCK_SECTION.title}
          description={MARKDOWN_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {MARKDOWN_MOCK_SECTION.snippets.map((snippet) => (
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
          id={MARKDOWN_OVERVIEW_SECTION.id}
          title={MARKDOWN_OVERVIEW_SECTION.title}
          description={MARKDOWN_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={MARKDOWN_OVERVIEW_SECTION.quickUsage.label}
              code={MARKDOWN_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={MARKDOWN_PROPS_DATA} />
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
