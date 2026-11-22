'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  SPINNER_THEME_CONFIGS,
  SPINNER_VARIANT_GROUPS,
  SPINNER_PROPS_DATA,
  SPINNER_PLAYGROUND_SECTION,
  SPINNER_MOCK_SECTION,
  SPINNER_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/spinner/spinnerConstants';
import { SpinnerPlayground } from '../../../components/playground/spinner/spinnerPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';

export interface SpinnerContainerProps {
  headerContent?: {
    title: string;
    description: string;
  };
  breadcrumbItems?: any[];
}

export default function SpinnerContainer({
  headerContent,
  breadcrumbItems,
}: SpinnerContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent || { title: 'Spinner', description: '' }}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {SPINNER_THEME_CONFIGS.map((theme) => (
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
            {SPINNER_VARIANT_GROUPS.map((group) => (
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
            id={SPINNER_PLAYGROUND_SECTION.id}
            title={SPINNER_PLAYGROUND_SECTION.title}
            description={SPINNER_PLAYGROUND_SECTION.description}
          >
            <SpinnerPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={SPINNER_MOCK_SECTION.id}
              title={SPINNER_MOCK_SECTION.title}
              description={SPINNER_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {SPINNER_MOCK_SECTION.snippets.map((snippet) => (
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
              id={SPINNER_OVERVIEW_SECTION.id}
              title={SPINNER_OVERVIEW_SECTION.title}
              description={SPINNER_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={SPINNER_OVERVIEW_SECTION.quickUsage.label}
                  code={SPINNER_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {SPINNER_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={SPINNER_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
