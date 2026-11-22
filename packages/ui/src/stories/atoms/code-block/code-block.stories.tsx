import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '../../../components/atoms/code-block/code-block';

const sampleTsx = `import React from 'react';
import { Button } from '@core-circle/ui';

export const ActionCard = () => {
  return (
    <div className="p-4 border rounded-xl">
      <Button variant="primary">Submit Order</Button>
    </div>
  );
};`;

const meta: Meta<typeof CodeBlock> = {
  title: 'Atoms/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  argTypes: {
    language: { control: 'text' },
    filename: { control: 'text' },
    showLineNumbers: { control: 'boolean' },
    copyable: { control: 'boolean' },
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: {
    code: sampleTsx,
    language: 'tsx',
    filename: 'ActionCard.tsx',
    showLineNumbers: true,
    copyable: true,
  },
};

export const WithHighlightedLines: Story = {
  args: {
    code: sampleTsx,
    language: 'tsx',
    filename: 'ActionCard.tsx',
    highlightLines: [4, 7],
    showLineNumbers: true,
  },
};

export const TerminalBash: Story = {
  args: {
    code: `# Install CoreCircle component library
npm install @core-circle/ui @core-circle/theme
# Start developer studio
npx nx dev @core-circle/docs`,
    language: 'bash',
    filename: 'terminal.sh',
    showLineNumbers: false,
  },
};
