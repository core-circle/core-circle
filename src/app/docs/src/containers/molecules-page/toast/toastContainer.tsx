'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Button, useToast, Toaster } from '@core-circle/ui';
import { Info, Layers, Play } from '@core-circle/icons';
import DocSection from '../../../components/doc-section';
import { ToastPlayground } from '../../../components/playground/toast/toastPlayground';
import { textInputPageStyles as s } from '../../atoms-page/text-input/text-input.styles';
import {
  TOAST_PROPS_DATA
} from '../../../constants/molecules-page/toast/toastConstants';
import { ToastContainerProps } from '../../../interface/containers/molecules/toast.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function ToastContainer({ sections, headerContent, breadcrumbItems }: ToastContainerProps) {
  const { toast } = useToast();

  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <ToastPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <Toaster />
            <DocSection id="toast-variants" title="Alert Types" description="Toasts come with status colors and matching icons.">
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" onClick={() => toast({ title: 'Success', variant: 'success', description: 'Action completed.' })}>Success</Button>
                <Button variant="outline" onClick={() => toast({ title: 'Error', variant: 'error', description: 'Action failed.' })}>Error</Button>
                <Button variant="outline" onClick={() => toast({ title: 'Warning', variant: 'warning', description: 'Check this out.' })}>Warning</Button>
                <Button variant="outline" onClick={() => toast({ title: 'Info', variant: 'info', description: 'Just so you know.' })}>Info</Button>
              </div>
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
          <DocSection id="toast-intro" title="Introduction" description="The Toast notification system provides a non-intrusive way to give feedback. It includes a container (Toaster) and a hook (useToast) for triggering alerts from anywhere in your application.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Global Setup (Root Layout)"
                code={`import { Toaster } from '@core-circle/ui';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        {children}\n        <Toaster />\n      </body>\n    </html>\n  );\n}`}
              />
              <CodeSnippet
                label="Usage in Components"
                code={`import { useToast } from '@core-circle/ui';\n\nconst MyComponent = () => {\n  const { toast } = useToast();\n\n  return (\n    <button onClick={() => toast({ title: 'Saved!' })}>\n      Save Changes\n    </button>\n  );\n};`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Toast Options</h4>
                <PropsTable data={TOAST_PROPS_DATA} />
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
