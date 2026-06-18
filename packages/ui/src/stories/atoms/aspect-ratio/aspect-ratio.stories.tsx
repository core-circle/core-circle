import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '../../../components/atoms/aspect-ratio/aspect-ratio';
import React from 'react';

const meta: Meta<typeof AspectRatio> = {
  title: 'Atoms/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcd57f48a4?w=800&dpr=2&q=80"
        alt="Drew Beamer"
        className="object-cover w-full h-full"
      />
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <div className="flex items-center justify-center w-full h-full bg-core-circle-primary/10 text-core-circle-primary font-bold">
        1:1 Ratio
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args} />
    </div>
  ),
};

export const CustomRatio: Story = {
  args: {
    ratio: 21 / 9,
    children: (
      <div className="flex items-center justify-center w-full h-full bg-core-circle-secondary/10 text-core-circle-secondary font-bold text-2xl">
        Cinematic (21:9)
      </div>
    ),
  },
};
