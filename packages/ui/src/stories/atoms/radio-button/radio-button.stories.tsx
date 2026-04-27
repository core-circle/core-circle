import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../../../components/atoms/radio-button/radio-button';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Standard Radio',
    size: 'md',
    name: 'demo',
    value: '1',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'Solid Radio',
    size: 'md',
    name: 'demo',
    value: '2',
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <RadioButton name="group1" value="a" label="Option A" defaultChecked />
      <RadioButton name="group1" value="b" label="Option B" />
      <RadioButton name="group1" value="c" label="Option C" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton size="sm" label="Small Radio" name="s" />
      <RadioButton size="md" label="Medium Radio" name="m" />
      <RadioButton size="lg" label="Large Radio" name="l" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton label="Disabled Checked" disabled defaultChecked name="st" />
      <RadioButton label="Error State" error="Selection invalid" name="st" />
      <RadioButton label="With Helper" helperText="Choose wisely" name="st" />
    </div>
  ),
};
