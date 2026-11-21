import type { Meta, StoryObj } from '@storybook/react';
import { TagInput } from '../../../components/atoms/tag-input/tag-input';

const meta: Meta<typeof TagInput> = {
  title: 'Atoms/TagInput',
  component: TagInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'outline',
        'pills',
        'gradient',
        'glow',
        'glassmorphic',
        'subtle',
        'dark',
        'bordered',
        'accent',
        'minimal',
      ],
    },
    maxTags: {
      control: 'number',
    },
    allowDuplicates: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  args: {
    label: 'Email CC Recipients',
    variant: 'outline',
    defaultValue: ['engineering@corecircle.io', 'design@corecircle.io'],
    placeholder: 'Type email and press Enter...',
  },
};

export const GradientPills: Story = {
  args: {
    label: 'LLM Reasoning Keywords',
    variant: 'gradient',
    defaultValue: ['transformers', 'attention', 'zero-shot'],
    placeholder: 'Add keyword...',
  },
};
