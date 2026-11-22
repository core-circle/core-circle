'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  TEXTAREA_THEME_CONFIGS,
  TEXTAREA_VARIANT_GROUPS,
  TEXTAREA_PROPS_DATA,
  TEXTAREA_PLAYGROUND_SECTION,
  TEXTAREA_MOCK_SECTION,
  TEXTAREA_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/textarea/textareaConstants';
import { TextareaPlayground } from '../../../components/playground/textarea/textareaPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { TextareaContainerProps } from '../../../interface/containers/atoms/textarea.types';

export default function TextareaContainer({
  headerContent,
  breadcrumbItems,
}: TextareaContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {TEXTAREA_THEME_CONFIGS.map((theme) => (
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
            {TEXTAREA_VARIANT_GROUPS.map((group) => (
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
            id={TEXTAREA_PLAYGROUND_SECTION.id}
            title={TEXTAREA_PLAYGROUND_SECTION.title}
            description={TEXTAREA_PLAYGROUND_SECTION.description}
          >
            <TextareaPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={TEXTAREA_MOCK_SECTION.id}
              title={TEXTAREA_MOCK_SECTION.title}
              description={TEXTAREA_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {TEXTAREA_MOCK_SECTION.snippets.map((snippet) => (
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
              id={TEXTAREA_OVERVIEW_SECTION.id}
              title={TEXTAREA_OVERVIEW_SECTION.title}
              description={TEXTAREA_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={TEXTAREA_OVERVIEW_SECTION.quickUsage.label}
                  code={TEXTAREA_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {TEXTAREA_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={TEXTAREA_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
