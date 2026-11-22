'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  MULTI_SELECT_THEME_CONFIGS,
  MULTI_SELECT_VARIANT_GROUPS,
  MULTI_SELECT_PROPS_DATA,
  MULTI_SELECT_PLAYGROUND_SECTION,
  MULTI_SELECT_MOCK_SECTION,
  MULTI_SELECT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/multi-select/multiSelectConstants';
import { MultiSelectPlayground } from '../../../components/playground/multi-select/multiSelectPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { MultiSelectContainerProps } from '../../../interface/containers/atoms/multi-select.types';

export default function MultiSelectContainer({
  headerContent,
  breadcrumbItems,
}: MultiSelectContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {MULTI_SELECT_THEME_CONFIGS.map((theme) => (
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
            {MULTI_SELECT_VARIANT_GROUPS.map((group) => (
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
            id={MULTI_SELECT_PLAYGROUND_SECTION.id}
            title={MULTI_SELECT_PLAYGROUND_SECTION.title}
            description={MULTI_SELECT_PLAYGROUND_SECTION.description}
          >
            <MultiSelectPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={MULTI_SELECT_MOCK_SECTION.id}
              title={MULTI_SELECT_MOCK_SECTION.title}
              description={MULTI_SELECT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {MULTI_SELECT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={MULTI_SELECT_OVERVIEW_SECTION.id}
              title={MULTI_SELECT_OVERVIEW_SECTION.title}
              description={MULTI_SELECT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={MULTI_SELECT_OVERVIEW_SECTION.quickUsage.label}
                  code={MULTI_SELECT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {MULTI_SELECT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={MULTI_SELECT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
