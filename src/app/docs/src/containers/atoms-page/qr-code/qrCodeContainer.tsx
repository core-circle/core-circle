'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { QRCodePlayground } from '../../../components/playground/qr-code/qrCodePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { qrCodePageStyles as s } from './qr-code.styles';
import { QRCodeContainerProps } from '../../../interface/containers/atoms/qr-code.types';
import {
  QR_CODE_HEADER_CONTENT,
  QR_CODE_BREADCRUMB_ITEMS,
  QR_CODE_THEME_CONFIGS,
  QR_CODE_VARIANT_GROUPS,
  QR_CODE_PLAYGROUND_SECTION,
  QR_CODE_MOCK_SECTION,
  QR_CODE_OVERVIEW_SECTION,
  QR_CODE_PROPS_DATA,
} from '../../../constants/atoms-page/qr-code/qrCodeConstants';

export default function QRCodeContainer({
  headerContent = QR_CODE_HEADER_CONTENT,
  breadcrumbItems = QR_CODE_BREADCRUMB_ITEMS,
}: QRCodeContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {QR_CODE_THEME_CONFIGS.map((theme) => (
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
        {QR_CODE_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...QR_CODE_PLAYGROUND_SECTION}>
        <QRCodePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={QR_CODE_MOCK_SECTION.id}
          title={QR_CODE_MOCK_SECTION.title}
          description={QR_CODE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {QR_CODE_MOCK_SECTION.snippets.map((snippet) => (
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
          id={QR_CODE_OVERVIEW_SECTION.id}
          title={QR_CODE_OVERVIEW_SECTION.title}
          description={QR_CODE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={QR_CODE_OVERVIEW_SECTION.quickUsage.label}
              code={QR_CODE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="mt-8">
              <PropsTable data={QR_CODE_PROPS_DATA} />
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
