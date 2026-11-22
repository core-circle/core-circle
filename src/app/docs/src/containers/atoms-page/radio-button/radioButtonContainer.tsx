'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  RADIO_BUTTON_THEME_CONFIGS,
  RADIO_BUTTON_VARIANT_GROUPS,
  RADIO_BUTTON_PROPS_DATA,
  RADIO_BUTTON_PLAYGROUND_SECTION,
  RADIO_BUTTON_MOCK_SECTION,
  RADIO_BUTTON_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/radio-button/radioButtonConstants';
import { RadioButtonPlayground } from '../../../components/playground/radio-button/radioButtonPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { RadioButtonContainerProps } from '../../../interface/containers/atoms/radio-button.types';

export default function RadioButtonContainer({
  headerContent,
  breadcrumbItems,
}: RadioButtonContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {RADIO_BUTTON_THEME_CONFIGS.map((theme) => (
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
            {RADIO_BUTTON_VARIANT_GROUPS.map((group) => (
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
            id={RADIO_BUTTON_PLAYGROUND_SECTION.id}
            title={RADIO_BUTTON_PLAYGROUND_SECTION.title}
            description={RADIO_BUTTON_PLAYGROUND_SECTION.description}
          >
            <RadioButtonPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={RADIO_BUTTON_MOCK_SECTION.id}
              title={RADIO_BUTTON_MOCK_SECTION.title}
              description={RADIO_BUTTON_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {RADIO_BUTTON_MOCK_SECTION.snippets.map((snippet) => (
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
              id={RADIO_BUTTON_OVERVIEW_SECTION.id}
              title={RADIO_BUTTON_OVERVIEW_SECTION.title}
              description={RADIO_BUTTON_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={RADIO_BUTTON_OVERVIEW_SECTION.quickUsage.label}
                  code={RADIO_BUTTON_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {RADIO_BUTTON_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={RADIO_BUTTON_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
