import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../../../components/atoms/image/image';
import { AspectRatio } from '../../../components/atoms/aspect-ratio/aspect-ratio';
import React from 'react';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scaleDown'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    alt: 'Nature',
    width: 400,
    height: 250,
    rounded: 'md',
  },
};

export const Circle: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400',
    alt: 'Nature',
    width: 150,
    height: 150,
    rounded: 'full',
  },
};

export const ErrorState: Story = {
  args: {
    src: 'invalid-url',
    alt: 'Error',
    width: 300,
    height: 200,
    rounded: 'lg',
  },
};

export const WithAspectRatio: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16/9}>
        <Image 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" 
          rounded="xl" 
        />
      </AspectRatio>
    </div>
  ),
};
