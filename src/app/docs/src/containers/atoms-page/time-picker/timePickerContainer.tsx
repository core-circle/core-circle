'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TimePickerPlayground } from '../../../components/playground/time-picker/timePickerPlayground';
import { Typography } from '@core-circle/ui';
import { timePickerPageStyles as s } from './time-picker.styles';
import {
  TIME_PICKER_THEME_CONFIGS,
  TIME_PICKER_VARIANT_GROUPS,
  TIME_PICKER_PLAYGROUND_SECTION,
  TIME_PICKER_MOCK_SECTION,
  TIME_PICKER_OVERVIEW_SECTION,
  TIME_PICKER_PROPS_DATA,
} from '../../../constants/atoms-page/time-picker/timePickerConstants';
import { TimePickerContainerProps } from '../../../interface/containers/atoms/time-picker.types';

export default function TimePickerContainer({
  headerContent,
  breadcrumbItems,
}: TimePickerContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TIME_PICKER_THEME_CONFIGS.map((theme) => (
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
        {TIME_PICKER_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...TIME_PICKER_PLAYGROUND_SECTION}>
        <TimePickerPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TIME_PICKER_MOCK_SECTION.id}
          title={TIME_PICKER_MOCK_SECTION.title}
          description={TIME_PICKER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TIME_PICKER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={TIME_PICKER_OVERVIEW_SECTION.id}
          title={TIME_PICKER_OVERVIEW_SECTION.title}
          description={TIME_PICKER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TIME_PICKER_OVERVIEW_SECTION.quickUsage.label}
              code={TIME_PICKER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {TIME_PICKER_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={TIME_PICKER_PROPS_DATA} />
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
