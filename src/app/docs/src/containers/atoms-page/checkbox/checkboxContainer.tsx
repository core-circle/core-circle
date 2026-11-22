'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  CHECKBOX_THEME_CONFIGS,
  CHECKBOX_VARIANT_GROUPS,
  CHECKBOX_PROPS_DATA,
  CHECKBOX_PLAYGROUND_SECTION,
  CHECKBOX_MOCK_SECTION,
  CHECKBOX_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/checkbox/checkboxConstants';
import { CheckboxPlayground } from '../../../components/playground/checkbox/checkboxPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { CheckboxContainerProps } from '../../../interface/containers/atoms/checkbox.types';

export default function CheckboxContainer({
  headerContent,
  breadcrumbItems,
}: CheckboxContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {CHECKBOX_THEME_CONFIGS.map((theme) => (
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
            {CHECKBOX_VARIANT_GROUPS.map((group) => (
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
            id={CHECKBOX_PLAYGROUND_SECTION.id}
            title={CHECKBOX_PLAYGROUND_SECTION.title}
            description={CHECKBOX_PLAYGROUND_SECTION.description}
          >
            <CheckboxPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={CHECKBOX_MOCK_SECTION.id}
              title={CHECKBOX_MOCK_SECTION.title}
              description={CHECKBOX_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {CHECKBOX_MOCK_SECTION.snippets.map((snippet) => (
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
              id={CHECKBOX_OVERVIEW_SECTION.id}
              title={CHECKBOX_OVERVIEW_SECTION.title}
              description={CHECKBOX_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={CHECKBOX_OVERVIEW_SECTION.quickUsage.label}
                  code={CHECKBOX_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {CHECKBOX_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={CHECKBOX_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
