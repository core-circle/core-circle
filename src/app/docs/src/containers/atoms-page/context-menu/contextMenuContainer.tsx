'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ContextMenuPlayground } from '../../../components/playground/context-menu/contextMenuPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { contextMenuPageStyles as s } from './context-menu.styles';
import { ContextMenuContainerProps } from '../../../interface/containers/atoms/context-menu.types';
import {
  CONTEXT_MENU_HEADER_CONTENT,
  CONTEXT_MENU_BREADCRUMB_ITEMS,
  CONTEXT_MENU_THEME_CONFIGS,
  CONTEXT_MENU_VARIANT_GROUPS,
  CONTEXT_MENU_PLAYGROUND_SECTION,
  CONTEXT_MENU_MOCK_SECTION,
  CONTEXT_MENU_OVERVIEW_SECTION,
  CONTEXT_MENU_PROPS_DATA,
} from '../../../constants/atoms-page/context-menu/contextMenuConstants';

export default function ContextMenuContainer({
  headerContent = CONTEXT_MENU_HEADER_CONTENT,
  breadcrumbItems = CONTEXT_MENU_BREADCRUMB_ITEMS,
}: ContextMenuContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {CONTEXT_MENU_THEME_CONFIGS.map((theme) => (
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
        {CONTEXT_MENU_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...CONTEXT_MENU_PLAYGROUND_SECTION}>
        <ContextMenuPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={CONTEXT_MENU_MOCK_SECTION.id}
          title={CONTEXT_MENU_MOCK_SECTION.title}
          description={CONTEXT_MENU_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {CONTEXT_MENU_MOCK_SECTION.snippets.map((snippet) => (
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
          id={CONTEXT_MENU_OVERVIEW_SECTION.id}
          title={CONTEXT_MENU_OVERVIEW_SECTION.title}
          description={CONTEXT_MENU_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={CONTEXT_MENU_OVERVIEW_SECTION.quickUsage.label}
              code={CONTEXT_MENU_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {CONTEXT_MENU_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={CONTEXT_MENU_PROPS_DATA} />
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
