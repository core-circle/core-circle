'use client';

import React from 'react';
import Link from 'next/link';
import { Spinner, Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { SpinnerPlayground } from '../../../components/playground/spinner/spinnerPlayground';
import { buttonPageStyles as s } from '../button/button.styles';

export default function SpinnerContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="spinner-intro" title="Introduction" description="The Spinner component is an indeterminate circular indicator for loading states. It can be used as a standalone component or within other components like buttons.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Spinner } from '@core-circle/ui';\n\n<Spinner variant="primary" size="md" />`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={[
                  { name: 'variant', type: 'primary | secondary | warning | destructive | info | white', defaultValue: 'primary', description: 'The visual style' },
                  { name: 'size', type: 'sm | md | lg | xl', defaultValue: 'md', description: 'Predefined sizes' },
                  { name: 'thickness', type: 'number', defaultValue: '-', description: 'Custom border thickness' },
                  { name: 'speed', type: 'number', defaultValue: '0.8', description: 'Animation speed in seconds' },
                ]} />
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
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="spinner-colors" title="Color Variants" description="Brand colors for different semantic contexts.">
            <ComponentPreview 
              title="Colors"
              code={`<Spinner variant="primary" />\n<Spinner variant="secondary" />\n<Spinner variant="warning" />\n<Spinner variant="destructive" />\n<Spinner variant="info" />`}
            >
              <div className="flex flex-wrap gap-8 items-center">
                <Spinner variant="primary" />
                <Spinner variant="secondary" />
                <Spinner variant="warning" />
                <Spinner variant="destructive" />
                <Spinner variant="info" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="spinner-sizes" title="Sizes" description="Four standardized sizes.">
            <ComponentPreview 
              title="Sizes"
              code={`<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner size="xl" />`}
            >
              <div className="flex flex-wrap gap-12 items-center">
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="sm" />
                  <span className="text-xs text-core-circle-text-muted">Small</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="md" />
                  <span className="text-xs text-core-circle-text-muted">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="lg" />
                  <span className="text-xs text-core-circle-text-muted">Large</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="xl" />
                  <span className="text-xs text-core-circle-text-muted">Extra Large</span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: <SpinnerPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="spinner-mock" title="Enterprise Integration" description="Example of how to use Spinner for loading states in various scenarios.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Fullscreen Loading Overlay"
                code={`const LoadingOverlay = () => (\n  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">\n    <div className="flex flex-col items-center gap-4">\n      <Spinner size="xl" variant="primary" thickness={6} />\n      <p className="text-core-circle-primary font-bold animate-pulse">Syncing Data...</p>\n    </div>\n  </div>\n);`}
              />

              <CodeSnippet
                label="Inline Loader"
                code={`const SubmitButton = ({ isLoading }) => (\n  <Button disabled={isLoading}>\n    {isLoading ? <Spinner size="sm" variant="white" className="mr-2" /> : null}\n    {isLoading ? 'Processing...' : 'Submit Action'}\n  </Button>\n);`}
              />
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        <Typography variant="h1" className={s?.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s?.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
