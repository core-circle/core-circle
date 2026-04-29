'use client';

import React from 'react';
import Link from 'next/link';
import { Toast, Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { Info, CircleCheck, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { ToastPlayground } from '../../../components/playground/toast/toastPlayground';
import { TOAST_PROPS_DATA } from '../../../constants/atoms-page/toast/toastConstants';
import { DOC_TEXT } from '../../../constants/common-constants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function ToastContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="toast-intro" title="Introduction" description="Toasts are non-interruptive notifications that provide feedback about an operation.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Toast } from '@core-circle/ui';\nimport { CircleCheck } from '@core-circle/icons';\n\n<Toast \n  variant="success" \n  title="Message Sent" \n  description="Your message has been delivered." \n  icon={<CircleCheck />}\n/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={TOAST_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: DOC_TEXT.COMMON.VARIANTS,
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="toast-variants" title="Status Variants" description="Different styles for success, warning, and destructive notifications.">
            <ComponentPreview title="Variants" code={`<Toast variant="default" ... />\n<Toast variant="success" ... />\n<Toast variant="warning" ... />\n<Toast variant="destructive" ... />`}>
              <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
                <Toast variant="default" title="Scheduled" description="Your meeting has been scheduled for Friday." onClose={() => {}} />
                <Toast variant="success" title="Success" description="Profile updated successfully." icon={<CircleCheck size={18} />} onClose={() => {}} />
                <Toast variant="warning" title="Limit Reached" description="You have used 90% of your storage." onClose={() => {}} />
                <Toast variant="destructive" title="Error" description="Failed to upload image." onClose={() => {}} />
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
      content: <ToastPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="toast-mock" title="Async Operations" description="How to trigger toasts based on async function outcomes.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  success: true,
                  data: {
                    id: "toast_99",
                    message: "User settings synchronized successfully",
                    timestamp: "2026-04-29T11:00:00Z"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="Action Usage"
                code={`const handleSave = async () => {\n  try {\n    const res = await saveUser();\n    showToast({ variant: 'success', title: 'Saved!', description: res.data.message });\n  } catch (err) {\n    showToast({ variant: 'destructive', title: 'Error', description: err.message });\n  }\n};`}
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
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
