'use client';

import { Typography } from '@core-circle/ui';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import ComponentPreview from '../../../components/component-preview';
import {
  KBD_THEME_CONFIGS,
  KBD_VARIANT_GROUPS,
  KBD_PROPS_DATA,
  KBD_PLAYGROUND_SECTION,
  KBD_MOCK_SECTION,
  KBD_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/kbd/kbdConstants';
import { KbdPlayground } from '../../../components/playground/kbd/kbdPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { KbdContainerProps } from '../../../interface/containers/atoms/kbd.types';

export default function KbdContainer({
  headerContent,
  breadcrumbItems,
}: KbdContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {KBD_THEME_CONFIGS.map((theme) => (
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
            {KBD_VARIANT_GROUPS.map((group) => (
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
            id={KBD_PLAYGROUND_SECTION.id}
            title={KBD_PLAYGROUND_SECTION.title}
            description={KBD_PLAYGROUND_SECTION.description}
          >
            <KbdPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={KBD_MOCK_SECTION.id}
              title={KBD_MOCK_SECTION.title}
              description={KBD_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {KBD_MOCK_SECTION.snippets.map((snippet) => (
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
              id={KBD_OVERVIEW_SECTION.id}
              title={KBD_OVERVIEW_SECTION.title}
              description={KBD_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={KBD_OVERVIEW_SECTION.quickUsage.label}
                  code={KBD_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {KBD_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={KBD_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
