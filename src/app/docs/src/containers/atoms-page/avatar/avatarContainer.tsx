'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AvatarPlayground } from '../../../components/playground/avatar/AvatarPlayground';
import { Typography } from '@core-circle/ui';
import { avatarPageStyles as s } from './avatar.styles';
import {
  AVATAR_THEME_CONFIGS,
  AVATAR_VARIANT_GROUPS,
  AVATAR_PLAYGROUND_SECTION,
  AVATAR_MOCK_SECTION,
  AVATAR_OVERVIEW_SECTION,
  AVATAR_PROPS_DATA,
} from '../../../constants/atoms-page/avatar/avatarConstants';
import { AvatarContainerProps } from '../../../interface/containers/atoms/avatar.types';

export default function AvatarContainer({
  headerContent,
  breadcrumbItems,
}: AvatarContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {AVATAR_THEME_CONFIGS.map((theme) => (
          <DocSection
            key={theme.id}
            id={theme.id}
            title={theme.sectionTitle}
            description={theme.description}
          >
            <ComponentPreview title={theme.previewTitle} code={theme.code}>
              {theme.render()}
            </ComponentPreview>
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const variants = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {AVATAR_VARIANT_GROUPS.map((group) => (
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
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...AVATAR_PLAYGROUND_SECTION}>
        <AvatarPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={AVATAR_MOCK_SECTION.id}
          title={AVATAR_MOCK_SECTION.title}
          description={AVATAR_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {AVATAR_MOCK_SECTION.snippets.map((snippet) => (
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
    []
  );

  const overview = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={AVATAR_OVERVIEW_SECTION.id}
          title={AVATAR_OVERVIEW_SECTION.title}
          description={AVATAR_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={AVATAR_OVERVIEW_SECTION.quickUsage.label}
              code={AVATAR_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {AVATAR_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={AVATAR_PROPS_DATA} />
            </div>
          </div>
        </DocSection>
      </div>
    ),
    []
  );

  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{ theming, variants, playground, mockCode, overview }}
    />
  );
}
