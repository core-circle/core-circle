'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  INDICATOR_THEME_CONFIGS,
  INDICATOR_VARIANT_GROUPS,
  INDICATOR_PROPS_DATA,
  INDICATOR_PLAYGROUND_SECTION,
  INDICATOR_MOCK_SECTION,
  INDICATOR_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/indicator/indicatorConstants';
import { IndicatorPlayground } from '../../../components/playground/indicator/indicatorPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { IndicatorContainerProps } from '../../../interface/containers/atoms/indicator.types';

export default function IndicatorContainer({
  headerContent,
  breadcrumbItems,
}: IndicatorContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {INDICATOR_THEME_CONFIGS.map((theme) => (
              <DocSection
                key={theme.id}
                id={theme.id}
                title={theme.sectionTitle}
                description={theme.description}
              >
                <ComponentPreview title={theme.previewTitle} code={theme.code}>
                  <div className="w-full">{theme.render()}</div>
                </ComponentPreview>
              </DocSection>
            ))}
          </div>
        ),
        variants: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {INDICATOR_VARIANT_GROUPS.map((group) => (
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
        playground: (
          <DocSection
            id={INDICATOR_PLAYGROUND_SECTION.id}
            title={INDICATOR_PLAYGROUND_SECTION.title}
            description={INDICATOR_PLAYGROUND_SECTION.description}
          >
            <IndicatorPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={INDICATOR_MOCK_SECTION.id}
              title={INDICATOR_MOCK_SECTION.title}
              description={INDICATOR_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {INDICATOR_MOCK_SECTION.snippets.map((snippet) => (
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
        overview: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={INDICATOR_OVERVIEW_SECTION.id}
              title={INDICATOR_OVERVIEW_SECTION.title}
              description={INDICATOR_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={INDICATOR_OVERVIEW_SECTION.quickUsage.label}
                  code={INDICATOR_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {INDICATOR_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={INDICATOR_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
