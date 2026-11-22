'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { CommandPlayground } from '../../../components/playground/command/commandPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { commandPageStyles as s } from './command.styles';
import { CommandContainerProps } from '../../../interface/containers/atoms/command.types';
import {
  COMMAND_HEADER_CONTENT,
  COMMAND_BREADCRUMB_ITEMS,
  COMMAND_THEME_CONFIGS,
  COMMAND_VARIANT_GROUPS,
  COMMAND_PLAYGROUND_SECTION,
  COMMAND_MOCK_SECTION,
  COMMAND_OVERVIEW_SECTION,
  COMMAND_PROPS_DATA,
} from '../../../constants/atoms-page/command/commandConstants';

export default function CommandContainer({
  headerContent = COMMAND_HEADER_CONTENT,
  breadcrumbItems = COMMAND_BREADCRUMB_ITEMS,
}: CommandContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {COMMAND_THEME_CONFIGS.map((theme) => (
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
        {COMMAND_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  <div className="w-full max-w-xl">{item.render()}</div>
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
      <DocSection {...COMMAND_PLAYGROUND_SECTION}>
        <CommandPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={COMMAND_MOCK_SECTION.id}
          title={COMMAND_MOCK_SECTION.title}
          description={COMMAND_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {COMMAND_MOCK_SECTION.snippets.map((snippet) => (
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
          id={COMMAND_OVERVIEW_SECTION.id}
          title={COMMAND_OVERVIEW_SECTION.title}
          description={COMMAND_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={COMMAND_OVERVIEW_SECTION.quickUsage.label}
              code={COMMAND_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={COMMAND_PROPS_DATA} />
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
