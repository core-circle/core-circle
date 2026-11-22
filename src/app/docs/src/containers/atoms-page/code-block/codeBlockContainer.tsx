'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CodeBlockPlayground } from '../../../components/playground/code-block/codeBlockPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { codeBlockPageStyles as s } from './code-block.styles';
import { CodeBlockContainerProps } from '../../../interface/containers/atoms/code-block.types';
import {
  CODE_BLOCK_HEADER_CONTENT,
  CODE_BLOCK_BREADCRUMB_ITEMS,
  CODE_BLOCK_THEME_CONFIGS,
  CODE_BLOCK_VARIANT_GROUPS,
  CODE_BLOCK_PLAYGROUND_SECTION,
  CODE_BLOCK_MOCK_SECTION,
  CODE_BLOCK_OVERVIEW_SECTION,
  CODE_BLOCK_PROPS_DATA,
} from '../../../constants/atoms-page/code-block/codeBlockConstants';

export default function CodeBlockContainer({
  headerContent = CODE_BLOCK_HEADER_CONTENT,
  breadcrumbItems = CODE_BLOCK_BREADCRUMB_ITEMS,
}: CodeBlockContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {CODE_BLOCK_THEME_CONFIGS.map((theme) => (
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
        {CODE_BLOCK_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...CODE_BLOCK_PLAYGROUND_SECTION}>
        <CodeBlockPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={CODE_BLOCK_MOCK_SECTION.id}
          title={CODE_BLOCK_MOCK_SECTION.title}
          description={CODE_BLOCK_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {CODE_BLOCK_MOCK_SECTION.snippets.map((snippet) => (
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
          id={CODE_BLOCK_OVERVIEW_SECTION.id}
          title={CODE_BLOCK_OVERVIEW_SECTION.title}
          description={CODE_BLOCK_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={CODE_BLOCK_OVERVIEW_SECTION.quickUsage.label}
              code={CODE_BLOCK_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={CODE_BLOCK_PROPS_DATA} />
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
