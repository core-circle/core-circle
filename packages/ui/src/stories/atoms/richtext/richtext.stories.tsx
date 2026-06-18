import type { Meta, StoryObj } from '@storybook/react';
import { RichText } from '../../../components/atoms/richtext/richtext';
import React from 'react';

const meta: Meta<typeof RichText> = {
  title: 'Atoms/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {
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
