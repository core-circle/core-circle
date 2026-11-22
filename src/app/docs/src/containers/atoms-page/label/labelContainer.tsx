'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  LABEL_THEME_CONFIGS,
  LABEL_VARIANT_GROUPS,
  LABEL_PROPS_DATA,
  LABEL_PLAYGROUND_SECTION,
  LABEL_MOCK_SECTION,
  LABEL_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/label/labelConstants';
import { LabelPlayground } from '../../../components/playground/label/labelPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { LabelContainerProps } from '../../../interface/containers/atoms/label.types';

export default function LabelContainer({
  headerContent,
  breadcrumbItems,
}: LabelContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {LABEL_THEME_CONFIGS.map((theme) => (
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
            {LABEL_VARIANT_GROUPS.map((group) => (
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
            id={LABEL_PLAYGROUND_SECTION.id}
            title={LABEL_PLAYGROUND_SECTION.title}
            description={LABEL_PLAYGROUND_SECTION.description}
          >
            <LabelPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={LABEL_MOCK_SECTION.id}
              title={LABEL_MOCK_SECTION.title}
              description={LABEL_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {LABEL_MOCK_SECTION.snippets.map((snippet) => (
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
              id={LABEL_OVERVIEW_SECTION.id}
              title={LABEL_OVERVIEW_SECTION.title}
              description={LABEL_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={LABEL_OVERVIEW_SECTION.quickUsage.label}
                  code={LABEL_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {LABEL_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={LABEL_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
