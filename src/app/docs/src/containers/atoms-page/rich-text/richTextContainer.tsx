'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { RichTextPlayground } from '../../../components/playground/rich-text/rich-textPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { richTextPageStyles as s } from './rich-text.styles';
import {
  RICHTEXT_HEADER_CONTENT,
  RICHTEXT_BREADCRUMB_ITEMS,
  RICHTEXT_THEME_CONFIGS,
  RICHTEXT_VARIANT_GROUPS,
  RICHTEXT_PLAYGROUND_SECTION,
  RICHTEXT_MOCK_SECTION,
  RICHTEXT_OVERVIEW_SECTION,
  RICHTEXT_PROPS_DATA,
} from '../../../constants/atoms-page/rich-text/richTextConstants';

export interface RichTextContainerProps {
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function RichTextContainer({
  headerContent = RICHTEXT_HEADER_CONTENT,
  breadcrumbItems = RICHTEXT_BREADCRUMB_ITEMS,
}: RichTextContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {RICHTEXT_THEME_CONFIGS.map((theme) => (
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
        {RICHTEXT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...RICHTEXT_PLAYGROUND_SECTION}>
        <RichTextPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={RICHTEXT_MOCK_SECTION.id}
          title={RICHTEXT_MOCK_SECTION.title}
          description={RICHTEXT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {RICHTEXT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={RICHTEXT_OVERVIEW_SECTION.id}
          title={RICHTEXT_OVERVIEW_SECTION.title}
          description={RICHTEXT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={RICHTEXT_OVERVIEW_SECTION.quickUsage.label}
              code={RICHTEXT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {RICHTEXT_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={RICHTEXT_PROPS_DATA} />
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
