'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { FileUploadPlayground } from '../../../components/playground/file-upload/fileUploadPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { fileUploadPageStyles as s } from './file-upload.styles';
import { FileUploadContainerProps } from '../../../interface/containers/atoms/file-upload.types';
import {
  FILE_UPLOAD_HEADER_CONTENT,
  FILE_UPLOAD_BREADCRUMB_ITEMS,
  FILE_UPLOAD_THEME_CONFIGS,
  FILE_UPLOAD_VARIANT_GROUPS,
  FILE_UPLOAD_PLAYGROUND_SECTION,
  FILE_UPLOAD_MOCK_SECTION,
  FILE_UPLOAD_OVERVIEW_SECTION,
  FILE_UPLOAD_PROPS_DATA,
} from '../../../constants/atoms-page/file-upload/fileUploadConstants';

export default function FileUploadContainer({
  headerContent = FILE_UPLOAD_HEADER_CONTENT,
  breadcrumbItems = FILE_UPLOAD_BREADCRUMB_ITEMS,
}: FileUploadContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {FILE_UPLOAD_THEME_CONFIGS.map((theme) => (
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
        {FILE_UPLOAD_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...FILE_UPLOAD_PLAYGROUND_SECTION}>
        <FileUploadPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={FILE_UPLOAD_MOCK_SECTION.id}
          title={FILE_UPLOAD_MOCK_SECTION.title}
          description={FILE_UPLOAD_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {FILE_UPLOAD_MOCK_SECTION.snippets.map((snippet) => (
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
          id={FILE_UPLOAD_OVERVIEW_SECTION.id}
          title={FILE_UPLOAD_OVERVIEW_SECTION.title}
          description={FILE_UPLOAD_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={FILE_UPLOAD_OVERVIEW_SECTION.quickUsage.label}
              code={FILE_UPLOAD_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {FILE_UPLOAD_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={FILE_UPLOAD_PROPS_DATA} />
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
