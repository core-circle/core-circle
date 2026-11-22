'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CountdownPlayground } from '../../../components/playground/countdown/countdownPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { countdownPageStyles as s } from './countdown.styles';
import { CountdownContainerProps } from '../../../interface/containers/atoms/countdown.types';
import {
  COUNTDOWN_HEADER_CONTENT,
  COUNTDOWN_BREADCRUMB_ITEMS,
  COUNTDOWN_THEME_CONFIGS,
  COUNTDOWN_VARIANT_GROUPS,
  COUNTDOWN_PLAYGROUND_SECTION,
  COUNTDOWN_MOCK_SECTION,
  COUNTDOWN_OVERVIEW_SECTION,
  COUNTDOWN_PROPS_DATA,
} from '../../../constants/atoms-page/countdown/countdownConstants';

export default function CountdownContainer({
  headerContent = COUNTDOWN_HEADER_CONTENT,
  breadcrumbItems = COUNTDOWN_BREADCRUMB_ITEMS,
}: CountdownContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {COUNTDOWN_THEME_CONFIGS.map((theme) => (
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
        {COUNTDOWN_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...COUNTDOWN_PLAYGROUND_SECTION}>
        <CountdownPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={COUNTDOWN_MOCK_SECTION.id}
          title={COUNTDOWN_MOCK_SECTION.title}
          description={COUNTDOWN_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {COUNTDOWN_MOCK_SECTION.snippets.map((snippet) => (
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
          id={COUNTDOWN_OVERVIEW_SECTION.id}
          title={COUNTDOWN_OVERVIEW_SECTION.title}
          description={COUNTDOWN_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={COUNTDOWN_OVERVIEW_SECTION.quickUsage.label}
              code={COUNTDOWN_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={COUNTDOWN_PROPS_DATA} />
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
