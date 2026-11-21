import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from '../../../components/atoms/counter/counter';
import { Button } from '../../../components/atoms/button/button';

const meta: Meta<typeof Counter> = {
  title: 'Atoms/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    count: 12,
  },
};

export const Maxed: Story = {
  args: {
    count: 150,
    max: 99,
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    count: 5,
  },
};

export const InButton: Story = {
  render: () => (
    <Button variant="outline" endIcon={<Counter count={5} size="xs" />}>
      Notifications
    </Button>
  ),
};
