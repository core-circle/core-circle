'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs } from '@core-circle/ui';
import { HomeIcon, ArrowRight, ShoppingBag, Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { BreadcrumbPlayground } from '../../../components/playground/breadcrumb/breadcrumbPlayground';
import { breadcrumbPageStyles as s } from './breadcrumb.styles';
import {
  BREADCRUMB_PROPS_DATA
} from '../../../constants/atoms-page/breadcrumb/breadcrumbConstants';
import { BreadcrumbContainerProps } from '../../../interface/containers/atoms/breadcrumb.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function BreadcrumbContainer({ sections, headerContent, breadcrumbItems }: BreadcrumbContainerProps) {
  const defaultItems = [
    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
    { label: 'Products', href: '#' },
    { label: 'Categories', href: '#' },
    { label: 'Electronics' }
  ];

  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <BreadcrumbPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="breadcrumb-variants" title="Visual Variants" description="Three distinct styles to match your application's aesthetic.">
              <div className="flex flex-col gap-8">
                {section?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'standard' && <Breadcrumb items={defaultItems} renderLink={(props) => <Link {...props} />} />}
                    {preview.id === 'ghost' && <Breadcrumb variant="ghost" items={defaultItems} renderLink={(props) => <Link {...props} />} />}
                    {preview.id === 'pills' && <Breadcrumb variant="pills" items={defaultItems} renderLink={(props) => <Link {...props} />} />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="breadcrumb-back" title="Go Back Support" description="Built-in support for browser history navigation.">
              <ComponentPreview title="With Back Link" code={sections.find(s => s.id === 'back-link')?.previews?.[0].code}>
                <Breadcrumb showBack backLabel="Go Back" items={defaultItems} renderLink={(props) => <Link {...props} />} />
              </ComponentPreview>
            </DocSection>

            <DocSection id="breadcrumb-separators" title="Custom Separators" description="Easily change the icon or element between items.">
              <ComponentPreview title="Custom Separator" code={sections.find(s => s.id === 'customization')?.previews?.[0].code}>
                <Breadcrumb
                  separator={<ArrowRight size={14} className="opacity-30 mx-1" />}
                  items={defaultItems}
                  renderLink={(props) => <Link {...props} />}
                />
              </ComponentPreview>
            </DocSection>

            <DocSection id="breadcrumb-custom-items" title="Item Prefix & Suffix" description="Add labels, emojis, or status indicators to individual breadcrumb items.">
              <ComponentPreview title="Custom Labels" code={sections.find(s => s.id === 'item-prefix-suffix')?.previews?.[0].code}>
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
                    { label: 'Orders', href: '#', prefix: <ShoppingBag size={14} /> },
                    { label: 'Checkout', suffix: <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded ml-1">Active</span> }
                  ]}
                  renderLink={(props) => <Link {...props} />}
                />
              </ComponentPreview>
            </DocSection>
          </div>
        );
      default:
        return null;
    }
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="breadcrumb-intro" title="Introduction" description="Breadcrumb is a navigation aid that helps users understand their current location in the application hierarchy. It supports various visual styles, custom separators, and integrated back-navigation.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Breadcrumb } from '@core-circle/ui';\n\n<Breadcrumb \n  items={[\n    { label: 'Home', href: '/' },\n    { label: 'Dashboard' }\n  ]} \n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={BREADCRUMB_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: getSectionContent('variants')
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: getSectionContent('playground')
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="breadcrumb-mock" title="Dynamic Integration" description="Example of building a dynamic breadcrumb navigation from hierarchical data.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  navigation: [
                    { title: "Home", url: "/", icon: "HomeIcon" },
                    { title: "Category", url: "/category" },
                    { title: "Product", url: "/product" }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const DynamicNav = ({ path }) => {\n  return (\n    <Breadcrumb\n      variant="standard"\n      items={path.map(node => ({\n        label: node.title,\n        href: node.url\n      }))}\n      renderLink={(props) => <Link {...props} />}\n    />\n  );\n};`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <h1 className={s.title}>{headerContent.title}</h1>
        <p className={s.description}>{headerContent.description}</p>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
