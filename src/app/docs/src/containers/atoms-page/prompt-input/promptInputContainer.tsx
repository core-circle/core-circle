'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { PromptInputPlayground } from '../../../components/playground/prompt-input/promptInputPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { promptInputPageStyles as s } from './prompt-input.styles';
import { PromptInputContainerProps } from '../../../interface/containers/atoms/prompt-input.types';
import {
  PROMPT_INPUT_HEADER_CONTENT,
  PROMPT_INPUT_BREADCRUMB_ITEMS,
  PROMPT_INPUT_THEME_CONFIGS,
  PROMPT_INPUT_VARIANT_GROUPS,
  PROMPT_INPUT_PLAYGROUND_SECTION,
  PROMPT_INPUT_MOCK_SECTION,
  PROMPT_INPUT_OVERVIEW_SECTION,
  PROMPT_INPUT_PROPS_DATA,
} from '../../../constants/atoms-page/prompt-input/promptInputConstants';

export default function PromptInputContainer({
  headerContent = PROMPT_INPUT_HEADER_CONTENT,
  breadcrumbItems = PROMPT_INPUT_BREADCRUMB_ITEMS,
}: PromptInputContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {PROMPT_INPUT_THEME_CONFIGS.map((theme) => (
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
        {PROMPT_INPUT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...PROMPT_INPUT_PLAYGROUND_SECTION}>
        <PromptInputPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={PROMPT_INPUT_MOCK_SECTION.id}
          title={PROMPT_INPUT_MOCK_SECTION.title}
          description={PROMPT_INPUT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {PROMPT_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={PROMPT_INPUT_OVERVIEW_SECTION.id}
          title={PROMPT_INPUT_OVERVIEW_SECTION.title}
          description={PROMPT_INPUT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={PROMPT_INPUT_OVERVIEW_SECTION.quickUsage.label}
              code={PROMPT_INPUT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable propsData={PROMPT_INPUT_PROPS_DATA} />
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
