import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../../../components/atoms/chip/chip';
import { Filter } from '@core-circle/icons';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'soft', 'gradient', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    selected: { control: 'boolean' },
    removable: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Frontend Developer',
  },
};

export const SelectedWithCount: Story = {
  args: {
    label: 'Active Filters',
    selected: true,
    count: 14,
  },
};

export const RemovableTag: Story = {
  args: {
    label: 'React 19',
    removable: true,
    variant: 'soft',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Filter by Status',
    icon: <Filter size={12} />,
    variant: 'outline',
    count: 3,
  },
};

export const GradientVariant: Story = {
  args: {
    label: 'AI Recommendation',
    variant: 'gradient',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip size="sm" label="Small (sm)" count={5} removable />
      <Chip size="md" label="Medium (md)" count={12} removable />
      <Chip size="lg" label="Large (lg)" count={25} removable />
    </div>
  ),
};
