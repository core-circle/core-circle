import type { Meta, StoryObj } from '@storybook/react';
import { PromptInput } from '../../../components/atoms/prompt-input/prompt-input';

const meta: Meta<typeof PromptInput> = {
  title: 'Atoms/PromptInput',
  component: PromptInput,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['default', 'bordered', 'card'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showAttachments: { control: 'boolean' },
    showVoice: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PromptInput>;

export const Default: Story = {
  args: {
    placeholder: 'Ask Gemini or Claude anything...',
    variant: 'default',
    models: ['Gemini 2.0 Flash', 'Claude 3.7 Sonnet', 'GPT-4o', 'DeepSeek-R1'],
  },
};

export const StreamingState: Story = {
  args: {
    value: 'Explain quantum supremacy and error correction benchmarks.',
    loading: true,
    variant: 'default',
  },
};

export const HighContrastBordered: Story = {
  args: {
    placeholder: 'Enter engineering instruction...',
    variant: 'bordered',
  },
};
