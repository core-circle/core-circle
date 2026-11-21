import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../../components/atoms/textarea/textarea';
import { SquareEdit, Info } from '@core-circle/icons';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'material', 'material-animated', 'ghost', 'standard', 'filled', 'glassmorphic', 'floating', 'gradient', 'pill', 'accent', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    labelSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    labelWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Description',
    placeholder: 'Enter a detailed description...',
    fullWidth: true,
    rows: 4,
  },
};

export const Material: Story = {
  args: {
    variant: 'material',
    label: 'Biography',
    placeholder: 'Tell us about yourself...',
    fullWidth: true,
    rows: 4,
  },
};

export const MaterialAnimated: Story = {
  args: {
    variant: 'material-animated',
    label: 'Feedback',
    placeholder: 'How can we improve?',
    fullWidth: true,
    rows: 4,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'outline',
    label: 'Message',
    placeholder: 'Type your message here...',
    startIcon: <SquareEdit size={18} />,
    endIcon: <Info size={18} />,
    fullWidth: true,
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    variant: 'outline',
    label: 'Comment',
    defaultValue: 'Too short',
    error: 'Comment must be at least 10 characters long',
    fullWidth: true,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outline',
    label: 'Disabled Textarea',
    placeholder: 'You cannot type here',
    disabled: true,
    fullWidth: true,
    rows: 4,
  },
};

export const CustomResize: Story = {
  args: {
    variant: 'outline',
    label: 'Fixed Height',
    placeholder: 'I cannot be resized vertically',
    resize: 'none',
    fullWidth: true,
    rows: 4,
  },
};
