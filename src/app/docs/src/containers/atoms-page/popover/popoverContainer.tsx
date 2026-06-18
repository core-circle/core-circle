'use client';

import React from 'react';
import Link from 'next/link';
import { Popover, Breadcrumb, Tabs, Typography, Button } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { PopoverPlayground } from '../../../components/playground/popover/popoverPlayground';
import { POPOVER_PROPS_DATA } from '../../../constants/atoms-page/popover/popoverConstants';
import { DOC_TEXT } from '../../../constants/common-constants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function PopoverContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="popover-intro" title="Introduction" description="Popovers are used to display rich content that is triggered by clicking or hovering over an element.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Popover } from '@core-circle/ui';\n\n<Popover trigger={<Button>Click me</Button>}>\n  <div className="p-4">Popover content here</div>\n</Popover>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={POPOVER_PROPS_DATA} />
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
          <DocSection id="popover-align" title="Alignment" description="Control how the popover content aligns with the trigger.">
            <ComponentPreview title="Alignments" code={`<Popover align="start" ... />\n<Popover align="center" ... />\n<Popover align="end" ... />`}>
              <div className="flex items-center justify-center gap-4 w-full py-8">
                <Popover align="start" trigger={<Button variant="outline">Start</Button>}>
                  <div className="p-4">Aligned to the start.</div>
                </Popover>
                <Popover align="center" trigger={<Button variant="outline">Center</Button>}>
                  <div className="p-4">Aligned to the center.</div>
                </Popover>
                <Popover align="end" trigger={<Button variant="outline">End</Button>}>
                  <div className="p-4">Aligned to the end.</div>
                </Popover>
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
      content: <PopoverPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="popover-mock" title="Dynamic Content" description="Loading data inside a popover.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  user: {
                    id: "usr_babayaga",
                    name: "John Wick",
                    email: "john@babayaga.com",
                    avatar_url: "https://api.core-circle.com/avatars/john.jpg"
                  }
                }, null, 2)}
              />

              <CodeSnippet
                label="User Menu Example"
                code={`<Popover trigger={<Avatar src={user.avatar_url} />}>\n  <div className="grid gap-2 p-4">\n    <p className="font-bold">{user.name}</p>\n    <p className="text-xs text-slate-500">{user.email}</p>\n    <Button size="sm">View Profile</Button>\n  </div>\n</Popover>`}
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
