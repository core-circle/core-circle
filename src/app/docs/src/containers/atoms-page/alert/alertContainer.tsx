'use client';

import React from 'react';
import Link from 'next/link';
import { Alert, Breadcrumb, Tabs, Typography } from '@core-circle/ui';
import { Info, CircleCheck, Alert as AlertIcon, CircleX, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { AlertPlayground } from '../../../components/playground/alert/alertPlayground';
import { ALERT_PROPS_DATA } from '../../../constants/atoms-page/alert/alertConstants';
import { DOC_TEXT } from '../../../constants/common-constants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function AlertContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="alert-intro" title="Introduction" description="Alerts are used to communicate important messages and feedback to users within a page's flow.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Alert } from '@core-circle/ui';\nimport { Info } from '@core-circle/icons';\n\n<Alert variant="info" title="Heads up!" icon={<Info />}>\n  You can add components to your app using the cli.\n</Alert>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={ALERT_PROPS_DATA} />
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
          <DocSection id="alert-variants" title="Semantic Variants" description="Different styles to convey specific meanings like success, warning, or error.">
            <ComponentPreview title="Variants" code={`<Alert variant="info" title="Info" icon={<Info />}>...</Alert>\n<Alert variant="success" title="Success" icon={<CircleCheck />}>...</Alert>\n<Alert variant="warning" title="Warning" icon={<AlertIcon />}>...</Alert>\n<Alert variant="destructive" title="Error" icon={<CircleX />}>...</Alert>`}>
              <div className="flex flex-col gap-4 w-full">
                <Alert variant="info" title="Heads up!" icon={<Info size={18} />}>
                  A new software update is available. See what's new in version 2.0.
                </Alert>
                <Alert variant="success" title="Payment Successful" icon={<CircleCheck size={18} />}>
                  Your subscription has been successfully renewed.
                </Alert>
                <Alert variant="warning" title="Security Warning" icon={<AlertIcon size={18} />}>
                  Your password will expire in 3 days. Please update it now.
                </Alert>
                <Alert variant="destructive" title="Transaction Failed" icon={<CircleX size={18} />}>
                  We were unable to process your request. Please try again.
                </Alert>
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
      content: <AlertPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="alert-mock" title="API Integration" description="Example of how to display alerts based on API response statuses.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  status: "error",
                  message: "Validation failed for the requested resource",
                  errors: ["Email is required", "Invalid zip code"]
                }, null, 2)}
              />

              <CodeSnippet
                label="Implementation"
                code={`const ResponseAlert = ({ response }) => (\n  <Alert \n    variant={response.status === 'success' ? 'success' : 'destructive'} \n    title={response.status === 'success' ? 'Success' : 'Error'}\n  >\n    {response.message}\n  </Alert>\n);`}
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
