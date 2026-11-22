'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AvatarGroupPlayground } from '../../../components/playground/avatar-group/avatarGroupPlayground';
import { Typography } from '@core-circle/ui';
import { avatarGroupPageStyles as s } from './avatar-group.styles';
import {
  AVATAR_GROUP_THEME_CONFIGS,
  AVATAR_GROUP_VARIANT_GROUPS,
  AVATAR_GROUP_PLAYGROUND_SECTION,
  AVATAR_GROUP_MOCK_SECTION,
  AVATAR_GROUP_OVERVIEW_SECTION,
  AVATAR_GROUP_PROPS_DATA,
} from '../../../constants/atoms-page/avatar-group/avatarGroupConstants';
import { AvatarGroupContainerProps } from '../../../interface/containers/atoms/avatar-group.types';

export default function AvatarGroupContainer({
  headerContent,
  breadcrumbItems,
}: AvatarGroupContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {AVATAR_GROUP_THEME_CONFIGS.map((theme) => (
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
        {AVATAR_GROUP_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...AVATAR_GROUP_PLAYGROUND_SECTION}>
        <AvatarGroupPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={AVATAR_GROUP_MOCK_SECTION.id}
          title={AVATAR_GROUP_MOCK_SECTION.title}
          description={AVATAR_GROUP_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {AVATAR_GROUP_MOCK_SECTION.snippets.map((snippet) => (
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
          id={AVATAR_GROUP_OVERVIEW_SECTION.id}
          title={AVATAR_GROUP_OVERVIEW_SECTION.title}
          description={AVATAR_GROUP_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={AVATAR_GROUP_OVERVIEW_SECTION.quickUsage.label}
              code={AVATAR_GROUP_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {AVATAR_GROUP_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={AVATAR_GROUP_PROPS_DATA} />
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
