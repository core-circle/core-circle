'use client';

import { Button, Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  BUTTON_THEME_CONFIGS,
  BUTTON_VARIANT_GROUPS,
  BUTTON_PROPS_DATA,
  BUTTON_PLAYGROUND_SECTION,
  BUTTON_MOCK_SECTION,
  BUTTON_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/button/buttonConstants';
import { ButtonPlayground } from '../../../components/playground/button/buttonPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ButtonContainerProps } from '../../../interface/containers/atoms/button.types';

export default function ButtonContainer({
  headerContent,
  breadcrumbItems,
}: ButtonContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {BUTTON_THEME_CONFIGS.map((theme) => (
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
            {BUTTON_VARIANT_GROUPS.map((group) => (
              <DocSection
                key={group.id}
                id={group.id}
                title={group.title}
                description={group.description}
              >
                <div className="flex flex-wrap gap-4 items-center">
                  {group.items.map((item) => (
                    <Button
                      key={item.label}
                      variant={item.variant}
                      shape={item.shape}
                      size={item.size}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </DocSection>
            ))}
          </div>
        ),
        playground: (
          <DocSection
            id={BUTTON_PLAYGROUND_SECTION.id}
            title={BUTTON_PLAYGROUND_SECTION.title}
            description={BUTTON_PLAYGROUND_SECTION.description}
          >
            <ButtonPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={BUTTON_MOCK_SECTION.id}
              title={BUTTON_MOCK_SECTION.title}
              description={BUTTON_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {BUTTON_MOCK_SECTION.snippets.map((snippet) => (
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
              id={BUTTON_OVERVIEW_SECTION.id}
              title={BUTTON_OVERVIEW_SECTION.title}
              description={BUTTON_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={BUTTON_OVERVIEW_SECTION.quickUsage.label}
                  code={BUTTON_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {BUTTON_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={BUTTON_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
