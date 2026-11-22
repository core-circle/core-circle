import type { Meta, StoryObj } from '@storybook/react';
import { FloatingAction } from '../../../components/atoms/floating-action/floating-action';
import { Chat, Phone, Mail, Sparkles } from '@core-circle/icons';

const demoActions = [
  { id: 'chat', label: 'Start Live Chat', icon: <Chat size={16} /> },
  { id: 'call', label: 'Call Support Line', icon: <Phone size={16} /> },
  { id: 'email', label: 'Send Ticket Email', icon: <Mail size={16} /> },
  { id: 'ai', label: 'Ask AI Copilot', icon: <Sparkles size={16} /> },
];

const meta: Meta<typeof FloatingAction> = {
  title: 'Atoms/FloatingAction',
  component: FloatingAction,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary', 'dark', 'gradient'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    position: { control: 'radio', options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'] },
    direction: { control: 'radio', options: ['up', 'down', 'left', 'right'] },
    disabled: { control: 'boolean' },
    fixed: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingAction>;

export const DefaultCornerFab: Story = {
  render: (args) => (
    <div className="relative w-full h-80 border border-core-circle-border-main rounded-core-circle-xl bg-slate-50 overflow-hidden flex items-center justify-center text-xs text-slate-400">
      Parent Viewport Container
      <FloatingAction {...args} fixed={false} actions={demoActions} />
    </div>
  ),
};

export const ExtendedWithLabel: Story = {
  render: (args) => (
    <div className="relative w-full h-80 border border-core-circle-border-main rounded-core-circle-xl bg-slate-50 overflow-hidden flex items-center justify-center text-xs text-slate-400">
      Parent Viewport Container
      <FloatingAction {...args} fixed={false} label="New Ticket" actions={demoActions} variant="gradient" />
    </div>
  ),
};
