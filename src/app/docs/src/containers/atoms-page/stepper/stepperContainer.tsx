'use client';

import React, { useMemo } from 'react';
import DocSection from '../../../components/doc-section';
import ComponentPreview from '../../../components/component-preview';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { StepperPlayground } from '../../../components/playground/stepper/stepperPlayground';
import { DocPageShell } from '../../../components/doc-page-shell/docPageShell';
import { stepperPageStyles as s } from './stepper.styles';
import { StepperContainerProps } from '../../../interface/containers/atoms/stepper.types';
import {
  STEPPER_HEADER_CONTENT,
  STEPPER_BREADCRUMB_ITEMS,
  STEPPER_THEME_CONFIGS,
  STEPPER_VARIANT_GROUPS,
  STEPPER_PLAYGROUND_SECTION,
  STEPPER_MOCK_SECTION,
  STEPPER_OVERVIEW_SECTION,
  STEPPER_PROPS_DATA,
} from '../../../constants/atoms-page/stepper/stepperConstants';

export default function StepperContainer({
  headerContent = STEPPER_HEADER_CONTENT,
  breadcrumbItems = STEPPER_BREADCRUMB_ITEMS,
}: StepperContainerProps) {
  const theming = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        {STEPPER_THEME_CONFIGS.map((theme) => (
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
        {STEPPER_VARIANT_GROUPS.map((group) => (
          <DocSection key={group.id} id={group.id} title={group.title} description={group.description}>
            <div className="flex flex-col gap-8 w-full">
              {group.items?.map((item) => (
                <ComponentPreview key={item.title} title={item.title} code={item.code}>
                  {item.render()}
                </ComponentPreview>
              ))}
            </div>
          </DocSection>
        ))}
      </div>
    ),
    []
  );

  const playground = useMemo(
    () => (
      <DocSection {...STEPPER_PLAYGROUND_SECTION}>
        <StepperPlayground />
      </DocSection>
    ),
    []
  );

  const mockCode = useMemo(
    () => (
      <div className={s.tabContentWrapper}>
        <DocSection
          id={STEPPER_MOCK_SECTION.id}
          title={STEPPER_MOCK_SECTION.title}
          description={STEPPER_MOCK_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            {STEPPER_MOCK_SECTION.snippets.map((snippet) => (
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
          id={STEPPER_OVERVIEW_SECTION.id}
          title={STEPPER_OVERVIEW_SECTION.title}
          description={STEPPER_OVERVIEW_SECTION.description}
        >
          <div className="flex flex-col gap-8 mt-6">
            <CodeSnippet
              label={STEPPER_OVERVIEW_SECTION.quickUsage.label}
              code={STEPPER_OVERVIEW_SECTION.quickUsage.code}
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                {STEPPER_OVERVIEW_SECTION.propsTableTitle}
              </span>
              <PropsTable data={STEPPER_PROPS_DATA} />
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
