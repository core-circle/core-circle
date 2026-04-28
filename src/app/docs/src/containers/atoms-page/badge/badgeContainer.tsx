'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Badge } from '@core-circle/ui';
import { Info, Image, SettingsIcon, CodeIcon, Sparkles, CheckIcon, Alert } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { accordionPageStyles as s } from '../accordion/accordion.styles';
import {
  BADGE_PROPS_DATA,
} from '../../../constants/atoms-page/badge/badgeConstants';
import { BadgePlayground } from '../../../components/playground/badge/BadgePlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { BadgeContainerProps } from '../../../interface/containers/atoms/badge.types';
import { DOC_TEXT } from '../../../constants/common-constants';

export default function BadgeContainer({
  headerContent,
  breadcrumbItems
}: BadgeContainerProps) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="badge-usage" title={DOC_TEXT.COMMON.USAGE} description="The Badge component is used to highlight specific information such as counts, status, or labels.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Basic Usage"
                code={`import { Badge } from '@core-circle/ui';\n\n<Badge variant="primary">New Feature</Badge>`}
              />
            </div>
          </DocSection>

          <DocSection id="badge-props" title={DOC_TEXT.COMMON.PROPERTIES} description="Explore the available props for the Badge component.">
            <PropsTable data={BADGE_PROPS_DATA} />
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: DOC_TEXT.COMMON.VARIANTS,
      icon: <Image size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="badge-variants-styles" title="Visual Styles" description="Semantic colors and outlines to convey different meanings and importance.">
            <ComponentPreview
              title="Style Variants"
              code={`<Badge variant="success">Success</Badge>\n<Badge variant="ghost">Ghost</Badge>\n<Badge variant="outline">Outline</Badge>`}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="danger">Error</Badge>
                <Badge variant="ghost">Archived</Badge>
                <Badge variant="outline">Draft</Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="badge-variants-icons" title="With Icons" description="Incorporate icons to improve scanability and provide visual context.">
            <ComponentPreview
              title="Icon Integration"
              code={`<Badge startIcon={<Sparkles size={12} />}>Premium</Badge>\n<Badge startIcon={<CheckIcon size={12} />}>Verified</Badge>`}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <Badge variant="primary" startIcon={<Sparkles size={12} />}>Premium</Badge>
                <Badge variant="success" startIcon={<CheckIcon size={12} />}>Verified</Badge>
                <Badge variant="danger" startIcon={<Alert size={12} />}>High Priority</Badge>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="badge-variants-removable" title="Removable" description="Allow users to dismiss tags or remove filters.">
            <ComponentPreview
              title="Interactive Tags"
              code={`<Badge removable onRemove={() => {}}>Removable Tag</Badge>`}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <Badge variant="primary" removable shape="pill" onRemove={() => { /* no-op */ }}>Design</Badge>
                <Badge variant="secondary" removable shape="pill" onRemove={() => { /* no-op */ }}>React</Badge>
                <Badge variant="ghost" removable shape="pill" onRemove={() => { /* no-op */ }}>Typescript</Badge>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <SettingsIcon size={16} />,
      content: (
        <DocSection id="badge-playground" title={DOC_TEXT.PLAYGROUND.TITLE} description="Customize the badge variants, sizes, and behavior in real-time.">
          <BadgePlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: DOC_TEXT.COMMON.MOCK_CODE,
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="badge-mock" title="Dynamic Status List" description="Example of rendering badges based on an API response.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  orders: [
                    { id: "ORD-123", status: "delivered", total: "$120.00" },
                    { id: "ORD-124", status: "pending", total: "$45.00" },
                    { id: "ORD-125", status: "cancelled", total: "$0.00" }
                  ]
                }, null, 2)}
              />
              <CodeSnippet
                label="Implementation"
                code={`const StatusBadge = ({ status }) => {\n  const config = {\n    delivered: { variant: 'success', label: 'Delivered' },\n    pending: { variant: 'warning', label: 'Pending' },\n    cancelled: { variant: 'danger', label: 'Cancelled' }\n  };\n  \n  const { variant, label } = config[status] || { variant: 'ghost', label: status };\n\n  return <Badge variant={variant} shape="pill">{label}</Badge>;\n};`}
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
