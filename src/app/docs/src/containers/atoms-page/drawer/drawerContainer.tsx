'use client';

import { useMemo } from 'react';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DrawerPlayground } from '../../../components/playground/drawer/drawerPlayground';
import { Typography } from '@core-circle/ui';
import { drawerPageStyles as s } from './drawer.styles';
import {
  DRAWER_THEME_CONFIGS,
  DRAWER_VARIANT_GROUPS,
  DRAWER_PLAYGROUND_SECTION,
  DRAWER_MOCK_SECTION,
  DRAWER_OVERVIEW_SECTION,
  DRAWER_PROPS_DATA,
} from '../../../constants/atoms-page/drawer/drawerConstants';
import { DrawerContainerProps } from '../../../interface/containers/atoms/drawer.types';

export default function DrawerContainer({
  headerContent,
  breadcrumbItems,
}: DrawerContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {DRAWER_THEME_CONFIGS.map((theme) => (
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
        {DRAWER_VARIANT_GROUPS.map((group) => (
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
      <DocSection {...DRAWER_PLAYGROUND_SECTION}>
        <DrawerPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={DRAWER_MOCK_SECTION.id}
          title={DRAWER_MOCK_SECTION.title}
          description={DRAWER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {DRAWER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={DRAWER_OVERVIEW_SECTION.id}
          title={DRAWER_OVERVIEW_SECTION.title}
          description={DRAWER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={DRAWER_OVERVIEW_SECTION.quickUsage.label}
              code={DRAWER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <Typography
                variant="h4"
                className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
              >
                {DRAWER_OVERVIEW_SECTION.propsTableTitle}
              </Typography>
              <PropsTable data={DRAWER_PROPS_DATA} />
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
