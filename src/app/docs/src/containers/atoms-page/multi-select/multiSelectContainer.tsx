'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, MultiSelect, Tabs, Typography } from '@core-circle/ui';
import { Users, Tag, Info, Layers, Play, CodeIcon } from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { MultiSelectPlayground } from '../../../components/playground/multi-select/multiSelectPlayground';
import { textInputPageStyles as s } from '../text-input/text-input.styles';
import {
  MULTI_SELECT_PROPS_DATA
} from '../../../constants/atoms-page/multi-select/multiSelectConstants';
import { MultiSelectContainerProps } from '../../../interface/containers/atoms/multi-select.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function MultiSelectContainer({ sections, headerContent, breadcrumbItems }: MultiSelectContainerProps) {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'tailwindcss', label: 'Tailwind CSS' },
    { value: 'nodejs', label: 'Node.js' }
  ];

  const getSectionContent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return null;

    switch (sectionId) {
      case 'playground':
        return <MultiSelectPlayground />;
      case 'variants':
        return (
          <div className="flex flex-col gap-12">
            <DocSection id="multiselect-variants" title="Visual Variants" description="Consistent styling across all input types.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.find(s => s.id === 'variants')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'material-animated' && <MultiSelect variant="material-animated" label="Skills" options={options} placeholder="Search skills..." fullWidth />}
                    {preview.id === 'outline' && <MultiSelect variant="outline" label="Categories" options={options} fullWidth />}
                    {preview.id === 'standard' && <MultiSelect variant="standard" label="Tags" options={options} fullWidth />}
                    {preview.id === 'ghost' && <MultiSelect variant="ghost" placeholder="Add filters..." options={options} fullWidth />}
                  </ComponentPreview>
                ))}
              </div>
            </DocSection>

            <DocSection id="multiselect-icons" title="With Icons" description="Use start icons to provide visual cues for the selection type.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.find(s => s.id === 'icons')?.previews?.map((preview: any) => (
                  <ComponentPreview key={preview.id} title={preview.title} code={preview.code}>
                    {preview.id === 'user-selection' && <MultiSelect startIcon={<Users size={18} />} options={options} fullWidth />}
                    {preview.id === 'tagging' && <MultiSelect prefix={<Tag size={14} />} options={options} fullWidth />}
                  </ComponentPreview>
                ))}
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
          <DocSection id="multiselect-intro" title="Introduction" description="MultiSelect is a powerful dropdown component that allows users to select multiple options from a list. It provides an intuitive interface where selected items are displayed as removable tags.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { MultiSelect } from '@core-circle/ui';\n\n<MultiSelect \n  label="Interests" \n  options={[\n    { value: '1', label: 'Design' },\n    { value: '2', label: 'Development' }\n  ]} \n/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={MULTI_SELECT_PROPS_DATA} />
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
          <DocSection id="multiselect-mock" title="Dynamic Integration" description="Example of handling multi-select state with complex data structures.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Sample API Response"
                code={JSON.stringify({
                  id: "ms_321",
                  label: "Manage Tags",
                  availableOptions: [
                    { id: "t1", label: "React", value: "react" },
                    { id: "t2", label: "Vue", value: "vue" }
                  ],
                  initialSelected: ["react"]
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Integration"
                code={`const TagManager = ({ data }) => {\n  const [selected, setSelected] = useState(data.initialSelected);\n\n  return (\n    <MultiSelect\n      label={data.label}\n      options={data.availableOptions}\n      value={selected}\n      onChange={setSelected}\n      variant="material-animated"\n      fullWidth\n    />\n  );\n};`}
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
        <Typography variant="h1" className={s.title}>{headerContent.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" />
      </div>
    </div>
  );
}
