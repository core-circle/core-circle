'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { PasswordInputPlayground } from '../../../components/playground/password-input/passwordInputPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { passwordInputPageStyles as s } from './password-input.styles';
import { PasswordInputContainerProps } from '../../../interface/containers/atoms/password-input.types';
import {
  PASSWORD_INPUT_HEADER_CONTENT,
  PASSWORD_INPUT_BREADCRUMB_ITEMS,
  PASSWORD_INPUT_THEME_CONFIGS,
  PASSWORD_INPUT_VARIANT_GROUPS,
  PASSWORD_INPUT_PLAYGROUND_SECTION,
  PASSWORD_INPUT_MOCK_SECTION,
  PASSWORD_INPUT_OVERVIEW_SECTION,
  PASSWORD_INPUT_PROPS_DATA,
} from '../../../constants/atoms-page/password-input/passwordInputConstants';

export default function PasswordInputContainer({
  headerContent = PASSWORD_INPUT_HEADER_CONTENT,
  breadcrumbItems = PASSWORD_INPUT_BREADCRUMB_ITEMS,
}: PasswordInputContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {PASSWORD_INPUT_THEME_CONFIGS.map((theme) => (
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
        {PASSWORD_INPUT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...PASSWORD_INPUT_PLAYGROUND_SECTION}>
        <PasswordInputPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={PASSWORD_INPUT_MOCK_SECTION.id}
          title={PASSWORD_INPUT_MOCK_SECTION.title}
          description={PASSWORD_INPUT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {PASSWORD_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={PASSWORD_INPUT_OVERVIEW_SECTION.id}
          title={PASSWORD_INPUT_OVERVIEW_SECTION.title}
          description={PASSWORD_INPUT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={PASSWORD_INPUT_OVERVIEW_SECTION.quickUsage.label}
              code={PASSWORD_INPUT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {PASSWORD_INPUT_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={PASSWORD_INPUT_PROPS_DATA} />
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
