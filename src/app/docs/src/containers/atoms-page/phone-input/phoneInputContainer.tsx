'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { PhoneInputPlayground } from '../../../components/playground/phone-input/phoneInputPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { phoneInputPageStyles as s } from './phone-input.styles';
import { PhoneInputContainerProps } from '../../../interface/containers/atoms/phone-input.types';
import {
  PHONE_INPUT_HEADER_CONTENT,
  PHONE_INPUT_BREADCRUMB_ITEMS,
  PHONE_INPUT_THEME_CONFIGS,
  PHONE_INPUT_VARIANT_GROUPS,
  PHONE_INPUT_PLAYGROUND_SECTION,
  PHONE_INPUT_MOCK_SECTION,
  PHONE_INPUT_OVERVIEW_SECTION,
  PHONE_INPUT_PROPS_DATA,
} from '../../../constants/atoms-page/phone-input/phoneInputConstants';

export default function PhoneInputContainer({
  headerContent = PHONE_INPUT_HEADER_CONTENT,
  breadcrumbItems = PHONE_INPUT_BREADCRUMB_ITEMS,
}: PhoneInputContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {PHONE_INPUT_THEME_CONFIGS.map((theme) => (
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
        {PHONE_INPUT_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...PHONE_INPUT_PLAYGROUND_SECTION}>
        <PhoneInputPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={PHONE_INPUT_MOCK_SECTION.id}
          title={PHONE_INPUT_MOCK_SECTION.title}
          description={PHONE_INPUT_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {PHONE_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
          id={PHONE_INPUT_OVERVIEW_SECTION.id}
          title={PHONE_INPUT_OVERVIEW_SECTION.title}
          description={PHONE_INPUT_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={PHONE_INPUT_OVERVIEW_SECTION.quickUsage.label}
              code={PHONE_INPUT_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {PHONE_INPUT_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={PHONE_INPUT_PROPS_DATA} />
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
