'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TooltipPlayground } from '../../../components/playground/tooltip/tooltipPlayground';
import { Typography } from '@core-circle/ui';
import { tooltipPageStyles as s } from './tooltip.styles';
import {
  TOOLTIP_THEME_CONFIGS,
  TOOLTIP_VARIANT_GROUPS,
  TOOLTIP_PLAYGROUND_SECTION,
  TOOLTIP_MOCK_SECTION,
  TOOLTIP_OVERVIEW_SECTION,
  TOOLTIP_PROPS_DATA,
} from '../../../constants/atoms-page/tooltip/tooltipConstants';
import { TooltipContainerProps } from '../../../interface/containers/atoms/tooltip.types';

export default function TooltipContainer({
  headerContent,
  breadcrumbItems,
}: TooltipContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TOOLTIP_THEME_CONFIGS.map((theme) => (
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
        {TOOLTIP_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...TOOLTIP_PLAYGROUND_SECTION}>
        <TooltipPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TOOLTIP_MOCK_SECTION.id}
          title={TOOLTIP_MOCK_SECTION.title}
          description={TOOLTIP_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TOOLTIP_MOCK_SECTION.snippets.map((snippet) => (
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
          id={TOOLTIP_OVERVIEW_SECTION.id}
          title={TOOLTIP_OVERVIEW_SECTION.title}
          description={TOOLTIP_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TOOLTIP_OVERVIEW_SECTION.quickUsage.label}
              code={TOOLTIP_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {TOOLTIP_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={TOOLTIP_PROPS_DATA} />
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
