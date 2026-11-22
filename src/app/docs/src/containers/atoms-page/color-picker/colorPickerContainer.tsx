'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ColorPickerPlayground } from '../../../components/playground/color-picker/colorPickerPlayground';
import { Typography } from '@core-circle/ui';
import { colorPickerPageStyles as s } from './color-picker.styles';
import {
  COLOR_PICKER_THEME_CONFIGS,
  COLOR_PICKER_VARIANT_GROUPS,
  COLOR_PICKER_PLAYGROUND_SECTION,
  COLOR_PICKER_MOCK_SECTION,
  COLOR_PICKER_OVERVIEW_SECTION,
  COLOR_PICKER_PROPS_DATA,
} from '../../../constants/atoms-page/color-picker/colorPickerConstants';
import { ColorPickerContainerProps } from '../../../interface/containers/atoms/color-picker.types';

export default function ColorPickerContainer({
  headerContent,
  breadcrumbItems,
}: ColorPickerContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {COLOR_PICKER_THEME_CONFIGS.map((theme) => (
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
        {COLOR_PICKER_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...COLOR_PICKER_PLAYGROUND_SECTION}>
        <ColorPickerPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={COLOR_PICKER_MOCK_SECTION.id}
          title={COLOR_PICKER_MOCK_SECTION.title}
          description={COLOR_PICKER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {COLOR_PICKER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={COLOR_PICKER_OVERVIEW_SECTION.id}
          title={COLOR_PICKER_OVERVIEW_SECTION.title}
          description={COLOR_PICKER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={COLOR_PICKER_OVERVIEW_SECTION.quickUsage.label}
              code={COLOR_PICKER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {COLOR_PICKER_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={COLOR_PICKER_PROPS_DATA} />
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
