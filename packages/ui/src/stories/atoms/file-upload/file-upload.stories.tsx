import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './file-upload';
import React from 'react';

const meta: Meta<typeof FileUpload> = {
  title: 'Atoms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'dashed',
        'subtle',
        'bordered',
        'glassmorphic',
        'gradient',
        'glow',
        'dark',
        'compact',
        'accent',
      ],
    },
    multiple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    variant: 'default',
    multiple: true,
    title: 'Click or drag files here to upload',
    description: 'Supports PNG, JPG, PDF up to 10MB',
  },
};

export const GradientDropzone: Story = {
  args: {
    variant: 'gradient',
    multiple: true,
    title: 'Upload Media Artifacts',
    description: 'High-resolution assets',
  },
};
