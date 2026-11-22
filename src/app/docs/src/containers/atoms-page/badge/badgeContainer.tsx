'use client';

import { Badge, Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  BADGE_THEME_CONFIGS,
  BADGE_VARIANT_GROUPS,
  BADGE_PROPS_DATA,
  BADGE_PLAYGROUND_SECTION,
  BADGE_MOCK_SECTION,
  BADGE_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/badge/badgeConstants';
import { BadgePlayground } from '../../../components/playground/badge/BadgePlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { BadgeContainerProps } from '../../../interface/containers/atoms/badge.types';

export default function BadgeContainer({
  headerContent,
  breadcrumbItems,
}: BadgeContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {BADGE_THEME_CONFIGS.map((theme) => (
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
            {BADGE_VARIANT_GROUPS.map((group) => (
              <DocSection
                key={group.id}
                id={group.id}
                title={group.title}
                description={group.description}
              >
                <div className="flex flex-wrap gap-4 items-center">
                  {group.items.map((item) => (
                    <Badge
                      key={item.label}
                      variant={item.variant}
                      shape={item.shape}
                      size={item.size}
                    >
                      {item.label}
                    </Badge>
                  ))}
                </div>
              </DocSection>
            ))}
          </div>
        ),
        playground: (
          <DocSection
            id={BADGE_PLAYGROUND_SECTION.id}
            title={BADGE_PLAYGROUND_SECTION.title}
            description={BADGE_PLAYGROUND_SECTION.description}
          >
            <BadgePlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={BADGE_MOCK_SECTION.id}
              title={BADGE_MOCK_SECTION.title}
              description={BADGE_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {BADGE_MOCK_SECTION.snippets.map((snippet) => (
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
              id={BADGE_OVERVIEW_SECTION.id}
              title={BADGE_OVERVIEW_SECTION.title}
              description={BADGE_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={BADGE_OVERVIEW_SECTION.quickUsage.label}
                  code={BADGE_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {BADGE_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={BADGE_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
