'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  TAG_INPUT_THEME_CONFIGS,
  TAG_INPUT_VARIANT_GROUPS,
  TAG_INPUT_PROPS_DATA,
  TAG_INPUT_PLAYGROUND_SECTION,
  TAG_INPUT_MOCK_SECTION,
  TAG_INPUT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/tag-input/tagInputConstants';
import { TagInputPlayground } from '../../../components/playground/tag-input/tagInputPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { TagInputContainerProps } from '../../../interface/containers/atoms/tag-input.types';

export default function TagInputContainer({
  headerContent,
  breadcrumbItems,
}: TagInputContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {TAG_INPUT_THEME_CONFIGS.map((theme) => (
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
            {TAG_INPUT_VARIANT_GROUPS.map((group) => (
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
            id={TAG_INPUT_PLAYGROUND_SECTION.id}
            title={TAG_INPUT_PLAYGROUND_SECTION.title}
            description={TAG_INPUT_PLAYGROUND_SECTION.description}
          >
            <TagInputPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={TAG_INPUT_MOCK_SECTION.id}
              title={TAG_INPUT_MOCK_SECTION.title}
              description={TAG_INPUT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {TAG_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={TAG_INPUT_OVERVIEW_SECTION.id}
              title={TAG_INPUT_OVERVIEW_SECTION.title}
              description={TAG_INPUT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={TAG_INPUT_OVERVIEW_SECTION.quickUsage.label}
                  code={TAG_INPUT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {TAG_INPUT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={TAG_INPUT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
