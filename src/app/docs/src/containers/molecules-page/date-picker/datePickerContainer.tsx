'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs } from '@core-circle/ui';
import { Info, Play } from '@core-circle/icons';
import DocSection from '../../../components/doc-section';
import { DatePickerPlayground } from '../../../components/playground/date-picker/datePickerPlayground';
import { textInputPageStyles as s } from '../../atoms-page/text-input/text-input.styles';
import {
  DATE_PICKER_PROPS_DATA
} from '../../../constants/molecules-page/date-picker/datePickerConstants';
import { DatePickerContainerProps } from '../../../interface/containers/molecules/date-picker.types';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';

export default function DatePickerContainer({ headerContent, breadcrumbItems }: DatePickerContainerProps) {
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="datepicker-intro" title="Introduction" description="The DatePicker component provides a user-friendly interface for selecting dates without manual typing. It automatically handles month transitions and highlights the current day.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Basic Usage"
                code={`import { DatePicker } from '@core-circle/ui';\n\nconst [date, setDate] = useState(new Date());\n\n<DatePicker \n  label="Birthday" \n  value={date} \n  onChange={setDate} \n/>`}
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</h4>
                <PropsTable data={DATE_PICKER_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <div className="flex flex-col gap-12">
           <DatePickerPlayground />
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
