'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { NumberInputPlayground } from '../../../components/playground/number-input/numberInputPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { numberInputPageStyles as s } from './number-input.styles';
import { NumberInputContainerProps } from '../../../interface/containers/atoms/number-input.types';
import {
  NUMBER_INPUT_HEADER_CONTENT,
  NUMBER_INPUT_BREADCRUMB_ITEMS,
  NUMBER_INPUT_THEME_CONFIGS,
  NUMBER_INPUT_VARIANT_GROUPS,
  NUMBER_INPUT_PLAYGROUND_SECTION,
  NUMBER_INPUT_MOCK_SECTION,
  NUMBER_INPUT_OVERVIEW_SECTION,
  NUMBER_INPUT_PROPS_DATA,
} from '../../../constants/atoms-page/number-input/numberInputConstants';

export default function NumberInputContainer({
  headerContent = NUMBER_INPUT_HEADER_CONTENT,
  breadcrumbItems = NUMBER_INPUT_BREADCRUMB_ITEMS,
}: NumberInputContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {NUMBER_INPUT_THEME_CONFIGS.map((theme) => (
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
        {NUMBER_INPUT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...NUMBER_INPUT_PLAYGROUND_SECTION}>
        <NumberInputPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={NUMBER_INPUT_MOCK_SECTION.id}
          title={NUMBER_INPUT_MOCK_SECTION.title}
          description={NUMBER_INPUT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {NUMBER_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={NUMBER_INPUT_OVERVIEW_SECTION.id}
          title={NUMBER_INPUT_OVERVIEW_SECTION.title}
          description={NUMBER_INPUT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={NUMBER_INPUT_OVERVIEW_SECTION.quickUsage.label}
              code={NUMBER_INPUT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {NUMBER_INPUT_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={NUMBER_INPUT_PROPS_DATA} />
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
