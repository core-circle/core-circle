'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TypographyPlayground } from '../../../components/playground/typography/typographyPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { typographyPageStyles as s } from './typography.styles';
import { TypographyContainerProps } from '../../../interface/containers/atoms/typography.types';
import {
  TYPOGRAPHY_HEADER_CONTENT,
  TYPOGRAPHY_BREADCRUMB_ITEMS,
  TYPOGRAPHY_THEME_CONFIGS,
  TYPOGRAPHY_VARIANT_GROUPS,
  TYPOGRAPHY_PLAYGROUND_SECTION,
  TYPOGRAPHY_MOCK_SECTION,
  TYPOGRAPHY_OVERVIEW_SECTION,
  TYPOGRAPHY_PROPS_DATA,
} from '../../../constants/atoms-page/typography/typographyConstants';

export default function TypographyContainer({
  headerContent = TYPOGRAPHY_HEADER_CONTENT,
  breadcrumbItems = TYPOGRAPHY_BREADCRUMB_ITEMS,
}: TypographyContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TYPOGRAPHY_THEME_CONFIGS.map((theme) => (
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
        {TYPOGRAPHY_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            {group.customRender ? (
              group.customRender()
            ) : (
              <div className="flex flex-col gap-8 w-full">
                {group.items?.map((item) => (
                  <ComponentPreview key={item.title} title={item.title} code={item.code}>
                    {item.render()}
                  </ComponentPreview>
                ))}
              </div>
            )}
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...TYPOGRAPHY_PLAYGROUND_SECTION}>
        <TypographyPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TYPOGRAPHY_MOCK_SECTION.id}
          title={TYPOGRAPHY_MOCK_SECTION.title}
          description={TYPOGRAPHY_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TYPOGRAPHY_MOCK_SECTION.snippets.map((snippet) => (
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
          id={TYPOGRAPHY_OVERVIEW_SECTION.id}
          title={TYPOGRAPHY_OVERVIEW_SECTION.title}
          description={TYPOGRAPHY_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TYPOGRAPHY_OVERVIEW_SECTION.quickUsage.label}
              code={TYPOGRAPHY_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {TYPOGRAPHY_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={TYPOGRAPHY_PROPS_DATA} />
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
