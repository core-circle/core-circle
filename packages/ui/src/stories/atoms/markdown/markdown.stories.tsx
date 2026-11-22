import type { Meta, StoryObj } from '@storybook/react';
import { Markdown } from '../../../components/atoms/markdown/markdown';

const sampleMarkdown = `# CoreCircle Design Monorepo

Welcome to **CoreCircle**, the modern accessible design system.

## Key Primitives
- 33 foundational **Atoms**
- Zero-dependency SVG graphics
- Tailwind CSS design tokens

> "The details are not the details. They make the design." - Charles Eames

### Quick Start Example
\`\`\`bash
npm install @core-circle/ui
\`\`\`

Read the [Full Documentation](https://corecircle.io) to learn more.`;

const meta: Meta<typeof Markdown> = {
  title: 'Atoms/Markdown',
  component: Markdown,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['default', 'card', 'prose'] },
    sanitize: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    content: sampleMarkdown,
    variant: 'card',
  },
};

export const ProseVariant: Story = {
  args: {
    content: sampleMarkdown,
    variant: 'prose',
  },
};
