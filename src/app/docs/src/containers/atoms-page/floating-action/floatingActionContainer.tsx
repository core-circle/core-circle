'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { FloatingActionPlayground } from '../../../components/playground/floating-action/floatingActionPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { floatingActionPageStyles as s } from './floatingAction.styles';
import { FloatingActionContainerProps } from '../../../interface/containers/atoms/floating-action.types';
import {
  FLOATING_ACTION_HEADER_CONTENT,
  FLOATING_ACTION_BREADCRUMB_ITEMS,
  FLOATING_ACTION_THEME_CONFIGS,
  FLOATING_ACTION_VARIANT_GROUPS,
  FLOATING_ACTION_PLAYGROUND_SECTION,
  FLOATING_ACTION_MOCK_SECTION,
  FLOATING_ACTION_OVERVIEW_SECTION,
  FLOATING_ACTION_PROPS_DATA,
} from '../../../constants/atoms-page/floating-action/floatingActionConstants';

export default function FloatingActionContainer({
  headerContent = FLOATING_ACTION_HEADER_CONTENT,
  breadcrumbItems = FLOATING_ACTION_BREADCRUMB_ITEMS,
}: FloatingActionContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {FLOATING_ACTION_THEME_CONFIGS.map((theme) => (
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
        {FLOATING_ACTION_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...FLOATING_ACTION_PLAYGROUND_SECTION}>
        <FloatingActionPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={FLOATING_ACTION_MOCK_SECTION.id}
          title={FLOATING_ACTION_MOCK_SECTION.title}
          description={FLOATING_ACTION_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {FLOATING_ACTION_MOCK_SECTION.snippets.map((snippet) => (
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
          id={FLOATING_ACTION_OVERVIEW_SECTION.id}
          title={FLOATING_ACTION_OVERVIEW_SECTION.title}
          description={FLOATING_ACTION_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={FLOATING_ACTION_OVERVIEW_SECTION.quickUsage.label}
              code={FLOATING_ACTION_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={FLOATING_ACTION_PROPS_DATA} />
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
