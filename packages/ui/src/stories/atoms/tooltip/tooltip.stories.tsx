import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../../components/atoms/tooltip/tooltip';
import * as Icons from '@core-circle/icons';


const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'destructive', 'info', 'gradient', 'glow', 'glassmorphic', 'dark'],
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    trigger: {
      control: 'radio',
      options: ['click', 'hover'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'Helpful Tip',
    description: 'This is a tooltip that appears when you click the icon.',
    trigger: 'click',
  },
};

export const HoverTrigger: Story = {
  args: {
    title: 'Hover Info',
    description: 'This tooltip appears on hover and disappears when you move away.',
    trigger: 'hover',
  },
};

export const CustomIcon: Story = {
  args: {
    title: 'Custom Trigger',
    description: 'You can pass any icon or element as a trigger.',
    icon: <Icons.Alert size={20} className="text-core-circle-warning cursor-pointer" />,
    variant: 'warning',
    trigger: 'click',
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-20 p-20 justify-center items-center h-[400px]">
      <Tooltip title="Top" description="I'm on top" position="top" />
      <Tooltip title="Bottom" description="I'm at bottom" position="bottom" />
      <Tooltip title="Left" description="I'm on left" position="left" />
      <Tooltip title="Right" description="I'm on right" position="right" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-10 p-10 justify-center items-center">
      <Tooltip title="Primary" description="Primary variant" variant="primary" />
      <Tooltip title="Info" description="Info variant" variant="info" icon={<Icons.Info size={20} className="text-core-circle-blue-500 cursor-pointer" />} />
      <Tooltip title="Warning" description="Warning variant" variant="warning" icon={<Icons.Alert size={20} className="text-core-circle-warning cursor-pointer" />} />
      <Tooltip title="Destructive" description="Destructive variant" variant="destructive" icon={<Icons.CircleX size={20} className="text-core-circle-destructive cursor-pointer" />} />
    </div>
  ),
};
