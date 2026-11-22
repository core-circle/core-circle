'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  PROGRESS_THEME_CONFIGS,
  PROGRESS_VARIANT_GROUPS,
  PROGRESS_PROPS_DATA,
  PROGRESS_PLAYGROUND_SECTION,
  PROGRESS_MOCK_SECTION,
  PROGRESS_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/progress/progressConstants';
import { ProgressPlayground } from '../../../components/playground/progress/ProgressPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ProgressContainerProps } from '../../../interface/containers/atoms/progress.types';

export default function ProgressContainer({
  headerContent,
  breadcrumbItems,
}: ProgressContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {PROGRESS_THEME_CONFIGS.map((theme) => (
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
            {PROGRESS_VARIANT_GROUPS.map((group) => (
              <DocSection
                key={group.id}
                id={group.id}
                title={group.title}
                description={group.description}
              >
                <div className="flex flex-col gap-6 w-full">
                  <ComponentPreview title={group.previewTitle} code={group.code}>
                    {group.render()}
                  </ComponentPreview>
                </div>
              </DocSection>
            ))}
          </div>
        ),
        playground: (
          <DocSection
            id={PROGRESS_PLAYGROUND_SECTION.id}
            title={PROGRESS_PLAYGROUND_SECTION.title}
            description={PROGRESS_PLAYGROUND_SECTION.description}
          >
            <ProgressPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={PROGRESS_MOCK_SECTION.id}
              title={PROGRESS_MOCK_SECTION.title}
              description={PROGRESS_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {PROGRESS_MOCK_SECTION.snippets.map((snippet) => (
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
              id={PROGRESS_OVERVIEW_SECTION.id}
              title={PROGRESS_OVERVIEW_SECTION.title}
              description={PROGRESS_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={PROGRESS_OVERVIEW_SECTION.quickUsage.label}
                  code={PROGRESS_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {PROGRESS_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={PROGRESS_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
