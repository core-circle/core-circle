'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { PopoverPlayground } from '../../../components/playground/popover/popoverPlayground';
import { Typography } from '@core-circle/ui';
import { popoverPageStyles as s } from './popover.styles';
import {
  POPOVER_THEME_CONFIGS,
  POPOVER_VARIANT_GROUPS,
  POPOVER_PLAYGROUND_SECTION,
  POPOVER_MOCK_SECTION,
  POPOVER_OVERVIEW_SECTION,
  POPOVER_PROPS_DATA,
} from '../../../constants/atoms-page/popover/popoverConstants';
import { PopoverContainerProps } from '../../../interface/containers/atoms/popover.types';

export default function PopoverContainer({
  headerContent,
  breadcrumbItems,
}: PopoverContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {POPOVER_THEME_CONFIGS.map((theme) => (
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
        {POPOVER_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...POPOVER_PLAYGROUND_SECTION}>
        <PopoverPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={POPOVER_MOCK_SECTION.id}
          title={POPOVER_MOCK_SECTION.title}
          description={POPOVER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {POPOVER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={POPOVER_OVERVIEW_SECTION.id}
          title={POPOVER_OVERVIEW_SECTION.title}
          description={POPOVER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={POPOVER_OVERVIEW_SECTION.quickUsage.label}
              code={POPOVER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {POPOVER_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={POPOVER_PROPS_DATA} />
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
