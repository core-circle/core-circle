'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SignaturePadPlayground } from '../../../components/playground/signature-pad/signaturePadPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { signaturePadPageStyles as s } from './signature-pad.styles';
import { SignaturePadContainerProps } from '../../../interface/containers/atoms/signature-pad.types';
import {
  SIGNATURE_PAD_HEADER_CONTENT,
  SIGNATURE_PAD_BREADCRUMB_ITEMS,
  SIGNATURE_PAD_THEME_CONFIGS,
  SIGNATURE_PAD_VARIANT_GROUPS,
  SIGNATURE_PAD_PLAYGROUND_SECTION,
  SIGNATURE_PAD_MOCK_SECTION,
  SIGNATURE_PAD_OVERVIEW_SECTION,
  SIGNATURE_PAD_PROPS_DATA,
} from '../../../constants/atoms-page/signature-pad/signaturePadConstants';

export default function SignaturePadContainer({
  headerContent = SIGNATURE_PAD_HEADER_CONTENT,
  breadcrumbItems = SIGNATURE_PAD_BREADCRUMB_ITEMS,
}: SignaturePadContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {SIGNATURE_PAD_THEME_CONFIGS.map((theme) => (
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
        {SIGNATURE_PAD_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...SIGNATURE_PAD_PLAYGROUND_SECTION}>
        <SignaturePadPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={SIGNATURE_PAD_MOCK_SECTION.id}
          title={SIGNATURE_PAD_MOCK_SECTION.title}
          description={SIGNATURE_PAD_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {SIGNATURE_PAD_MOCK_SECTION.snippets.map((snippet) => (
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
          id={SIGNATURE_PAD_OVERVIEW_SECTION.id}
          title={SIGNATURE_PAD_OVERVIEW_SECTION.title}
          description={SIGNATURE_PAD_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={SIGNATURE_PAD_OVERVIEW_SECTION.quickUsage.label}
              code={SIGNATURE_PAD_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {SIGNATURE_PAD_OVERVIEW_SECTION.propsTableTitle}
              </h4>
              <PropsTable data={SIGNATURE_PAD_PROPS_DATA} />
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
