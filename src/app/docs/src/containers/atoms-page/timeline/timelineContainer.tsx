'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TimelinePlayground } from '../../../components/playground/timeline/timelinePlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { timelinePageStyles as s } from './timeline.styles';
import { TimelineContainerProps } from '../../../interface/containers/atoms/timeline.types';
import {
  TIMELINE_HEADER_CONTENT,
  TIMELINE_BREADCRUMB_ITEMS,
  TIMELINE_THEME_CONFIGS,
  TIMELINE_VARIANT_GROUPS,
  TIMELINE_PLAYGROUND_SECTION,
  TIMELINE_MOCK_SECTION,
  TIMELINE_OVERVIEW_SECTION,
  TIMELINE_PROPS_DATA,
} from '../../../constants/atoms-page/timeline/timelineConstants';

export default function TimelineContainer({
  headerContent = TIMELINE_HEADER_CONTENT,
  breadcrumbItems = TIMELINE_BREADCRUMB_ITEMS,
}: TimelineContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {TIMELINE_THEME_CONFIGS.map((theme) => (
          <DocSection key={theme.id} id={theme.id} title={theme.title} description={theme.description}>
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
        {TIMELINE_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            {group.customRender ? (
              group.customRender()
            ) : (
              <div className="flex flex-col gap-8 w-full">
                {group.items?.map((item) => (
                  <ComponentPreview key={item.title} title={item.title} code={item.code}>
                    {item.render()}
                  </ComponentPreview>
                ))}
              </div>
            )}
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...TIMELINE_PLAYGROUND_SECTION}>
        <TimelinePlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={TIMELINE_MOCK_SECTION.id}
          title={TIMELINE_MOCK_SECTION.title}
          description={TIMELINE_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {TIMELINE_MOCK_SECTION.snippets.map((snippet) => (
              <CodeSnippet key={snippet.label} label={snippet.label} code={snippet.code} />
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
          id={TIMELINE_OVERVIEW_SECTION.id}
          title={TIMELINE_OVERVIEW_SECTION.title}
          description={TIMELINE_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={TIMELINE_OVERVIEW_SECTION.quickUsage.label}
              code={TIMELINE_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {TIMELINE_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={TIMELINE_PROPS_DATA} />
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
