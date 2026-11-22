'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  SLIDER_INPUT_THEME_CONFIGS,
  SLIDER_INPUT_VARIANT_GROUPS,
  SLIDER_INPUT_PROPS_DATA,
  SLIDER_INPUT_PLAYGROUND_SECTION,
  SLIDER_INPUT_MOCK_SECTION,
  SLIDER_INPUT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/slider-input/sliderInputConstants';
import { SliderInputPlayground } from '../../../components/playground/slider-input/SliderInputPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { SliderInputContainerProps } from '../../../interface/containers/atoms/slider-input.types';

export default function SliderInputContainer({
  headerContent,
  breadcrumbItems,
}: SliderInputContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {SLIDER_INPUT_THEME_CONFIGS.map((theme) => (
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
            {SLIDER_INPUT_VARIANT_GROUPS.map((group) => (
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
            id={SLIDER_INPUT_PLAYGROUND_SECTION.id}
            title={SLIDER_INPUT_PLAYGROUND_SECTION.title}
            description={SLIDER_INPUT_PLAYGROUND_SECTION.description}
          >
            <SliderInputPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={SLIDER_INPUT_MOCK_SECTION.id}
              title={SLIDER_INPUT_MOCK_SECTION.title}
              description={SLIDER_INPUT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {SLIDER_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={SLIDER_INPUT_OVERVIEW_SECTION.id}
              title={SLIDER_INPUT_OVERVIEW_SECTION.title}
              description={SLIDER_INPUT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={SLIDER_INPUT_OVERVIEW_SECTION.quickUsage.label}
                  code={SLIDER_INPUT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {SLIDER_INPUT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={SLIDER_INPUT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
