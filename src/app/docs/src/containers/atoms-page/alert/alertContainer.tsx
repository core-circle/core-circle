'use client';

import { Alert, Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  ALERT_THEME_CONFIGS,
  ALERT_VARIANT_GROUPS,
  ALERT_PROPS_DATA,
  ALERT_PLAYGROUND_SECTION,
  ALERT_MOCK_SECTION,
  ALERT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/alert/alertConstants';
import { AlertPlayground } from '../../../components/playground/alert/alertPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { AlertContainerProps } from '../../../interface/containers/atoms/alert.types';

export default function AlertContainer({
  headerContent,
  breadcrumbItems,
}: AlertContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {ALERT_THEME_CONFIGS.map((theme) => (
              <DocSection
                key={theme.id}
                id={theme.id}
                title={theme.sectionTitle}
                description={theme.description}
              >
                <ComponentPreview title={theme.previewTitle} code={theme.code}>
                  <div className="w-full">
                    <Alert
                      variant={theme.props.variant}
                      title={theme.props.title}
                      description={theme.props.description}
                      dismissible={theme.props.dismissible}
                      icon={theme.props.icon}
                      action={theme.props.action}
                    />
                  </div>
                </ComponentPreview>
              </DocSection>
            ))}
          </div>
        ),
        variants: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {ALERT_VARIANT_GROUPS.map((group) => (
              <DocSection
                key={group.id}
                id={group.id}
                title={group.title}
                description={group.description}
              >
                <div className="flex flex-col gap-4 w-full">
                  {group.variants.map((v) => (
                    <Alert
                      key={v.variant}
                      variant={v.variant}
                      title={v.title}
                      description={v.description}
                    />
                  ))}
                </div>
              </DocSection>
            ))}
          </div>
        ),
        playground: (
          <DocSection
            id={ALERT_PLAYGROUND_SECTION.id}
            title={ALERT_PLAYGROUND_SECTION.title}
            description={ALERT_PLAYGROUND_SECTION.description}
          >
            <AlertPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={ALERT_MOCK_SECTION.id}
              title={ALERT_MOCK_SECTION.title}
              description={ALERT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {ALERT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={ALERT_OVERVIEW_SECTION.id}
              title={ALERT_OVERVIEW_SECTION.title}
              description={ALERT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={ALERT_OVERVIEW_SECTION.quickUsage.label}
                  code={ALERT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {ALERT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={ALERT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
