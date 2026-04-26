'use client';

import Link from 'next/link';
import { Breadcrumb } from '@core-circle/ui';
import { HomeIcon, ChevronRight } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { BreadcrumbPlayground } from '../../../components/playground/breadcrumb/breadcrumbPlayground';
import { breadcrumbPageStyles as s } from './breadcrumb.styles';

export default function BreadcrumbDocsPage() {
  const defaultItems = [
    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
    { label: 'Atoms', href: '/atoms' },
    { label: 'Breadcrumb' },
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb 
          items={defaultItems}
          renderLink={(props) => <Link {...props} />}
          className="mb-4"
        />
        <h1 className={s.title}>
          Breadcrumb
        </h1>
        <p className={s.description}>
          A navigation aid that allows users to keep track of their location within programs, 
          documents, or websites. It provides a way to go back to previous levels of hierarchy.
        </p>
      </header>

      <div className="space-y-16">
        <DocSection
          id="playground"
          title="Interactive Playground"
          description="Experiment with different variants and configurations."
        >
          <BreadcrumbPlayground />
        </DocSection>

        <DocSection
          id="variants"
          title="Visual Variants"
          description="Three distinct styles to match your application's aesthetic."
        >
          <div className="space-y-8">
            <ComponentPreview
              title="Standard"
              description="The default classic breadcrumb style."
              code={`<Breadcrumb \n  items={[\n    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },\n    { label: 'Atoms', href: '/atoms' },\n    { label: 'Breadcrumb' }\n  ]} \n/>`}
            >
              <Breadcrumb items={defaultItems} />
            </ComponentPreview>

            <ComponentPreview
              title="Ghost"
              description="A subtle variation with a light background wrapper."
              code={`<Breadcrumb variant="ghost" items={defaultItems} />`}
            >
              <Breadcrumb variant="ghost" items={defaultItems} />
            </ComponentPreview>

            <ComponentPreview
              title="Pills"
              description="A modern style with each item in its own capsule."
              code={`<Breadcrumb variant="pills" items={defaultItems} />`}
            >
              <Breadcrumb variant="pills" items={defaultItems} />
            </ComponentPreview>
          </div>
        </DocSection>

        <DocSection
          id="back-link"
          title="Go Back Support"
          description="Built-in support for browser history navigation."
        >
          <ComponentPreview
            title="With Back Link"
            description="Adds a prominent back link before the breadcrumb items."
            code={`<Breadcrumb \n  showBack \n  backLabel="Go Back" \n  items={defaultItems} \n/>`}
          >
            <Breadcrumb showBack backLabel="Go Back" items={defaultItems} />
          </ComponentPreview>
        </DocSection>

        <DocSection
          id="customization"
          title="Custom Separators"
          description="Easily change the icon or element between items."
        >
          <ComponentPreview
            title="Custom Separator"
            code={`<Breadcrumb \n  separator={<span className="opacity-30 mx-2">→</span>} \n  items={defaultItems} \n/>`}
          >
            <Breadcrumb separator={<span className="opacity-30 mx-2">→</span>} items={defaultItems} />
          </ComponentPreview>
        </DocSection>
      </div>
    </div>
  );
}
