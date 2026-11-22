'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DropdownMenuPlayground } from '../../../components/playground/dropdown-menu/dropdownMenuPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { dropdownMenuPageStyles as s } from './dropdown-menu.styles';
import { DropdownMenuContainerProps } from '../../../interface/containers/atoms/dropdown-menu.types';
import {
  DROPDOWN_MENU_HEADER_CONTENT,
  DROPDOWN_MENU_BREADCRUMB_ITEMS,
  DROPDOWN_MENU_THEME_CONFIGS,
  DROPDOWN_MENU_VARIANT_GROUPS,
  DROPDOWN_MENU_PLAYGROUND_SECTION,
  DROPDOWN_MENU_MOCK_SECTION,
  DROPDOWN_MENU_OVERVIEW_SECTION,
  DROPDOWN_MENU_PROPS_DATA,
} from '../../../constants/atoms-page/dropdown-menu/dropdownMenuConstants';

export default function DropdownMenuContainer({
  headerContent = DROPDOWN_MENU_HEADER_CONTENT,
  breadcrumbItems = DROPDOWN_MENU_BREADCRUMB_ITEMS,
}: DropdownMenuContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {DROPDOWN_MENU_THEME_CONFIGS.map((theme) => (
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
        {DROPDOWN_MENU_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...DROPDOWN_MENU_PLAYGROUND_SECTION}>
        <DropdownMenuPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={DROPDOWN_MENU_MOCK_SECTION.id}
          title={DROPDOWN_MENU_MOCK_SECTION.title}
          description={DROPDOWN_MENU_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {DROPDOWN_MENU_MOCK_SECTION.snippets.map((snippet) => (
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
          id={DROPDOWN_MENU_OVERVIEW_SECTION.id}
          title={DROPDOWN_MENU_OVERVIEW_SECTION.title}
          description={DROPDOWN_MENU_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={DROPDOWN_MENU_OVERVIEW_SECTION.quickUsage.label}
              code={DROPDOWN_MENU_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {DROPDOWN_MENU_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={DROPDOWN_MENU_PROPS_DATA} />
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
