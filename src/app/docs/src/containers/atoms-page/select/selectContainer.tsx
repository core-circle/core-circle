'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  SELECT_THEME_CONFIGS,
  SELECT_VARIANT_GROUPS,
  SELECT_PROPS_DATA,
  SELECT_PLAYGROUND_SECTION,
  SELECT_MOCK_SECTION,
  SELECT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/select/selectConstants';
import { SelectPlayground } from '../../../components/playground/select/selectPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { SelectContainerProps } from '../../../interface/containers/atoms/select.types';

export default function SelectContainer({
  headerContent,
  breadcrumbItems,
}: SelectContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {SELECT_THEME_CONFIGS.map((theme) => (
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
            {SELECT_VARIANT_GROUPS.map((group) => (
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
            id={SELECT_PLAYGROUND_SECTION.id}
            title={SELECT_PLAYGROUND_SECTION.title}
            description={SELECT_PLAYGROUND_SECTION.description}
          >
            <SelectPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={SELECT_MOCK_SECTION.id}
              title={SELECT_MOCK_SECTION.title}
              description={SELECT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {SELECT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={SELECT_OVERVIEW_SECTION.id}
              title={SELECT_OVERVIEW_SECTION.title}
              description={SELECT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={SELECT_OVERVIEW_SECTION.quickUsage.label}
                  code={SELECT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {SELECT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={SELECT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
