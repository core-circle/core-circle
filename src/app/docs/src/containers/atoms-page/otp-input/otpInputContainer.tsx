'use client';

import { Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  OTP_INPUT_THEME_CONFIGS,
  OTP_INPUT_VARIANT_GROUPS,
  OTP_INPUT_PROPS_DATA,
  OTP_INPUT_PLAYGROUND_SECTION,
  OTP_INPUT_MOCK_SECTION,
  OTP_INPUT_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/otp-input/otpInputConstants';
import { OtpInputPlayground } from '../../../components/playground/otp-input/otpInputPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { OtpInputContainerProps } from '../../../interface/containers/atoms/otp-input.types';

export default function OtpInputContainer({
  headerContent,
  breadcrumbItems,
}: OtpInputContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {OTP_INPUT_THEME_CONFIGS.map((theme) => (
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
            {OTP_INPUT_VARIANT_GROUPS.map((group) => (
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
            id={OTP_INPUT_PLAYGROUND_SECTION.id}
            title={OTP_INPUT_PLAYGROUND_SECTION.title}
            description={OTP_INPUT_PLAYGROUND_SECTION.description}
          >
            <OtpInputPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={OTP_INPUT_MOCK_SECTION.id}
              title={OTP_INPUT_MOCK_SECTION.title}
              description={OTP_INPUT_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {OTP_INPUT_MOCK_SECTION.snippets.map((snippet) => (
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
              id={OTP_INPUT_OVERVIEW_SECTION.id}
              title={OTP_INPUT_OVERVIEW_SECTION.title}
              description={OTP_INPUT_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={OTP_INPUT_OVERVIEW_SECTION.quickUsage.label}
                  code={OTP_INPUT_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {OTP_INPUT_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={OTP_INPUT_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
