'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { InputGroupPlayground } from '../../../components/playground/input-group/inputGroupPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { inputGroupPageStyles as s } from './input-group.styles';
import { InputGroupContainerProps } from '../../../interface/containers/atoms/input-group.types';
import {
  INPUT_GROUP_HEADER_CONTENT,
  INPUT_GROUP_BREADCRUMB_ITEMS,
  INPUT_GROUP_THEME_CONFIGS,
  INPUT_GROUP_VARIANT_GROUPS,
  INPUT_GROUP_PLAYGROUND_SECTION,
  INPUT_GROUP_MOCK_SECTION,
  INPUT_GROUP_OVERVIEW_SECTION,
  INPUT_GROUP_PROPS_DATA,
} from '../../../constants/atoms-page/input-group/inputGroupConstants';

export default function InputGroupContainer({
  headerContent = INPUT_GROUP_HEADER_CONTENT,
  breadcrumbItems = INPUT_GROUP_BREADCRUMB_ITEMS,
}: InputGroupContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {INPUT_GROUP_THEME_CONFIGS.map((theme) => (
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
        {INPUT_GROUP_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full max-w-md">{item.render()}</div>
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
      <DocSection {...INPUT_GROUP_PLAYGROUND_SECTION}>
        <InputGroupPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={INPUT_GROUP_MOCK_SECTION.id}
          title={INPUT_GROUP_MOCK_SECTION.title}
          description={INPUT_GROUP_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {INPUT_GROUP_MOCK_SECTION.snippets.map((snippet) => (
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
          id={INPUT_GROUP_OVERVIEW_SECTION.id}
          title={INPUT_GROUP_OVERVIEW_SECTION.title}
          description={INPUT_GROUP_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={INPUT_GROUP_OVERVIEW_SECTION.quickUsage.label}
              code={INPUT_GROUP_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {INPUT_GROUP_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={INPUT_GROUP_PROPS_DATA} />
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
