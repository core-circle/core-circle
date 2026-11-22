'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CardPlayground } from '../../../components/playground/card/cardPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { cardPageStyles as s } from './card.styles';
import { CardContainerProps } from '../../../interface/containers/atoms/card.types';
import {
  CARD_HEADER_CONTENT,
  CARD_BREADCRUMB_ITEMS,
  CARD_THEME_CONFIGS,
  CARD_VARIANT_GROUPS,
  CARD_PLAYGROUND_SECTION,
  CARD_MOCK_SECTION,
  CARD_OVERVIEW_SECTION,
  CARD_PROPS_DATA,
} from '../../../constants/atoms-page/card/cardConstants';

export default function CardContainer({
  headerContent = CARD_HEADER_CONTENT,
  breadcrumbItems = CARD_BREADCRUMB_ITEMS,
}: CardContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {CARD_THEME_CONFIGS.map((theme) => (
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
        {CARD_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...CARD_PLAYGROUND_SECTION}>
        <CardPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={CARD_MOCK_SECTION.id}
          title={CARD_MOCK_SECTION.title}
          description={CARD_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {CARD_MOCK_SECTION.snippets.map((snippet) => (
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
          id={CARD_OVERVIEW_SECTION.id}
          title={CARD_OVERVIEW_SECTION.title}
          description={CARD_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={CARD_OVERVIEW_SECTION.quickUsage.label}
              code={CARD_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {CARD_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={CARD_PROPS_DATA} />
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
