import type { Meta, StoryObj } from '@storybook/react';
import { RichText } from '../../../components/atoms/richtext/richtext';

const meta: Meta<typeof RichText> = {
  title: 'Atoms/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'card',
        'bordered',
        'floating',
        'glassmorphic',
        'gradient',
        'filled',
        'minimal',
        'ghost',
        'accent',
        'dark',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichText>;

const sampleContent = `
  <h1>Main Heading</h1>
  <p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and a <a href="#">link</a>.</p>
  <h2>Subheading</h2>
  <p>Here is a list of features:</p>
  <ul>
    <li>Fast performance</li>
    <li>Modern design</li>
    <li>Easy integration</li>
  </ul>
  <blockquote>
    "Core Circle has transformed how we build interfaces."
  </blockquote>
  <h3>Implementation</h3>
  <p>You can use inline code like <code>npm install @core-circle/ui</code> to get started.</p>
`;

export const Default: Story = {
  args: {
    content: sampleContent,
    variant: 'default',
    size: 'base',
  },
};

export const Card: Story = {
  args: {
    content: sampleContent,
    variant: 'card',
    size: 'base',
  },
};

export const Glassmorphic: Story = {
  args: {
    content: sampleContent,
    variant: 'glassmorphic',
    size: 'base',
  },
};

export const Gradient: Story = {
  args: {
    content: sampleContent,
    variant: 'gradient',
    size: 'base',
  },
};

export const Dark: Story = {
  args: {
    content: sampleContent,
    variant: 'dark',
    size: 'base',
  },
};

export const Accent: Story = {
  args: {
    content: sampleContent,
    variant: 'accent',
    size: 'base',
  },
};

export const Small: Story = {
  args: {
    content: sampleContent,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    content: sampleContent,
    size: 'lg',
  },
};
