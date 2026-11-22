'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  SWITCH_THEME_CONFIGS,
  SWITCH_VARIANT_GROUPS,
  SWITCH_PROPS_DATA,
  SWITCH_PLAYGROUND_SECTION,
  SWITCH_MOCK_SECTION,
  SWITCH_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/switch/switchConstants';
import { SwitchPlayground } from '../../../components/playground/switch/switchPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { SwitchContainerProps } from '../../../interface/containers/atoms/switch.types';

export default function SwitchContainer({
  headerContent,
  breadcrumbItems,
}: SwitchContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {SWITCH_THEME_CONFIGS.map((theme) => (
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
            {SWITCH_VARIANT_GROUPS.map((group) => (
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
            id={SWITCH_PLAYGROUND_SECTION.id}
            title={SWITCH_PLAYGROUND_SECTION.title}
            description={SWITCH_PLAYGROUND_SECTION.description}
          >
            <SwitchPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={SWITCH_MOCK_SECTION.id}
              title={SWITCH_MOCK_SECTION.title}
              description={SWITCH_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {SWITCH_MOCK_SECTION.snippets.map((snippet) => (
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
              id={SWITCH_OVERVIEW_SECTION.id}
              title={SWITCH_OVERVIEW_SECTION.title}
              description={SWITCH_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={SWITCH_OVERVIEW_SECTION.quickUsage.label}
                  code={SWITCH_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {SWITCH_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={SWITCH_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
