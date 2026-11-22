'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ImagePlayground } from '../../../components/playground/image/imagePlayground';
import { Typography } from '@core-circle/ui';
import { imagePageStyles as s } from './image.styles';
import {
  IMAGE_THEME_CONFIGS,
  IMAGE_VARIANT_GROUPS,
  IMAGE_PLAYGROUND_SECTION,
  IMAGE_MOCK_SECTION,
  IMAGE_OVERVIEW_SECTION,
  IMAGE_PROPS_DATA,
} from '../../../constants/atoms-page/image/imageConstants';
import { ImageContainerProps } from '../../../interface/containers/atoms/image.types';

export default function ImageContainer({
  headerContent,
  breadcrumbItems,
}: ImageContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {IMAGE_THEME_CONFIGS.map((theme) => (
          <DocSection
            key={theme.id}
            id={theme.id}
            title={theme.sectionTitle}
            description={theme.description}
          >
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
        {IMAGE_VARIANT_GROUPS.map((group) => (
          <DocSection
            key={group.id}
            id={group.id}
            title={group.title}
            description={group.description}
          >
            {group.render()}
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...IMAGE_PLAYGROUND_SECTION}>
        <ImagePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={IMAGE_MOCK_SECTION.id}
          title={IMAGE_MOCK_SECTION.title}
          description={IMAGE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {IMAGE_MOCK_SECTION.snippets.map((snippet) => (
              <CodeSnippet
                key={snippet.label}
                label={snippet.label}
                code={snippet.code}
              />
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
          id={IMAGE_OVERVIEW_SECTION.id}
          title={IMAGE_OVERVIEW_SECTION.title}
          description={IMAGE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={IMAGE_OVERVIEW_SECTION.quickUsage.label}
              code={IMAGE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {IMAGE_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={IMAGE_PROPS_DATA} />
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
