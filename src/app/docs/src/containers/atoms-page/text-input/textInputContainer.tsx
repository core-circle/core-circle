'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  TEXT_INPUT_THEME_CONFIGS,
  TEXT_INPUT_VARIANT_GROUPS,
  TEXT_INPUT_PROPS_DATA,
  TEXT_INPUT_PLAYGROUND_SECTION,
  TEXT_INPUT_MOCK_SECTION,
  TEXT_INPUT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/text-input/textInputConstants';
import { TextInputPlayground } from '../../../components/playground/text-input/textInputPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { TextInputContainerProps } from '../../../interface/containers/atoms/text-input.types';

export default function TextInputContainer({
  headerContent,
  breadcrumbItems,
}: TextInputContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {TEXT_INPUT_THEME_CONFIGS.map((theme) => (
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
            {TEXT_INPUT_VARIANT_GROUPS.map((group) => (
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
            id={TEXT_INPUT_PLAYGROUND_SECTION.id}
            title={TEXT_INPUT_PLAYGROUND_SECTION.title}
            description={TEXT_INPUT_PLAYGROUND_SECTION.description}
          >
            <TextInputPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={TEXT_INPUT_MOCK_SECTION.id}
              title={TEXT_INPUT_MOCK_SECTION.title}
              description={TEXT_INPUT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {TEXT_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={TEXT_INPUT_OVERVIEW_SECTION.id}
              title={TEXT_INPUT_OVERVIEW_SECTION.title}
              description={TEXT_INPUT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={TEXT_INPUT_OVERVIEW_SECTION.quickUsage.label}
                  code={TEXT_INPUT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {TEXT_INPUT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={TEXT_INPUT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
