'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Avatar } from '@core-circle/ui';
import { Info, Image, SettingsIcon, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { accordionPageStyles as s } from '../accordion/accordion.styles';
import {
  AVATAR_PROPS_DATA,
} from '../../../constants/atoms-page/avatar/avatarConstants';
import { AvatarPlayground } from '../../../components/playground/avatar/AvatarPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { AvatarContainerProps } from '../../../interface/containers/atoms/avatar.types';
import { DOC_TEXT } from '../../../constants/common-constants';

export default function AvatarContainer({
  sections,
  headerContent,
  breadcrumbItems
}: AvatarContainerProps) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="avatar-usage" title={DOC_TEXT.COMMON.USAGE} description="The Avatar component is used to represent a user or entity with an image or initials.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Basic Usage"
                code={`import { Avatar } from '@core-circle/ui';\n\n<Avatar src="path/to/image.jpg" name="John Doe" />`}
              />
            </div>
          </DocSection>

          <DocSection id="avatar-props" title={DOC_TEXT.COMMON.PROPERTIES} description="Explore the available props for the Avatar component.">
            <PropsTable data={AVATAR_PROPS_DATA} />
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
          <DocSection id="avatar-variants-shapes" title="Shapes" description="Available in Circle, Rounded, and Square shapes to match your UI style.">
            <ComponentPreview
              title="Shape Variants"
              code={`<Avatar shape="circle" name="Circle" />\n<Avatar shape="rounded" name="Rounded" />\n<Avatar shape="square" name="Square" />`}
            >
              <div className="flex items-center gap-8">
                <Avatar shape="circle" name="Circle" size="lg" />
                <Avatar shape="rounded" name="Rounded" size="lg" />
                <Avatar shape="square" name="Square" size="lg" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="avatar-variants-status" title="Status Indicators" description="Show user presence status with a visual badge.">
            <ComponentPreview
              title="Status Variants"
              code={`<Avatar status="online" />\n<Avatar status="away" />\n<Avatar status="busy" />\n<Avatar status="offline" />`}
            >
              <div className="flex items-center gap-8">
                <Avatar status="online" size="lg" name="User" />
                <Avatar status="away" size="lg" name="User" />
                <Avatar status="busy" size="lg" name="User" />
                <Avatar status="offline" size="lg" name="User" />
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="avatar-variants-bordered" title="Bordered" description="Add a visual ring around the avatar for better contrast.">
            <ComponentPreview
              title="Bordered Style"
              code={`<Avatar bordered src="..." />`}
            >
              <div className="flex items-center gap-8">
                <Avatar bordered size="xl" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80" />
                <Avatar bordered size="xl" name="Core Circle" />
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
        <DocSection id="avatar-playground" title={DOC_TEXT.PLAYGROUND.TITLE} description="Customize the avatar variants, sizes, and behavior in real-time.">
          <AvatarPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: DOC_TEXT.COMMON.MOCK_CODE,
      icon: <CodeIcon size={16} />,
      content: (
        <div className="max-w-5xl">
          <DocSection id="avatar-mock" title="Dynamic User List" description="Example of rendering a list of users with their presence status.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  users: [
                    { id: 1, name: "Alice Freeman", avatar: "...", status: "online" },
                    { id: 2, name: "Bob Martin", avatar: null, status: "away" },
                    { id: 3, name: "Charlie Davis", avatar: "...", status: "busy" }
                  ]
                }, null, 2)}
              />
              <CodeSnippet
                label="Implementation"
                code={`const UserList = ({ users }) => (\n  <div className="flex -space-x-2">\n    {users.map(user => (\n      <Avatar \n        key={user.id} \n        src={user.avatar} \n        name={user.name} \n        status={user.status} \n        bordered\n        size="md"\n      />\n    ))}\n  </div>\n);`}
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
