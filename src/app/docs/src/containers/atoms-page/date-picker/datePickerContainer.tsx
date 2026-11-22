'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DatePickerPlayground } from '../../../components/playground/date-picker/datePickerPlayground';
import { Typography } from '@core-circle/ui';
import { datePickerPageStyles as s } from './date-picker.styles';
import {
  DATE_PICKER_THEME_CONFIGS,
  DATE_PICKER_VARIANT_GROUPS,
  DATE_PICKER_PLAYGROUND_SECTION,
  DATE_PICKER_MOCK_SECTION,
  DATE_PICKER_OVERVIEW_SECTION,
  DATE_PICKER_PROPS_DATA,
} from '../../../constants/atoms-page/date-picker/datePickerConstants';
import { DatePickerContainerProps } from '../../../interface/containers/atoms/date-picker.types';

export default function DatePickerContainer({
  headerContent,
  breadcrumbItems,
}: DatePickerContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {DATE_PICKER_THEME_CONFIGS.map((theme) => (
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
        {DATE_PICKER_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...DATE_PICKER_PLAYGROUND_SECTION}>
        <DatePickerPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={DATE_PICKER_MOCK_SECTION.id}
          title={DATE_PICKER_MOCK_SECTION.title}
          description={DATE_PICKER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {DATE_PICKER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={DATE_PICKER_OVERVIEW_SECTION.id}
          title={DATE_PICKER_OVERVIEW_SECTION.title}
          description={DATE_PICKER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={DATE_PICKER_OVERVIEW_SECTION.quickUsage.label}
              code={DATE_PICKER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {DATE_PICKER_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={DATE_PICKER_PROPS_DATA} />
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
