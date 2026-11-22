'use client';

import { Accordion, Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  ACCORDION_THEME_CONFIGS,
  ACCORDION_VARIANT_GROUPS,
  ACCORDION_SAMPLE_ITEMS,
  ACCORDION_PROPS_DATA,
  ACCORDION_PLAYGROUND_SECTION,
  ACCORDION_MOCK_SECTION,
  ACCORDION_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/accordion/accordionConstants';
import { AccordionPlayground } from '../../../components/playground/accordion/AccordionPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { AccordionContainerProps } from '../../../interface/containers/atoms/accordion.types';

export default function AccordionContainer({
  headerContent,
  breadcrumbItems,
}: AccordionContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {ACCORDION_THEME_CONFIGS.map((theme) => (
              <DocSection
                key={theme.id}
                id={theme.id}
                title={theme.sectionTitle}
                description={theme.description}
              >
                <ComponentPreview title={theme.previewTitle} code={theme.code}>
                  <div className="w-full">
                    <Accordion
                      variant={theme.props.variant}
                      type={theme.props.type}
                      collapsible={theme.props.collapsible}
                      defaultValue={theme.props.defaultValue}
                      items={theme.items}
                    />
                  </div>
                </ComponentPreview>
              </DocSection>
            ))}
          </div>
        ),
        variants: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {ACCORDION_VARIANT_GROUPS.map((group) => (
              <DocSection
                key={group.id}
                id={group.id}
                title={group.title}
                description={group.description}
              >
                <div className="flex flex-col gap-6 w-full">
                  {group.variants.map((v) => (
                    <ComponentPreview
                      key={v.variant}
                      title={v.title}
                      code={`<Accordion items={items} type="single" variant="${v.variant}" defaultValue="1" />`}
                    >
                      <div className={v.wrapperClassName ? `w-full ${v.wrapperClassName}` : 'w-full'}>
                        <Accordion items={ACCORDION_SAMPLE_ITEMS} type="single" variant={v.variant} defaultValue="1" />
                      </div>
                    </ComponentPreview>
                  ))}
                </div>
              </DocSection>
            ))}
          </div>
        ),
        playground: (
          <DocSection
            id={ACCORDION_PLAYGROUND_SECTION.id}
            title={ACCORDION_PLAYGROUND_SECTION.title}
            description={ACCORDION_PLAYGROUND_SECTION.description}
          >
            <AccordionPlayground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={ACCORDION_MOCK_SECTION.id}
              title={ACCORDION_MOCK_SECTION.title}
              description={ACCORDION_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {ACCORDION_MOCK_SECTION.snippets.map((snippet) => (
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
              id={ACCORDION_OVERVIEW_SECTION.id}
              title={ACCORDION_OVERVIEW_SECTION.title}
              description={ACCORDION_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={ACCORDION_OVERVIEW_SECTION.quickUsage.label}
                  code={ACCORDION_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {ACCORDION_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={ACCORDION_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
