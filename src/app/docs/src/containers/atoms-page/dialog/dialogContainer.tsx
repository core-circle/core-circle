'use client';

import React from 'react';
import Link from 'next/link';
import { Dialog, Breadcrumb, Tabs, Typography, Button } from '@core-circle/ui';
import { Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { DialogPlayground } from '../../../components/playground/dialog/dialogPlayground';
import { DIALOG_PROPS_DATA } from '../../../constants/atoms-page/dialog/dialogConstants';
import { DOC_TEXT } from '../../../constants/common-constants';
import { atomsPageStyles as s } from '../atoms.styles';

export default function DialogContainer({ headerContent, breadcrumbItems }: any) {
  const tabItems = [
    {
      id: 'overview',
      label: DOC_TEXT.COMMON.OVERVIEW,
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12">
          <DocSection id="dialog-intro" title="Introduction" description="Dialogs (or Modals) are used to display critical information or tasks that require user attention without leaving the current context.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Dialog } from '@core-circle/ui';\n\n<Dialog \n  title="Confirm Action" \n  trigger={<Button>Open</Button>}\n>\n  Are you sure you want to proceed?\n</Dialog>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={DIALOG_PROPS_DATA} />
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
          <DocSection id="dialog-sizes" title="Sizes" description="Dialogs support various sizes to accommodate different content requirements.">
            <ComponentPreview title="Sizes" code={`<Dialog size="sm" ... />\n<Dialog size="md" ... />\n<Dialog size="lg" ... />\n<Dialog size="full" ... />`}>
              <div className="flex flex-wrap items-center justify-center gap-4 w-full py-8">
                <Dialog size="sm" title="Small Dialog" trigger={<Button variant="outline">Small</Button>}>
                  <p className="p-4">This is a small dialog.</p>
                </Dialog>
                <Dialog size="md" title="Medium Dialog" trigger={<Button variant="outline">Medium</Button>}>
                  <p className="p-4">This is a medium dialog (default).</p>
                </Dialog>
                <Dialog size="lg" title="Large Dialog" trigger={<Button variant="outline">Large</Button>}>
                  <p className="p-4">This is a large dialog.</p>
                </Dialog>
                <Dialog size="full" title="Full Screen" trigger={<Button variant="outline">Full Screen</Button>}>
                  <p className="p-4">This is a full screen dialog.</p>
                </Dialog>
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
      content: <DialogPlayground />
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8">
          <DocSection id="dialog-mock" title="Form Integration" description="Example of using a dialog for a creation form.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Request"
                code={JSON.stringify({
                  form_id: "usr_create_001",
                  fields: [
                    { name: "full_name", type: "text", required: true },
                    { name: "bio", type: "textarea", required: false }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Form Implementation"
                code={`const CreateUserDialog = ({ config }) => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleSubmit = async (data) => {\n    await createUser(data);\n    setIsOpen(false);\n    showToast({ title: 'User created' });\n  };\n\n  return (\n    <Dialog \n      open={isOpen} \n      onOpenChange={setIsOpen}\n      title="New User"\n    >\n      <DynamicForm config={config} onSubmit={handleSubmit} />\n    </Dialog>\n  );\n};`}
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
