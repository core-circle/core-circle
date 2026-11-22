'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  TOAST_THEME_CONFIGS,
  TOAST_VARIANT_GROUPS,
  TOAST_PROPS_DATA,
  TOAST_PLAYGROUND_SECTION,
  TOAST_MOCK_SECTION,
  TOAST_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/toast/toastConstants';
import { ToastPlayground } from '../../../components/playground/toast/toastPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { ToastContainerProps } from '../../../interface/containers/atoms/toast.types';

export default function ToastContainer({
  headerContent,
  breadcrumbItems,
}: ToastContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {TOAST_THEME_CONFIGS.map((theme) => (
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
            {TOAST_VARIANT_GROUPS.map((group) => (
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
            id={TOAST_PLAYGROUND_SECTION.id}
            title={TOAST_PLAYGROUND_SECTION.title}
            description={TOAST_PLAYGROUND_SECTION.description}
          >
            <ToastPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={TOAST_MOCK_SECTION.id}
              title={TOAST_MOCK_SECTION.title}
              description={TOAST_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {TOAST_MOCK_SECTION.snippets.map((snippet) => (
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
              id={TOAST_OVERVIEW_SECTION.id}
              title={TOAST_OVERVIEW_SECTION.title}
              description={TOAST_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={TOAST_OVERVIEW_SECTION.quickUsage.label}
                  code={TOAST_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {TOAST_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={TOAST_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
