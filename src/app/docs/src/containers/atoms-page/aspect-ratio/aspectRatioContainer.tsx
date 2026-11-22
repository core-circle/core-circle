'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AspectRatioPlayground } from '../../../components/playground/aspect-ratio/aspectRatioPlayground';
import { Typography } from '@core-circle/ui';
import { aspectRatioPageStyles as s } from './aspect-ratio.styles';
import {
  ASPECT_RATIO_THEME_CONFIGS,
  ASPECT_RATIO_VARIANT_GROUPS,
  ASPECT_RATIO_PLAYGROUND_SECTION,
  ASPECT_RATIO_MOCK_SECTION,
  ASPECT_RATIO_OVERVIEW_SECTION,
  ASPECT_RATIO_PROPS_DATA,
} from '../../../constants/atoms-page/aspect-ratio/aspectRatioConstants';
import { AspectRatioContainerProps } from '../../../interface/containers/atoms/aspect-ratio.types';

export default function AspectRatioContainer({
  headerContent,
  breadcrumbItems,
}: AspectRatioContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {ASPECT_RATIO_THEME_CONFIGS.map((theme) => (
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
        {ASPECT_RATIO_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...ASPECT_RATIO_PLAYGROUND_SECTION}>
        <AspectRatioPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={ASPECT_RATIO_MOCK_SECTION.id}
          title={ASPECT_RATIO_MOCK_SECTION.title}
          description={ASPECT_RATIO_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {ASPECT_RATIO_MOCK_SECTION.snippets.map((snippet) => (
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
          id={ASPECT_RATIO_OVERVIEW_SECTION.id}
          title={ASPECT_RATIO_OVERVIEW_SECTION.title}
          description={ASPECT_RATIO_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={ASPECT_RATIO_OVERVIEW_SECTION.quickUsage.label}
              code={ASPECT_RATIO_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {ASPECT_RATIO_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={ASPECT_RATIO_PROPS_DATA} />
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
