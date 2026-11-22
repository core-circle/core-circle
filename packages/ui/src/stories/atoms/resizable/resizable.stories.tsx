import type { Meta, StoryObj } from '@storybook/react';
import { Resizable } from '../../../components/atoms/resizable/resizable';

const meta: Meta<typeof Resizable> = {
  title: 'Atoms/Resizable',
  component: Resizable,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'radio', options: ['horizontal', 'vertical'] },
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
    defaultSize: { control: { type: 'range', min: 15, max: 85, step: 1 } },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Resizable>;

export const HorizontalSplit: Story = {
  render: (args) => (
    <div className="w-full h-80 max-w-2xl border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
      <Resizable {...args} direction="horizontal" variant="card">
        <Resizable.Panel className="p-4 bg-slate-50 flex flex-col justify-center items-center text-sm font-semibold text-slate-700">
          Left Explorer Panel (Drag divider)
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel className="p-4 bg-white flex flex-col justify-center items-center text-sm font-semibold text-slate-700">
          Right Editor Viewport
        </Resizable.Panel>
      </Resizable>
    </div>
  ),
};

export const VerticalSplit: Story = {
  render: (args) => (
    <div className="w-full h-96 max-w-xl border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
      <Resizable {...args} direction="vertical" variant="bordered">
        <Resizable.Panel className="p-4 bg-white flex flex-col justify-center items-center text-sm font-semibold text-slate-700">
          Top Workspace Preview
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs flex flex-col justify-center items-center">
          Bottom Terminal Console [Ready]
        </Resizable.Panel>
      </Resizable>
    </div>
  ),
};
