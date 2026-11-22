'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CalloutPlayground } from '../../../components/playground/callout/calloutPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { calloutPageStyles as s } from './callout.styles';
import { CalloutContainerProps } from '../../../interface/containers/atoms/callout.types';
import {
  CALLOUT_HEADER_CONTENT,
  CALLOUT_BREADCRUMB_ITEMS,
  CALLOUT_THEME_CONFIGS,
  CALLOUT_VARIANT_GROUPS,
  CALLOUT_PLAYGROUND_SECTION,
  CALLOUT_MOCK_SECTION,
  CALLOUT_OVERVIEW_SECTION,
  CALLOUT_PROPS_DATA,
} from '../../../constants/atoms-page/callout/calloutConstants';

export default function CalloutContainer({
  headerContent = CALLOUT_HEADER_CONTENT,
  breadcrumbItems = CALLOUT_BREADCRUMB_ITEMS,
}: CalloutContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {CALLOUT_THEME_CONFIGS.map((theme) => (
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
        {CALLOUT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...CALLOUT_PLAYGROUND_SECTION}>
        <CalloutPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={CALLOUT_MOCK_SECTION.id}
          title={CALLOUT_MOCK_SECTION.title}
          description={CALLOUT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {CALLOUT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={CALLOUT_OVERVIEW_SECTION.id}
          title={CALLOUT_OVERVIEW_SECTION.title}
          description={CALLOUT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={CALLOUT_OVERVIEW_SECTION.quickUsage.label}
              code={CALLOUT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {CALLOUT_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={CALLOUT_PROPS_DATA} />
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
