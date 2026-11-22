import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../../../components/atoms/pagination/pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Atoms/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 4,
    totalPages: 10,
    variant: 'default',
    size: 'md',
  },
};

export const PillsStyle: Story = {
  args: {
    currentPage: 2,
    totalPages: 8,
    variant: 'pills',
    size: 'md',
  },
};

export const BorderedStyle: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'bordered',
    size: 'md',
  },
};

export const MinimalStyle: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    variant: 'minimal',
    size: 'sm',
  },
};
