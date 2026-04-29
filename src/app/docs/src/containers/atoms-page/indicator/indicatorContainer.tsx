'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Indicator, Avatar, Button, Typography } from '@core-circle/ui';
import { Info, Layers, Play, Bell, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { IndicatorPlayground } from '../../../components/playground/indicator/indicatorPlayground';
import { buttonPageStyles as s } from '../button/button.styles';
import { DOC_TEXT } from '../../../constants/common-constants';

export default function IndicatorContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="indicator-intro" title="Introduction" description="Indicators are used to show status markers, notification counts, or presence on top of other components.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Indicator } from '@core-circle/ui';\n\n<Indicator variant="danger" pulse>\n  <Avatar name="User" />\n</Indicator>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={[
                  { name: 'variant', type: 'primary | success | warning | danger | info', defaultValue: 'primary', description: 'Semantic color' },
                  { name: 'position', type: 'top-right | top-left | bottom-right | bottom-left', defaultValue: 'top-right', description: 'Overlay position' },
                  { name: 'pulse', type: 'boolean', defaultValue: 'false', description: 'Ping animation' },
                ]} />
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
          <DocSection id="indicator-status" title="Presence States" description="Using small indicators for status.">
            <ComponentPreview 
              title="Presence"
              code={`<Indicator variant="success" size="sm" position="bottom-right">\n  <Avatar name="User" />\n</Indicator>`}
            >
              <div className="flex items-center gap-8">
                <Indicator variant="success" size="sm" position="bottom-right">
                  <Avatar name="Online User" />
                </Indicator>
                <Indicator variant="warning" size="sm" position="bottom-right">
                  <Avatar name="Away User" />
                </Indicator>
                <Indicator variant="danger" size="sm" position="bottom-right">
                  <Avatar name="Busy User" />
                </Indicator>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="indicator-counts" title="Notification Counts" description="Indicators with text content.">
            <ComponentPreview 
              title="Counts"
              code={`<Indicator content="5" variant="danger">\n  <Button variant="outline" size="icon"><BellIcon /></Button>\n</Indicator>`}
            >
              <div className="flex items-center gap-12">
                <Indicator content="5" variant="danger">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Bell size={20} />
                  </Button>
                </Indicator>
                <Indicator content="99+" variant="primary" size="lg">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl border flex items-center justify-center font-bold text-slate-400">
                    Box
                  </div>
                </Indicator>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="indicator-pulse" title="Attention Pulse" description="Add a pulse animation to draw user's attention.">
            <ComponentPreview 
              title="Pulse"
              code={`<Indicator pulse variant="info" />`}
            >
              <div className="flex items-center gap-12">
                <Indicator pulse variant="info">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 text-sm font-medium">
                    New Update Available
                  </div>
                </Indicator>
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
      content: <IndicatorPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="indicator-mock" title="Real-time Presence Integration" description="Example of how to integrate indicator status with a WebSocket presence service.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Presence Payload"
                code={JSON.stringify({
                  user_id: "usr_123",
                  status: "online", // mapped to 'success'
                  last_seen: "2026-04-29T10:00:00Z",
                  is_away: false
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Indicator"
                code={`const UserAvatar = ({ user }) => {\n  const variant = user.status === 'online' ? 'success' : 'neutral';\n  return (\n    <Indicator variant={variant} size="sm" position="bottom-right">\n      <Avatar name={user.name} src={user.avatar} />\n    </Indicator>\n  );\n};`}
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
