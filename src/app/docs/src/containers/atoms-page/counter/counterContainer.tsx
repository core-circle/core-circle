'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  COUNTER_THEME_CONFIGS,
  COUNTER_VARIANT_GROUPS,
  COUNTER_PROPS_DATA,
  COUNTER_PLAYGROUND_SECTION,
  COUNTER_MOCK_SECTION,
  COUNTER_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/counter/counterConstants';
import { CounterPlayground } from '../../../components/playground/counter/counterPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { CounterContainerProps } from '../../../interface/containers/atoms/counter.types';

export default function CounterContainer({
  headerContent,
  breadcrumbItems,
}: CounterContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {COUNTER_THEME_CONFIGS.map((theme) => (
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
            {COUNTER_VARIANT_GROUPS.map((group) => (
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
            id={COUNTER_PLAYGROUND_SECTION.id}
            title={COUNTER_PLAYGROUND_SECTION.title}
            description={COUNTER_PLAYGROUND_SECTION.description}
          >
            <CounterPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={COUNTER_MOCK_SECTION.id}
              title={COUNTER_MOCK_SECTION.title}
              description={COUNTER_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {COUNTER_MOCK_SECTION.snippets.map((snippet) => (
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
              id={COUNTER_OVERVIEW_SECTION.id}
              title={COUNTER_OVERVIEW_SECTION.title}
              description={COUNTER_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={COUNTER_OVERVIEW_SECTION.quickUsage.label}
                  code={COUNTER_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {COUNTER_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={COUNTER_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
