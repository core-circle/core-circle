import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../../components/atoms/typography/typography';
import React from 'react';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
        'p', 'blockquote', 'code', 'lead', 
        'large', 'small', 'muted'
      ],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gradient', 'glow', 'accent', 'muted', 'white'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'p',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 
      'A platform built for a new era of content creation and collaboration. Core Circle empowers developers and designers to build beautiful interfaces with ease.',
  },
};

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
};

export const InlineCode: Story = {
  render: () => (
    <Typography>
      You can use the <Typography variant="code">Typography</Typography> component to style your text.
    </Typography>
  ),
};

export const LeadAndMuted: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="lead">This is a lead paragraph with larger text and subtle color.</Typography>
      <Typography variant="muted">This is a muted paragraph for less important information.</Typography>
    </div>
  ),
};
