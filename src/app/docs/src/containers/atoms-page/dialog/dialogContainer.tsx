'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DialogPlayground } from '../../../components/playground/dialog/dialogPlayground';
import { Typography } from '@core-circle/ui';
import { dialogPageStyles as s } from './dialog.styles';
import {
  DIALOG_THEME_CONFIGS,
  DIALOG_VARIANT_GROUPS,
  DIALOG_PLAYGROUND_SECTION,
  DIALOG_MOCK_SECTION,
  DIALOG_OVERVIEW_SECTION,
  DIALOG_PROPS_DATA,
} from '../../../constants/atoms-page/dialog/dialogConstants';
import { DialogContainerProps } from '../../../interface/containers/atoms/dialog.types';

export default function DialogContainer({
  headerContent,
  breadcrumbItems,
}: DialogContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {DIALOG_THEME_CONFIGS.map((theme) => (
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
        {DIALOG_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...DIALOG_PLAYGROUND_SECTION}>
        <DialogPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={DIALOG_MOCK_SECTION.id}
          title={DIALOG_MOCK_SECTION.title}
          description={DIALOG_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {DIALOG_MOCK_SECTION.snippets.map((snippet) => (
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
          id={DIALOG_OVERVIEW_SECTION.id}
          title={DIALOG_OVERVIEW_SECTION.title}
          description={DIALOG_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={DIALOG_OVERVIEW_SECTION.quickUsage.label}
              code={DIALOG_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {DIALOG_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={DIALOG_PROPS_DATA} />
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
