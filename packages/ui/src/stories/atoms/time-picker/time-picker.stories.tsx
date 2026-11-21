import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '../../../components/atoms/time-picker/time-picker';

const meta: Meta<typeof TimePicker> = {
  title: 'Atoms/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'outline',
        'material',
        'ghost',
        'standard',
        'filled',
        'glassmorphic',
        'gradient',
        'glow',
        'accent',
        'dark',
      ],
    },
    format: {
      control: 'select',
      options: ['12h', '24h'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showSeconds: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    label: 'Appointment Time',
    format: '12h',
    variant: 'outline',
    size: 'md',
    defaultValue: '09:30 AM',
  },
};

export const Format24Hours: Story = {
  args: {
    label: 'Server Cron Execution',
    format: '24h',
    variant: 'glow',
    size: 'md',
    showSeconds: true,
    defaultValue: '23:45:00',
  },
};
