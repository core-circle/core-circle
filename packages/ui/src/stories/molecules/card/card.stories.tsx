import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../../components/molecules/card/card';
import { Button } from '../../../components/atoms/button/button';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'shadow', 'ghost', 'flat'],
    },
    rounded: {
      control: 'boolean',
    },
    hoverable: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header divider>
        <h3 className="font-bold">Card Title</h3>
        <Button variant="ghost" size="sm">Action</Button>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-slate-600">
          This is the main body content of the card. It uses the compound component pattern for maximum flexibility.
        </p>
      </Card.Body>
      <Card.Footer divider align="end">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save Changes</Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    variant: 'outline',
    fullWidth: false,
  },
};

export const ShadowCard: Story = {
  render: (args) => (
    <div className="p-10 bg-slate-50">
      <Card {...args} className="max-w-md">
        <Card.Body>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
              CC
            </div>
            <div>
              <h3 className="text-lg font-bold">Core Circle</h3>
              <p className="text-sm text-slate-500">Premium Component Library</p>
            </div>
            <p className="text-sm text-slate-600">
              Build stunning user interfaces in minutes with our collection of atomic components.
            </p>
          </div>
        </Card.Body>
        <Card.Footer align="between">
          <Button variant="ghost" size="sm">Learn More</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </Card.Footer>
      </Card>
    </div>
  ),
  args: {
    variant: 'shadow',
    hoverable: true,
  },
};

export const FlatCard: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <h4 className="font-semibold mb-2">Notification Settings</h4>
        <p className="text-xs text-slate-500">Manage how you receive alerts and updates from the platform.</p>
      </Card.Body>
    </Card>
  ),
  args: {
    variant: 'flat',
    fullWidth: false,
  },
};
